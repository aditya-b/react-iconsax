import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M16.38 17.57l-10.3 4.34c-1.07.45-2-.88-1.21-1.73l7.81-8.48 4.05 4.12c.54.54.36 1.46-.35 1.75zM19.171 3.771l-6.49 7.93-4.05-4.1c-.54-.55-.36-1.47.35-1.76l8.94-3.75c1.04-.44 1.97.81 1.25 1.68z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M5.64 22.749c-.58 0-1.12-.28-1.48-.79-.51-.72-.45-1.65.15-2.29l7.33-7.96-3.55-3.59c-.43-.43-.61-1.05-.49-1.65.12-.6.53-1.09 1.09-1.33l8.94-3.75c.79-.33 1.66-.09 2.18.59.51.69.49 1.59-.05 2.26l-6.07 7.41 3.58 3.63c.43.43.61 1.05.49 1.65-.12.6-.53 1.09-1.09 1.33l-10.3 4.34c-.24.1-.48.15-.73.15Zm7.05-9.96-7.27 7.9c-.16.17-.08.33-.03.42.06.08.19.21.4.11l10.3-4.34c.14-.06.18-.18.2-.24.01-.06.02-.19-.09-.3l-3.51-3.55Zm-3.53-5.72 3.47 3.51 5.96-7.28c.14-.17.07-.33.01-.41-.06-.08-.18-.2-.4-.11l-8.94 3.75a.36.36 0 0 0-.2.24c-.02.06 0 .19.1.3Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m6.08 21.911 10.3-4.34c.71-.3.89-1.21.35-1.76l-4.06-4.11-7.81 8.48c-.78.85.15 2.18 1.22 1.73Zm2.55-14.31 4.05 4.1 6.49-7.93c.71-.87-.22-2.12-1.26-1.68l-8.94 3.75c-.7.29-.88 1.21-.34 1.76Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path>
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

export const Thorchain = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
