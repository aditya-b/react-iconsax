import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-4.58 9.84c0 3.08-.67 3.77-2.46 4.83-.12.07-.25.1-.38.1-.26 0-.51-.13-.65-.37a.758.758 0 0 1 .26-1.03c1.21-.72 1.63-.98 1.71-2.79h-1.9c-1.09 0-1.94-.85-1.94-1.94V9.16c0-1.09.85-1.94 1.94-1.94h1.49c1.07 0 1.94.87 1.94 1.94v2.68h-.01Zm6.14 0c0 3.08-.67 3.77-2.46 4.83-.12.07-.25.1-.38.1-.26 0-.51-.13-.65-.37a.758.758 0 0 1 .26-1.03c1.21-.72 1.63-.98 1.71-2.79h-1.91c-1.09 0-1.94-.85-1.94-1.94V9.16c0-1.09.85-1.94 1.94-1.94h1.49c1.07 0 1.94.87 1.94 1.94v2.68Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill={color}></path><path d="M16.999 12.589h-2.68c-1.09 0-1.94-.85-1.94-1.94v-1.49c0-1.09.85-1.94 1.94-1.94h1.49c1.07 0 1.94.87 1.94 1.94v2.67c0 .42-.34.76-.75.76Zm-2.68-3.87c-.32 0-.44.24-.44.44v1.49c0 .2.11.44.44.44h1.93v-1.92c0-.24-.2-.44-.44-.44h-1.49v-.01Z" fill={color}></path><path d="M14.91 16.78c-.26 0-.51-.13-.65-.37a.758.758 0 0 1 .26-1.03c1.36-.81 1.73-1.02 1.73-3.54 0-.41.34-.75.75-.75s.75.34.75.75c0 3.08-.67 3.77-2.46 4.83-.12.07-.25.11-.38.11ZM10.862 12.589h-2.68c-1.09 0-1.94-.85-1.94-1.94v-1.49c0-1.09.85-1.94 1.94-1.94h1.49c1.07 0 1.94.87 1.94 1.94v2.67c0 .42-.33.76-.75.76Zm-2.67-3.87c-.32 0-.44.24-.44.44v1.49c0 .2.11.44.44.44h1.93v-1.92c0-.24-.2-.44-.44-.44h-1.49v-.01Z" fill={color}></path><path d="M8.77 16.78c-.26 0-.51-.13-.65-.37a.758.758 0 0 1 .26-1.03c1.36-.81 1.73-1.02 1.73-3.54 0-.41.34-.75.75-.75s.75.34.75.75c0 3.08-.67 3.77-2.46 4.83-.12.07-.25.11-.38.11Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.003 11.839h-2.68c-.71 0-1.19-.54-1.19-1.19v-1.49c0-.65.48-1.19 1.19-1.19h1.49c.65 0 1.19.54 1.19 1.19v2.68ZM17 11.84c0 2.79-.52 3.26-2.09 4.19M10.862 11.839h-2.68c-.71 0-1.19-.54-1.19-1.19v-1.49c0-.65.48-1.19 1.19-1.19h1.49c.65 0 1.19.54 1.19 1.19v2.68ZM10.863 11.84c0 2.79-.52 3.26-2.09 4.19"></path></g>
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

export const QuoteUpSquare = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
