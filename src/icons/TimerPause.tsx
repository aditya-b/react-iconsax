import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M14.89 3.45H9.11c-.4 0-.72-.32-.72-.72 0-.4.32-.73.72-.73h5.78c.4 0 .72.32.72.72 0 .4-.32.73-.72.73ZM14 19.968v-2.94c0-1.81 1.22-3.03 3.03-3.03h2.94c.23 0 .45.02.66.06.02-.24.04-.48.04-.73 0-4.79-3.89-8.68-8.67-8.68-4.78 0-8.67 3.89-8.67 8.68 0 4.78 3.89 8.67 8.67 8.67.85 0 1.66-.14 2.44-.36a3.22 3.22 0 0 1-.44-1.67Zm-1.25-6.97c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5Z" fill={color}></path><path d="M19.97 15h-2.93c-1.28 0-2.04.76-2.04 2.03v2.94c0 1.27.76 2.03 2.04 2.03h2.93c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03Zm-2.05 5.06c0 .32-.26.58-.59.58a.58.58 0 0 1-.58-.58v-3.12c0-.32.26-.58.58-.58.33 0 .59.26.59.58v3.12Zm2.33 0c0 .32-.26.58-.58.58-.32 0-.59-.26-.59-.58v-3.12c0-.32.27-.58.59-.58.32 0 .58.26.58.58v3.12Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.75c-5.24 0-9.5-4.26-9.5-9.5s4.26-9.5 9.5-9.5 9.5 4.26 9.5 9.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M12 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM19 21.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75ZM16 21.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22c-4.83 0-8.75-3.92-8.75-8.75S7.17 4.5 12 4.5s8.75 3.92 8.75 8.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M12 8v5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M9 2h6" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M19 17v4M16 17v4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const TimerPause = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
