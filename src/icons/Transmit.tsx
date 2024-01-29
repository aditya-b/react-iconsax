import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M20.5 21.25h-17c-.41 0-.75.34-.75.75s.34.75.75.75h17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM5 14.52c.41 0 .75-.34.75-.75V5.31l12.72 12.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L6.81 4.25h8.46c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H5c-.1 0-.19.02-.29.06-.18.07-.33.22-.4.4-.04.1-.06.19-.06.29v10.27c0 .41.34.75.75.75z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M20.5 22.75h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75zM19 18.25c-.19 0-.38-.07-.53-.22l-14-14a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l14 14c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"></path><path fill={color} d="M5 14.52c-.41 0-.75-.34-.75-.75V3.5c0-.41.34-.75.75-.75h10.27c.41 0 .75.34.75.75s-.34.75-.75.75H5.75v9.52c0 .41-.34.75-.75.75z"></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.5 22h17" opacity=".4"></path><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M5 3.5l14 14M5 13.77V3.5h10.27"></path>
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

export const Transmit = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
