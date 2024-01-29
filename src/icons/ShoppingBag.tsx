import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16 8.75c-.41 0-.75-.34-.75-.75V4.5c0-1.08-.67-1.75-1.75-1.75h-3c-1.08 0-1.75.67-1.75 1.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.5c0-1.91 1.34-3.25 3.25-3.25h3c1.91 0 3.25 1.34 3.25 3.25V8c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M8 17.78a.749.749 0 1 1 0-1.5h11.76c.3 0 .53-.26.5-.56l-.68-5.69C19.34 8.09 19 6.5 15.6 6.5H8.4c-3.4 0-3.74 1.59-3.97 3.53l-.9 7.5C3.24 19.99 4 22 7.51 22h8.98c3.16 0 4.09-1.63 4.04-3.75a.49.49 0 0 0-.5-.47H8Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.49 22.75H7.5c-1.72 0-3.01-.46-3.81-1.37-.8-.91-1.11-2.23-.9-3.94l.9-7.5c.26-2.21.82-4.19 4.72-4.19h7.2c3.89 0 4.45 1.98 4.72 4.19l.9 7.5c.2 1.71-.1 3.04-.9 3.94-.83.91-2.11 1.37-3.84 1.37ZM8.4 7.25c-2.88 0-3.02 1.14-3.23 2.86l-.9 7.5c-.15 1.27.03 2.2.54 2.77.51.57 1.41.86 2.69.86h8.99c1.28 0 2.18-.29 2.69-.86.51-.57.69-1.5.54-2.77l-.9-7.5c-.21-1.73-.34-2.86-3.23-2.86H8.4Z" fill={color}></path><path d="M16 8.75c-.41 0-.75-.34-.75-.75V4.5c0-1.08-.67-1.75-1.75-1.75h-3c-1.08 0-1.75.67-1.75 1.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.5c0-1.91 1.34-3.25 3.25-3.25h3c1.91 0 3.25 1.34 3.25 3.25V8c0 .41-.34.75-.75.75ZM20.41 17.781H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.41c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M8.4 6.5h7.2c3.4 0 3.74 1.59 3.97 3.53l.9 7.5C20.76 19.99 20 22 16.5 22H7.51C4 22 3.24 19.99 3.54 17.53l.9-7.5C4.66 8.09 5 6.5 8.4 6.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M8 8V4.5C8 3 9 2 10.5 2h3C15 2 16 3 16 4.5V8M20.41 17.031H8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const ShoppingBag = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
