import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15.408 18.592c-.4 0-.73-.33-.73-.73 0-.4.33-.73.73-.73 2.82 0 5.12-2.3 5.12-5.12 0-2.82-2.3-5.12-5.12-5.12a5.13 5.13 0 0 0-5.12 5.12c0 .4-.33.73-.73.73-.4 0-.73-.33-.73-.73 0-3.63 2.95-6.59 6.59-6.59 3.64 0 6.58 2.95 6.58 6.58s-2.95 6.59-6.59 6.59Z" fill={color}></path><path d="M8.59 5.41c.4 0 .73.33.73.73 0 .4-.33.73-.73.73a5.13 5.13 0 0 0-5.12 5.12c0 2.82 2.3 5.12 5.12 5.12 2.82 0 5.12-2.3 5.12-5.12 0-.4.33-.73.73-.73.4 0 .73.33.73.73 0 3.63-2.95 6.59-6.59 6.59C4.94 18.58 2 15.63 2 12s2.95-6.59 6.59-6.59Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12.502 14.75h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75h-5c-2.62 0-4.75 2.13-4.75 4.75 0 1.1.39 2.17 1.09 3.02.26.32.22.79-.1 1.06-.32.26-.79.22-1.06-.1a6.236 6.236 0 0 1-1.44-3.98c0-3.45 2.8-6.25 6.25-6.25h5c3.45 0 6.25 2.8 6.25 6.25s-2.79 6.25-6.24 6.25Z" fill={color}></path><path d="M16.5 21.75h-5c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25H14c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75h5c2.62 0 4.75-2.13 4.75-4.75 0-1.1-.39-2.17-1.09-3.02a.758.758 0 0 1 .1-1.06.75.75 0 0 1 1.06.1 6.236 6.236 0 0 1 1.44 3.98c-.01 3.45-2.81 6.25-6.26 6.25Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M14.988 17.5h1.51c3.02 0 5.5-2.47 5.5-5.5 0-3.02-2.47-5.5-5.5-5.5h-1.51M9 6.5H7.5A5.51 5.51 0 0 0 2 12c0 3.02 2.47 5.5 5.5 5.5H9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M8 12h8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Link1 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
