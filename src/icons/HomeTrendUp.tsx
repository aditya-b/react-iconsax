import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m20.04 6.822-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13l-5.01 3.91c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62v-6.78c0-1.35-.87-3.01-1.97-3.78Zm-3.16 6.58c0 .39-.31.7-.7.7-.39 0-.7-.31-.7-.7v-.18l-2.72 2.72c-.15.15-.35.22-.56.2a.692.692 0 0 1-.5-.31l-1.02-1.52-2.38 2.38c-.14.14-.31.2-.49.2s-.36-.07-.49-.2a.706.706 0 0 1 0-.99l2.98-2.98c.15-.15.35-.22.56-.2.21.02.4.13.51.31l1.02 1.52 2.11-2.11h-.18c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h1.86c.09 0 .18.02.27.05.17.07.31.21.38.38.04.09.05.18.05.27v1.86Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17.79 22.738H6.21c-2.74 0-4.96-2.23-4.96-4.97v-7.41c0-1.36.84-3.07 1.92-3.91l5.39-4.2c1.62-1.26 4.21-1.32 5.89-.14l6.18 4.33c1.19.83 2.12 2.61 2.12 4.06v7.28c0 2.73-2.22 4.96-4.96 4.96ZM9.48 3.428l-5.39 4.2c-.71.56-1.34 1.83-1.34 2.73v7.41a3.47 3.47 0 0 0 3.46 3.47h11.58c1.91 0 3.46-1.55 3.46-3.46v-7.28c0-.96-.69-2.29-1.48-2.83l-6.18-4.33c-1.14-.8-3.02-.76-4.11.09Z" fill={color}></path><path d="M7.5 17.251c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.2-3.2a.741.741 0 0 1 1.15.11l1.09 1.64 3.55-3.55c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4.2 4.2a.741.741 0 0 1-1.15-.11l-1.09-1.64-2.55 2.55c-.15.15-.34.22-.53.22Z" fill={color}></path><path d="M16.5 14.25c-.41 0-.75-.34-.75-.75v-1.25H14.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m9.02 2.838-5.39 4.2c-.9.7-1.63 2.19-1.63 3.32v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-7.28c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16.5 11.5-4.2 4.2-1.6-2.4-3.2 3.2"></path><path d="M14.5 11.5h2v2"></path></g>
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

export const HomeTrendUp = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
