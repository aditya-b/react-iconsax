import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M7.25 12c0-.41.34-.75.75-.75h3V7.5c0-.55-.45-1-1-1H7.77C4.62 6.5 1.88 9.08 2 12.22a5.5 5.5 0 0 0 1.61 3.67c1 .99 2.37 1.61 3.89 1.61H10c.55 0 1-.45 1-1v-3.75H8c-.41 0-.75-.34-.75-.75ZM20.39 8.11c-1-.99-2.37-1.61-3.89-1.61H14c-.55 0-1 .45-1 1v3.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3v3.75c0 .55.45 1 1 1h2.23c3.15 0 5.89-2.58 5.76-5.72a5.49 5.49 0 0 0-1.6-3.67ZM13 11.25h-2v1.5h2v-1.5Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M8.99 21.501c-1.66 0-3.33-.63-4.6-1.9-2.53-2.54-2.53-6.66 0-9.19.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06a5.003 5.003 0 0 0 0 7.07 5.003 5.003 0 0 0 7.07 0c.94-.94 1.46-2.2 1.46-3.54 0-1.33-.52-2.59-1.46-3.54a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a6.45 6.45 0 0 1 1.9 4.6c0 1.74-.68 3.37-1.9 4.6a6.432 6.432 0 0 1-4.59 1.9Z" fill={color}></path><path d="M19.068 14.158c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c2.05-2.05 2.05-5.38 0-7.42-2.05-2.05-5.38-2.05-7.42 0a5.22 5.22 0 0 0-1.54 3.71c0 1.4.55 2.72 1.54 3.71.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0a6.719 6.719 0 0 1-1.98-4.77c0-1.8.7-3.5 1.98-4.77 2.63-2.63 6.91-2.63 9.55 0 2.63 2.63 2.63 6.92 0 9.55-.15.14-.35.21-.54.21Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13.5 12c0 3.18-2.57 5.75-5.75 5.75S2 15.18 2 12s2.57-5.75 5.75-5.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M10 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Link2 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
