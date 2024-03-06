import React, { FC } from 'react';
import { ISaxIconWrapperProps } from './types';
import { iconMap } from './icons/iconMap';
import { getPossibleMatchIcon } from './getClosestMatch';

export const ISaxIcon: FC<ISaxIconWrapperProps> = (props) => {
  const {
    iconName,
    variant = "Bold",
    color = "inherit",
    size = 14,
    useAltIfNoMatch = true,
    ...restProps
  } = props;

  const IconComponent = iconMap[iconName];

  if (IconComponent) {
    return <IconComponent
      {...restProps}
      variant={variant}
      color={color}
      size={size}
    />
  }

  if (useAltIfNoMatch) {
    const possibleMatch = getPossibleMatchIcon(iconName);
    if (possibleMatch) {
      const IconComponent = iconMap[possibleMatch];
      return <IconComponent
        {...restProps}
        variant={variant}
        color={color}
        size={size}
      />
    }
  }

  return <></>
};
