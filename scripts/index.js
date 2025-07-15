//전체 수직 스크롤
const wrap = new Swiper('#wrap',{
    direction : 'vertical',
    mousewheel : true,
})/* 스와이퍼가 될 대상의 전체묶음 */

//프로젝트 슬라이드
const project1 = new Swiper('#project_swiper',{
    scrollbar:{el:'#project_swiper ~ .swiper-scrollbar'},/* 스크롤바 */
    
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