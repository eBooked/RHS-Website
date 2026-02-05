document.addEventListener('DOMContentLoaded', () => {
    const darkmodeMenuButton = document.getElementById('darkmode-button');

    darkmodeMenuButton.addEventListener('click', () => {

        console.log(document.documentElement.classList.contains("dark"));
        document.body.classList.toggle("dark")
        console.log("Darkmode Toggled");
    });
});
