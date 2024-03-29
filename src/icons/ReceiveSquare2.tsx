import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM8.64 7.15c.29-.29.77-.29 1.06 0l4.38 4.38V9.1c0-.41.34-.75.75-.75s.75.34.75.75v4.24c0 .1-.02.19-.06.29-.08.18-.22.33-.41.41-.09.04-.19.06-.29.06h-4.24c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.43L8.64 8.21a.754.754 0 010-1.06zm9.6 10.07c-2.01.67-4.12 1.01-6.24 1.01s-4.23-.34-6.24-1.01a.753.753 0 01-.47-.95c.13-.39.55-.61.95-.47 3.72 1.24 7.81 1.24 11.53 0 .39-.13.82.08.95.47.12.4-.09.82-.48.95z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"></path><path fill={color} d="M14.83 14.09h-4.24c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.49V9.1c0-.41.34-.75.75-.75s.75.34.75.75v4.24c0 .42-.34.75-.75.75z"></path><path fill={color} d="M14.83 14.09c-.19 0-.38-.07-.53-.22L8.64 8.21a.755.755 0 010-1.06c.29-.29.77-.29 1.06 0l5.66 5.66c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM12 18.23c-2.11 0-4.23-.34-6.24-1.01a.753.753 0 01-.47-.95c.13-.39.56-.61.95-.47 3.72 1.24 7.81 1.24 11.53 0 .39-.13.82.08.95.47.13.39-.08.82-.47.95-2.02.68-4.14 1.01-6.25 1.01z"></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"></path><g opacity=".4">
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.59 13.34h4.24V9.1M14.83 13.34L9.17 7.68"></path>
  </g><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 16.51c3.89 1.3 8.11 1.3 12 0" opacity=".4"></path>
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

export const ReceiveSquare2 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
