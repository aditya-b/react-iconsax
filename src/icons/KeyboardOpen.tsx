import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17 22.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 2H6C3.79 2 2 3.79 2 6v9c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4ZM9.99 7.32c.56 0 1.01.45 1.01 1s-.45 1-1 1-1-.45-1-1 .44-1 .99-1Zm-3.15 0c.56 0 1.01.45 1.01 1s-.45 1-1 1-1-.45-1-1 .43-1 .99-1Zm10.42 7.54H6.76c-.42 0-.76-.34-.76-.75s.33-.75.74-.75h10.53c.41 0 .75.34.75.75s-.34.75-.76.75Zm0-5.79h-3.68c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.68a.749.749 0 1 1 0 1.5Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.74 19.59H7.27c-.79 0-1.36-.03-1.85-.1-3.47-.38-4.16-2.46-4.16-5.91V7.26c0-3.45.68-5.53 4.18-5.91.48-.07 1.05-.1 1.83-.1h9.47c.78 0 1.35.03 1.85.1 3.48.38 4.16 2.46 4.16 5.91v6.32c0 3.45-.68 5.53-4.18 5.91-.47.07-1.04.1-1.83.1ZM7.26 2.75c-.71 0-1.22.03-1.64.09-2.16.24-2.87.91-2.87 4.43v6.32c0 3.51.71 4.19 2.85 4.42.44.06.95.09 1.67.09h9.47c.72 0 1.22-.03 1.64-.09 2.16-.24 2.87-.91 2.87-4.43V7.26c0-3.51-.71-4.19-2.85-4.42-.45-.06-.95-.09-1.67-.09H7.26Z" fill={color}></path><path d="M17.26 9.07h-3.68c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.68a.749.749 0 1 1 0 1.5ZM10 9.32c-.55 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1ZM6.85 9.32c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.46 1-1.01 1ZM17.26 14.86H6.75c-.41 0-.76-.34-.76-.75s.33-.75.74-.75h10.53a.749.749 0 1 1 0 1.5ZM17 22.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M7.26 2h9.47c.65 0 1.23.02 1.75.09C21.25 2.4 22 3.7 22 7.26v6.32c0 3.56-.75 4.86-3.52 5.17-.52.07-1.09.09-1.75.09H7.26c-.65 0-1.23-.02-1.75-.09-2.77-.31-3.52-1.61-3.52-5.17V7.26c0-3.56.75-4.86 3.52-5.17.52-.07 1.1-.09 1.75-.09Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M13.58 8.32h3.68M6.74 14.11h10.53M7 22h10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M7.194 8.3h.009M10.495 8.3h.009" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const KeyboardOpen = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
