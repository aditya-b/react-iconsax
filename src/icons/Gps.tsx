import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 11.25h-2.04c-.36-3.81-3.4-6.86-7.21-7.21V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.04c-3.81.36-6.86 3.4-7.21 7.21H2c-.41 0-.75.34-.75.75s.34.75.75.75h2.04c.36 3.81 3.4 6.86 7.21 7.21V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.04c3.81-.36 6.86-3.4 7.21-7.21H22c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm-10 3.87c-1.72 0-3.12-1.4-3.12-3.12 0-1.72 1.4-3.12 3.12-3.12 1.72 0 3.12 1.4 3.12 3.12 0 1.72-1.4 3.12-3.12 3.12Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 20.25c-4.55 0-8.25-3.7-8.25-8.25S7.45 3.75 12 3.75s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25Zm0-15c-3.72 0-6.75 3.03-6.75 6.75s3.03 6.75 6.75 6.75 6.75-3.03 6.75-6.75S15.72 5.25 12 5.25Z" fill={color}></path><path d="M12 15.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25S13.24 9.75 12 9.75ZM12 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM4 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM22 12.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"></path><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15a3 3 0 100-6 3 3 0 000 6zM12 4V2M4 12H2M12 20v2M20 12h2" opacity=".4"></path>
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

export const Gps = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
