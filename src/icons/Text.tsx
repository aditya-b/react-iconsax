import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81c-.2 0-.4.01-.59.03C3.94 2.24 2 4.37 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03.19.01.39.02.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68Zm-2.2 4.77c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.72a.58.58 0 0 0-.58-.58h-3.92v9.72h1.78c.41 0 .75.34.75.75s-.34.75-.75.75H9.47c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.78V7.14H7.33a.58.58 0 0 0-.58.58V8.9c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.72c0-1.15.93-2.08 2.08-2.08h9.33c1.15 0 2.08.93 2.08 2.08V8.9h.01Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.332 7.921c-.41 0-.75-.34-.75-.75v-1.82c0-.73-.59-1.32-1.32-1.32H4.742c-.73 0-1.32.59-1.32 1.32v1.83c0 .41-.34.75-.75.75s-.75-.34-.75-.76v-1.82c0-1.56 1.27-2.82 2.82-2.82h14.52c1.56 0 2.82 1.27 2.82 2.82v1.83c0 .41-.33.74-.75.74Z" fill={color}></path><path d="M12 21.47c-.41 0-.75-.34-.75-.75V4.11c0-.41.34-.75.75-.75s.75.34.75.75v16.61c0 .42-.34.75-.75.75Z" fill={color}></path><path d="M15.939 21.469h-7.88c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.88c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2.672 7.171v-1.82c0-1.15.93-2.07 2.07-2.07h14.52c1.15 0 2.07.93 2.07 2.07v1.82" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M12 20.72V4.11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.059 20.719h7.88" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Text = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
