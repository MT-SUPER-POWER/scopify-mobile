import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search as SearchIcon, Camera } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { SEARCH_CATEGORIES } from '../../constants/search';
import { CategoryTile } from '../../components/search/CategoryTile';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }} edges={['top']}>
      {/* Header */}
      <View className="px-4 pt-6 pb-4">
        <View className="mb-4 flex-row items-center justify-between">
          <Text className="text-3xl font-extrabold tracking-tighter text-white">Search</Text>
          <Pressable className="p-2">
            <Camera size={24} color="white" />
          </Pressable>
        </View>

        {/* Search Bar */}
        <Pressable className="h-12 flex-row items-center gap-2 rounded-md bg-white px-3">
          <SearchIcon size={20} color="#000000" />
          <TextInput
            className="flex-1 text-sm font-semibold text-black"
            placeholder="What do you want to listen to?"
            placeholderTextColor="#4b5563"
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={() => {
              if (query.trim()) {
                router.push({
                  pathname: '/search-results',
                  params: { q: query.trim() },
                });
              }
            }}
            returnKeyType="search"
          />
        </Pressable>
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 160 }}>
        <Text className="mb-4 text-lg font-bold text-white">Browse all</Text>

        <View className="flex-row flex-wrap justify-between">
          {SEARCH_CATEGORIES.map((category) => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
