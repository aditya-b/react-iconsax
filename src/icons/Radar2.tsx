import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 17.75c-4.27 0-7.75-3.48-7.75-7.75 0-1.36.36-2.69 1.03-3.86a.75.75 0 0 1 1.02-.28l6.07 3.49c.36.21.48.66.28 1.02-.21.36-.66.48-1.02.28l-2.91-1.67c-.1.33-.17.67-.17 1.02 0 1.9 1.55 3.45 3.45 3.45 1.9 0 3.45-1.55 3.45-3.45 0-1.9-1.55-3.45-3.45-3.45-.51 0-1.01.11-1.47.33-.38.18-.82.02-1-.36a.748.748 0 0 1 .36-1A4.955 4.955 0 0 1 16.95 12c0 2.73-2.22 4.95-4.95 4.95S7.05 14.73 7.05 12c0-.61.12-1.22.34-1.79l-1.15-.65c-.32.77-.49 1.6-.49 2.44 0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25a6.252 6.252 0 0 0-10-5 .75.75 0 0 1-.9-1.2A7.715 7.715 0 0 1 12 4.25c4.27 0 7.75 3.48 7.75 7.75s-3.48 7.75-7.75 7.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.748c-5.93 0-10.75-4.82-10.75-10.75 0-1.88.49-3.73 1.43-5.36.21-.36.66-.48 1.02-.28l8.67 4.98c.36.21.48.66.28 1.02-.21.36-.66.48-1.02.28l-8-4.59a9.218 9.218 0 0 0-.88 3.94c0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25c-2.02 0-3.94.64-5.55 1.85a.75.75 0 0 1-.9-1.2c1.87-1.4 4.1-2.15 6.45-2.15 5.93 0 10.75 4.82 10.75 10.75S17.93 22.748 12 22.748Z" fill={color}></path><path d="M12 18.75c-3.72 0-6.75-3.03-6.75-6.75 0-1.2.32-2.39.93-3.42a.752.752 0 1 1 1.3.76 5.255 5.255 0 0 0 4.53 7.91c2.89 0 5.25-2.35 5.25-5.25a5.256 5.256 0 0 0-7.49-4.75c-.38.17-.82.01-1-.36a.745.745 0 0 1 .36-1c.9-.42 1.87-.64 2.87-.64 3.72 0 6.75 3.03 6.75 6.75s-3.03 6.75-6.75 6.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M6 4c1.67-1.25 3.75-2 6-2 5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12c0-1.81.48-3.51 1.33-4.98L12 12"></path><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M6.83 8.96A5.92 5.92 0 006 12c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6c-.91 0-1.78.2-2.55.57" opacity=".4"></path>
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

export const Radar2 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
