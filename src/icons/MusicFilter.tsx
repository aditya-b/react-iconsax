import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 3.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM11 9.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 15.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM6 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM21.86 7.678c-.59-.45-1.4-.54-2.35-.28l-4.35 1.18c-1.17.32-1.89 1.27-1.89 2.47v6.23c-.42-.24-.91-.39-1.43-.39-1.61 0-2.93 1.31-2.93 2.93 0 1.61 1.31 2.93 2.93 2.93s2.93-1.31 2.93-2.93v-5.65l6.48-1.77v3.43c-.42-.24-.91-.39-1.43-.39-1.61 0-2.93 1.31-2.93 2.93 0 1.61 1.31 2.93 2.93 2.93s2.93-1.31 2.93-2.93v-8.5c0-1.01-.3-1.75-.89-2.19Zm-10.02 13.57a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86Zm7.98-1.45a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 3.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM11 9.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 15.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM6 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM11.84 22.75c-1.61 0-2.93-1.31-2.93-2.93 0-1.61 1.31-2.93 2.93-2.93s2.93 1.31 2.93 2.93-1.31 2.93-2.93 2.93Zm0-4.35a1.43 1.43 0 1 0 0 2.86 1.43 1.43 0 0 0 0-2.86Z" fill={color}></path><path d="M14.02 20.571c-.41 0-.75-.34-.75-.75v-8.77c0-1.21.72-2.16 1.89-2.47l4.35-1.19c.95-.26 1.77-.16 2.35.29.58.45.88 1.18.88 2.19v8.51c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-8.51c0-.5-.1-.85-.29-.99-.19-.15-.58-.16-1.05-.03l-4.35 1.19c-.29.08-.78.32-.78 1.03v8.77c0 .4-.34.73-.75.73Z" fill={color}></path><path d="M19.82 21.301c-1.61 0-2.93-1.31-2.93-2.93 0-1.61 1.31-2.93 2.93-2.93s2.93 1.31 2.93 2.93-1.31 2.93-2.93 2.93Zm0-4.35a1.43 1.43 0 1 0 0 2.86 1.43 1.43 0 0 0 0-2.86ZM14.02 14.349a.747.747 0 0 1-.19-1.47l7.98-2.18a.75.75 0 1 1 .39 1.45l-7.98 2.18c-.07.01-.14.02-.2.02Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2 3h20M2 9h9M2 15h6M2 21h4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11.84 22a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36Z"></path><path d="M22 18.369v-8.51c0-1.81-1.14-2.06-2.29-1.75l-4.35 1.19c-.79.22-1.34.84-1.34 1.75v8.77"></path><path d="M19.82 20.547a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36ZM14.02 13.598l7.98-2.18"></path></g>
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

export const MusicFilter = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
