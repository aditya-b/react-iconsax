import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-5.97 19H7.91C5.2 21 3 18.8 3 16.09v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.31c0 1.88 1.53 3.41 3.41 3.41h2.31a.749.749 0 1 1 0 1.5Zm0-16.5H7.91C6.03 4.5 4.5 6.03 4.5 7.91v2.31a.749.749 0 1 1-1.5 0V7.91C3 5.2 5.2 3 7.91 3h2.31a.749.749 0 1 1 0 1.5ZM21 16.09C21 18.8 18.8 21 16.09 21H14.7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.39c1.88 0 3.41-1.53 3.41-3.41V14.7c0-.41.34-.75.75-.75s.75.34.75.75v1.39Zm0-5.87c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.91c0-1.88-1.53-3.41-3.41-3.41h-2.31a.749.749 0 1 1 0-1.5h2.31C18.8 3 21 5.2 21 7.91v2.31Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.89 2.36-5.25 5.25-5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-2.07 0-3.75 1.68-3.75 3.75V9c0 .41-.34.75-.75.75ZM22 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.07-1.68-3.75-3.75-3.75H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.89 0 5.25 2.36 5.25 5.25V9c0 .41-.34.75-.75.75ZM17.5 22.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.5c2.07 0 3.75-1.68 3.75-3.75V16c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 2.89-2.36 5.25-5.25 5.25ZM9 22.75H6.5c-2.89 0-5.25-2.36-5.25-5.25V15c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 2.07 1.68 3.75 3.75 3.75H9c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M15 2h2.5C19.99 2 22 4.01 22 6.5V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Maximize2 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
