import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17 3.75h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 0 0 0 5.46l3.53 3.88a5.014 5.014 0 0 0 3.7 1.64H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5Zm-.47 10.19c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.94-1.94L11.59 15c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L12.47 12l-1.94-1.94a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.94 1.94L15.47 9c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L14.59 12l1.94 1.94Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17 21h-6.72c-1.62 0-3.17-.69-4.25-1.88L2.5 15.24a4.783 4.783 0 0 1 0-6.47l3.53-3.88A5.727 5.727 0 0 1 10.28 3H17c3.17 0 5.75 2.58 5.75 5.75v6.5c0 3.17-2.58 5.75-5.75 5.75ZM10.28 4.5c-1.19 0-2.34.51-3.14 1.39L3.6 9.78a3.301 3.301 0 0 0 0 4.45l3.53 3.88c.8.88 1.95 1.39 3.14 1.39H17a4.26 4.26 0 0 0 4.25-4.25v-6.5A4.26 4.26 0 0 0 17 4.5h-6.72Z" fill={color}></path><path d="M16 15.22c-.19 0-.38-.07-.53-.22l-4.94-4.95a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l4.94 4.95c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z" fill={color}></path><path d="M11.06 15.219c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l4.94-4.94c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4.94 4.94c-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M10.28 20.25H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 0 0 0 5.46l3.53 3.88a4.978 4.978 0 0 0 3.7 1.64Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round"><path d="m16 14.471-4.94-4.94M11.06 14.471 16 9.531"></path></g>
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

export const TagCross = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
