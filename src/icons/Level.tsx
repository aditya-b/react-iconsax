import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM7 12.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Zm5 1.5c-1.24 0-2.25-1.01-2.25-2.25S10.76 9.75 12 9.75s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25Zm7-1.5h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.75c-5.08 0-9.51-3.61-10.53-8.58a.76.76 0 0 1 .58-.89c.41-.08.8.18.89.58.88 4.28 4.69 7.39 9.06 7.39 4.36 0 8.17-3.09 9.06-7.35a.74.74 0 0 1 .89-.58c.41.08.67.48.58.89-1.04 4.94-5.46 8.54-10.53 8.54ZM21.81 10.808c-.35 0-.66-.25-.73-.61-.85-4.32-4.67-7.46-9.08-7.46-4.38 0-8.19 3.11-9.06 7.39-.08.41-.48.66-.89.58a.74.74 0 0 1-.58-.89c1.02-4.97 5.45-8.58 10.53-8.58 5.13 0 9.56 3.65 10.55 8.67.08.41-.19.8-.59.88-.05.02-.1.02-.15.02Z" fill={color}></path><path d="M12 14.25c-1.24 0-2.25-1.01-2.25-2.25S10.76 9.75 12 9.75s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25Zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2.2 14.02A9.992 9.992 0 0 0 12 22c4.82 0 8.84-3.41 9.79-7.95M21.81 10.06C20.91 5.46 16.86 2 12 2 7.17 2 3.14 5.43 2.2 9.98" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Level = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
