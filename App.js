import './global.css';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { OnboardingScreen, getOnboardingComplete } from './src/screens/OnboardingScreen';
import { SendFormScreen } from './src/screens/SendFormScreen';
import { ConfirmScreen } from './src/screens/ConfirmScreen';
import { SuccessScreen } from './src/screens/SuccessScreen';
import { DashboardScreen } from './src/screens/DashboardScreen';

const RootStack = createNativeStackNavigator();
const SendStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F4F4F5',
    card: '#ffffff',
    text: '#0F172A',
    border: '#E4E4E7',
    primary: '#C8102E',
  },
};

function SendFlow() {
  return (
    <SendStack.Navigator screenOptions={{ headerShown: false }}>
      <SendStack.Screen name="SendForm" component={SendFormScreen} />
      <SendStack.Screen name="Confirm" component={ConfirmScreen} />
      <SendStack.Screen name="Success" component={SuccessScreen} />
    </SendStack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#C8102E',
        tabBarInactiveTintColor: '#71717a',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#E4E4E7',
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
      }}
    >
      <Tab.Screen
        name="Pay"
        component={SendFlow}
        options={{
          tabBarLabel: 'Pay',
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>💸</Text>,
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>📊</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

function RootNavigator({ initialOnboardingDone }) {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialOnboardingDone ? 'Home' : 'Onboarding'}
    >
      <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
      <RootStack.Screen name="Home" component={MainTabs} />
    </RootStack.Navigator>
  );
}

export default function App() {
  const [booting, setBooting] = useState(true);
  const [onboardingDone, setOnboardingDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const done = await getOnboardingComplete();
        if (!cancelled) setOnboardingDone(done);
      } finally {
        if (!cancelled) setBooting(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (booting) {
    return (
      <SafeAreaProvider>
        <View className="flex-1 items-center justify-center bg-org-paper">
          <ActivityIndicator size="large" color="#C8102E" />
          <Text className="mt-4 text-sm text-zinc-500">Loading OrgPay…</Text>
        </View>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <StatusBar style="dark" />
        <RootNavigator initialOnboardingDone={onboardingDone} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
