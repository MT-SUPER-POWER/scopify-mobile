import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { Album } from '../../types/shared';

interface AlbumCardProps {
  album: Album;
  onPress?: () => void;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ album, onPress }) => {
  return (
    <Pressable
      className="mr-4 w-48"
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${album.title}, ${album.type} released in ${album.year}`}>
      <View className="mb-2 h-48 w-48 overflow-hidden rounded-md bg-gray-800">
        <Image source={{ uri: album.image }} className="flex-1" />
      </View>
      <Text className="font-bold text-white" numberOfLines={1}>
        {album.title}
      </Text>
      <Text className="text-sm font-semibold text-[#b3b3b3]">
        {album.year} • {album.type}
      </Text>
    </Pressable>
  );
};
