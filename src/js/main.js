const openNav = (command = "open") => {
    document.getElementById("nav").style.width = command == "open" ? "100%" : "0%";
}