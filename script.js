<button id="welcomeBtn">Say Hello!</button>
document.getElementById("welcomeBtn").addEventListener("click", function() {
    alert("Hello! Welcome to my portfolio.");
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
