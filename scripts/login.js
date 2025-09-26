console.log('BetterIndy is running!')

console.log("BetterIndy: setting autocomplete attributes");
document.getElementById('mat-input-0').setAttribute("autocomplete", "username");
document.getElementById('mat-input-1').setAttribute("autocomplete", "current-password");

document.querySelector("form").addEventListener("submit", function (event) {
    setTimeout(() => {
        console.log("BetterIndy: Redirecting to calendar");
        window.location.href = "https://indy.sz-ybbs.ac.at/indy-calendar";
    }, 0)
})