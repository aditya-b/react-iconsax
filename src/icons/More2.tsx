import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".97" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM8.31 16.31C7.59 16.31 7 15.72 7 15c0-.72.59-1.31 1.31-1.31.72 0 1.31.59 1.31 1.31 0 .72-.59 1.31-1.31 1.31Zm3.69-6c-.72 0-1.31-.59-1.31-1.31 0-.72.59-1.31 1.31-1.31.72 0 1.31.59 1.31 1.31 0 .72-.59 1.31-1.31 1.31Zm3.69 6c-.72 0-1.31-.59-1.31-1.31 0-.72.59-1.31 1.31-1.31.72 0 1.31.59 1.31 1.31 0 .72-.59 1.31-1.31 1.31Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 10.07a2.92 2.92 0 0 1-2.91-2.91c0-1.6 1.31-2.91 2.91-2.91s2.91 1.31 2.91 2.91-1.31 2.91-2.91 2.91Zm0-4.32c-.78 0-1.41.63-1.41 1.41 0 .78.63 1.41 1.41 1.41.78 0 1.41-.63 1.41-1.41 0-.78-.63-1.41-1.41-1.41ZM6.79 19.75a2.92 2.92 0 0 1-2.91-2.91c0-1.6 1.31-2.91 2.91-2.91s2.91 1.31 2.91 2.91-1.31 2.91-2.91 2.91Zm0-4.32c-.78 0-1.41.63-1.41 1.41 0 .78.63 1.41 1.41 1.41.78 0 1.41-.63 1.41-1.41 0-.78-.64-1.41-1.41-1.41ZM17.21 19.75a2.92 2.92 0 0 1-2.91-2.91c0-1.6 1.31-2.91 2.91-2.91s2.91 1.31 2.91 2.91-1.3 2.91-2.91 2.91Zm0-4.32c-.78 0-1.41.63-1.41 1.41 0 .78.63 1.41 1.41 1.41.78 0 1.41-.63 1.41-1.41 0-.78-.63-1.41-1.41-1.41Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 9.32c1.19 0 2.16-.97 2.16-2.16C14.16 5.97 13.19 5 12 5c-1.19 0-2.16.97-2.16 2.16 0 1.19.97 2.16 2.16 2.16Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M6.79 19c1.19 0 2.16-.97 2.16-2.16 0-1.19-.97-2.16-2.16-2.16-1.19 0-2.16.97-2.16 2.16 0 1.19.96 2.16 2.16 2.16Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.21 19c1.19 0 2.16-.97 2.16-2.16 0-1.19-.97-2.16-2.16-2.16-1.19 0-2.16.97-2.16 2.16 0 1.19.97 2.16 2.16 2.16Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const More2 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
