# Natividad Student Profile

## Project Description

This project is an improved Student Profile mobile application developed using Apache Cordova, HTML, and CSS. It presents personal information, interests, educational background, goals, and programming skills in a clean and responsive layout.

The application was improved from Activity 2 to Activity 3 by adding responsive design for Desktop, Tablet, and Mobile screen sizes, better spacing, typography, visual hierarchy, accessible controls, and a consistent visual design.

## Application Structure

```text
Natividad_StudentProfile/
│
├── www/
│   ├── css/
│   │   └── index.css
│   ├── img/
│   │   └── profile.jpg
│   └── index.html
│
├── config.xml
├── package.json
├── README.md
└── platforms/
```markdown
## Responsive Design

The application uses CSS media queries to provide a responsive layout for different screen sizes.

- **Desktop:** Skills are displayed in 3 columns.
- **Tablet:** Skills are displayed in 2 columns.
- **Mobile:** Skills are displayed in 1 column.
- Navigation controls adjust to smaller screens.
- Text, spacing, profile image, and content areas resize appropriately.
- The layout prevents horizontal scrolling and keeps content readable.

## UI/UX Principles Applied

### Responsive Layout
The layout adapts to Desktop, Tablet, and Mobile screen sizes.

### Mobile-Friendly Spacing
Spacing and padding are adjusted for smaller screens to make the content comfortable to read and interact with.

### Typography
Readable font sizes, line spacing, and headings are used to improve readability.

### Visual Hierarchy
Headings, sections, skill cards, and navigation controls are visually organized so important information is easy to find.

### Usable Controls
Navigation links have sufficient size and spacing for comfortable clicking or tapping.

### Accessibility
Readable text, clear headings, visible focus states, and good spacing are used to make the application easier to access and use.

### Consistent Design
The same colors, card styles, spacing, typography, and navigation style are maintained throughout the application.

## Navigation

The application uses same-page HTML anchor navigation.

- **About** links to the About section.
- **Skills** links to the Skills section.

No JavaScript is used for navigation.

## Responsive Screenshots

### Desktop Layout

Desktop view displays the six skills in three columns.

### Tablet Layout

Tablet view displays the six skills in two columns.

### Mobile Layout

Mobile view displays the skills in one column with stacked navigation controls.

## How to Run

1. Install Node.js and Apache Cordova.
2. Open the project folder in Visual Studio Code.
3. Install the project dependencies:

```bash
npm install
```bash
cordova platform add android
```bash
cordova build android
```bash
cordova run android
## Responsive Screenshots

### Desktop
<img width="1916" height="1038" alt="image" src="https://github.com/user-attachments/assets/49be769d-e550-41bc-ae1a-9a3fee9e98e0" />


### Tablet
<img width="1272" height="1039" alt="Screenshot 2026-09-09 224922" src="https://github.com/user-attachments/assets/bf1722c9-18eb-4654-a2da-90711d3c252a" />


### Mobile
<img width="1358" height="1034" alt="Screenshot 2026-09-09 225237" src="https://github.com/user-attachments/assets/e1bd7ded-ff93-42f9-93f7-c082ac334724" />


