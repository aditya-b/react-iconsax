import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 21.25h-1V15a9 9 0 0 0-18 0v6.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM12 3.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75ZM5.001 5.751c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM19.001 5.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1-1c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1 1c-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M21 22.75H3c-.41 0-.75-.34-.75-.75v-7c0-5.38 4.37-9.75 9.75-9.75s9.75 4.37 9.75 9.75v7c0 .41-.34.75-.75.75Zm-17.25-1.5h16.5V15c0-4.55-3.7-8.25-8.25-8.25S3.75 10.45 3.75 15v6.25ZM12 3.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75ZM5.001 5.751c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM19.001 5.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1-1c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1 1c-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2 22h20M12 6a9 9 0 0 0-9 9v7h18v-7a9 9 0 0 0-9-9Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M12 2v1M4 4l1 1M20 4l-1 1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Alarm = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
