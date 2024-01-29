import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15.609 5.5v10.16c0 .4-.12.79-.34 1.12l-2.73 4.06c-.43.65-1.5 1.11-2.41.77-.98-.33-1.63-1.43-1.42-2.41l.52-3.27c.04-.3-.04-.57-.21-.78a.93.93 0 0 0-.69-.31h-4.11c-.79 0-1.47-.32-1.87-.88-.38-.54-.45-1.24-.2-1.95l2.46-7.49c.31-1.24 1.66-2.25 3-2.25h3.9c.67 0 1.61.23 2.04.66l1.28.99a2 2 0 0 1 .78 1.58ZM18.79 17.608h1.03c1.55 0 2.18-.6 2.18-2.08V5.478c0-1.48-.63-2.08-2.18-2.08h-1.03c-1.55 0-2.18.6-2.18 2.08v10.06c0 1.47.63 2.07 2.18 2.07Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M10.8 22.098c-.29 0-.58-.05-.85-.15-1.25-.41-2.05-1.79-1.77-3.07l.49-3.15c.01-.07.01-.17-.06-.25a.28.28 0 0 0-.2-.08h-4c-.98 0-1.83-.41-2.33-1.12-.49-.69-.59-1.6-.27-2.48l2.39-7.28c.37-1.45 1.92-2.62 3.52-2.62h3.8c.56 0 1.78.17 2.43.82l3.03 2.34-.92 1.19-3.1-2.4c-.25-.25-.88-.45-1.44-.45h-3.8c-.9 0-1.87.72-2.07 1.53l-2.42 7.35c-.16.44-.13.84.08 1.13.22.31.62.49 1.11.49h4c.52 0 1 .22 1.33.6.34.39.49.91.41 1.45l-.5 3.21c-.12.56.26 1.19.8 1.37.48.18 1.12-.08 1.34-.4l4.1-6.1 1.24.84-4.1 6.1c-.47.7-1.36 1.13-2.24 1.13Z" fill={color}></path><path d="M19.62 18.1h-1c-1.85 0-2.75-.87-2.75-2.65v-9.8c0-1.78.9-2.65 2.75-2.65h1c1.85 0 2.75.87 2.75 2.65v9.8c0 1.78-.9 2.65-2.75 2.65Zm-1-13.6c-1.09 0-1.25.26-1.25 1.15v9.8c0 .89.16 1.15 1.25 1.15h1c1.09 0 1.25-.26 1.25-1.15v-9.8c0-.89-.16-1.15-1.25-1.15h-1Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="m16.52 5.648-3.1-2.4c-.4-.4-1.3-.6-1.9-.6h-3.8c-1.2 0-2.5.9-2.8 2.1l-2.4 7.3c-.5 1.4.4 2.6 1.9 2.6h4c.6 0 1.1.5 1 1.2l-.5 3.2c-.2.9.4 1.9 1.3 2.2.8.3 1.8-.1 2.2-.7l4.1-6.1" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M21.62 5.65v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Dislike = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
