import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M17.418 4.411H5.388l1.88-1.88c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-3.16 3.16a.776.776 0 00-.22.53.776.776 0 00.22.53l3.16 3.16c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-1.88-1.88h12.03c1.24 0 2.25 1.01 2.25 2.25v3.32c0 .41.34.75.75.75s.75-.34.75-.75v-3.32c0-2.07-1.68-3.75-3.75-3.75zM21.168 18.84a.776.776 0 00-.22-.53l-3.16-3.16a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l1.88 1.88H6.578c-1.24 0-2.25-1.01-2.25-2.25v-3.32c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.32c0 2.07 1.68 3.75 3.75 3.75h12.03l-1.88 1.88c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.16-3.16a.776.776 0 00.22-.53z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M20.42 12.22c-.41 0-.75-.34-.75-.75V8.15c0-1.24-1.01-2.25-2.25-2.25H3.58c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13.84c2.07 0 3.75 1.68 3.75 3.75v3.32c0 .42-.34.75-.75.75z"></path><path fill={color} d="M6.74 9.07c-.19 0-.38-.07-.53-.22L3.05 5.69a.75.75 0 010-1.06l3.16-3.16c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L4.64 5.16l2.63 2.63c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22zM20.42 19.59H6.58c-2.07 0-3.75-1.68-3.75-3.75v-3.32c0-.41.34-.75.75-.75s.75.34.75.75v3.32c0 1.24 1.01 2.25 2.25 2.25h13.84c.41 0 .75.34.75.75s-.34.75-.75.75z"></path><path fill={color} d="M17.26 22.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l2.63-2.63-2.63-2.63a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.16 3.16a.75.75 0 010 1.06l-3.16 3.16a.71.71 0 01-.53.22z"></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <g opacity=".4">
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.58 5.16h13.84c1.66 0 3 1.34 3 3v3.32"></path>
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M6.74 2L3.58 5.16l3.16 3.16"></path>
  </g><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M20.42 18.84H6.58c-1.66 0-3-1.34-3-3v-3.32"></path><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M17.26 22l3.16-3.16-3.16-3.16"></path>
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

export const Repeat = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
