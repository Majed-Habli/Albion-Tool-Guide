import { useState } from "react";
import { imageData } from '@/data/CityData';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Carousel from 'react-native-reanimated-carousel';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Image, StyleSheet, Dimensions, View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const width = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePress = (index: number) => {
    router.push(`/cityDetails?index=${index}`);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/journalUpdateBanner.jpeg')}
          style={styles.reactLogo}
        />
      }
      cityIndex = {null}
      >
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
          data={imageData}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => {setCurrentIndex(index), console.log('current index:', index)}}
          
          renderItem={({ item, index }) => (
              <Pressable
                style={[
                  styles.carouselContainer,
                  index === currentIndex ? styles.activeItem : null
                ]}
                key={currentIndex}
                onPress={() => { handlePress(currentIndex) }}
              >
                <Image
                  source={item.source}
                  key={index}
                  style={styles.carousel}
                  blurRadius={index === currentIndex ? 0 : 6}
                />
                  <Text style={[styles.title, {position: 'absolute', bottom: 10, left:10}]}>{item.title}</Text>
              </Pressable>
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
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 32,
  },
  carouselContainer: {
    flex: 1,
    marginLeft: -40,
    width: 340,
    borderRadius: 7,
    justifyContent: 'center',
  },
  activeItem: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    elevation: 8,
    shadowOpacity: 6,
    shadowRadius: 3,
  },
});
