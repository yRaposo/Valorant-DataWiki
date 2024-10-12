import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AgentSelection from './src/views/agent_selection';
import AgentDescription from './src/views/agent_description';

const Stack = createNativeStackNavigator();

const loadFonts = () => {
  return Font.loadAsync({
    Varela: require('./src/assets/fonts/Varela-Regular.ttf'),
  });
};

function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  React.useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AgentSelection">
        <Stack.Screen
          name="AgentSelection"
          component={AgentSelection}
          options={{
            title: 'Agentes',
            headerStyle: {
              backgroundColor: '#111823',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: '300',
            },
          }}
        />
        <Stack.Screen
          name="AgentDescription"
          component={AgentDescription}
          options={{
            title: '',
            headerTransparent: true,
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
