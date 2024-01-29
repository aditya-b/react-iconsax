import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12 2C6.48 2 2 6.15 2 11.26c0 2.9 1.44 5.48 3.68 7.18v1.85c0 .77.82 1.25 1.49.87l1.86-1.05c.94.27 1.93.41 2.96.41 5.52 0 10-4.15 10-9.26C22 6.15 17.52 2 12 2zm3.51 8.44l-2.5 2.99c-.16.19-.42.23-.63.11l-1.01-.59a.523.523 0 00-.37-.05l-2.01.49a.502.502 0 01-.5-.81l2.54-3.02c.15-.18.41-.23.62-.12l1.18.62a.5.5 0 00.36.04l1.82-.47c.46-.12.81.44.5.81z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M5.68 22.75a.743.743 0 0 1-.75-.75v-3.2c-2.35-1.91-3.68-4.63-3.68-7.54C1.25 5.74 6.07 1.25 12 1.25s10.75 4.49 10.75 10.01S17.93 21.27 12 21.27c-.97 0-1.93-.12-2.86-.36l-3.09 1.74c-.11.07-.24.1-.37.1Zm6.32-20c-5.1 0-9.25 3.82-9.25 8.51 0 2.56 1.23 4.96 3.39 6.58.19.14.3.36.3.6v2.28l2.24-1.26c.17-.1.38-.12.57-.07.89.25 1.82.38 2.75.38 5.1 0 9.25-3.82 9.25-8.51 0-4.69-4.15-8.51-9.25-8.51Z" fill={color}></path><path d="M7.5 14.5c-.25 0-.5-.13-.64-.35a.752.752 0 0 1 .06-.88l3.78-4.5c.23-.27.61-.35.92-.18l1.45.77 3.23-.83a.752.752 0 0 1 .76 1.21l-3.76 4.5c-.23.28-.64.35-.95.17l-1.29-.75-3.4.83c-.04 0-.1.01-.16.01Zm3.69-2.4c.13 0 .26.03.38.1l1 .58 1.86-2.23-1.26.32a.78.78 0 0 1-.54-.06l-1.17-.62-1.92 2.28 1.46-.36c.07 0 .13-.01.19-.01Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M5.68 18.44V22l3.36-1.89c.94.27 1.93.41 2.96.41 5.52 0 10-4.15 10-9.26C22 6.15 17.52 2 12 2S2 6.15 2 11.26c0 2.89 1.44 5.48 3.68 7.18Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m11.28 9.25-3.78 4.5 3.69-.9 1.55.9 3.76-4.5-3.51.9-1.71-.9Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Messenger = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
