import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 14c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5ZM12 2c-1.18 0-2.26.41-3.12 1.1A4.956 4.956 0 0 0 7 7c0 .94.26 1.82.73 2.57A4.949 4.949 0 0 0 12 12c1.26 0 2.41-.46 3.29-1.25.39-.33.73-.73.99-1.18.46-.75.72-1.63.72-2.57 0-2.76-2.24-5-5-5Zm2.59 4.46-2.67 2.46c-.18.17-.41.25-.64.25a.93.93 0 0 1-.66-.27L9.39 7.66a.936.936 0 0 1 0-1.33c.37-.37.96-.37 1.33 0l.59.59 2.01-1.85c.38-.35.97-.33 1.32.05.35.39.33.99-.05 1.34Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 12.75c-3.17 0-5.75-2.58-5.75-5.75S8.83 1.25 12 1.25 17.75 3.83 17.75 7s-2.58 5.75-5.75 5.75Zm0-10A4.26 4.26 0 0 0 7.75 7 4.26 4.26 0 0 0 12 11.25 4.26 4.26 0 0 0 16.25 7 4.26 4.26 0 0 0 12 2.75ZM3.41 22.75c-.41 0-.75-.34-.75-.75 0-4.27 4.19-7.75 9.34-7.75 1.01 0 2 .13 2.96.4.4.11.63.52.52.92-.11.4-.52.63-.92.52-.82-.23-1.68-.34-2.56-.34-4.32 0-7.84 2.8-7.84 6.25 0 .41-.34.75-.75.75Z" fill={color}></path><path d="M18 22.75c-1.66 0-3.22-.88-4.06-2.31-.45-.72-.69-1.57-.69-2.44 0-1.46.65-2.81 1.78-3.71.84-.67 1.9-1.04 2.97-1.04 2.62 0 4.75 2.13 4.75 4.75 0 .87-.24 1.72-.69 2.45-.25.42-.57.8-.95 1.12-.83.76-1.94 1.18-3.11 1.18Zm0-8c-.74 0-1.44.25-2.03.72a3.224 3.224 0 0 0-.75 4.2c.58.98 1.65 1.58 2.78 1.58.79 0 1.55-.29 2.13-.81.26-.22.48-.48.64-.76.32-.51.48-1.09.48-1.68 0-1.79-1.46-3.25-3.25-3.25Z" fill={color}></path><path d="M17.429 19.741c-.19 0-.38-.07-.53-.22l-.99-.99a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.48.48 1.6-1.48c.3-.28.78-.26 1.06.04s.26.78-.04 1.06l-2.13 1.97c-.15.13-.33.2-.51.2Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M3.41 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22 18c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 14 18c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 22 18Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="m16.441 18 .99.99 2.13-1.97" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const UserTick = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
