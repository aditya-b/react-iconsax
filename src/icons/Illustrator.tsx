import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-3.13 14.68a.75.75 0 01-.95-.47l-.71-2.13H8.32l-.98 2.2c-.17.38-.61.55-.99.38-.38-.17-.55-.61-.38-.99L9.5 7.74c.13-.28.4-.47.72-.44.31.01.58.22.68.51l2.64 7.93a.76.76 0 01-.48.94zm4.04-.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.29c0-.41.34-.75.75-.75s.75.34.75.75v5.29zm.17-7.55c-.05.12-.12.23-.22.32-.09.09-.2.17-.32.22-.12.05-.25.07-.38.07a1.015 1.015 0 01-.93-.61c-.05-.13-.07-.25-.07-.39 0-.13.02-.26.07-.38.06-.12.13-.23.22-.32.09-.1.2-.17.32-.22.37-.15.82-.06 1.09.22a.995.995 0 01.3.7c0 .14-.03.27-.08.39z"></path><path fill={color} d="M8.98 12.57h1.92l-.82-2.46-1.1 2.46z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12.82 16.72a.75.75 0 0 1-.71-.51l-2.03-6.1-2.74 6.17c-.17.38-.61.55-.99.38-.38-.17-.55-.61-.38-.99L9.5 7.74c.13-.28.4-.47.72-.44.31.01.58.22.68.51l2.64 7.93c.13.39-.08.82-.47.95-.09.01-.17.03-.25.03Z" fill={color}></path><path d="M11.94 12.57H7.53v1.5h4.41v-1.5ZM16.35 16.72c-.41 0-.75-.34-.75-.75v-5.29c0-.41.34-.75.75-.75s.75.34.75.75v5.29c0 .41-.34.75-.75.75ZM16.35 9.031a1.015 1.015 0 0 1-.93-.61c-.05-.13-.07-.25-.07-.39 0-.13.02-.26.07-.38.06-.12.13-.23.22-.32.09-.1.2-.17.32-.22.37-.15.82-.06 1.09.22a.995.995 0 0 1 .3.7c0 .14-.03.27-.08.39s-.12.23-.22.32c-.09.09-.2.17-.32.22-.12.05-.25.07-.38.07Z" fill={color}></path><path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color}><path d="M6.5 16 10 8l3.6 8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.3 13.3h5.4" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M16.1 16v-5.3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.14 8.035v0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g>
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

export const Illustrator = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
