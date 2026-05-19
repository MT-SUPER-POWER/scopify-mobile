import { useState } from 'react';
import { Text, View, TextInput, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';

const RECENT_SEARCHES = [
  'Midnight City',
  'Discover Weekly',
  'Chill Vibes',
  'Workout Mix',
];

export default function SearchScreen() {
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
      <ScrollView className="flex-1 px-4">
        <Text
          style={{ fontFamily: 'System' }}
          className="text-white text-lg font-bold mt-4 mb-2"
        >
          Recent searches
        </Text>

        {RECENT_SEARCHES.map((item) => (
          <Pressable key={item} className="flex-row items-center gap-3 py-3">
            <Search size={18} color="#b3b3b3" />
            <Text
              style={{ fontFamily: 'System' }}
              className="text-[#b3b3b3] text-base"
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
