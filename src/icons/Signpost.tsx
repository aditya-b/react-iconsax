import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m18.34 14.13-2.18-1.75c-.31-.24-.7-.38-1.1-.38h-2.31V9h4.47c.97 0 1.75-.78 1.75-1.75v-3.5c0-.97-.78-1.75-1.75-1.75H8.96c-.39 0-.78.14-1.09.38L5.68 4.13c-.87.7-.87 2.04 0 2.74l2.19 1.75c.31.24.7.38 1.09.38h2.29v3H6.8c-.97 0-1.75.78-1.75 1.75v3.5c0 .97.78 1.75 1.75 1.75h4.45v2.25H9c-.41 0-.75.34-.75.75s.34.75.75.75h6c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.25V19h2.31c.4 0 .79-.14 1.1-.38l2.18-1.75c.88-.7.88-2.04 0-2.74Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17.22 9.75H8.96c-.56 0-1.12-.19-1.56-.55L5.21 7.45c-.6-.48-.94-1.19-.94-1.95s.34-1.48.94-1.95L7.4 1.8c.44-.35 1-.55 1.56-.55h8.26a2.5 2.5 0 0 1 2.5 2.5v3.5a2.5 2.5 0 0 1-2.5 2.5Zm-8.26-7c-.23 0-.45.08-.62.22L6.15 4.72a1 1 0 0 0-.38.78c0 .3.14.59.38.78l2.19 1.75c.18.14.4.22.62.22h8.26c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1H8.96ZM15.06 19.75H6.8a2.5 2.5 0 0 1-2.5-2.5v-3.5a2.5 2.5 0 0 1 2.5-2.5h8.26c.57 0 1.12.19 1.56.55l2.19 1.75c.6.48.94 1.19.94 1.95s-.34 1.48-.94 1.95l-2.19 1.75c-.44.36-.99.55-1.56.55Zm-8.26-7c-.55 0-1 .45-1 1v3.5c0 .55.45 1 1 1h8.26c.23 0 .45-.08.62-.22l2.19-1.75a1 1 0 0 0 .38-.78 1 1 0 0 0-.38-.78l-2.19-1.75c-.18-.14-.4-.22-.62-.22H6.8Z" fill={color}></path><path d="M12 12.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM12 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z" fill={color}></path><path d="M15 22.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17.22 2H8.96c-.4 0-.78.14-1.09.38L5.68 4.13c-.88.7-.88 2.03 0 2.73l2.19 1.75c.31.25.7.38 1.09.38h8.26c.97 0 1.75-.78 1.75-1.75v-3.5c0-.96-.78-1.74-1.75-1.74ZM6.8 12h8.26c.4 0 .78.14 1.09.38l2.19 1.75c.88.7.88 2.03 0 2.73l-2.19 1.75c-.31.25-.7.38-1.09.38H6.8c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.96.78-1.74 1.75-1.74Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M12 12V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path opacity=".4" d="M12 22v-3M9 22h6"></path></g>
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

export const Signpost = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
