import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search as SearchIcon, Camera } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const CATEGORIES = [
  {
    id: '1',
    name: 'Podcasts',
    color: '#ea580c',
    image: 'https://www.figma.com/api/mcp/asset/01c389bf-e26c-4b4a-9465-176568b4473b',
  },
  {
    id: '2',
    name: 'Made For You',
    color: '#4338ca',
    image: 'https://www.figma.com/api/mcp/asset/1ef6afca-3e5a-4699-a53c-f7e0bc87b620',
  },
  {
    id: '3',
    name: 'Charts',
    color: '#db2777',
    image: 'https://www.figma.com/api/mcp/asset/3d2cc370-6810-441e-a173-f20d07b4838b',
  },
  {
    id: '4',
    name: 'New Releases',
    color: '#9333ea',
    image: 'https://www.figma.com/api/mcp/asset/948d82e0-0fd1-45f3-b4a7-2e28ec360fd3',
  },
  {
    id: '5',
    name: 'Pop',
    color: '#059669',
    image: 'https://www.figma.com/api/mcp/asset/cf8adabe-f321-4712-98b3-beac430b0258',
  },
  {
    id: '6',
    name: 'Hip-Hop',
    color: '#f97316',
    image: 'https://www.figma.com/api/mcp/asset/222aaf0c-1138-4cc5-9bbd-732d429dbcdf',
  },
  {
    id: '7',
    name: 'Rock',
    color: '#dc2626',
    image: 'https://www.figma.com/api/mcp/asset/54cd4804-4ddb-4701-a7f6-4a0739b52825',
  },
  {
    id: '8',
    name: 'Dance',
    color: '#60a5fa',
    image: 'https://www.figma.com/api/mcp/asset/eb1e18f9-5db8-4eb5-bfa1-398db998f1fd',
  },
  {
    id: '9',
    name: 'Mood',
    color: '#c084fc',
    image: 'https://www.figma.com/api/mcp/asset/7bfa7649-6473-496f-9a58-6e258718b740',
  },
  {
    id: '10',
    name: 'Indie',
    color: '#3f6212',
    image: 'https://www.figma.com/api/mcp/asset/591e03cf-89c6-4751-ae8c-22d3358b9696',
  },
];

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
          {CATEGORIES.map((category) => (
            <Pressable
              key={category.id}
              className="relative mb-4 h-28 w-[48%] overflow-hidden rounded-lg p-3"
              style={{ backgroundColor: category.color }}>
              <Text className="w-[80%] text-lg font-bold text-white">{category.name}</Text>

              {/* Decorative Angled Art */}
              <View
                style={{
                  position: 'absolute',
                  bottom: -15,
                  right: -15,
                  width: 70,
                  height: 70,
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
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
