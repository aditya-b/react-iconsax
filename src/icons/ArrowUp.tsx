import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm.63 8.82c-.29.29-.77.29-1.06 0l-3.01-3.01V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.81l-3.01 3.01c-.29.29-.77.29-1.06 0a.742.742 0 01-.22-.53c0-.19.08-.39.22-.53l4.29-4.29a.75.75 0 011.06 0l4.29 4.29c.29.29.29.76 0 1.06z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M18.07 10.32c-.19 0-.38-.07-.53-.22L12 4.56 6.46 10.1c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l6.07-6.07c.29-.29.77-.29 1.06 0l6.07 6.07c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22z"></path><path fill={color} d="M12 21.25c-.41 0-.75-.34-.75-.75V3.67c0-.41.34-.75.75-.75s.75.34.75.75V20.5c0 .41-.34.75-.75.75z"></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M18.07 9.57L12 3.5 5.93 9.57"></path><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 20.5V3.67" opacity=".4"></path>
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

export const ArrowUp = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
