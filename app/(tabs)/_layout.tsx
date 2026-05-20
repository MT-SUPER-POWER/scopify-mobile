import { Tabs, useRouter } from 'expo-router';
import { House, Search, Library, Music, Play } from 'lucide-react-native';
import { View, Text, Image, Pressable, Platform } from 'react-native';

const imgMiniArt = 'https://www.figma.com/api/mcp/asset/2f345f8b-329e-4898-b8b8-37f57d000c9a';

export default function TabLayout() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#b3b3b3',
          tabBarStyle: {
            backgroundColor: 'rgba(0,0,0,0.9)',
            borderTopWidth: 0,
            height: 60,
            paddingBottom: 8,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <House size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color }) => <Search size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: 'Your Library',
            tabBarIcon: ({ color }) => <Library size={24} color={color} />,
          }}
        />
      </Tabs>

      {/* Persistent Mini Player anchored above Tab Bar */}
      <Pressable
        style={{
          position: 'absolute',
          bottom: 68, // Increased from 65 to add a small gap
          left: 8,
          right: 8,
          height: 56,
          backgroundColor: '#2a2a2a',
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 8,
          elevation: 10,
        }}
        onPress={() => router.push('/music-player')}>
        <View style={{ width: 40, height: 40, borderRadius: 4, overflow: 'hidden' }}>
          <Image source={{ uri: imgMiniArt }} style={{ width: '100%', height: '100%' }} />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 12 }}>
          <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }} numberOfLines={1}>
            Starboy
          </Text>
          <Text style={{ color: '#9ca3af', fontSize: 10 }} numberOfLines={1}>
            The Weeknd • Daft Punk
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, paddingRight: 8 }}>
          <Music size={20} color="#22c55e" />
          <Play size={24} color="white" fill="white" />
        </View>
        {/* Mini Progress Bar */}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 4,
            right: 4,
            height: 2,
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: 2,
            overflow: 'hidden',
          }}>
          <View style={{ width: '45%', height: '100%', backgroundColor: '#22c55e' }} />
        </View>
      </Pressable>
    </View>
  );
}
