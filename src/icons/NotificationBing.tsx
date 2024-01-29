import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m20.19 14.06-1.13-1.88c-.25-.41-.47-1.2-.47-1.68V8.63c0-3.63-2.95-6.58-6.57-6.58C8.39 2.06 5.44 5 5.44 8.63v1.86c0 .48-.22 1.27-.46 1.68l-1.13 1.88c-.43.73-.53 1.56-.26 2.28.27.73.88 1.31 1.68 1.57 1.08.36 2.17.62 3.28.81.11.02.22.03.33.05l.44.06c.26.04.52.07.79.09a20.187 20.187 0 0 0 3.79 0c.23-.02.46-.04.68-.07.18-.02.36-.04.54-.07.11-.01.22-.03.33-.05 1.12-.18 2.23-.46 3.31-.82a2.65 2.65 0 0 0 1.64-1.58c.28-.75.2-1.57-.21-2.26ZM12.75 10a.76.76 0 1 1-1.52 0V6.9a.76.76 0 1 1 1.52 0V10ZM14.83 20.01A3.014 3.014 0 0 1 12 22c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06l.49-.06Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 10.521c-.41 0-.75-.34-.75-.75v-3.33c0-.41.34-.75.75-.75s.75.34.75.75v3.33c0 .42-.34.75-.75.75Z" fill={color}></path><path d="M12.02 20.348c-2.58 0-5.15-.41-7.6-1.23-.91-.3-1.6-.95-1.9-1.77-.3-.82-.2-1.76.29-2.58l1.27-2.12c.28-.47.53-1.35.53-1.9v-2.1c0-4.09 3.32-7.41 7.41-7.41s7.41 3.32 7.41 7.41v2.1c0 .54.25 1.43.53 1.9l1.27 2.12c.47.78.55 1.71.24 2.56-.31.85-.99 1.5-1.85 1.79-2.45.83-5.02 1.23-7.6 1.23Zm0-17.6c-3.26 0-5.91 2.65-5.91 5.91v2.1c0 .81-.32 1.98-.74 2.67l-1.27 2.13c-.26.43-.32.89-.17 1.29s.49.7.97.86c4.6 1.53 9.66 1.53 14.26 0 .43-.14.76-.46.91-.88.16-.42.11-.88-.12-1.27l-1.27-2.12c-.42-.69-.74-1.86-.74-2.67v-2.1c-.01-3.27-2.66-5.92-5.92-5.92Z" fill={color}></path><path d="M12 22.9c-1.07 0-2.12-.44-2.88-1.2-.76-.76-1.2-1.81-1.2-2.88h1.5c0 .68.28 1.34.76 1.82s1.14.76 1.82.76c1.42 0 2.58-1.16 2.58-2.58h1.5c0 2.25-1.83 4.08-4.08 4.08Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M12 6.441v3.33" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path><path d="M12.02 2C8.34 2 5.36 4.98 5.36 8.66v2.1c0 .68-.28 1.7-.63 2.28l-1.27 2.12c-.78 1.31-.24 2.77 1.2 3.25a23.34 23.34 0 0 0 14.73 0 2.22 2.22 0 0 0 1.2-3.25l-1.27-2.12c-.35-.58-.63-1.61-.63-2.28v-2.1C18.68 5 15.68 2 12.02 2Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path><path opacity=".4" d="M15.33 18.82c0 1.83-1.5 3.33-3.33 3.33-.91 0-1.75-.38-2.35-.98-.6-.6-.98-1.44-.98-2.35" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path>
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

export const NotificationBing = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
