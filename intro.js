// 1. REVEAL SECTIONS WHILE SCROLLING

const sections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {threshold: 0.1}
);

sections.forEach(function (section) {
    observer.observe(section);
});

// 2. INTERESTS POP-UP

const popup = document.getElementById("interest-popup");

if (popup) {
    const cards = document.querySelectorAll(".interest-card");

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            document.getElementById("popup-title").textContent = card.querySelector("span").textContent;

            document.getElementById("popup-text").textContent = card.dataset.info;

            document.getElementById("popup-photo").src = card.querySelector("img").src;

            document.getElementById("popup-photo").alt = card.querySelector("img").alt;

            popup.showModal();
        });
    });

    document.getElementById("close-popup").addEventListener("click", function () {
        popup.close();
    });
}

// 3. DREAM JAR

const dreamButton = document.getElementById("dream-button");

if (dreamButton) {
    const dreams = [
        "Create a website I'm truly proud of!",
        "Keep learning and growing every day.",
        "Become a more confident communicator.",
        "Travel and discover beautiful new places.",
        "Make a positive difference through kindness.",
    ];

    let number = 0;

    dreamButton.addEventListener("click", function () {
        document.getElementById("dream-text").textContent = dreams[number];

        number++;

        if (number === dreams.length) {
            number = 0;
        }
    });
}

// 4. FLIP CARDS

const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const title = card.querySelector("h3");
        const description = card.querySelector("p");

        card.classList.toggle("flipped");

        if (card.classList.contains("flipped")) {
            title.textContent = card.dataset.back;
            description.textContent = "Click to go back ♡";
        } else {
            title.textContent = card.dataset.front;
            description.textContent = "Click to flip ♡";
        }
    });
});

// 5. CONTACT FORM DEMO

const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById("form-status").textContent = "This is a demo form. Your message has not been sent. ♡";
    });
}
