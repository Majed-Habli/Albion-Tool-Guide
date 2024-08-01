import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet } from 'react-native';
import { imageData } from '@/data/CityData';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function CityDetails() {
  const { index } = useLocalSearchParams<{ index: number }>();

  if (isNaN(index) || index < 0 || index >= imageData.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>City not found</Text>
      </View>
    );
  }

  const city = imageData[index];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={city.source}
          style={styles.reactLogo}
        />
      }
      cityIndex = {index}
      >
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
    borderRadius: 18
  },
});
