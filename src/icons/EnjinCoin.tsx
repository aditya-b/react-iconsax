import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.75 9.25c.41 0 .75.34.75.75s-.34.75-.75.75H8.5V13c0 1.24 1.01 2.25 2.25 2.25h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5C8.68 16.75 7 15.07 7 13v-2c0-2.07 1.68-3.75 3.75-3.75h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5C9.51 8.75 8.5 9.76 8.5 11v.25h7.25z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill={color}></path><path d="M15.75 16.75h-5C8.68 16.75 7 15.07 7 13v-2c0-2.07 1.68-3.75 3.75-3.75h5c.41 0 .75.34.75.75s-.34.75-.75.75h-5C9.51 8.75 8.5 9.76 8.5 11v2c0 1.24 1.01 2.25 2.25 2.25h5c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M15.75 12.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="M15.75 8h-5c-1.65 0-3 1.35-3 3v2c0 1.65 1.35 3 3 3h5M15.75 12h-8"></path></g>
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

export const EnjinCoin = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
