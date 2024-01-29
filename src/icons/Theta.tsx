import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M14 9.75h-1.25V8.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.25H10c-.41 0-.75.34-.75.75s.34.75.75.75h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM14 12.75h-4c-.41 0-.75.34-.75.75s.34.75.75.75h1.25v1.25c0 .41.34.75.75.75s.75-.34.75-.75v-1.25H14c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"></path><path fill={color} d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM17 16.15c0 1.02-.83 1.85-1.85 1.85h-6.3C7.83 18 7 17.17 7 16.15v-8.3C7 6.83 7.83 6 8.85 6h6.3C16.17 6 17 6.83 17 7.85v8.3z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15.15 18.75h-6.3c-1.43 0-2.6-1.17-2.6-2.6v-8.3c0-1.43 1.17-2.6 2.6-2.6h6.3c1.43 0 2.6 1.17 2.6 2.6v8.3c0 1.43-1.17 2.6-2.6 2.6Zm-6.3-12c-.61 0-1.1.49-1.1 1.1v8.3c0 .61.49 1.1 1.1 1.1h6.3c.61 0 1.1-.49 1.1-1.1v-8.3c0-.61-.49-1.1-1.1-1.1h-6.3Z" fill={color}></path><path d="M12 11.25c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M14 11.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 16.25c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M14 14.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="M15.15 18h-6.3C7.83 18 7 17.17 7 16.15v-8.3C7 6.83 7.83 6 8.85 6h6.3C16.17 6 17 6.83 17 7.85v8.3c0 1.02-.83 1.85-1.85 1.85ZM12 8.5v2M10 10.5h4M12 15.5v-2M10 13.5h4"></path></g><path d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Theta = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
