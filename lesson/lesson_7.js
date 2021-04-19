
// let element = document.querySelectorAll('.myClass');
//
// console.log(element);

// let element1 = document.querySelectorAll('#green p.myClass');
// console.log(element1);


// let element2 = document.querySelector('#green p.myClass');
//
//
// element2.setAttribute('id', 'hello-world');
// element2.setAttribute('group', 'feb-2021');
//
// element2.removeAttribute('id');
// element2.removeAttribute('class');
//
//
// console.log(element2);

///////////////////////////////////////////////////////////////////////////////////////////

// const forma = document.forms.form;
// console.log(forma);
//                               OR
// const forma1 = document.forms.myForm2;
// console.log(forma1);
//                               OR
// const forma2 = document.forms[0];
// console.log(forma2);

////////////////////////////////////////////////////////////////////////////////////////////

// const forma = document.forms.myForm2;
// console.log(forma);
//
// console.log(forma.someText.value);
// console.log(forma.check1);

////////////////             КЛІК ПО РОЖЕВІЙ ДІВЦІ          ///////////////////////

// let elementById = document.getElementById('red');
//
// elementById.onclick = () => {
// console.log('CLICK GREEN')
// }

///////////////////     КЛІК  В  ПУСТОМУ  ПОЛІ (INPUT)      //////////////////////
//
// const forma = document.forms.myForm2;
// console.log(forma);
//
// console.log(forma.someText.value);
// console.log(forma.check1);
//
// forma.someText.oninput = (ev) => {
//     console.log('INPUT');
//     console.log(ev.target.value);
//     console.log('-------------------');
//     console.log(forma.someText.value);
// }

//////////          ЗМІНА   ПАЛІТРИ    КОЛЬОРІВ  ПРИ  РУCІ  МИШКИ    ////////////

// let greenDiv = document.getElementById('green');
//
// greenDiv.onmouseleave = () => {
//     console.log('LEAVE')
// }
//
// greenDiv.onmouseover = () => {
//     console.log('OVER')
// }

// greenDiv.onmousemove = (ev) => {
//     console.log(ev);
// }

// greenDiv.onmousemove = (ev) => {
//     const red = ev.x;
//     const green = ev.y;
//     const blue = (green + red) / 2.5;
//
//     ev.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`
// };


//  const forma = document.forms.myForm2;
//
//
//  forma.okBtn.onclick = (ev) => {
//      ev.preventDefault();
//
//     const input = forma.someText.value;
//     const check1 = forma.check1;
//
//      console.log(check1);
//
// }




// const forma = document.forms.myForm2;
//
//  forma.okBtn.onclick = (ev) => {
//      ev.preventDefault();
//
//     const input = forma.someText.value;
//     const [firstCheck, secondCheck] = forma.check1;
//
//      console.log(firstCheck.checked);
//      console.log(secondCheck.checked);
//
// }



// const forma = document.forms.myForm2;
//
// forma.okBtn.onclick = (ev) => {
//     ev.preventDefault();
//
//     const input = forma.someText.value;
//     const [firstRad, secondRad] = forma.rad;
//
//     console.log(firstRad.checked);
//     console.log(secondRad.checked);
//
//     let result = {
//        input,
//        isMale: firstRad.checked,
//        isFemale: secondRad.checked,
//        gender: firstRad.checked ? 'male' : 'female'
//     }
//     console.log(result);
// }


/////////////////////////    EVENT   C O P Y    //////////////////////////
//
// let blue = document.getElementById('blue');
// blue.oncopy = () => {
//     console.log('cope');
// }

///////////////    щоб заборонити  COPY   ////////////////


// let blue = document.getElementById('blue');
// blue.oncopy = () => {
//     console.log('cope');
//     alert('NO COPE');
//
//     return false;
// }

//////////////////////////          П О Г Р У Ж Е Н Н Я          //////////////////////

// let red = document.getElementById('red');
// let green = document.getElementById('green');
// let blue = document.getElementById('blue');
//
// red.onclick = () => {
//     console.log('RED')
// }
//
// green.onclick = () => {
//     console.log('GREEN')
// }
//
// blue.onclick = () => {
//     console.log('BLUE')
// }


/////////////////////////        В С П Л И Т Т Я          //////////////////////////////


// let red = document.getElementById('red');
// let green = document.getElementById('green');
// let blue = document.getElementById('blue');
//
// red.addEventListener('click', event => {
//     console.log('RED');
// }, false)
//
// green.addEventListener('click', (ev) => {
//     ev.stopPropagation();
//     console.log('GREEN');
// }, false)
//
// blue.addEventListener('click', event => {
//     console.log('BLUE');
// }, false)
//




