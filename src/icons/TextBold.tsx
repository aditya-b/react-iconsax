import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13.75 12.75H8.5v3.99c0 .28.23.51.51.51h4.74c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25ZM14.5 9c0-1.24-1.01-2.25-2.25-2.25H9.01c-.28 0-.51.23-.51.51v3.99h3.75c1.24 0 2.25-1.01 2.25-2.25Z" fill={color}></path><path d="M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81c-.2 0-.4.01-.59.03C3.94 2.24 2 4.37 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03.19.01.39.02.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68Zm-7.2 14.62H9.01c-1.11 0-2.01-.9-2.01-2.01V7.26c0-1.11.9-2.01 2.01-2.01h3.24C14.32 5.25 16 6.93 16 9c0 .96-.37 1.83-.97 2.49 1.43.53 2.47 1.89 2.47 3.51 0 2.07-1.68 3.75-3.75 3.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.999 12.75h-7.12c-.41 0-.75-.34-.75-.75V4.5c0-1.52 1.23-2.75 2.75-2.75h5.12c3.03 0 5.5 2.47 5.5 5.5s-2.47 5.5-5.5 5.5Zm-6.38-1.5h6.38c2.21 0 4-1.79 4-4s-1.79-4-4-4h-5.12c-.69 0-1.25.56-1.25 1.25v6.75h-.01Z" fill={color}></path><path d="M14.379 22.25h-7.5c-1.52 0-2.75-1.23-2.75-2.75V12c0-.41.34-.75.75-.75h9.5c3.03 0 5.5 2.47 5.5 5.5s-2.47 5.5-5.5 5.5Zm-8.76-9.5v6.75c0 .69.56 1.25 1.25 1.25h7.5c2.21 0 4-1.79 4-4s-1.79-4-4-4h-8.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M4.879 4.5c0-1.1.9-2 2-2h5.12c2.62 0 4.75 2.13 4.75 4.75S14.619 12 11.999 12h-7.12V4.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.879 12h9.5c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75h-7.5c-1.1 0-2-.9-2-2V12v0Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const TextBold = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
