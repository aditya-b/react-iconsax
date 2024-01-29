import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20.68 13.908v-.01c-.88-.93-2.11-1.5-3.48-1.5-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2.88.98 2.15 1.6 3.57 1.6 2.65 0 4.8-2.15 4.8-4.8 0-1.27-.5-2.43-1.32-3.29Zm-1.69 4.1h-1.04v1.09c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.09h-1.04c-.42 0-.75-.33-.75-.75 0-.41.32-.74.74-.75h1.05v-1c0-.02 0-.04.01-.06.02-.38.35-.69.74-.69.4 0 .73.32.75.72v1.03h1.04c.42 0 .75.34.75.75 0 .42-.33.75-.75.75Z" fill={color}></path><path d="M22 8.73c0 1.19-.19 2.29-.52 3.31-.06.21-.31.27-.49.14a6.346 6.346 0 0 0-3.79-1.24c-3.47 0-6.3 2.83-6.3 6.3 0 1.08.28 2.14.81 3.08.16.28-.03.64-.33.53-2.41-.82-7.28-3.81-8.86-8.81C2.19 11.02 2 9.92 2 8.73c0-3.09 2.49-5.59 5.56-5.59 1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17.2 22.748c-3.06 0-5.55-2.49-5.55-5.55 0-3.06 2.49-5.55 5.55-5.55 3.06 0 5.55 2.49 5.55 5.55 0 3.06-2.49 5.55-5.55 5.55Zm0-9.6c-2.23 0-4.05 1.82-4.05 4.05 0 2.23 1.82 4.05 4.05 4.05 2.23 0 4.05-1.82 4.05-4.05 0-2.23-1.82-4.05-4.05-4.05Z" fill={color}></path><path d="M18.99 18.012H15.4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.59a.749.749 0 1 1 0 1.5Z" fill={color}></path><path d="M17.2 19.852c-.41 0-.75-.34-.75-.75v-3.59c0-.41.34-.75.75-.75s.75.34.75.75v3.59c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M12 21.652c-.31 0-.62-.04-.87-.13-2.56-.87-9.88-5.11-9.88-12.83 0-3.5 2.83-6.34 6.31-6.34 1.67 0 3.27.67 4.44 1.84a6.308 6.308 0 0 1 4.44-1.84c3.48 0 6.31 2.84 6.31 6.34 0 1.95-.47 3.82-1.4 5.57a.74.74 0 0 1-.56.39.747.747 0 0 1-.65-.23 4.05 4.05 0 0 0-2.95-1.28c-2.23 0-4.05 1.82-4.05 4.05 0 .99.37 1.95 1.04 2.7.16.18.22.42.17.65-.05.23-.21.43-.42.53-.4.18-.76.33-1.09.44-.23.1-.53.14-.84.14Zm-4.44-17.8c-2.65 0-4.81 2.17-4.81 4.84 0 6.84 6.57 10.62 8.87 11.41.18.07.57.06.75 0l.09-.03c-.52-.86-.81-1.85-.81-2.87a5.557 5.557 0 0 1 8.79-4.51c.54-1.28.81-2.62.81-4 0-2.67-2.16-4.84-4.81-4.84-1.5 0-2.94.72-3.84 1.93-.28.38-.92.38-1.2 0a4.812 4.812 0 0 0-3.84-1.93Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17.2 21.998a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6ZM18.99 17.258h-3.58M17.2 15.508v3.59" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M22 8.692c0 1.97-.51 3.71-1.31 5.22a4.794 4.794 0 0 0-3.49-1.51c-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12 0-3.09 2.49-5.59 5.56-5.59 1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const HeartAdd = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
