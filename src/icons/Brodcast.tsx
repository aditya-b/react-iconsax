import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12.001 14.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76ZM20 18.75a.75.75 0 0 1-.6-1.2A9.17 9.17 0 0 0 21.25 12c0-2.02-.64-3.94-1.85-5.55a.75.75 0 0 1 1.2-.9c1.41 1.87 2.15 4.1 2.15 6.45 0 2.35-.74 4.58-2.15 6.45-.15.2-.37.3-.6.3ZM4 18.75c-.23 0-.45-.1-.6-.3-1.41-1.87-2.15-4.1-2.15-6.45 0-2.35.74-4.58 2.15-6.45a.75.75 0 0 1 1.2.9A9.17 9.17 0 0 0 2.75 12c0 2.02.64 3.94 1.85 5.55a.75.75 0 0 1-.6 1.2ZM16.801 16.349a.75.75 0 0 1-.6-1.2c.69-.91 1.05-2 1.05-3.15s-.36-2.24-1.05-3.15a.75.75 0 0 1 1.2-.9 6.73 6.73 0 0 1 1.35 4.05c0 1.47-.47 2.88-1.35 4.05-.15.2-.37.3-.6.3ZM7.2 16.349c-.23 0-.45-.1-.6-.3a6.709 6.709 0 0 1-1.35-4.05c0-1.47.47-2.88 1.35-4.05a.75.75 0 0 1 1.2.9c-.69.91-1.05 2-1.05 3.15s.36 2.24 1.05 3.15a.75.75 0 0 1-.6 1.2Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 14.75c-1.52 0-2.75-1.23-2.75-2.75S10.48 9.25 12 9.25s2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM20 18.75a.75.75 0 0 1-.6-1.2A9.17 9.17 0 0 0 21.25 12c0-2.02-.64-3.94-1.85-5.55a.75.75 0 0 1 1.2-.9c1.41 1.87 2.15 4.1 2.15 6.45 0 2.35-.74 4.58-2.15 6.45-.15.2-.37.3-.6.3ZM4 18.75c-.23 0-.45-.1-.6-.3-1.41-1.87-2.15-4.1-2.15-6.45 0-2.35.74-4.58 2.15-6.45a.75.75 0 0 1 1.2.9A9.17 9.17 0 0 0 2.75 12c0 2.02.64 3.94 1.85 5.55a.75.75 0 0 1-.6 1.2ZM16.801 16.349a.75.75 0 0 1-.6-1.2c.69-.91 1.05-2 1.05-3.15s-.36-2.24-1.05-3.15a.75.75 0 0 1 1.2-.9 6.73 6.73 0 0 1 1.35 4.05c0 1.47-.47 2.88-1.35 4.05-.15.2-.37.3-.6.3ZM7.2 16.349c-.23 0-.45-.1-.6-.3a6.73 6.73 0 0 1-1.35-4.05c0-1.47.47-2.88 1.35-4.05a.75.75 0 0 1 1.2.9c-.69.91-1.05 2-1.05 3.15s.36 2.24 1.05 3.15a.75.75 0 0 1-.6 1.2Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 18c1.26-1.67 2-3.75 2-6s-.74-4.33-2-6M4 6c-1.26 1.67-2 3.75-2 6s.74 4.33 2 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M16.8 15.598c.75-1 1.2-2.25 1.2-3.6s-.45-2.6-1.2-3.6M7.2 8.398c-.75 1-1.2 2.25-1.2 3.6s.45 2.6 1.2 3.6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Brodcast = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
