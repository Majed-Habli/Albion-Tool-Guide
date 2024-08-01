import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailBanner( ){
    return (
        <View>
            <Text style={{color: 'white'}}>Location</Text>
            <View>
                <Image></Image>
                <View>
                    <Text></Text>
                    <View>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      height: 250,
      overflow: 'hidden',
    },
    content: {
      flex: 1,
      padding: 32,
      gap: 16,
      overflow: 'hidden',
    },
  });
  