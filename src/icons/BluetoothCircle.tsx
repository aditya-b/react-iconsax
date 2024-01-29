import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m12.9 10.592 1.67-1.53-1.67-1.39v2.92ZM12.9 16.33l1.67-1.39-1.67-1.53v2.92Z" fill={color}></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm3.72 11.95c.29.27.45.64.44 1.02-.01.38-.19.75-.49 1L13.6 17.7c-.38.32-.73.41-1 .41-.22 0-.39-.06-.49-.1-.22-.1-.72-.43-.72-1.34V14l-2.3 2.11c-.3.28-.78.26-1.06-.05A.746.746 0 0 1 8.08 15l3.28-3-3.28-3.01A.755.755 0 0 1 9.1 7.88L11.4 10V7.33c0-.9.5-1.23.72-1.34.21-.1.79-.27 1.49.3l2.06 1.72c.3.25.48.62.49 1 .01.38-.15.76-.44 1.02L13.58 12l2.14 1.95Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12.6 18.109c-.22 0-.39-.06-.49-.1-.22-.1-.72-.43-.72-1.34v-2.67l-2.3 2.11c-.3.28-.78.26-1.06-.05a.746.746 0 0 1 .05-1.06l3.28-3.01-3.28-3.01a.746.746 0 0 1-.05-1.06c.28-.3.76-.33 1.06-.05l2.3 2.11v-2.66c0-.9.5-1.23.72-1.34.21-.1.79-.27 1.49.3l2.06 1.72c.3.25.48.62.49 1 .01.38-.15.76-.44 1.02l-2.13 1.95 2.13 1.95c.29.27.45.64.44 1.02-.01.38-.19.75-.49 1l-2.06 1.72c-.38.36-.73.45-1 .45Zm.3-4.7v2.92l1.67-1.39-1.67-1.53Zm0-5.74v2.92l1.67-1.53-1.67-1.39Z" fill={color}></path><path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="m8.59 15.562 6.62-6.07a.57.57 0 0 0-.02-.89l-2.06-1.72c-.54-.45-.97-.24-.97.46v9.33c0 .7.44.9.97.46l2.06-1.72c.29-.24.3-.64.02-.89l-6.62-6.07" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const BluetoothCircle = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
