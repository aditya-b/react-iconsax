import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M4.71 18.191c.1.04.19.06.29.06h10.27c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H6.81l12.72-12.72c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0L5.75 15.691v-8.46c0-.41-.34-.75-.75-.75s-.75.34-.75.75v10.27c0 .1.02.19.06.29.07.18.22.33.4.4zM20.5 21.25h-17c-.41 0-.75.34-.75.75s.34.75.75.75h17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M5 18.25c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l14-14c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-14 14c-.15.15-.34.22-.53.22z"></path><path fill={color} d="M15.27 18.25H5c-.41 0-.75-.34-.75-.75V7.23c0-.41.34-.75.75-.75s.75.34.75.75v9.52h9.52c.41 0 .75.34.75.75s-.34.75-.75.75zM20.5 22.75h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75z"></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M5 17.5l14-14M5 7.23V17.5h10.27"></path><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.5 22h17" opacity=".4"></path>
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

export const Receive = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
