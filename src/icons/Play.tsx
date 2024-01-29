import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17.49 9.6 5.6 16.77c-.7.42-1.6-.08-1.6-.9v-8c0-3.49 3.77-5.67 6.8-3.93l4.59 2.64 2.09 1.2c.69.41.7 1.41.01 1.82ZM18.089 15.46l-4.05 2.34-4.04 2.33c-1.45.83-3.09.66-4.28-.18-.58-.4-.51-1.29.1-1.65l12.71-7.62c.6-.36 1.39-.02 1.5.67.25 1.55-.39 3.22-1.94 4.11Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M7.87 21.28c-.79 0-1.54-.19-2.2-.57-1.56-.9-2.42-2.73-2.42-5.14V8.44c0-2.42.86-4.24 2.42-5.14 1.56-.9 3.57-.73 5.67.48l6.17 3.56c2.09 1.21 3.25 2.87 3.25 4.67 0 1.8-1.15 3.46-3.25 4.67l-6.17 3.56c-1.21.69-2.39 1.04-3.47 1.04Zm0-17.06c-.54 0-1.02.12-1.45.37-1.08.62-1.67 1.99-1.67 3.85v7.12c0 1.86.59 3.22 1.67 3.85 1.08.63 2.56.45 4.17-.48l6.17-3.56c1.61-.93 2.5-2.12 2.5-3.37s-.89-2.44-2.5-3.37l-6.17-3.56c-.98-.56-1.9-.85-2.72-.85Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M4 12V8.44c0-4.42 3.13-6.23 6.96-4.02l3.09 1.78 3.09 1.78c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78C7.13 21.79 4 19.98 4 15.56V12Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Play = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
