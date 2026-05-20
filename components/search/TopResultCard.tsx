import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { Artist } from '../../types/search';

interface TopResultCardProps {
  artist: Artist;
  onPress?: () => void;
}

export const TopResultCard: React.FC<TopResultCardProps> = ({ artist, onPress }) => {
  return (
    <View className="mt-6 mb-8">
      <Text className="mb-4 text-xl font-bold text-white">Top Result</Text>
      <Pressable
        onPress={onPress}
        className="rounded-lg bg-[#181818] p-5"
        accessibilityRole="button"
        accessibilityLabel={`${artist.name}, ${artist.type}`}>
        <View className="mb-4 h-28 w-28 overflow-hidden rounded-full bg-gray-800">
          <Image source={{ uri: artist.image }} className="flex-1" />
        </View>
        <Text className="mb-1 text-3xl font-bold text-white">{artist.name}</Text>
        <Text className="text-sm font-semibold tracking-widest text-[#b3b3b3] uppercase">
          {artist.type}
        </Text>
      </Pressable>
    </View>
  );
};
