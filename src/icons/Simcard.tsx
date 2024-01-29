import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m19.54 6.54-3.07-3.07A5.003 5.003 0 0 0 12.93 2H8C5 2 3 4 3 7v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.53Zm-9.51 10.93c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L8.56 16l1.47 1.47Zm7-.94-2 2c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L15.44 16l-1.47-1.47a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16 22.75H8c-3.44 0-5.75-2.31-5.75-5.75V7c0-3.44 2.31-5.75 5.75-5.75h4.93c1.54 0 2.98.6 4.07 1.68L20.07 6a5.701 5.701 0 0 1 1.68 4.07V17c0 3.44-2.31 5.75-5.75 5.75Zm-8-20C5.42 2.75 3.75 4.42 3.75 7v10c0 2.58 1.67 4.25 4.25 4.25h8c2.58 0 4.25-1.67 4.25-4.25v-6.93c0-1.13-.44-2.2-1.25-3.01L15.93 4c-.8-.8-1.87-1.25-3.01-1.25H8Z" fill={color}></path><path d="M14 19.25h-4c-2.07 0-3.75-1.68-3.75-3.75v-3c0-2.07 1.68-3.75 3.75-3.75h4c2.07 0 3.75 1.68 3.75 3.75v3c0 2.07-1.68 3.75-3.75 3.75Zm-4-9c-1.24 0-2.25 1.01-2.25 2.25v3c0 1.24 1.01 2.25 2.25 2.25h4c1.24 0 2.25-1.01 2.25-2.25v-3c0-1.24-1.01-2.25-2.25-2.25h-4Z" fill={color}></path><path d="M12 19.25c-.41 0-.75-.34-.75-.75v-9c0-.41.34-.75.75-.75s.75.34.75.75v9c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M16.5 14.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m19.54 6.542-3.07-3.07a4.994 4.994 0 0 0-3.54-1.46H8c-3 0-5 2-5 5v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93a5 5 0 0 0-1.46-3.54Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9.5 14-2 2 2 2M14.5 14l2 2-2 2"></path></g>
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

export const Simcard = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
