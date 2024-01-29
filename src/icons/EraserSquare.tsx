import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-3.67 13.75-1.26 1.26c-.64.65-1.69.65-2.34 0l-1.93-1.93c-.65-.65-.64-1.69 0-2.34l1.27-1.26c.2-.19.51-.19.71 0l3.56 3.56c.19.2.19.52-.01.71Zm4.49-4.49-3.08 3.08c-.2.2-.51.2-.71 0l-3.56-3.56c-.2-.2-.2-.51 0-.71l3.08-3.08c.64-.65 1.69-.65 2.34 0l1.93 1.93c.65.65.65 1.7 0 2.34Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill={color}></path><path d="M10.091 18.249c-.62 0-1.23-.23-1.7-.7l-1.94-1.94c-.94-.94-.94-2.46 0-3.4l5.75-5.75c.94-.94 2.46-.94 3.4 0l1.94 1.94c.94.94.94 2.46 0 3.4l-5.75 5.75c-.47.46-1.08.7-1.7.7Zm-2.57-3.7 1.94 1.94c.35.35.93.35 1.28 0l5.75-5.75c.35-.35.35-.93 0-1.28l-1.94-1.94a.911.911 0 0 0-1.28 0l-5.75 5.75c-.35.35-.35.92 0 1.28Z" fill={color}></path><path d="M13.582 15.442c-.19 0-.38-.07-.53-.22l-4.28-4.28a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l4.28 4.28c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6.991 15.082 1.94 1.94c.64.64 1.7.64 2.34 0l5.75-5.75c.64-.64.64-1.7 0-2.34l-1.94-1.94c-.64-.64-1.7-.64-2.34 0l-5.75 5.75c-.65.64-.65 1.69 0 2.34ZM9.313 10.422l4.27 4.27"></path></g>
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

export const EraserSquare = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
