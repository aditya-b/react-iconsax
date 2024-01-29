import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m18.5 4.11-4.99-1.87c-.83-.31-2.19-.31-3.02 0L5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c-.02-1.22-.96-2.58-2.11-3.01Zm-6.57 2.92c1.18 0 2.14.96 2.14 2.14 0 1.16-.91 2.09-2.06 2.13h-.1c-1.2-.04-2.1-.97-2.1-2.13-.01-1.18.95-2.14 2.12-2.14Zm2.26 9.33c-.61.4-1.4.61-2.19.61s-1.59-.2-2.19-.61c-.57-.38-.88-.9-.89-1.47 0-.56.32-1.1.89-1.48 1.21-.8 3.18-.8 4.39 0 .57.38.89.9.89 1.47-.01.56-.33 1.1-.9 1.48Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.76c-1.09 0-2.17-.32-3.02-.95l-4.3-3.21c-1.14-.85-2.03-2.62-2.03-4.04V7.13c0-1.54 1.13-3.18 2.58-3.72l4.99-1.87c.99-.37 2.55-.37 3.54 0l5 1.87c1.45.54 2.58 2.18 2.58 3.72v7.43c0 1.42-.89 3.19-2.03 4.04l-4.3 3.21c-.84.63-1.92.95-3.01.95ZM10.75 2.94 5.76 4.81c-.86.32-1.61 1.4-1.61 2.32v7.43c0 .95.67 2.28 1.42 2.84l4.3 3.21c1.15.86 3.1.86 4.25 0l4.3-3.21c.76-.57 1.42-1.9 1.42-2.84V7.13c0-.91-.75-1.99-1.61-2.32l-4.99-1.87c-.66-.25-1.82-.25-2.49 0Z" fill={color}></path><path d="M12 11.67h-.07c-1.45-.04-2.51-1.15-2.51-2.5 0-1.38 1.13-2.51 2.51-2.51s2.51 1.13 2.51 2.51a2.514 2.514 0 0 1-2.42 2.51c-.01-.01-.01-.01-.02-.01Zm-.07-3.51c-.56 0-1.01.45-1.01 1.01 0 .55.43.99.97 1.01H12a1 1 0 0 0 .94-1.01 1 1 0 0 0-1.01-1.01ZM12 17.35c-.86 0-1.73-.23-2.4-.68-.67-.44-1.05-1.089-1.05-1.779s.38-1.34 1.05-1.79c1.35-.9 3.46-.89 4.8 0 .67.44 1.05 1.09 1.05 1.78s-.38 1.34-1.05 1.79c-.67.45-1.54.68-2.4.68Zm-1.57-3.01c-.25.16-.39.36-.38.54 0 .18.14.38.38.54.84.56 2.3.56 3.14 0 .25-.16.39-.36.39-.54 0-.18-.14-.38-.38-.54-.84-.55-2.31-.55-3.15 0Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M10.49 2.229 5.5 4.099c-1.15.43-2.09 1.79-2.09 3.02v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44v-7.43c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M12 10.918h-.13c-.94-.03-1.69-.81-1.69-1.76 0-.97.79-1.76 1.76-1.76s1.76.79 1.76 1.76c-.01.96-.76 1.73-1.7 1.76ZM10.01 13.72c-.96.64-.96 1.69 0 2.33 1.09.73 2.88.73 3.97 0 .96-.64.96-1.69 0-2.33-1.08-.73-2.87-.73-3.97 0Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const SecurityUser = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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