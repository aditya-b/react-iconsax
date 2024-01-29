import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20.5 16v2.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15H19.5c.55 0 1 .45 1 1ZM15.5 2h-7c-4 0-5 1-5 5v7.58c.76-.67 1.76-1.08 2.85-1.08H19.5c.55 0 1-.45 1-1V7c0-4-1-5-5-5ZM13 10.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Zm3-3.5H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M3.5 18.75c-.41 0-.75-.34-.75-.75V7c0-4.41 1.34-5.75 5.75-5.75h7c4.41 0 5.75 1.34 5.75 5.75v10c0 .16 0 .31-.01.47-.03.41-.4.73-.8.7a.757.757 0 0 1-.7-.8c.01-.12.01-.25.01-.37V7c0-3.57-.67-4.25-4.25-4.25h-7c-3.58 0-4.25.68-4.25 4.25v11c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M17 22.75H7a4.26 4.26 0 0 1-4.25-4.25v-.65c0-1.99 1.62-3.6 3.6-3.6H20.5c.41 0 .75.34.75.75v3.5A4.26 4.26 0 0 1 17 22.75Zm-10.65-7a2.1 2.1 0 0 0-2.1 2.1v.65c0 1.52 1.23 2.75 2.75 2.75h10c1.52 0 2.75-1.23 2.75-2.75v-2.75H6.35ZM16 7.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75ZM13 11.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5v10c0 .14 0 .28-.01.42" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M8 7h8M8 10.5h5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Book = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
