import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 12.75l-.31-.1-.19.6-1 3-2.5-4.68-.1-.19L6 12.25l2.18-1.09 1.82-.91.47-.21L12 5.25l1.55 3.4.95 2.1-.41.21L18 12.25l-4.5 2.5z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9.5 14c-.17 0-.35-.06-.49-.18a.746.746 0 0 1-.23-.79l2.5-8c.09-.3.36-.51.67-.52.32-.02.6.16.73.44l2.5 5.5c.17.37.01.8-.35.98l-5 2.5c-.1.04-.22.07-.33.07Zm2.63-6.65-1.39 4.44 2.78-1.39-1.39-3.05Z" fill={color}></path><path d="M13.5 15.5c-.08 0-.16-.01-.24-.04l-7.5-2.5a.753.753 0 0 1-.51-.66c-.02-.3.14-.59.41-.72l4-2c.37-.18.82-.03 1.01.34.19.37.04.82-.34 1.01l-2.38 1.19 5.47 1.82 2.72-1.51-2.29-.76a.754.754 0 0 1-.48-.95c.13-.39.55-.61.95-.48l3.92 1.29a.753.753 0 0 1 .13 1.37l-4.5 2.5a.71.71 0 0 1-.37.1Z" fill={color}></path><path d="M12 19c-.28 0-.53-.15-.66-.4l-2.5-4.68c-.2-.37-.06-.82.31-1.02.37-.2.82-.06 1.02.31l1.68 3.14.45-1.35c.13-.39.56-.6.95-.47.39.13.6.56.47.95l-1 3c-.09.28-.35.48-.65.51-.03.01-.05.01-.07.01Z" fill={color}></path><path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="m12 5.25-2.5 8 5-2.5-2.5-5.5Z"></path><path d="M14.08 10.96 18 12.25l-4.5 2.5-.4-.13L6 12.25l4-2M13 15.25l-1 3-2.5-4.68"></path></g><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Nebulas = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
