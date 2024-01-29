import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16 4.25c0 1.24-1.01 2.25-2.25 2.25h-3.5c-.62 0-1.18-.25-1.59-.66C8.25 5.43 8 4.87 8 4.25 8 3.01 9.01 2 10.25 2h3.5c.62 0 1.18.25 1.59.66.41.41.66.97.66 1.59Z" fill={color}></path><path d="M18.83 5.029a2.83 2.83 0 0 0-.77-.45c-.29-.11-.58.12-.64.42-.34 1.71-1.85 3-3.67 3h-3.5c-1 0-1.94-.39-2.65-1.1a3.7 3.7 0 0 1-1.02-1.89c-.06-.3-.36-.54-.65-.42C4.77 5.059 4 6.119 4 8.249v9.75c0 3 1.79 4 4 4h8c2.21 0 4-1 4-4v-9.75c0-1.63-.45-2.63-1.17-3.22ZM8 12.249h4c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75Zm8 5.5H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16 22.75H8c-3.02 0-4.75-1.73-4.75-4.75V8.25C3.25 5.1 4.85 3.5 8 3.5c.41 0 .75.34.75.75a1.499 1.499 0 0 0 1.5 1.5h3.5c.83 0 1.5-.67 1.5-1.5 0-.41.34-.75.75-.75 3.15 0 4.75 1.6 4.75 4.75V18c0 3.02-1.73 4.75-4.75 4.75ZM7.35 5.02c-1.58.13-2.6.84-2.6 3.23V18c0 2.22 1.03 3.25 3.25 3.25h8c2.22 0 3.25-1.03 3.25-3.25V8.25c0-2.39-1.02-3.09-2.6-3.23a3.006 3.006 0 0 1-2.9 2.23h-3.5c-.8 0-1.55-.31-2.12-.88-.38-.38-.64-.84-.78-1.35Z" fill={color}></path><path d="M13.75 7.25h-3.5c-.8 0-1.55-.31-2.12-.88-.57-.57-.88-1.32-.88-2.12 0-1.65 1.35-3 3-3h3.5c.8 0 1.55.31 2.12.88.57.57.88 1.32.88 2.12 0 1.65-1.35 3-3 3Zm-3.5-4.5a1.498 1.498 0 0 0-1.06 2.56c.28.28.66.44 1.06.44h3.5a1.498 1.498 0 0 0 1.06-2.56c-.28-.28-.66-.44-1.06-.44h-3.5ZM12 13.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM16 17.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M8 2v3M16 2v3" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M7 13h8M7 17h5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 3.5c3.33.18 5 1.45 5 6.15v6.18c0 4.12-1 6.18-6 6.18H9c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15h8Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Note1 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
