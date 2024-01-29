import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-4.58 12.84c0 1.09-.85 1.94-1.94 1.94H8.19c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-3.08.67-3.77 2.46-4.83.12-.07.25-.1.38-.1.26 0 .51.13.65.37.21.36.09.82-.26 1.03-1.21.7-1.63.96-1.71 2.77h1.91c1.09 0 1.94.85 1.94 1.94v1.49h-.01Zm6.14 0c0 1.09-.85 1.94-1.94 1.94h-1.49c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-3.08.67-3.77 2.46-4.83.12-.07.25-.1.38-.1.26 0 .51.13.65.37.21.36.09.82-.26 1.03-1.21.72-1.63.98-1.71 2.79h1.91c1.09 0 1.94.85 1.94 1.94v1.47Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill={color}></path><path d="M9.68 16.782H8.19c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-.41.34-.75.75-.75h2.68c1.09 0 1.94.85 1.94 1.94v1.49a1.933 1.933 0 0 1-1.94 1.93Zm-1.93-3.87v1.92c0 .24.2.44.44.44h1.49c.32 0 .44-.24.44-.44v-1.49c0-.2-.11-.44-.44-.44H7.75v.01Z" fill={color}></path><path d="M7 12.91c-.41 0-.75-.34-.75-.75 0-3.08.67-3.77 2.46-4.83a.76.76 0 0 1 1.03.26c.21.35.09.82-.26 1.03-1.36.81-1.73 1.02-1.73 3.54 0 .42-.34.75-.75.75ZM15.809 16.782h-1.49c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-.41.34-.75.75-.75h2.68c1.09 0 1.94.85 1.94 1.94v1.49c0 1.07-.85 1.93-1.94 1.93Zm-1.92-3.87v1.92c0 .24.2.44.44.44h1.49c.32 0 .44-.24.44-.44v-1.49c0-.2-.11-.44-.44-.44h-1.93v.01Z" fill={color}></path><path d="M13.14 12.91c-.41 0-.75-.34-.75-.75 0-3.08.67-3.77 2.46-4.83.36-.21.82-.09 1.03.26.21.35.09.82-.26 1.03-1.36.81-1.73 1.02-1.73 3.54 0 .42-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19H8.19A1.2 1.2 0 0 1 7 14.84v-2.68M7 12.159c0-2.79.52-3.26 2.09-4.19M13.14 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19h-1.49a1.2 1.2 0 0 1-1.19-1.19v-2.68M13.14 12.159c0-2.79.52-3.26 2.09-4.19"></path></g>
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

export const QuoteDownSquare = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
