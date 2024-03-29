import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 21.251h-1.25v-10.25c0-2.42-1.33-3.75-3.75-3.75h-4.25v-1.23c.58.14 1.16.22 1.75.22.94 0 1.88-.18 2.78-.54.28-.11.47-.39.47-.7v-3c0-.25-.12-.48-.33-.62a.76.76 0 0 0-.7-.08c-1.43.57-3.01.57-4.44 0a.76.76 0 0 0-.7.08c-.21.14-.33.37-.33.62v5.25H7c-2.42 0-3.75 1.33-3.75 3.75v10.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm-14.76 0H4.75v-8.5h2.49v8.5Zm4 0h-2.5v-8.5h2.5v8.5Zm4 0h-2.5v-8.5h2.5v8.5Zm4.01 0h-2.51v-8.5h2.51v8.5Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 6.23c-.94 0-1.88-.18-2.78-.54a.753.753 0 0 1-.47-.7v-3c0-.25.12-.48.33-.62a.76.76 0 0 1 .7-.08c1.43.57 3.01.57 4.44 0a.76.76 0 0 1 .7.08c.21.14.33.37.33.62v3c0 .31-.19.58-.47.7-.9.36-1.84.54-2.78.54Zm-1.75-1.76c1.14.35 2.36.35 3.5 0V3.02c-1.15.28-2.35.28-3.5 0v1.45Z" fill={color}></path><path d="M12 8.75c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M20 22.75H4c-.41 0-.75-.34-.75-.75V11c0-2.42 1.33-3.75 3.75-3.75h10c2.42 0 3.75 1.33 3.75 3.75v11c0 .41-.34.75-.75.75Zm-15.25-1.5h14.5V11c0-1.58-.67-2.25-2.25-2.25H7c-1.58 0-2.25.67-2.25 2.25v10.25Z" fill={color}></path><path d="M19.42 12.75H4.58c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.84c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M8.74 12h-1.5v10h1.5V12ZM12.74 12h-1.5v10h1.5V12ZM16.74 12h-1.5v10h1.5V12Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2 22h20M12 2c1.6.64 3.4.64 5 0v3c-1.6.64-3.4.64-5 0V2ZM12 5v3M17 8H7c-2 0-3 1-3 3v11h16V11c0-2-1-3-3-3ZM4.58 12h14.84" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M7.99 12v10M11.99 12v10M15.99 12v10" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"></path>
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

export const Courthouse = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
