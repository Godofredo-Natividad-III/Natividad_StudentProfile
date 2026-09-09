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
```

## Responsive Design

The application uses CSS media queries to provide a responsive layout for different screen sizes.

### Desktop

The desktop layout displays the six skills in three columns. The content area is wider and provides comfortable spacing for larger screens.

### Tablet

The tablet layout displays the six skills in two columns. Spacing and font sizes are adjusted to fit tablet screens comfortably.

### Mobile

The mobile layout displays the skills in one column. The navigation controls are stacked vertically to make them easier to use on smaller screens.

## UI/UX Principles Applied

The following UI/UX principles were applied:

- **Responsive Layout** – The application adjusts to Desktop, Tablet, and Mobile screen sizes.
- **Mobile-Friendly Spacing** – Padding, margins, and spacing are adjusted for smaller screens.
- **Typography** – Clear and readable fonts and appropriate font sizes are used.
- **Visual Hierarchy** – Headings, sections, and skill cards are organized clearly.
- **Usable Controls** – Navigation links have sufficient size and spacing for easy clicking or tapping.
- **Accessibility** – Clear text, readable contrast, focus states, and simple navigation are provided.
- **Consistent Design** – Colors, borders, spacing, and card styles are consistent throughout the application.

## Navigation

The application uses same-page navigation through HTML anchor links.

- **About** – Links to the About section.
- **Skills** – Links to the Skills section.

No JavaScript is used for navigation.

## Responsive Screenshots

### Desktop

<img width="1916" height="1038" alt="Desktop Screenshot" src="https://github.com/user-attachments/assets/49be769d-e550-41bc-ae1a-9a3fee9e98e0" />

### Tablet

<img width="1272" height="1039" alt="Screenshot 2026-09-09 224922" src="https://github.com/user-attachments/assets/3c7a52bb-cb8e-4c38-bfdf-3c5c01be5d9e" />


### Mobile

<img width="1358" height="1034" alt="Screenshot 2026-09-09 225237" src="https://github.com/user-attachments/assets/6798c53d-2f01-4403-92a5-cb2bc10f43f9" />


## How to Run

1. Install Node.js and Apache Cordova.
2. Open the project folder in Visual Studio Code.
3. Install the project dependencies:

```bash
npm install
```

4. Add the Android platform:

```bash
cordova platform add android
```

5. Build the Android application:

```bash
cordova build android
```

6. Run the application on the Android emulator:

```bash
cordova run android
```

## Technologies Used

- Apache Cordova
- HTML5
- CSS3
- Android Emulator
- Visual Studio Code

## Author

**Godofredo Tan Natividad III**

© 2026 Godofredo Tan Natividad III. All Rights Reserved.
