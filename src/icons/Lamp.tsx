import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12.5 5.481c.08 0 .16 0 .25.01v-2.96c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.96c.08-.01.16-.01.25-.01-4.61.23-8.28 4.03-8.28 8.7v1.94c0 1.1.9 2 2 2h13.56c1.1 0 2-.9 2-2v-1.94c0-4.67-3.67-8.47-8.28-8.7ZM14.73 19.11c.33 0 .57.31.49.63A3.336 3.336 0 0 1 12 22.22c-1.54 0-2.84-1.05-3.22-2.48-.08-.32.16-.63.49-.63h5.46Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20.779 19.34H3.219c-.41 0-.75-.34-.75-.75v-4.94c0-5.22 4.25-9.47 9.47-9.47h.12c5.22 0 9.47 4.25 9.47 9.47v4.94c0 .41-.34.75-.75.75Zm-16.81-1.5h16.06v-4.19c0-4.4-3.58-7.97-7.97-7.97h-.12c-4.4 0-7.97 3.58-7.97 7.97v4.19Z" fill={color}></path><path d="M12 5.68c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2.93c0 .41-.34.75-.75.75ZM12 22.75c-2.31 0-4.24-1.81-4.4-4.11a.76.76 0 0 1 .2-.56c.14-.15.34-.24.55-.24h7.3c.21 0 .41.09.55.24.14.15.21.36.2.56-.16 2.3-2.09 4.11-4.4 4.11Zm-2.73-3.41A2.916 2.916 0 0 0 12 21.25c1.24 0 2.32-.79 2.73-1.91H9.27Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20.78 13.65v4.94H3.22v-4.94c0-4.82 3.9-8.72 8.72-8.72h.12c4.82 0 8.72 3.9 8.72 8.72Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M12 2v2.93M15.65 18.59A3.661 3.661 0 0 1 12 22c-1.93 0-3.52-1.5-3.65-3.41h7.3Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Lamp = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
