import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.529 15.93c-.16-.27-.61-.69-1.73-.49-.62.11-1.25.16-1.88.13a8.41 8.41 0 0 1-5.91-2.82c-1.3-1.45-2.1-3.34-2.11-5.38 0-1.14.22-2.24.67-3.28.44-1.01.13-1.54-.09-1.76-.23-.23-.77-.55-1.83-.11-4.09 1.72-6.62 5.82-6.32 10.21.3 4.13 3.2 7.66 7.04 8.99a10 10 0 0 0 2.89.55c.16.01.32.02.48.02 3.35 0 6.49-1.58 8.47-4.27.67-.93.49-1.52.32-1.79Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12.459 22.748c-.17 0-.34 0-.51-.01-5.6-.25-10.28-4.76-10.67-10.26-.34-4.72 2.39-9.13 6.79-10.98 1.25-.52 1.91-.12 2.19.17.28.28.67.93.15 2.12a8.196 8.196 0 0 0-.68 3.35c.02 4.43 3.7 8.19 8.19 8.37.65.03 1.29-.02 1.91-.13 1.32-.24 1.87.29 2.08.63.21.34.45 1.07-.35 2.15-2.12 2.9-5.49 4.59-9.1 4.59Zm-9.69-10.38c.34 4.76 4.4 8.66 9.24 8.87 3.29.16 6.41-1.34 8.33-3.96.15-.21.22-.36.25-.44-.09-.01-.25-.02-.5.03-.73.13-1.49.18-2.24.15-5.28-.21-9.6-4.64-9.63-9.86 0-1.38.27-2.71.82-3.96.1-.22.12-.37.13-.45-.09 0-.25.02-.51.13-3.81 1.6-6.17 5.42-5.89 9.49Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2.031 12.42c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14-4.89-.2-8.89-4.29-8.91-9.12-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3-3.96 1.67-6.67 5.66-6.34 10.23Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Moon = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
