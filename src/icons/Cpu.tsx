import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.25 12.75c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75H20v-2.2h1.25c.42 0 .75-.33.75-.75 0-.41-.33-.75-.75-.75h-1.48a4.975 4.975 0 0 0-3.32-3.32V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V4h-2.2V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V4H9.06V2.75a.749.749 0 1 0-1.5 0v1.48a4.97 4.97 0 0 0-3.33 3.32H2.75a.749.749 0 1 0 0 1.5H4v2.2H2.75a.749.749 0 1 0 0 1.5H4v2.2H2.75a.749.749 0 1 0 0 1.5h1.48a4.95 4.95 0 0 0 3.33 3.32v1.48a.749.749 0 1 0 1.5 0V20h2.2v1.25a.749.749 0 1 0 1.5 0V20h2.19v1.25c0 .41.34.75.75.75s.75-.34.75-.75v-1.48a4.975 4.975 0 0 0 3.32-3.32h1.48c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75H20v-2.2h1.25Zm-3.99 1.51c0 1.65-1.35 3-3 3H9.74c-1.65 0-3-1.35-3-3V9.74c0-1.65 1.35-3 3-3h4.52c1.65 0 3 1.35 3 3v4.52Z" fill={color}></path><path d="M10.02 16.248h3.97c1.25 0 2.27-1.01 2.27-2.27v-3.97c0-1.25-1.01-2.27-2.27-2.27h-3.97c-1.25 0-2.27 1.01-2.27 2.27v3.97c0 1.26 1.01 2.27 2.27 2.27Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M14.4 20.75H9.6c-4.39 0-6.35-1.96-6.35-6.35V9.6c0-4.39 1.96-6.35 6.35-6.35h4.8c4.39 0 6.35 1.96 6.35 6.35v4.8c0 4.39-1.96 6.35-6.35 6.35Zm-4.8-16c-3.58 0-4.85 1.27-4.85 4.85v4.8c0 3.58 1.27 4.85 4.85 4.85h4.8c3.58 0 4.85-1.27 4.85-4.85V9.6c0-3.58-1.27-4.85-4.85-4.85H9.6Z" fill={color}></path><path d="M13.5 17.75h-3c-2.9 0-4.25-1.35-4.25-4.25v-3c0-2.9 1.35-4.25 4.25-4.25h3c2.9 0 4.25 1.35 4.25 4.25v3c0 2.9-1.35 4.25-4.25 4.25Zm-3-10c-2.08 0-2.75.67-2.75 2.75v3c0 2.08.67 2.75 2.75 2.75h3c2.08 0 2.75-.67 2.75-2.75v-3c0-2.08-.67-2.75-2.75-2.75h-3ZM8.01 4.75c-.42 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM16 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM22 8.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM22 12.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM22 16.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM16 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12.01 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM8.01 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM4 8.75H2a.749.749 0 1 1 0-1.5h2a.749.749 0 1 1 0 1.5ZM4 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM4 16.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9.6 20h4.8c4 0 5.6-1.6 5.6-5.6V9.6c0-4-1.6-5.6-5.6-5.6H9.6C5.6 4 4 5.6 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M10.5 17h3c2.5 0 3.5-1 3.5-3.5v-3C17 8 16 7 13.5 7h-3C8 7 7 8 7 10.5v3C7 16 8 17 10.5 17ZM8.01 4V2M12 4V2M16 4V2M20 8h2M20 12h2M20 16h2M16 20v2M12.01 20v2M8.01 20v2M2 8h2M2 12h2M2 16h2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Cpu = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
