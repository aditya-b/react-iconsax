import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM12 18.01c-3.17 0-5.75-2.58-5.75-5.75S8.83 6.51 12 6.51c.14 0 .29.02.43.03l-.28-.32a.756.756 0 01.07-1.06c.31-.27.79-.24 1.06.07l1.67 1.91c.01.01.01.02.02.03.01.01.02.01.02.02.02.03.03.07.05.11.02.05.05.09.06.14.01.05.01.09.02.14 0 .05.01.09.01.14 0 .05-.02.09-.04.14-.02.05-.03.1-.05.14-.02.04-.06.08-.09.12-.03.03-.04.07-.07.09-.01.01-.02.01-.03.02-.01.01-.01.02-.02.02l-1.94 1.42a.72.72 0 01-.44.14c-.23 0-.46-.11-.61-.31-.24-.33-.17-.8.16-1.05l.56-.41c-.19-.01-.37-.03-.56-.03a4.26 4.26 0 00-4.25 4.25A4.26 4.26 0 0012 16.51a4.26 4.26 0 004.25-4.25c0-.85-.25-1.66-.71-2.36a.746.746 0 01.21-1.04c.34-.23.81-.14 1.04.21.63.95.97 2.05.97 3.19A5.766 5.766 0 0112 18.01z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"></path><path fill={color} d="M12 18.01c-3.17 0-5.75-2.58-5.75-5.75S8.83 6.51 12 6.51c.64 0 1.28.09 1.89.28.4.12.62.54.5.94a.75.75 0 01-.94.5c-.46-.14-.95-.21-1.45-.21a4.26 4.26 0 00-4.25 4.25A4.26 4.26 0 0012 16.52a4.26 4.26 0 004.25-4.25c0-.85-.25-1.66-.71-2.36a.746.746 0 01.21-1.04c.34-.23.81-.14 1.04.21.63.95.97 2.05.97 3.19A5.764 5.764 0 0112 18.01z"></path><path fill={color} d="M14.381 8.4c-.21 0-.42-.09-.57-.26l-1.67-1.91a.756.756 0 01.07-1.06c.31-.27.79-.24 1.06.07l1.67 1.91c.27.31.24.79-.07 1.06-.14.13-.31.19-.49.19z"></path><path fill={color} d="M12.44 9.82c-.23 0-.46-.11-.61-.31-.24-.33-.17-.8.16-1.05l1.94-1.42c.33-.24.8-.17 1.05.16.24.33.17.8-.16 1.05l-1.94 1.42c-.13.1-.29.15-.44.15z"></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"></path><g opacity=".4">
    <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.67 7.51c-.5-.15-1.05-.25-1.67-.25-2.76 0-5 2.24-5 5s2.24 5 5 5a5.002 5.002 0 004.16-7.78M14.38 7.65l-1.66-1.91M14.38 7.65l-1.94 1.42"></path>
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

export const RefreshRightSquare = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
