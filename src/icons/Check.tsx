import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15 22c-.41 0-.75-.34-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M18 20h-3V4h3c2.21 0 4 1.79 4 4v8c0 2.21-1.79 4-4 4ZM6 4C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H6Zm1.75 11.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.02 20.25H7.5c-.75 0-1.3-.03-1.77-.1-3.33-.37-3.98-2.35-3.98-5.65v-5c0-3.3.66-5.29 4.01-5.66.44-.06.99-.09 1.74-.09h3.46c.41 0 .75.34.75.75s-.34.75-.75.75H7.5c-.68 0-1.16.03-1.55.08-2.03.22-2.7.86-2.7 4.17v5c0 3.31.67 3.94 2.67 4.17.42.06.9.08 1.58.08h3.52c.41 0 .75.34.75.75s-.34.75-.75.75ZM16.5 20.25h-1.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.48c.68 0 1.16-.03 1.55-.08 2.03-.22 2.7-.86 2.7-4.17v-5c0-3.31-.67-3.94-2.67-4.17-.42-.06-.9-.08-1.58-.08h-1.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.48c.75 0 1.3.03 1.77.1 3.33.37 3.98 2.35 3.98 5.65v5c0 3.3-.66 5.29-4.01 5.66-.44.06-.99.09-1.74.09Z" fill={color}></path><path d="M15 22.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v20c0 .41-.34.75-.75.75ZM8 16.25c-.41 0-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M11.02 19.5H7.5c-.62 0-1.17-.02-1.66-.09-2.63-.29-3.34-1.53-3.34-4.91v-5c0-3.38.71-4.62 3.34-4.91.49-.07 1.04-.09 1.66-.09h3.46" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.02 4.5h1.48c.62 0 1.17.02 1.66.09 2.63.29 3.34 1.53 3.34 4.91v5c0 3.38-.71 4.62-3.34 4.91-.49.07-1.04.09-1.66.09h-1.48M15 2v20" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M8 8.5v7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Check = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
