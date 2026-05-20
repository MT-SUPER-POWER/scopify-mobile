import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="music-player"
        options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
      />
      <Stack.Screen name="settings" />
      <Stack.Screen name="playlist/[id]" />
    </Stack>
  );
}
