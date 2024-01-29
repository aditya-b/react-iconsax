import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M20.49 6.708l-8-4.44a.986.986 0 00-.97 0l-8 4.44c-.32.18-.51.51-.51.87v8.82c0 .36.2.7.51.87l8.02 4.46c.29.16.64.17.93.02l4.03-2.01c.31-.16.68-.14.98.05l1.99 1.25a.998.998 0 001.53-.85v-2.61a1 1 0 00-.51-.87l-3-1.66a.986.986 0 00-.97 0l-4.03 2.24c-.3.17-.67.17-.97 0l-4-2.22a.992.992 0 01-.51-.87v-4.38c0-.36.2-.7.51-.87l4-2.22c.3-.17.67-.17.97 0l4 2.22c.32.18.51.51.51.87v3.06c0 .81.91 1.28 1.57.82l2-1.39c.27-.19.43-.49.43-.82v-3.89c0-.37-.2-.71-.51-.89z"></path><path fill={color} d="M15.86 10.422v3.15c0 .35-.19.67-.5.84l-2.89 1.61a.98.98 0 01-.94 0l-2.89-1.61a.956.956 0 01-.5-.84v-3.15c0-.35.19-.67.5-.84l2.89-1.61a.98.98 0 01.94 0l2.89 1.61c.31.17.5.49.5.84z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.75a.74.74 0 0 1-.36-.09l-9-5a.745.745 0 0 1-.39-.66V7c0-.27.15-.52.39-.66l9-5c.23-.13.5-.13.73 0l9 5c.24.13.39.38.39.66v5c0 .25-.12.48-.32.62l-3.01 2.09 2.95 1.64c.24.13.39.38.39.66v5c0 .27-.15.52-.39.66a.74.74 0 0 1-.76-.02l-3.64-2.28-4.62 2.31c-.13.04-.24.07-.36.07Zm-8.25-6.19 8.27 4.59 4.65-2.32c.23-.12.51-.1.73.03l2.85 1.78v-3.21l-3.61-2.01a.738.738 0 0 1-.38-.62c-.01-.26.11-.51.32-.65l3.68-2.55V7.43l-8.25-4.58-8.25 4.58v9.13h-.01Z" fill={color}></path><path d="M12 18.311a.74.74 0 0 1-.36-.09l-5-2.78a.745.745 0 0 1-.39-.66v-5.56c0-.27.15-.52.39-.66l5-2.78c.23-.13.5-.13.73 0l5 2.78c.24.13.39.38.39.66v5.56c0 .27-.15.52-.39.66l-5 2.78c-.12.05-.24.09-.37.09Zm-4.25-3.97 4.25 2.36 4.25-2.36v-4.67L12 7.301l-4.25 2.36v4.68Z" fill={color}></path><path d="M7 9.982c-.12 0-.25-.03-.36-.09l-4-2.23a.75.75 0 0 1 .73-1.31l4 2.23c.36.2.49.66.29 1.02-.15.24-.4.38-.66.38ZM3 17.75a.753.753 0 0 1-.37-1.41l4-2.23a.75.75 0 0 1 .73 1.31l-4 2.23c-.11.07-.24.1-.36.1ZM17 9.98a.753.753 0 0 1-.37-1.41l4-2.23a.75.75 0 0 1 .73 1.31l-4 2.23c-.11.07-.23.1-.36.1ZM12 6.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75ZM12 22.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75ZM17.75 15h-1.5v5h1.5v-5Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m12 6.441-5 2.78v5.56l5 2.78 5-2.78v-5.56l-5-2.78Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"><path d="M12 2 3 7v10l9 5 5-2.5 4 2.5v-5l-4-2.22L21 12V7l-9-5ZM3 7l4 2.23M3 17l4-2.23M21 7l-4 2.23M12 6V2M12 22v-4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17 20v-5"></path></g>
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

export const Quant = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
