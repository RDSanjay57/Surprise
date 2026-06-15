// ======================
// LOGIN SETTINGS
// ======================

const SECRET_CODE = "US";

let attempts = 0;

let currentDoor = null;
let currentStep = 0;
let pageHistory = [];
let viewedDoors = [];
let eyeState = 0;

function swapEyes() {

    const eye =
        document.getElementById(
            "eyeImage"
        );

    const text =
        document.getElementById(
            "eyeDescription"
        );

    eye.classList.add(
        "eyeFade"
    );

    setTimeout(() => {

        if (eyeState === 0) {

            eye.src =
                "assets/sanj.png";

            text.innerText =
                "And somehow, they became my favorite view 🦋";

            eyeState = 1;

        }

        else {

            eye.src =
                "assets/urmi.png";

            text.innerText =
                "The first thing that caught my attention was your eyes ✨";

            eyeState = 0;

        }

        eye.classList.remove(
            "eyeFade"
        );

    }, 400);

}
function resetTheme() {

    document.body.classList.remove(
        "theme1",
        "theme2",
        "theme3"
    );

}
function revealUS() {

    document
        .querySelector(".usContainer")
        .classList.add("showUS");

    document
        .getElementById("revealBtn")
        .style.display = "none";

    document
        .getElementById("eyeDescription")
        .style.display = "none";

    document
        .getElementById("eyeImage")
        .classList.add("revealedEyes");

}
// ======================
// MEMORY DATA
// EDIT THIS SECTION
// ======================

const memories = {

    1: {
        place: "THEERTHAGIRI",

        date: "MARCH 2nd",

        quote:[
        "👥💬 1 Month Of Our Not Meeting in Person👥💬 ",
        "🦋 🐼 🧿 MISSSS YOUUUUUUUUUUUU 🦋 🐼 🧿"
    ],


        images: [
            "assets/door1/1.jpg",
            "assets/door1/2.jpg",
            "assets/door1/3.jpg",
            "assets/door1/4.jpg",
            "assets/door1/5.jpg",
            "assets/door1/6.jpg",
            "assets/door1/7.jpg",
            "assets/door1/8.jpg",
            "assets/door1/9.jpg",
            "assets/door1/10.jpg",
            "assets/door1/11.jpg"
        ]
    },

    2: {
        place: "VELLORE FORT",

        date: "MARCH 8th",

        quote:[
        "💪 1 Month Of Not Hitting Me 💪",
        "🦋 🐼 🧿 MISSSS YOUUUUUUUUUUUU 🦋 🐼 🧿"
        ],
        images: [
            "assets/door2/1.jpg",
            "assets/door2/2.jpg",
            "assets/door2/3.jpg",
            "assets/door2/4.jpg",
            "assets/door2/5.jpg",
            "assets/door2/6.jpg",
            "assets/door2/7.jpg",
            "assets/door2/8.jpg",
            "assets/door2/9.jpg",
            "assets/door2/10.jpg",
            "assets/door2/11.jpg"
        ]
    },

    3: {
        place: "RATHNAGIRI",

        date: "APRIL 14th",

        quote:[
        "🫴🏻 1 Month Of Not Holding Hands 🫴🏻",
        "🦋 🐼 🧿 MISSSS YOUUUUUUUUUUUU 🦋 🐼 🧿"
        ],
        images: [
            "assets/door3/1.jpg",
            "assets/door3/2.jpg",
            "assets/door3/3.jpg",
            "assets/door3/4.jpg",
            "assets/door3/5.jpg",
            "assets/door3/6.jpg",
            "assets/door3/7.jpg",
            "assets/door3/8.jpg",
            "assets/door3/9.jpg",
            "assets/door3/10.jpg",
            "assets/door3/11.jpg"
        ]
    }

};
function resetMemoryFlow() {

    currentDoor = null;

    currentStep = 0;

    document
        .getElementById("placeStep")
        ?.classList.add("hidden");

    document
        .getElementById("dateStep")
        ?.classList.add("hidden");

    document
        .getElementById("quoteStep")
        ?.classList.add("hidden");

    document
        .getElementById("gallery")
        ?.classList.add("hidden");

    document
        .getElementById("doorsBtn")
        ?.classList.add("hidden");

    document
        .getElementById("gallery")
        .innerHTML = "";

}
// ======================
// HELPERS
// ======================

