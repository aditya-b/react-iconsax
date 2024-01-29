import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.3 7.58h-5.58c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h5.58c.39 0 .7.31.7.7 0 .39-.31.7-.7.7ZM6.42 7.58H2.7c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h3.72c.39 0 .7.31.7.7 0 .39-.32.7-.7.7Z" fill={color}></path><path d="M10.14 10.83a3.95 3.95 0 1 0 0-7.9 3.95 3.95 0 0 0 0 7.9ZM21.3 17.81h-3.72c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h3.72c.39 0 .7.31.7.7 0 .39-.31.7-.7.7ZM8.28 17.81H2.7c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h5.58c.39 0 .7.31.7.7 0 .39-.32.7-.7.7Z" fill={color}></path><path d="M13.86 21.072a3.95 3.95 0 1 0 0-7.9 3.95 3.95 0 0 0 0 7.9Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 7.25h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM6 7.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M10 10.75A4.26 4.26 0 0 1 5.75 6.5 4.26 4.26 0 0 1 10 2.25a4.26 4.26 0 0 1 4.25 4.25A4.26 4.26 0 0 1 10 10.75Zm0-7c-1.52 0-2.75 1.23-2.75 2.75S8.48 9.25 10 9.25s2.75-1.23 2.75-2.75S11.52 3.75 10 3.75ZM22 18.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 18.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M14 21.75a4.26 4.26 0 0 1-4.25-4.25A4.26 4.26 0 0 1 14 13.25a4.26 4.26 0 0 1 4.25 4.25A4.26 4.26 0 0 1 14 21.75Zm0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 6.5h-6" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6.5H2M10 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path></g><path d="M8 17.5H2" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17.5h-4M14 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path></g>
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

export const Setting4 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
