import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M3.762 7.22v9.57c0 1.96 2.13 3.19 3.83 2.21l4.15-2.39 4.15-2.4c1.7-.98 1.7-3.43 0-4.41l-4.15-2.4-4.15-2.39c-1.7-.98-3.83.24-3.83 2.21ZM20.238 18.93c-.41 0-.75-.34-.75-.75V5.82c0-.41.34-.75.75-.75s.75.34.75.75v12.36c0 .41-.33.75-.75.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M6.308 20.088c-.57 0-1.13-.15-1.65-.45a3.252 3.252 0 0 1-1.65-2.86v-9.57c0-1.19.62-2.26 1.65-2.86 1.04-.6 2.27-.6 3.3 0l8.29 4.78c1.03.6 1.65 1.67 1.65 2.86s-.62 2.26-1.65 2.86l-8.29 4.78c-.52.31-1.08.46-1.65.46Zm0-14.68a1.797 1.797 0 0 0-1.8 1.8v9.57c0 .65.34 1.23.9 1.56.56.32 1.24.33 1.8 0l8.29-4.78c.56-.33.9-.91.9-1.56s-.34-1.23-.9-1.56l-8.29-4.78c-.28-.16-.59-.25-.9-.25ZM20.242 18.93c-.41 0-.75-.34-.75-.75V5.82c0-.41.34-.75.75-.75s.75.34.75.75v12.36c0 .41-.33.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M3.762 7.22v9.57c0 1.96 2.13 3.19 3.83 2.21l4.15-2.39 4.15-2.4c1.7-.98 1.7-3.43 0-4.41l-4.15-2.4-4.15-2.39c-1.7-.98-3.83.24-3.83 2.21Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M20.238 18.18V5.82" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Next = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
