import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.82 6.9a23 23 0 0 1 8.63-.24A9.98 9.98 0 0 0 12 2C8.89 2 6.11 3.42 4.27 5.65c.44 1.3 1 2.54 1.67 3.72.38.68 1.35.65 1.74-.02a5.004 5.004 0 0 1 4.14-2.45ZM7.72 14.721c-2-2.14-3.56-4.58-4.63-7.28a9.95 9.95 0 0 0 .34 9.64 9.984 9.984 0 0 0 7.1 4.76c.89-1.05 1.67-2.17 2.34-3.34.39-.68-.14-1.49-.92-1.49-1.67.01-3.28-.81-4.23-2.29Z" fill={color}></path><path d="M8.57 11.998c0 .61.15 1.18.46 1.72a3.435 3.435 0 0 0 2.96 1.71c1.22 0 2.36-.66 2.96-1.71.31-.54.47-1.11.47-1.72 0-1.89-1.54-3.42-3.43-3.42-1.88-.01-3.42 1.53-3.42 3.42Z" fill={color}></path><path d="M21.34 8.42a21.53 21.53 0 0 0-4.14-.47c-.79-.01-1.24.85-.85 1.54.4.71.63 1.53.63 2.4 0 .84-.22 1.67-.63 2.41-.94 2.88-2.34 5.44-4.19 7.7 5.45-.09 9.84-4.53 9.84-10 0-1.26-.23-2.47-.66-3.58Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill={color}></path><path d="M12 16.75c-2.62 0-4.75-2.13-4.75-4.75S9.38 7.25 12 7.25s4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75Zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25S13.79 8.75 12 8.75Z" fill={color}></path><path d="M21.17 8.751c-.05 0-.11-.01-.16-.02-2.94-.64-5.91-.64-8.85 0-.41.09-.8-.17-.89-.57-.09-.41.17-.8.57-.89 3.15-.69 6.34-.69 9.49 0 .4.09.66.49.57.89a.74.74 0 0 1-.73.59ZM8.54 14.75c-.21 0-.42-.09-.57-.26a24.762 24.762 0 0 1-4.71-8.12l.69-.31.71-.24.02.06a23.2 23.2 0 0 0 4.43 7.63c.27.31.24.79-.07 1.06-.15.12-.33.18-.5.18ZM10.88 22.689a.746.746 0 0 1-.55-1.25c2-2.2 3.48-4.75 4.4-7.58.13-.39.57-.65.96-.52s.62.51.5.9c-1.01 3.12-2.6 5.86-4.74 8.22-.16.15-.37.23-.57.23Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4ZM21.17 7.999c-3.02-.66-6.15-.66-9.17 0"></path><path d="m3.95 6.059.02.06c1.01 2.89 2.56 5.57 4.57 7.88M10.88 21.94c2.06-2.27 3.61-4.95 4.55-7.86l.03-.08"></path></g>
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

export const Chrome = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
