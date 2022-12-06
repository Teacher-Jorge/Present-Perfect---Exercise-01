//LINE 01
let word1 = document.getElementById('word1')
let btn1Ever = document.getElementById('btn1Ever')
let btn1Always = document.getElementById('btn1Always')
let btn1Never = document.getElementById('btn1Never')

btn1Ever.addEventListener('click', function() {
    word1.innerHTML = 'ever'
    let check1 = document.getElementById('check1')
    check1.style.visibility = 'visible'
    btn1Ever.style.background = 'green'
    word1.style.color ='olivegreen'
    btn1Never.disabled = 'true'
    btn1Ever.disabled = 'true'
    btn1Always.disabled = 'true'
})

btn1Never.addEventListener('click', function() {
    btn1Never.style.background = 'red'
    word1.innerHTML = 'never'
    word1.style.color = 'red'
    btn1Never.disabled = 'true'
})

btn1Always.addEventListener('click', function() {
    btn1Always.style.background = 'red'
    word1.innerHTML = 'always'
    word1.style.color = 'red'
    btn1Always.disabled = 'true'
})

//LINE 02
let word2 = document.getElementById('word2')
let btn2Has = document.getElementById('btn2Has')
let btn2Had = document.getElementById('btn2Had')
let btn2Have = document.getElementById('btn2Have')

btn2Have.addEventListener('click', function() {
    word2.innerHTML = 'Have'
    let check2 = document.getElementById('check2')
    check2.style.visibility = 'visible'
    btn2Have.style.background = 'green'
    word2.style.color ='olivegreen'
    btn2Have.disabled = 'true'
    btn2Has.disabled = 'true'
    btn2Had.disabled = 'true'
})

btn2Has.addEventListener('click', function() {
    btn2Has.style.background = 'red'
    word2.innerHTML = 'Has'
    word2.style.color = 'red'
    btn2Has.disabled = 'true'
})

btn2Had.addEventListener('click', function() {
    btn2Had.style.background = 'red'
    word2.innerHTML = 'Had'
    word2.style.color = 'red'
    btn2Had.disabled = 'true'
})

//LINE 03
let word3 = document.getElementById('word3')
let btn3Go = document.getElementById('btn3Go')
let btn3Was = document.getElementById('btn3Was')
let btn3Went = document.getElementById('btn3Went')

btn3Went.addEventListener('click', function() {
    word3.innerHTML = 'Went'
    let check3 = document.getElementById('check3')
    check3.style.visibility = 'visible'
    btn3Went.style.background = 'green'
    word3.style.color ='olivegreen'
    btn3Went.disabled = 'true'
    btn3Go.disabled = 'true'
    btn3Was.disabled = 'true'
})

btn3Go.addEventListener('click', function() {
    btn3Go.style.background = 'red'
    word3.innerHTML = 'Go'
    word3.style.color = 'red'
    btn3Go.disabled = 'true'
})

btn3Was.addEventListener('click', function() {
    btn3Was.style.background = 'red'
    word3.innerHTML = 'Was'
    word3.style.color = 'red'
    btn3Was.disabled = 'true'
})

//LINE 04
let word4 = document.getElementById('word4')
let btn4Is = document.getElementById('btn4Is')
let btn4Am = document.getElementById('btn4Am')
let btn4Was = document.getElementById('btn4Was')

btn4Was.addEventListener('click', function() {
    word4.innerHTML = 'Was'
    let check4 = document.getElementById('check4')
    check4.style.visibility = 'visible'
    btn4Was.style.background = 'green'
    word4.style.color ='olivegreen'
    btn4Was.disabled = 'true'
    btn4Is.disabled = 'true'
    btn4Am.disabled = 'true'
})

btn4Is.addEventListener('click', function() {
    btn4Is.style.background = 'red'
    word4.innerHTML = 'is'
    word4.style.color = 'red'
    btn4Is.disabled = 'true'
})

btn4Am.addEventListener('click', function() {
    btn4Am.style.background = 'red'
    word4.innerHTML = 'Am'
    word4.style.color = 'red'
    btn4Am.disabled = 'true'
})

//LINE 05
let word5 = document.getElementById('word5')
let btn5Has = document.getElementById('btn5Has')
let btn5Have = document.getElementById('btn5Have')
let btn5Had = document.getElementById('btn5Had')

btn5Had.addEventListener('click', function() {
    word5.innerHTML = 'Had'
    let check5 = document.getElementById('check5')
    check5.style.visibility = 'visible'
    btn5Had.style.background = 'green'
    word5.style.color ='olivegreen'
    btn5Had.disabled = 'true'
    btn5Has.disabled = 'true'
    btn5Have.disabled = 'true'
})

btn5Has.addEventListener('click', function() {
    btn5Has.style.background = 'red'
    word5.innerHTML = 'has'
    word5.style.color = 'red'
    btn5Has.disabled = 'true'
})

btn5Have.addEventListener('click', function() {
    btn5Have.style.background = 'red'
    word5.innerHTML = 'Have'
    word5.style.color = 'red'
    btn5Have.disabled = 'true'
})