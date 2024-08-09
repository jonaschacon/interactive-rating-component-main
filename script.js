const main1 = document.getElementById("main1");
const main2 = document.getElementById("main2");
const buttons = document.querySelectorAll(".rating button");

let userRating = null;

main2.style.display = "none";

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("activate"));
        button.classList.add("activate");

        userRating = button.textContent;
    })
})

function submit() {
    if (userRating) {
        main1.style.display = "none";
        main2.style.display = "flex";
        document.getElementById("showRating").textContent = userRating;
    } else {
        window.alert("Please select a rating before submitting.")
    }
}
