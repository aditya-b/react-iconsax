import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M20.26 5.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5zM3.76 21.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5zM6.03 16.4c-.25 0-.5-.13-.64-.36A7.754 7.754 0 014.25 12c0-4.27 3.48-7.75 7.75-7.75 1.41 0 2.79.38 3.99 1.1.35.21.47.67.26 1.03-.21.35-.67.47-1.03.26a6.26 6.26 0 00-3.21-.89c-3.45 0-6.25 2.8-6.25 6.25 0 1.15.32 2.28.92 3.26.22.35.11.81-.25 1.03-.13.08-.27.11-.4.11zM12 19.75c-1.44 0-2.84-.4-4.05-1.14a.76.76 0 01-.25-1.03.76.76 0 011.03-.25A6.252 6.252 0 0018.25 12c0-1.15-.32-2.28-.92-3.26a.742.742 0 01.25-1.03.75.75 0 011.03.25 7.789 7.789 0 011.14 4.05c0 4.26-3.48 7.74-7.75 7.74z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20.26 5.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5ZM3.76 21.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5ZM6.03 16.4c-.25 0-.5-.13-.64-.36A7.754 7.754 0 0 1 4.25 12c0-4.27 3.48-7.75 7.75-7.75 1.41 0 2.79.38 3.99 1.1.35.21.47.67.26 1.03-.21.35-.67.47-1.03.26a6.26 6.26 0 0 0-3.21-.89c-3.45 0-6.25 2.8-6.25 6.25 0 1.15.32 2.28.92 3.26.22.35.11.81-.25 1.03-.13.08-.27.11-.4.11ZM12 19.75c-1.44 0-2.84-.4-4.05-1.14a.76.76 0 0 1-.25-1.03.76.76 0 0 1 1.03-.25A6.252 6.252 0 0 0 18.25 12c0-1.15-.32-2.28-.92-3.26a.742.742 0 0 1 .25-1.03.75.75 0 0 1 1.03.25 7.789 7.789 0 0 1 1.14 4.05c0 4.26-3.48 7.74-7.75 7.74Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15.6 6a6.995 6.995 0 0 0-9.57 9.65M8.34 17.972c1.07.65 2.32 1.03 3.66 1.03a6.995 6.995 0 0 0 5.97-10.65" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M20.2 3.8h.1M3.7 20.2h.1" stroke={color} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Icon = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
