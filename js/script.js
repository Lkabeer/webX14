/* SideNav */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


/* Sidenav push */
function openNavPush() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNavPush() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


/* sidenav push with Overlay */
function openNavOpacity() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("myCanvasNav").style.width = "100%";
    document.getElementById("myCanvasNav").style.opacity = "0.8"; 
}

function closeNavOpacity() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("myCanvasNav").style.width = "0%";
    document.getElementById("myCanvasNav").style.opacity = "0"; 
    document.getElementById("mySidenav").style.textAlign = "left";
}


/* sideNav Full-width */
function openNavFW() {
    document.getElementById("mySidenav").style.textAlign = "center";
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNavFW() {
    document.getElementById("mySidenav").style.textAlign = "left";
    document.getElementById("mySidenav").style.width = "0";
}