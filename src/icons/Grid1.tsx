import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M7.75 2v5.8H2C2 4.19 4.15 2.02 7.75 2ZM22 7.8h-5.75V2c3.6.02 5.75 2.19 5.75 5.8ZM22 16.3c-.04 3.55-2.18 5.68-5.75 5.7v-5.7H22ZM7.75 16.3V22c-3.57-.02-5.71-2.15-5.75-5.7h5.75ZM7.75 9.3H2v5.5h5.75V9.3ZM22 9.3h-5.75v5.5H22V9.3ZM14.75 9.3h-5.5v5.5h5.5V9.3ZM14.75 2h-5.5v5.8h5.5V2ZM14.75 16.3h-5.5V22h5.5v-5.7Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill={color}></path><path d="M22 9.25H2.03c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H22c.41 0 .75.34.75.75s-.34.75-.75.75ZM22 16.25H2.03c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H22c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M8.51 22.742c-.41 0-.75-.34-.75-.75V2.012c0-.41.34-.75.75-.75s.75.34.75.75v19.97c0 .42-.33.76-.75.76ZM15.51 22.742c-.41 0-.75-.34-.75-.75V2.012c0-.41.34-.75.75-.75s.75.34.75.75v19.97c0 .42-.33.76-.75.76Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.03 8.5H22M2.03 15.5H22M8.51 21.988V2.008M15.51 21.988V2.008"></path></g>
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

export const Grid1 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
