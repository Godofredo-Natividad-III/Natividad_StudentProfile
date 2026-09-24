# Natividad Student Profile

## Project Description

This project is a responsive multi-page Student Profile mobile application developed using Apache Cordova, HTML, CSS, and JavaScript. It was created as part of my IT coursework.

The application presents my personal information, background, skills, projects, and contact information through separate pages with consistent navigation and responsive design.

The application also includes an **Edit Profile** feature that allows the user to update profile information dynamically and save the changes using browser localStorage.

The application was further enhanced with a **Camera Integration** feature that allows the user to capture and change their profile picture using the device camera.

## Application Pages

### 1. Profile

The Profile page serves as the homepage of the application. It introduces me with my profile picture, complete name, short tagline, and a brief description.

It also includes the **Edit Profile** feature where the user can update:

* Full Name
* Course
* Year Level
* About Me
* Skills

The Profile page also includes a **Change Profile Picture** button that allows the user to capture a new profile picture using the device camera.

### 2. About

The About page contains my personal introduction, interests, educational background, and goals.

### 3. Skills

The Skills page displays my programming, web development, problem-solving, and communication skills with short descriptions for each skill.

### 4. Projects

The Projects page shows sample projects I have worked on. Each project includes a project title, description, my role or contribution, and the technologies or tools used.

### 5. Contact

The Contact page provides my email address, GitHub profile, and social media contact information.

## Profile Editing

The Profile page includes an **Edit Profile** function.

The user can:

* Open the Edit Profile form
* Update their Full Name
* Update their Course
* Update their Year Level
* Update their About Me information
* Update their Skills
* Save changes
* Cancel changes

The profile information is updated dynamically without manually changing the HTML content.

## JavaScript Functionality

JavaScript is used to manage the Edit Profile feature and camera integration.

The JavaScript:

* Loads the saved profile information
* Displays profile information dynamically
* Opens and closes the Edit Profile form
* Validates required fields
* Saves updated information
* Updates the profile after saving
* Handles the Cancel button
* Opens the device camera
* Receives the captured image
* Displays the captured image as the profile picture
* Saves the profile picture for later use

The following fields are required:

* Full Name
* Course
* Year Level
* About Me
* Skills

Appropriate validation feedback is displayed when required information is missing.

## Local Storage

The application uses **localStorage** to save the profile information.

The saved information includes:

* Full Name
* Course
* Year Level
* About Me
* Skills

The captured profile picture is also saved using localStorage.

This allows the updated profile information and profile picture to remain available after closing and reopening the application.

If no saved profile information exists, the application uses the default profile information.

If no saved profile picture exists, the application uses the default profile picture.

## Activity 6 - Camera Integration

The Student Profile application was extended with a camera feature using the **Cordova Camera Plugin**.

### Camera Feature

The Profile page includes a **Change Profile Picture** button.

The user can:

* Open the device camera
* Capture a photo
* Preview the captured photo in the profile
* Retake the photo by capturing another image
* Cancel the camera without changing the current profile picture

The captured image is displayed immediately as the new profile picture.

When another photo is captured, it replaces the previous profile picture.

### Cordova Camera Plugin

The application uses the **cordova-plugin-camera** plugin.

The plugin allows JavaScript to communicate with the native device camera.

The plugin was installed using:

```text
cordova plugin add cordova-plugin-camera
```

The installed plugin is:

```text
cordova-plugin-camera 8.0.0
```

The application uses the Cordova Camera API:

```text
navigator.camera.getPicture()
```

JavaScript calls the Cordova Camera API, the native Android camera opens, and the captured image is returned to the application.

### How the Camera Works

The camera feature follows these steps:

1. The user presses **Change Profile Picture**.
2. JavaScript checks if the Cordova Camera API is available.
3. The device camera is opened.
4. The user captures a photo.
5. The camera returns the image to the application.
6. The image is displayed as the new profile picture.
7. The image is saved using localStorage.
8. The saved image is loaded again when the application starts.

### Image Preview

After taking a photo, the captured image is immediately displayed in the Profile page.

This allows the user to preview the new profile picture without manually selecting an image file.

