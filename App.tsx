import { StatusBar } from 'expo-status-bar';
import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      {/* <ScreenContent title="Home" path="App.tsx"></ScreenContent> */}

      <View className='flex-1 items-center justify-center bg-blue-500'>
        <Text className='text-red-500 text-2xl font-bold'>Hello World</Text>
      </View>

    </SafeAreaProvider>
  );
}
