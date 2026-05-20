import React from 'react';
import { View, Text, ScrollView, Pressable, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { SettingsProfile } from '../components/SettingsProfile';
import { SettingsItem, SettingsGroup } from '../components/SettingsItem';

const imgProfile = 'https://www.figma.com/api/mcp/asset/7334b17d-29fe-4e47-8e60-0c5d35635304';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }} edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-4 py-4">
        <Pressable onPress={() => router.back()} className="-ml-2 p-2">
          <ChevronLeft size={28} color="white" />
        </Pressable>
        <Text className="mr-8 flex-1 text-center text-base font-bold text-white">Settings</Text>
      </View>

      <ScrollView className="flex-1">
        {/* Profile Section */}
        <SettingsProfile
          name="Alex Thompson"
          image={imgProfile}
          onPress={() => console.log('Profile pressed')}
        />

        {/* Account Section */}
        <SettingsGroup title="Account">
          <SettingsItem title="Premium Plan" subtitle="Individual • Next bill Dec 12" />
          <SettingsItem title="Email" subtitle="alex.t@example.com" />
        </SettingsGroup>

        {/* Data Saver */}
        <SettingsGroup title="Data Saver">
          <SettingsItem
            title="Audio Quality"
            subtitle="Sets your audio quality to low (equivalent to 24kbit/s) and hides artist canvases."
            type="switch"
            value={false}
          />
        </SettingsGroup>

        {/* Playback */}
        <SettingsGroup title="Playback">
          <SettingsItem
            title="Gapless Playback"
            subtitle="Allow transitions between songs"
            type="switch"
            value={true}
          />
          <SettingsItem
            title="Automix"
            subtitle="Smooth transitions between tracks"
            type="switch"
            value={true}
          />
        </SettingsGroup>

        {/* Audio Quality */}
        <SettingsGroup title="Audio Quality">
          <SettingsItem
            title="WiFi Streaming"
            valueText="Very High"
            valueColor="#1db954"
            type="dropdown"
          />
          <SettingsItem
            title="Cellular Streaming"
            valueText="Automatic"
            valueColor="#1db954"
            type="dropdown"
          />
        </SettingsGroup>

        {/* Storage Section (Kept in main for visibility) */}
        <View className="mt-4">
          <View className="px-6 py-4">
            <Text className="text-base font-bold text-white">Storage</Text>
          </View>
          <View className="px-6">
            <View className="h-1.5 w-full flex-row overflow-hidden rounded-full bg-[#282828]">
              <View style={{ width: '45%', backgroundColor: '#1db954' }} />
              <View style={{ width: '25%', backgroundColor: '#b3b3b3' }} />
              <View style={{ width: '30%', backgroundColor: '#4d4d4d' }} />
            </View>
            <View className="mt-6 flex-row items-center justify-between">
              <View className="gap-3">
                <View className="flex-row items-center gap-3">
                  <View className="h-2 w-2 rounded-full bg-[#1db954]" />
                  <Text className="text-xs text-[#cbd5e1]">
                    Downloads <Text className="text-[#64748b]">12.4 GB</Text>
                  </Text>
                </View>
                <View className="flex-row items-center gap-3">
                  <View className="h-2 w-2 rounded-full bg-[#b3b3b3]" />
                  <Text className="text-xs text-[#cbd5e1]">
                    Cache <Text className="text-[#64748b]">4.2 GB</Text>
                  </Text>
                </View>
                <View className="flex-row items-center gap-3">
                  <View className="h-2 w-2 rounded-full bg-[#4d4d4d]" />
                  <Text className="text-xs text-[#cbd5e1]">
                    Free <Text className="text-[#64748b]">8.4 GB</Text>
                  </Text>
                </View>
              </View>
              <Pressable className="rounded-full border border-[#727272] px-8 py-2.5">
                <Text className="text-sm font-bold text-white">Clear Cache</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* Version */}
        <View className="mt-10 mb-20 items-center">
          <Text className="text-[10px] tracking-widest text-[#64748b] uppercase">
            Version 8.8.82.634
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
