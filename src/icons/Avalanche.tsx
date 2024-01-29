import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.28 13.41c-.33.53-.91.85-1.54.85H6.44a.45.45 0 01-.39-.68l5.61-9.61c.16-.28.56-.3.75-.04l1.56 2.09c.45.6.48 1.41.09 2.05l-3.34 5.34zm6.83.85h-3.84c-.35 0-.57-.38-.39-.69l1.92-3.2c.18-.29.6-.29.78 0l1.92 3.2c.18.3-.04.69-.39.69z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9.19 17.011H6.45c-.43 0-.83-.23-1.04-.6a1.24 1.24 0 0 1 0-1.21l5.6-9.61c.2-.35.57-.57.97-.6.4-.03.79.16 1.03.48l1.57 2.09c.63.84.68 2 .12 2.9l-3.34 5.35c-.47.75-1.28 1.2-2.17 1.2Zm-2.23-1.5h2.22c.37 0 .71-.19.9-.5l3.34-5.35c.23-.37.21-.85-.05-1.2l-1.3-1.73-5.11 8.78ZM17.55 17.009h-3.84c-.43 0-.83-.23-1.05-.61-.21-.38-.21-.84.01-1.21l1.92-3.2c.44-.73 1.62-.73 2.06 0l1.92 3.2c.22.37.23.84.01 1.21-.19.37-.6.61-1.03.61Zm-3.31-1.5h2.79l-1.4-2.33-1.39 2.33Z" fill={color}></path><path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="m6.06 15.58 5.61-9.61c.16-.28.56-.3.75-.04l1.56 2.09c.45.6.48 1.41.09 2.05l-3.34 5.35c-.33.53-.91.85-1.54.85H6.45c-.35-.01-.57-.39-.39-.69ZM15.24 12.37l-1.92 3.2c-.18.3.04.69.39.69h3.84c.35 0 .57-.38.39-.69l-1.92-3.2c-.17-.29-.6-.29-.78 0Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path>
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

export const Avalanche = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
