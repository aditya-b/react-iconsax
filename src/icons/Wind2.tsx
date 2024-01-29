import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 13.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5a.751.751 0 1 1-.77-1.29l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37ZM7 6.848c-1 0-2-.27-2.89-.8l-2.5-1.5a.75.75 0 0 1-.25-1.03c.21-.36.67-.47 1.03-.26l2.5 1.5c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0l2.5-1.5a.751.751 0 1 1 .77 1.29l-2.5 1.5a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0-.89.53-1.89.8-2.89.8ZM22 20.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5a.751.751 0 1 1-.77-1.29l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 13.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5c-.36.21-.82.1-1.03-.26-.21-.36-.1-.82.26-1.03l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37ZM6.998 6.848c-1 0-2-.27-2.89-.8l-2.5-1.5a.749.749 0 0 1-.26-1.03c.21-.35.67-.47 1.03-.26l2.5 1.5c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0l2.5-1.5a.751.751 0 1 1 .77 1.29l-2.5 1.5a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0-.88.53-1.88.8-2.88.8ZM22 20.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5c-.36.21-.82.1-1.03-.26-.21-.36-.1-.82.26-1.03l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="m2 13.1 2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="m2 3.898 2.5 1.5c1.54.92 3.46.92 5 0s3.46-.92 5 0 3.46.92 5 0l2.5-1.5M2 20.1l2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Wind2 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
