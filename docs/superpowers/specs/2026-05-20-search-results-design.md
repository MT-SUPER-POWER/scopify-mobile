# Search Results Page Technical Specification

## 1. Overview
The Search Results page provides a detailed view of search results for a given query, mimicking the Spotify mobile search experience. It includes a top result, song listings, and album cards.

## 2. Architecture
- **Route**: `app/search-results.tsx` (New file)
- **Navigation**: Accessed from `app/(tabs)/search.tsx` via `router.push('/search-results?q=...')`.
- **State Management**:
  - Search query retrieved from URL search params.
  - Active filter state (All, Artists, Songs, Albums) managed locally.

## 3. Layout Structure & Components

| Section | Component | Description | Data / Notes |
| :--- | :--- | :--- | :--- |
| **Header (Sticky)** | **Search Header** | Back button + Query Input + Filter Chips | Chips: All, Artists, Songs, Albums |
| **Top Result** | **Artist Card** | Large circular image + Name + "Artist" label | The Weeknd |
| **Songs Section** | **Track List** | Vertical list of song rows | Blinding Lights, Save Your Tears, etc. |
| **Albums Section** | **Album Grid** | Horizontal scroll of square album cards | After Hours, Dawn FM, etc. |

## 4. Components Detail
### A. Sticky Header
- Back button (chevron-left).
- Search input (non-editable for this demo, or syncs with URL).
- Filter Chips: Horizontal scrollable list of categories.

### B. Top Result Section
- Large card representing the most relevant result (e.g., Artist profile).
- Display: Round image, Name, Category label ("Artist").

### C. Songs Section
- Vertical list of song rows.
- Row structure: Small square artwork, Title (white), Subtitle/Artist (gray), More icon.

### D. Albums Section
- Horizontal scrollable row of album cards.
- Card structure: Large square artwork, Album Title, Year • Type.

## 4. Data Layer
- **Mock Data**: A static constant containing:
  - `topResult`: Artist object (The Weeknd).
  - `songs`: Array of song objects (Blinding Lights, Save Your Tears, Starboy).
  - `albums`: Array of album objects (After Hours, Dawn FM, Starboy).

## 5. UI/UX (NativeWind / Tailwind)
- **Background**: `#121212` (Near Black).
- **Surface**: `#181818` (Dark Surface) for cards.
- **Accent**: `#1ed760` (Spotify Green) for active states.
- **Typography**: Bold headers, compact metadata.

## 6. Implementation Steps
1. Create `app/search-results.tsx` skeleton.
2. Implement header with navigation back.
3. Build the scrollable content area with mock data.
4. Add styling to match Figma's "Spotify Style Search Results" (Node ID `1:494`).
5. Update `app/(tabs)/search.tsx` to navigate on search confirmation.

## 7. Verification Plan
- [ ] Search for "The Weeknd" in the search tab and confirm navigation.
- [ ] Verify back button returns to the search tab.
- [ ] Check horizontal scrolling for album cards.
- [ ] Verify UI matches Figma screenshot (colors, spacing, typography).
