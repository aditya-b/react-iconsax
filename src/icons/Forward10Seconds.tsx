import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19.692 7.348a.75.75 0 0 0-1.2.9c1.08 1.44 1.65 3.12 1.65 4.86 0 4.49-3.65 8.14-8.14 8.14s-8.14-3.65-8.14-8.14 3.65-8.13 8.14-8.13c.58 0 1.17.07 1.81.22.03.01.06 0 .1 0 .02 0 .05.02.07.02.03 0 .05-.01.08-.01.04 0 .07-.01.1-.02.05-.01.1-.03.15-.06.03-.02.07-.03.1-.05.01-.01.03-.01.04-.02.03-.02.04-.05.06-.07a.58.58 0 0 0 .1-.12c.03-.04.04-.09.06-.13.01-.03.03-.06.04-.09v-.05c.01-.05.01-.1 0-.15 0-.05 0-.09-.01-.14-.01-.04-.03-.08-.05-.13a.61.61 0 0 0-.07-.14c-.01-.02-.01-.03-.02-.04l-1.98-2.47a.757.757 0 0 0-1.05-.12c-.32.26-.37.73-.12 1.05l.82 1.02c-.08 0-.16-.01-.24-.01-5.31 0-9.64 4.32-9.64 9.64s4.32 9.64 9.64 9.64 9.64-4.32 9.64-9.64c.01-2.07-.67-4.06-1.94-5.76Z" fill={color}></path><path d="M9.541 16.67c-.41 0-.75-.34-.75-.75v-3.39l-.19.22c-.28.31-.75.33-1.06.06a.756.756 0 0 1-.06-1.06l1.5-1.67c.21-.23.54-.31.83-.2.29.11.48.39.48.7v5.35c0 .41-.33.74-.75.74ZM14 16.67c-1.52 0-2.75-1.23-2.75-2.75v-1.35c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75v1.35c0 1.52-1.23 2.75-2.75 2.75Zm0-5.34c-.69 0-1.25.56-1.25 1.25v1.35a1.25 1.25 0 0 0 2.5 0v-1.35c0-.69-.56-1.25-1.25-1.25Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13.98 5.22a.74.74 0 0 1-.58-.28l-1.98-2.47c-.26-.32-.21-.8.12-1.05.32-.26.79-.21 1.05.12l1.98 2.47c.26.32.21.8-.12 1.05-.14.1-.31.16-.47.16Z" fill={color}></path><path d="M12 22.749c-5.31 0-9.64-4.32-9.64-9.64s4.32-9.64 9.64-9.64c.69 0 1.39.08 2.15.26.4.09.66.5.56.9-.09.4-.49.66-.9.56-.64-.15-1.24-.22-1.81-.22-4.49 0-8.14 3.65-8.14 8.14s3.65 8.14 8.14 8.14 8.14-3.65 8.14-8.14c0-1.74-.57-3.42-1.65-4.86a.75.75 0 0 1 1.2-.9c1.28 1.7 1.95 3.69 1.95 5.76 0 5.32-4.33 9.64-9.64 9.64Z" fill={color}></path><path d="M9.541 16.67c-.41 0-.75-.34-.75-.75v-3.39l-.19.21c-.28.31-.75.33-1.06.06a.756.756 0 0 1-.06-1.06l1.5-1.67c.21-.23.54-.31.83-.2.29.11.48.39.48.7v5.35c0 .42-.33.75-.75.75ZM14 16.67c-1.52 0-2.75-1.23-2.75-2.75v-1.35c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75v1.35c0 1.52-1.23 2.75-2.75 2.75Zm0-5.34c-.69 0-1.25.56-1.25 1.25v1.35a1.25 1.25 0 0 0 2.5 0v-1.35c0-.69-.56-1.25-1.25-1.25Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13.98 4.47 12 2M19.09 7.799c1.11 1.48 1.8 3.31 1.8 5.31a8.89 8.89 0 0 1-8.89 8.89 8.89 8.89 0 0 1-8.89-8.89A8.89 8.89 0 0 1 12 4.219c.68 0 1.34.09 1.98.24" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M9.54 15.918v-5.34l-1.5 1.67M14 10.578c1.1 0 2 .9 2 2v1.35c0 1.1-.9 2-2 2s-2-.9-2-2v-1.35a2 2 0 0 1 2-2Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Forward10Seconds = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
