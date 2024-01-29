import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m10.51 11.22-2.2-8.83a.505.505 0 0 0-.5-.39C4.6 2 2 4.6 2 7.81v5.7c0 .34.33.59.66.49l7.5-2.17a.5.5 0 0 0 .35-.61ZM11.12 13.679a.515.515 0 0 0-.64-.37l-8.11 2.36c-.22.07-.37.27-.37.5v.02c0 3.21 2.6 5.81 5.81 5.81h4.72c.33 0 .58-.31.5-.64l-1.91-7.68ZM16.19 2h-5.75c-.33 0-.58.31-.5.64l4.74 18.97c.06.23.26.39.5.39h1C19.4 22 22 19.4 22 16.19V7.81C22 4.6 19.4 2 16.19 2Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill={color}></path><path d="M13.952 22.749c-.34 0-.64-.23-.73-.57l-4.95-20c-.1-.4.15-.81.55-.91.4-.1.81.14.91.55l4.95 20c.1.4-.15.81-.55.91-.06.01-.12.02-.18.02Z" fill={color}></path><path d="M2.002 15.75c-.33 0-.62-.21-.72-.54-.12-.4.11-.81.51-.93l9.53-2.78c.4-.12.81.11.93.51s-.11.81-.51.93l-9.53 2.78c-.07.02-.14.03-.21.03Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"></path><g opacity=".4">
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 2l4.95 20M11.53 12.22L2 15"></path>
  </g>
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

export const PictureFrame = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
