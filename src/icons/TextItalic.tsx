import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81c-.2 0-.4.01-.59.03C3.94 2.24 2 4.37 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03.19.01.39.02.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68Zm-5.08 3.38h-1.95l-2.24 8.97h1.84c.41 0 .75.34.75.75s-.34.75-.75.75H8.13c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2l2.24-8.97h-1.89c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.38c.41 0 .75.34.75.75s-.33.75-.74.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M18.879 3.75h-9.26c-.41 0-.74-.34-.74-.75s.34-.75.75-.75h9.25c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.381 21.75h-9.26c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.25c.41 0 .75.34.75.75s-.33.75-.74.75Z" fill={color}></path><path d="M9.748 21.748c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91l4.5-18a.75.75 0 1 1 1.46.36l-4.5 18c-.09.34-.39.57-.73.57Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9.621 3h9.25M5.121 21h9.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m14.25 3-4.5 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const TextItalic = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
