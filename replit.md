# Мой график смен

Русскоязычный мобильный календарь для отметок рабочих смен, выходных и личных заметок с сохранением данных на устройстве.

## Run & Operate

- `pnpm --filter @workspace/shift-calendar run dev` — run the Android/mobile app
- `pnpm --filter @workspace/shift-calendar run typecheck` — typecheck the mobile app
- `pnpm run typecheck` — typecheck all workspace packages

## Stack

- Expo Router, React Native, TypeScript, and AsyncStorage
- The shift calendar works offline and does not require an account or backend database

## Where things live

- `artifacts/shift-calendar/app/index.tsx` — calendar screen and date editing
- `artifacts/shift-calendar/constants/colors.ts` — pastel palette and day-type colors

## Architecture decisions

- Schedule entries are stored locally on the device; there is no account or cloud sync.
- The same local storage layer supports the web preview for now.

## Product

Users can browse months, mark each date as Работа, Выходной, or Другое, and save a personal note for that date.

## User preferences

- The interface is entirely in Russian and uses a cozy pastel pink design.

## Gotchas

- Schedule data is local to the device/browser and is not synchronized between devices.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
