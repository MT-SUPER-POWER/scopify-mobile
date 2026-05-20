import React from 'react';
import { View, Text, Pressable, Switch } from 'react-native';
import { ChevronRight, ChevronDown } from 'lucide-react-native';

interface SettingsItemProps {
  title: string;
  subtitle?: string;
  valueText?: string;
  type?: 'link' | 'switch' | 'dropdown';
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  onPress?: () => void;
  valueColor?: string;
}

export function SettingsItem({
  title,
  subtitle,
  valueText,
  type = 'link',
  value,
  onValueChange,
  onPress,
  valueColor = '#94a3b8',
}: SettingsItemProps) {
  return (
    <Pressable className="flex-row items-center px-6 py-3" onPress={onPress}>
      <View className="flex-1 pr-4">
        <Text className="text-[14px] font-bold text-white">{title}</Text>
        {subtitle && (
          <Text className="text-xs leading-5 text-[#94a3b8]" numberOfLines={2}>
            {subtitle}
          </Text>
        )}
        {valueText && (
          <Text style={{ color: valueColor }} className="text-xs font-medium">
            {valueText}
          </Text>
        )}
      </View>

      {type === 'link' && <ChevronRight size={20} color="#94a3b8" />}
      {type === 'dropdown' && <ChevronDown size={20} color="white" />}
      {type === 'switch' && (
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: '#727272', true: '#1db954' }}
          thumbColor="white"
        />
      )}
    </Pressable>
  );
}

export function SettingsGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View className="mt-4">
      <View className="px-6 py-4">
        <Text className="text-base font-bold text-white">{title}</Text>
      </View>
      {children}
    </View>
  );
}
