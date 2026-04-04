# SponsorConnect - Specification

## 1. Project Overview

**Project Name:** SponsorConnect
**Type:** Single-page web application (React + TypeScript)
**Core Functionality:** A matching platform connecting local youth sports programs with business sponsors, featuring sponsor listings, program listings, and suggested matches
**Target Users:** Youth sports program organizers, local businesses looking to sponsor teams

---

## 2. UI/UX Specification

### Layout Structure

- **Header**: App title and tagline
- **Tab Navigation**: Three tabs - Sponsors, Programs, Matches
- **Content Area**: Grid of cards based on active tab
- **Responsive Breakpoints:**
  - Mobile: < 768px (single column)
  - Tablet: 768px-1024px (2 columns)
  - Desktop: > 1024px (3 columns)

### Visual Design

**Color Palette:**
- Background: `#F9FAFB` (gray-50)
- Surface: `#FFFFFF` (white cards)
- Primary Text: `#111827` (gray-900)
- Secondary Text: `#6B7280` (gray-600)
- Border: `#E5E7EB` (gray-200)
- Accent/Active Tab: `#2563EB` (blue-600)
- Tab Inactive: `#9CA3AF` (gray-400)
- Match Highlight: Blue (`#DBEAFE`), Green (`#DCFCE7`), Orange (`#FFEDD5`)

**Typography:**
- Font Family: System fonts
- Page Title: 24px bold
- Section Title: 20px semibold
- Card Title: 16px semibold
- Body: 14px regular
- Small/Labels: 12px

**Spacing System:**
- Page padding: 32px
- Card padding: 20px
- Grid gap: 24px
- Section gap: 32px

**Visual Effects:**
- Card shadow: `0 1px 3px rgba(0,0,0,0.1)` (like `shadow-md`)
- Border radius: 12px (cards)
- Tab active: 2px bottom border in blue

### Components

**Header:**
- App title "SponsorConnect"
- Tagline "Connect youth sports programs with local sponsors"

**Tab Navigation:**
- Three tabs: Sponsors, Programs, Matches
- Shows count in parentheses: "Sponsors (3)", "Programs (3)"
- Active tab: blue text, blue bottom border
- Inactive tab: gray text

**Sponsor Card:**
- Logo placeholder (checkmark icon)
- Company name (title)
- Description paragraph
- Categories list (tags)
- Location
- Website link (if applicable)

**Program Card:**
- Sport icon/indicator
- Program name (title)
- Sport type
- Age range
- Description paragraph
- Needs list (what they're looking for)
- Location

**Matches Tab:**
- "Suggested Matches" heading
- Description paragraph
- List of 3 match suggestions as cards:
  - Sponsor → Program format
  - Match type description (Equipment, Funding, etc.)
  - Color-coded background (blue, green, orange)

---

## 3. Functionality Specification

### Core Features

1. **Tab Navigation**
   - Switch between Sponsors, Programs, and Matches views
   - Maintain state of active tab

2. **Sponsors View**
   - Display all sponsors in grid
   - Show: logo, name, description, categories, location, website

3. **Programs View**
   - Display all youth sports programs in grid
   - Show: name, sport, age range, description, needs, location

4. **Matches View**
   - Display suggested sponsor-program matches
   - Show static list of 3 example matches:
     - Nike → AVHS Football (Equipment + Funding)
     - Local Sports Bar → Apple Valley Youth Soccer (Funding + Venue)
     - Valley Orthodontics → Farmington Little League (Services)

### User Interactions

- Click tab → Switch view to that tab's content
- No other interactive features in MVP (read-only display)

### Edge Cases

- Long text: Truncate with ellipsis where needed
- Counts: Display count next to tab names

---

## 4. Acceptance Criteria

1. ✅ Header displays app title and tagline
2. ✅ Three tabs visible: Sponsors, Programs, Matches
3. ✅ Clicking tabs switches content correctly
4. ✅ Sponsors tab shows sponsor cards in grid
5. ✅ Programs tab shows program cards in grid
6. ✅ Matches tab shows suggested matches with descriptions
7. ✅ Card content displays all relevant information
8. ✅ Responsive layout works on mobile/tablet/desktop
9. ✅ Build completes successfully to dist/ folder
