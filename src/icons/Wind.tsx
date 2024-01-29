import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M18.5 22.75a4.26 4.26 0 0 1-4.25-4.25V18c0-.41.34-.75.75-.75s.75.34.75.75v.5c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5a4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25ZM18.5 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5c1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75-2.75 1.23-2.75 2.75V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.5a4.26 4.26 0 0 1 4.25-4.25 4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25Z" fill={color}></path><path d="M9.31 9.751H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.31c1.07 0 1.94-.87 1.94-1.94 0-1.07-.87-1.94-1.94-1.94-1.07 0-1.94.87-1.94 1.94v.38a.749.749 0 1 1-1.5 0v-.38a3.44 3.44 0 1 1 3.44 3.44Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M18.5 22.75a4.26 4.26 0 0 1-4.25-4.25V18c0-.41.34-.75.75-.75s.75.34.75.75v.5c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5a4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25ZM18.5 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5c1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75-2.75 1.23-2.75 2.75V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.5a4.26 4.26 0 0 1 4.25-4.25 4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25Z" fill={color}></path><path d="M9.31 9.751H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.31c1.07 0 1.94-.87 1.94-1.94 0-1.07-.87-1.94-1.94-1.94-1.07 0-1.94.87-1.94 1.94v.38c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.38a3.44 3.44 0 1 1 3.44 3.44Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2 15h16.5c1.93 0 3.5 1.57 3.5 3.5S20.43 22 18.5 22 15 20.43 15 18.5V18" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M2 12h16.5c1.92 0 3.5-1.57 3.5-3.5C22 6.58 20.42 5 18.5 5A3.51 3.51 0 0 0 15 8.5V9" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 9.001h7.31a2.69 2.69 0 1 0-2.69-2.69v.38" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Wind = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
