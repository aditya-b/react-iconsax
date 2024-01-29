import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17 4H7C4 4 2 5.5 2 9v3.56c0 .37.38.6.71.45.98-.45 2.11-.62 3.3-.41 2.63.47 4.56 2.91 4.49 5.58-.01.42-.07.83-.18 1.23-.08.31.17.6.49.6H17c3 0 5-1.5 5-5V9c0-3.5-2-5-5-5Zm-5 10.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Zm7.25-.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4Z" fill={color}></path><path d="M5 14c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06A3.97 3.97 0 0 0 5 22c1.46 0 2.73-.78 3.42-1.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4Zm1.97 3.67-2.13 1.97c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-.99-.99a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.48.48 1.6-1.48c.3-.28.78-.26 1.06.04s.26.78-.04 1.06Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 15.25c-1.79 0-3.25-1.46-3.25-3.25S10.21 8.75 12 8.75s3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75ZM18.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM5 22.75c-1.66 0-3.22-.88-4.06-2.31C.49 19.72.25 18.87.25 18c0-2.62 2.13-4.75 4.75-4.75S9.75 15.38 9.75 18c0 .87-.24 1.72-.69 2.45-.84 1.42-2.4 2.3-4.06 2.3Zm0-8c-1.79 0-3.25 1.46-3.25 3.25 0 .59.16 1.17.47 1.67.58.98 1.65 1.58 2.78 1.58A3.256 3.256 0 0 0 8.25 18c0-1.79-1.46-3.25-3.25-3.25Z" fill={color}></path><path d="M4.429 19.741c-.19 0-.38-.07-.53-.22l-.99-.99a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.48.48 1.6-1.48c.3-.28.78-.26 1.06.04s.26.78-.04 1.06l-2.13 1.97c-.15.13-.33.2-.51.2Z" fill={color}></path><path d="M17 20.75H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c2.86 0 4.25-1.39 4.25-4.25V9c0-2.86-1.39-4.25-4.25-4.25H7C4.14 4.75 2.75 6.14 2.75 9v6.3c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v6c0 3.65-2.1 5.75-5.75 5.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 9.5v5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 5 22a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 18c0-2.21 1.79-4 4-4s4 1.79 4 4Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="m3.441 18 .99.99 2.13-1.97" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 15.3V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5H8.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const MoneyTick = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
