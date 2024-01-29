import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22.19 2.21a.715.715 0 0 0-.4-.4.753.753 0 0 0-.29-.06H15c-.41 0-.75.34-.75.75s.34.75.75.75h4.69l-4.51 4.52h-.01A7.673 7.673 0 0 0 10.25 6 7.75 7.75 0 1 0 18 13.75c0-1.87-.66-3.58-1.77-4.92l4.52-4.52V9c0 .41.34.75.75.75s.75-.34.75-.75V2.5c0-.1-.02-.19-.06-.29Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M10.25 22.25c-4.69 0-8.5-3.81-8.5-8.5 0-4.69 3.81-8.5 8.5-8.5 4.69 0 8.5 3.81 8.5 8.5 0 4.69-3.81 8.5-8.5 8.5Zm0-15.5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Z" fill={color}></path><path d="M16 8.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.5-5.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.5 5.5c-.15.15-.34.22-.53.22Z" fill={color}></path><path d="M21.5 9.75c-.41 0-.75-.34-.75-.75V3.25H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.5c.41 0 .75.34.75.75V9c0 .41-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M10.25 21.5a7.75 7.75 0 1 0 0-15.5 7.75 7.75 0 0 0 0 15.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2.5 16 8M15 2.5h6.5V9"></path></g>
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

export const Man = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
