import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M11.75 9.43L8.5 15l-.63 1.09-2.47 4.22c-.18.32-.64.33-.84.02l-3.38-5.05a.516.516 0 010-.56l3.67-5.5c.09-.14.25-.22.42-.22h6.23l.25.43z"></path><path fill={color} d="M22.84 14.73l-6.7-11.48a.473.473 0 00-.43-.25H8.87c-.39 0-.63.42-.43.75L11.5 9l.25.43 2.81 4.82c.2.33-.04.75-.43.75H8.5l-.63 1.09c.18-.32.64-.33.84-.02l3.14 4.71c.09.14.25.22.42.22h6.46c.17 0 .33-.08.42-.22l3.68-5.52c.1-.16.11-.36.01-.53z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.5 9.6c-.13 0-.26-.03-.39-.11L12 7.02 7.89 9.49a.751.751 0 1 1-.77-1.29l4.5-2.7c.24-.14.53-.14.77 0l4.5 2.7c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z" fill={color}></path><path d="M16.5 15.9c-.13 0-.27-.04-.39-.11L12 13.32l-4.11 2.47c-.23.14-.52.14-.76.01a.752.752 0 0 1-.38-.65V9c0-.41.34-.75.75-.75s.75.34.75.75v4.83l3.36-2.02c.24-.14.53-.14.77 0l3.36 2.02V9c0-.41.34-.75.75-.75s.75.34.75.75v6.15c0 .27-.15.52-.38.65-.11.07-.23.1-.36.1Z" fill={color}></path><path d="M12 18.448c-.15 0-.29-.04-.42-.13l-2.25-1.5a.755.755 0 0 1-.21-1.04c.23-.35.7-.44 1.04-.21l1.83 1.22 1.83-1.22c.34-.23.81-.14 1.04.21.23.34.14.81-.21 1.04l-2.25 1.5a.62.62 0 0 1-.4.13Z" fill={color}></path><path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="m16.5 8.848-4.5-2.7-4.5 2.7M7.5 9v6.15l4.5-2.7 4.5 2.7V9"></path></g><path opacity=".4" d="M14.25 16.2 12 17.7l-2.25-1.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Wanchain = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
