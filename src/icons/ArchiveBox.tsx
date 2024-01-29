import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 5v2c0 1.83-.83 2.82-2.5 2.97-.16.02-.33.03-.5.03H5c-.17 0-.34-.01-.5-.03C2.83 9.82 2 8.83 2 7V5c0-2 1-3 3-3h14c2 0 3 1 3 3ZM5.5 11.25c-.55 0-1 .45-1 1V19c0 2 .5 3 3 3h9c2.5 0 3-1 3-3v-6.75c0-.55-.45-1-1-1h-13Zm8.32 4.5h-3.64c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.64c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.5 22.749h-9c-3.3 0-3.75-1.8-3.75-3.75v-8.78c0-.41.34-.75.75-.75s.75.34.75.75v8.78c0 1.74.3 2.25 2.25 2.25h9c1.95 0 2.25-.51 2.25-2.25v-8.78c0-.41.34-.75.75-.75s.75.34.75.75v8.78c0 1.95-.45 3.75-3.75 3.75Z" fill={color}></path><path d="M19 10.75H5c-2.42 0-3.75-1.33-3.75-3.75V5c0-2.42 1.33-3.75 3.75-3.75h14c2.42 0 3.75 1.33 3.75 3.75v2c0 2.42-1.33 3.75-3.75 3.75Zm-14-8c-1.58 0-2.25.67-2.25 2.25v2c0 1.58.67 2.25 2.25 2.25h14c1.58 0 2.25-.67 2.25-2.25V5c0-1.58-.67-2.25-2.25-2.25H5ZM13.82 14.75h-3.64c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.64c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19.5 10.219v8.78c0 2-.5 3-3 3h-9c-2.5 0-3-1-3-3v-8.78M5 2h14c2 0 3 1 3 3v2c0 2-1 3-3 3H5c-2 0-3-1-3-3V5c0-2 1-3 3-3Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="M10.18 14h3.64" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const ArchiveBox = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
