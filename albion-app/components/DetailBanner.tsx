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
      <Text style={{ color: 'white', fontSize: 16 }}>Location</Text>
      <View style={{ flexDirection: 'row', gap: 10}}>
        <View style={{width: 30, height: 50}}>
            <Image source={cityData.crest} style={styles.image} />
        </View>
        <View style={{  alignContent: 'center' }}>    
            <Text style={{ color: 'white', fontSize: 20 }}>{cityData.title || 'No Title Available'}</Text>
            <View style={{ flexDirection: 'row', paddingBottom: 2}}>
            {cityData.resources.length > 0 ? (
                cityData.resources.map((resource, idx) => (
                <Text key={idx} style={{ color: 'white', marginRight: 10 }}>{resource}</Text>
                ))
            ) : (
                <Text style={{ color: 'white' }}>No Resources Available</Text>
            )}
            </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    width: 200,
    padding: 10,
    borderRadius: 9,
    gap: 5
  },
  image: {
    width: '100%',
    objectFit: 'contain',
    height: '100%',
  },
});
