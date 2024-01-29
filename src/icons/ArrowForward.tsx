import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm1.34 8.22l-1.57 1.57c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l.26-.26h-5.08c-1.28 0-2.33 1.04-2.33 2.33s1.04 2.33 2.33 2.33H15c.41 0 .75.34.75.75s-.34.75-.75.75h-4.92c-2.11 0-3.83-1.72-3.83-3.83 0-2.11 1.72-3.83 3.83-3.83h5.15l-.33-.32a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.57 1.57c.29.3.29.77 0 1.06z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M16.87 19.06h-8c-3.17 0-5.75-2.58-5.75-5.75S5.7 7.56 8.87 7.56h11c.41 0 .75.34.75.75s-.34.75-.75.75h-11a4.26 4.26 0 00-4.25 4.25 4.26 4.26 0 004.25 4.25h8a.749.749 0 110 1.5z"></path><path fill={color} d="M17.57 11.56c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l2.03-2.03-2.03-2.03a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.56 2.56c.29.29.29.77 0 1.06l-2.56 2.56c-.15.15-.34.22-.53.22z"></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M16.87 18.31h-8c-2.76 0-5-2.24-5-5s2.24-5 5-5h11" opacity=".4"></path><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.57 10.81l2.56-2.56-2.56-2.56"></path>
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

export const ArrowForward = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
