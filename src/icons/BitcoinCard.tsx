import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M17.38 10.75c0-.22-.24-.5-.5-.5H14.5v1h2.38c.27 0 .5-.22.5-.5zM17.32 12.75H14.5v1h2.82c.37 0 .68-.23.68-.5s-.31-.5-.68-.5z"></path><path fill={color} d="M17.85 3.398H6.15C3.86 3.398 2 5.248 2 7.538v8.92c0 2.29 1.86 4.14 4.15 4.14h11.7c2.29 0 4.15-1.85 4.15-4.14v-8.92c0-2.29-1.86-4.14-4.15-4.14zm-8.6 9.35h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zm8.07 2.5h-1.06v.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.5h-2.01c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H13v-3.5h-.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.01v-.5c0-.41.34-.75.75-.75s.75.34.75.75v.5h.61c1.07 0 2 .93 2 2 0 .33-.09.64-.23.92.52.37.86.94.86 1.58 0 1.1-.98 2-2.18 2z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13 9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 17.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 17.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M17.56 21.25H6.44c-3.98 0-5.19-1.2-5.19-5.14V7.89c0-3.94 1.21-5.14 5.19-5.14h6.84c.41 0 .75.34.75.75s-.34.75-.75.75H6.44c-3.14 0-3.69.54-3.69 3.64v8.22c0 3.1.55 3.64 3.69 3.64h11.12c3.14 0 3.69-.54 3.69-3.64v-4.78c0-.41.34-.75.75-.75s.75.34.75.75v4.78c0 3.94-1.21 5.14-5.19 5.14Z" fill={color}></path><path d="M20.12 6.5H17c-.41 0-.75-.34-.75-.75v-2.5c0-.41.34-.75.75-.75h3.13c1.07 0 2 .93 2 2-.01 1.1-.9 2-2.01 2ZM17.75 5h2.38c.28 0 .5-.22.5-.5 0-.22-.24-.5-.5-.5h-2.38v1Z" fill={color}></path><path d="M20.57 9H17c-.41 0-.75-.34-.75-.75v-2.5c0-.41.34-.75.75-.75h3.57c1.2 0 2.18.9 2.18 2s-.98 2-2.18 2Zm-2.82-1.5h2.82c.37 0 .68-.23.68-.5s-.31-.5-.68-.5h-2.82v1Z" fill={color}></path><path d="M18.76 10.25c-.41 0-.75-.34-.75-.75V8.25c0-.41.34-.75.75-.75s.75.34.75.75V9.5c0 .42-.33.75-.75.75ZM18.76 4c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v1.25c0 .41-.33.75-.75.75Z" fill={color}></path><path d="M18.19 4H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.19c.41 0 .75.34.75.75s-.34.75-.75.75ZM18.19 9H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.19c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2 8.5h11" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M6 16.5h2M10.5 16.5h4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22 11.33v4.78c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h6.84" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3.25h3.13c.69 0 1.25.63 1.25 1.25 0 .69-.56 1.25-1.25 1.25H17v-2.5ZM17 5.75h3.57c.79 0 1.43.56 1.43 1.25s-.64 1.25-1.43 1.25H17v-2.5ZM18.76 8.25V9.5M18.76 2v1.25M18.19 3.25H16M18.19 8.25H16"></path></g>
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

export const BitcoinCard = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
