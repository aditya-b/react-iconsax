import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19.072 19.821c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c3.61-3.61 3.61-9.48 0-13.08a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 4.19 4.19 4.19 11.01 0 15.2-.15.15-.34.22-.53.22ZM4.93 19.821c-.19 0-.38-.07-.53-.22-4.19-4.19-4.19-11.01 0-15.2.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06-3.61 3.61-3.61 9.48 0 13.08.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM11.999 22.712c-1.25-.01-2.44-.21-3.55-.6a.754.754 0 0 1-.46-.96c.14-.39.56-.6.96-.46.96.33 1.98.51 3.06.51 1.07 0 2.1-.18 3.05-.51.39-.13.82.07.96.46s-.07.82-.46.96c-1.12.39-2.31.6-3.56.6ZM15.299 3.34c-.08 0-.17-.01-.25-.04a9.04 9.04 0 0 0-3.05-.51c-1.07 0-2.09.18-3.05.51-.4.13-.82-.07-.96-.46s.07-.82.46-.96c1.12-.39 2.31-.59 3.55-.59 1.24 0 2.44.2 3.55.59a.75.75 0 0 1-.25 1.46ZM8.738 12v-1.67c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89V12Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19.068 19.821c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c3.61-3.61 3.61-9.48 0-13.08a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 4.19 4.19 4.19 11.01 0 15.2-.15.15-.34.22-.53.22ZM4.93 19.821c-.19 0-.38-.07-.53-.22-4.19-4.19-4.19-11.01 0-15.2.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06-3.61 3.61-3.61 9.48 0 13.08.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM11.999 22.712c-1.25-.01-2.44-.21-3.55-.6a.754.754 0 0 1-.46-.96c.14-.39.56-.6.96-.46.96.33 1.98.51 3.06.51 1.07 0 2.1-.18 3.05-.51.39-.13.82.07.96.46s-.07.82-.46.96c-1.12.39-2.31.6-3.56.6ZM15.3 3.34c-.08 0-.17-.01-.25-.04a9.399 9.399 0 0 0-6.109 0 .763.763 0 0 1-.96-.46c-.14-.39.07-.82.46-.96 1.11-.39 2.31-.59 3.55-.59 1.24 0 2.44.2 3.55.59.39.14.6.57.46.96-.1.31-.39.5-.7.5ZM10.562 16.761c-.44 0-.86-.11-1.23-.32-.86-.5-1.34-1.48-1.34-2.76v-3.35c0-1.28.47-2.26 1.34-2.76.86-.5 1.95-.42 3.06.22l2.9 1.67c1.11.64 1.72 1.54 1.72 2.54s-.61 1.9-1.72 2.54l-2.9 1.67c-.63.37-1.26.55-1.83.55Zm0-8.02c-.18 0-.35.04-.48.12-.37.22-.59.75-.59 1.46v3.35c0 .71.21 1.25.59 1.46.37.21.94.13 1.56-.22l2.9-1.67c.62-.36.97-.81.97-1.24 0-.43-.35-.88-.97-1.24l-2.9-1.67c-.4-.23-.77-.35-1.08-.35Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M19.07 19.07c3.91-3.91 3.91-10.24 0-14.14M4.929 4.93c-3.91 3.91-3.91 10.24 0 14.14M8.7 21.41c1.07.37 2.18.55 3.3.55 1.12-.01 2.23-.18 3.3-.55M8.7 2.59c1.07-.37 2.18-.55 3.3-.55 1.12 0 2.23.18 3.3.55" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M8.738 12v-1.67c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89V12Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const PlayCricle = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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