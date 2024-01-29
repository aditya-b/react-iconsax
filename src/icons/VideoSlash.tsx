import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M17.74 7.57c.01.07.01.15 0 .22 0-.07-.01-.14-.01-.21l.01-.01Z" fill={color}></path><path d="M17.279 6.56 3.829 20.01c-1.4-.89-1.95-2.48-1.95-4.01V8c0-3.42 1.33-4.75 4.75-4.75h6c2.89 0 4.28.95 4.65 3.31Z" fill={color}></path><path d="M21.4 2.229c-.3-.3-.79-.3-1.09 0L1.85 20.689c-.3.3-.3.79 0 1.09.15.14.35.22.54.22.2 0 .39-.08.54-.23L21.4 3.309c.3-.3.3-.78 0-1.08ZM22.38 8.38v7.24c0 1.43-.7 2-1.1 2.21-.19.1-.49.21-.86.21-.43 0-.96-.14-1.58-.58l-1.48-1.04c-.07 2.21-.77 3.47-2.36 4-.64.23-1.43.33-2.38.33h-6c-.24 0-.47-.01-.71-.04L15 11.63l5.65-5.65c.26.02.47.1.63.19.4.21 1.1.78 1.1 2.21Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M4.3 19.92c-.17 0-.34-.06-.48-.17-1.01-.83-1.57-2.16-1.57-3.75V8c0-3.42 1.33-4.75 4.75-4.75h6c2.04 0 4.18.38 4.64 3.23.07.41-.21.79-.62.86a.747.747 0 0 1-.86-.62c-.21-1.3-.76-1.97-3.16-1.97H7c-2.58 0-3.25.67-3.25 3.25v8c0 .65.13 1.86 1.02 2.59.32.26.37.74.1 1.06-.14.18-.36.27-.57.27ZM13 20.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c2.58 0 3.25-.67 3.25-3.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 3.42-1.33 4.75-4.75 4.75Z" fill={color}></path><path d="M20.798 18.04c-.43 0-.96-.14-1.59-.58l-2.64-1.85a.743.743 0 0 1-.18-1.04c.24-.34.7-.42 1.04-.18l2.64 1.85c.44.31.76.34.89.27s.29-.34.29-.88V7c0-.41.34-.75.75-.75s.75.34.75.75v8.62c0 1.43-.69 2-1.1 2.21-.19.1-.48.21-.85.21ZM2.02 22.939c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.14.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.63 7.578s.03-.95 0-1.26c-.17-2.04-1.5-2.74-4.11-2.74H6.21C3.05 3.578 2 4.628 2 7.788v8.42c0 1.26.38 2.53 1.37 3.34l.63.45M16.742 10.95v5.26c0 3.16-1.05 4.21-4.21 4.21h-5.27" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.998 6.738v9.07c0 1.67-1.12 2.25-2.48 1.29l-2.78-1.95M22.02 2.191l-20 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const VideoSlash = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
