import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { MoreVertical } from 'lucide-react-native';
import { Song } from '../../types/shared';

interface SongItemProps {
  song: Song;
  onPress?: () => void;
  onMorePress?: () => void;
}

export const SongItem: React.FC<SongItemProps> = ({ song, onPress, onMorePress }) => {
  return (
    <Pressable
      className="mb-4 flex-row items-center"
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${song.title} by ${song.artist}`}>
      <Image source={{ uri: song.image }} className="mr-3 h-12 w-12 rounded bg-gray-800" />
      <View className="flex-1">
        <Text className="font-bold text-white">{song.title}</Text>
        <Text className="text-sm text-[#b3b3b3]">{song.artist}</Text>
      </View>
      <Pressable
        className="p-2"
        onPress={onMorePress}
        accessibilityLabel="More options"
        accessibilityRole="button">
        <MoreVertical size={20} color="#b3b3b3" />
      </Pressable>
    </Pressable>
  );
};
