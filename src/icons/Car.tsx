import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.75 7.998c0 .41-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.02l.38-1.81c.36-1.75 1.11-3.36 4.09-3.36h7.02c2.98 0 3.73 1.61 4.09 3.36l.38 1.81H21c.41 0 .75.34.75.75ZM22.182 13.66c-.15-1.65-.59-3.41-3.8-3.41H5.621c-3.21 0-3.64 1.76-3.8 3.41l-.56 6.09c-.07.76.18 1.52.7 2.09.53.58 1.28.91 2.08.91h1.88c1.62 0 1.93-.93 2.13-1.54l.2-.6c.23-.69.29-.86 1.19-.86h5.12c.9 0 .93.1 1.19.86l.2.6c.2.61.51 1.54 2.13 1.54h1.88c.79 0 1.55-.33 2.08-.91.52-.57.77-1.33.7-2.09l-.56-6.09Zm-13.18 2.09h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Zm9 0h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20.001 11.748h-16c-.23 0-.44-.1-.58-.28a.749.749 0 0 1-.15-.63l1.13-5.4c.37-1.75 1.12-3.36 4.09-3.36h7.03c2.97 0 3.72 1.62 4.09 3.36l1.13 5.41c.05.22-.01.45-.15.63-.15.17-.36.27-.59.27Zm-15.08-1.5h14.15l-.94-4.5c-.28-1.31-.61-2.17-2.62-2.17h-7.02c-2.01 0-2.34.86-2.62 2.17l-.95 4.5Z" fill={color}></path><path d="M19.962 22.75h-1.88c-1.62 0-1.93-.93-2.13-1.54l-.2-.6c-.26-.76-.29-.86-1.19-.86h-5.12c-.9 0-.96.17-1.19.86l-.2.6c-.21.62-.51 1.54-2.13 1.54h-1.88c-.79 0-1.55-.33-2.08-.91-.52-.57-.77-1.33-.7-2.09l.56-6.09c.15-1.65.59-3.41 3.8-3.41h12.76c3.21 0 3.64 1.76 3.8 3.41l.56 6.09c.07.76-.18 1.52-.7 2.09-.53.58-1.29.91-2.08.91Zm-10.52-4.5h5.12c1.82 0 2.25.81 2.61 1.87l.21.62c.17.51.17.52.71.52h1.88c.37 0 .72-.15.97-.42.24-.26.35-.59.32-.94l-.56-6.09c-.13-1.35-.29-2.05-2.3-2.05H5.622c-2.02 0-2.18.7-2.3 2.05l-.56 6.09c-.03.35.08.68.32.94.24.27.6.42.97.42h1.88c.54 0 .54-.01.71-.51l.2-.61c.25-.8.62-1.89 2.6-1.89ZM4 8.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 8.75h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 5.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M13.5 5.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM9 15.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 15.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15.51 2.828H8.49c-2.49 0-3.04 1.24-3.36 2.76L4 10.998h16l-1.13-5.41c-.32-1.52-.87-2.76-3.36-2.76ZM21.989 19.82c.11 1.17-.83 2.18-2.03 2.18h-1.88c-1.08 0-1.23-.46-1.42-1.03l-.2-.6c-.28-.82-.46-1.37-1.9-1.37h-5.12c-1.44 0-1.65.62-1.9 1.37l-.2.6c-.19.57-.34 1.03-1.42 1.03h-1.88c-1.2 0-2.14-1.01-2.03-2.18l.56-6.09c.14-1.5.43-2.73 3.05-2.73h12.76c2.62 0 2.91 1.23 3.05 2.73l.56 6.09ZM4 8H3M21 8h-1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v2M10.5 5h3"></path></g><path opacity=".4" d="M6 15h3M15 15h3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Car = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
