import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M5.65 7.65l-2.8-2.8A.5.5 0 013.2 4h3.59c.13 0 .26.05.35.15l5 5a.5.5 0 01-.35.85H8.5C6.57 10 5 11.57 5 13.5S6.57 17 8.5 17H10l2.15 2.15a.5.5 0 01-.35.85H8.51A6.5 6.5 0 015.48 7.75l.17-.1z"></path><path fill={color} d="M18.35 16.35l2.8 2.8a.5.5 0 01-.35.85h-3.59a.47.47 0 01-.35-.15l-5-5a.5.5 0 01.35-.85h3.29c1.93 0 3.5-1.57 3.5-3.5S17.43 7 15.5 7H14l-2.15-2.15A.5.5 0 0112.2 4h3.29a6.5 6.5 0 013.03 12.25l-.17.1z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13 20.75H8.5c-4 0-7.25-3.25-7.25-7.25 0-2.43 1.2-4.66 3.19-6L1.47 4.53A.751.751 0 0 1 2 3.25h5c.2 0 .39.08.53.22l6 6a.751.751 0 0 1-.53 1.28H8.5c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75H10c.2 0 .39.08.53.22l3 3a.751.751 0 0 1-.53 1.28Zm-9.19-16 2.37 2.37c.17.17.25.41.21.65a.76.76 0 0 1-.4.55l-.19.1a5.733 5.733 0 0 0-3.06 5.08c0 3.17 2.58 5.75 5.75 5.75h2.69l-1.5-1.5H8.49a4.26 4.26 0 0 1-4.25-4.25 4.26 4.26 0 0 1 4.25-4.25h2.69l-4.5-4.5H3.81Z" fill={color}></path><path d="M22 20.75h-5a.75.75 0 0 1-.53-.22l-6-6a.751.751 0 0 1 .53-1.28h4.5c1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75H14a.75.75 0 0 1-.53-.22l-3-3A.751.751 0 0 1 11 3.25h4.5c4 0 7.25 3.25 7.25 7.25 0 2.43-1.2 4.66-3.19 6l2.97 2.97a.751.751 0 0 1-.53 1.28Zm-4.69-1.5h2.88l-2.37-2.37a.744.744 0 0 1-.21-.65.76.76 0 0 1 .4-.55l.19-.1a5.733 5.733 0 0 0 3.06-5.08c0-3.17-2.58-5.75-5.75-5.75h-2.69l1.5 1.5h1.19a4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25h-2.69l4.49 4.5Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M5.65 7.65 2 4h5l6 6H8.5C6.57 10 5 11.57 5 13.5S6.57 17 8.5 17H10l3 3H8.5A6.5 6.5 0 0 1 5.47 7.75l.18-.1Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M18.35 16.35 22 20h-5l-6-6h4.5c1.93 0 3.5-1.57 3.5-3.5S17.43 7 15.5 7H14l-3-3h4.5a6.5 6.5 0 0 1 3.03 12.25l-.18.1Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Decred = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
