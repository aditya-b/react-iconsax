import React, { forwardRef } from 'react';
import { ISaxIconProps } from "../types";

const Bold = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M8.259 21.245a3.896 3.896 0 0 0 1.115-2.326 3.865 3.865 0 0 0-1.115-3.18 3.816 3.816 0 0 0-1.817-1.019 3.864 3.864 0 0 0-3.69 1.02 3.801 3.801 0 0 0-1.121 2.498c-.035.392 0 .798.103 1.19.158.668.502 1.301 1.018 1.817a3.893 3.893 0 0 0 5.507 0Zm-1.294-3.469c.399 0 .73.33.73.73a.746.746 0 0 1-.737.736l-.723-.007.007.696a.746.746 0 0 1-.736.736.746.746 0 0 1-.737-.736l.007-.696-.723.007a.746.746 0 0 1-.736-.736.754.754 0 0 1 .73-.73h.729v-.757c0-.206.083-.385.213-.516.131-.13.31-.213.517-.213.399 0 .73.33.73.73v.756h.729ZM15.095 3.845v3.7h-1.46v-3.7c0-.262-.233-.389-.39-.389a.391.391 0 0 0-.145.03L5.38 6.395a1.308 1.308 0 0 0-.847 1.236v.652a3.636 3.636 0 0 0-1.46 2.92V7.632c0-1.158.71-2.19 1.791-2.599l7.729-2.92a1.854 1.854 0 0 1 2.502 1.733ZM21.57 14.116v.973a.486.486 0 0 1-.478.487h-1.421c-.516 0-.983-.38-1.022-.886a.972.972 0 0 1 .282-.779.925.925 0 0 1 .682-.282h1.47c.282.01.486.224.486.487Z" fill={color}></path><path d="M19.602 12.604h.993a.976.976 0 0 0 .973-.973v-.428a3.668 3.668 0 0 0-3.66-3.66H6.734c-.827 0-1.587.273-2.2.74a3.636 3.636 0 0 0-1.46 2.92v1.732c0 .37.39.604.74.487a5.282 5.282 0 0 1 1.694-.282 5.363 5.363 0 0 1 5.353 5.353c0 .701-.185 1.47-.477 2.151-.156.35.088.77.467.77h7.057a3.668 3.668 0 0 0 3.66-3.66v-.185a.976.976 0 0 0-.973-.974h-.847c-.934 0-1.83-.574-2.073-1.48a1.96 1.96 0 0 1 .525-1.927 1.94 1.94 0 0 1 1.402-.584Zm-5.334-.194H9.4c-.399 0-.73-.331-.73-.73 0-.4.331-.73.73-.73h4.867c.399 0 .73.33.73.73 0 .399-.331.73-.73.73Z" fill={color}></path>
</>)

const Outline = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M17.74 22.752H7.63c-.32 0-.6-.2-.71-.49-.11-.3-.02-.63.22-.83.24-.2.46-.46.62-.74.32-.51.48-1.09.48-1.68 0-1.79-1.46-3.25-3.25-3.25-.74 0-1.44.25-2.03.72a.744.744 0 0 1-1.21-.59v-4.37c0-2.49 2.02-4.51 4.51-4.51h11.48c2.49 0 4.51 2.02 4.51 4.51v1.44c0 .41-.34.75-.75.75h-2.02c-.35 0-.67.13-.9.37l-.01.01c-.28.27-.41.64-.38 1.02.06.66.69 1.19 1.41 1.19h1.9c.41 0 .75.34.75.75v1.19c0 2.49-2.02 4.51-4.51 4.51Zm-8.56-1.5h8.56c1.66 0 3.01-1.35 3.01-3.01v-.44H19.6c-1.51 0-2.79-1.12-2.91-2.56-.08-.82.22-1.63.82-2.22.52-.53 1.22-.82 1.97-.82h1.27v-.69c0-1.66-1.35-3.01-3.01-3.01H6.26c-1.66 0-3.01 1.35-3.01 3.01v3.08a4.78 4.78 0 0 1 1.75-.34c2.62 0 4.75 2.13 4.75 4.75 0 .79-.2 1.57-.57 2.25Z" fill={color}></path><path d="M2.5 13.16c-.41 0-.75-.34-.75-.75V7.84c0-1.49.94-2.84 2.33-3.37l7.94-3c.81-.31 1.73-.2 2.44.3.72.5 1.14 1.31 1.14 2.18v3.8c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.8c0-.38-.18-.73-.5-.95-.32-.22-.7-.27-1.06-.13l-7.94 3c-.81.31-1.36 1.1-1.36 1.97v4.57c.01.42-.33.75-.74.75ZM19.599 17.8c-1.51 0-2.79-1.12-2.91-2.56-.08-.83.22-1.64.82-2.23.51-.52 1.21-.81 1.96-.81h2.08c.99.03 1.75.81 1.75 1.77v2.06c0 .96-.76 1.74-1.72 1.77h-1.98Zm1.93-4.1h-2.05c-.35 0-.67.13-.9.37-.29.28-.43.66-.39 1.04.06.66.69 1.19 1.41 1.19h1.96c.13 0 .25-.12.25-.27v-2.06c0-.15-.12-.26-.28-.27Z" fill={color}></path><path d="M14 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75ZM5 23.75c-1.66 0-3.22-.88-4.06-2.31C.49 20.72.25 19.87.25 19c0-1.46.65-2.81 1.78-3.71.84-.67 1.9-1.04 2.97-1.04 2.62 0 4.75 2.13 4.75 4.75 0 .87-.24 1.72-.69 2.45-.24.42-.57.8-.95 1.12-.83.76-1.94 1.18-3.11 1.18Zm0-8c-.74 0-1.44.25-2.03.72a3.224 3.224 0 0 0-.75 4.2c.59 1 1.63 1.58 2.78 1.58.79 0 1.55-.29 2.13-.81.26-.22.48-.48.64-.76.32-.51.48-1.09.48-1.68 0-1.79-1.46-3.25-3.25-3.25Z" fill={color}></path><path d="M6.49 19.73H3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.99a.749.749 0 1 1 0 1.5Z" fill={color}></path><path d="M5 21.26c-.41 0-.75-.34-.75-.75v-2.99c0-.41.34-.75.75-.75s.75.34.75.75v2.99c0 .42-.34.75-.75.75Z" fill={color}></path>
</>)

const TwoTone = React.memo<Pick<ISaxIconProps, 'color'>>(({ color }) => <>
  <path d="M18.04 13.55c-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06a3.999 3.999 0 0 0-6.5-3.12v-4.37c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M2.5 12.411v-4.57c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78v3.8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22.559 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M7 12h7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 19c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 19ZM6.492 18.98h-2.98M5 17.52v2.99" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
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

export const EmptyWalletAdd = forwardRef<SVGSVGElement, ISaxIconProps>((props, ref) => {
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
