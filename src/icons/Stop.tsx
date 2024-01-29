import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m20.36 7.78-15.82 9.5c-.61.37-1.43 0-1.51-.71-.02-.19-.03-.38-.03-.57V8c0-3 2-5 5-5h8c3 0 4.23 1.54 4.81 3.65.12.44-.07.9-.45 1.13ZM21 11.09V16c0 3-2 5-5 5H8c-.92 0-1.79-.25-2.53-.69-.64-.37-.6-1.31.03-1.69l13.98-8.39c.67-.4 1.52.08 1.52.86Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M14.7 21.75H9.3c-4.94 0-7.05-2.11-7.05-7.05V9.3c0-4.94 2.11-7.05 7.05-7.05h5.4c4.94 0 7.05 2.11 7.05 7.05v5.4c0 4.94-2.11 7.05-7.05 7.05Zm-5.4-18c-4.1 0-5.55 1.45-5.55 5.55v5.4c0 4.1 1.45 5.55 5.55 5.55h5.4c4.1 0 5.55-1.45 5.55-5.55V9.3c0-4.1-1.45-5.55-5.55-5.55H9.3Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9.3 21h5.4c4.5 0 6.3-1.8 6.3-6.3V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3v5.4C3 19.2 4.8 21 9.3 21Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Stop = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
