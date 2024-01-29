import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12c0-1.49.3-2.92.89-4.28a.76.76 0 01.99-.39c.38.17.55.61.39.99-.5 1.16-.76 2.4-.76 3.68 0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25c-1.29 0-2.55.26-3.72.78a.75.75 0 01-.61-1.37c1.37-.6 2.82-.91 4.33-.91 5.93 0 10.75 4.82 10.75 10.75S17.93 22.75 12 22.75z"></path><path fill={color} d="M16 15.25V12c0-2.35-1.9-4.25-4.25-4.25S7.5 9.65 7.5 12s1.9 4.25 4.25 4.25H15c.55 0 1-.45 1-1zM5 6.881a1.88 1.88 0 100-3.76 1.88 1.88 0 000 3.76z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12c0-1.49.3-2.92.89-4.28a.76.76 0 0 1 .99-.39c.38.17.55.61.39.99-.5 1.16-.76 2.4-.76 3.68 0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25c-1.29 0-2.55.26-3.72.78a.75.75 0 0 1-.61-1.37c1.37-.6 2.82-.91 4.33-.91 5.93 0 10.75 4.82 10.75 10.75S17.93 22.75 12 22.75Z" fill={color}></path><path d="M16 17h-4.25c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5v4.25c0 .41-.34.75-.75.75Zm-4.25-8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5h3.5V12c0-1.93-1.57-3.5-3.5-3.5ZM5 7.25C3.76 7.25 2.75 6.24 2.75 5S3.76 2.75 5 2.75 7.25 3.76 7.25 5 6.24 7.25 5 7.25Zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M7.97 2.84C9.2 2.3 10.56 2 12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12c0-1.41.29-2.76.82-3.98" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M16 16.25V12c0-2.35-1.9-4.25-4.25-4.25S7.5 9.65 7.5 12s1.9 4.25 4.25 4.25H16ZM5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Siacoin = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
