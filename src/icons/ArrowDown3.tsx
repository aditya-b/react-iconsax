import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M9.33 6h5.34c3.32 0 4.67 2.35 3.02 5.22l-.74 1.28c-.18.31-.51.5-.87.5H7.92c-.36 0-.69-.19-.87-.5l-.74-1.28C4.66 8.35 6.01 6 9.33 6zM8.792 14h6.43c.39 0 .63.42.43.75l-.64 1.1c-1.65 2.87-4.37 2.87-6.02 0l-.64-1.1c-.19-.33.05-.75.44-.75z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M11.999 18.75c-1.42 0-2.72-.9-3.66-2.53l-2.67-4.63c-.95-1.63-1.07-3.2-.36-4.43.71-1.23 2.14-1.91 4.02-1.91h5.34c1.88 0 3.31.68 4.02 1.91.71 1.23.58 2.81-.36 4.44l-2.67 4.63c-.94 1.62-2.24 2.52-3.66 2.52zm-2.67-12c-1.33 0-2.29.41-2.72 1.16-.44.75-.31 1.79.35 2.93l2.67 4.63c.66 1.15 1.5 1.78 2.36 1.78.86 0 1.7-.63 2.36-1.78l2.67-4.63c.66-1.15.79-2.19.36-2.94-.43-.75-1.4-1.16-2.72-1.16h-5.33v.01z"></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 6h2.67c3.31 0 4.67 2.35 3.01 5.22l-1.34 2.31L15 15.84c-1.66 2.87-4.37 2.87-6.03 0l-1.34-2.31-1.34-2.31C4.66 8.35 6.01 6 9.33 6H12z"></path>
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

export const ArrowDown3 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
