import { Tabs, useRouter } from 'expo-router';
import { House, Search, Library, Music, Play } from 'lucide-react-native';
import { View, Text, Image, Pressable } from 'react-native';

const imgMiniArt = 'https://www.figma.com/api/mcp/asset/2f345f8b-329e-4898-b8b8-37f57d000c9a';

export default function TabLayout() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black">
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#b3b3b3',
          tabBarStyle: {
            backgroundColor: 'rgba(0,0,0,0.9)',
            borderTopWidth: 0,
            height: 72,
            paddingBottom: 10,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <House size={28} color={color} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color }) => <Search size={28} color={color} />,
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: 'Your Library',
            tabBarIcon: ({ color }) => <Library size={28} color={color} />,
          }}
        />
      </Tabs>

      {/* Persistent Mini Player anchored above Tab Bar */}
      <Pressable
        className="absolute right-3 bottom-[88px] left-3 h-[72px] flex-row items-center rounded-lg bg-[#2a2a2a] px-2"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 8,
          elevation: 10,
        }}
        onPress={() => router.push('/music-player')}>
        <View className="h-14 w-14 overflow-hidden rounded-md">
          <Image source={{ uri: imgMiniArt }} className="h-full w-full" />
        </View>
        <View className="flex-1 px-3">
          <Text className="text-base font-bold text-white" numberOfLines={1}>
            Starboy
          </Text>
          <Text className="text-sm text-[#9ca3af]" numberOfLines={1}>
            The Weeknd • Daft Punk
          </Text>
        </View>
        <View className="flex-row items-center gap-[18px] pr-2">
          <Music size={20} color="#22c55e" />
          <Play size={18} color="white" fill="white" />
        </View>
        {/* Mini Progress Bar */}
        <View className="absolute right-1 bottom-0 left-1 h-[2px] overflow-hidden rounded-sm bg-white/20">
          <View className="h-full w-[45%] bg-[#22c55e]" />
        </View>
      </Pressable>
    </View>
  );
}
