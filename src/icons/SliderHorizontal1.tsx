import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M3.5 5.059v13.88c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.059c0-.41.34-.75.75-.75s.75.34.75.75ZM22 5.059v13.88c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.059c0-.41.34-.75.75-.75s.75.34.75.75ZM8 21.25h8c1.66 0 3-1.34 3-3V5.75c0-1.66-1.34-3-3-3H8c-1.66 0-3 1.34-3 3v12.5c0 1.66 1.34 3 3 3Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13 22.75h-2c-3.3 0-5.29-.66-5.66-4.01-.06-.45-.09-.99-.09-1.74V7c0-.75.03-1.29.1-1.77C5.71 1.91 7.7 1.25 11 1.25h2c3.3 0 5.29.66 5.66 4.01.06.45.09.99.09 1.74v10c0 .75-.03 1.29-.1 1.77-.36 3.32-2.35 3.98-5.65 3.98Zm-2-20c-3.31 0-3.94.67-4.16 2.67-.06.43-.09.9-.09 1.58v10c0 .68.03 1.15.08 1.55.22 2.03.86 2.7 4.17 2.7h2c3.31 0 3.94-.67 4.16-2.67.06-.42.09-.9.09-1.58V7c0-.67-.03-1.15-.08-1.55-.22-2.03-.86-2.7-4.17-2.7h-2Z" fill={color}></path><path d="M5.67 19.418h-.34c-3.09 0-4.08-.99-4.08-4.09v-6.66c0-3.1.99-4.09 4.08-4.09h.34c.17 0 .31 0 .47.01.21.01.4.11.53.28.13.17.19.37.16.58-.05.4-.08.87-.08 1.55v10c0 .68.03 1.15.08 1.55.03.21-.03.42-.16.58-.13.16-.32.26-.53.28-.16.01-.3.01-.47.01Zm-.4-13.34c-2.19.01-2.52.36-2.52 2.59v6.66c0 2.23.33 2.58 2.52 2.59-.01-.27-.02-.57-.02-.92v-10c0-.35.01-.65.02-.92ZM18.67 19.418h-.34c-.17 0-.31 0-.47-.01a.703.703 0 0 1-.53-.28.752.752 0 0 1-.16-.58c.06-.4.08-.88.08-1.55v-10c0-.67-.03-1.15-.08-1.55-.03-.21.03-.42.16-.58.13-.16.32-.26.53-.28.16-.01.3-.01.47-.01h.34c3.09 0 4.08.99 4.08 4.09v6.66c0 3.1-.99 4.09-4.08 4.09Zm.06-13.34c.01.27.02.57.02.92v10c0 .35-.01.65-.02.92 2.19-.01 2.52-.36 2.52-2.59v-6.66c0-2.23-.33-2.58-2.52-2.59Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M5 16.5v-9c0-.62.02-1.17.09-1.66C5.38 3.21 6.62 2.5 10 2.5h4c3.38 0 4.62.71 4.91 3.34.07.49.09 1.04.09 1.66v9c0 .62-.02 1.17-.09 1.66-.29 2.63-1.53 3.34-4.91 3.34h-4c-3.38 0-4.62-.71-4.91-3.34-.07-.49-.09-1.04-.09-1.66Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M2 19.5v-15M22 19V4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const SliderHorizontal1 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
