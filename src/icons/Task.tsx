import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M20 19.261h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .46-.37.82-.82.82ZM20 12.968h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .45-.37.82-.82.82ZM20 6.671h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .45-.37.82-.82.82ZM4.91 8.032c-.22 0-.43-.09-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16l-2.72 2.72c-.16.15-.36.24-.58.24ZM4.91 14.329c-.21 0-.42-.08-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.82.82 0 0 1 1.16 1.16l-2.72 2.72c-.16.16-.37.24-.58.24ZM4.91 20.329c-.21 0-.42-.08-.58-.24l-.91-.91a.82.82 0 0 1 1.16-1.16l.33.33 2.14-2.14a.821.821 0 0 1 1.16 1.16l-2.72 2.72c-.16.16-.37.24-.58.24Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M21 20.25H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 13.25H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 6.25H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM4 7.251c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.47.47 2.47-2.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3c-.15.15-.34.22-.53.22ZM4 14.251c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.47.47 2.47-2.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3c-.15.15-.34.22-.53.22ZM4 21.251c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.47.47 2.47-2.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3c-.15.15-.34.22-.53.22Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path opacity=".4" d="M11 19.5h10M11 12.5h10M11 5.5h10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="m3 5.5 1 1 3-3M3 12.5l1 1 3-3M3 19.5l1 1 3-3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const Task = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
