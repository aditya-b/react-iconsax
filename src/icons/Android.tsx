import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M11 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2zM15 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2zM17 11v5c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zM5 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1zM21 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1zM9.6 7.6h4.8c.88 0 1.6-.72 1.6-1.6 0-2.21-1.79-4-4-4S8 3.79 8 6c0 .88.72 1.6 1.6 1.6z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M10 22.75c-.96 0-1.75-.79-1.75-1.75v-3c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75v3c0 .96-.79 1.75-1.75 1.75Zm-.25-4V21c0 .27.5.27.5 0v-2.25h-.5ZM14 22.75c-.96 0-1.75-.79-1.75-1.75v-3c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75v3c0 .96-.79 1.75-1.75 1.75Zm-.25-4V21c0 .27.5.27.5 0v-2.25h-.5Z" fill={color}></path><path d="M15 18.75H9c-1.52 0-2.75-1.23-2.75-2.75v-5c0-1.52 1.23-2.75 2.75-2.75h6c1.52 0 2.75 1.23 2.75 2.75v5c0 1.52-1.23 2.75-2.75 2.75Zm-6-9c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25H9ZM4 16.75c-.96 0-1.75-.79-1.75-1.75v-4c0-.96.79-1.75 1.75-1.75s1.75.79 1.75 1.75v4c0 .96-.79 1.75-1.75 1.75Zm0-6c-.14 0-.25.11-.25.25v4c0 .28.5.28.5 0v-4c0-.14-.11-.25-.25-.25ZM20 16.75c-.96 0-1.75-.79-1.75-1.75v-4c0-.96.79-1.75 1.75-1.75s1.75.79 1.75 1.75v4c0 .96-.79 1.75-1.75 1.75Zm0-6c-.14 0-.25.11-.25.25v4c0 .28.5.28.5 0v-4c0-.14-.11-.25-.25-.25Z" fill={color}></path><path d="M13 18.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.4 7.748H9.6c-1.3 0-2.35-1.05-2.35-2.35 0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75c0 1.3-1.05 2.35-2.35 2.35Zm-2.4-5.6c-1.79 0-3.25 1.46-3.25 3.25 0 .47.38.85.85.85h4.8c.47 0 .85-.38.85-.85 0-1.79-1.46-3.25-3.25-3.25Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2ZM15 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2ZM17 11v5c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M5 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1ZM21 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13 18h-2" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M9.6 6.998h4.8c.88 0 1.6-.72 1.6-1.6 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .88.72 1.6 1.6 1.6Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Android = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
