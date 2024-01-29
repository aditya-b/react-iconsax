import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill={color}></path><path d="M21 10.4v6.08c0 .14-.01.28-.02.41-.01.12-.02.23-.04.35-.01.12-.03.24-.05.35-.35 2.42-1.89 3.95-4.3 4.3-.11.02-.23.04-.35.05-.12.02-.23.03-.35.04-.13.01-.27.02-.41.02H7.52c-.14 0-.28-.01-.41-.02-.12-.01-.23-.02-.35-.04-.12-.01-.24-.03-.35-.05-2.41-.35-3.95-1.88-4.3-4.3-.02-.11-.04-.23-.05-.35-.02-.12-.03-.23-.04-.35-.01-.13-.02-.27-.02-.41V8.52c0-.14.01-.28.02-.41.01-.12.02-.23.04-.35.01-.12.03-.24.05-.35.35-2.42 1.89-3.95 4.3-4.3.11-.02.23-.04.35-.05.12-.02.23-.03.35-.04.13-.01.27-.02.41-.02h6.08a1 1 0 0 1 .98 1.2c0 .02-.01.04-.01.06-.02.1-.03.2-.05.31-.04.42-.02.87.07 1.33.03.12.05.22.09.33.08.33.21.64.38.93.06.12.14.24.21.35.33.48.74.89 1.22 1.22.11.07.23.15.35.21.29.17.6.3.93.38.11.04.21.06.33.09.46.09.91.11 1.33.07.11-.02.21-.03.31-.05.02 0 .04-.01.06-.01a1 1 0 0 1 1.2.98Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19 8.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25S17.76 7.25 19 7.25 21.25 6.24 21.25 5 20.24 2.75 19 2.75Z" fill={color}></path><path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h5c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Notification1 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
