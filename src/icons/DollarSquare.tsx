import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.252 8.078v2.86l-1.01-.35c-.51-.18-.82-.35-.82-1.22 0-.71.53-1.29 1.18-1.29h.65ZM14.58 14.629c0 .71-.53 1.29-1.18 1.29h-.65v-2.86l1.01.35c.51.18.82.35.82 1.22Z" fill={color}></path><path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38C2 19.83 4.17 22 7.81 22h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-1.93 10c.78.27 1.82.84 1.82 2.63 0 1.54-1.2 2.79-2.68 2.79h-.65V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.58h-.36c-1.64 0-2.97-1.39-2.97-3.09a.749.749 0 1 1 1.5 0c0 .88.66 1.59 1.47 1.59h.36v-3.39L9.74 12c-.78-.27-1.82-.84-1.82-2.63 0-1.54 1.2-2.79 2.68-2.79h.65V6c0-.41.34-.75.75-.75s.75.34.75.75v.58h.36c1.64 0 2.97 1.39 2.97 3.09a.749.749 0 1 1-1.5 0c0-.88-.66-1.59-1.47-1.59h-.36v3.39l1.51.53Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13.4 17.418h-2.51c-1.64 0-2.97-1.38-2.97-3.08 0-.41.34-.75.75-.75s.75.34.75.75c0 .87.66 1.58 1.47 1.58h2.51c.65 0 1.19-.58 1.19-1.28 0-.87-.31-1.04-.82-1.22l-4.03-1.42c-.78-.27-1.83-.85-1.83-2.64 0-1.54 1.21-2.78 2.69-2.78h2.51c1.64 0 2.97 1.38 2.97 3.08 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.87-.66-1.58-1.47-1.58H10.6c-.65 0-1.19.58-1.19 1.28 0 .87.31 1.04.82 1.22l4.03 1.42c.78.27 1.83.85 1.83 2.64-.01 1.53-1.21 2.78-2.69 2.78Z" fill={color}></path><path d="M12 18.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.672 14.33c0 1.29.99 2.33 2.22 2.33h2.51c1.07 0 1.94-.91 1.94-2.03 0-1.22-.53-1.65-1.32-1.93l-4.03-1.4c-.79-.28-1.32-.71-1.32-1.93 0-1.12.87-2.03 1.94-2.03h2.51c1.23 0 2.22 1.04 2.22 2.33M12 6v12"></path></g><path d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const DollarSquare = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
