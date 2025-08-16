/* window.alert('이 웹페이지는 포트폴리오 페이지입니다.') */
//전체 수직 스크롤
const wrap = new Swiper('#wrap',{
    direction : 'vertical',
    mousewheel : true,
    speed:1000,
})/* 스와이퍼가 될 대상의 전체묶음 */

//프로젝트 슬라이드
const project1 = new Swiper('#project_swiper',{
    scrollbar:{el:'#project_swiper ~ .swiper-scrollbar'},/* 스크롤바 */
    autoplay:{delay:4000},/* 속도 */
    loop:true,/* 무한반복 */
})

//디자인 슬라이즈 가로배너
const designTransverse = new Swiper('#transverse_swiper',{
    slidesPerView:2.5,
    autoplay:{delay:1,},
    spaceBetween:20,
    speed:4000,
    loop:true,
})
//디자인 슬라이즈 세로배너
const designLength = new Swiper('#length_swiper',{
    slidesPerView:3.5,
    autoplay:{delay:0,},
    spaceBetween:20,
    speed:5000,
    loop:true,
})

//내비게이션 클릭 시 해당 위치 수직 스와이프(wrap변수)로 이동
const nav = document.querySelectorAll('nav a');
//수직 스와이프 이동 함수
//스직스와이프변수명.slideTop(이동인덱스값, 지속시간)
nav.forEach((obj,idx)=>{
    console.log(obj,idx)
    obj.addEventListener('click',(e)=>{
        e.preventDefault();//a의 href기본기능 막기
        wrap.slideTo(idx, 1000);/* obj클릭했을때 1초동안 그 위치로 이동한다. */
    })
})

//배너 클릭 시 팝업 실행(클릭한 이미지가 팝업 이미지로 교체)
const lengthProject = document.querySelectorAll('#length_swiper .swiper-slide')/* 세로배너 4개의 스와이퍼가 모두 잡힘 */
const popup = document.querySelector('.popup_bg')/* 팝업실행할때 */
console.log(lengthProject,popup)

for(let banner of lengthProject){
    banner.addEventListener('click',()=>{
        popup.style.display = 'block'/* popup의 style의 display를 보이게 하겠다 */ /* css에서 안보이게 설정해놨엤다. */
        popup.children[0].children[0].src = banner.children[0].src/* css -> popup_bg .popup img 자식을 잡고 싶은거라면 childern을 써야한다. */
        wrap.mousewheel.disable();//disable()은 막기 enable()은 풀기
    })
}
//팝업창 닫을때
popup.addEventListener('click',()=>{
    popup.style.display = 'none'
    wrap.mousewheel.enable()//스크롤 기능 풀기
})/* 팝업을 실행했을 때 아무곳이나 누르면 닫힌다. */