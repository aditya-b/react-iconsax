import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M4.5 10.488v5.94c0 .31.14.61.37.81l5.36 4.59c.7.6 1.77.1 1.77-.81v-4.1h4.91c.95 0 1.43-1.15.76-1.83L12 9.418H5.57c-.59-.01-1.07.47-1.07 1.07zM18.43 1.91H7.09c-.95 0-1.43 1.15-.76 1.83L12 9.41h6.43c.59 0 1.07-.48 1.07-1.07V2.98c0-.59-.48-1.07-1.07-1.07z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19 16.75H5c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75h5.19L4.47 2.53A.751.751 0 0 1 5 1.25h14c.41 0 .75.34.75.75v7c0 .41-.34.75-.75.75h-5.19l5.72 5.72a.751.751 0 0 1-.53 1.28Zm-13.25-1.5h11.44l-5.5-5.5H5.75v5.5Zm6.56-7h5.94v-5.5H6.81l5.5 5.5Z" fill={color}></path><path d="M12 22.75c-.18 0-.35-.06-.49-.18l-7-6a.765.765 0 0 1-.22-.83c.11-.29.39-.49.7-.49h7c.41 0 .75.34.75.75v6c0 .29-.17.56-.44.68-.09.05-.19.07-.3.07Zm-4.97-6 4.22 3.62v-3.62H7.03Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m5 2 14 14H5V9h14V2H5Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M12 16v6l-7-6h7Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Framer = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
