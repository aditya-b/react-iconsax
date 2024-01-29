import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M7.5 4.5h-.25V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.5H5.5C3.91 4.5 3 5.41 3 7v6c0 1.59.91 2.5 2.5 2.5h.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-6.5h.25c1.59 0 2.5-.91 2.5-2.5V7c0-1.59-.91-2.5-2.5-2.5ZM18.5 8.5h-.25V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v6.5h-.25c-1.59 0-2.5.91-2.5 2.5v6c0 1.59.91 2.5 2.5 2.5h.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.5h.25c1.59 0 2.5-.91 2.5-2.5v-6c0-1.59-.91-2.5-2.5-2.5Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M6.5 22.75c-.41 0-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75ZM6.5 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM17.5 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM17.5 9.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M7.5 15.75h-2c-1.72 0-2.75-1.03-2.75-2.75V7c0-1.72 1.03-2.75 2.75-2.75h2c1.72 0 2.75 1.03 2.75 2.75v6c0 1.72-1.03 2.75-2.75 2.75Zm-2-10c-.89 0-1.25.36-1.25 1.25v6c0 .89.36 1.25 1.25 1.25h2c.89 0 1.25-.36 1.25-1.25V7c0-.89-.36-1.25-1.25-1.25h-2ZM18.5 19.75h-2c-1.72 0-2.75-1.03-2.75-2.75v-6c0-1.72 1.03-2.75 2.75-2.75h2c1.72 0 2.75 1.03 2.75 2.75v6c0 1.72-1.03 2.75-2.75 2.75Zm-2-10c-.89 0-1.25.36-1.25 1.25v6c0 .89.36 1.25 1.25 1.25h2c.89 0 1.25-.36 1.25-1.25v-6c0-.89-.36-1.25-1.25-1.25h-2Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M6.5 22v-7M6.5 5V2M17.5 22v-3M17.5 9V2" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.5 7v6c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2V7c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2ZM20.5 11v6c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2v-6c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Candle = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
