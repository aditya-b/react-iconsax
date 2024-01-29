import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.42 7.951a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.253 6.253 0 0 1 8.84 0ZM8.25 22.389c-.09 0-.191-.02-.28-.05-2.25-.9-4.07-2.49-5.29-4.59a10.6 10.6 0 0 1-1.341-6.73c.05-.41.44-.7.84-.65.41.05.7.43.65.84a9.19 9.19 0 0 0 1.15 5.79 9.104 9.104 0 0 0 4.54 3.94c.38.16.57.59.42.98-.11.29-.4.47-.69.47ZM5.85 5.23c-.22 0-.44-.1-.59-.29a.74.74 0 0 1 .13-1.05C7.29 2.4 9.58 1.61 12 1.61c2.36 0 4.61.76 6.5 2.2A.749.749 0 1 1 17.59 5 9.153 9.153 0 0 0 12 3.11c-2.08 0-4.05.68-5.69 1.96-.14.11-.3.16-.46.16ZM15.75 22.39c-.3 0-.58-.18-.7-.47a.76.76 0 0 1 .42-.98c1.93-.78 3.5-2.14 4.54-3.94a9.044 9.044 0 0 0 1.15-5.78c-.05-.41.24-.79.65-.84.4-.05.79.24.84.65.3 2.35-.16 4.68-1.34 6.73-1.21 2.1-3.04 3.68-5.29 4.59-.08.02-.17.04-.27.04Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 19.369c-1.79 0-3.58-.68-4.95-2.05a7.007 7.007 0 0 1 0-9.9 7.007 7.007 0 0 1 9.9 0 7.007 7.007 0 0 1 0 9.9 6.973 6.973 0 0 1-4.95 2.05Zm0-12.5c-1.41 0-2.82.54-3.89 1.61a5.517 5.517 0 0 0 0 7.78 5.507 5.507 0 0 0 7.78 0 5.517 5.517 0 0 0 0-7.78A5.49 5.49 0 0 0 12 6.869Z" fill={color}></path><path d="M8.25 22.389c-.09 0-.19-.02-.28-.05-2.25-.9-4.07-2.49-5.29-4.59a10.6 10.6 0 0 1-1.341-6.73c.05-.41.43-.7.84-.65.41.05.7.43.65.84-.26 2.02.14 4.02 1.15 5.78a9.104 9.104 0 0 0 4.54 3.94c.38.16.57.59.42.98-.11.3-.4.48-.69.48ZM5.85 5.23c-.22 0-.44-.1-.59-.29-.26-.33-.2-.8.13-1.05C7.3 2.4 9.58 1.61 12 1.61c2.36 0 4.61.76 6.5 2.2A.749.749 0 1 1 17.59 5 9.111 9.111 0 0 0 12 3.11c-2.08 0-4.05.68-5.69 1.96-.14.11-.3.16-.46.16ZM15.75 22.39c-.3 0-.58-.18-.7-.47a.76.76 0 0 1 .42-.98c1.93-.78 3.5-2.14 4.54-3.94a9.044 9.044 0 0 0 1.15-5.78c-.05-.41.24-.79.65-.84.4-.05.79.24.84.65.3 2.35-.16 4.68-1.34 6.73-1.21 2.1-3.04 3.68-5.29 4.59-.08.02-.17.04-.27.04Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.42 7.951a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.253 6.253 0 0 1 8.84 0Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M8.251 21.639c-2-.8-3.75-2.25-4.91-4.26a9.89 9.89 0 0 1-1.25-6.25M5.85 4.48A9.936 9.936 0 0 1 12 2.36c2.27 0 4.36.77 6.04 2.05M15.75 21.639c2-.8 3.75-2.25 4.91-4.26a9.89 9.89 0 0 0 1.25-6.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Story = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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