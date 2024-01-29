import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17.39 15.67 13.35 12h-2.71L6.6 15.67a3.602 3.602 0 0 0-.95 4.01A3.63 3.63 0 0 0 9.05 22h5.89c1.52 0 2.85-.91 3.4-2.32.55-1.42.18-2.99-.95-4.01Zm-3.57 2.47h-3.64a.68.68 0 0 1-.68-.68c0-.37.31-.68.68-.68h3.64c.38 0 .68.31.68.68 0 .37-.31.68-.68.68ZM18.35 4.32A3.63 3.63 0 0 0 14.95 2h-5.9a3.63 3.63 0 0 0-2.44 6.33L10.65 12h2.71l4.04-3.67a3.635 3.635 0 0 0 .95-4.01Zm-4.53 2.91h-3.64a.68.68 0 0 1-.68-.68c0-.37.31-.68.68-.68h3.64c.38 0 .68.31.68.68 0 .37-.31.68-.68.68Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15.24 22.75H8.76c-1.89 0-3.27-.79-3.8-2.15-.55-1.42-.04-3.18 1.28-4.37L10.88 12 6.24 7.77C4.92 6.58 4.41 4.82 4.96 3.4c.53-1.37 1.91-2.15 3.8-2.15h6.48c1.89 0 3.27.79 3.8 2.15.55 1.42.04 3.18-1.28 4.37L13.12 12l4.65 4.23c1.31 1.19 1.83 2.95 1.28 4.37-.54 1.36-1.92 2.15-3.81 2.15ZM12 13.01l-4.75 4.32c-.84.77-1.21 1.89-.89 2.72.3.77 1.15 1.2 2.4 1.2h6.48c1.25 0 2.1-.42 2.4-1.2.32-.83-.04-1.95-.89-2.72L12 13.01ZM8.76 2.75c-1.25 0-2.1.42-2.4 1.2-.32.83.04 1.95.89 2.72L12 10.99l4.75-4.32c.84-.77 1.21-1.89.89-2.72-.3-.77-1.15-1.2-2.4-1.2H8.76Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15.24 2H8.76C5 2 4.71 5.38 6.74 7.22l10.52 9.56C19.29 18.62 19 22 15.24 22H8.76C5 22 4.71 18.62 6.74 16.78l10.52-9.56C19.29 5.38 19 2 15.24 2Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Timer = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
