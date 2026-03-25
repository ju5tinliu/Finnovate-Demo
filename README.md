# OrgPay (Finnovate Demo)

Mobile-first **OrgPay** demo: a university club payment experience built with [Expo](https://expo.dev) SDK 54, **React Native**, **React Navigation**, and **NativeWind** (Tailwind-style `className`).

- **Pay** tab: send or request flow with confirmation, university protected messaging, and a mock reference number.
- **Dashboard** tab: read only treasurer view with mock fundraiser totals and recent transactions.
- **Onboarding**: tax and institutional rails story (shown once; stored with AsyncStorage).

Northeastern-inspired **#C8102E** red on neutral backgrounds. All data is **mock**; no real payments or university integration.

## Prerequisites

- Node.js (LTS)
- [Expo Go](https://expo.dev/go) (SDK 54) on a device, or **simulators**, or **`npm run web`** for laptop browser

## Getting started

```bash
npm install
npm start
```

- Press **`w`** for web, **`i` / `a`** for simulators, or scan the QR code in Expo Go.

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm start`       | Expo dev server (Metro)  |
| `npm run ios`     | iOS simulator            |
| `npm run android` | Android emulator         |
| `npm run web`     | React Native Web         |

## Project layout

- `App.js`: navigation (root stack + tabs + send stack)
- `global.css` / `tailwind.config.js` / `metro.config.js`: NativeWind + Tailwind
- `src/screens/`: onboarding, pay flow, dashboard
- `src/components/`: trust badge, speed pill, Venmo comparison, buttons
- `src/mock/`: mock transactions and helpers

## Reset onboarding (demo)

Clear the app’s stored flag, or uninstall / clear app data. To force onboarding again in development, remove the `@orgpay_onboarding_complete` key from AsyncStorage or add a dev-only reset in code.
