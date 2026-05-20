import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

interface SettingsProfileProps {
  name: string;
  image: string;
  onPress?: () => void;
}

export function SettingsProfile({ name, image, onPress }: SettingsProfileProps) {
  return (
    <Pressable className="flex-row items-center px-6 py-6" onPress={onPress}>
      <View className="h-14 w-14 overflow-hidden rounded-full bg-[#282828]">
        <Image source={{ uri: image }} className="h-full w-full" />
      </View>
      <View className="flex-1 px-4">
        <Text className="text-xl font-bold text-white">{name}</Text>
        <View className="flex-row items-center gap-1">
          <Text className="text-sm text-[#94a3b8]">View Profile</Text>
          <ChevronRight size={14} color="#94a3b8" />
        </View>
      </View>
    </Pressable>
  );
}
