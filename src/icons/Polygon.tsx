import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M21.38 11.448l-4.5-2.6a.77.77 0 00-.75 0l-4.5 2.6s0 .01-.01.01l-4.12 2.38-3.75-2.17v-4.33l3.75-2.17 3.75 2.17v1.14c0 .41.34.75.75.75s.75-.34.75-.75v-1.58c0-.27-.14-.52-.38-.65l-4.5-2.6a.77.77 0 00-.75 0l-4.5 2.6c-.23.13-.38.38-.38.65v5.2c0 .27.14.52.38.65l4.5 2.6c.12.07.25.1.38.1s.26-.03.38-.1l4.5-2.6s0-.01.01-.01l4.12-2.38 3.75 2.17v4.33l-3.75 2.17-3.75-2.17v-1.22c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.65c0 .27.14.52.38.65l4.5 2.6c.12.07.25.1.38.1s.26-.03.38-.1l4.5-2.6c.23-.13.38-.38.38-.65v-5.2a.84.84 0 00-.4-.64z"></path><path fill={color} d="M4.5 8.35v2.31c0 .36.19.69.5.87l2 1.15c.31.18.69.18 1 0l2-1.15c.31-.18.5-.51.5-.87V8.35c0-.36-.19-.69-.5-.87L8 6.33a.993.993 0 00-1 0L5 7.48c-.31.18-.5.51-.5.87zM13.5 13.55v2.31c0 .36.19.69.5.87l2 1.15c.31.18.69.18 1 0l2-1.15c.31-.18.5-.51.5-.87v-2.31c0-.36-.19-.69-.5-.87l-2-1.15a.993.993 0 00-1 0l-2 1.15c-.31.18-.5.51-.5.87z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M7.5 15.448c-.13 0-.26-.03-.38-.1l-4.5-2.6a.752.752 0 0 1-.38-.65v-5.2c0-.27.14-.52.38-.65l4.5-2.6a.77.77 0 0 1 .75 0l4.5 2.6c.23.13.38.38.38.65v1.57c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.14L7.5 5.158l-3.75 2.17v4.33l3.75 2.17 4.12-2.38a.746.746 0 0 1 .75 1.29l-4.5 2.6c-.11.07-.24.11-.37.11Z" fill={color}></path><path d="M16.5 20.641c-.13 0-.26-.03-.38-.1l-4.5-2.6a.752.752 0 0 1-.38-.65v-1.65c0-.41.34-.75.75-.75s.75.34.75.75v1.22l3.75 2.17 3.75-2.17v-4.33l-3.75-2.17-4.12 2.38a.746.746 0 0 1-.75-1.29l4.5-2.6a.77.77 0 0 1 .75 0l4.5 2.6c.23.13.38.38.38.65v5.2c0 .27-.14.52-.38.65l-4.5 2.6c-.11.06-.24.09-.37.09Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m12 12.1-4.5 2.6L3 12.1V6.9l4.5-2.6L12 6.9v1.57" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m12 12.1 4.5-2.6 4.5 2.6v5.19l-4.5 2.6-4.5-2.6v-1.65" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Polygon = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
