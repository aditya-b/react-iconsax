import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.969 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10Zm-1.25 13.03c0 .48-.2.67-.71.67h-1.3c-.51 0-.71-.19-.71-.67V8.97c0-.48.2-.67.71-.67h1.29c.51 0 .71.19.71.67v6.06h.01Zm5.28 0c0 .48-.2.67-.71.67h-1.29c-.51 0-.71-.19-.71-.67V8.97c0-.48.2-.67.71-.67h1.29c.51 0 .71.19.71.67v6.06Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.969 22.75c-5.92 0-10.75-4.82-10.75-10.75s4.83-10.75 10.75-10.75S22.719 6.07 22.719 12s-4.82 10.75-10.75 10.75Zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25Z" fill={color}></path><path d="M10.01 15.95h-1.3c-.92 0-1.46-.53-1.46-1.42V9.47c0-.89.55-1.42 1.46-1.42H10c.92 0 1.46.53 1.46 1.42v5.06c.01.89-.54 1.42-1.45 1.42Zm-1.26-1.5h1.22v-4.9H8.76l-.01 4.9ZM15.29 15.95H14c-.92 0-1.46-.53-1.46-1.42V9.47c0-.89.55-1.42 1.46-1.42h1.29c.92 0 1.46.53 1.46 1.42v5.06c0 .89-.55 1.42-1.46 1.42Zm-1.26-1.5h1.22v-4.9h-1.21l-.01 4.9Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.969 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M10.72 14.53V9.47c0-.48-.2-.67-.71-.67h-1.3c-.51 0-.71.19-.71.67v5.06c0 .48.2.67.71.67H10c.52 0 .72-.19.72-.67ZM16 14.53V9.47c0-.48-.2-.67-.71-.67H14c-.51 0-.71.19-.71.67v5.06c0 .48.2.67.71.67h1.29c.51 0 .71-.19.71-.67Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const PauseCircle = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
