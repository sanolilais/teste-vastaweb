$(document).ready(function () {
    if ($(window).width() > 325) {
        var bannerHeight = $("#banner").height();
        $("#banner-items").css("top", (bannerHeight / 2) + "px");

    }
    if ($(window).width() <= 480) {
        var bannerHeight = $("#banner").height();
        $("#banner-items").css("transform", "translate(0, "+(bannerHeight/4)+"px");
        
        const itemMenu = document.querySelectorAll(".menuoption");
        itemMenu.forEach(n => n.classList.remove("menu"));
        
        $("#btn-about").remove();
        $("#img-about2").remove();
        var leiaMais = $("<a id='show-more'></a>").text("Leia Mais ˅");
        $("#container-about1").append(leiaMais);
        hideShow();

    }
    const hamburger = document.querySelector(".menuhamburger");
    const navMenu = document.querySelector("#menunav");
    const navBar = document.querySelector("#navbarcontent");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        navBar.style.backgroundColor = "#fff"
        const navBarHeight = navBar.offsetHeight + "px";
        navMenu.style.top = navBarHeight;
    }

    const navLink = document.querySelectorAll(".linkmenu");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

});
const hideShow = function () {

    $("#container-about2").hide(1000);

    $("#show-more").click(function () {
        $("#container-about2").show(1000);
        var showMore = $("#show-more");
        $("#show-more").remove();
        showMore.text("Mostrar menos ˄");

        showMore.click(function () {
            $("#container-about2").hide(1000);
            showMore.text("Leia Mais ˅");
            $("#container-about1").append(showMore);
            $("#show-more").click(hideShow());
        });

        $("#container-about2").append(showMore);

    });

}

const $chevronRight = document.getElementById("chevronRight")
const $chevronLeft = document.getElementById("chevronLeft")
const $testimonialsContent = document.getElementById("testimonialsContent")

$chevronRight.addEventListener("click", () => {
    $testimonialsContent.style.transform = "translateX(-362px)"
})

$chevronLeft.addEventListener("click", () => {
    $testimonialsContent.style.transform = "translateX(0)"
})

