import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM8.18 16.77h-.07c-.97-.09-1.88-.54-2.56-1.26-1.6-1.68-1.6-4.41 0-6.09l2.19-2.3a4.05 4.05 0 0 1 2.95-1.28c1.12 0 2.17.45 2.95 1.28 1.6 1.68 1.6 4.41 0 6.09l-1.09 1.15c-.29.3-.76.31-1.06.03a.755.755 0 0 1-.03-1.06l1.09-1.15c1.06-1.11 1.06-2.92 0-4.02-.99-1.04-2.73-1.04-3.73 0l-2.19 2.3c-1.06 1.11-1.06 2.92 0 4.02.43.46 1.01.74 1.62.8.41.04.71.41.67.82a.74.74 0 0 1-.74.67Zm10.27-2.18-2.19 2.3a4.05 4.05 0 0 1-2.95 1.28c-1.12 0-2.17-.45-2.95-1.28-1.6-1.68-1.6-4.41 0-6.09l1.09-1.15c.29-.3.76-.31 1.06-.03.3.29.31.76.03 1.06l-1.09 1.15c-1.06 1.11-1.06 2.92 0 4.02.99 1.04 2.73 1.05 3.73 0l2.19-2.3c1.06-1.11 1.06-2.92 0-4.02-.43-.46-1.01-.74-1.62-.8a.75.75 0 0 1-.67-.82c.04-.41.4-.72.82-.67.97.1 1.88.54 2.56 1.26 1.59 1.67 1.59 4.41-.01 6.09Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M8.182 16.77h-.07c-.97-.09-1.88-.54-2.56-1.26-1.6-1.68-1.6-4.41 0-6.09l2.19-2.3a4.05 4.05 0 0 1 2.95-1.28c1.12 0 2.17.45 2.95 1.28 1.6 1.68 1.6 4.41 0 6.09l-1.09 1.15c-.29.3-.76.31-1.06.03a.755.755 0 0 1-.03-1.06l1.09-1.15c1.06-1.11 1.06-2.92 0-4.02-.99-1.04-2.73-1.04-3.73 0l-2.19 2.3c-1.06 1.11-1.06 2.92 0 4.02.43.46 1.01.74 1.62.8.41.04.71.41.67.82a.74.74 0 0 1-.74.67Z" fill={color}></path><path d="M13.31 18.162c-1.12 0-2.17-.45-2.95-1.28-1.6-1.68-1.6-4.41 0-6.09l1.09-1.15c.29-.3.76-.31 1.06-.03.3.29.31.76.03 1.06l-1.09 1.15c-1.06 1.11-1.06 2.92 0 4.02.99 1.04 2.73 1.05 3.73 0l2.19-2.3c1.06-1.11 1.06-2.92 0-4.02-.43-.46-1.01-.74-1.62-.8a.75.75 0 0 1-.67-.82c.04-.41.4-.72.82-.67.97.1 1.88.54 2.56 1.26 1.6 1.68 1.6 4.41 0 6.09l-2.19 2.3a4.05 4.05 0 0 1-2.96 1.28Z" fill={color}></path><path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.182 16.018c-.76-.07-1.51-.42-2.09-1.03-1.32-1.39-1.32-3.67 0-5.06l2.19-2.3a3.307 3.307 0 0 1 4.82 0c1.32 1.39 1.32 3.67 0 5.06l-1.09 1.15"></path><path d="M15.82 7.977c.76.07 1.51.42 2.09 1.03 1.32 1.39 1.32 3.67 0 5.06l-2.19 2.3a3.307 3.307 0 0 1-4.82 0c-1.32-1.39-1.32-3.67 0-5.06l1.09-1.15"></path></g><path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const LinkSquare = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
