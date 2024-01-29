import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.07 15.15c0 .1-.02.19-.06.29-.08.18-.22.33-.41.41a.717.717 0 01-.58 0 .776.776 0 01-.24-.16L6.6 14.65a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.76 1.76v-8.5c0-.41.34-.75.75-.75s.75.34.75.75v10.3h.01zm6.46-6.73c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.76-1.76v8.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.85c0-.1.02-.19.06-.29.08-.18.22-.33.41-.41.18-.08.39-.08.57 0 .09.04.17.09.24.16l3.04 3.04c.29.3.29.77 0 1.07z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M16.86 10.64c-.19 0-.38-.07-.53-.22l-3.04-3.04a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.04 3.04c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"></path><path fill={color} d="M13.82 17.9c-.41 0-.75-.34-.75-.75V6.84c0-.41.34-.75.75-.75s.75.34.75.75v10.31c0 .42-.34.75-.75.75zM10.18 17.9c-.19 0-.38-.07-.53-.22l-3.04-3.04a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.04 3.04c.29.29.29.77 0 1.06a.71.71 0 01-.53.22z"></path><path fill={color} d="M10.18 17.9c-.41 0-.75-.34-.75-.75V6.84c0-.41.34-.75.75-.75s.75.34.75.75v10.31c0 .42-.33.75-.75.75z"></path><path fill={color} d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <g opacity=".4">
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M13.82 6.85l3.04 3.04M13.82 17.15V6.85M10.18 17.15l-3.04-3.04M10.18 6.85v10.3"></path>
  </g><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
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

export const ArrangeVerticalCircle = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
