import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M18.94 3.5H5.06c-.41 0-.75-.34-.75-.75S4.65 2 5.06 2h13.88c.41 0 .75.34.75.75s-.34.75-.75.75ZM18.94 22H5.06c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13.88c.41 0 .75.34.75.75s-.34.75-.75.75ZM2.75 8v8c0 1.66 1.34 3 3 3h12.5c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3H5.75c-1.66 0-3 1.34-3 3Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17 18.75H7c-.75 0-1.3-.03-1.77-.1-3.32-.36-3.98-2.35-3.98-5.65v-2c0-3.3.66-5.29 4.01-5.66.44-.06.99-.09 1.74-.09h10c.75 0 1.3.03 1.77.1 3.33.37 3.98 2.35 3.98 5.65v2c0 3.3-.66 5.29-4.01 5.66-.44.06-.99.09-1.74.09Zm-10-12c-.68 0-1.16.03-1.55.08-2.03.23-2.7.86-2.7 4.17v2c0 3.31.67 3.94 2.67 4.17.42.06.9.08 1.58.08h10c.68 0 1.16-.03 1.55-.08 2.03-.22 2.7-.86 2.7-4.17v-2c0-3.31-.67-3.94-2.67-4.17-.42-.06-.9-.08-1.58-.08H7Z" fill={color}></path><path d="M15.33 22.752H8.67c-3.1 0-4.09-.99-4.09-4.08v-.34c0-.17 0-.32.01-.47.01-.21.11-.4.28-.53.16-.13.37-.19.58-.16.4.06.88.08 1.55.08h10c.68 0 1.16-.03 1.55-.08.21-.03.42.03.58.16.16.13.26.32.28.53.01.16.01.3.01.47v.34c0 3.09-.99 4.08-4.09 4.08Zm-9.25-4.02c.01 2.19.36 2.52 2.59 2.52h6.66c2.23 0 2.58-.33 2.59-2.52-.27.01-.57.02-.92.02H7c-.35 0-.65-.01-.92-.02ZM18.66 6.84c-.04 0-.07 0-.11-.01-.4-.06-.88-.08-1.55-.08H7c-.68 0-1.16.03-1.55.08a.752.752 0 0 1-.58-.16.773.773 0 0 1-.28-.53c-.01-.16-.01-.3-.01-.47v-.34c0-3.09.99-4.08 4.09-4.08h6.66c3.1 0 4.09.99 4.09 4.08v.34c0 .17 0 .32-.01.47-.01.21-.11.4-.28.53-.13.11-.3.17-.47.17ZM7 5.25h10c.35 0 .65.01.92.02-.01-2.19-.36-2.52-2.59-2.52H8.67c-2.23 0-2.58.33-2.59 2.52.27-.01.57-.02.92-.02Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M7.5 5h9c.62 0 1.17.02 1.66.09 2.63.29 3.34 1.53 3.34 4.91v4c0 3.38-.71 4.62-3.34 4.91-.49.07-1.04.09-1.66.09h-9c-.62 0-1.17-.02-1.66-.09C3.21 18.62 2.5 17.38 2.5 14v-4c0-3.38.71-4.62 3.34-4.91C6.33 5.02 6.88 5 7.5 5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M4.5 2h15M5 22h15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const SliderVertical1 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
