// 弹出dialog
const stratBtn = document.querySelector('.starnextRound')
// console.log(stratBtn);
const dialog = document.querySelector('#select-dialog')
stratBtn.addEventListener('click',function(){
    dialog.showModal()
})
// 机器人出的手势

// console.log(random);
const CG = ['paper','rock','scissor'] 
const CGsrc = document.querySelector('.compterGusture')
// console.log(CGsrc);
// console.log(CG[random]);



// 我出的手势
const myGusture = document.querySelector('#select-gusture')
// console.log(myGusture.value);
const subBtn = document.querySelector('.btn')
const gustureSrc = document.querySelector('.myGusture')
// console.log(subBtn);
// 判断输赢
const judgmentResult = document.querySelector('.result')
// console.log(judgmentResult.firstElementChild);
// let CGresult = CG[random]
// let myresult = myGusture.value
const h2 =document.querySelector('h2')

// 计算胜负数据
const CGscore = document.querySelector('.CGsituation')
const myScore = document.querySelector('.mysituation')
let CGwin = 0
let CGlose = 0
let mylose = 0
let mywin = 0
var round = 1

// console.log(CGscore);
subBtn.addEventListener('click',
(e)=>{
    e.preventDefault()
    let random = Math.floor(Math.random()*3)
    gustureSrc.innerHTML = `<img src="./${myGusture.value}.png" alt="">`
    CGsrc.innerHTML = `<img src="./${CG[random]}.png" alt="">`
    // 
    if (myGusture.value === CG[random]) {
        judgmentResult.innerHTML = '<p class="draw" >本回合平局</p>'
    } else {
        if (CG[random] === "rock") {
            if (myGusture.value === "scissor") {
                judgmentResult.innerHTML = '<p class="draw" >本回合你输了</p>'
                mylose++
                CGwin++
            } else {
                judgmentResult.innerHTML = '<p class="draw" >本回合你赢了</p>'
                mywin++
                CGlose++
            }
        } else if (CG[random] === "scissor") {
            if (myGusture.value === "rock") {
                judgmentResult.innerHTML = '<p class="draw" >本回合你赢了</p>'
                mywin++
                CGlose++
            } else {
                judgmentResult.innerHTML = '<p class="draw" >本回合你输了</p>'
                mylose++
                CGwin++
            }
        } else {
            if (myGusture.value === "rock") {
                judgmentResult.innerHTML = '<p class="draw" >本回合你输了</p>'
                mylose++
                CGwin++
            } else {
                judgmentResult.innerHTML = '<p class="draw" >本回合你赢了</p>'
                mywin++
                CGlose++
            }
        }}
        // 封装函数 告知胜负
    function render (){
        CGscore.innerHTML = `<p>胜：${CGwin} | 负：${CGlose}</p>`
        myScore.innerHTML = `<p>胜：${mywin} | 负：${mylose}</p>`
    }
    render()
    dialog.close()
    h2.innerHTML = `<p> round ${round}</p>`
    round++
    console.log(round);
    while (round === 4) {
        if(CGwin===mywin){
            stratBtn.style.display = 'none'
            judgmentResult.innerHTML = '<p> 不错 平局了</p>'
        }
        else{
            if (CGwin>mywin) {
                stratBtn.style.display = 'none'
            judgmentResult.innerHTML = '<p> sorry 你输了</p>'
            }
            else{
                stratBtn.style.display = 'none'
            judgmentResult.innerHTML = '<p> 恭喜你 你赢了</p>'
            }
        }
        break
    }
})



// console.log(CGresult === myresult);
// console.log(h2);

