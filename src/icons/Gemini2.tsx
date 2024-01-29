import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m23.53 6.47-2-2a.75.75 0 0 0-1.06 0l-2 2c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l.72-.72V11c0 3.58-1.67 5.25-5.25 5.25h-2.25V3.81l2.02 2.02c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-3.3-3.3a.75.75 0 0 0-1.06 0l-3.3 3.3c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l2.02-2.02v12.44H9c-3.58 0-5.25-1.67-5.25-5.25V6.81l.72.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l.72-.72V11c0 4.42 2.33 6.75 6.75 6.75h2.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-4.25H15c4.42 0 6.75-2.33 6.75-6.75V6.81l.72.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06Z" fill={color}></path><path d="M15 20.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v19c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M15.3 6.05c-.19 0-.38-.07-.53-.22L12 3.06 9.23 5.83c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l3.3-3.3a.75.75 0 0 1 1.06 0l3.3 3.3c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22ZM5 7.75c-.19 0-.38-.07-.53-.22L3 6.06 1.53 7.53c-.29.29-.77.29-1.06 0a.755.755 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM23 7.75c-.19 0-.38-.07-.53-.22L21 6.06l-1.47 1.47c-.29.29-.77.29-1.06 0a.755.755 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z" fill={color}></path><path d="M15 17.75H9c-4.42 0-6.75-2.33-6.75-6.75V6.04c0-.41.34-.75.75-.75s.75.34.75.75V11c0 3.58 1.67 5.25 5.25 5.25h6c3.58 0 5.25-1.67 5.25-5.25V6.04c0-.41.34-.75.75-.75s.75.34.75.75V11c0 4.42-2.33 6.75-6.75 6.75ZM15 20.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22V3M15.3 5.3 12 2 8.7 5.3M5 7 3 5 1 7M23 7l-2-2-2 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M3 6.04V11c0 4 2 6 6 6h6c4 0 6-2 6-6V6.04M9 20h6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Gemini2 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
