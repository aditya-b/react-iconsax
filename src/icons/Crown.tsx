import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17 22H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM20.35 5.52l-4 2.86c-.53.38-1.29.15-1.52-.46l-1.89-5.04c-.32-.87-1.55-.87-1.87 0l-1.9 5.03c-.23.62-.98.85-1.51.46l-4-2.86c-.8-.56-1.86.23-1.53 1.16l4.16 11.65c.14.4.52.66.94.66h9.53c.42 0 .8-.27.94-.66l4.16-11.65c.34-.93-.72-1.72-1.51-1.15Zm-5.85 9.23h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17 21.042H7c-3.17 0-5.75-2.58-5.75-5.75v-9.58c0-1.3.6-1.75.96-1.9.36-.15 1.1-.26 2.02.66l2.59 2.59c.1.1.26.1.35 0l3.59-3.59c.66-.66 1.82-.66 2.47 0l3.59 3.59c.1.1.26.1.35 0l2.59-2.59c.92-.92 1.66-.8 2.02-.66.36.15.96.59.96 1.9v9.59c.01 3.43-2.3 5.74-5.74 5.74ZM2.81 5.242c-.03.08-.06.23-.06.47v9.59A4.26 4.26 0 0 0 7 19.552h10c2.58 0 4.25-1.67 4.25-4.25v-9.59c0-.24-.03-.38-.06-.46-.08.04-.2.12-.37.29l-2.59 2.59c-.66.66-1.82.66-2.47 0l-3.59-3.59c-.1-.1-.26-.1-.35 0l-3.58 3.58c-.66.66-1.82.66-2.47 0l-2.59-2.59c-.17-.17-.3-.25-.37-.29Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M2 15.29V5.71c0-1.33.77-1.65 1.71-.71L6.3 7.59c.39.39 1.03.39 1.41 0L11.29 4a.996.996 0 0 1 1.41 0l3.59 3.59c.39.39 1.03.39 1.41 0L20.29 5c.94-.94 1.71-.62 1.71.71v9.59c0 3-2 5-5 5H7c-2.76-.01-5-2.25-5-5.01Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Crown = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
