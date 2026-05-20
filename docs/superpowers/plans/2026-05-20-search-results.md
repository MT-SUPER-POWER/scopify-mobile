# Search Results Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a Spotify-style search results page that displays top results, songs, and albums based on a search query.

**Architecture:** A new page `app/search-results.tsx` using Expo Router for navigation and NativeWind for styling. It will display mock data based on the query parameter.

**Tech Stack:** React Native, Expo Router, NativeWind (Tailwind CSS), Lucide React Native.

---

### Task 1: Initialize Search Results Page & Header

**Files:**
- Create: `app/search-results.tsx`

- [ ] **Step 1: Create the file with basic structure and Sticky Header**

```tsx
import React from 'react';
import { View, Text, Pressable, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, MoreVertical } from 'lucide-react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function SearchResultsScreen() {
  const router = useRouter();
  const { q } = useLocalSearchParams();
  const [activeFilter, setActiveFilter] = React.useState('All');

  const filters = ['All', 'Artists', 'Songs', 'Albums', 'Playlists'];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }} edges={['top']}>
      {/* Sticky Header */}
      <View className="px-4 py-2 border-b border-white/5">
        <View className="flex-row items-center gap-4 mb-4">
          <Pressable onPress={() => router.back()}>
            <ChevronLeft size={28} color="white" />
          </Pressable>
          <View className="flex-1 bg-[#282828] h-10 rounded-md px-3 flex-row items-center">
            <TextInput
              className="flex-1 text-white font-semibold text-sm"
              value={q as string}
              editable={false}
            />
          </View>
        </View>

        {/* Filter Chips */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-2">
          {filters.map((filter) => (
            <Pressable
              key={filter}
              onPress={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full ${activeFilter === filter ? 'bg-[#1ed760]' : 'bg-[#282828]'}`}
            >
              <Text className={`text-xs font-bold ${activeFilter === filter ? 'text-black' : 'text-white'}`}>
                {filter}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <ScrollView className="flex-1">
        {/* Content will go here */}
      </ScrollView>
    </SafeAreaView>
  );
}
```

- [ ] **Step 2: Verify page renders (manually or via test)**
Note: Since this is a new page, it won't be reachable until Task 4. You can temporarily modify `app/(tabs)/index.tsx` to link to it for quick verification.

- [ ] **Step 3: Commit**

```bash
git add app/search-results.tsx
git commit -m "feat: init search results page with header and filters"
```

### Task 2: Implement "Top Result" and "Songs" Sections

**Files:**
- Modify: `app/search-results.tsx`

- [ ] **Step 1: Add Mock Data and Sections**

```tsx
// Inside SearchResultsScreen
const MOCK_DATA = {
  topResult: {
    name: 'The Weeknd',
    type: 'Artist',
    image: 'https://www.figma.com/api/mcp/asset/4b78759c-8512-4299-8086-630e557297e2',
  },
  songs: [
    { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', image: 'https://www.figma.com/api/mcp/asset/4b78759c-8512-4299-8086-630e557297e2' },
    { id: '2', title: 'Save Your Tears', artist: 'The Weeknd', image: 'https://www.figma.com/api/mcp/asset/4b78759c-8512-4299-8086-630e557297e2' },
    { id: '3', title: 'Starboy', artist: 'The Weeknd, Daft Punk', image: 'https://www.figma.com/api/mcp/asset/4b78759c-8512-4299-8086-630e557297e2' },
  ]
};

// Update ScrollView content
<ScrollView className="flex-1 px-4">
  {/* Top Result */}
  <View className="mt-6 mb-8">
    <Text className="text-xl font-bold text-white mb-4">Top Result</Text>
    <View className="bg-[#181818] p-5 rounded-lg">
      <View className="w-28 h-28 rounded-full bg-gray-800 mb-4 overflow-hidden">
        {/* Image Placeholder */}
        <View className="flex-1 bg-gray-700" />
      </View>
      <Text className="text-3xl font-bold text-white mb-1">{MOCK_DATA.topResult.name}</Text>
      <Text className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-widest">
        {MOCK_DATA.topResult.type}
      </Text>
    </View>
  </View>

  {/* Songs */}
  <View className="mb-8">
    <Text className="text-xl font-bold text-white mb-4">Songs</Text>
    {MOCK_DATA.songs.map((song) => (
      <View key={song.id} className="flex-row items-center mb-4">
        <View className="w-12 h-12 bg-gray-800 rounded mr-3" />
        <View className="flex-1">
          <Text className="text-white font-bold">{song.title}</Text>
          <Text className="text-[#b3b3b3] text-sm">{song.artist}</Text>
        </View>
        <MoreVertical size={20} color="#b3b3b3" />
      </View>
    ))}
  </View>
</ScrollView>
```

- [ ] **Step 2: Commit**

```bash
git add app/search-results.tsx
git commit -m "feat: add top result and songs sections to search results"
```

### Task 3: Implement "Albums" Section

**Files:**
- Modify: `app/search-results.tsx`

- [ ] **Step 1: Add Album Data and Horizontal Scroll**

```tsx
const MOCK_ALBUMS = [
  { id: '1', title: 'After Hours', year: '2020', type: 'Album' },
  { id: '2', title: 'Dawn FM', year: '2022', type: 'Album' },
  { id: '3', title: 'Starboy', year: '2016', type: 'Album' },
];

// Add below Songs section in ScrollView
<View className="mb-10">
  <Text className="text-xl font-bold text-white mb-4">Albums</Text>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-4">
    {MOCK_ALBUMS.map((album) => (
      <View key={album.id} className="w-36">
        <View className="w-36 h-36 bg-gray-800 rounded-md mb-2" />
        <Text className="text-white font-bold" numberOfLines={1}>{album.title}</Text>
        <Text className="text-[#b3b3b3] text-xs font-semibold">
          {album.year} • {album.type}
        </Text>
      </View>
    ))}
  </ScrollView>
</View>
```

- [ ] **Step 2: Commit**

```bash
git add app/search-results.tsx
git commit -m "feat: add albums horizontal scroll to search results"
```

### Task 4: Integrate Navigation from Search Tab

**Files:**
- Modify: `app/(tabs)/search.tsx`

- [ ] **Step 1: Update Search Bar to navigate on submit**

```tsx
// Inside SearchScreen component in app/(tabs)/search.tsx
import { useRouter } from 'expo-router';

// ...
const router = useRouter();

// Find TextInput and add onSubmitEditing
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
        params: { q: query }
      });
    }
  }}
  returnKeyType="search"
/>
```

- [ ] **Step 2: Verify full flow**
1. Open App.
2. Go to Search tab.
3. Type "The Weeknd".
4. Press Search on keyboard.
5. Verify navigation to `search-results` page with correct query.

- [ ] **Step 3: Commit**

```bash
git add app/(tabs)/search.tsx
git commit -m "feat: trigger navigation to search results on search submit"
```
