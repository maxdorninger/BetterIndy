console.log("BetterIndy is running!");
let hourData;
fetch("https://indy.sz-ybbs.ac.at:8443/hour/", {credentials: "include"}).then(response => {
    if (response.ok) {
        hourData = response.json()
    }
});

document.addEventListener("click", function (event) {
    setTimeout(() => {
        let teacherDropdown = document.querySelector("select#teacher");
        for(let option of teacherDropdown.children) {
            option.textContent = "Servas";
        }
    },0)
});