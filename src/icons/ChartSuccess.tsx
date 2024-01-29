import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20.97 16h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03Zm.66 2.45-2.37 2.77a.51.51 0 0 1-.38.18h-.02c-.13 0-.27-.05-.36-.15l-1.1-1.08c-.2-.2-.2-.53 0-.74.2-.2.53-.2.74 0l.69.69 2.01-2.34c.18-.22.51-.25.73-.06.22.19.24.52.06.73Z" fill={color}></path><path d="M20.97 16h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03Zm.66 2.45-2.37 2.77a.51.51 0 0 1-.38.18h-.02c-.13 0-.27-.05-.36-.15l-1.1-1.08c-.2-.2-.2-.53 0-.74.2-.2.53-.2.74 0l.69.69 2.01-2.34c.18-.22.51-.25.73-.06.22.19.24.52.06.73Z" fill={color}></path><path d="M21.97 7.21A5.812 5.812 0 0 0 16.19 2H7.81A5.812 5.812 0 0 0 2 7.81v8.38A5.812 5.812 0 0 0 7.81 22H14c.55 0 1-.45 1-1v-2.97c0-1.67 1.36-3.03 3.03-3.03H21c.55 0 1-.45 1-1V7.81c0-.2-.01-.4-.03-.6ZM7.75 13.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3Zm5 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M13 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M7 14.69c-.41 0-.75-.34-.75-.75v-3.21c0-.41.34-.75.75-.75s.75.34.75.75v3.21c0 .42-.34.75-.75.75ZM17 14.69c-.41 0-.75-.34-.75-.75v-3.21c0-.41.34-.75.75-.75s.75.34.75.75v3.21c0 .42-.34.75-.75.75Z" fill={color}></path><path d="M13 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M17.58 21.75a.75.75 0 0 1-.53-.22l-1.58-1.57a.745.745 0 0 1 0-1.06c.29-.29.77-.3 1.06 0l1.01 1 2.9-3.39c.27-.32.74-.35 1.06-.08.31.27.35.74.08 1.06l-3.42 4c-.14.16-.33.25-.54.26h-.04ZM12 14.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M16 19.43 17.58 21 21 17M7 10.5v3M12 10.5v3M17 10.5v3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const ChartSuccess = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
