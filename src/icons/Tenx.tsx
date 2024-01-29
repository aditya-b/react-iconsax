import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.79 10.71l-1.84 1.84a.996.996 0 01-1.41 0L12 12l-2.54 2.54a.996.996 0 01-1.41 0L6.21 12.7a.996.996 0 010-1.41l1.84-1.84a.996.996 0 011.41 0L12 12l2.54-2.54a.996.996 0 011.41 0l1.84 1.84c.39.38.39 1.02 0 1.41z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15.25 16.001c-.19 0-.38-.07-.53-.22L12 13.061l-2.72 2.72c-.29.29-.77.29-1.06 0l-3.25-3.25a.754.754 0 0 1 0-1.06l3.25-3.25c.29-.29.77-.29 1.06 0l2.72 2.72 2.72-2.72c.29-.29.77-.29 1.06 0l3.25 3.25c.29.29.29.77 0 1.06l-3.25 3.25c-.15.15-.34.22-.53.22Zm-2.19-4 2.19 2.19 2.19-2.19-2.19-2.19-2.19 2.19Zm-6.5 0 2.19 2.19 2.19-2.19-2.19-2.19-2.19 2.19Z" fill={color}></path><path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M12 12 8.75 8.75 5.5 12l3.25 3.25 6.5-6.5L18.5 12l-3.25 3.25L12 12Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path>
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

export const Tenx = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
