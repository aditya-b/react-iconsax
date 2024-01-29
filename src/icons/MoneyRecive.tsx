import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M18.809 6.25h1.36c-.19-.27-.39-.52-.6-.77l-.76.77ZM18.52 4.42c-.25-.21-.5-.41-.77-.6v1.36l.77-.76ZM19.58 5.481l2.95-2.95c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-2.95 2.95c.38.33.73.69 1.06 1.06ZM17.752 3c0-.41-.34-.75-.75-.75-.4 0-.72.32-.74.71.52.25 1.02.53 1.49.86V3ZM21.752 7c0-.41-.34-.75-.75-.75h-.83c.33.47.62.97.86 1.49.4-.02.72-.34.72-.74ZM12.75 14.75h.3c.39 0 .7-.35.7-.78 0-.54-.15-.62-.49-.74l-.51-.18v1.7Z" fill={color}></path><path d="M21.04 7.74c-.01 0-.02.01-.04.01h-4c-.1 0-.19-.02-.29-.06a.782.782 0 0 1-.41-.41.868.868 0 0 1-.05-.28V3c0-.01.01-.02.01-.04C14.96 2.35 13.52 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.52-.35-2.96-.96-4.26Zm-7.29 4.08c.64.22 1.5.69 1.5 2.16 0 1.25-.99 2.28-2.2 2.28h-.3v.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.25h-.08c-1.33 0-2.42-1.12-2.42-2.5 0-.42.34-.76.75-.76s.75.34.75.75c0 .55.41 1 .92 1h.08v-2.22l-1-.35c-.64-.22-1.5-.69-1.5-2.16 0-1.25.99-2.28 2.2-2.28h.3V7.5c0-.41.34-.75.75-.75s.75.34.75.75v.25h.08c1.33 0 2.42 1.12 2.42 2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.55-.41-1-.92-1h-.08v2.22l1 .35Z" fill={color}></path><path d="M10.25 10.03c0 .54.15.62.49.74l.51.18v-1.7h-.3c-.38 0-.7.35-.7.78Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13.05 16.248h-1.88c-1.33 0-2.42-1.12-2.42-2.5 0-.41.34-.75.75-.75s.75.34.75.75c0 .55.41 1 .92 1h1.88c.39 0 .7-.35.7-.78 0-.54-.15-.62-.49-.74l-3.01-1.05c-.64-.22-1.5-.69-1.5-2.16 0-1.25.99-2.28 2.2-2.28h1.88c1.33 0 2.42 1.12 2.42 2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.55-.41-1-.92-1h-1.88c-.39 0-.7.35-.7.78 0 .54.15.62.49.74l3.01 1.05c.64.22 1.5.69 1.5 2.16 0 1.26-.99 2.28-2.2 2.28Z" fill={color}></path><path d="M12 17.25c-.41 0-.75-.34-.75-.75v-9c0-.41.34-.75.75-.75s.75.34.75.75v9c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25c.41 0 .75.34.75.75s-.34.75-.75.75C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25c0-.41.34-.75.75-.75s.75.34.75.75c0 5.93-4.82 10.75-10.75 10.75Z" fill={color}></path><path d="M21 7.75h-4c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v3.25H21c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M17.001 7.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5-5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5 5c-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 13.748c0 .97.75 1.75 1.67 1.75h1.88c.8 0 1.45-.68 1.45-1.53 0-.91-.4-1.24-.99-1.45l-3.01-1.05c-.59-.21-.99-.53-.99-1.45 0-.84.65-1.53 1.45-1.53h1.88c.92 0 1.67.78 1.67 1.75M12 7.5v9"></path></g><path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17 3v4h4M22 2l-5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const MoneyRecive = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
