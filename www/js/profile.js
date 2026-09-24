"use strict";

// =========================================
// DEFAULT PROFILE INFORMATION
// =========================================

const defaultProfile = {

    fullName: "Godofredo Tan Natividad III",

    course: "BS Information Technology",

    yearLevel: "4th Year",

    about:
        "Hello! I am Godofredo Tan Natividad III, an Information Technology student who is interested in learning programming, web development, and other technologies.",

    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ]

};


// =========================================
// GET PROFILE FROM LOCALSTORAGE
// =========================================

function getProfile() {

    const savedProfile =
        localStorage.getItem("studentProfile");

    if (savedProfile) {

        try {

            const parsedProfile =
                JSON.parse(savedProfile);

            return {
                ...defaultProfile,
                ...parsedProfile
            };

        } catch (error) {

            console.error(
                "Error reading profile:",
                error
            );

        }

    }

    return {
        ...defaultProfile
    };

}


// =========================================
// SAVE PROFILE TO LOCALSTORAGE
// =========================================

function saveProfile(profile) {

    localStorage.setItem(
        "studentProfile",
        JSON.stringify(profile)
    );

}


// =========================================
// DISPLAY PROFILE INFORMATION
// =========================================

function displayProfile() {

    const profile = getProfile();


    // Load saved profile picture

    const savedPicture =
        localStorage.getItem("profilePicture");

    if (savedPicture) {

        document.getElementById(
            "profilePicture"
        ).src = savedPicture;

    }


    // Full Name

    document.getElementById(
        "displayFullName"
    ).textContent = profile.fullName;


    // Welcome Name

    document.getElementById(
        "welcomeName"
    ).textContent = profile.fullName;


    // Course in Header

    document.getElementById(
        "displayCourse"
    ).textContent =
        profile.course + " | Aspiring IT Professional";


    // Course in Profile

    document.getElementById(
        "profileCourse"
    ).textContent = profile.course;


    // Year Level

    document.getElementById(
        "displayYearLevel"
    ).textContent = profile.yearLevel;


    // About Me

    document.getElementById(
        "displayAbout"
    ).textContent = profile.about;


    // Skills

    const skillsList =
        document.getElementById(
            "displaySkills"
        );

    skillsList.innerHTML = "";


    profile.skills.forEach(function (skill) {

        const listItem =
            document.createElement("li");

        listItem.textContent = skill;

        skillsList.appendChild(listItem);

    });

}


// =========================================
// OPEN EDIT PROFILE
// =========================================

function openEditProfile() {

    const profile = getProfile();


    document.getElementById(
        "editFullName"
    ).value = profile.fullName;


    document.getElementById(
        "editCourse"
    ).value = profile.course;


    document.getElementById(
        "editYearLevel"
    ).value = profile.yearLevel;


    document.getElementById(
        "editAbout"
    ).value = profile.about;


    document.getElementById(
        "editSkills"
    ).value =
        profile.skills.join(", ");


    document.getElementById(
        "profileView"
    ).hidden = true;


    document.getElementById(
        "editProfileView"
    ).hidden = false;


    document.getElementById(
        "profileError"
    ).textContent = "";

}


// =========================================
// CANCEL EDITING
// =========================================

function cancelEdit() {

    document.getElementById(
        "editProfileView"
    ).hidden = true;


    document.getElementById(
        "profileView"
    ).hidden = false;


    document.getElementById(
        "profileError"
    ).textContent = "";

}


// =========================================
// VALIDATE AND SAVE PROFILE
// =========================================

function handleProfileSave(event) {

    event.preventDefault();


    const fullName =
        document.getElementById(
            "editFullName"
        ).value.trim();


    const course =
        document.getElementById(
            "editCourse"
        ).value.trim();


    const yearLevel =
        document.getElementById(
            "editYearLevel"
        ).value.trim();


    const about =
        document.getElementById(
            "editAbout"
        ).value.trim();


    const skillsText =
        document.getElementById(
            "editSkills"
        ).value.trim();


    const errorMessage =
        document.getElementById(
            "profileError"
        );


    // =====================================
    // VALIDATION
    // =====================================

    if (!fullName) {

        errorMessage.textContent =
            "Please enter your full name.";

        return;

    }


    if (!course) {

        errorMessage.textContent =
            "Please enter your course.";

        return;

    }


    if (!yearLevel) {

        errorMessage.textContent =
            "Please enter your year level.";

        return;

    }


    if (!about) {

        errorMessage.textContent =
            "Please enter your About Me description.";

        return;

    }


    if (!skillsText) {

        errorMessage.textContent =
            "Please enter at least one skill.";

        return;

    }


    // =====================================
    // CONVERT SKILLS INTO ARRAY
    // =====================================

    const skills =
        skillsText
            .split(",")
            .map(function (skill) {

                return skill.trim();

            })
            .filter(function (skill) {

                return skill.length > 0;

            });


    if (skills.length === 0) {

        errorMessage.textContent =
            "Please enter at least one skill.";

        return;

    }


    // =====================================
    // CREATE UPDATED PROFILE
    // =====================================

    const updatedProfile = {

        fullName: fullName,

        course: course,

        yearLevel: yearLevel,

        about: about,

        skills: skills

    };


    // =====================================
    // SAVE PROFILE
    // =====================================

    saveProfile(updatedProfile);


    // =====================================
    // UPDATE DISPLAY
    // =====================================

    displayProfile();


    // =====================================
    // RETURN TO PROFILE VIEW
    // =====================================

    cancelEdit();

}


// =========================================
// CAMERA - CHANGE PROFILE PICTURE
// =========================================

function changeProfilePicture() {

    // Check if Cordova camera is available

    if (
        !navigator.camera ||
        typeof Camera === "undefined"
    ) {

        alert(
            "Camera is only available when running the Cordova Android app."
        );

        return;

    }


    navigator.camera.getPicture(

        function (imageData) {

            // Get profile picture

            const profilePicture =
                document.getElementById(
                    "profilePicture"
                );


            // Create image

            const imageSource =
                "data:image/jpeg;base64," +
                imageData;


            // Display new picture

            profilePicture.src =
                imageSource;


            // Save picture

            localStorage.setItem(
                "profilePicture",
                imageSource
            );

        },


        function (error) {

            console.log(
                "Camera error or cancelled:",
                error
            );


            alert(
                "Camera cancelled or unavailable. Your current profile picture was kept."
            );

        },


        {

            quality: 50,

            destinationType:
                Camera.DestinationType.DATA_URL,

            sourceType:
                Camera.PictureSourceType.CAMERA,

            encodingType:
                Camera.EncodingType.JPEG,

            mediaType:
                Camera.MediaType.PICTURE,

            correctOrientation: true,

            saveToPhotoAlbum: false

        }

    );

}


// =========================================
// INITIALIZE APPLICATION
// =========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // Display saved profile

        displayProfile();


        // Edit Profile Button

        document
            .getElementById(
                "editProfileButton"
            )
            .addEventListener(
                "click",
                openEditProfile
            );


        // Change Profile Picture Button

        document
            .getElementById(
                "changeProfilePictureButton"
            )
            .addEventListener(
                "click",
                changeProfilePicture
            );


        // Cancel Button

        document
            .getElementById(
                "cancelEditButton"
            )
            .addEventListener(
                "click",
                cancelEdit
            );


        // Form Submission

        document
            .getElementById(
                "editProfileForm"
            )
            .addEventListener(
                "submit",
                handleProfileSave
            );

    }
);