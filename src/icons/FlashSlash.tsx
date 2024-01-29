import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.77 2.229c-.3-.3-.79-.3-1.09 0L2.23 20.689c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z" fill={color}></path><path d="M14.82 3.52v5.66l-5.64 5.64v-1.54H6.09c-1.4 0-1.79-.86-.86-1.91L12 3.67l.8-.91c1.11-1.26 2.02-.92 2.02.76ZM18.77 12.629l-6.77 7.7-.8.91c-1.11 1.26-2.02.92-2.02-.76v-2.66l7.1-7.1h1.63c1.4 0 1.79.86.86 1.91Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9.99 22.75c-.2 0-.36-.04-.48-.09-.4-.15-1.08-.64-1.08-2.19v-2.44c0-.41.34-.75.75-.75s.75.34.75.75v2.44c0 .5.09.72.13.78.03-.04.24-.14.57-.52l7.57-8.6c.28-.32.32-.52.32-.56-.02-.01-.2-.11-.62-.11h-.93c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.93c1.34 0 1.82.63 1.99 1 .17.38.32 1.15-.56 2.16l-7.57 8.6c-.71.82-1.33 1.03-1.77 1.03ZM9.18 15.22c-.41 0-.75-.34-.75-.75v-.43H6.09c-1.34 0-1.82-.63-1.99-1-.17-.38-.32-1.15.56-2.16l7.57-8.6c1.02-1.16 1.85-1.08 2.25-.93.4.15 1.08.64 1.08 2.19v5.31c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.52c0-.5-.09-.72-.13-.78-.03.04-.24.14-.57.52l-7.57 8.6c-.28.32-.32.52-.32.56.02.01.2.11.62.11h3.09c.41 0 .75.34.75.75v1.18c0 .42-.34.76-.75.76Z" fill={color}></path><path d="M2 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".34" d="M9.18 18.039v2.44c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-.93" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.82 8.84V3.52c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.93 1.05-.54 1.92.87 1.92h3.09v1.18" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22 2 2 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const FlashSlash = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
