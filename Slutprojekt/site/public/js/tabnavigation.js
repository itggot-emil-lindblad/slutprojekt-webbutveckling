function tabnavigation(element){
    var navtabs = document.querySelectorAll(".navtab")
    navtabs.forEach((nt ) => { nt.classList.remove("active") })
    

    element.classList.toggle("active");
    var banan = document.querySelector("#" + element.dataset.infopage)
    var infopages = document.querySelectorAll(".infopage")
    infopages.forEach((ip ) => { ip.classList.remove("active") })
    banan.classList.toggle("active");
}