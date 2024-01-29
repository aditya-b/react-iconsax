import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path fill={color} d="M12.67 12.75H10.5v2.67h2.17c.74 0 1.33-.6 1.33-1.33 0-.73-.6-1.34-1.33-1.34zM12.67 8.578H10.5v2.67h2.17c.74 0 1.33-.6 1.33-1.33 0-.73-.6-1.34-1.33-1.34z"></path><path fill={color} d="M23 11c-1.19 0-2.25-.76-2.63-1.9-.24-.73-.37-1.5-.37-2.27V6c0-1.66-1.34-3-3-3H7C5.34 3 4 4.34 4 6v.84c0 .77-.12 1.53-.37 2.27A2.785 2.785 0 011 11.01v2c1.19 0 2.25.76 2.63 1.9.24.73.37 1.5.37 2.26V18c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-.84c0-.77.12-1.53.37-2.26.38-1.13 1.44-1.9 2.63-1.9v-2zm-7.5 3.08c0 1.56-1.27 2.83-2.83 2.83H9.75c-.41 0-.75-.34-.75-.75V7.83c0-.41.34-.75.75-.75h2.92c1.56 0 2.83 1.27 2.83 2.83 0 .82-.35 1.57-.92 2.08.57.53.92 1.27.92 2.09z"></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17 21.75H7c-2.07 0-3.75-1.68-3.75-3.75v-.84c0-.69-.11-1.37-.33-2.03A2.021 2.021 0 0 0 1 13.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75.87 0 1.65-.56 1.92-1.38.22-.66.33-1.34.33-2.03V6c0-2.07 1.68-3.75 3.75-3.75h10c2.07 0 3.75 1.68 3.75 3.75v.84c0 .69.11 1.37.33 2.03.28.83 1.05 1.38 1.92 1.38.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75-.87 0-1.65.56-1.92 1.38-.22.66-.33 1.34-.33 2.03V18c0 2.07-1.68 3.75-3.75 3.75ZM1.75 12.33a3.51 3.51 0 0 1 2.59 2.33c.27.81.41 1.65.41 2.5V18c0 1.24 1.01 2.25 2.25 2.25h10c1.24 0 2.25-1.01 2.25-2.25v-.84c0-.85.14-1.69.41-2.5.4-1.2 1.4-2.07 2.59-2.33v-.66a3.51 3.51 0 0 1-2.59-2.33 7.89 7.89 0 0 1-.41-2.5V6c0-1.24-1.01-2.25-2.25-2.25H7C5.76 3.75 4.75 4.76 4.75 6v.84c0 .85-.14 1.69-.41 2.5-.4 1.2-1.4 2.07-2.59 2.33v.66Z" fill={color}></path><path d="M12.67 16.92H9.75c-.41 0-.75-.34-.75-.75V7.84c0-.41.34-.75.75-.75h2.92c1.56 0 2.83 1.27 2.83 2.83 0 .82-.35 1.57-.92 2.08.56.52.92 1.26.92 2.08 0 1.57-1.27 2.84-2.83 2.84Zm-2.17-1.5h2.17a1.33 1.33 0 1 0 0-2.66H10.5v2.66Zm0-4.17h2.17a1.33 1.33 0 1 0 0-2.66H10.5v2.66Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17 3H7C5.34 3 4 4.34 4 6v.84c0 .77-.12 1.53-.37 2.26A2.785 2.785 0 0 1 1 11v2c1.19 0 2.25.76 2.63 1.9.24.73.37 1.5.37 2.26V18c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-.84c0-.77.12-1.53.37-2.26.38-1.13 1.44-1.9 2.63-1.9v-2c-1.19 0-2.25-.76-2.63-1.9-.24-.73-.37-1.5-.37-2.26V6c0-1.66-1.34-3-3-3Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"></path><path opacity=".4" d="M9.75 11.998h2.92c1.15 0 2.08.93 2.08 2.08s-.93 2.08-2.08 2.08H9.75v-8.33h2.92c1.15 0 2.08.93 2.08 2.08s-.93 2.08-2.08 2.08H9.75" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Bootstrap = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
