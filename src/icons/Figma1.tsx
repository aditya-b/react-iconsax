import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12 12c0-1.1.9-2 2-2h-2v2z"></path><path fill={color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 10c0 1.1-.9 2-2 2s-2-.9-2-2v4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c-1.1 0-2-.9-2-2s.9-2 2-2c-1.1 0-2-.9-2-2s.9-2 2-2h4c1.1 0 2 .9 2 2s-.9 2-2 2c1.1 0 2 .9 2 2z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12.75 10.75H10c-1.52 0-2.75-1.23-2.75-2.75S8.48 5.25 10 5.25h2.75v5.5Zm-2.75-4a1.25 1.25 0 0 0 0 2.5h1.25v-2.5H10Z" fill={color}></path><path d="M12.75 14.75H10c-1.52 0-2.75-1.23-2.75-2.75S8.48 9.25 10 9.25h2.75v5.5Zm-2.75-4a1.25 1.25 0 0 0 0 2.5h1.25v-2.5H10Z" fill={color}></path><path d="M10 18.75c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75h2.75V16c0 1.52-1.23 2.75-2.75 2.75Zm0-4A1.25 1.25 0 1 0 11.25 16v-1.25H10ZM14 10.75h-2.75v-5.5H14c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75Zm-1.25-1.5H14a1.25 1.25 0 0 0 0-2.5h-1.25v2.5Z" fill={color}></path><path d="M14 14.75c-1.52 0-2.75-1.23-2.75-2.75S12.48 9.25 14 9.25s2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" fill={color}></path><path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 2H8.67C6.83 2 5.34 3.49 5.34 5.33s1.49 3.33 3.33 3.33H12V2ZM12 8.672H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33H12v-6.66Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M12 15.328H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33 3.33-1.49 3.33-3.33v-3.33Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"><path d="M12 2h3.33c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33H12V2Z" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.33 8.672c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33-3.33-1.49-3.33-3.33 1.49-3.33 3.33-3.33Z"></path></g>
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

export const Figma1 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
