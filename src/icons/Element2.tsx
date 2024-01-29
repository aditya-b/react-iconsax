import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11 19.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1v15.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM21.5 19.64v-4.28c0-1.3-1-2.36-2.23-2.36h-4.04C14 13 13 14.06 13 15.36v4.28c0 1.3 1 2.36 2.23 2.36h4.04c1.23 0 2.23-1.06 2.23-2.36ZM21.5 8.64V4.36c0-1.3-1-2.36-2.23-2.36h-4.04C14 2 13 3.06 13 4.36v4.28c0 1.3 1 2.36 2.23 2.36h4.04c1.23 0 2.23-1.06 2.23-2.36Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M8.27 22.75H4.23c-2.01 0-2.98-.93-2.98-2.85V4.1c0-1.92.98-2.85 2.98-2.85h4.04c2.01 0 2.98.93 2.98 2.85v15.8c0 1.92-.98 2.85-2.98 2.85Zm-4.04-20c-1.27 0-1.48.34-1.48 1.35v15.8c0 1.01.21 1.35 1.48 1.35h4.04c1.27 0 1.48-.34 1.48-1.35V4.1c0-1.01-.21-1.35-1.48-1.35H4.23ZM19.77 11.25h-4.04c-2.01 0-2.98-.89-2.98-2.73V3.98c0-1.84.98-2.73 2.98-2.73h4.04c2.01 0 2.98.89 2.98 2.73v4.53c0 1.85-.98 2.74-2.98 2.74Zm-4.04-8.5c-1.34 0-1.48.38-1.48 1.23v4.53c0 .86.14 1.23 1.48 1.23h4.04c1.34 0 1.48-.38 1.48-1.23V3.98c0-.86-.14-1.23-1.48-1.23h-4.04ZM19.77 22.75h-4.04c-2.01 0-2.98-.98-2.98-2.98v-4.04c0-2.01.98-2.98 2.98-2.98h4.04c2.01 0 2.98.98 2.98 2.98v4.04c0 2-.98 2.98-2.98 2.98Zm-4.04-8.5c-1.18 0-1.48.3-1.48 1.48v4.04c0 1.18.3 1.48 1.48 1.48h4.04c1.18 0 1.48-.3 1.48-1.48v-4.04c0-1.18-.3-1.48-1.48-1.48h-4.04Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M10.5 19.9V4.1c0-1.5-.64-2.1-2.23-2.1H4.23C2.64 2 2 2.6 2 4.1v15.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM22 8.52V3.98C22 2.57 21.36 2 19.77 2h-4.04c-1.59 0-2.23.57-2.23 1.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M22 19.77v-4.04c0-1.59-.64-2.23-2.23-2.23h-4.04c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Element2 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
