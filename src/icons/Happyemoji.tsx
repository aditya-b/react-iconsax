import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.97 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10Zm5.43 14.43a6.576 6.576 0 0 1-5.4 2.82c-2.15 0-4.17-1.05-5.4-2.82a.742.742 0 0 1 .19-1.04c.34-.24.81-.15 1.04.19A5.098 5.098 0 0 0 12 17.76c1.66 0 3.22-.81 4.17-2.18.24-.34.7-.42 1.04-.19.35.23.43.7.19 1.04Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.97 22.75C6.05 22.75 1.22 17.93 1.22 12S6.05 1.25 11.97 1.25 22.72 6.07 22.72 12 17.9 22.75 11.97 22.75Zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25Z" fill={color}></path><path d="M12 19.249c-2.15 0-4.17-1.05-5.4-2.82a.742.742 0 0 1 .19-1.04c.34-.24.81-.15 1.04.19a5.098 5.098 0 0 0 4.17 2.18c1.66 0 3.22-.81 4.17-2.18.24-.34.7-.42 1.04-.19.34.24.42.7.19 1.04a6.576 6.576 0 0 1-5.4 2.82Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.97 22c5.524 0 10-4.477 10-10s-4.476-10-10-10c-5.522 0-10 4.477-10 10s4.478 10 10 10Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="M7.21 16A5.831 5.831 0 0 0 12 18.5c1.98 0 3.73-.99 4.79-2.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Happyemoji = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
