import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.719 6.279v1.17c0 .98-.39 1.82-1.08 2.31-.43.32-.96.47-1.51.47-.34 0-.68-.05-1.03-.17l-5.38-1.79v9.73c0 2.62-2.13 4.75-4.75 4.75s-4.75-2.13-4.75-4.75 2.13-4.75 4.75-4.75c1.26 0 2.4.5 3.25 1.3V3.999c0-.97.4-1.81 1.09-2.31.69-.49 1.61-.6 2.53-.3l4.42 1.48c1.36.45 2.46 1.98 2.46 3.41Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M7.969 22.75c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75 4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75Zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25a3.25 3.25 0 0 0-3.25-3.25Z" fill={color}></path><path d="M11.969 18.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v14c0 .41-.33.75-.75.75Z" fill={color}></path><path d="M19.13 10.231c-.33 0-.68-.06-1.02-.17l-4.42-1.47c-1.38-.46-2.46-1.96-2.46-3.41v-1.18c0-.97.4-1.81 1.08-2.31.69-.5 1.61-.6 2.53-.3l4.42 1.47c1.38.46 2.46 1.96 2.46 3.41v1.17c0 .97-.4 1.81-1.08 2.31-.43.33-.96.48-1.51.48Zm-5.31-7.51c-.24 0-.46.06-.63.19-.3.21-.46.6-.46 1.09v1.17c0 .8.67 1.73 1.43 1.99l4.42 1.47c.46.16.89.12 1.18-.09.3-.21.46-.6.46-1.09v-1.17c0-.8-.67-1.73-1.43-1.99l-4.42-1.47c-.19-.07-.38-.1-.55-.1Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M7.969 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M11.969 18V4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="m14.61 2.11 4.42 1.47c1.07.36 1.95 1.57 1.95 2.7v1.17c0 1.53-1.18 2.38-2.63 1.9l-4.42-1.47c-1.07-.36-1.95-1.57-1.95-2.7V4c-.01-1.52 1.18-2.38 2.63-1.89Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Musicnote = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
