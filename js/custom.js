document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript 로드 완료");

    // ✅ 섹션 1 Swiper (메인 슬라이더)
    var section1Swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: { delay: 2000, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        effect: "slide",
        speed: 2000,
        grabCursor: true,
    });
    console.log("✅ 섹션 1 Swiper 초기화 완료");

    // ✅ 섹션 2 Swiper (가로 슬라이드)
    var section2Swiper = new Swiper(".bestSellersSwiper", {
        loop: false,
        slidesPerView: "auto", /* ✅ 가로 슬라이드 */
        spaceBetween: 20, /* ✅ 슬라이드 간 간격 */
        grabCursor: true,
        freeMode: true,
        scrollbar: {
            el: ".best-sellers-scrollbar",
            hide: false,
            draggable: true,
        },
        autoplay: false,
        breakpoints: {
            1760: { slidesPerView: 4.5 },
            1400: { slidesPerView: 4 },
            1236: { slidesPerView: 3.5 },
            992: { slidesPerView: 3 },
            800: { slidesPerView: 2.5 },
            600: { slidesPerView: 2},
            500: { slidesPerView: 1.5},
            450: { slidesPerView: 1.5},
            380: { slidesPerView: 1 }, 
        },
        on: { init: function () { console.log("✅ 섹션 2 Swiper 초기화 완료"); } }
    });
});
