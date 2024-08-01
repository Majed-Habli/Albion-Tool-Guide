import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { imageData, resources } from '@/data/CityData';

type DetailBannerProps = {
  cityIndex: number | null;
};

export default function DetailBanner({ cityIndex }: DetailBannerProps) {
  console.log('Received cityIndex:', cityIndex);

  function getResourceNames(resourceIndices: number[]) {
    return resourceIndices.map(index => resources[index] || 'Unknown Resource');
  }

  function enhanceImageData(imageData: typeof imageData) {
    return imageData.map(city => ({
      ...city,
      resources: city.resources ? getResourceNames(city.resources) : []
    }));
  }

  const enhancedImageData = enhanceImageData(imageData);
  console.log('Enhanced Image Data:', enhancedImageData);

  // Validate cityIndex and extract cityData safely
  if (cityIndex === null || cityIndex >= enhancedImageData.length || cityIndex < 0) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>Invalid City Index</Text>
      </View>
    );
  }

  const cityData = enhancedImageData[cityIndex];
  console.log('City Data:', cityData);

  // Ensure cityData is defined and has expected properties
  if (!cityData) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>City Data Not Found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Location: {cityData.title || 'No Title Available'}</Text>
      {/* <Image source={imageData[cityIndex].source} style={styles.image} /> */}
      <View>
        {/* <Text>{cityData.description || 'No Description Available'}</Text> */}
        <View>
          {cityData.resources.length > 0 ? (
            cityData.resources.map((resource, idx) => (
              <Text key={idx} style={{ color: 'white' }}>{resource}</Text>
            ))
          ) : (
            <Text style={{ color: 'white' }}>No Resources Available</Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
});
