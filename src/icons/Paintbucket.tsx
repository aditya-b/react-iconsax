import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m19.11 7.471-3.52-3.52c-3.16-3.15-4.82-1.99-6.82 0l-5.66 5.66c-1.15 1.15-1.78 1.89-2.01 2.71 0 .01-.01.01-.01.01v.05c-.41 1.46.67 2.7 2.02 4.05l3.53 3.51c1.26 1.27 2.28 2.06 3.41 2.06 1.13 0 2.1-.76 3.4-2.06l5.66-5.65c.49-.5.85-.91 1.13-1.3v-.01h.01c1.28-1.79.94-3.44-1.14-5.51Zm-1.03 3.9h-.01c-.3-.07-.61-.13-.92-.19-.02 0-.04-.01-.07-.01-.7-.13-1.41-.24-2.13-.33h-.04c-.72-.09-1.45-.16-2.18-.2h-.08c-.64-.04-1.29-.06-1.93-.06-.78 0-1.56.04-2.33.09l-.37.03c-.58.04-1.16.1-1.73.17l-.46.06c-.58.09-1.15.18-1.72.29-.13.03-.25.05-.38.07l-.16.03c.18-.2.39-.41.62-.64l5.65-5.65c1.82-1.8 2.44-2.23 4.68 0l3.51 3.52c.54.53.9.98 1.12 1.37 0 0 0 .01.01.01.42.73-.26 1.6-1.08 1.44ZM20.95 16.87c-.38-.47-.71-.87-1.45-.87s-1.07.4-1.44.87c-.8.99-1.16 2.07-1.03 3.11.15 1.19 1.17 2.02 2.47 2.02 1.3 0 2.32-.83 2.47-2.03.13-1.04-.22-2.11-1.02-3.1Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M10.06 21.58c-1 0-2.01-.68-3.36-2.02L3.24 16.1C.3 13.16.6 12.03 3.24 9.38L8.81 3.8c1.97-1.97 3.6-3.12 6.72 0l3.46 3.46c2.81 2.81 2.13 4.59 0 6.72l-5.57 5.57c-1.35 1.35-2.35 2.03-3.36 2.03ZM4.3 15.03l3.46 3.46c2.12 2.12 2.47 2.13 4.6 0l5.57-5.57c1.67-1.67 2.1-2.5 0-4.6l-3.46-3.46c-2.19-2.19-2.85-1.74-4.6 0L4.3 10.43c-2.12 2.13-2.3 2.3 0 4.6ZM20.14 21.458c-1.14 0-2.04-.44-2.48-1.21-.44-.77-.35-1.77.24-2.75l.66-1.09c.39-.64.96-1.01 1.58-1.01.62 0 1.2.37 1.58 1.01l.66 1.09c.59.98.67 1.98.24 2.75-.43.77-1.35 1.21-2.48 1.21Zm0-4.56c-.05 0-.17.08-.3.28l-.66 1.09c-.3.5-.38.95-.22 1.24.16.29.59.45 1.17.45s1.01-.16 1.17-.45c.16-.29.08-.73-.22-1.24l-.66-1.09c-.11-.21-.23-.28-.28-.28Z" fill={color}></path><path d="M2 12.99a.747.747 0 0 1-.19-1.47 34.126 34.126 0 0 1 17.38-.13l.5.13a.75.75 0 0 1-.37 1.45l-.5-.13a32.472 32.472 0 0 0-16.61.13c-.08.02-.15.02-.21.02Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="m3.77 15.559 3.46 3.46c2.43 2.43 3.26 2.39 5.66 0l5.57-5.57c1.94-1.94 2.43-3.23 0-5.66L15 4.329c-2.59-2.59-3.72-1.94-5.66 0l-5.57 5.57c-2.39 2.4-2.59 3.07 0 5.66Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m19.2 16.79-.66 1.09c-.93 1.55-.21 2.82 1.6 2.82s2.53-1.27 1.6-2.82l-.66-1.09c-.52-.86-1.37-.86-1.88 0ZM2 12.239a33.319 33.319 0 0 1 17-.13l.5.13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Paintbucket = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
