<!-- BEGIN: cooperation-rule -->
# 项目协作规范

## 1. Git 提交信息规范(必须)

- 每次任务结束后，编写一条规范的 Git 提交信息并用于提交变更；遵循 Conventional Commits。
- 默认执行策略：直接提交本次任务相关改动（`git add` + `git commit`）。仅当用户明确说明"不要提交/稍后提交"时，改为只提供提交建议。
- ⚠️ **子仓库注意**：如果是 git submodule，变更需在对应子仓库内提交，必要时再到主仓库更新子模块引用。
  - 格式：`<type>(<scope>): <subject>`
  - 常用 type：`feat`、`fix`、`docs`、`refactor`、`chore`、`test`、`perf`、`build`。
  - scope 建议：`api`、`web`、`db`、`clip`、`transcode`、`infra`。
  - 主题行不超过 50 个字符，使用祈使句；中文或英文均可，但保持一致。
  - 可选正文（换行后 72 列换行）：说明动机、关键变更点与影响范围。
  - 示例：
    - `feat(clip): 实现直播片段自动切割接口`
    - `fix(web): 修复视频预览组件未释放资源`
    - `docs(readme): 增加本地开发指南`

<!-- END: cooperation-rule  -->

<!-- BEGIN: Scopify App Contexxt  -->

# Scopify App - Project Context

## Project Overview
Scopify is a mobile music application built with **React Native** and **Expo**, heavily inspired by the Spotify design system. The project aims to provide an immersive, dark-themed music listening experience with a focus on high-fidelity UI restoration from Figma designs.

### Core Technologies
- **Framework**: [Expo](https://expo.dev/) (SDK 54+) with [Expo Router](https://docs.expo.dev/router/introduction/) for file-based routing.
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS v4). Note: Standard React Native `style` props are preferred for third-party components (like `LinearGradient`) to ensure layout reliability.
- **Icons**: [Lucide React Native](https://lucide.dev/guide/packages/lucide-react-native).
- **Navigation**: Tabs-based main navigation with Stack-based Modals (e.g., Music Player).
- **Design Source**: Spotify-inspired Figma UI.

## Project Structure
- `app/`: Contains the file-based routing logic.
  - `(tabs)/`: Main navigation screens (Home, Search, Library).
  - `playlist/[id].tsx`: Dynamic route for playlist details.
  - `music-player.tsx`: Full-screen music player modal.
  - `settings.tsx`: User profile and application settings.
  - `_layout.tsx`: Root layout configuration.
- `components/`: Shared UI components (e.g., `SettingsItem`, `SettingsProfile`).
- `assets/`: Static assets like icons and splash screens.
- `global.css`: Global Tailwind CSS configuration.

## Building and Running
The project uses `pnpm` (as inferred from `package.json` overrides) or `npm`.

- **Start Development Server**: `npm start` or `npx expo start`
- **Clear Cache & Restart**: `npx expo start --clear` (Recommended after route changes)
- **Run on Android**: `npm run android`
- **Run on iOS**: `npm run ios`
- **Lint & Format**: `npm run lint` / `npm run format`

## Development Conventions

### Styling Guidelines
- Use **Tailwind classes** (via `className`) for standard View/Text elements.
- Use **inline styles** for layout-critical or third-party components (e.g., `LinearGradient`, `BlurView`) to avoid version-specific interop issues.
- Adhere to the **Spotify Color Palette**:
  - Background: `#121212` (Dark Grey) / `#000000` (Black)
  - Primary Green: `#1DB954` / `#22C55E`
  - Muted Text: `#94A3B8` / `#B3B3B3`

### Component Patterns
- **Atomic Components**: Extract repetitive UI elements (like list items or profile headers) into the `components/` directory.
- **Navigation**: Use the `useRouter` hook or `<Link />` component from `expo-router` for all internal navigation.
- **Modals**: Full-screen players or settings sub-pages should be configured as Stack Modals in the root `_layout.tsx`.

### Figma Sync
- Future UI changes should be verified against the design at: `https://www.figma.com/design/2thlQKAEvIr4irCcHHDFah/Scopify-%E7%9A%84%E7%A7%BB%E5%8A%A8%E7%AB%AF-UI`.
- Maintain the "angled art" decoration style in the Search category tiles.

<!-- END: Scopify App Contexxt  -->
