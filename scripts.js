const navSlide = () =>{
    const nav = document.querySelector('#toggle')
    const navResponse = document.querySelector('.nav-responsive')
    const navClose = document.querySelector('.nav-close')

    nav.addEventListener('click',() => {
        navResponse.classList.toggle('nav-active')
    })
    navClose.addEventListener('click',() => {
        navResponse.classList.toggle('nav-active')
    })
}
navSlide();
$(window).on("scroll", function() {
    console.log('scroll');
    if($(window).scrollTop() > 80) {
        $(".container-header").addClass("header-active");
        $(".social-link").addClass("social-link-active")
    } else {
       $(".container-header").removeClass("header-active");
       $(".social-link").removeClass("social-link-active")
    }
});