import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20.098 6.94c0 .54-.29 1.03-.75 1.28l-1.74.94-1.48.79-3.07 1.66c-.33.18-.69.27-1.06.27-.37 0-.73-.09-1.06-.27l-6.29-3.39c-.46-.25-.75-.74-.75-1.28s.29-1.03.75-1.28l1.97-1.06 1.57-.85 2.75-1.48c.66-.36 1.46-.36 2.12 0l6.29 3.39c.46.25.75.74.75 1.28ZM9.899 12.79l-5.85-2.92c-.45-.23-.97-.2-1.4.06-.43.26-.68.72-.68 1.22v5.53c0 .96.53 1.82 1.39 2.25l5.85 2.92c.2.1.42.15.64.15.26 0 .52-.07.75-.22.43-.26.68-.72.68-1.22v-5.53c.01-.95-.52-1.81-1.38-2.24ZM22.03 11.15v5.53c0 .95-.53 1.81-1.39 2.24l-5.85 2.93a1.432 1.432 0 0 1-1.4-.07c-.42-.26-.68-.72-.68-1.22v-5.52c0-.96.53-1.82 1.39-2.25l2.15-1.07 1.5-.75 2.2-1.1c.45-.23.97-.21 1.4.06.42.26.68.72.68 1.22Z" fill={color}></path><path d="m17.611 9.16-1.48.79-9.51-5.35 1.57-.85 9.18 5.18c.1.06.18.14.24.23ZM17.75 10.969v2.27c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.52l1.5-.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 13.3c-.13 0-.26-.03-.38-.1L2.79 8.09a.752.752 0 1 1 .76-1.3L12 11.68l8.4-4.86a.76.76 0 0 1 1.03.27c.21.36.08.82-.27 1.03l-8.77 5.08a.94.94 0 0 1-.39.1Z" fill={color}></path><path d="M12 22.36c-.41 0-.75-.34-.75-.75v-9.07c0-.41.34-.75.75-.75s.75.34.75.75v9.07c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M12 22.75c-.88 0-1.75-.19-2.44-.57l-5.34-2.97c-1.45-.8-2.58-2.73-2.58-4.39V9.17c0-1.66 1.13-3.58 2.58-4.39l5.34-2.96c1.37-.76 3.51-.76 4.88 0l5.34 2.97c1.45.8 2.58 2.73 2.58 4.39v5.65c0 1.66-1.13 3.58-2.58 4.39l-5.34 2.96c-.69.38-1.56.57-2.44.57Zm0-20c-.63 0-1.25.13-1.71.38L4.95 6.1c-.96.53-1.81 1.97-1.81 3.07v5.65c0 1.1.85 2.54 1.81 3.08l5.34 2.97c.91.51 2.51.51 3.42 0l5.34-2.97c.96-.54 1.81-1.97 1.81-3.08V9.17c0-1.1-.85-2.54-1.81-3.08l-5.34-2.97c-.46-.24-1.08-.37-1.71-.37Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3.172 7.441 8.83 5.11 8.77-5.08M12 21.61v-9.07"></path></g><path d="m9.93 2.481-5.34 2.96c-1.21.67-2.2 2.35-2.2 3.73v5.65c0 1.38.99 3.06 2.2 3.73l5.34 2.97c1.14.63 3.01.63 4.15 0l5.34-2.97c1.21-.67 2.2-2.35 2.2-3.73v-5.65c0-1.38-.99-3.06-2.2-3.73l-5.34-2.97c-1.15-.63-3.01-.63-4.15.01Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Box1 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
