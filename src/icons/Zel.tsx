import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.5 12.02c0 .18-.1.34-.25.43l-2 1.15c-.15.09-.34.09-.5 0l-2-1.15a.484.484 0 01-.25-.43v-.83l-1.25.72c-.15.09-.34.09-.5 0l-1.25-.72v.83c0 .18-.1.34-.25.43l-2 1.15c-.15.09-.34.09-.5 0l-2-1.15a.484.484 0 01-.25-.43v-2.28c0-.18.1-.34.25-.43l2-1.15c.15-.09.35-.09.5 0l1 .58V9.61c0-.18.1-.34.25-.43l2.25-1.29c.15-.09.34-.09.5 0l2.25 1.29c.16.09.25.25.25.43v1.13l1-.58c.15-.09.34-.09.5 0l2 1.15c.16.09.25.25.25.43v2.28z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M8 16.5c-.13 0-.26-.03-.37-.1l-2.5-1.44a.752.752 0 0 1-.38-.65v-2.85c0-.27.14-.52.38-.65l2.5-1.44a.77.77 0 0 1 .75 0l2.5 1.44c.23.13.38.38.38.65v2.85c0 .27-.14.52-.38.65l-2.5 1.44c-.12.07-.25.1-.38.1Zm-1.75-2.62L8 14.89l1.75-1.01v-1.99L8 10.88l-1.75 1.01v1.99ZM16 16.5c-.13 0-.26-.03-.37-.1l-2.5-1.44a.752.752 0 0 1-.38-.65v-2.85c0-.27.14-.52.38-.65l2.5-1.44a.77.77 0 0 1 .75 0l2.5 1.44c.23.13.38.38.38.65v2.85c0 .27-.14.52-.38.65l-2.5 1.44c-.12.07-.25.1-.38.1Zm-1.75-2.62L16 14.89l1.75-1.01v-1.99L16 10.88l-1.75 1.01v1.99Z" fill={color}></path><path d="M12 14.8c-.13 0-.26-.03-.37-.1l-1.5-.86a.752.752 0 0 1-.38-.65v-1.3l-.87-.5a.752.752 0 0 1-.38-.65V9.32c0-.27.14-.52.38-.65l2.75-1.58a.77.77 0 0 1 .75 0l2.75 1.58c.23.13.38.38.38.65v1.42c0 .27-.14.52-.38.65l-.87.5v1.3c0 .27-.14.52-.38.65l-1.5.86c-.12.07-.25.1-.38.1Zm-.75-2.04.75.43.75-.43v-1.3c0-.27.14-.52.38-.65l.87-.5v-.55l-2-1.15-2 1.15v.55l.87.5c.23.13.38.38.38.65v1.3Z" fill={color}></path><path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"><path d="M10.5 11.46v2.85L8 15.75l-2.5-1.44v-2.85L8 10.02l1.25.72 1.25.72ZM18.5 11.46v2.85L16 15.75l-2.5-1.44v-2.85l1.25-.72 1.25-.72 2.5 1.44Z"></path><path d="M14.75 9.33v1.41l-1.25.72v1.73l-1.5.86-1.5-.86v-1.73l-1.25-.72V9.33L12 7.75l2.75 1.58Z"></path></g><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"></path>
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

export const Zel = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
