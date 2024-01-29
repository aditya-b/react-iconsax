import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M20.89 10.53c-.41 0-.75-.34-.75-.75V6.91L12 2.84 3.86 6.91v2.87c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.45c0-.28.16-.54.42-.67l8.89-4.44c.21-.11.46-.11.67 0l8.89 4.44c.25.13.42.39.42.67v3.33a.77.77 0 01-.76.75zM12 22.75a.73.73 0 01-.33-.08l-8.89-4.44a.77.77 0 01-.42-.67v-3.33c0-.41.34-.75.75-.75s.75.34.75.75v2.87L12 21.17l8.14-4.07v-2.87c0-.41.34-.75.75-.75s.75.34.75.75v3.33c0 .28-.16.54-.42.67l-8.89 4.44a.73.73 0 01-.33.08z"></path><path fill={color} d="M16.44 11.999c0-2.45-1.99-4.44-4.44-4.44s-4.44 1.99-4.44 4.44c0 2.2 1.61 4.02 3.71 4.37 0 .03-.01.05-.01.07v5.56c0 .41.34.75.75.75s.75-.34.75-.75v-5.56c0-.03-.01-.05-.01-.07a4.43 4.43 0 003.69-4.37z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20.89 10.53c-.41 0-.75-.34-.75-.75V6.91L12 2.84 3.86 6.91v2.87c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.45c0-.28.16-.54.42-.67l8.89-4.44c.21-.11.46-.11.67 0l8.89 4.44c.25.13.42.39.42.67v3.33a.77.77 0 0 1-.76.75ZM12 22.75a.73.73 0 0 1-.33-.08l-8.89-4.44a.77.77 0 0 1-.42-.67v-3.33c0-.41.34-.75.75-.75s.75.34.75.75v2.87L12 21.17l8.14-4.07v-2.87c0-.41.34-.75.75-.75s.75.34.75.75v3.33c0 .28-.16.54-.42.67l-8.89 4.44a.73.73 0 0 1-.33.08Z" fill={color}></path><path d="M12 22.751c-.41 0-.75-.34-.75-.75v-5.56c0-.41.34-.75.75-.75s.75.34.75.75v5.56c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M12 17.189c-2.86 0-5.19-2.33-5.19-5.19 0-2.86 2.33-5.19 5.19-5.19 2.86 0 5.19 2.33 5.19 5.19 0 2.86-2.33 5.19-5.19 5.19Zm0-8.88c-2.04 0-3.69 1.66-3.69 3.69a3.7 3.7 0 0 0 3.69 3.69 3.7 3.7 0 0 0 3.69-3.69c0-2.03-1.65-3.69-3.69-3.69Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M3.11 9.78V6.44L12 2l8.89 4.44v3.34" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.11 14.219v3.34l8.89 4.44 8.89-4.44v-3.34M12 22.001v-5.56" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 16.439a4.44 4.44 0 1 0 0-8.88 4.44 4.44 0 0 0 0 8.88Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path>
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

export const Ankr = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
