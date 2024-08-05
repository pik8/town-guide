import React from 'react';
import { weatherIconMapper } from '@/types/weatherMapping';

type DynamicIconProps = {
    iconName: string;
    size?: string | number;
    color?: string;
};

export default function DynamicIcon({ iconName, size, color }: DynamicIconProps) {
    const IconComponent = weatherIconMapper.get(iconName);

    if (!IconComponent) {
        return <span>Icon not found</span>;
    }

    return <IconComponent size={size} color={color} />;
};
