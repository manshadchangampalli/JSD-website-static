const navSlide = () =>{
    const nav = document.querySelector('#toggle')
    const navResponse = document.querySelector('.nav-responsive')
    const header = document.querySelector('.container-header')
    nav.addEventListener('click',() => {
        navResponse.classList.toggle('nav-active')
        if($(window).scrollTop() < 60){
            if(header.style.backgroundColor == ""){
                header.style.backgroundColor = "#fff"
            }else{
                header.style.backgroundColor = ""
            }
        }
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