function showScreen(id) {
    if(

        id === "doorScreen" ||
        id === "usScreen" ||
        id === "loginScreen"

    ){

        resetTheme();

    }
    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });

    document
        .getElementById(id)
        .classList.add("active");

    const nav =
        document.querySelector(
            ".floatingNav"
        );

    if (id === "loginScreen") {

        nav.style.display =
            "none";

    }

    else {

        nav.style.display =
            "flex";

    }


}
function goUS() {

    resetTheme();

    resetMemoryFlow();

    const desc =
        document.getElementById(
            "eyeDescription"
        );

    if(desc){

        desc.innerHTML =
        "The first thing that caught my attention was your eyes ✨";

    }
    document
        .getElementById(
            "eyeImage"
        ).src =
        "assets/urmi.png";


    document
        .querySelector(
            ".usContainer"
        )
        .classList.remove(
            "showUS"
        );
    document
        .getElementById(
            "eyeDescription"
        )
        .style.display =
        "block";
    document
        .getElementById(
            "revealBtn"
        ).style.display =
        "block";

    showScreen(
        "usScreen"
    );

}
function showPopup(text) {

    const popup =
        document.getElementById("popup");

    popup.innerText = text;

    popup.classList.add("show");

    setTimeout(() => {

        popup.classList.remove("show");

    }, 2500);
}

// ======================
// LOGIN
// ======================

document
    .getElementById("loginBtn")
    .addEventListener("click", login);

function login() {

    const value =
        document
        .getElementById("secretCode")
        .value
        .trim();

    if (value === SECRET_CODE) {

        const music =
            document.getElementById("bgMusic");

        music.play().catch(() => {});

        showScreen("usScreen");

    } else {

        attempts++;

        if (attempts === 1) {

            showPopup(
                "Adiyeeeee Think Pannuu 😏"
            );

        }

        else if (attempts === 2) {

            showPopup(
                "Oiiiii athu verum 2 letters 😂"
            );

        }

        else {

            showPopup(
                "IN CAPS 😑"
            );

        }
    }
}

// ======================
// DOOR OPENING
// ======================

function openDoor(id) {

    currentDoor = id;
    currentStep = 0;

    showScreen("openingScreen");

    const openingDoor =
        document.querySelector(
            "#openingDoor .doorFront"
        );

    openingDoor.classList.remove(
        "openingDoor1",
        "openingDoor2",
        "openingDoor3"
    );

    openingDoor.classList.add(
        "openingDoor" + id
    );

    const light =
        document.querySelector(
           ".lightBurst"
        );

    light.classList.remove(
        "lightShow"
    );

    void light.offsetWidth;

    const door =
       document.querySelector(
           "#openingDoor .doorFront"
        );

    door.classList.remove( "openDoorAnim" ); 
    void door.offsetWidth; 
    door.classList.add( "openDoorAnim" );
    setTimeout(() => {

        document
            .querySelector(".lightBurst")
            .classList.add(
                "lightShow"
            );

    }, 3300);

    setTimeout(() => {

        startMemory(id);

    }, 4500);

}

// ======================
// MEMORY START
// ======================

function startMemory(id) {
    document.body.classList.remove(
    "theme1",
    "theme2",
    "theme3"
    );

    document.body.classList.add(
       "theme" + id
    );
    const memory =
        memories[id];

    showScreen(
        "memoryScreen"
    );

    document
        .getElementById("placeText")
        .innerText =
        memory.place;

    document
        .getElementById("dateText")
        .innerText =
        memory.date;

    document.getElementById(
        "quoteText"
    ).innerHTML =
        memories[currentDoor]
        .quote
        .join("<br>");

    document
        .getElementById("placeStep")
        .classList.remove("hidden");

    document
        .getElementById("dateStep")
        .classList.add("hidden");

    document
        .getElementById("quoteStep")
        .classList.add("hidden");

    document
        .getElementById("gallery")
        .classList.add("hidden");

    document
        .getElementById("doorsBtn")
        .classList.add("hidden");

}

// ======================
// NEXT BUTTON
// ======================

function nextStep() {

    currentStep++;

    if (currentStep === 1) {

        document
            .getElementById("placeStep")
            .classList.add("hidden");

        document
            .getElementById("dateStep")
            .classList.remove("hidden");

    }

    else if (currentStep === 2) {

        document
            .getElementById("dateStep")
            .classList.add("hidden");

        document
            .getElementById("quoteStep")
            .classList.remove("hidden");

    }

}

// ======================
// PHOTOS
// ======================

function showPhotos() {

    document
        .getElementById("quoteStep")
        .classList.add("hidden");

    document
        .getElementById("gallery")
        .classList.remove("hidden");

    revealPhotos();

}

// ======================
// PHOTO REVEAL
// ======================

