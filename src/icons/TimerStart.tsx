import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M14.89 3.45H9.11c-.4 0-.72-.32-.72-.72 0-.4.32-.73.72-.73h5.78c.4 0 .72.32.72.72 0 .4-.32.73-.72.73ZM19.97 15h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03Zm-.28 4.46-1.18.68c-.24.14-.48.21-.7.21-.17 0-.32-.04-.46-.12-.32-.19-.5-.56-.5-1.05v-1.36c0-.49.18-.86.5-1.05.32-.19.73-.15 1.16.09l1.18.68c.42.25.66.59.66.96s-.23.71-.66.96Z" fill={color}></path><path d="M14 19.968v-2.94c0-1.81 1.22-3.03 3.03-3.03h2.94c.23 0 .45.02.66.06.02-.24.04-.48.04-.73 0-4.79-3.89-8.68-8.67-8.68-4.78 0-8.67 3.89-8.67 8.68 0 4.78 3.89 8.67 8.67 8.67.85 0 1.66-.14 2.44-.36a3.22 3.22 0 0 1-.44-1.67Zm-1.25-6.97c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M12 22.75c-5.24 0-9.5-4.26-9.5-9.5s4.26-9.5 9.5-9.5 9.5 4.26 9.5 9.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M16.15 22.02c-.35 0-.67-.08-.96-.25-.66-.38-1.04-1.15-1.04-2.11v-2.31c0-.96.38-1.73 1.04-2.11.66-.38 1.51-.32 2.34.15l2 1.16c.83.48 1.31 1.19 1.31 1.95s-.48 1.47-1.31 1.95l-2 1.16c-.46.27-.93.41-1.38.41Zm.01-5.54a.51.51 0 0 0-.22.05c-.18.1-.29.41-.29.81v2.31c0 .4.11.71.29.81.18.1.5.05.84-.15l2-1.16c.35-.2.56-.45.56-.65s-.21-.45-.56-.65l-2-1.16c-.23-.14-.45-.21-.62-.21Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M12 8v5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22c-4.83 0-8.75-3.92-8.75-8.75S7.17 4.5 12 4.5s8.75 3.92 8.75 8.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M9 2h6M14.9 18.502v-1.16c0-1.43 1.02-2.02 2.26-1.3l1 .58 1 .58c1.24.72 1.24 1.89 0 2.61l-1 .58-1 .58c-1.24.72-2.26.13-2.26-1.3v-1.17Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const TimerStart = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
