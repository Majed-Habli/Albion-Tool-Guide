import { Image, StyleSheet, Platform ,Dimensions, View, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const width = Dimensions.get('window').width;
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/journalUpdateBanner.jpeg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">#CityBuffs</ThemedText>
        <ThemedText type="link">view all</ThemedText>
      </ThemedView>

      <Carousel
          loop={false}
          width={width}
          height={width / 2}
          autoPlay={false}
          mode="parallax"
          modeConfig={{
              parallaxScrollingScale: 0.8,
              parallaxScrollingOffset: 80,
              parallaxAdjacentItemScale: 0.8,
          }}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ index }) => (
              <View
                  style={{
                      flex: 1,
                      marginLeft: -40,
                      width: 340,
                      borderRadius: 7,
                      justifyContent: 'center',
                  }}
              >
                  <Image
                    source={require('@/assets/images/BridgewatchBanner.jpeg')}
                    style={styles.carousel}
                  />
              </View>
          )}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
    borderRadius: 18
  },
  carousel: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    borderRadius: 7
  },
});
