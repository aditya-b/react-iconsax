import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.25 5.77V9c0 2.115-.707 2.899-2.619 3.007a.48.48 0 0 1-.5-.487v-1.14c0-3.12-1.39-4.51-4.51-4.51h-1.14a.48.48 0 0 1-.487-.5c.107-1.912.892-2.62 3.007-2.62h3.23c2.29 0 3.02.73 3.02 3.02Z" fill={color}></path><path d="M16.63 10.381v3.24c0 2.28-.73 3.01-3.01 3.01h-3.24c-2.28 0-3.01-.73-3.01-3.01v-3.24c0-2.28.73-3.01 3.01-3.01h3.24c2.28 0 3.01.73 3.01 3.01Z" fill={color}></path><path d="M11.52 18.13a.48.48 0 0 1 .487.501c-.108 1.912-.892 2.62-3.007 2.62H5.77c-2.29 0-3.02-.73-3.02-3.02V15c0-2.115.708-2.9 2.62-3.007a.48.48 0 0 1 .5.486v1.14c0 3.12 1.39 4.51 4.51 4.51h1.14Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M13.621 18.13h-3.23c-3.13 0-4.52-1.39-4.52-4.52v-3.23c0-3.13 1.39-4.52 4.52-4.52h3.23c3.13 0 4.52 1.39 4.52 4.52v3.23c-.01 3.13-1.4 4.52-4.52 4.52Zm-3.24-10.76c-2.29 0-3.02.73-3.02 3.02v3.23c0 2.29.73 3.02 3.02 3.02h3.23c2.29 0 3.02-.73 3.02-3.02v-3.23c0-2.29-.73-3.02-3.02-3.02h-3.23Z" fill={color}></path><path d="M18.23 13.52h-.85c-.41 0-.75-.34-.75-.75v-2.38c0-2.29-.73-3.02-3.02-3.02h-2.38c-.41 0-.75-.34-.75-.75v-.85c0-3.13 1.39-4.52 4.52-4.52h3.23c3.13 0 4.52 1.39 4.52 4.52V9c0 3.13-1.39 4.52-4.52 4.52Zm-.1-1.5h.1c2.29 0 3.02-.73 3.02-3.02V5.77c0-2.29-.73-3.02-3.02-3.02H15c-2.29 0-3.02.73-3.02 3.02v.1h1.63c3.13 0 4.52 1.39 4.52 4.52v1.63ZM9 22.75H5.77c-3.13 0-4.52-1.39-4.52-4.52V15c0-3.13 1.39-4.52 4.52-4.52h.85c.41 0 .75.34.75.75v2.38c0 2.29.73 3.02 3.02 3.02h2.38c.41 0 .75.34.75.75v.85c0 3.13-1.39 4.52-4.52 4.52ZM5.77 11.98c-2.29 0-3.02.73-3.02 3.02v3.23c0 2.29.73 3.02 3.02 3.02H9c2.29 0 3.02-.73 3.02-3.02v-.1h-1.63c-3.13 0-4.52-1.39-4.52-4.52v-1.63h-.1Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17.38 10.38v3.23c0 2.69-1.08 3.77-3.77 3.77h-3.23c-2.69 0-3.77-1.08-3.77-3.77v-3.23c0-2.69 1.08-3.77 3.77-3.77h3.23c2.7.01 3.77 1.08 3.77 3.77Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M22 5.77V9c0 2.69-1.08 3.77-3.77 3.77h-.85v-2.38c0-2.69-1.08-3.77-3.77-3.77h-2.38v-.85C11.23 3.08 12.31 2 15 2h3.23C20.92 2 22 3.08 22 5.77ZM2 18.23V15c0-2.69 1.08-3.77 3.77-3.77h.85v2.38c0 2.69 1.08 3.77 3.77 3.77h2.38v.85C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const ForwardItem = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
