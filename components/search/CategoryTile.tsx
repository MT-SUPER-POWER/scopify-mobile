import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { Category } from '../../types/search';

interface CategoryTileProps {
  category: Category;
  onPress?: () => void;
}

export const CategoryTile: React.FC<CategoryTileProps> = ({ category, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      className="relative mb-4 h-36 w-[48%] overflow-hidden rounded-lg p-3"
      style={{ backgroundColor: category.color }}>
      <Text className="w-[80%] text-2xl font-bold text-white">{category.name}</Text>

      {/* Decorative Angled Art */}
      <View
        style={{
          position: 'absolute',
          bottom: -15,
          right: -15,
          width: 100,
          height: 100,
          backgroundColor: '#000',
          transform: [{ rotate: '25deg' }],
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5,
          overflow: 'hidden',
        }}>
        <Image source={{ uri: category.image }} style={{ width: '100%', height: '100%' }} />
      </View>
    </Pressable>
  );
};
