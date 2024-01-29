import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C16.75 4.13 14.62 2 12 2ZM17.08 14.16c-2.79-1.86-7.34-1.86-10.15 0-1.27.84-1.97 1.99-1.97 3.22 0 1.23.7 2.37 1.96 3.21C8.32 21.53 10.16 22 12 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.22-.7-2.37-1.96-3.2Zm-2.75 2.4-2.52 2.52a.62.62 0 0 1-.44.18c-.16 0-.32-.07-.44-.18l-1.26-1.26a.628.628 0 0 1 0-.88c.24-.24.64-.24.88 0l.82.82 2.08-2.08c.24-.24.64-.24.88 0 .25.24.25.64 0 .88Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15.959 21.319c-.19 0-.38-.07-.53-.22l-1.52-1.52a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.99.99 2.51-2.51c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.04 3.04c-.15.15-.34.22-.53.22ZM12.159 11.62h-.08a.543.543 0 0 0-.18 0c-2.9-.09-5.09-2.37-5.09-5.18-.01-1.38.53-2.68 1.51-3.66a5.16 5.16 0 0 1 3.67-1.53c2.86 0 5.19 2.33 5.19 5.19 0 2.81-2.19 5.08-4.99 5.18h-.03Zm-.17-8.87c-.99 0-1.91.39-2.61 1.08-.69.7-1.07 1.62-1.07 2.6 0 2 1.56 3.62 3.55 3.68.06-.01.19-.01.32 0 1.97-.09 3.5-1.7 3.5-3.68 0-2.02-1.66-3.68-3.69-3.68Z" fill={color}></path><path d="M11.99 22.56c-2.04 0-3.97-.53-5.43-1.51-1.39-.93-2.15-2.2-2.15-3.57 0-1.37.77-2.63 2.15-3.55 2.99-2 7.85-2 10.84 0 .34.23.44.7.21 1.04-.23.35-.7.44-1.04.21-2.49-1.66-6.69-1.66-9.18 0-.96.64-1.48 1.45-1.48 2.3 0 .85.52 1.68 1.48 2.32 1.21.81 2.84 1.25 4.59 1.25a.755.755 0 0 1 .01 1.51Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="m14.441 19.051 1.52 1.52 3.04-3.04M12.159 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43A4.428 4.428 0 0 1 11.989 2c2.45 0 4.44 1.99 4.44 4.44 0 2.4-1.9 4.35-4.27 4.43Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.99 21.81c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const ProfileTick = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
