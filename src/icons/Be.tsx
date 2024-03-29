import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M9 18.75H3c-.96 0-1.75-.79-1.75-1.75V7c0-.96.79-1.75 1.75-1.75h5c2.07 0 3.75 1.68 3.75 3.75 0 1.03-.42 1.96-1.09 2.64 1.24.61 2.09 1.89 2.09 3.36 0 2.07-1.68 3.75-3.75 3.75zm-6.25-6V17c0 .14.11.25.25.25h6c1.24 0 2.25-1.01 2.25-2.25S10.24 12.75 9 12.75H2.75zm0-1.5H8c1.24 0 2.25-1.01 2.25-2.25S9.24 6.75 8 6.75H3c-.14 0-.25.11-.25.25v4.25zM19.67 18.75H18c-2.62 0-4.75-2.13-4.75-4.75S15.38 9.25 18 9.25s4.75 2.13 4.75 4.75c0 .41-.34.75-.75.75h-7.16c.34 1.43 1.63 2.5 3.16 2.5h1.67c.41 0 .75.34.75.75s-.34.75-.75.75zm-4.83-5.5h6.33a3.258 3.258 0 00-3.16-2.5 3.27 3.27 0 00-3.17 2.5zM19.5 8.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9 18.75H3c-.96 0-1.75-.79-1.75-1.75V7c0-.96.79-1.75 1.75-1.75h5c2.07 0 3.75 1.68 3.75 3.75 0 1.03-.42 1.96-1.09 2.64 1.24.61 2.09 1.89 2.09 3.36 0 2.07-1.68 3.75-3.75 3.75Zm-6.25-6V17c0 .14.11.25.25.25h6c1.24 0 2.25-1.01 2.25-2.25S10.24 12.75 9 12.75H2.75Zm0-1.5H8c1.24 0 2.25-1.01 2.25-2.25S9.24 6.75 8 6.75H3c-.14 0-.25.11-.25.25v4.25ZM19.67 18.75H18c-2.62 0-4.75-2.13-4.75-4.75S15.38 9.25 18 9.25s4.75 2.13 4.75 4.75c0 .41-.34.75-.75.75h-7.16c.34 1.43 1.63 2.5 3.16 2.5h1.67c.41 0 .75.34.75.75s-.34.75-.75.75Zm-4.83-5.5h6.33a3.258 3.258 0 0 0-3.16-2.5 3.27 3.27 0 0 0-3.17 2.5ZM19.5 8.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2 12h7c1.66 0 3 1.34 3 3s-1.34 3-3 3H3c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h5c1.66 0 3 1.34 3 3s-1.34 3-3 3H2Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path><path opacity=".4" d="M14 14h8c0-2.21-1.79-4-4-4s-4 1.79-4 4Zm0 0c0 2.21 1.79 4 4 4h1.67M19.5 7.5h-3" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Be = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
