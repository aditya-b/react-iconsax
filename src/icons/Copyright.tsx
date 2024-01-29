import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm.24 13.25c.78 0 1.55-.29 2.14-.81.31-.27.79-.24 1.06.07s.24.79-.07 1.06c-.87.77-1.98 1.19-3.13 1.19-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75c1.15 0 2.27.42 3.13 1.19.31.27.34.75.07 1.06-.28.31-.75.34-1.06.07-.59-.52-1.35-.81-2.14-.81-1.79 0-3.25 1.46-3.25 3.25s1.46 3.23 3.25 3.23Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill={color}></path><path d="M12.24 16.75c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75c1.15 0 2.27.42 3.13 1.19.31.27.34.75.07 1.06-.27.31-.75.34-1.06.07-.59-.52-1.35-.81-2.14-.81-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25c.78 0 1.55-.29 2.14-.81.31-.27.79-.24 1.06.07s.24.79-.07 1.06a4.8 4.8 0 0 1-3.13 1.17Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M14.88 15a4 4 0 0 1-2.64 1c-2.21 0-4-1.79-4-4s1.79-4 4-4a4 4 0 0 1 2.64 1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Copyright = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
