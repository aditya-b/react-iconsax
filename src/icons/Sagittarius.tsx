import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.69 2.71a.782.782 0 0 0-.41-.41.868.868 0 0 0-.28-.05h-9c-.41 0-.75.34-.75.75s.34.75.75.75h7.19L2.47 20.47c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22L20.25 4.81V12c0 .41.34.75.75.75s.75-.34.75-.75V3c0-.1-.02-.19-.06-.29Z" fill={color}></path><path d="M17.4 18.15c-.19 0-.38-.07-.53-.22L6.07 7.13a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l10.8 10.8c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21 12.75c-.41 0-.75-.34-.75-.75V3.75H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75v9c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M3 21.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l18-18c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-18 18c-.15.15-.34.22-.53.22Z" fill={color}></path><path d="M17.4 18.15c-.19 0-.38-.071-.53-.221l-10.8-10.8a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l10.799 10.8c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 3h9v9M21 3 3 21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m6.6 6.602 10.8 10.8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Sagittarius = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
