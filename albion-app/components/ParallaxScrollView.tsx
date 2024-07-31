import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme, View, Text, TextInput  } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { IconButton } from '@/components/IconButton';

import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.95]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  const handleFilterPress = () => {
    console.log('Icon button pressed!');
  };

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme], borderRadius: 18 },
            headerAnimatedStyle,
          ]}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'left', zIndex: 1, paddingHorizontal:'8%'}}>
            <View >
              <Text style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', width: 120, padding: 10, marginVertical: 50}}>All About albion</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', backgroundColor: 'white', padding: 8, borderRadius: 9 }}>
                <TabBarIcon name={'search'} color={'#171717'} />
                <TextInput
                  placeholder="Search"
                  style={{ color: '#171717',marginHorizontal: 10 }}
                  // onChangeText={(text) => setText(text)}
                  // value={text}
                />
              </View>
              <IconButton
                onPress={handleFilterPress}
                icon={'options-sharp'}
                accessibilityLabel="Filter"
                accessibilityHint="Opens the search filter section."
              />
            </View>
          </View>
          {headerImage}
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
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
