import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M6.36 7.781H2v3.47h4.36v-3.47ZM6.358 6.289v-4.16c-2.28.42-3.77 1.89-4.21 4.15h4.18c.01 0 .02.01.03.01ZM6.36 16.31v-3.56H2v3.53h4.24c.04 0 .08.02.12.03ZM21.85 6.28c-.43-2.19-1.83-3.63-3.99-4.1v4.1h3.99ZM16.36 11.25V2.01C16.31 2 16.25 2 16.19 2H7.86v9.25h8.5ZM22 12.75h-4.14v3.53H22v-3.53ZM17.86 21.821c2.14-.47 3.54-1.89 3.98-4.04h-3.98v4.04ZM6.24 17.782H2.16c.46 2.22 1.94 3.67 4.2 4.09v-4.11c-.04.01-.08.02-.12.02ZM22 7.781h-4.14v3.47H22v-3.47ZM7.86 12.75V22h8.33c.06 0 .12 0 .17-.01v-9.24h-8.5Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill={color}></path><path d="M6.89 22.23c-.41 0-.75-.34-.75-.75V2.52a.749.749 0 1 1 1.5 0v18.96c0 .42-.34.75-.75.75ZM16.89 22.23c-.41 0-.75-.34-.75-.75V2.52c0-.41.34-.75.75-.75s.75.34.75.75v18.96c0 .42-.34.75-.75.75Z" fill={color}></path><path d="M6.89 7.719H2.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.35c.41 0 .75.34.75.75s-.34.75-.75.75ZM6.891 12.75h-4.86c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.86c.41 0 .75.34.75.75s-.34.75-.75.75ZM6.89 17.719H2.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.41c.41 0 .75.34.75.75s-.34.75-.75.75ZM21.89 7.719h-4.35c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.35c.41 0 .75.34.75.75s-.34.75-.75.75ZM21.891 12.75h-4.86c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.86c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path><path d="M16.969 12.75h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11a.749.749 0 1 1 0 1.5ZM21.89 17.719h-4.41c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.41c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6.89 2.52v18.96M16.89 2.52v18.96M6.89 6.969H2.54M6.891 12h-4.86M6.894 16.969h-4.41M21.89 6.969h-4.35M21.891 12h-4.86M16.973 12h-11M21.894 16.969h-4.41"></path></g>
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

export const VideoVertical = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
