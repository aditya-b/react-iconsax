import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 21.249h-1V9.979c0-.62-.28-1.2-.77-1.58L19 7.439l-.02-2.45c0-.55-.45-.99-1-.99h-3.41l-1.34-1.04c-.72-.57-1.74-.57-2.46 0l-7 5.44c-.49.38-.77.96-.77 1.57l-.05 11.28H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm-15.5-8.5v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1Zm8 8.5h-5v-2.75c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v2.75Zm3-8.5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M3.7 21.999H2.2l.05-12.03c0-.85.39-1.64 1.06-2.16l7-5.45c.99-.77 2.38-.77 3.38 0l7 5.44c.66.52 1.06 1.33 1.06 2.17v12.03h-1.5V9.979c0-.38-.18-.75-.48-.99l-7-5.44a1.26 1.26 0 0 0-1.54 0l-7 5.45c-.3.23-.48.6-.48.98l-.05 12.02Z" fill={color}></path><path d="M14.5 22.75h-5c-.41 0-.75-.34-.75-.75v-3.5c0-1.24 1.01-2.25 2.25-2.25h2c1.24 0 2.25 1.01 2.25 2.25V22c0 .41-.34.75-.75.75Zm-4.25-1.5h3.5V18.5c0-.41-.34-.75-.75-.75h-2c-.41 0-.75.34-.75.75v2.75ZM9.5 14.5h-2c-.96 0-1.75-.79-1.75-1.75v-1.5c0-.96.79-1.75 1.75-1.75h2c.96 0 1.75.79 1.75 1.75v1.5c0 .96-.79 1.75-1.75 1.75Zm-2-3.5c-.14 0-.25.11-.25.25v1.5c0 .14.11.25.25.25h2c.14 0 .25-.11.25-.25v-1.5c0-.14-.11-.25-.25-.25h-2ZM16.5 14.5h-2c-.96 0-1.75-.79-1.75-1.75v-1.5c0-.96.79-1.75 1.75-1.75h2c.96 0 1.75.79 1.75 1.75v1.5c0 .96-.79 1.75-1.75 1.75Zm-2-3.5c-.14 0-.25.11-.25.25v1.5c0 .14.11.25.25.25h2c.14 0 .25-.11.25-.25v-1.5c0-.14-.11-.25-.25-.25h-2ZM19 7.75c-.41 0-.75-.33-.75-.74l-.02-2.26h-3.65c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.4c.41 0 .75.33.75.74l.03 3c-.01.42-.34.76-.76.76 0 0 .01 0 0 0Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2 22h20" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.95 22.001 3 9.971c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58v12.03" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"></path><path opacity=".4" d="M13 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5ZM9.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1ZM16.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"></path><path d="m19 7-.03-3h-4.4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const House = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
