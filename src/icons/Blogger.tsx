import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M14 13.25h-4c-.41 0-.75.34-.75.75s.34.75.75.75h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM10 10.75h2c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2c-.41 0-.75.34-.75.75s.34.75.75.75z"></path><path fill={color} d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM18 15c0 2-1 3-3 3H9c-2 0-3-1-3-3V9c0-2 1-3 3-3h4c2 0 3 1 3 3v1c0 .55.45 1 1 1s1 .45 1 1v3z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15 18.75H9c-2.42 0-3.75-1.33-3.75-3.75V9c0-2.42 1.33-3.75 3.75-3.75h4c2.42 0 3.75 1.33 3.75 3.75v1c0 .14.11.25.25.25.96 0 1.75.79 1.75 1.75v3c0 2.42-1.33 3.75-3.75 3.75Zm-6-12c-1.58 0-2.25.67-2.25 2.25v6c0 1.58.67 2.25 2.25 2.25h6c1.58 0 2.25-.67 2.25-2.25v-3c0-.14-.11-.25-.25-.25-.96 0-1.75-.79-1.75-1.75V9c0-1.58-.67-2.25-2.25-2.25H9Z" fill={color}></path><path d="M12 10.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM14 14.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M6 9v6c0 2 1 3 3 3h6c2 0 3-1 3-3v-3c0-.55-.45-1-1-1s-1-.45-1-1V9c0-2-1-3-3-3H9C7 6 6 7 6 9Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path><path opacity=".4" d="M10 10h2M10 14h4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Blogger = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
