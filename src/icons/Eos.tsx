import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M9.28 20.311c.17.48-.35.92-.79.66l-3.15-1.79c-.57-.33-.92-1.12-.8-1.76l.94-4.67c.11-.55.87-.6 1.06-.08l2.74 7.64zM18.66 19.179l-3.16 1.8c-.44.25-.96-.18-.79-.66l2.75-7.71c.19-.52.95-.47 1.06.08l.95 4.73c.11.64-.24 1.43-.81 1.76zM17.08 7.32c.24.3.31.7.18 1.06l-4.74 13.25c-.17.49-.86.49-1.03 0L6.75 8.39c-.13-.36-.06-.76.18-1.06l3.82-4.7c.69-.83 1.83-.83 2.53 0l3.8 4.69z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M12 22.5c-.4 0-.8-.09-1.12-.27l-5.32-3.04c-.8-.46-1.27-1.49-1.09-2.4l1.71-8.57c.07-.33.26-.74.48-1l3.6-4.32c.89-1.07 2.57-1.07 3.46 0l3.6 4.32c.22.26.41.67.48 1l1.71 8.57c.18.91-.29 1.94-1.09 2.39l-5.32 3.04c-.3.19-.7.28-1.1.28Zm0-18.94c-.21 0-.41.11-.58.3l-3.6 4.32c-.05.06-.14.25-.16.33l-1.71 8.57c-.05.27.13.66.36.8l5.32 3.04c.18.1.57.1.74 0l5.32-3.04c.24-.14.42-.53.36-.8l-1.71-8.57c-.02-.08-.11-.27-.16-.33l-3.6-4.32c-.17-.19-.37-.3-.58-.3Z" fill={color}></path><path d="M12 21.76c-.54 0-1-.33-1.18-.83L6.47 8.75a.75.75 0 1 1 1.41-.51L12 19.77l4.11-11.5a.75.75 0 1 1 1.41.51l-4.34 12.16c-.18.5-.64.82-1.18.82Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m10.85 3.379-3.6 4.32c-.13.16-.28.46-.32.67l-1.71 8.57c-.12.58.21 1.3.73 1.6l5.32 3.04c.41.23 1.08.23 1.49 0l5.32-3.04c.52-.3.84-1.01.73-1.6l-1.71-8.57c-.04-.21-.18-.51-.32-.67l-3.6-4.32c-.66-.76-1.7-.76-2.33 0Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m16.81 8.52-4.34 12.16a.5.5 0 0 1-.94 0L7.18 8.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Eos = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
