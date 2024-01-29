import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.67 14.43l-2.25 1.5c-.13.08-.27.13-.42.13-.15 0-.29-.04-.42-.13l-2.25-1.5a.755.755 0 01-.21-1.04c.23-.35.7-.44 1.04-.21l1.83 1.22 1.83-1.22c.34-.23.81-.14 1.04.21.24.35.15.81-.19 1.04zm1.83-3.44c0 .78-.85 1.26-1.51.86l-2.47-1.48c-.32-.19-.71-.19-1.03 0l-2.47 1.48a.996.996 0 01-1.51-.86V9.16c0-.34.18-.66.46-.84l3.5-2.22c.33-.21.74-.21 1.07 0l3.5 2.22c.29.18.46.5.46.84v3.83z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M18.73 21.75h-6.46c-.42 0-.81-.21-1.04-.56l-2.92-4.38-2.26 3.87c-.22.38-.61.61-1.04.62-.42.04-.84-.19-1.08-.56L.56 15.68c-.28-.42-.28-.97 0-1.39l3.67-5.5c.23-.35.62-.56 1.04-.56h4.93L7.8 4.11c-.22-.39-.23-.87 0-1.25.22-.39.64-.63 1.08-.63h6.84c.44 0 .86.24 1.08.62l6.7 11.48c.24.42.23.92-.04 1.32l-3.68 5.52c-.24.37-.63.58-1.05.58Zm-6.33-1.5h6.2l3.52-5.28-6.55-11.22H9.31l3.5 6 2.4 4.12c.22.38.23.86 0 1.25-.22.39-.64.63-1.08.63H9.4l3 4.5ZM1.9 15l3.06 4.58 2.24-3.83 3.5-6H5.41L1.9 15Zm7.91-.75h3.89l-1.94-3.33-1.95 3.33Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.75 9.43 8.5 15l-.63 1.09-2.47 4.22c-.18.32-.64.33-.84.02l-3.38-5.05a.516.516 0 0 1 0-.56l3.67-5.5c.09-.14.25-.22.42-.22h6.23l.25.43Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M8.5 15h5.63c.39 0 .63-.42.43-.75l-2.81-4.82L11.5 9 8.44 3.75c-.2-.33.04-.75.43-.75h6.84c.18 0 .35.09.43.25l6.7 11.48c.1.17.09.37-.01.53l-3.68 5.52c-.09.14-.25.22-.42.22h-6.46c-.17 0-.33-.08-.42-.22l-3.14-4.71-.44-.67.23-.4Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path>
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

export const Wanchain1 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
