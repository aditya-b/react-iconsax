import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M14.55 22.42c-.33 0-.64-.22-.73-.56-.1-.4.13-.81.53-.92a9.256 9.256 0 006.89-8.95c0-5.1-4.15-9.25-9.25-9.25-4.33 0-7.17 2.53-8.5 4.06h2.94c.41 0 .75.34.75.75s-.32.76-.74.76H2.01c-.07 0-.14-.01-.21-.03a.899.899 0 01-.24-.12.659.659 0 01-.21-.23c-.05-.1-.09-.2-.1-.31V3c0-.41.34-.75.75-.75s.75.34.75.75v2.39C4.38 3.64 7.45 1.25 12 1.25c5.93 0 10.75 4.82 10.75 10.75 0 4.88-3.29 9.16-8.01 10.4-.06.01-.13.02-.19.02zM11.29 22.73c-.02 0-.05 0-.07-.01-1.07-.07-2.12-.31-3.12-.7a.751.751 0 01-.43-.97c.15-.38.59-.58.97-.43.86.34 1.77.54 2.69.61h.01c.4.02.7.36.7.76v.04a.76.76 0 01-.75.7zm-5.51-2.15c-.17 0-.33-.05-.47-.16-.84-.67-1.57-1.46-2.18-2.35a.73.73 0 01.19-1.04.76.76 0 011.04.19c.53.77 1.16 1.45 1.89 2.02.17.14.28.35.28.58 0 .17-.05.34-.16.48-.14.18-.36.28-.59.28zM2.44 15.7c-.33 0-.62-.21-.71-.52-.32-1.03-.48-2.1-.48-3.18 0-.41.34-.75.75-.75s.75.34.75.75c0 .93.14 1.85.41 2.73.02.07.03.15.03.23 0 .33-.21.61-.52.71-.08.02-.15.03-.23.03z"></path><path fill={color} d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M14.55 22.42c-.33 0-.64-.22-.73-.56-.11-.4.13-.81.54-.92a9.256 9.256 0 006.89-8.95c0-5.1-4.15-9.25-9.25-9.25-4.33 0-7.17 2.53-8.5 4.06h2.94a.755.755 0 010 1.51H2.01c-.05 0-.14-.01-.21-.03a.899.899 0 01-.24-.12.659.659 0 01-.21-.23.808.808 0 01-.1-.31V3c0-.41.34-.75.75-.75s.75.34.75.75v2.39C4.38 3.64 7.45 1.25 12 1.25c5.93 0 10.75 4.82 10.75 10.75 0 4.88-3.29 9.16-8.01 10.4-.06.01-.13.02-.19.02zM11.29 22.73c-.02 0-.04-.01-.05-.01-1.08-.07-2.14-.31-3.14-.7a.747.747 0 01-.43-.97c.15-.38.6-.57.97-.43.87.34 1.78.54 2.7.61.39.02.7.36.7.76l-.01.04c-.02.39-.35.7-.74.7zm-5.51-2.15c-.17 0-.33-.06-.47-.16-.84-.68-1.58-1.47-2.18-2.35a.73.73 0 01.19-1.04.77.77 0 011.04.18v.01c.01.01.02.03.03.04a9.21 9.21 0 001.86 1.98c.17.14.28.35.28.58 0 .17-.05.34-.16.48-.15.18-.36.28-.59.28zM2.44 15.7c-.33 0-.62-.21-.71-.52-.32-1.03-.48-2.1-.48-3.18v-.01c.01-.41.34-.74.75-.74s.75.34.75.75c0 .94.14 1.86.41 2.73.02.08.03.15.03.23a.747.747 0 01-.75.74z"></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.55 21.67C18.84 20.54 22 16.64 22 12c0-5.52-4.44-10-10-10C5.33 2 2 7.56 2 7.56m0 0V3m0 4.56H6.44"></path><path stroke={color} strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12c0 5.52 4.48 10 10 10" opacity=".4"></path>
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

export const Refresh2 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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