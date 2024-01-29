import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 12.25h-3.05l1.99 2.82c.24.34.16.81-.18 1.04a.76.76 0 01-.43.14c-.24 0-.47-.11-.61-.32l-2.3-3.26-2.3 3.26a.75.75 0 01-.61.32c-.15 0-.3-.04-.43-.14a.743.743 0 01-.18-1.04l1.99-2.82H7.52c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.36.75-.77.75zm0-3h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.87L8.38 6.93a.74.74 0 01.18-1.04.74.74 0 011.04.18l2.3 3.26 2.3-3.26c.24-.34.71-.42 1.04-.18.34.24.42.71.18 1.04l-1.99 2.82h3.05c.41 0 .75.34.75.75s-.32.75-.73.75z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.5 11.25h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M11.82 11.248c-.24 0-.47-.11-.61-.32l-2.82-4a.74.74 0 0 1 .18-1.04.74.74 0 0 1 1.04.18l2.82 4c.24.34.16.81-.18 1.04-.13.1-.28.14-.43.14Z" fill={color}></path><path d="M12 11.248c-.15 0-.3-.04-.43-.14a.743.743 0 0 1-.18-1.04l2.82-4c.24-.34.71-.42 1.04-.18.34.24.42.71.18 1.04l-2.82 4c-.14.21-.38.32-.61.32ZM16.5 14.25h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M9 18.248c-.15 0-.3-.04-.43-.14a.743.743 0 0 1-.18-1.04l2.82-4c.24-.34.71-.42 1.04-.18.34.24.42.71.18 1.04l-2.82 4c-.14.21-.38.32-.61.32Z" fill={color}></path><path d="M14.82 18.248c-.24 0-.47-.11-.61-.32l-2.82-4a.74.74 0 0 1 .18-1.04.74.74 0 0 1 1.04.18l2.82 4c.24.34.16.81-.18 1.04-.13.1-.28.14-.43.14Z" fill={color}></path><path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="M7.5 10.5h9M9 6.5l2.82 4M14.82 6.5l-2.82 4M7.5 13.5h9M9 17.5l2.82-4M14.82 17.5l-2.82-4"></path></g><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path>
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

export const Stacks = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
