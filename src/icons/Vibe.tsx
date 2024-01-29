import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.05 8.29a.5.5 0 01.45-.28h5c.19 0 .36.11.45.28.09.17.07.37-.05.52l-2.5 3.33a.48.48 0 01-.4.2.48.48 0 01-.4-.2L9.1 8.81a.51.51 0 01-.05-.52zm8.56 2.15l-5 7a.74.74 0 01-.61.31c-.24 0-.47-.12-.61-.31l-5-7a.76.76 0 01.17-1.05.76.76 0 011.05.17L12 15.71l4.39-6.15c.24-.34.71-.42 1.05-.17.33.24.41.71.17 1.05z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 12.6c-.24 0-.46-.11-.6-.3L8.9 8.97a.752.752 0 0 1-.07-.79c.13-.26.39-.41.67-.41h5c.28 0 .54.16.67.41.13.25.1.56-.07.79l-2.5 3.33c-.14.19-.36.3-.6.3Zm-1-3.33 1 1.33 1-1.33h-2Z" fill={color}></path><path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill={color}></path><path d="M12 17.748c-.24 0-.47-.12-.61-.31l-5-7a.76.76 0 0 1 .17-1.05.76.76 0 0 1 1.05.17l4.39 6.15 4.39-6.15c.24-.34.71-.42 1.05-.17.34.24.42.71.17 1.05l-5 7c-.14.19-.37.31-.61.31Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="m9.5 8.52 2.5 3.33 2.5-3.33h-5Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path><path opacity=".4" d="m17 10-5 7-5-7" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Vibe = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
