const dots = document.querySelectorAll(".loading-dots");

dots.forEach((element) => {
    let count = 0;

    setInterval(() => {
        count = (count + 1) % 4;
        element.textContent = ".".repeat(count);
    }, 500);
});