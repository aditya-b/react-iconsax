import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.3 21.999c-.18 0-.36-.07-.49-.2l-1.86-1.86a.706.706 0 0 1 0-.99c.27-.27.71-.27.99 0l1.86 1.86c.27.27.27.71 0 .99-.14.13-.32.2-.5.2ZM11.5 2C6.26 2 2 6.26 2 11.5S6.26 21 11.5 21s9.5-4.26 9.5-9.5S16.74 2 11.5 2Zm3.18 10.06c-.56 1.78-2.51 2.75-3.18 2.75-.69 0-2.6-.93-3.18-2.75-.38-1.19.05-2.74 1.41-3.17.62-.2 1.28-.08 1.77.29.48-.37 1.15-.49 1.78-.29 1.35.44 1.78 1.99 1.4 3.17Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25S5.85 1.25 11.5 1.25c.41 0 .75.34.75.75s-.34.75-.75.75c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75c0-.41.34-.75.75-.75s.75.34.75.75c0 5.65-4.6 10.25-10.25 10.25ZM22 22.751c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z" fill={color}></path><path d="M17.5 9.54c-.92 0-3.06-1.12-3.72-3.18-.45-1.41.07-3.26 1.7-3.79.7-.23 1.43-.12 2.01.25.57-.37 1.32-.47 2.02-.25 1.63.53 2.16 2.38 1.7 3.79-.65 2.1-2.9 3.18-3.71 3.18Zm-2.29-3.63c.46 1.45 2.02 2.11 2.3 2.14.32-.03 1.85-.77 2.27-2.13.23-.73 0-1.67-.73-1.91-.31-.1-.73-.04-.93.25-.14.21-.36.33-.61.34a.758.758 0 0 1-.62-.31c-.23-.33-.65-.38-.95-.29-.72.24-.96 1.18-.73 1.91Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21 11.5c0 5.25-4.25 9.5-9.5 9.5S2 16.75 2 11.5 6.25 2 11.5 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m22 22-2-2M14.5 6.131c-.35-1.1.06-2.47 1.22-2.84.61-.2 1.36-.03 1.79.56.4-.61 1.18-.75 1.78-.56 1.16.37 1.57 1.74 1.22 2.84-.55 1.75-2.47 2.66-3 2.66-.54 0-2.44-.89-3.01-2.66Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const SearchFavorite1 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