### Retake Photo

The user can press **Change Profile Picture** again and capture another photo.

The new photo replaces the previous profile picture.

### Image Persistence

The captured profile picture is converted into a Base64 image and saved using localStorage.

The saved profile picture is loaded again when the application starts.

This allows the profile picture to remain after closing and reopening the application.

### Camera Cancellation

If the user cancels the camera, the application does not crash.

The previous profile picture remains unchanged.

An appropriate message is displayed to inform the user that the camera was cancelled or unavailable.

### Camera Error Handling

The application also handles camera errors.

If the camera is unavailable or an error occurs, the application displays a message and keeps the current profile picture.

This prevents the application from crashing.

## Why Cordova?

Apache Cordova allows a web-based application using HTML, CSS, and JavaScript to access native device features.

For this project, Cordova is used to connect the JavaScript application to the device camera.

The Camera Plugin provides the native camera functionality while the application interface remains built using HTML, CSS, and JavaScript.

## JavaScript and Device Communication

The application communicates with the native device camera through the Cordova Camera API.

The JavaScript code calls:

```text
navigator.camera.getPicture()
```

The Cordova Camera Plugin processes the request and opens the native device camera.

After the user captures a photo, the image data is returned to the JavaScript code.

The JavaScript then displays the image and saves it using localStorage.

## Navigation

The application uses standard HTML links to navigate between the five pages:

* Profile
* About
* Skills
* Projects
* Contact

Each page contains the same navigation menu, allowing users to easily move between pages and return to the Profile homepage.

No JavaScript is required for page navigation.

## Responsive Design

The application is designed to work properly on different screen sizes, including:

* Desktop
* Tablet
* Mobile

CSS media queries are used to adjust the layout, navigation, spacing, font sizes, and content cards for different screen widths.

The responsive design helps prevent horizontal scrolling, overlapping content, cut-off text, and distorted images.

## UI/UX

The application uses a consistent blue-and-white color scheme, readable typography, clear headings, organized content sections, and easy-to-use navigation buttons.

The design focuses on:

* Consistent layout across all pages
* Clear visual hierarchy
* Readable text
* Proper spacing
* Easy navigation
* Mobile-friendly design
* Accessibility-friendly links
* Descriptive alternative text for the profile image
* Simple and clear profile editing controls
* Easy access to the camera feature

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
│   ├── js
│   │   └── profile.js
│   └── img
│       └── profile.jpg
├── screenshots
│   ├── profile.png
│   ├── about.png
│   ├── skills.png
│   ├── projects.png
│   ├── contact.png
│   ├── edit-profile.png
│   └── updated-profile.png
├── config.xml
├── package.json
└── README.md
```

## How to Run

1. Install Node.js and Apache Cordova.
2. Open the project folder in Visual Studio Code.
3. Open the terminal in the project folder.
4. Install the project dependencies.
5. Add the Android platform if needed.
6. Start an Android emulator or connect an Android device.
7. Make sure the device or emulator is connected.
8. Run the application using:

```text
cordova run android
```

The camera feature must be tested using the Cordova Android application because it uses the native device camera.

## Activity 5 Testing

The following functions were tested successfully:

* Edit Profile and Save
* Cancel editing
* Empty-field validation
* Profile persistence after closing and reopening
* Multiple profile updates

All five Activity 5 tests work successfully.

## Activity 6 Testing

The following camera functions are included for testing:

* Open Camera
* Capture Photo
* Retake Photo
* Cancel Camera
* Restart Application
* Camera Error

The application is designed to keep the previous profile picture when the camera is cancelled or unavailable.

## Screenshots

### Profile

![Profile Screenshot](screenshots/profile.png)

### Edit Profile

![Edit Profile Screenshot](screenshots/edit-profile.png)

### Updated Profile

![Updated Profile Screenshot](screenshots/updated-profile.png)

### About

![About Screenshot](screenshots/about.png)

### Skills

![Skills Screenshot](screenshots/skills.png)

### Projects

![Projects Screenshot](screenshots/projects.png)

### Contact

![Contact Screenshot](screenshots/contact.png)