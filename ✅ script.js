document.addEventListener("DOMContentLoaded", function () {
    console.log("National Koli News website loaded successfully!");

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            alert("Thank you for visiting National Koli News!");
        });
    });
});