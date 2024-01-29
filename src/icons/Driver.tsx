import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19.32 2H4.68C3.21 2 2 3.21 2 4.68v2.63C2 8.79 3.21 10 4.68 10h14.63C20.79 10 22 8.79 22 7.32V4.68C22 3.21 20.79 2 19.32 2ZM6.75 7c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v2Zm4 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v2ZM18 6.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.32 14H4.68C3.21 14 2 15.21 2 16.68v2.63C2 20.79 3.21 22 4.68 22h14.63c1.48 0 2.68-1.21 2.68-2.68v-2.63A2.68 2.68 0 0 0 19.32 14ZM6.75 19c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2Zm4 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2Zm7.25-.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19.32 10.752H4.69c-1.89 0-3.43-1.54-3.43-3.43v-2.63c0-1.89 1.54-3.43 3.43-3.43h14.63c1.89 0 3.43 1.54 3.43 3.43v2.63c0 1.89-1.54 3.43-3.43 3.43Zm-14.64-8c-1.07 0-1.93.87-1.93 1.93v2.63c0 1.07.87 1.93 1.93 1.93h14.63c1.07 0 1.93-.87 1.93-1.93v-2.63c0-1.07-.87-1.93-1.93-1.93H4.68ZM19.32 22.752H4.69c-1.89 0-3.43-1.54-3.43-3.43v-2.63c0-1.89 1.54-3.43 3.43-3.43h14.63c1.89 0 3.43 1.54 3.43 3.43v2.63c0 1.89-1.54 3.43-3.43 3.43Zm-14.64-8c-1.07 0-1.93.87-1.93 1.93v2.63c0 1.07.87 1.93 1.93 1.93h14.63c1.07 0 1.93-.87 1.93-1.93v-2.63c0-1.07-.87-1.93-1.93-1.93H4.68Z" fill={color}></path><path d="M6 7.75c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM10 7.75c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM6 19.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM10 19.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM18 6.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 18.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19.32 10.002H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM19.32 22.002H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Driver = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
