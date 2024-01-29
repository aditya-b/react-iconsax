import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M18.47 2h-4c-1.492 0-2.726 1.286-2.96 2.752-.043.273.185.498.46.498h4.5c.41 0 .75.34.75.75s-.34.75-.75.75h-4.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h2.31c.41 0 .75.34.75.75s-.34.75-.75.75h-2.31a.5.5 0 0 0-.5.5v1.455a.5.5 0 0 0 .496.5l4.505.045c.42 0 .75.34.75.76-.01.41-.34.74-.75.74h-.01l-4.485-.045a.5.5 0 0 0-.505.5v1.545a.5.5 0 0 0 .5.5h3.4a.749.749 0 1 1 0 1.5h-3.4c-.276 0-.504.225-.46.498.233 1.466 1.467 2.752 2.96 2.752h4c1.65 0 3-1.34 3-3V5c0-1.66-1.35-3-3-3ZM8.44 4.95v.8a.5.5 0 0 1-.5.5H3.03a.5.5 0 0 1-.5-.5v-.8C2.53 3.33 3.86 2 5.49 2c1.62 0 2.95 1.33 2.95 2.95ZM2.53 17.91c0 .45.19 1.14.43 1.52l.81 1.36c.95 1.58 2.49 1.58 3.43 0l.82-1.36c.23-.38.42-1.07.42-1.52V8.25a.5.5 0 0 0-.5-.5H3.03a.5.5 0 0 0-.5.5v9.66Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M18.47 22.75h-4c-2.42 0-3.75-1.33-3.75-3.75V5c0-2.42 1.33-3.75 3.75-3.75h4c2.42 0 3.75 1.33 3.75 3.75v14c0 2.42-1.34 3.75-3.75 3.75Zm-4-20c-1.58 0-2.25.67-2.25 2.25v14c0 1.58.67 2.25 2.25 2.25h4c1.58 0 2.25-.67 2.25-2.25V5c0-1.58-.67-2.25-2.25-2.25h-4Z" fill={color}></path><path d="M16.47 6.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75ZM15.47 18.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM16.47 14.75c-.01 0-.01 0 0 0l-5.01-.05c-.41 0-.75-.34-.74-.76 0-.41.34-.74.75-.74h.01l5 .05c.41 0 .75.34.74.76-.01.41-.34.74-.75.74ZM14.47 10.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM5.49 22.72c-.91 0-1.77-.56-2.36-1.54l-.82-1.36c-.3-.5-.53-1.32-.53-1.9V4.95c0-2.04 1.66-3.7 3.7-3.7s3.7 1.66 3.7 3.7v12.96c0 .58-.23 1.4-.53 1.9l-.82 1.36c-.57.99-1.43 1.55-2.34 1.55Zm0-19.97c-1.21 0-2.2.99-2.2 2.2v12.96c0 .31.15.86.31 1.13l.82 1.36c.31.52.7.81 1.07.81.37 0 .76-.3 1.07-.81l.82-1.36c.16-.27.31-.82.31-1.13V4.95c0-1.21-.99-2.2-2.2-2.2Z" fill={color}></path><path d="M8.44 7.75H2.53c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.91c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21.47 19V5c0-2-1-3-3-3h-4c-2 0-3 1-3 3v14c0 2 1 3 3 3h4c2 0 3-1 3-3Z" stroke={color} strokeWidth="1.5" strokeLinecap="round"></path><path opacity=".4" d="M11.47 6h5M11.47 18h4M11.47 13.95l5 .05M11.47 10h3" stroke={color} strokeWidth="1.5" strokeLinecap="round"></path><path d="M5.49 2C3.86 2 2.53 3.33 2.53 4.95v12.96c0 .45.19 1.13.42 1.52l.82 1.36c.94 1.57 2.49 1.57 3.43 0l.82-1.36c.23-.39.42-1.07.42-1.52V4.95C8.44 3.33 7.11 2 5.49 2Z" stroke={color} strokeWidth="1.5" strokeLinecap="round"></path><path opacity=".4" d="M8.44 7H2.53" stroke={color} strokeWidth="1.5" strokeLinecap="round"></path>
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

export const RulerPen = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
