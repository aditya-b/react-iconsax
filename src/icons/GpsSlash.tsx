import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22.75 11.999c0 .41-.34.75-.75.75h-2.04c-.35 3.81-3.4 6.86-7.21 7.21v2.04c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.04c-.61-.05-1.21-.18-1.78-.37-.71-.24-.93-1.14-.4-1.67l2.81-2.81c.04.01.07.01.11.01 1.73 0 3.12-1.39 3.12-3.12 0-.04 0-.07-.01-.11l2.81-2.81c.53-.53 1.43-.31 1.67.4.19.57.32 1.16.37 1.78H22c.41-.01.75.33.75.74ZM21.77 2.23c-.3-.3-.79-.3-1.09 0l-3.61 3.61c-1.2-.99-2.7-1.64-4.33-1.79V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.04c-3.81.36-6.86 3.4-7.21 7.21H2c-.41 0-.75.34-.75.75s.34.75.75.75h2.04c.15 1.63.8 3.13 1.79 4.33l-3.61 3.61c-.3.3-.3.79 0 1.09.16.14.35.22.55.22.2 0 .39-.08.54-.23L21.77 3.31c.31-.3.31-.78 0-1.08ZM8.88 12c0-1.72 1.4-3.12 3.12-3.12.58 0 1.12.17 1.58.45l-4.25 4.25c-.28-.46-.45-1-.45-1.58Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 20.248c-1.15 0-2.26-.23-3.3-.69a.76.76 0 0 1-.39-.99.76.76 0 0 1 .99-.39c.85.37 1.76.56 2.7.56 3.72 0 6.75-3.03 6.75-6.75 0-.94-.19-1.85-.56-2.7a.751.751 0 1 1 1.38-.6c.46 1.04.69 2.15.69 3.3-.01 4.56-3.71 8.26-8.26 8.26ZM6.58 17.94c-.2 0-.39-.08-.54-.23A8.217 8.217 0 0 1 3.75 12c0-4.55 3.7-8.25 8.25-8.25 2.15 0 4.18.82 5.73 2.31.3.29.31.76.02 1.06-.29.3-.76.31-1.06.02A6.729 6.729 0 0 0 12 5.25c-3.72 0-6.75 3.03-6.75 6.75 0 1.75.67 3.41 1.88 4.67.29.3.28.77-.02 1.06-.15.14-.34.21-.53.21Z" fill={color}></path><path d="M12 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM4 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM22 12.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM9.88 14.87c-.19 0-.38-.07-.53-.22-.71-.71-1.1-1.65-1.1-2.65 0-2.07 1.68-3.75 3.75-3.75 1 0 1.94.39 2.65 1.1.29.29.29.77 0 1.06l-4.24 4.24c-.15.15-.34.22-.53.22ZM12 9.75c-1.24 0-2.25 1.01-2.25 2.25 0 .34.08.67.22.97l3-3c-.3-.14-.63-.22-.97-.22Z" fill={color}></path><path d="M2.001 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.21 6.6A7.503 7.503 0 006.58 17.19M12 4V2M4 12H2"></path><g opacity=".4">
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 18.88c.92.4 1.93.62 3 .62 4.14 0 7.5-3.36 7.5-7.5 0-1.07-.22-2.08-.62-3M12 20v2M20 12h2"></path>
  </g><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.12 9.88l-4.24 4.24a2.996 2.996 0 114.24-4.24zM22 2L2 22"></path>
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

export const GpsSlash = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
