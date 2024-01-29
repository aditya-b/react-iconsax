import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19.83 8.7 15.3 4.17a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.34.44 2.65 1.39 3.6l4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.738 4.738 0 0 0 0-6.73ZM9.5 12.38c-1.58 0-2.88-1.29-2.88-2.88 0-1.59 1.3-2.88 2.88-2.88 1.58 0 2.88 1.29 2.88 2.88 0 1.59-1.3 2.88-2.88 2.88Zm8.03 1.15-4 4c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l4-4c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12.07 21.981c-1.41 0-2.83-.54-3.9-1.61l-4.53-4.53a5.548 5.548 0 0 1-1.61-4.17l.24-5.01c.11-2.39 2-4.28 4.4-4.4l5-.24c1.56-.07 3.07.51 4.17 1.61l4.53 4.53a5.535 5.535 0 0 1 0 7.81l-4.39 4.39a5.504 5.504 0 0 1-3.91 1.62Zm-7.37-7.21 4.53 4.53a4.026 4.026 0 0 0 5.69 0l4.39-4.39a4.026 4.026 0 0 0 0-5.69l-4.54-4.52a4.02 4.02 0 0 0-3.04-1.17l-5 .24a3.092 3.092 0 0 0-2.97 2.96l-.24 5.01c-.05 1.12.38 2.23 1.18 3.03Z" fill={color}></path><path d="M9.5 12.75c-1.79 0-3.25-1.46-3.25-3.25S7.71 6.25 9.5 6.25s3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75ZM13.001 17.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l4-4c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4 4c-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m4.405 15.526 4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.78 4.78 0 0 0 0-6.75l-4.54-4.52a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M9.734 12.227a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round"></path><path opacity=".4" d="m13.234 17.227 4-4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Tag2 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