function revealPhotos() {

    const gallery =
        document.getElementById(
            "gallery"
        );

    gallery.innerHTML = "";

    const images =
        memories[currentDoor]
        .images;

    const positions = [

        {top:30,left:5},
        {top:70,left:23},
        {top:30,left:40},
        {top:50,left:75},
        {top:80,left:58},
        {top:400,left:2},
        {top:380,left:20},
        {top:400,left:36},

        {top:380,left:53},


        {top:400,left:70},
        {top:380,left:85}

    ];

    images.forEach(
        (img, index) => {

            const photo =
                document.createElement(
                    "img"
                );

            photo.src = img;

            photo.className =
                "memoryPhoto";

            photo.style.position =
                "absolute";

            photo.style.top =
                positions[index].top + "px";

            photo.style.left =
                positions[index].left + "%";

            photo.style.opacity =
                "0";

            photo.style.transform =
                "scale(.7)";

            photo.style.zIndex =
                index + 1;

            photo.onclick =
                () => {

                    showPhoto(img);

                };

            gallery.appendChild(
                photo
            );

            setTimeout(() => {

                photo.style.transition =
                    "1s ease";

                photo.style.opacity =
                    "1";

                photo.style.transform =
                    `scale(1) rotate(${Math.random()*12-6}deg)`;

            }, index * 800);

        });

    setTimeout(() => {

        document
            .getElementById(
                "doorsBtn"
            )
            .classList
            .remove(
                "hidden"
            );

    }, images.length * 800);

    if (
        !viewedDoors.includes(
            currentDoor
        )
    ) {

        viewedDoors.push(
            currentDoor
        );

    }

    checkFinalUnlock();

}
function showPhoto(src){

    const popup =
        document.getElementById(
            "photoPopup"
        );

    const image =
        document.getElementById(
            "popupImage"
        );

    image.src = src;

    popup.style.display =
        "flex";

}

document
    .getElementById(
        "photoPopup"
    )
    .addEventListener(
        "click",
        function(){

            this.style.display =
                "none";

        }
    );
// ======================
// BACK TO DOORS
// ======================

function backToDoors() {

    resetTheme();

    resetMemoryFlow();

    showScreen(
        "doorScreen"
    );

}
// ======================
// FINAL HEART
// ======================

function checkFinalUnlock() {

    if (
        viewedDoors.length === 3
    ) {

        setTimeout(() => {

            showScreen(
                "finalScreen"
            );

        }, 3000);

    }

}


// ======================
// MUSIC BUTTON
// ======================

document
.getElementById(
    "musicBtn"
)
.addEventListener(
"click",
function(){

    const music =
        document.getElementById(
            "bgMusic"
        );

    if (
        music.paused
    ) {

        music.play();

    }

    else {

        music.pause();

    }

});

// ======================
// ENTER KEY
// ======================

document
.getElementById(
    "secretCode"
)
.addEventListener(
"keypress",
function(e){

    if(
        e.key === "Enter"
    ){

        login();

    }

});
function goLogin() {

    resetTheme();

    resetMemoryFlow();

    eyeState = 0;

    document
        .getElementById(
            "eyeImage"
        ).src =
        "assets/urmi.png";

    document
        .getElementById(
            "eyeDescription"
        ).innerText =
        "The first thing that caught my attention was your eyes ✨";

    document
        .querySelector(
            ".usContainer"
        )
        .classList.remove(
            "showUS"
        );

    document
        .getElementById(
            "revealBtn"
        ).style.display =
        "block";

    document
        .getElementById(
            "secretCode"
        ).value = "";

    showScreen(
        "loginScreen"
    );

}

function goPrevious(){
    if(
        previousPage === "doorScreen" ||
        previousPage === "usScreen" ||
        previousPage === "loginScreen"
    ){

        resetTheme();

    }
    const placeStep =
        document.getElementById(
            "placeStep"
        );

    const dateStep =
        document.getElementById(
            "dateStep"
        );

    const quoteStep =
        document.getElementById(
            "quoteStep"
        );

    const gallery =
        document.getElementById(
            "gallery"
        );

    if(
        !gallery.classList.contains(
            "hidden"
        )
    ){

        gallery.classList.add(
            "hidden"
        );

        quoteStep.classList.remove(
            "hidden"
        );

        return;

    }

    if(
        !quoteStep.classList.contains(
            "hidden"
        )
    ){

        quoteStep.classList.add(
            "hidden"
        );

        dateStep.classList.remove(
            "hidden"
        );

        return;

    }

    if(
        !dateStep.classList.contains(
            "hidden"
        )
    ){

        dateStep.classList.add(
            "hidden"
        );

        placeStep.classList.remove(
            "hidden"
        );

        return;

    }

    if(
        !placeStep.classList.contains(
            "hidden"
        )
    ){

        showScreen(
            "doorScreen"
        );

        return;

    }

    if(
        document
        .getElementById(
            "doorScreen"
        )
        .classList.contains(
            "active"
        )
    ){

        showScreen(
            "usScreen"
        );

        return;

    }

    alert(
        "No Previous Page 🦋"
    );

}
document.addEventListener(
    "DOMContentLoaded",
    function(){

        const nav =
            document.querySelector(
                ".floatingNav"
            );

        nav.style.display =
            "none";

    }
);
