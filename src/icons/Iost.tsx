import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M19.51 6.422l-6.5-3.82c-.63-.37-1.4-.37-2.03 0l-6.5 3.82c-.61.36-.99 1.02-.99 1.72v7.71c0 .71.38 1.36.99 1.72l6.5 3.82c.63.37 1.4.37 2.03 0l6.5-3.82c.61-.36.99-1.02.99-1.72v-7.71c0-.7-.38-1.36-.99-1.72zm-2.12 9.22l-5 3c-.12.07-.25.11-.39.11s-.27-.04-.39-.11l-5-3a.749.749 0 01-.26-1.03c.21-.36.67-.47 1.03-.26l4.61 2.77 3.54-2.13-1.86-1.12-.65.65c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l.38-.38-1.8-1.08-.52.52c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l.26-.26-2.61-1.57a.751.751 0 010-1.28l5-3c.24-.14.54-.14.77 0l5 3c.36.21.47.67.26 1.03-.21.35-.67.47-1.03.26L12 6.872l-3.54 2.13 1.86 1.12.65-.65c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.38.38 1.8 1.08.52-.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.26.26 2.61 1.57c.23.14.36.38.36.64s-.13.51-.35.64z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.43c-.48 0-.96-.13-1.39-.38l-6.5-3.82c-.84-.49-1.36-1.4-1.36-2.37V8.15c0-.97.52-1.88 1.36-2.37l6.5-3.82c.86-.51 1.93-.51 2.79 0l6.5 3.82c.84.49 1.36 1.4 1.36 2.37v7.71c0 .97-.52 1.88-1.36 2.37l-6.5 3.82c-.44.25-.92.38-1.4.38Zm-.63-19.19-6.5 3.82c-.38.22-.62.64-.62 1.08v7.71c0 .44.24.85.62 1.08l6.5 3.82c.39.23.88.23 1.27 0l6.5-3.82c.38-.22.62-.64.62-1.08V8.14c0-.44-.24-.85-.62-1.08l-6.5-3.82c-.4-.23-.88-.23-1.27 0Z" fill={color}></path><path d="M12 18.751c-.13 0-.27-.04-.39-.11l-5-3a.749.749 0 0 1-.26-1.03c.21-.36.67-.47 1.03-.26l4.61 2.77 3.54-2.13-8.93-5.36a.751.751 0 0 1 0-1.28l5-3c.24-.14.54-.14.77 0l5 3c.36.21.47.67.26 1.03-.21.35-.67.47-1.03.26l-4.61-2.77-3.54 2.13 8.93 5.36a.751.751 0 0 1 0 1.28l-5 3a.73.73 0 0 1-.38.11Z" fill={color}></path><path d="M9.5 12.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22ZM12.5 14.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m10.99 2.602-6.5 3.82c-.61.36-.99 1.02-.99 1.72v7.71c0 .71.38 1.36.99 1.72l6.5 3.82c.63.37 1.4.37 2.03 0l6.5-3.82c.61-.36.99-1.02.99-1.72v-7.71c0-.71-.38-1.36-.99-1.72l-6.5-3.82c-.63-.37-1.41-.37-2.03 0Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="m17 9-5-3-5 3 10 6-5 3-5-3M11.5 10l-2 2M14.5 12l-2 2"></path></g>
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

export const Iost = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
