import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17.02 2.88C16.54 2.4 15.58 2 14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l1.53 1.53L18.55 4.41l-1.53-1.53ZM21.12 6.979l-1.51-1.51-14.14 14.14 1.51 1.51c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12v-5.8c0-.68-.4-1.64-.88-2.12ZM2.49 20.47c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.92-1.92-1.06-1.06-1.92 1.92Z" fill={color}></path><path d="M21.53 3.55c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.92 1.92 1.06 1.06 1.92-1.92Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M14.9 22.75H9.1c-.89 0-2.03-.47-2.65-1.1l-4.1-4.1c-.63-.63-1.1-1.77-1.1-2.65V9.1c0-.89.47-2.03 1.1-2.65l4.1-4.1c.63-.63 1.77-1.1 2.65-1.1h5.8c.89 0 2.03.47 2.65 1.1l4.1 4.1c.63.63 1.1 1.77 1.1 2.65v5.8c0 .89-.47 2.03-1.1 2.65l-4.1 4.1c-.63.63-1.76 1.1-2.65 1.1Zm-5.8-20c-.49 0-1.25.31-1.59.66l-4.1 4.1c-.34.35-.66 1.1-.66 1.59v5.8c0 .49.31 1.25.66 1.59l4.1 4.1c.35.34 1.1.66 1.59.66h5.8c.49 0 1.25-.31 1.59-.66l4.1-4.1c.34-.35.66-1.1.66-1.59V9.1c0-.49-.31-1.25-.66-1.59l-4.1-4.1c-.35-.34-1.1-.66-1.59-.66H9.1Z" fill={color}></path><path d="M4.939 19.829c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l14.14-14.14c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-14.14 14.14c-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m4.94 19.081 14.14-14.14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Forbidden = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
