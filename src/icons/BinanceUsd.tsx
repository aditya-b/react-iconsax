import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M11.4 2.35L6.25 7.5c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15c.2-.2.2-.51 0-.71l-1.73-1.73a.513.513 0 00-.71 0zM15.3 6.26l-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.19-.2-.51-.2-.71 0zM19.21 10.162l-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.2-.2-.52-.2-.71 0zM4.091 13.84l-1.73-1.73c-.2-.2-.2-.51 0-.71l1.73-1.73c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71l-1.73 1.73c-.2.2-.52.2-.71 0z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M8.34 10.829c-.32 0-.64-.12-.88-.37l-1.73-1.73a1.25 1.25 0 0 1 0-1.77l5.15-5.15a1.25 1.25 0 0 1 1.77 0l1.73 1.73c.49.49.49 1.28 0 1.77l-5.15 5.15c-.25.25-.57.37-.89.37Zm-1.38-2.98 1.38 1.38 4.79-4.79-1.38-1.38-4.79 4.79ZM8.34 18.64c-.32 0-.64-.12-.88-.37l-1.73-1.73a1.25 1.25 0 0 1 0-1.77l9.05-9.05a1.25 1.25 0 0 1 1.77 0l1.73 1.73c.49.49.49 1.28 0 1.77l-9.05 9.05c-.25.25-.57.37-.89.37Zm-1.38-2.98 1.38 1.38 8.7-8.7-1.38-1.38-8.7 8.7ZM12.24 22.541c-.32 0-.64-.12-.88-.37l-1.73-1.73a1.25 1.25 0 0 1 0-1.77l9.05-9.05a1.25 1.25 0 0 1 1.77 0l1.73 1.73c.49.49.49 1.28 0 1.77l-9.05 9.05c-.25.25-.57.37-.89.37Zm-1.37-2.98 1.38 1.38 8.7-8.7-1.38-1.38-8.7 8.7ZM4.44 14.739c-.32 0-.64-.12-.88-.36l-1.73-1.73a1.25 1.25 0 0 1 0-1.77l1.73-1.73a1.25 1.25 0 0 1 1.77 0l1.73 1.73c.49.49.49 1.28 0 1.77l-1.73 1.73c-.25.24-.57.36-.89.36Zm-1.38-2.98 1.38 1.38 1.38-1.38-1.38-1.38-1.38 1.38Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.4 2.35 6.25 7.5c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15c.2-.2.2-.51 0-.71l-1.73-1.73a.513.513 0 0 0-.71 0Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m15.3 6.26-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.19-.2-.51-.2-.71 0Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="m19.21 10.162-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.2-.2-.52-.2-.71 0Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m4.091 13.84-1.73-1.73c-.2-.2-.2-.51 0-.71l1.73-1.73c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71l-1.73 1.73c-.2.2-.52.2-.71 0Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const BinanceUsd = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
