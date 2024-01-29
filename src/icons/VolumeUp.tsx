import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 11.25h-1.25V10c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.25H18c-.41 0-.75.34-.75.75s.34.75.75.75h1.25V14c0 .41.34.75.75.75s.75-.34.75-.75v-1.25H22c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM14.02 3.782c-1.12-.62-2.55-.46-4.01.45l-2.92 1.83c-.2.12-.43.19-.66.19H5c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75H6.43c.23 0 .46.07.66.19l2.92 1.83c.88.55 1.74.82 2.54.82a3 3 0 0 0 1.47-.37c1.11-.62 1.73-1.91 1.73-3.63v-9.18c0-1.72-.62-3.01-1.73-3.63Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12.76 20.748c-.81 0-1.68-.28-2.58-.84l-2.98-1.86c-.21-.13-.44-.2-.68-.2H5.06c-2.46 0-3.81-1.35-3.81-3.81v-4.08c0-2.46 1.35-3.81 3.81-3.81h1.46c.24 0 .48-.07.68-.2l2.98-1.86c1.49-.93 2.93-1.1 4.07-.46 1.14.63 1.76 1.94 1.76 3.7v9.36c0 1.75-.63 3.07-1.76 3.7-.45.24-.95.36-1.49.36Zm-7.7-13.1c-1.62 0-2.31.69-2.31 2.31v4.08c0 1.62.69 2.31 2.31 2.31h1.46c.52 0 1.03.15 1.48.42l2.98 1.86c.99.62 1.92.77 2.55.43.63-.35.99-1.22.99-2.38v-9.36c0-1.17-.36-2.04-.99-2.38-.63-.35-1.56-.19-2.55.43L8 7.218a2.8 2.8 0 0 1-1.48.43H5.06ZM22 12.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M20 14.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2 9.96v4.08c0 2.04 1.02 3.06 3.06 3.06h1.46c.38 0 .76.11 1.08.31l2.98 1.86c2.58 1.61 4.68.44 4.68-2.6V7.32c0-3.04-2.11-4.21-4.68-2.6L7.6 6.59c-.33.2-.7.31-1.08.31H5.06C3.02 6.9 2 7.92 2 9.96Z" stroke={color} strokeWidth="1.5"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 12h4M20 14v-4"></path></g>
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

export const VolumeUp = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
