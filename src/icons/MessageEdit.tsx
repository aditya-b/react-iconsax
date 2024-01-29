import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16 2H8C4 2 2 4 2 8v13c0 .55.45 1 1 1h13c4 0 6-2 6-6V8c0-4-2-6-6-6Zm-4.89 14.66c-.25.25-.71.48-1.05.53l-2.08.29c-.08.01-.16.02-.23.02-.35 0-.67-.12-.9-.35-.28-.28-.4-.69-.33-1.13l.29-2.08c.05-.34.28-.81.53-1.05l3.77-3.77a6.058 6.058 0 0 0 .51 1.09c.08.14.17.28.25.38.1.15.2.28.27.35.04.06.08.1.09.12.22.25.45.49.67.67.06.06.1.09.11.1.13.1.25.21.37.28.13.1.27.19.41.27.17.1.35.2.54.29.19.09.37.16.55.22l-3.77 3.77Zm5.44-5.43-.78.78c-.05.05-.12.08-.19.08-.02 0-.06 0-.08-.01a5.238 5.238 0 0 1-3.58-3.58c-.03-.09 0-.19.07-.26l.79-.79c1.29-1.29 2.51-1.26 3.77 0 .64.64.96 1.26.95 1.9 0 .63-.31 1.24-.95 1.88Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16 22.75H3c-.96 0-1.75-.79-1.75-1.75V8c0-4.42 2.33-6.75 6.75-6.75h8c4.42 0 6.75 2.33 6.75 6.75v8c0 4.42-2.33 6.75-6.75 6.75Zm-8-20C4.42 2.75 2.75 4.42 2.75 8v13c0 .14.11.25.25.25h13c3.58 0 5.25-1.67 5.25-5.25V8c0-3.58-1.67-5.25-5.25-5.25H8Z" fill={color}></path><path d="M7.95 17.75c-.47 0-.9-.17-1.22-.48-.38-.38-.55-.92-.46-1.5l.28-1.98c.06-.43.33-.98.64-1.29l5.19-5.19c1.78-1.78 3.33-.98 4.31 0 .77.77 1.12 1.58 1.04 2.39-.06.66-.41 1.28-1.04 1.92l-5.19 5.19c-.31.31-.85.58-1.29.65l-1.98.28c-.09 0-.19.01-.28.01Zm6.58-10c-.37 0-.7.24-1.08.61l-5.19 5.19c-.08.08-.2.33-.22.44l-.28 1.98c-.01.1 0 .19.04.23.04.04.13.05.23.04l1.98-.28c.12-.02.36-.14.44-.22l5.19-5.19c.38-.38.58-.71.61-1.01.03-.34-.17-.74-.61-1.18-.44-.42-.79-.61-1.11-.61Z" fill={color}></path><path d="M15.42 12.582c-.07 0-.14-.01-.2-.03a5.48 5.48 0 0 1-3.77-3.77.76.76 0 0 1 .52-.93c.4-.11.81.12.92.52a3.987 3.987 0 0 0 2.73 2.73.755.755 0 0 1-.2 1.48Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16 2H8C4 2 2 4 2 8v13c0 .55.45 1 1 1h13c4 0 6-2 6-6V8c0-4-2-6-6-6Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="m12.909 7.838-5.19 5.19c-.2.2-.39.59-.43.87l-.28 1.98c-.1.72.4 1.22 1.12 1.12l1.98-.28c.28-.04.67-.23.87-.43l5.19-5.19c.89-.89 1.32-1.93 0-3.25-1.32-1.33-2.36-.91-3.26-.01Z"></path><path d="M12.168 8.578a4.688 4.688 0 0 0 3.25 3.25"></path></g>
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

export const MessageEdit = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
