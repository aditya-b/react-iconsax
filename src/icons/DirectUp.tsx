import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m17.02 21.292-3.48-1.74c-.97-.48-2.1-.48-3.07 0l-3.48 1.74c-2.99 1.49-6.14-1.72-4.58-4.67l.82-1.54c.11-.21.29-.38.51-.48l12.64-5.7c.52-.23 1.13-.02 1.39.48l3.81 7.24c1.56 2.95-1.58 6.16-4.56 4.67ZM15.6 7.69l-8.28 3.73c-.93.42-1.87-.58-1.39-1.48l3.04-5.77c1.29-2.45 4.79-2.45 6.08 0l1.07 2.04c.28.55.04 1.23-.52 1.48Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M18.122 21.75c-.6 0-1.21-.14-1.79-.43l-3.24-1.62c-.68-.34-1.5-.34-2.19 0l-3.24 1.62c-1.56.78-3.36.48-4.58-.77-1.22-1.25-1.49-3.05-.67-4.6l6.1-11.59a3.93 3.93 0 0 1 3.49-2.11c1.47 0 2.81.81 3.49 2.11l6.1 11.59c.81 1.55.55 3.35-.67 4.6-.77.79-1.77 1.2-2.8 1.2Zm-6.12-3.81c.61 0 1.21.14 1.76.41l3.24 1.62c1.17.59 2.24.14 2.84-.48.6-.62 1.03-1.69.42-2.85l-6.1-11.59c-.43-.81-1.24-1.3-2.16-1.3-.92 0-1.73.49-2.16 1.31l-6.1 11.59c-.61 1.16-.19 2.24.42 2.85.61.61 1.67 1.06 2.84.48l3.24-1.62c.55-.28 1.15-.42 1.76-.42Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.17 4.71L3.07 16.3c-1.45 2.75 1.48 5.74 4.26 4.35l3.24-1.62c.9-.45 1.96-.45 2.86 0l3.24 1.62c2.78 1.39 5.7-1.6 4.26-4.35l-6.1-11.59c-1.2-2.28-4.46-2.28-5.66 0z"></path>
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

export const DirectUp = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
