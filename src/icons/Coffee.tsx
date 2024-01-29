import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M6 5.121c-.41 0-.75-.34-.75-.75v-1.75c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75ZM10 5.121c-.41 0-.75-.34-.75-.75v-1.75c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75ZM14 5.121c-.41 0-.75-.34-.75-.75v-1.75c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75ZM22.25 13.252c0-2.62-2.03-4.74-4.59-4.96-.74-1.21-2.06-2.03-3.58-2.03H6.71c-2.32 0-4.21 1.89-4.21 4.21v.53h15.79v-.53c0-.19-.03-.38-.06-.56 1.45.43 2.52 1.75 2.52 3.34 0 1.57-1.04 2.88-2.46 3.32v-4.57H2.5v5.79c0 2.32 1.89 4.21 4.21 4.21h7.37c2.2 0 3.99-1.7 4.17-3.86 2.28-.46 4-2.48 4-4.89Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13.58 22.752H6.21c-2.74 0-4.96-2.23-4.96-4.96v-7.32c0-2.74 2.23-4.96 4.96-4.96h7.37c2.74 0 4.96 2.23 4.96 4.96v7.32c0 2.73-2.23 4.96-4.96 4.96ZM6.21 7.012c-1.91 0-3.46 1.55-3.46 3.46v7.32c0 1.91 1.55 3.46 3.46 3.46h7.37c1.91 0 3.46-1.55 3.46-3.46v-7.32c0-1.91-1.55-3.46-3.46-3.46H6.21ZM5.5 4.75c-.41 0-.75-.34-.75-.75V2.25c0-.41.34-.75.75-.75s.75.34.75.75V4c0 .41-.34.75-.75.75ZM9.5 4.75c-.41 0-.75-.34-.75-.75V2.25c0-.41.34-.75.75-.75s.75.34.75.75V4c0 .41-.34.75-.75.75ZM13.5 4.75c-.41 0-.75-.34-.75-.75V2.25c0-.41.34-.75.75-.75s.75.34.75.75V4c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M17.79 18.12c-.41 0-.75-.34-.75-.75V8.95c0-.41.34-.75.75-.75 2.74 0 4.96 2.23 4.96 4.96s-2.23 4.96-4.96 4.96Zm.75-8.34v6.76a3.464 3.464 0 0 0 0-6.76Z" fill={color}></path><path d="M17.51 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h15.51c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17.79 10.472v7.32a4.21 4.21 0 0 1-4.21 4.21H6.21c-2.32 0-4.21-1.89-4.21-4.21v-7.32a4.21 4.21 0 0 1 4.21-4.21h7.37c2.32 0 4.21 1.89 4.21 4.21Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="M5.5 4V2.25M9.5 4V2.25M13.5 4V2.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22 13.16c0 2.32-1.89 4.21-4.21 4.21V8.95A4.21 4.21 0 0 1 22 13.16Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="M2 12h15.51" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Coffee = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
