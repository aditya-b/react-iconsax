import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12 15.7v.11c0 .28-.22.5-.5.5h-9c-.28 0-.5-.22-.5-.5v-.11c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2zM2.5 17.309c-.28 0-.5.22-.5.5v1.99c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-1.99c0-.28-.22-.5-.5-.5h-9z"></path><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75"></path><path fill={color} d="M18.5 11a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 17.809H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10a.749.749 0 1 1 0 1.5Z" fill={color}></path><path d="M9.78 22.75H4.23c-2.19 0-2.97-.77-2.97-2.95v-4.1c0-2.18.78-2.95 2.97-2.95h5.55c2.19 0 2.97.77 2.97 2.95v4.11c0 2.17-.78 2.94-2.97 2.94Zm-5.56-8.5c-1.36 0-1.47.11-1.47 1.45v4.11c0 1.34.11 1.45 1.47 1.45h5.55c1.36 0 1.47-.11 1.47-1.45V15.7c0-1.34-.11-1.45-1.47-1.45H4.22ZM15 22.748a.752.752 0 0 1-.64-1.14l1.05-1.75c.21-.35.67-.47 1.03-.26.36.21.47.67.26 1.03l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.28-3.49 7.76-7.76 7.76ZM2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.752.752 0 0 1 .64 1.14L8.59 4.14c-.21.35-.67.47-1.03.26a.749.749 0 0 1-.26-1.03l.27-.45c-2.76.65-4.83 3.13-4.83 6.09.01.4-.33.74-.74.74ZM18.5 11.75a5.25 5.25 0 1 1-.001-10.501A5.25 5.25 0 0 1 18.5 11.75Zm0-9c-2.07 0-3.75 1.68-3.75 3.75 0 2.07 1.68 3.75 3.75 3.75 2.07 0 3.75-1.68 3.75-3.75 0-2.07-1.68-3.75-3.75-3.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2 17.059h10" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.22 13.5h5.56c1.78 0 2.22.44 2.22 2.2v4.11c0 1.76-.44 2.2-2.22 2.2H4.22c-1.78 0-2.22-.44-2.22-2.2V15.7c0-1.76.44-2.2 2.22-2.2Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.5 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const CardCoin = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
