import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.42 14.58a.74.74 0 01-.61.31c-.15 0-.3-.05-.44-.14a5.55 5.55 0 00-5.27-.65.753.753 0 01-.97-.42.75.75 0 01.42-.97c2.24-.89 4.74-.58 6.69.82.35.25.42.72.18 1.05zm1.1-2.79a.74.74 0 01-.61.31c-.15 0-.3-.05-.44-.14a7.604 7.604 0 00-7.26-.89.753.753 0 01-.97-.42.75.75 0 01.42-.97 9.08 9.08 0 018.68 1.07c.34.24.42.71.18 1.04zm1.57-2.68a.74.74 0 01-.61.31c-.15 0-.3-.05-.44-.14-2.98-2.14-6.8-2.61-10.2-1.25a.75.75 0 01-.97-.42c-.15-.38.04-.82.42-.97 3.88-1.54 8.23-1.01 11.63 1.43.34.23.42.7.17 1.04z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill={color}></path><path d="M17.48 11.421c-.15 0-.3-.05-.44-.14-2.98-2.14-6.8-2.61-10.2-1.25a.75.75 0 0 1-.97-.42c-.15-.38.04-.82.42-.97 3.88-1.54 8.23-1.01 11.63 1.43.34.24.41.71.17 1.05-.14.19-.37.3-.61.3Z" fill={color}></path><path d="M15.91 14.11c-.15 0-.3-.05-.44-.14a7.604 7.604 0 0 0-7.26-.89.753.753 0 0 1-.97-.42.75.75 0 0 1 .42-.97 9.08 9.08 0 0 1 8.68 1.07c.34.24.41.71.17 1.05-.14.19-.37.3-.6.3ZM14.81 16.9c-.15 0-.3-.05-.44-.14a5.55 5.55 0 0 0-5.27-.65.753.753 0 0 1-.97-.42.75.75 0 0 1 .42-.97c2.24-.89 4.74-.58 6.69.82.34.24.41.71.17 1.05a.71.71 0 0 1-.6.31Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M6.57 9.33c3.63-1.44 7.74-.93 10.92 1.34M7.94 12.378a8.385 8.385 0 0 1 7.97.98M8.83 15.412c1.99-.79 4.24-.51 5.98.73" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Spotify = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
