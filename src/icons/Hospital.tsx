import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 21.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z" fill={color}></path><path d="M17 2H7C4 2 3 3.79 3 6v16h6v-6.06c0-.52.42-.94.94-.94h4.13c.51 0 .94.42.94.94V22h6V6C21 3.79 20 2 17 2Zm-2.5 7.25h-1.75V11c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.25H9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75V6c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M21 22.75H3c-.41 0-.75-.34-.75-.75V6c0-3.02 1.73-4.75 4.75-4.75h10c3.02 0 4.75 1.73 4.75 4.75v16c0 .41-.34.75-.75.75Zm-17.25-1.5h16.5V6c0-2.22-1.03-3.25-3.25-3.25H7C4.78 2.75 3.75 3.78 3.75 6v15.25Z" fill={color}></path><path d="M15 22.75H9c-.41 0-.75-.34-.75-.75v-6.06c0-.93.76-1.69 1.69-1.69h4.13c.93 0 1.69.76 1.69 1.69V22a.77.77 0 0 1-.76.75Zm-5.25-1.5h4.5v-5.31c0-.1-.08-.19-.19-.19H9.93c-.1 0-.19.08-.19.19v5.31h.01ZM12 11.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M14.5 9.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2 22h20M17 2H7C4 2 3 3.79 3 6v16h18V6c0-2.21-1-4-4-4Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M14.06 15H9.93c-.51 0-.94.42-.94.94V22h6v-6.06a.924.924 0 0 0-.93-.94Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v5M9.5 8.5h5"></path></g>
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

export const Hospital = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
