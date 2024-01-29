import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.25 7.86H2v8.33c0 .06 0 .12.01.17h9.24v-8.5ZM7.691 6.36h3.56V2h-3.53v4.24c0 .04-.02.08-.03.12ZM6.219 6.24V2.16c-2.22.46-3.67 1.94-4.09 4.2h4.11c-.01-.04-.02-.08-.02-.12ZM16.22 2h-3.47v4.36h3.47V2ZM17.71 6.358h4.16c-.42-2.28-1.89-3.77-4.15-4.21v4.18c0 .01-.01.02-.01.03ZM17.719 21.85c2.19-.43 3.63-1.83 4.1-3.99h-4.1v3.99ZM16.22 17.86h-3.47V22h3.47v-4.14ZM12.75 16.36h9.24c.01-.05.01-.11.01-.17V7.86h-9.25v8.5ZM11.249 17.86h-3.53V22h3.53v-4.14ZM2.18 17.86c.47 2.14 1.89 3.54 4.04 3.98v-3.98H2.18Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill={color}></path><path d="M21.48 17.86H2.52c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18.96a.749.749 0 1 1 0 1.5ZM21.48 7.86H2.52a.749.749 0 1 1 0-1.5h18.96a.749.749 0 1 1 0 1.5Z" fill={color}></path><path d="M6.969 22.21c-.41 0-.75-.34-.75-.75v-4.35c0-.41.34-.75.75-.75s.75.34.75.75v4.35c0 .42-.34.75-.75.75ZM12 22.72c-.41 0-.75-.34-.75-.75v-4.86c0-.41.34-.75.75-.75s.75.34.75.75v4.86c0 .41-.34.75-.75.75ZM16.969 22.27c-.41 0-.75-.34-.75-.75v-4.41c0-.41.34-.75.75-.75s.75.34.75.75v4.41c0 .42-.34.75-.75.75ZM6.969 7.21c-.41 0-.75-.34-.75-.75V2.11c0-.41.34-.75.75-.75s.75.34.75.75v4.35c0 .42-.34.75-.75.75ZM12 7.72c-.41 0-.75-.34-.75-.75V2.11c0-.41.34-.75.75-.75s.75.34.75.75v4.86c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M12 18.781c-.41 0-.75-.34-.75-.75v-11c0-.41.34-.75.75-.75s.75.34.75.75v11c0 .41-.34.75-.75.75ZM16.969 7.27c-.41 0-.75-.34-.75-.75V2.11c0-.41.34-.75.75-.75s.75.34.75.75v4.41c0 .42-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.52 17.11h18.96M2.52 7.11h18.96M6.969 17.11v4.35M12 17.11v4.86M16.969 17.11v4.41M6.969 2.11v4.35M12 2.11v4.86M12 7.031v11M16.969 2.11v4.41"></path></g>
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

export const VideoHorizontal = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
