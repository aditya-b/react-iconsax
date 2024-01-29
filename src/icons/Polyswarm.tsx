import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M14.5 18h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11c3.45 0 6.25-2.8 6.25-6.25S17.95 4 14.5 4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c4.27 0 7.75 3.48 7.75 7.75S18.77 18 14.5 18z"></path><path fill={color} d="M13.81 14.892H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.81c1.62 0 2.94-1.32 2.94-2.94 0-1.62-1.32-2.94-2.94-2.94H3.17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.64c2.45 0 4.44 1.99 4.44 4.44s-1.99 4.44-4.44 4.44z"></path><path fill={color} d="M8.5 11.5h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75zM6.5 21.5h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M14.5 18h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11c3.45 0 6.25-2.8 6.25-6.25S17.95 4 14.5 4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c4.27 0 7.75 3.48 7.75 7.75S18.77 18 14.5 18Z" fill={color}></path><path d="M13.81 14.892H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.81c1.62 0 2.94-1.32 2.94-2.94 0-1.62-1.32-2.94-2.94-2.94H3.17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.64c2.45 0 4.44 1.99 4.44 4.44s-1.99 4.44-4.44 4.44Z" fill={color}></path><path d="M8.5 11.5h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM6.5 21.5h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9.5 3.25h5c3.85 0 7 3.15 7 7s-3.15 7-7 7h-11" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M3.17 6.75h10.64a3.7 3.7 0 0 1 3.69 3.69 3.7 3.7 0 0 1-3.69 3.69H8M8.5 10.75h-3M6.5 20.75h-4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Polyswarm = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
