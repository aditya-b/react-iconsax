import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M7.12 3.5H16c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5H3.94L5 16.25h7.44c3.56 0 5.31-2.25 5.31-5.31v-.19c0-1.75-.75-3-3-3H6.06L7.12 3.5z"></path><path fill={color} d="M12.41 10.23H4.7c-1.08 0-2.02.74-2.29 1.78l-.25 1.02c-.09.37.19.73.57.73h7.71c1.08 0 2.02-.74 2.29-1.78l.25-1.02c.1-.37-.19-.73-.57-.73z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13.5 21.25H3.94c-.23 0-.45-.11-.59-.29-.14-.18-.19-.42-.14-.64l1.06-4.25A.75.75 0 0 1 5 15.5h7.44c2.9 0 4.56-1.66 4.56-4.56v-.19c0-1.6-.65-2.25-2.25-2.25H6.06a.754.754 0 0 1-.73-.93l1.06-4.25a.75.75 0 0 1 .73-.57H16c4.16 0 6.75 2.59 6.75 6.75V12c0 5.71-3.54 9.25-9.25 9.25Zm-8.6-1.5h8.6c4.85 0 7.75-2.9 7.75-7.75V9.5c0-3.34-1.91-5.25-5.25-5.25H7.71L7.02 7h7.73c2.42 0 3.75 1.33 3.75 3.75v.19c0 3.74-2.32 6.06-6.06 6.06H5.59l-.69 2.75Z" fill={color}></path><path d="M9.19 14.252H2c-.23 0-.45-.11-.59-.29-.14-.18-.19-.42-.14-.64l.37-1.48a2.74 2.74 0 0 1 2.67-2.08h7.19c.23 0 .45.11.59.29.14.18.19.42.14.64l-.37 1.48a2.76 2.76 0 0 1-2.67 2.08Zm-6.23-1.5h6.23c.57 0 1.07-.39 1.21-.95l.14-.55H4.31c-.57 0-1.07.39-1.21.95l-.14.55Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M7.12 3.5H16c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5H3.94L5 16.25h7.44c3.56 0 5.31-2.25 5.31-5.31v-.19c0-1.75-.75-3-3-3H6.06L7.12 3.5Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M11.5 10.5H4.31c-.92 0-1.72.62-1.94 1.51L2 13.5h7.19c.92 0 1.72-.62 1.94-1.51l.37-1.49Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Dash = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
