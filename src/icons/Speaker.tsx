import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15 1.621H9c-3.19 0-4.38 1.19-4.38 4.38v12c0 3.19 1.19 4.38 4.38 4.38h6c3.19 0 4.38-1.19 4.38-4.38v-12c0-3.19-1.19-4.38-4.38-4.38Zm-3 4.38c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5Zm0 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15 22.75H9c-3.42 0-4.75-1.33-4.75-4.75V6c0-3.42 1.33-4.75 4.75-4.75h6c3.42 0 4.75 1.33 4.75 4.75v12c0 3.42-1.33 4.75-4.75 4.75Zm-6-20c-2.58 0-3.25.67-3.25 3.25v12c0 2.58.67 3.25 3.25 3.25h6c2.58 0 3.25-.67 3.25-3.25V6c0-2.58-.67-3.25-3.25-3.25H9Z" fill={color}></path><path d="M12 18.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25ZM12 9.75c-1.24 0-2.25-1.01-2.25-2.25S10.76 5.25 12 5.25s2.25 1.01 2.25 2.25S13.24 9.75 12 9.75Zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9 22h6c3 0 4-1 4-4V6c0-3-1-4-4-4H9C6 2 5 3 5 6v12c0 3 1 4 4 4Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Speaker = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
