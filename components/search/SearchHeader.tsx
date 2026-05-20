import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { SEARCH_FILTERS } from '../../constants/search';

interface SearchHeaderProps {
  query: string;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onBack: () => void;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({
  query,
  activeFilter,
  onFilterChange,
  onBack,
}) => {
  return (
    <View className="border-b border-white/5 px-4 py-2">
      <View className="mb-4 flex-row items-center gap-4">
        <Pressable onPress={onBack} accessibilityLabel="Go back" accessibilityRole="button">
          <ChevronLeft size={34} color="white" />
        </Pressable>
        <View className="h-14 flex-1 justify-center rounded-md bg-[#282828] px-3">
          <Text className="text-lg font-semibold text-white">{query || 'Search'}</Text>
        </View>
      </View>

      {/* Filter Chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}>
        {SEARCH_FILTERS.map((filter) => (
          <Pressable
            key={filter}
            onPress={() => onFilterChange(filter)}
            accessibilityRole="button"
            accessibilityState={{ selected: activeFilter === filter }}
            className={`rounded-full px-4 py-1.5 ${activeFilter === filter ? 'bg-[#1ed760]' : 'bg-[#282828]'}`}>
            <Text
              className={`text-sm font-bold ${activeFilter === filter ? 'text-black' : 'text-white'}`}>
              {filter}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};
