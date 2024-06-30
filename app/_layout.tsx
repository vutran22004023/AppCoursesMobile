import '../global.css';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store, persistor } from '@/redux/store';
import { PersistGate } from "redux-persist/integration/react";
const RootLayout = () => {
  const queryClient = new QueryClient();
  const [fontsLoaded, error] = useFonts({
    'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
  });
  useEffect(() => {
    if (error) throw error;
    const hideSplash = async () => {
      if (error) throw error;
      await SplashScreen.preventAutoHideAsync(); // Ngăn chặn tự động ẩn thanh màu trắng
      if (fontsLoaded) {
        await SplashScreen.hideAsync(); // Ẩn thanh màu trắng khi fonts đã được tải
      }
    };

    hideSplash();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          </Stack>
        </View>
      </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622', // Thiết lập màu nền ở đây
  },
});

export default RootLayout;
