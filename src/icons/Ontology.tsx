import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M17.9 19.679a9.41 9.41 0 01-6.48 2.32c-5.17-.14-9.2-4.59-9.2-9.76v-7.03c0-.45.54-.67.85-.35l14.83 14.82zM6.22 4.3A9.332 9.332 0 0112.65 2c5.13.14 9.12 4.55 9.12 9.68v6.96c0 .45-.54.67-.85.35L6.22 4.3z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.7 22.75h-.29c-5.48-.15-9.93-4.87-9.93-10.51V5.21c0-.51.3-.96.77-1.15.47-.19 1-.09 1.36.27l14.83 14.83a.754.754 0 0 1-.04 1.1 10.214 10.214 0 0 1-6.7 2.49ZM2.98 5.81v6.43c0 4.84 3.8 8.88 8.47 9.01 1.93.04 3.8-.52 5.33-1.63L2.98 5.81ZM21.27 19.901c-.32 0-.64-.13-.88-.37l-14.7-14.7a.754.754 0 0 1 .04-1.1c1.91-1.67 4.38-2.56 6.94-2.48 5.43.15 9.85 4.83 9.85 10.43v6.96c0 .51-.3.96-.77 1.15-.15.07-.31.11-.48.11ZM7.35 4.371l13.68 13.68v-6.36c0-4.79-3.77-8.8-8.4-8.93-1.91-.04-3.76.51-5.28 1.61Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M17.9 19.679a9.41 9.41 0 0 1-6.48 2.32c-5.17-.14-9.2-4.59-9.2-9.76v-7.03c0-.45.54-.67.85-.35l14.83 14.82Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.22 4.3A9.332 9.332 0 0 1 12.65 2c5.13.14 9.12 4.55 9.12 9.68v6.96c0 .45-.54.67-.85.35L6.22 4.3Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Ontology = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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