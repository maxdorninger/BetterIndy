console.log("BetterIndy is running!");
let hourData;
fetch("https://indy.sz-ybbs.ac.at:8443/hour/", {credentials: "include"}).then(response => {
    if (response.ok) {
        response.json().then(data => {
            hourData = data;
        })
    }
});
document.addEventListener("click", function (event) {
    setTimeout(() => {
        let teacherDropdown = document.querySelector("select#teacher");
        let [day, month, year] = document.querySelector("h2").innerHTML.split(" ")[2].split(".");
        let date = new Date(`${year}-${month}-${day}`);
        let dayOfWeek;
        switch (date.getDay()) {
            case 1:
                dayOfWeek = "Mo";
                break;
            case 3:
                dayOfWeek = "Mi";
                break;
            case 5:
                dayOfWeek = "Fr";
                break;
        }

        console.log("BetterIndy: detected date is", date);

        for(let option of teacherDropdown.children) {
            let rooms = new Set;
            for(let hour of hourData) {
                if(option.value === hour.fullname && hour.day === dayOfWeek) {
                    rooms.add(hour.room);
                }
            }
            if(option.innerHTML !== "Lehrer auswählen" )
                option.innerHTML = `${option.value} //  ${rooms.values().toArray().join(", ")}`;
        }
    },100)
});