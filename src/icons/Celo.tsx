import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M9 22A7 7 0 109 8a7 7 0 000 14z"></path><path fill={color} d="M22 9a6.97 6.97 0 01-3.86 6.25c-.31.16-.66-.09-.69-.43a8.959 8.959 0 00-8.27-8.27c-.35-.03-.59-.38-.43-.69A6.97 6.97 0 0115 2c3.87 0 7 3.13 7 7z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15 16.75c-4.27 0-7.75-3.48-7.75-7.75S10.73 1.25 15 1.25 22.75 4.73 22.75 9s-3.48 7.75-7.75 7.75Zm0-14c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25Z" fill={color}></path><path d="M9 22.75c-4.27 0-7.75-3.48-7.75-7.75S4.73 7.25 9 7.25s7.75 3.48 7.75 7.75-3.48 7.75-7.75 7.75Zm0-14c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25S12.45 8.75 9 8.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path>
</>)

const chooseVariant = (variant: ISaxIconProps['variant'], color: ISaxIconProps['color']) => {
  switch (variant) {

    case 'Bold':
      return <Bold color={color} />;

    case 'Outline':
      return <Outline color={color} />;

    case 'TwoTone':
      return <TwoTone color={color} />;

    default:
      return <Outline color={color} />;
  }
};

export const Celo = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
  const {
    variant = "Outline",
    color = "inherit",
    size = 14,
    ...rest
  } = props;

  return <svg {...rest} xmlns="http://www.w3.org/2000/svg" ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="none">
    {chooseVariant(variant, color)}
  </svg>;
});
