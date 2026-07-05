# MGTaskToolBox
### by Munna Agent (MG) 🛠️

Bahut saare chote-chote useful tools ek hi app mein.

---

## Folder Structure

```
MGTaskToolBox/
│
├── app/                          ← Screens / Pages
│   ├── (tabs)/                   ← Bottom navigation
│   │   ├── index.tsx             ← Home — saare tools dikhate hain
│   │   ├── favorites.tsx         ← Favorite tools
│   │   ├── settings.tsx          ← App settings
│   │   └── _layout.tsx           ← Tab bar config
│   ├── tools/                    ← Har tool ki apni screen
│   │   ├── calculator/
│   │   │   └── index.tsx         ← Calculator tool
│   │   ├── unit-converter/
│   │   │   └── index.tsx         ← Unit converter tool
│   │   ├── text-tools/
│   │   │   └── index.tsx         ← Text tools
│   │   └── password-generator/
│   │       └── index.tsx         ← Password generator tool
│   └── _layout.tsx               ← Main app layout
│
├── components/                   ← Reusable UI parts
│   ├── ui/                       ← Basic components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   └── tools/                    ← Tool-specific components
│       └── ToolCard.tsx          ← Home screen par tool card
│
├── constants/                    ← App-wide values
│   ├── colors.ts                 ← Color palette
│   ├── fonts.ts                  ← Font sizes
│   └── tools.ts                  ← Saare tools ki list (metadata)
│
├── assets/                       ← Media files
│   ├── images/                   ← Photos & icons
│   └── fonts/                    ← Custom fonts
│
├── hooks/                        ← Custom logic
│   ├── useApi.ts                 ← API calls
│   └── useFavorites.ts           ← Favorite tools save karna
│
├── app.json                      ← Expo app settings
└── package.json                  ← Dependencies
```

---

## Naya Tool Kaise Add Karein?

1. `app/tools/<tool-name>/index.tsx` banao
2. `constants/tools.ts` mein ALL_TOOLS array mein entry add karo
3. `app/_layout.tsx` mein ek nayi Screen entry add karo

---

## Current Tools (v1.0)

| Tool | Description |
|---|---|
| 🧮 Calculator | Simple calculator |
| 📐 Unit Converter | km, kg, °C convert karo |
| ✍️ Text Tools | Uppercase, word count |
| 🔐 Password Generator | Strong password banao |
