import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20.17 17.57c-.53.49-1.14.86-1.8 1.11-.66.25-1.37-.23-1.37-.94v-1.32a3.53 3.53 0 0 0-3.53-3.53h-2.94A3.53 3.53 0 0 0 7 16.42V18c0 .55-.45 1-1 1h-.45C3.1 18.63 2 16.64 2 14.86c0-1.68.98-3.54 3.11-4.06-.59-2.33-.09-4.52 1.43-6.11 1.73-1.81 4.49-2.53 6.87-1.79 2.19.67 3.73 2.47 4.28 4.97 1.91.43 3.44 1.87 4.05 3.87.66 2.17.06 4.4-1.57 5.83Z" fill={color}></path><path d="M13.47 14.39h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03Zm.5 4.55c.25.25.25.66 0 .91a.667.667 0 0 1-.91 0L12 18.79l-1.05 1.06a.667.667 0 0 1-.91 0 .646.646 0 0 1 0-.91l1.06-1.06-1.06-1.05a.646.646 0 0 1 0-.91c.25-.25.66-.25.91 0L12 16.98l1.06-1.06c.25-.25.66-.25.91 0s.25.66 0 .91l-1.06 1.05 1.06 1.06Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.652 20.752h-.04c-.41 0-.75-.34-.74-.76 0-.41.34-.74.75-.74h.04c1.14 0 2.23-.42 3.07-1.2 1.55-1.36 1.66-3.3 1.24-4.67-.42-1.37-1.58-2.92-3.61-3.18a.753.753 0 0 1-.65-.62c-.4-2.39-1.69-4.04-3.63-4.64-2.02-.62-4.35-.01-5.81 1.52-1.42 1.49-1.75 3.56-.93 5.85a.75.75 0 1 1-1.41.51c-1.01-2.81-.55-5.5 1.26-7.39 1.84-1.93 4.79-2.7 7.34-1.91 2.33.72 3.98 2.64 4.57 5.3 2.04.46 3.67 2 4.32 4.13.71 2.32.06 4.7-1.67 6.22a6.136 6.136 0 0 1-4.1 1.58Z" fill={color}></path><path d="M5.568 20.749h-.05c-2.88-.2-4.19-2.46-4.19-4.47s1.31-4.26 4.19-4.47c.75-.01 1.47.16 2.11.48.37.19.51.64.33 1.01-.19.37-.64.51-1.01.33-.42-.22-.91-.31-1.36-.32-1.89.14-2.75 1.59-2.75 2.97 0 1.38.86 2.83 2.8 2.97.41.03.72.39.69.8-.04.4-.37.7-.76.7ZM15.819 10.639c-.27 0-.54-.15-.67-.42a.746.746 0 0 1 .34-1.01c.61-.31 1.3-.48 1.98-.49.39.02.76.32.76.74.01.41-.32.76-.74.76-.46.01-.92.12-1.34.33-.1.07-.22.09-.33.09ZM9.56 22.16c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.83-2.83c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.83 2.83c-.15.15-.34.22-.53.22Z" fill={color}></path><path d="M12.39 22.16c-.19 0-.38-.07-.53-.22l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.83 2.83c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.61 19.999c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14-1.54-9.34-15.01-5.8-11.82 3.09" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44M15.82 9.89c.52-.26 1.08-.4 1.66-.41" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="m12.393 18.59-2.83 2.82M12.393 21.41l-2.83-2.82"></path></g>
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

export const CloudCross = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
