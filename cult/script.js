/* ==========================================
   PANDIST CULT
   MAIN SCRIPT
========================================== */


/* ==========================================
   RAILWAY API
========================================== */

const API_URL =
    "https://thorough-commitment.up.railway.app";


/* ==========================================
   INTRO ELEMENTS
========================================== */

const ominousSound =
    document.getElementById("ominousSound");

const introScreen =
    document.getElementById("introScreen");

const introText =
    document.getElementById("introText");

const cultInterface =
    document.getElementById("cultInterface");


/* ==========================================
   INTRO MESSAGES
========================================== */

const introMessages = [

    "BARRIER BREACHED.",

    "NETWORK CONNECTION ESTABLISHED.",

    "IDENTITY: UNKNOWN",

    "CURSED ENERGY: DETECTED",

    "YOU HAVE ENTERED PANDIST TERRITORY."

];


let introIndex = 0;


/* ==========================================
   FINAL MESSAGE
========================================== */

const endMessages = [

    "YOU ARE TRULY UNEMPLOYED.",

    "REGARDLESS OF WHETHER YOU ARE A MEMBER OF THE PANDIST CULT OR NOT...",

    "YOU HAVE SHOWN YOUR WORTH.",

    "JOIN US.",

    "OR...",

    "IF YOU ARE ALREADY ONE OF US...",

    "NO WORRIES. EITHER WAY...",

    "WELCOME HOME, COMRADE.",

    "WE HAVE BEEN EXPECTING YOU."

];


/* ==========================================
   INTRO MESSAGE SYSTEM
========================================== */

function showIntroMessage() {

    if (introIndex >= introMessages.length) {

        /*
            Pause between the initial
            system messages and the
            final message sequence.
        */

        setTimeout(() => {

            finishIntro();

        }, 3000);

        return;

    }


    introText.textContent =
        introMessages[introIndex];


    introText.style.opacity = "0";


    setTimeout(() => {

        introText.style.opacity = "1";

    }, 100);


    setTimeout(() => {

        introText.style.opacity = "0";

    }, 1500);


    setTimeout(() => {

        introIndex++;

        showIntroMessage();

    }, 2000);

}


/* ==========================================
   FINISH INTRO
========================================== */

function finishIntro() {

    let lineIndex = 0;


    introText.style.opacity = "0";

    introText.textContent = "";


    function showNextLine() {

        if (lineIndex >= endMessages.length) {

            setTimeout(() => {

                introScreen.style.opacity = "0";


                setTimeout(() => {

                    introScreen.style.display =
                        "none";


                    cultInterface.classList.add(
                        "visible"
                    );

                }, 1000);

            }, 1800);


            return;

        }


        introText.style.opacity = "0";


        setTimeout(() => {

            introText.textContent =
                endMessages[lineIndex];


            introText.style.opacity = "1";


            lineIndex++;

        }, 300);


        setTimeout(() => {

            showNextLine();

        }, 2000);

    }


    showNextLine();

}


/* ==========================================
   START INTRO
========================================== */

introScreen.style.transition =
    "opacity 1s ease";

introText.style.transition =
    "opacity .4s ease";


/*
    Play intro sound.

    This is separate from the four
    entrance sounds.
*/

if (ominousSound) {

    ominousSound.currentTime = 0;

    ominousSound.play().catch(() => {

        console.log(
            "Audio autoplay blocked by browser."
        );

    });

}


showIntroMessage();


/* ==========================================
   NAVIGATION
========================================== */

const navButtons =
    document.querySelectorAll(".navButton");

const archiveCards =
    document.querySelectorAll(".archiveCard");

const pages =
    document.querySelectorAll(".page");

const pageTitle =
    document.getElementById("pageTitle");


/* ==========================================
   OPEN PAGE
========================================== */

function openPage(pageID) {

    pages.forEach(page => {

        page.classList.remove(
            "activePage"
        );

    });


    navButtons.forEach(button => {

        button.classList.remove(
            "active"
        );

    });


    const target =
        document.getElementById(pageID);


    if (!target) {

        console.error(
            "Page not found:",
            pageID
        );

        return;

    }


    target.classList.add(
        "activePage"
    );


    const matchingButton =
        document.querySelector(
            `.navButton[data-page="${pageID}"]`
        );


    if (matchingButton) {

        matchingButton.classList.add(
            "active"
        );

    }


    pageTitle.textContent =
        pageID
            .replace("-", " ")
            .toUpperCase();


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    /*
        Load Railway messages whenever
        the Comms page is opened.
    */

    if (pageID === "comms") {

        loadMessages();

    }

}


