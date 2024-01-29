import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13.5 4.608v2.93c0 .67-.54 1.21-1.21 1.21H3.21c-.68 0-1.21-.56-1.21-1.23.01-1.13.46-2.16 1.21-2.91S5 3.398 6.14 3.398h6.15c.67 0 1.21.54 1.21 1.21ZM2 11.46v5c0 2.29 1.85 4.14 4.14 4.14h11.71c2.29 0 4.15-1.86 4.15-4.15v-4.99c0-.67-.54-1.21-1.21-1.21H3.21c-.67 0-1.21.54-1.21 1.21Zm6 5.79H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Zm6.5 0h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.97 1.75h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V3.78c0-1.27-.76-2.03-2.03-2.03Zm-1.96 5.57c-.03.03-.1.07-.15.07l-1.04.15c-.03.01-.07.01-.1.01-.15 0-.28-.05-.37-.15a.528.528 0 0 1-.14-.47l.15-1.04c.01-.05.04-.12.07-.15l1.7-1.7c.03.07.06.15.09.23.04.08.08.15.12.22.03.06.07.12.11.16.04.06.08.12.11.15a1.848 1.848 0 0 0 .32.33c.02.02.04.04.05.04.05.04.11.09.15.12.06.04.11.08.17.11.07.04.15.08.23.12.08.04.16.07.23.09l-1.7 1.71Zm2.39-2.39-.33.33c-.01.02-.04.03-.07.03h-.03c-.72-.21-1.29-.78-1.5-1.5-.01-.04 0-.08.03-.11l.33-.33c.54-.54 1.05-.53 1.58 0 .27.27.4.53.4.79-.01.26-.14.52-.41.79Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.5 9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 17.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 17.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M17.56 21.25H6.44c-3.98 0-5.19-1.2-5.19-5.14V7.89c0-3.94 1.21-5.14 5.19-5.14h8.06c.41 0 .75.34.75.75s-.34.75-.75.75H6.44c-3.14 0-3.69.54-3.69 3.64v8.21c0 3.1.55 3.64 3.69 3.64h11.11c3.14 0 3.69-.54 3.69-3.64v-4.08c0-.41.34-.75.75-.75s.75.34.75.75v4.08c.01 3.95-1.2 5.15-5.18 5.15Z" fill={color}></path><path d="M15.521 11.438c-.39 0-.76-.14-1.02-.41-.32-.32-.46-.78-.39-1.26l.2-1.42c.05-.36.27-.79.52-1.04l3.71-3.71c1.47-1.47 2.75-.63 3.39 0 .63.63 1.47 1.91 0 3.39l-3.71 3.71c-.26.26-.69.47-1.04.52l-1.42.2c-.08.01-.16.02-.24.02Zm4.71-7.16c-.2 0-.38.14-.63.38l-3.7 3.71a.75.75 0 0 0-.1.2l-.2 1.35 1.36-.19a.75.75 0 0 0 .2-.1l3.71-3.71c.47-.47.54-.73 0-1.26-.26-.26-.45-.38-.64-.38Z" fill={color}></path><path d="M20.868 7.742c-.07 0-.14-.01-.2-.03a4.121 4.121 0 0 1-2.84-2.84.76.76 0 0 1 .52-.93c.4-.11.81.12.93.52.25.87.94 1.56 1.81 1.81.4.11.63.53.52.92a.79.79 0 0 1-.74.55Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M1.996 8.5h9.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M5.996 16.5h2M10.496 16.5h4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.996 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.436c-3.55 0-4.44-.88-4.44-4.39V7.89c0-3.51.89-4.39 4.44-4.39h8.06" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="m19.076 4.131-3.71 3.71c-.14.14-.28.42-.31.62l-.2 1.42c-.07.51.29.87.8.8l1.42-.2c.2-.03.48-.17.62-.31l3.71-3.71c.64-.64.94-1.38 0-2.32-.95-.95-1.69-.65-2.33-.01Z"></path><path d="M18.547 4.66c.32 1.13 1.2 2.01 2.32 2.32"></path></g>
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

export const CardEdit = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
