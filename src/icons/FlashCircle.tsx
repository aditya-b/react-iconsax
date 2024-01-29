import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.97 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10Zm3.75 10.35L12 16.58l-.44.5c-.61.69-1.11.51-1.11-.42V12.7h-1.7c-.77 0-.98-.47-.47-1.05L12 7.42l.44-.5c.61-.69 1.11-.51 1.11.42v3.96h1.7c.77 0 .98.47.47 1.05Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M11.07 18.17c-.17 0-.33-.03-.5-.09-.55-.21-.91-.72-.91-1.31v-3.3h-.98c-.56 0-1.05-.32-1.28-.82-.23-.51-.14-1.08.23-1.5l4.26-4.84c.39-.44.99-.59 1.54-.38.55.21.91.72.91 1.31v3.3h.99c.56 0 1.05.32 1.28.82.23.51.14 1.08-.23 1.5l-4.26 4.84c-.28.3-.66.47-1.05.47Zm-2.17-6.2h1.51c.41 0 .75.34.75.75v3.78l3.94-4.47h-1.51c-.41 0-.75-.34-.75-.75V7.5L8.9 11.97Z" fill={color}></path><path d="M11.97 22.75C6.05 22.75 1.22 17.93 1.22 12S6.05 1.25 11.97 1.25 22.72 6.07 22.72 12 17.9 22.75 11.97 22.75Zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".34" d="M8.68 12.72h1.74v4.05c0 .6.74.88 1.14.43l4.26-4.84a.65.65 0 0 0-.49-1.08h-1.74V7.23c0-.6-.74-.88-1.14-.43l-4.26 4.84a.65.65 0 0 0 .49 1.08Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.97 22c5.524 0 10-4.477 10-10s-4.476-10-10-10c-5.522 0-10 4.477-10 10s4.478 10 10 10Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const FlashCircle = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