/* ==========================================
   SIDEBAR BUTTONS
========================================== */

navButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const page =
                button.dataset.page;


            openPage(page);

        }
    );

});


/* ==========================================
   ARCHIVE CARDS
========================================== */

archiveCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const page =
                card.dataset.page;


            openPage(page);

        }
    );

});


/* ==========================================
   COMMS ELEMENTS
========================================== */

const messagesContainer =
    document.getElementById("messages");

const messageForm =
    document.getElementById("messageForm");

const usernameInput =
    document.getElementById("username");

const messageInput =
    document.getElementById("messageInput");


/* ==========================================
   LOAD MESSAGES FROM RAILWAY
========================================== */

async function loadMessages() {

    if (!messagesContainer) {

        return;

    }


    try {

        const response =
            await fetch(
                `${API_URL}/api/messages`
            );


        if (!response.ok) {

            throw new Error(
                "Failed to load messages."
            );

        }


        const messages =
            await response.json();


        messagesContainer.innerHTML = "";


        if (
            !Array.isArray(messages) ||
            messages.length === 0
        ) {

            messagesContainer.innerHTML = `

                <div class="messageLoading">

                    NO COMMUNICATIONS RECORDED.

                </div>

            `;

            return;

        }


        messages.forEach(message => {

            displayMessage(message);

        });


        scrollMessagesToBottom();


    } catch (error) {

        console.error(
            "COMMS ERROR:",
            error
        );


        messagesContainer.innerHTML = `

            <div class="messageLoading">

                CONNECTION FAILURE.

            </div>

        `;

    }

}


/* ==========================================
   DISPLAY MESSAGE
========================================== */

function displayMessage(message) {

    const element =
        document.createElement("div");


    element.className =
        "message";


    const user =
        document.createElement("span");


    user.className =
        "messageUser";


    user.textContent =
        message.username;


    const text =
        document.createElement("p");


    text.textContent =
        message.content;


    const time =
        document.createElement("span");


    time.className =
        "messageTime";


    if (message.created_at) {

        time.textContent =
            new Date(
                message.created_at
            ).toLocaleString();

    }


    element.appendChild(user);

    element.appendChild(text);

    element.appendChild(time);


    messagesContainer.appendChild(
        element
    );

}


/* ==========================================
   SEND MESSAGE TO RAILWAY
========================================== */

if (messageForm) {

    messageForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const username =
                usernameInput.value.trim();


            const content =
                messageInput.value.trim();


            if (!username || !content) {

                return;

            }


            const button =
                messageForm.querySelector(
                    "button"
                );


            button.disabled = true;

            button.textContent =
                "TRANSMITTING...";


            try {

                const response =
                    await fetch(
                        `${API_URL}/api/messages`,
                        {

                            method: "POST",

                            headers: {

                                "Content-Type":
                                    "application/json"

                            },

                            body: JSON.stringify({

                                username:
                                    username,

                                content:
                                    content

                            })

                        }
                    );


                if (!response.ok) {

                    throw new Error(
                        "Transmission failed."
                    );

                }


                const message =
                    await response.json();


                /*
                    Clear the empty-state
                    message if present.
                */

                messagesContainer.innerHTML =
                    messagesContainer.innerHTML
                        .replace(
                            /<div class="messageLoading">[\s\S]*?<\/div>/,
                            ""
                        );


                displayMessage(
                    message
                );


                messageInput.value =
                    "";


                scrollMessagesToBottom();


            } catch (error) {

                console.error(
                    "TRANSMISSION ERROR:",
                    error
                );


                alert(
                    "TRANSMISSION FAILED."
                );

            } finally {

                button.disabled =
                    false;


                button.textContent =
                    "TRANSMIT";

            }

        }
    );

}


/* ==========================================
   SCROLL MESSAGES
========================================== */

function scrollMessagesToBottom() {

    if (!messagesContainer) {

        return;

    }


    messagesContainer.scrollTop =
        messagesContainer.scrollHeight;

}


/* ==========================================
   INITIAL COMMS LOAD
========================================== */

loadMessages();
