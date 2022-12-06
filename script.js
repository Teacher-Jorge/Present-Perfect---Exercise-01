//LINE 01
let word1 = document.getElementById('word1')
let btn1Ever = document.getElementById('btn1Ever')
let btn1Always = document.getElementById('btn1Always')
let btn1Never = document.getElementById('btn1Never')

btn1Ever.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    word1.innerHTML = 'ever'
    word1.style.color ='olivegreen'
    let check1 = document.getElementById('check1')
    check1.style.visibility = 'visible'
    btn1Ever.style.background = 'green'
    btn1Never.disabled = 'true'
    btn1Ever.disabled = 'true'
    btn1Always.disabled = 'true'
})

btn1Never.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn1Never.style.background = 'red'
    word1.innerHTML = 'never'
    word1.style.color = 'red'
    btn1Never.disabled = 'true'
})

btn1Always.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
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
    let audio = document.getElementById('click')
    audio.play()
    word2.innerHTML = 'Have'
    word2.style.color ='olivegreen'
    let check2 = document.getElementById('check2')
    check2.style.visibility = 'visible'
    btn2Have.style.background = 'green'
    btn2Have.disabled = 'true'
    btn2Has.disabled = 'true'
    btn2Had.disabled = 'true'
})

btn2Has.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn2Has.style.background = 'red'
    word2.innerHTML = 'Has'
    word2.style.color = 'red'
    btn2Has.disabled = 'true'
})

btn2Had.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
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
    let audio = document.getElementById('click')
    audio.play()
    word3.innerHTML = 'Went'
    word3.style.color ='olivegreen'
    let check3 = document.getElementById('check3')
    check3.style.visibility = 'visible'
    btn3Went.style.background = 'green'
    btn3Went.disabled = 'true'
    btn3Go.disabled = 'true'
    btn3Was.disabled = 'true'
})

btn3Go.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn3Go.style.background = 'red'
    word3.innerHTML = 'Go'
    word3.style.color = 'red'
    btn3Go.disabled = 'true'
})

btn3Was.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
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
    let audio = document.getElementById('click')
    audio.play()
    word4.innerHTML = 'Was'
    word4.style.color ='olivegreen'
    let check4 = document.getElementById('check4')
    check4.style.visibility = 'visible'
    btn4Was.style.background = 'green'
    btn4Was.disabled = 'true'
    btn4Is.disabled = 'true'
    btn4Am.disabled = 'true'
})

btn4Is.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn4Is.style.background = 'red'
    word4.innerHTML = 'is'
    word4.style.color = 'red'
    btn4Is.disabled = 'true'
})

btn4Am.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
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
    let audio = document.getElementById('click')
    audio.play()
    word5.innerHTML = 'Had'
    word5.style.color ='olivegreen'
    let check5 = document.getElementById('check5')
    check5.style.visibility = 'visible'
    btn5Had.style.background = 'green'
    btn5Had.disabled = 'true'
    btn5Has.disabled = 'true'
    btn5Have.disabled = 'true'
})

btn5Has.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn5Has.style.background = 'red'
    word5.innerHTML = 'has'
    word5.style.color = 'red'
    btn5Has.disabled = 'true'
})

btn5Have.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn5Have.style.background = 'red'
    word5.innerHTML = 'Have'
    word5.style.color = 'red'
    btn5Have.disabled = 'true'
})