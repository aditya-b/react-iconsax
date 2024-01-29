import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill={color}></path><path d="M17.79 9.34a4.455 4.455 0 0 1-3.13-3.13c-.26-.96-.2-1.88.09-2.7a.99.99 0 0 0-.72-1.3c-1.47-.31-3.06-.3-4.72.15-3.78 1.06-6.67 4.33-7.21 8.22-.92 6.62 4.69 12.23 11.31 11.32 3.9-.54 7.16-3.43 8.21-7.22.46-1.65.47-3.24.16-4.72-.12-.58-.74-.91-1.3-.72-.81.29-1.73.35-2.69.1Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19 8.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25S17.76 7.25 19 7.25 21.25 6.24 21.25 5 20.24 2.75 19 2.75Z" fill={color}></path><path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25c.73 0 1.46.07 2.17.22.41.08.67.48.58.89-.08.41-.48.67-.88.58A8.99 8.99 0 0 0 12 2.75C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25c0-.62-.06-1.24-.18-1.84-.08-.41.18-.8.59-.88.41-.09.8.18.88.59.14.7.21 1.42.21 2.14 0 5.92-4.82 10.74-10.75 10.74Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.02 2.2C13.36 2.07 12.69 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.68-.07-1.35-.2-1.99" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const NotificationCircle = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
