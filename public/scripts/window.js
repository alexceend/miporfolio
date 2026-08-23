const windows = document.querySelectorAll(".terminal-window");

windows.forEach((windowElement) => {
    const minimizeButton = windowElement.querySelector(
        "[data-window-minimize]"
    );

    const maximizeButton = windowElement.querySelector(
        "[data-window-maximize]"
    );

    if (!minimizeButton || !maximizeButton) {
        return;
    }

    minimizeButton.addEventListener("click", () => {
        windowElement.classList.toggle("window-minimized");

        windowElement.classList.remove("window-maximized");
    });

    maximizeButton.addEventListener("click", () => {
        windowElement.classList.toggle("window-maximized");

        windowElement.classList.remove("window-minimized");
    });
});

// ABRIR VENTANAS
const openButtons = document.querySelectorAll("[data-window-open]");

openButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const windowId = button.dataset.windowOpen;

        const windowElement = document.querySelector(
            `[data-window-id="${windowId}"]`
        );

        if (!windowElement) {
            return;
        }
        windowElement.classList.remove("window-minimized");
        windowElement.classList.remove("window-maximized");
    });
});