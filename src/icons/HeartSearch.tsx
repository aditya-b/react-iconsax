import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m21.74 20.508-.86-.86c.45-.68.71-1.49.71-2.36a4.3 4.3 0 0 0-4.3-4.3c-2.38 0-4.29 1.93-4.29 4.31a4.293 4.293 0 0 0 6.66 3.59l.86.86a.87.87 0 0 0 1.24 0c.33-.35.33-.9-.02-1.24Z" fill={color}></path><path d="M22 8.73c0 1.19-.19 2.29-.52 3.31-.06.21-.31.27-.49.14a6.346 6.346 0 0 0-3.79-1.24c-3.47 0-6.3 2.83-6.3 6.3 0 1.08.28 2.14.81 3.08.16.28-.03.64-.33.53-2.41-.82-7.28-3.81-8.86-8.81C2.19 11.02 2 9.92 2 8.73c0-3.09 2.49-5.59 5.56-5.59 1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 21.652c-.22 0-.55-.02-.86-.13-3.82-1.31-9.89-5.95-9.89-12.83 0-3.5 2.83-6.34 6.31-6.34 1.69 0 3.27.66 4.44 1.84a6.214 6.214 0 0 1 4.44-1.84c3.48 0 6.31 2.84 6.31 6.34 0 1.21-.18 2.4-.54 3.54a.75.75 0 1 1-1.43-.45c.31-.99.47-2.03.47-3.08 0-2.67-2.16-4.84-4.81-4.84-1.52 0-2.93.71-3.84 1.93-.28.38-.92.38-1.2 0a4.756 4.756 0 0 0-3.84-1.93c-2.65 0-4.81 2.17-4.81 4.84 0 6.84 6.57 10.63 8.88 11.42.06.02.2.05.37.05.41 0 .75.34.75.75s-.34.73-.75.73Z" fill={color}></path><path d="M17.74 21.752c-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95 3.95 1.77 3.95 3.95-1.77 3.95-3.95 3.95Zm0-6.4c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45 2.45-1.1 2.45-2.45-1.1-2.45-2.45-2.45Z" fill={color}></path><path d="M21.54 22.349c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M21.49 12.002c.32-1.02.51-2.12.51-3.31 0-3.09-2.49-5.59-5.56-5.59-1.82 0-3.43.88-4.44 2.24a5.53 5.53 0 0 0-4.44-2.24c-3.07 0-5.56 2.5-5.56 5.59 0 7 6.48 11.13 9.38 12.13.17.06.39.09.62.09" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.74 21.002a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM21.54 21.602l-1-1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const HeartSearch = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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