import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.969 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10Zm4.26 11.23c0 1.66-1.34 3-3 3h-2.46c-1.66 0-3-1.34-3-3v-2.46c0-1.66 1.34-3 3-3h2.46c1.66 0 3 1.34 3 3v2.46Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.969 22.75c-5.92 0-10.75-4.82-10.75-10.75s4.83-10.75 10.75-10.75S22.719 6.07 22.719 12s-4.82 10.75-10.75 10.75Zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25Z" fill={color}></path><path d="M13.27 16.98h-2.54c-2.53 0-3.71-1.18-3.71-3.71v-2.54c0-2.53 1.18-3.71 3.71-3.71h2.54c2.53 0 3.71 1.18 3.71 3.71v2.54c0 2.53-1.18 3.71-3.71 3.71Zm-2.54-8.46c-1.69 0-2.21.52-2.21 2.21v2.54c0 1.69.52 2.21 2.21 2.21h2.54c1.69 0 2.21-.52 2.21-2.21v-2.54c0-1.69-.52-2.21-2.21-2.21h-2.54Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.969 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M10.73 16.23h2.54c2.12 0 2.96-.85 2.96-2.96v-2.54c0-2.12-.85-2.96-2.96-2.96h-2.54c-2.12 0-2.96.85-2.96 2.96v2.54c0 2.11.85 2.96 2.96 2.96Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const StopCircle = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
