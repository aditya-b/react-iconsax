import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M17.82 8.7c.71-.39 1.58.12 1.57.93l-.04 5.42c-.01.82-.9 1.32-1.6.9l-4.68-2.8c-.7-.42-.68-1.44.03-1.83l4.72-2.62zM19.25 6.28c.15.38-.08.77-.44.97l-5.63 3.11c-.8.44-1.74-.27-1.54-1.15l1.22-5.53c.15-.7.94-1.04 1.56-.69l3.92 2.24c.43.25.74.62.91 1.05z"></path><path fill={color} d="M12.01 2.672l-2.07 9.3c-.03.14-.03.29 0 .44l1.73 8.68c.12.6-.39 1.17-.89.8l-5.29-3.77c-.56-.4-.89-1.04-.89-1.72v-9.31c0-.76.4-1.46 1.07-1.84l5.29-3.01c.15-.09.31-.15.47-.2.38-.13.66.25.58.63z"></path><path fill={color} d="M17.629 16.81c.65.39.69 1.32.08 1.76l-3.47 2.52c-.62.45-1.51.11-1.66-.65l-1.02-5.2c-.18-.9.79-1.58 1.58-1.11l4.49 2.68z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.29c-.56 0-1.12-.17-1.6-.51l-5-3.57a2.749 2.749 0 0 1-1.15-2.24V7.16c0-.98.53-1.9 1.39-2.39l5-2.86c.84-.48 1.89-.48 2.73 0l5 2.86c.85.49 1.39 1.4 1.39 2.39v8.81c0 .89-.43 1.72-1.15 2.24l-5 3.57c-.49.34-1.05.51-1.61.51Zm-.62-19.07-5 2.86c-.39.22-.63.64-.63 1.08v8.81c0 .4.2.78.52 1.02l5 3.57c.44.31 1.02.31 1.45 0l5-3.57c.33-.23.52-.61.52-1.02V7.16c0-.45-.24-.86-.63-1.08l-5-2.86c-.37-.22-.85-.22-1.23 0Z" fill={color}></path><path d="M11.85 21.982c-.35 0-.66-.25-.73-.6l-1.85-9.23a.808.808 0 0 1 0-.31l2-9c.09-.4.48-.66.9-.57.4.09.66.49.57.89l-1.97 8.85 1.82 9.08c.08.41-.18.8-.59.88-.06.01-.11.01-.15.01Z" fill={color}></path><path d="M18.16 17.662c-.13 0-.26-.03-.39-.11l-8.16-4.91a.741.741 0 0 1-.36-.66c0-.27.15-.51.39-.64l8.54-4.74c.36-.2.82-.07 1.02.29.2.36.07.82-.29 1.02l-7.41 4.11 7.05 4.24c.35.21.47.67.26 1.03-.15.24-.39.37-.65.37Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m11.01 2.571-5 2.86C5.39 5.791 5 6.451 5 7.171v8.81c0 .65.31 1.25.84 1.63l5 3.57c.7.5 1.63.5 2.32 0l5-3.57c.53-.38.84-.98.84-1.63v-8.81c0-.72-.38-1.38-1.01-1.74l-5-2.86c-.61-.35-1.37-.35-1.98 0Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-2 9 1.85 9.23"></path><path d="M18.16 16.912 10 12.002l8.54-4.74"></path></g>
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

export const KyberNetwork = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
