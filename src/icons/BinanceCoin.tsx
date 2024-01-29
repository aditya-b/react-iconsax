import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M11.65 2.35L6.36 7.64c-.2.2-.2.51 0 .71l1.29 1.29c.2.2.51.2.71 0l3.29-3.29c.2-.2.51-.2.71 0l3.29 3.29c.2.2.51.2.71 0l1.29-1.29c.2-.2.2-.51 0-.71l-5.29-5.29a.513.513 0 00-.71 0zM11.65 21.65l-5.29-5.29c-.2-.2-.2-.51 0-.71l1.29-1.29c.2-.2.51-.2.71 0l3.29 3.29c.2.2.51.2.71 0l3.29-3.29c.2-.2.51-.2.71 0l1.29 1.29c.2.2.2.51 0 .71l-5.29 5.29c-.2.19-.52.19-.71 0zM20.1 10.1l1.54 1.54c.2.2.2.51 0 .71l-1.54 1.54c-.2.2-.51.2-.71 0l-1.54-1.54c-.2-.2-.2-.51 0-.71l1.54-1.54c.2-.19.52-.19.71 0zM4.6 10.1l1.54 1.54c.2.2.2.51 0 .71L4.6 13.89c-.2.2-.51.2-.71 0l-1.54-1.54c-.2-.2-.2-.51 0-.71l1.54-1.54c.2-.19.52-.19.71 0z"></path><path fill={color} d="M12.35 9.88l1.77 1.77c.2.2.2.51 0 .71l-1.77 1.77c-.2.2-.51.2-.71 0l-1.77-1.77c-.2-.2-.2-.51 0-.71l1.77-1.77c.2-.2.52-.2.71 0z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16 10.751c-.19 0-.38-.07-.53-.22L12 7.061l-3.47 3.47c-.29.29-.77.29-1.06 0l-2-2a.754.754 0 0 1 0-1.06l6-6c.29-.29.77-.29 1.06 0l6 6c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Zm-4-5.5c.19 0 .38.07.53.22L16 8.941l.94-.94L12 3.061l-4.94 4.94.94.94 3.47-3.47c.15-.15.34-.22.53-.22ZM12 22.751c-.19 0-.38-.07-.53-.22l-6-6a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0l3.47 3.47 3.47-3.47c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-6 6c-.15.15-.34.22-.53.22Zm-4.94-6.75 4.94 4.94 4.94-4.94-.94-.94-3.47 3.47c-.29.29-.77.29-1.06 0L8 15.061l-.94.94ZM19.75 15.001c-.19 0-.38-.07-.53-.22l-2.25-2.25a.754.754 0 0 1 0-1.06l2.25-2.25c.29-.29.77-.29 1.06 0l2.25 2.25c.29.29.29.77 0 1.06l-2.25 2.25c-.15.15-.34.22-.53.22Zm-1.19-3 1.19 1.19 1.19-1.19-1.19-1.19-1.19 1.19ZM4.25 15.001c-.19 0-.38-.07-.53-.22l-2.25-2.25a.754.754 0 0 1 0-1.06l2.25-2.25c.29-.29.77-.29 1.06 0l2.25 2.25c.29.29.29.77 0 1.06l-2.25 2.25c-.15.15-.34.22-.53.22Zm-1.19-3 1.19 1.19 1.19-1.19-1.19-1.19-1.19 1.19Z" fill={color}></path><path d="M12 15.23c-.19 0-.38-.07-.53-.22l-2.48-2.48a.754.754 0 0 1 0-1.06l2.48-2.48c.29-.29.77-.29 1.06 0l2.48 2.48c.29.29.29.77 0 1.06l-2.48 2.48c-.15.14-.34.22-.53.22ZM10.58 12 12 13.42 13.42 12 12 10.58 10.58 12Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 2 6 8l2 2 4-4 4 4 2-2-6-6ZM12 22l-6-6 2-2 4 4 4-4 2 2-6 6Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M19.749 9.751 17.5 12l2.249 2.249L21.997 12 19.75 9.751ZM4.249 9.751 2 12l2.249 2.249L6.497 12 4.25 9.751ZM11.998 9.525 9.523 12l2.475 2.475L14.473 12l-2.475-2.475Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const BinanceCoin = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
