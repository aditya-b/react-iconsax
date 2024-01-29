import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19.434 4.034c.133.208-.094.45-.334.396-.47-.14-.99-.21-1.52-.21h-3.3a.5.5 0 0 1-.4-.2l-1.15-1.53c-.141-.2-.008-.49.236-.49h2.754c1.56 0 2.936.81 3.714 2.034Z" fill={color}></path><path d="M20.14 6.54a4.18 4.18 0 0 0-1.45-.67c-.36-.1-.73-.15-1.11-.15h-3.72c-.58 0-.62-.05-.93-.46l-1.4-1.86C10.88 2.53 10.37 2 8.74 2H6.42C3.98 2 2 3.98 2 6.42v11.16C2 20.02 3.98 22 6.42 22h11.16c2.44 0 4.42-1.98 4.42-4.42v-7.44c0-1.49-.73-2.8-1.86-3.6Zm-5.75 9.8H9.6c-.39 0-.69-.31-.69-.7 0-.38.3-.7.69-.7h4.79c.39 0 .7.32.7.7 0 .39-.31.7-.7.7Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17 22.75H7c-4.41 0-5.75-1.34-5.75-5.75V7c0-4.41 1.34-5.75 5.75-5.75h1.5c1.75 0 2.3.57 3 1.5l1.5 2c.33.44.38.5 1 .5h3c4.41 0 5.75 1.34 5.75 5.75v6c0 4.41-1.34 5.75-5.75 5.75Zm-10-20c-3.58 0-4.25.68-4.25 4.25v10c0 3.57.67 4.25 4.25 4.25h10c3.58 0 4.25-.68 4.25-4.25v-6c0-3.57-.67-4.25-4.25-4.25h-3c-1.28 0-1.7-.44-2.2-1.1l-1.5-2c-.52-.69-.68-.9-1.8-.9H7Z" fill={color}></path><path d="M20 7.13c-.41 0-.75-.34-.75-.75V5c0-1.58-.67-2.25-2.25-2.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c2.42 0 3.75 1.33 3.75 3.75v1.38c0 .41-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path><path opacity=".4" d="M8 2h9c2 0 3 1 3 3v1.38" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Folder2 = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
