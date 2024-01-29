import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-5.16 15.66c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L8.25 17l-1.72 1.72c-.15.14-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.72-1.72-1.72-1.72a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.72 1.72 1.72-1.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.72 1.72 1.72 1.72Zm-.53-8.85H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.5c.41 0 .75.34.75.75s-.34.75-.75.75Zm7.5 9.75h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H18c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-3.75h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H18c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-6h-1.48v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.5H13.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.52v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5H18c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.7 6.39h-7.27c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.27c.41 0 .75.34.75.75s-.34.75-.75.75ZM9.58 6.39H2.3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.27c.41 0 .75.34.75.75s-.33.75-.74.75ZM21.7 16.078h-7.27c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.27c.41 0 .75.34.75.75s-.34.75-.75.75ZM21.7 22.14h-7.27c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.27c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M18.09 10.02c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7.27c0 .42-.33.75-.75.75ZM2.298 22.752c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l7.27-7.27c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-7.27 7.27a.71.71 0 0 1-.53.22Z" fill={color}></path><path d="M9.58 22.752c-.19 0-.38-.07-.53-.22l-7.27-7.27a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l7.27 7.27c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M14.422 5.64h7.28" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M2.3 5.64h7.28M14.422 15.328h7.28M14.422 21.39h7.28" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.09 9.27V2M2.3 22l7.28-7.27M9.58 22 2.3 14.73" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Math = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
