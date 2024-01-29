import React, { FC } from 'react';
import { ISaxIconWrapperProps } from './types';
import { iconMap } from './icons/iconMap';

export const ISaxIcon: FC<ISaxIconWrapperProps> = (props) => {
  const {
    iconName,
    variant = "Bold",
    color = "inherit",
    size = 14,
    ...restProps
  } = props;

  const IconComponent = iconMap[iconName];

  return <IconComponent 
    {...restProps}
    variant={variant}
    color={color}
    size={size}
  />
};
