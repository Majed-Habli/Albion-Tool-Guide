import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet } from 'react-native';
import { imageData } from '@/data/CityData';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import List from '@/components/ListComponent';
import { ThemedText } from '@/components/ThemedText';

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
      tint = {true}
      >
        <ThemedText type="subtitle">Farming Yield Bonus</ThemedText>
        {city.farming_yield_bonus.length > 0 && (
          city.farming_yield_bonus.map((bonus) => (
            <List title={bonus.name} percentage={bonus.percentage}></List>
          ))
        )}

        <ThemedText type="subtitle">Refining Bonus</ThemedText>
        {city.refining_bonus && (
          <List title={city.refining_bonus.resource} percentage={city.refining_bonus.percentage}></List>
        )}

        <ThemedText type="subtitle">Crafting Bonus</ThemedText>
        {city.crafting_bonus.length > 0 && (
          city.crafting_bonus.map((bonus) => (
            <List title={bonus.name} percentage={bonus.percentage}></List>
          ))
        )}
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
