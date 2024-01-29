import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20.95 4.129 4.13 20.949c.95.69 2.19 1.05 3.68 1.05h8.38c3.64 0 5.81-2.17 5.81-5.81v-8.38c0-1.49-.36-2.73-1.05-3.68Zm-2.45 12.12h-1.69v1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75H13.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.81v-1.75c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.69c.41 0 .75.34.75.75s-.34.75-.75.75ZM16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68L19.87 3.05C18.92 2.36 17.68 2 16.19 2ZM10.5 8.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M14.97 22.75h-6c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.31 7.75-7.75 7.75Zm-6-20C4.36 2.75 2.72 4.39 2.72 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25h-6Z" fill={color}></path><path d="M3.27 20.451c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l16.45-16.45c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L3.8 20.231a.71.71 0 0 1-.53.22ZM16.06 18.75c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M18.5 16.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75ZM10.5 8.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7ZM19.72 3.25 3.27 19.7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="M16.06 18v-5M18.5 15.5h-5"></path></g><path opacity=".4" d="M10.5 7.5h-5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Computing = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
