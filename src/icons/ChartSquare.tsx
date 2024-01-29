import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM9.11 16.9c0 .28-.22.5-.5.5H5.82c-.28 0-.5-.22-.5-.5v-4.62c0-.63.51-1.14 1.14-1.14h2.15c.28 0 .5.22.5.5v5.26Zm4.78 0c0 .28-.22.5-.5.5H10.6c-.28 0-.5-.22-.5-.5V7.74c0-.63.51-1.14 1.14-1.14h1.52c.63 0 1.14.51 1.14 1.14v9.16h-.01Zm4.79 0c0 .28-.22.5-.5.5h-2.79c-.28 0-.5-.22-.5-.5v-3.55c0-.28.22-.5.5-.5h2.15c.63 0 1.14.51 1.14 1.14v2.91Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M10.11 18.15H6.32c-.41 0-.75-.34-.75-.75v-5.12c0-1.04.85-1.89 1.89-1.89h2.65c.41 0 .75.34.75.75v6.25c0 .42-.34.76-.75.76Zm-3.04-1.5h2.29V11.9h-1.9a.39.39 0 0 0-.39.39v4.36Z" fill={color}></path><path d="M13.892 18.152h-3.79c-.41 0-.75-.34-.75-.75v-9.66c0-1.04.85-1.89 1.89-1.89h1.52c1.04 0 1.89.85 1.89 1.89v9.66c-.01.41-.34.75-.76.75Zm-3.03-1.5h2.29v-8.91a.39.39 0 0 0-.39-.39h-1.52a.39.39 0 0 0-.39.39v8.91h.01Z" fill={color}></path><path d="M17.68 18.152h-3.79c-.41 0-.75-.34-.75-.75v-4.55c0-.41.34-.75.75-.75h2.65c1.04 0 1.89.85 1.89 1.89v3.41c0 .41-.33.75-.75.75Zm-3.04-1.5h2.29v-2.66a.39.39 0 0 0-.39-.39h-1.9v3.05Z" fill={color}></path><path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <g opacity=".4" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"><path d="M10.11 11.152H7.46c-.63 0-1.14.51-1.14 1.14v5.12h3.79v-6.26 0Z"></path><path d="M12.762 6.602h-1.52c-.63 0-1.14.51-1.14 1.14v9.66h3.79v-9.66c0-.63-.5-1.14-1.13-1.14ZM16.548 12.852h-2.65v4.55h3.79v-3.41c-.01-.63-.52-1.14-1.14-1.14Z"></path></g><path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const ChartSquare = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
