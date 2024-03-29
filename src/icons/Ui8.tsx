import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M18 6.34c-.14 0-.58.03-.58.45 0 .29.22.46.58.46s.58-.17.58-.46c0-.33-.3-.45-.58-.45zM18 5.512c.27 0 .44-.15.44-.38 0-.28-.23-.37-.44-.37s-.44.1-.44.37c0 .23.17.38.44.38z"></path><path fill={color} d="M18 2a3.99 3.99 0 00-3.98 3.66C14 5.77 14 5.89 14 6c0 2.21 1.79 4 4 4 .35 0 .68-.04 1-.13A3.999 3.999 0 0018 2zm0 6.2c-.99 0-1.6-.5-1.6-1.31 0-.39.18-.74.5-.98-.24-.21-.37-.5-.37-.83 0-.77.59-1.28 1.46-1.28s1.46.52 1.46 1.28c0 .33-.12.62-.37.83.33.23.51.58.51.98.01.81-.6 1.31-1.59 1.31z"></path><path fill={color} d="M18 11.498a5.42 5.42 0 01-3.1-.96.1.1 0 00-.16.08l.01 4.82a.749.749 0 11-1.5 0v-4.94c0-.33.22-.61.52-.71.08-.03.13-.14.07-.2a5.46 5.46 0 01-1.34-3.58c0-.17.01-.35.03-.52 0-.04.01-.07.01-.11a.537.537 0 00-.29-.55l-.9-.43a2.02 2.02 0 00-1.7 0l-6.5 3.06c-.7.33-1.15 1.03-1.15 1.81v7.46c0 .78.45 1.48 1.15 1.81l6.5 3.06c.54.25 1.16.25 1.7 0l6.5-3.06c.7-.33 1.15-1.03 1.15-1.81v-4.71c0-.31-.29-.55-.6-.53-.13.01-.26.01-.4.01zm-6.25 2c0 1.52-1.23 2.75-2.75 2.75s-2.75-1.23-2.75-2.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3a1.25 1.25 0 002.5 0v-3c0-.41.34-.75.75-.75s.75.34.75.75v3z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M10.5 22.54c-.4 0-.79-.09-1.16-.26l-6.5-3.06a2.762 2.762 0 0 1-1.58-2.49V9.27c0-1.06.62-2.04 1.58-2.49l6.5-3.06c.74-.35 1.59-.34 2.33 0l2.67 1.26c.31.15.48.48.42.81-.01.07-.01.14-.01.21a3.256 3.256 0 0 0 4.05 3.15.747.747 0 0 1 .96.72v6.86c0 1.06-.62 2.04-1.58 2.49l-6.5 3.06c-.38.17-.78.26-1.18.26Zm0-17.58c-.18 0-.37.04-.54.12l-6.5 3.06c-.44.21-.72.64-.72 1.13v7.46c0 .49.28.92.72 1.13l6.5 3.06c.34.15.73.16 1.07 0l6.5-3.06c.44-.21.72-.64.72-1.13v-5.99c-.08 0-.17.01-.25.01-2.58 0-4.68-2.06-4.75-4.62l-2.22-1.05c-.17-.08-.35-.12-.53-.12Z" fill={color}></path><path d="M9 16.25c-1.52 0-2.75-1.23-2.75-2.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3a1.25 1.25 0 0 0 2.5 0v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 1.52-1.23 2.75-2.75 2.75ZM14 16.19c-.41 0-.75-.34-.75-.75V10.5c0-.41.34-.75.75-.75s.75.34.75.75v4.94c0 .42-.34.75-.75.75ZM18 10.75c-2.62 0-4.75-2.13-4.75-4.75 0-.15 0-.32.03-.47.2-2.41 2.23-4.28 4.72-4.28a4.752 4.752 0 0 1 0 9.5Zm0-8c-1.7 0-3.09 1.28-3.23 2.97-.02.14-.02.21-.02.28a3.256 3.256 0 0 0 4.05 3.15A3.24 3.24 0 0 0 21.25 6c0-1.79-1.46-3.25-3.25-3.25Z" fill={color}></path><path d="M19.09 5.91c.24-.21.37-.49.37-.83 0-.77-.58-1.28-1.46-1.28s-1.46.52-1.46 1.28c0 .33.13.62.37.83-.32.24-.5.59-.5.98 0 .81.61 1.31 1.6 1.31.99 0 1.6-.5 1.6-1.31a1.2 1.2 0 0 0-.52-.98ZM18 5.51c-.27 0-.44-.15-.44-.38 0-.28.23-.37.44-.37s.44.1.44.37c0 .23-.17.38-.44.38Zm0 .83c.28 0 .58.12.58.45 0 .29-.22.46-.58.46s-.58-.17-.58-.46c0-.41.44-.45.58-.45Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19 9.868v6.86c0 .78-.45 1.48-1.15 1.81l-6.5 3.06c-.54.25-1.16.25-1.7 0l-6.5-3.06c-.7-.33-1.15-1.03-1.15-1.81v-7.46c0-.78.45-1.48 1.15-1.81l6.5-3.06a2.02 2.02 0 0 1 1.7 0l2.67 1.26c-.02.11-.02.23-.02.34 0 2.21 1.79 4 4 4 .35 0 .68-.04 1-.13Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"></path><path opacity=".4" d="M7 10.5v3c0 1.1.9 2 2 2s2-.9 2-2v-3M14 10.5v4.94" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path><path d="M22 6c0 1.86-1.27 3.43-3 3.87-.32.09-.65.13-1 .13-2.21 0-4-1.79-4-4 0-.11 0-.23.02-.34A3.99 3.99 0 0 1 18 2c2.21 0 4 1.79 4 4Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M19.09 5.91c.24-.21.37-.49.37-.83 0-.77-.58-1.28-1.46-1.28s-1.46.52-1.46 1.28c0 .33.13.62.37.83-.32.24-.5.59-.5.98 0 .81.61 1.31 1.6 1.31.99 0 1.6-.5 1.6-1.31a1.2 1.2 0 0 0-.52-.98ZM18 5.51c-.27 0-.44-.15-.44-.38 0-.28.23-.37.44-.37s.44.1.44.37c0 .23-.17.38-.44.38Zm0 .83c.28 0 .58.12.58.45 0 .29-.22.46-.58.46s-.58-.17-.58-.46c0-.41.44-.45.58-.45Z" fill={color}></path>
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

export const Ui8 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
