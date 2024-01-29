import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-5.2 15c0 .1-.02.19-.06.29-.08.18-.22.33-.41.41a.717.717 0 01-.58 0 .776.776 0 01-.24-.16l-2.95-2.95a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.67 1.67V7c0-.41.34-.75.75-.75s.76.34.76.75v10zm6.25-6.52c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.67-1.67V17c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-.1.02-.19.06-.29.08-.18.22-.33.41-.41.18-.08.39-.08.57 0 .09.04.17.09.24.16l2.95 2.95c.29.3.29.78 0 1.07z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M9.01 21.25c-.19 0-.38-.07-.53-.22l-5.01-5.01a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l5.01 5.01c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"></path><path fill={color} d="M9.01 21.25c-.41 0-.75-.34-.75-.75v-17c0-.41.34-.75.75-.75s.75.34.75.75v17c0 .41-.34.75-.75.75zM20.01 9.26c-.19 0-.38-.07-.53-.22l-5.01-5.01a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l5.01 5.01c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"></path><path fill={color} d="M14.99 21.25c-.41 0-.75-.34-.75-.75v-17c0-.41.34-.75.75-.75s.75.34.75.75v17c0 .41-.33.75-.75.75z"></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M9.01 20.5l-5.02-5.01M9.01 3.5v17"></path><g opacity=".4">
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.99 3.5l5.02 5.01M14.99 20.5v-17"></path>
  </g>
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

export const ArrowSwapVertical = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
