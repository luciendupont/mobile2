import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
      <Button
  onPress={() => {
    ('You tapped the button!');
  }}
  title="Press Me"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9e79f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
