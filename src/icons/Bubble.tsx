import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15.59 1.75c-2.97 0-5.38 2.41-5.38 5.38 0 2.97 2.41 5.38 5.38 5.38 2.97 0 5.38-2.41 5.38-5.38 0-2.97-2.41-5.38-5.38-5.38ZM6.36 13.031a3.329 3.329 0 1 0-.002 6.662 3.329 3.329 0 0 0 .001-6.662ZM16.62 16.621c-1.55 0-2.81 1.26-2.81 2.81s1.26 2.81 2.81 2.81 2.81-1.26 2.81-2.81-1.26-2.81-2.81-2.81Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15.59 13.01a5.89 5.89 0 0 1-5.88-5.88 5.89 5.89 0 0 1 5.88-5.88 5.89 5.89 0 0 1 5.88 5.88 5.89 5.89 0 0 1-5.88 5.88Zm0-10.26c-2.41 0-4.38 1.96-4.38 4.38s1.96 4.38 4.38 4.38 4.38-1.96 4.38-4.38S18 2.75 15.59 2.75ZM6.361 20.191c-2.11 0-3.83-1.72-3.83-3.83 0-2.11 1.72-3.83 3.83-3.83 2.11 0 3.83 1.72 3.83 3.83 0 2.11-1.72 3.83-3.83 3.83Zm0-6.16c-1.28 0-2.33 1.04-2.33 2.33 0 1.28 1.04 2.33 2.33 2.33 1.28 0 2.33-1.04 2.33-2.33 0-1.28-1.05-2.33-2.33-2.33ZM16.62 22.749c-1.83 0-3.31-1.49-3.31-3.31 0-1.83 1.49-3.31 3.31-3.31a3.32 3.32 0 0 1 3.31 3.31 3.32 3.32 0 0 1-3.31 3.31Zm0-5.13a1.81 1.81 0 1 0 0 3.619 1.81 1.81 0 0 0 0-3.62Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M15.59 12.26A5.13 5.13 0 1 0 15.592 2a5.13 5.13 0 0 0 0 10.26Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path><path opacity=".4" d="M6.36 19.441a3.08 3.08 0 1 0 0-6.16 3.08 3.08 0 0 0 0 6.16ZM16.62 21.999a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"></path>
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

export const Bubble = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
