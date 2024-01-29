import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM6.85 9.44c.42-.97 1.21-1.72 2.3-2.06v-.8c0-.41.34-.75.75-.75s.75.34.75.75v.59h2.71v-.59c0-.41.34-.75.75-.75s.75.34.75.75v.79c1.09.34 1.88 1.09 2.3 2.06.14.33-.1.71-.46.71H7.31c-.36 0-.6-.37-.46-.7Zm10.65 4.73c0 2.2-1.5 4-4 4h-3c-2.5 0-4-1.8-4-4v-2.53c0-.28.22-.5.5-.5h10c.28 0 .5.22.5.5v2.53Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill={color}></path><path d="M9.89 8.578c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.33.75-.75.75ZM14.11 8.578c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM16.47 10.89H7.52c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.95a.749.749 0 1 1 0 1.5Z" fill={color}></path><path d="M13.5 18.422h-3c-2.75 0-4.75-2-4.75-4.75v-3c0-2.75 2-4.75 4.75-4.75h3c2.75 0 4.75 2 4.75 4.75v3c0 2.75-2 4.75-4.75 4.75Zm-3-11c-2.25 0-3.25 1.63-3.25 3.25v3c0 1.62 1 3.25 3.25 3.25h3c2.25 0 3.25-1.63 3.25-3.25v-3c0-1.62-1-3.25-3.25-3.25h-3Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="M9.89 5.828v2M14.11 5.828v2M7.53 10.137h8.94M13.5 17.668h-3c-2.5 0-4-1.8-4-4v-3c0-2.2 1.5-4 4-4h3c2.5 0 4 1.8 4 4v3c0 2.2-1.5 4-4 4Z"></path></g>
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

export const CalendarCircle = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
