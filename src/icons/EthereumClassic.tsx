import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M6.9 9.101l4.77-2.12c.21-.09.45-.09.65 0l4.77 2.12c.42.19.81-.32.52-.68l-5-6.11c-.34-.42-.9-.42-1.24 0l-5 6.11c-.28.36.11.87.53.68zM6.9 14.9l4.78 2.12c.21.09.45.09.65 0l4.78-2.12c.42-.19.81.32.52.68l-5 6.11c-.34.42-.9.42-1.24 0l-5-6.11c-.3-.36.08-.87.51-.68zM11.78 9.49l-4.13 2.06c-.37.18-.37.71 0 .89l4.13 2.06c.14.07.31.07.45 0l4.13-2.06c.37-.18.37-.71 0-.89l-4.13-2.06a.508.508 0 00-.45 0z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17.28 9.892c-.16 0-.33-.03-.49-.1l-4.77-2.12-4.82 2.12c-.5.22-1.09.08-1.43-.36a1.16 1.16 0 0 1 .03-1.47l5-6.11c.61-.75 1.79-.75 2.41 0l5 6.11c.35.43.36 1.03.03 1.47-.25.29-.6.46-.96.46ZM12 6.162c.21 0 .43.04.63.13l3.58 1.59-4.17-5.09-4.23 5.08 3.56-1.58c.2-.09.41-.13.63-.13ZM12 22.75c-.46 0-.9-.21-1.2-.59l-5-6.11a1.187 1.187 0 0 1 1.4-1.84l4.78 2.12 4.82-2.12a1.187 1.187 0 0 1 1.4 1.84l-5 6.11c-.3.38-.74.59-1.2.59Zm-4.21-6.63 4.16 5.09 4.23-5.08-3.55 1.58c-.4.18-.86.18-1.26 0l-3.58-1.59Z" fill={color}></path><path d="M12 15.371a.73.73 0 0 1-.33-.08l-5.25-2.62a.77.77 0 0 1-.42-.67c0-.28.16-.54.42-.67l5.25-2.62c.21-.11.46-.11.67 0l5.25 2.62c.25.13.42.39.42.67s-.16.54-.42.67l-5.25 2.62c-.11.06-.22.08-.34.08Zm-3.57-3.37 3.57 1.78 3.57-1.78-3.57-1.78-3.57 1.78Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m6.9 9.101 4.77-2.12c.21-.09.45-.09.65 0l4.77 2.12c.42.19.81-.32.52-.68l-5-6.11c-.34-.42-.9-.42-1.24 0l-5 6.11c-.28.36.11.87.53.68ZM6.9 14.9l4.78 2.12c.21.09.45.09.65 0l4.78-2.12c.42-.19.81.32.52.68l-5 6.11c-.34.42-.9.42-1.24 0l-5-6.11c-.3-.36.08-.87.51-.68Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m12 9.379-5.24 2.62 5.24 2.62 5.24-2.62L12 9.379Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const EthereumClassic = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
