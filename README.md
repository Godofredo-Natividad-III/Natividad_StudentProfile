# Natividad Student Profile```

## Project Description

This project is a responsive multi-page Student Profile mobile application developed using Apache Cordova, HTML, and CSS. It was created as part of my IT coursework.

The application presents my personal information, background, skills, projects, and contact information through separate pages with consistent navigation and responsive design.

## Application Pages

### 1. Profile

The Profile page serves as the homepage of the application. It introduces me with my profile picture, complete name, short tagline, and a brief description.

### 2. About

The About page contains my personal introduction, interests, educational background, and goals.

### 3. Skills

The Skills page displays my programming, web development, problem-solving, and communication skills with short descriptions for each skill.

### 4. Projects

The Projects page shows sample projects I have worked on. Each project includes a project title, description, my role or contribution, and the technologies or tools used.

### 5. Contact

The Contact page provides my email address, GitHub profile, and social media contact information.

## Navigation

The application uses standard HTML links to navigate between the five pages:

- Profile
- About
- Skills
- Projects
- Contact

Each page contains the same navigation menu, allowing users to easily move between pages and return to the Profile homepage.

No JavaScript is required for navigation.

## Responsive Design

The application is designed to work properly on different screen sizes, including:

- Desktop
- Tablet
- Mobile

CSS media queries are used to adjust the layout, navigation, spacing, font sizes, and content cards for different screen widths.

The responsive design helps prevent horizontal scrolling, overlapping content, cut-off text, and distorted images.

## UI/UX

The application uses a consistent blue-and-white color scheme, readable typography, clear headings, organized content sections, and easy-to-use navigation buttons.

The design focuses on:

- Consistent layout across all pages
- Clear visual hierarchy
- Readable text
- Proper spacing
- Easy navigation
- Mobile-friendly design
- Accessibility-friendly links
- Descriptive alternative text for the profile image

## Project Structure

```text
Natividad_StudentProfile
├── www
│   ├── index.html
│   ├── about.html
│   ├── skills.html
│   ├── projects.html
│   ├── contact.html
│   ├── css
│   │   └── index.css
│   └── img
│       └── profile.jpg
├── screenshots
│   ├── profile.png
│   ├── about.png
│   ├── skills.png
│   ├── projects.png
│   └── contact.png
├── config.xml
├── package.json
└── README.md
```

## How to Run
```


1. Install Node.js and Apache Cordova.
2. Open the project folder in Visual Studio Code.
3. Open the terminal in the project folder.
4. Install the project dependencies.
5. Add the Android platform if needed.
6. Start an Android emulator.
7. Make sure the emulator is connected.
8. Run the application using:

```text
cordova run android.
```


## Screenshots

### Profile

![Profile Screenshot](screenshots/profile.png)

### About

![About Screenshot](screenshots/about.png)

### Skills

![Skills Screenshot](screenshots/skills.png)

### Projects

![Projects Screenshot](screenshots/projects.png)

### Contact

![Contact Screenshot](screenshots/contact.png)