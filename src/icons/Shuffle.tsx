import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.75 17.98c0-.02-.01-.04-.01-.06-.01-.08-.02-.16-.05-.23a.913.913 0 0 0-.15-.23s0-.01-.01-.01a.776.776 0 0 0-.53-.22l-4.67.02h-.01c-.6 0-1.18-.28-1.54-.76l-1.22-1.57a.738.738 0 0 0-1.05-.13.74.74 0 0 0-.13 1.05l1.22 1.57c.65.84 1.67 1.34 2.73 1.34h.01l2.85-.01-.71.71c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2-2c.07-.07.12-.15.16-.24.03-.1.05-.2.05-.29ZM8.42 6.692a3.45 3.45 0 0 0-2.8-1.43H5.6l-2.6.01c-.41 0-.75.34-.75.75s.34.75.75.75l2.61-.01h.01c.63 0 1.22.3 1.58.81l1.08 1.5c.15.2.38.31.61.31.15 0 .31-.05.44-.14.34-.25.41-.72.17-1.05l-1.08-1.5ZM21.74 6.079c0-.02.01-.04.01-.05a.776.776 0 0 0-.22-.53l-2-2a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.71.71-2.73-.01h-.02c-1.15 0-2.23.57-2.87 1.54l-6.39 9.58c-.36.54-.97.87-1.62.87h-.01L3 17.229a.749.749 0 1 0 0 1.5l2.55.01h.02c1.16 0 2.23-.57 2.87-1.54l6.39-9.58c.36-.54.97-.87 1.62-.87h.01l4.54.02a.753.753 0 0 0 .53-.22s0-.01.01-.01a.704.704 0 0 0 .2-.46Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M5.562 18.74h-.02l-2.55-.01c-.41 0-.75-.34-.75-.75s.34-.75.75-.75l2.55.01h.01c.65 0 1.26-.32 1.62-.87l6.39-9.58c.64-.96 1.71-1.54 2.87-1.54h.02l4.55.02c.41 0 .75.34.75.75s-.34.75-.75.75l-4.55-.02h-.01c-.65 0-1.26.32-1.62.87l-6.39 9.58a3.42 3.42 0 0 1-2.87 1.54ZM19.001 20.732c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22ZM8.89 9.382c-.23 0-.46-.11-.61-.31l-1.08-1.5a1.99 1.99 0 0 0-1.59-.81L3 6.772c-.46-.01-.75-.33-.75-.75 0-.41.33-.75.75-.75l2.61-.01h.02c1.11 0 2.15.54 2.8 1.43l1.08 1.5c.24.34.17.8-.17 1.05-.14.09-.29.14-.45.14Z" fill={color}></path><path d="M16.32 18.751c-1.06 0-2.08-.5-2.73-1.34l-1.22-1.57c-.25-.33-.19-.8.13-1.05.33-.25.8-.19 1.05.13l1.22 1.57c.37.48.96.72 1.55.76l4.67-.02a.749.749 0 1 1 0 1.5l-4.67.02c.01 0 0 0 0 0ZM21.001 6.771c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m3 17.982 2.55.01c.91 0 1.76-.45 2.26-1.2l6.39-9.58a2.69 2.69 0 0 1 2.26-1.2l4.55.02" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m8.89 8.62-1.08-1.5A2.675 2.675 0 0 0 5.61 6L3 6.01" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m19 19.98 2-2M12.969 15.379l1.22 1.57c.51.66 1.31 1.05 2.15 1.05l4.67-.02"></path></g><path d="m21 6.02-2-2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Shuffle = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
