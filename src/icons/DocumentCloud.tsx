import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15.8 2.21c-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54ZM14.76 19.262c-2.35.17-2.35 3.57 0 3.74h5.56c.67 0 1.33-.25 1.82-.7 1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56" fill={color}></path><path d="M21.5 11.19v3.25c0 .3-.44.44-.66.23-.48-.47-1.07-.83-1.75-1.04-1.68-.52-3.63-.01-4.84 1.27-.81.84-1.22 1.91-1.21 3.07 0 .19-.09.36-.24.47-.8.61-1.3 1.57-1.3 2.68 0 .08 0 .16.01.24.02.32-.21.63-.54.63h-2.9c-3.08 0-5.57-2-5.57-5.57V7.57C2.5 4 4.99 2 8.07 2h4.24c.55 0 1 .45 1 1v2.89c0 2.38 1.92 4.3 4.3 4.3h2.89c.55 0 1 .45 1 1Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9 22.75c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h5c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25.41 0 .75.34.75.75s-.34.75-.75.75ZM22 13.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M22 10.748h-4c-3.42 0-4.75-1.33-4.75-4.75v-4c0-.3.18-.58.46-.69.28-.12.6-.05.82.16l8 8a.751.751 0 0 1-.53 1.28Zm-7.25-6.94v2.19c0 2.58.67 3.25 3.25 3.25h2.19l-5.44-5.44ZM19.34 22.748H13.76c-1.67-.12-2.51-1.4-2.51-2.62 0-.98.55-2.01 1.61-2.43-.22-1.25.1-2.41.93-3.28 1.02-1.07 2.66-1.5 4.08-1.06 1.24.38 2.13 1.36 2.5 2.72 1.05.32 1.88 1.15 2.22 2.28.4 1.31.03 2.65-.96 3.51-.61.56-1.43.88-2.29.88Zm-5.55-3.74c-.76.07-1.04.64-1.04 1.12 0 .48.28 1.06 1.06 1.12h5.51c.51-.03.96-.18 1.32-.5.65-.57.7-1.38.52-1.96-.18-.58-.67-1.23-1.51-1.34a.753.753 0 0 1-.65-.62c-.22-1.35-.98-1.85-1.57-2.03-.87-.27-1.92 0-2.55.67-.43.45-.85 1.26-.38 2.55a.75.75 0 0 1-.45.96c-.09.02-.18.03-.26.03Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M14 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7M22 10v3M22 10h-4c-3 0-4-1-4-4V2l8 8Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M13.76 18.262c-2.35.17-2.35 3.57 0 3.74h5.56c.67 0 1.33-.25 1.82-.7 1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const DocumentCloud = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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