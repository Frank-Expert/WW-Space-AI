// Optional JavaScript for additional interactions
// Typewriting effect
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".service p");
    elements.forEach((element) => {
        const text = element.innerHTML;
        element.innerHTML = "";
        let i = 0;
        const typeEffect = setInterval(() => {
            element.innerHTML += text.charAt(i);
            i++;
            if (i > text.length) {
                clearInterval(typeEffect);
            }
        }, 50);
    });
});
