import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07ZM12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35ZM7.1 14.18c-.08.34-.39.57-.73.57-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.15.91.55.36 1.43.36 2.93 0 4.36Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13 19.75H7c-4.41 0-5.75-1.34-5.75-5.75v-4c0-4.41 1.34-5.75 5.75-5.75h6c4.41 0 5.75 1.34 5.75 5.75v4c0 4.41-1.34 5.75-5.75 5.75Zm-6-14c-3.58 0-4.25.68-4.25 4.25v4c0 3.57.67 4.25 4.25 4.25h6c3.58 0 4.25-.68 4.25-4.25v-4c0-3.57-.67-4.25-4.25-4.25H7ZM20.5 15.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.59 0 .72-.09.73-.09.02-.06.02-.41.02-.66v-2c0-.25 0-.59-.04-.68.01.01-.16-.07-.71-.07-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.08 0 2.25 1.02 2.25 2.25v2c0 1.23-.17 2.25-2.25 2.25Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13 19H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5h6c4 0 5 1 5 5v4c0 4-1 5-5 5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const BatteryEmpty = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
