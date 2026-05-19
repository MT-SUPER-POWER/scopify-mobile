import { useState } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';

const CATEGORIES = [
  { name: 'Podcasts', color: '#ea580c' },
  { name: 'Made For You', color: '#4338ca' },
  { name: 'Charts', color: '#db2777' },
  { name: 'New Releases', color: '#9333ea' },
  { name: 'Pop', color: '#059669' },
  { name: 'Hip-Hop', color: '#f97316' },
  { name: 'Rock', color: '#dc2626' },
  { name: 'Dance/Electronic', color: '#60a5fa' },
  { name: 'Mood', color: '#c084fc' },
  { name: 'Indie', color: '#3f6212' },
];

export default function BrowseScreen() {
  const [query, setQuery] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-[#121212]" edges={['top']}>
      {/* Header */}
      <View
        className="pt-8 pb-4 px-4"
        style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}
      >
        <Text
          style={{ fontFamily: 'System' }}
          className="text-white text-[30px] leading-[36px] font-extrabold tracking-[-0.75px]"
        >
          Search
        </Text>

        {/* Search bar */}
        <View className="mt-4 flex-row items-center rounded-md bg-white px-[13px] py-[13px] gap-[7px]">
          <Search size={18} color="#4b5563" />
          <TextInput
            className="flex-1 text-[14px] font-semibold text-black"
            placeholder="What do you want to listen to?"
            placeholderTextColor="#4b5563"
            value={query}
            onChangeText={setQuery}
          />
        </View>
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1 px-4 pb-[114px]"
        contentContainerStyle={{ paddingBottom: 114 }}
      >
        {/* Browse all section */}
        <Text
          style={{ fontFamily: 'System' }}
          className="text-white text-lg font-bold leading-[28px] mt-4 mb-4"
        >
          Browse all
        </Text>

        {/* Category grid */}
        <View className="flex-row flex-wrap gap-4">
          {CATEGORIES.map((category) => (
            <View
              key={category.name}
              style={{
                backgroundColor: category.color,
                width: 171,
                height: 112,
              }}
              className="rounded-lg overflow-hidden"
            >
              <Text
                style={{ fontFamily: 'System' }}
                className="text-white text-lg font-bold pt-[11px] px-3"
              >
                {category.name}
              </Text>

              {/* Decorative rotated element */}
              <View
                className="absolute"
                style={{
                  bottom: -8,
                  right: -8,
                  width: 85,
                  height: 85,
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  transform: [{ rotate: '25deg' }],
                  borderRadius: 12,
                }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
