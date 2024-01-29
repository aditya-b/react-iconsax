import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.03 22h-7.04a.749.749 0 1 1 0-1.5h7.04a.749.749 0 1 1 0 1.5ZM13.64 16.69c.39.39.39 1.02 0 1.42l-2.98 2.98a3.027 3.027 0 0 1-4.07.18c-.07-.06-.13-.12-.19-.18l-.87-.87-1.79-1.79-.86-.86c-.07-.07-.13-.14-.19-.21a3.01 3.01 0 0 1 .19-4.04l2.98-2.98a.996.996 0 0 1 1.41 0l6.37 6.35ZM21.12 10.641l-5 5a.996.996 0 0 1-1.41 0l-6.37-6.35c-.39-.39-.39-1.02 0-1.42l5-4.99a3.024 3.024 0 0 1 4.26 0l3.52 3.51a3.012 3.012 0 0 1 0 4.25Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21 22.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M8.54 22.71c-1 0-1.95-.39-2.65-1.1L2.38 18.1a3.754 3.754 0 0 1 0-5.3L12.81 2.37c1.41-1.41 3.89-1.41 5.3 0l3.51 3.51a3.754 3.754 0 0 1 0 5.3L11.19 21.61c-.7.72-1.64 1.1-2.65 1.1Zm-5.1-5.66 3.51 3.51c.85.85 2.34.85 3.18 0l10.43-10.43c.88-.88.88-2.3 0-3.18l-3.51-3.51c-.84-.84-2.33-.85-3.18 0L3.44 13.87c-.88.87-.88 2.3 0 3.18Z" fill={color}></path><path d="M14.87 17.63c-.19 0-.38-.07-.53-.22L6.59 9.66a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l7.75 7.75c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z" fill={color}></path><path d="M3.521 18.411c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.66-5.66c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.66 5.66c-.15.15-.34.22-.53.22ZM6.34 21.24c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.66-5.66c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.66 5.66a.75.75 0 0 1-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9 22h12M2.91 17.579l3.51 3.51a3 3 0 0 0 4.24 0l10.43-10.43a3 3 0 0 0 0-4.24l-3.51-3.51a3 3 0 0 0-4.24 0L2.91 13.339a3 3 0 0 0 0 4.24Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m7.12 9.129 7.75 7.75M3.52 17.66 9.17 12M6.34 20.488l5.66-5.66"></path></g>
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

export const Eraser = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
