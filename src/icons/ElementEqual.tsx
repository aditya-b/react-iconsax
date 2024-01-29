import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21 16.25h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 20.25h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM22 8.52V3.98C22 2.57 21.36 2 19.77 2h-4.04c-1.59 0-2.23.57-2.23 1.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97ZM10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97ZM10.5 19.77v-4.04c0-1.59-.64-2.23-2.23-2.23H4.23c-1.59 0-2.23.64-2.23 2.23v4.04C2 21.36 2.64 22 4.23 22h4.04c1.59 0 2.23-.64 2.23-2.23Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19.77 11.25h-4.04c-2.01 0-2.98-.98-2.98-2.98V4.23c0-2.01.98-2.98 2.98-2.98h4.04c2.01 0 2.98.98 2.98 2.98v4.04c0 2-.98 2.98-2.98 2.98Zm-4.04-8.5c-1.18 0-1.48.3-1.48 1.48v4.04c0 1.18.3 1.48 1.48 1.48h4.04c1.18 0 1.48-.3 1.48-1.48V4.23c0-1.18-.3-1.48-1.48-1.48h-4.04ZM8.27 11.25H4.23c-2.01 0-2.98-.89-2.98-2.73V3.98c0-1.84.98-2.73 2.98-2.73h4.04c2.01 0 2.98.89 2.98 2.73v4.53c0 1.85-.98 2.74-2.98 2.74Zm-4.04-8.5c-1.34 0-1.48.38-1.48 1.23v4.53c0 .86.14 1.23 1.48 1.23h4.04c1.34 0 1.48-.38 1.48-1.23V3.98c0-.86-.14-1.23-1.48-1.23H4.23ZM8.27 22.75H4.23c-2.01 0-2.98-.98-2.98-2.98v-4.04c0-2.01.98-2.98 2.98-2.98h4.04c2.01 0 2.98.98 2.98 2.98v4.04c0 2-.98 2.98-2.98 2.98Zm-4.04-8.5c-1.18 0-1.48.3-1.48 1.48v4.04c0 1.18.3 1.48 1.48 1.48h4.04c1.18 0 1.48-.3 1.48-1.48v-4.04c0-1.18-.3-1.48-1.48-1.48H4.23ZM21 16.25h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 20.25h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2h-4.04c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23ZM10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97ZM10.5 19.77v-4.04c0-1.59-.64-2.23-2.23-2.23H4.23c-1.59 0-2.23.64-2.23 2.23v4.04C2 21.36 2.64 22 4.23 22h4.04c1.59 0 2.23-.64 2.23-2.23Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M15 15.5h6M15 19.5h6" stroke={color} strokeWidth="1.5" strokeLinecap="round"></path>
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

export const ElementEqual = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
