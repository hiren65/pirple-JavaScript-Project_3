//alert();
let carrageb = document.getElementById("carrage-B");
carrageb.style.position = "relative";
let pos = 0;
let posA = 0;
let tt,tt1;
let existingPositionB = 0;
let currentCallFloorPosition;
let checkForDouble = true;
//for push
let checkForDouble1 = true;
//for DIV id
let tempT;let tempT1;
//for lift gate position
let gatePos = 100;
//for lift gate
let open = false;
let gg;let gg1;
//////
let carragea = document.getElementById("carrage-A");
carragea.style.position = "relative";
let checkForDoubleA1 = true;
let checkForDoubleA = true;
let ttA;
let temptT1A;
let existingPositionA = 0;
let openA = false;
let gatePosA = 100;
let ggA;

let positinObject = {
    "no":0,
    "Floor 10":0,
    "Floor 09":105,
    "Floor 08":210,
    "Floor 07":315,
    "Floor 06":420,
    "Floor 05":525,
    "Floor 04":630,
    "Floor 03":735,
    "Floor 02":840,
    "Floor 01":945,
    "Floor 00":1050,
    "Floor -1":1155,
};
let positinObjectA = {
    "no":0,
    "Floor 10":0,
    "Floor 09":0,
    "Floor 08":105,
    "Floor 07":210,
    "Floor 06":315,
    "Floor 05":420,
    "Floor 04":525,
    "Floor 03":630,
    "Floor 02":735,
    "Floor 01":840,
    "Floor 00":945,
    "Floor -1":1050,
};
let list10 = document.getElementById("select10left");
////////////////
let b10Dn = document.getElementById("btn10L");
b10Dn.addEventListener("click",callCarrageToMyFloor);

function goDown (){
        if (checkForDouble1 === false){
            return;
        }
    if (checkForDouble === false){
        return;
    }
    if (list09.value === "Floor -1"){

        return;
    }
        checkForDouble1 = false;
        //alert(this.id);
        tempT1 = this.id;

        tt = setInterval( main ,10 );

}
/////////////////////////////////
let list09 = document.getElementById("select09left");

let b09Dn = document.getElementById("btn09L");
b09Dn.addEventListener("click",callCarrageToMyFloor);

let b09PushL = document.getElementById("btnPush09L");
b09PushL.addEventListener("click",goDown);

//////////////////////////////////////////
let list08 = document.getElementById("select08left");
//let list08 = document.getElementById("select08left");

let b08Dn = document.getElementById("btn08L");
b08Dn.addEventListener("click",callCarrageToMyFloor);

//////////////////////////////

let list07 = document.getElementById("select07left");

let b07Dn = document.getElementById("btn07L");
b07Dn.addEventListener("click",callCarrageToMyFloor);

//////////////////////////////

let list06 = document.getElementById("select06left");

let b06Dn = document.getElementById("btn06L");
b06Dn.addEventListener("click",callCarrageToMyFloor);

//////////////////////////////
let list05 = document.getElementById("select05left");

let b05Dn = document.getElementById("btn05L");
b05Dn.addEventListener("click",callCarrageToMyFloor);

//////////////////////////////
let list04 = document.getElementById("select04left");

let b04Dn = document.getElementById("btn04L");
b04Dn.addEventListener("click",callCarrageToMyFloor);

//////////////////////////////
let list03 = document.getElementById("select03left");

let b03Dn = document.getElementById("btn03L");
b03Dn.addEventListener("click",callCarrageToMyFloor);

//////////////////////////////
let list02 = document.getElementById("select02left");

let b02Dn = document.getElementById("btn02L");
b02Dn.addEventListener("click",callCarrageToMyFloor);

//////////////////////////////
let list01 = document.getElementById("select01left");

let b01Dn = document.getElementById("btn01L");
b01Dn.addEventListener("click",callCarrageToMyFloor);

//////////////////////////////
let list00 = document.getElementById("select00left");

let b00Dn = document.getElementById("btn00L");
b00Dn.addEventListener("click",callCarrageToMyFloor);

//////////////////////////////
//////////////////////////////
let list_1 = document.getElementById("select-1left");

let b_1Dn = document.getElementById("btn-1L");
b_1Dn.addEventListener("click",callCarrageToMyFloor);

/*let b_1PushL = document.getElementById("btnPush-1L");
b_1PushL.addEventListener("click",goDown);*/

////////////////////////////////////////////
function main() {
    console.log(tempT1);
    //alert(tempT);
   /*if (tempT1 === "btnPush10L") {
        goDown1(list10.value);position(list10.value,tt);
    }*/

    if (tempT1 === "btnPush09L") {
        console.log(tempT1);
        goDown1(list09.value);position(list09.value,tt);
    }

    //checkForDouble = true;
}

/////////////////////////////////
function goDown1(selected){

    if (true){

        if (positinObject[selected]<existingPositionB){
            movingCarrageNagative();
        }if (positinObject[selected]>existingPositionB) {
            movingCarrage();
        }if (positinObject[selected]===existingPositionB) {
            //existingPositionB = pos;
            carrageb.style.top = existingPositionB + "px";
            //clearInterval(tt);
            //alert("hhhh");
            //return;
        }
    }



};


function movingCarrage() {
    pos ++;
    //carrageb.style.position = "relative";
    console.log(pos);
    carrageb.style.top = pos + "px";
    console.log(carrageb.style.top );
}
function movingCarrageNagative() {
    pos --;
    //carrageb.style.position = "relative";
    console.log(pos);
    carrageb.style.top = pos + "px";
    console.log(carrageb.style.top );
}

function position(selected,time) {

    open = true;
    gatePos = 100;
    if (pos === 0 && selected === "no"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 0;
        existingPositionB = pos;
        checkForDouble1 = true;
        gg = setInterval(gateOpen,10);
    }
    if ((pos === 0 && selected === "Floor 10") ){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 0;
        existingPositionB = pos;
        checkForDouble1 = true;
        gg = setInterval(gateOpen,10);
    }
    if (pos === 105 && selected === "Floor 09"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 105;
        existingPositionB = pos;
        checkForDouble1 = true;

        //alert("jkjkj");
        gg = setInterval(gateOpen,10);

    }
    if (pos === 210 && selected === "Floor 08"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 210;
        existingPositionB = pos;
        checkForDouble1 = true;
        gg = setInterval(gateOpen,10);

    }
    if (pos === 315 && selected === "Floor 07"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 315;
        existingPositionB = pos;
        checkForDouble1 = true;
        gg = setInterval(gateOpen,10);
    }
    if (pos === 420 && selected === "Floor 06"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 420;
        existingPositionB = pos;
        checkForDouble1 = true;
        gg = setInterval(gateOpen,10);
    }
    if (pos === 525 && selected === "Floor 05"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 525;
        existingPositionB = pos;
        checkForDouble1 = true;
        gg = setInterval(gateOpen,10);
    }
    if (pos === 630 && selected === "Floor 04"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 630;
        existingPositionB = pos;
        checkForDouble1 = true;
        gg = setInterval(gateOpen,10);
    }
    if (pos === 735 && selected === "Floor 03"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 735;
        existingPositionB = pos;
        checkForDouble1 = true;
        gg = setInterval(gateOpen,10);
    }
    if (pos === 840 && selected === "Floor 02"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 840;
        existingPositionB = pos;
        checkForDouble1 = true;
        gg = setInterval(gateOpen,10);
    }
    if (pos === 945 && selected === "Floor 01"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 945;
        existingPositionB = pos;
        checkForDouble1= true;
        gg = setInterval(gateOpen,10);
    }
    if (pos === 1050 && selected === "Floor 00"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 1050;
        existingPositionB = pos;
        checkForDouble1= true;
        gg = setInterval(gateOpen,10);
    }
    if (pos === 1155 && selected === "Floor -1"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 1155;
        existingPositionB = pos;
        checkForDouble1= true;
        gg = setInterval(gateOpen,10);
    }

}

function callCarrageToMyFloor() {
    if (checkForDouble === false){
        return;
    }
    if (checkForDouble1 === false){
        return;
    }
    let txt1 = getInnerText(this.id );
    tempT = txt1;
    //console.log(txt1);
    //alert( "ttttt" + checkForDouble);
    //alert("tempt" + tempT + " " +txt1);
    //buttonDisable(this.id);
    if (txt1 === "b10L"){

        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
    if (txt1 === "b09L"){

        //if (checkForDouble === true) {
            //alert("ggg" + checkForDouble);
            checkForDouble = false;
            tt = setInterval( goHome ,10 );
        //}
        //alert(txt1);

    }
    if (txt1 === "b08L"){

        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
    if (txt1 === "b07L"){

        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
    if (txt1 === "b06L"){

        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
    if (txt1 === "b05L"){

        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
    if (txt1 === "b04L"){

        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
    if (txt1 === "b03L"){

        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
    if (txt1 === "b02L"){

        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
    if (txt1 === "b01L"){

        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
    if (txt1 === "b00L"){

        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
    if (txt1 === "b-1L"){

        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
}
function goHome() {
   // checkForDouble = false;
    //alert("jjjjjj"+ tempT);
    if (tempT === "b10L"){
        goDown1("Floor 10");position("Floor 10",tt);
        if (pos === 0){
            checkForDouble = true;
        }
    }
    if (tempT === "b09L"){
        goDown1("Floor 09");position("Floor 09",tt);
        if (pos === 105){
            checkForDouble = true;
        }

    }
    if (tempT === "b08L"){
        goDown1("Floor 08");position("Floor 08",tt);
        if (pos === 210){
            checkForDouble = true;
        }
    }
    if (tempT === "b07L"){
        goDown1("Floor 07");position("Floor 07",tt);
        if (pos === 315){
            checkForDouble = true;
        }
    }
    if (tempT === "b06L"){
        goDown1("Floor 06");position("Floor 06",tt);
        if (pos === 420){
            checkForDouble = true;
        }
    }
    if (tempT === "b05L"){
        goDown1("Floor 05");position("Floor 05",tt);
        if (pos === 525){
            checkForDouble = true;
        }
    }
    if (tempT === "b04L"){
        goDown1("Floor 04");position("Floor 04",tt);
        if (pos === 630){
            checkForDouble = true;
        }
    }
    if (tempT === "b03L"){
        goDown1("Floor 03");position("Floor 03",tt);
        if (pos === 735){
            checkForDouble = true;
        }
    }
    if (tempT === "b02L"){
        goDown1("Floor 02");position("Floor 02",tt);
        if (pos === 840){
            checkForDouble = true;
        }
    }
    if (tempT === "b01L"){
        goDown1("Floor 01");position("Floor 01",tt);
        if (pos === 945){
            checkForDouble = true;
        }
    }
    if (tempT === "b00L"){
        goDown1("Floor 00");position("Floor 00",tt);
        if (pos === 1050){
            checkForDouble = true;
        }
    }
    if (tempT === "b-1L"){
        goDown1("Floor 00");position("Floor -1",tt);
        if (pos === 1155){
            checkForDouble = true;
        }
    }
    //buttonAble();
}
function getInnerText(id) {
    let txt = document.getElementById(id);
    var x = document.getElementById(id).parentElement.id;
    return x;
}
function buttonDisable(id){
    let btnF10Dn = document.getElementById("btn10L");
    btnF10Dn.disabled = true;
    let btnF09Dn = document.getElementById("btn09L");
    btnF09Dn.disabled = true;
    let btnF08Dn = document.getElementById("btn08L");
    btnF08Dn.disabled = true;
    let btnF07Dn = document.getElementById("btn07L");
    btnF07Dn.disabled = true;
    let btnF06Dn = document.getElementById("btn06L");
    btnF06Dn.disabled = true;
    let btnIdArr = [btnF10Dn,btnF09Dn,btnF08Dn,btnF07Dn,btnF06Dn];
    for(let i=0;i<btnIdArr.length;i++){
        if (id ===  btnIdArr[i].id){
            btnIdArr[i].disabled = false;
        }
    }

}
function buttonAble(){
    let btnF10Dn = document.getElementById("btn10L");
    btnF10Dn.disabled = false;
    let btnF09Dn = document.getElementById("btn09L");
    btnF09Dn.disabled = false;
    let btnF08Dn = document.getElementById("btn08L");
    btnF08Dn.disabled = false;
    let btnF07Dn = document.getElementById("btn07L");
    btnF07Dn.disabled = false;
    let btnF06Dn = document.getElementById("btn06L");
    btnF06Dn.disabled = false;

}
/////////////
function goDown11(selected,existing){

    if (true){
        //alert(selected + " " + existing);
        if (selected<existing){
            movingCarrageNagative();
        }if (selected>existing) {
            movingCarrage();
        }if (selected===existing) {
            //existingPositionB = pos;
            carrageb.style.top = existing + "px";
            //clearInterval(tt);
            //alert("hhhh");
            //return;
        }
    }



};
function kk(){
    if (pos >= 0 && pos < 105 ){
        //alert(1);

        goDown11(positinObject["Floor 10"],pos);position("Floor 10",tt);
    }
    if (pos >= 105 && pos < 210 ){
        //alert(2);
        //goDown1("Floor 09");position("Floor 09",tt);
        goDown11(positinObject["Floor 09"],pos);position("Floor 09",tt);
        //clearInterval(tt);
        //clearTimeout(time);

    }
    if (pos >= 210 && pos < 315 ){
        //alert(3);
        // goDown1("Floor 08");position("Floor 08",tt);
        goDown11(positinObject["Floor 08"],pos);position("Floor 08",tt);

    }
    if (pos >= 315 && pos < 420 ){
       // alert(4);
        //goDown1("Floor 07");position("Floor 07",tt);
        goDown11(positinObject["Floor 07"],pos);position("Floor 07",tt);
    }
    if (pos >= 420 && pos < 525 ){
        //alert(5);
        //goDown1("Floor 06");position("Floor 06",tt);
        goDown11(positinObject["Floor 06"],pos);position("Floor 06",tt);

    }
    if (pos >= 525 && pos < 630 ){
        //alert(5);
        //goDown1("Floor 06");position("Floor 06",tt);
        goDown11(positinObject["Floor 05"],pos);position("Floor 05",tt);

    }
    if (pos >= 630 && pos < 735 ){
        //alert(5);
        //goDown1("Floor 06");position("Floor 06",tt);
        goDown11(positinObject["Floor 04"],pos);position("Floor 04",tt);

    }
    if (pos >= 735 && pos < 840 ){
        //alert(5);
        //goDown1("Floor 06");position("Floor 06",tt);
        goDown11(positinObject["Floor 03"],pos);position("Floor 03",tt);

    }
    if (pos >= 840 && pos < 945 ){
        //alert(5);
        //goDown1("Floor 06");position("Floor 06",tt);
        goDown11(positinObject["Floor 02"],pos);position("Floor 02",tt);

    }
    if (pos >= 945 && pos < 1050 ){
        //alert(5);
        //goDown1("Floor 06");position("Floor 06",tt);
        goDown11(positinObject["Floor 01"],pos);position("Floor 01",tt);

    }
    if (pos >= 1050 && pos < 1155 ){
        //alert(5);
        //goDown1("Floor 06");position("Floor 06",tt);
        goDown11(positinObject["Floor 00"],pos);position("Floor 00",tt);

    }
}
/////////

let emergency = document.getElementById("emergency");
emergency.addEventListener("click",stopCarrage);
function stopCarrage(){
    //alert(pos);
    clearInterval(tt);
    tt =  setInterval(kk,10);
    checkForDouble = false;checkForDouble1 = false;
    let ebtn = document.getElementById("reset");
    ebtn.style.color = "#afe2af";

}
let resetAll = document.getElementById("reset");
resetAll.addEventListener("click",resetCarrage);
function resetCarrage() {
    clearInterval(tt);checkForDouble = true;checkForDouble1 = true;
    this.style.color = "white";
}

//gate open/close
let last = document.getElementById("last");

let gate = document.getElementById("gate");

gate.style.color = "yellow";
//alert("gg " + typeof gate.style.height);

/* to open closed gate   open = true;gatePos = 100;*/

//gg = setInterval(gateOpen,10);
//gg1 = setInterval(gateOpen,10);
function gateOpen(){
    //alert(open + " "+gatePos);
    if (open === true){
        //during opened gate other calling request makes uneffective
        checkForDouble1 = false;
        gatePos--;
        gate.style.height = gatePos + "%";
        //gate.style.top = 20 + "px";
        //gate.style.visibility = null;
        //last.style.top = -2 + "px";
        if (gatePos <= 0){
            gatePos = 0;
            open = false;
            clearInterval(gg);
            setTimeout(timeAutoCloseDoor,4000);

            return;
        }
    }
     if (open === false){
         gatePos++;
         gate.style.height = gatePos + "%";
         //last.style.top = -15 + "px";
         if (gatePos >= 100){
             gatePos = 100;
             open = true;
             clearInterval(gg);
             //gate.style.top = 0 + "px";
             return;
         }
     }
}

//gg();




function timeAutoCloseDoor() {
    gg =  setInterval(gateOpen,10);
    checkForDouble1 = true;
}

document.getElementById("gate11").onclick = function(e){
    // alert(e.target.parentNode.id);
};




/*document.getElementById("gate").animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-300px)' }
    //gate.style.height = gate.style.height - "1%"

], {
    // timing options
    duration: 1000,
    iterations: Infinity
});*/

let lastA = document.getElementById("last11");

let gateA = document.getElementById("gate11");

gateA.style.color = "yellow";

let b09PushR = document.getElementById("btnPush09R");
b09PushR.addEventListener("click",goDownForA);
let list09A = document.getElementById("select09right");
function goDownForA(){
   // alert();
    if (checkForDoubleA1 === false){
        return;
    }
    if (checkForDoubleA === false){
        return;
    }
    //alert(list09A.value);
    if (list09A.value === "blank" || list09A.value === "Floor 10"){
        clearInterval(ttA);
        return;
    }


    checkForDoubleA1 = false;
    //alert(this.id);
    temptT1A = this.id;

    ttA = setInterval( mainA ,10 );
}

function mainA() {
    console.log(temptT1A);
    //alert(tempT);
    /*if (tempT1 === "btnPush10L") {
         goDown1(list10.value);position(list10.value,tt);
     }*/

    if (temptT1A === "btnPush09R") {
        console.log(temptT1A);
       // alert(list09A.value);

        goDown1A(list09A.value);positionA(list09A.value,ttA);
    }

    //checkForDouble = true;
}
function goDown1A(selected){
    //alert(positinObjectA[selected] + " " + existingPositionA);

    if (true){

        if (positinObjectA[selected]<existingPositionA){
            movingCarrageNagativeA();
        }if (positinObjectA[selected]>existingPositionA) {
            movingCarrageA();
        }if (positinObjectA[selected]===existingPositionA) {
            //existingPositionB = pos;
            carragea.style.top = existingPositionA + "px";
            //clearInterval(tt);
            //alert("hhhh");
           // return;
        }
    }
};

function movingCarrageA() {
    posA ++;
    //carrageb.style.position = "relative";
    console.log(posA);
    carragea.style.top = posA + "px";
    console.log(carragea.style.top );
}
function movingCarrageNagativeA() {
    posA --;
    //carrageb.style.position = "relative";
    console.log(posA);
    carragea.style.top = posA + "px";
    console.log(carragea.style.top );
}
function positionA(selected,time) {

    openA = true;
    gatePosA = 100;

    if (posA === 0 && selected === "no"){
        //alert();
        clearInterval(ttA);
        //clearTimeout(time);
        posA = 0;
        existingPositionA = posA;
        checkForDoubleA1 = true;
        ggA = setInterval(gateOpenA,10);
    }
    if ((posA === 0 && selected === "Floor 09") ){
        //alert();
        clearInterval(ttA);
        //clearTimeout(time);
        posA = 0;
        existingPositionA = posA;
        checkForDoubleA1 = true;
        ggA = setInterval(gateOpenA,10);
    }
    if (posA === 105 && selected === "Floor 08"){
        //alert();
        clearInterval(ttA);
        //clearTimeout(time);
        posA = 105;
        existingPositionA = posA;
        checkForDoubleA1 = true;

        //alert("jkjkj");
        ggA = setInterval(gateOpenA,10);

    }
    if (posA === 210 && selected === "Floor 07"){

        clearInterval(ttA);
        //clearTimeout(time);
        posA = 210;
        existingPositionA = posA;
        checkForDoubleA1 = true;
        ggA = setInterval(gateOpenA,10);

    }
    if (posA === 315 && selected === "Floor 06"){
        // alert(posA);
        clearInterval(ttA);
        //clearTimeout(time);
        posA = 315;
        existingPositionA = posA;
        checkForDoubleA1 = true;
        ggA = setInterval(gateOpenA,10);
    }
    if (posA === 420 && selected === "Floor 05"){
        //alert();
        clearInterval(ttA);
        //clearTimeout(time);
        posA = 420;
        existingPositionA = posA;
        checkForDoubleA1 = true;
        ggA = setInterval(gateOpenA,10);
    }
    if (posA === 525 && selected === "Floor 04"){
        //alert();
        clearInterval(ttA);
        //clearTimeout(time);
        posA = 525;
        existingPositionA = posA;
        checkForDoubleA1 = true;
        ggA = setInterval(gateOpenA,10);
    }
    if (posA === 630 && selected === "Floor 03"){
        //alert();
        clearInterval(ttA);
        //clearTimeout(tt);
        posA = 630;
        existingPositionA = posA;
        checkForDoubleA1 = true;
        ggA = setInterval(gateOpenA,10);
    }
    if (posA === 735 && selected === "Floor 02"){
        //alert();
        clearInterval(ttA);
        //clearTimeout(tt);
        posA = 735;
        existingPositionA = posA;
        checkForDoubleA1 = true;
        ggA = setInterval(gateOpenA,10);
    }
    if (posA === 840 && selected === "Floor 01"){
        //alert();
        clearInterval(ttA);
        //clearTimeout(tt);
        posA = 840;
        existingPositionA = posA;
        checkForDoubleA1 = true;
        ggA = setInterval(gateOpenA,10);
    }
    if (posA === 945 && selected === "Floor 00"){
        //alert();
        clearInterval(ttA);
        //clearTimeout(tt);
        posA = 945;
        existingPositionA = posA;
        checkForDoubleA1= true;
        ggA = setInterval(gateOpenA,10);
    }
    if (posA === 1050 && selected === "Floor -1"){
        //alert();
        clearInterval(ttA);
        //clearTimeout(tt);
        posA = 1050;
        existingPositionA = posA;
        checkForDoubleA1= true;
        ggA = setInterval(gateOpenA,10);
    }
    if (posA === 1155 && selected === "Floor -1"){
        //alert();
        clearInterval(ttA);
        //clearTimeout(tt);
        posA = 1155;
        existingPositionA = posA;
        checkForDoubleA1= true;
        ggA = setInterval(gateOpenA,10);
    }

}

function gateOpenA(){
    //alert(open + " "+gatePos);
    if (openA === true){
        //during opened gate other calling request makes uneffective
        checkForDoubleA1 = false;
        gatePosA--;
        gateA.style.height = gatePosA + "%";
        //gate.style.top = 20 + "px";
        //gate.style.visibility = null;
        //last.style.top = -2 + "px";
        if (gatePosA <= 0){
            gatePosA = 0;
            openA = false;
            clearInterval(ggA);
            setTimeout(timeAutoCloseDoorA,4000);

            return;
        }
    }
    if (openA === false){
        gatePosA++;
        gateA.style.height = gatePosA + "%";
        //last.style.top = -15 + "px";
        if (gatePosA >= 100){
            gatePosA = 100;
            openA = true;
            clearInterval(ggA);
            //gate.style.top = 0 + "px";
            return;
        }
    }
}
function timeAutoCloseDoorA() {
    ggA =  setInterval(gateOpenA,10);
    checkForDoubleA1 = true;
}

//////
let emergencyA = document.getElementById("emergency11");
emergencyA.addEventListener("click",stopCarrageA);
function stopCarrageA(){
    //alert(pos);
    clearInterval(ttA);
    ttA =  setInterval(kkA,10);
    checkForDoubleA = false;checkForDoubleA1 = false;
    let ebtnA = document.getElementById("reset11");
    ebtnA.style.color = "#afe2af";

}
let resetAllA = document.getElementById("reset11");
resetAllA.addEventListener("click",resetCarrageA);
function resetCarrageA() {
    clearInterval(ttA);checkForDoubleA = true;checkForDoubleA1 = true;
    this.style.color = "white";
}
function kkA(){
    if (posA >= 0 && posA < 105 ){
        //alert(1);

        goDown11A(positinObject["Floor 10"],posA);positionA("Floor 10",ttA);
    }
    if (posA >= 105 && posA < 210 ){
        //alert(2);
        //goDown1("Floor 09");position("Floor 09",tt);
        goDown11A(positinObject["Floor 09"],posA);positionA("Floor 09",ttA);
        //clearInterval(tt);
        //clearTimeout(time);

    }
    if (posA >= 210 && posA < 315 ){
        //alert(3);
        // goDown1("Floor 08");position("Floor 08",tt);
        goDown11A(positinObject["Floor 08"],posA);positionA("Floor 08",ttA);

    }
    if (posA >= 315 && posA < 420 ){
        // alert(4);
        //goDown1("Floor 07");position("Floor 07",tt);
        goDown11A(positinObject["Floor 07"],posA);positionA("Floor 07",ttA);
    }
    if (posA >= 420 && posA < 525 ){
        //alert(5);
        //goDown1("Floor 06");position("Floor 06",tt);
        goDown11A(positinObject["Floor 06"],posA);positionA("Floor 06",ttA);

    }
    if (posA >= 525 && posA < 630 ){
        //alert(5);
        //goDown1("Floor 06");position("Floor 06",tt);
        goDown11A(positinObject["Floor 05"],posA);positionA("Floor 05",ttA);

    }
    if (posA >= 630 && posA < 735 ){
        //alert(5);
        //goDown1("Floor 06");position("Floor 06",tt);
        goDown11A(positinObject["Floor 04"],posA);positionA("Floor 04",ttA);

    }
    if (posA >= 735 && posA < 840 ){
        //alert(5);
        //goDown1("Floor 06");position("Floor 06",tt);
        goDown11A(positinObject["Floor 03"],posA);positionA("Floor 03",ttA);

    }
    if (posA >= 840 && posA < 945 ){
        //alert(5);
        //goDown1("Floor 06");position("Floor 06",tt);
        goDown11A(positinObject["Floor 02"],pos);positionA("Floor 02",ttA);

    }
    if (posA >= 945 && posA < 1050 ){
        //alert(5);
        //goDown1("Floor 06");position("Floor 06",tt);
        goDown11A(positinObject["Floor 01"],posA);positionA("Floor 01",ttA);

    }
    if (posA >= 1050 && posA < 1155 ){
        //alert(5);
        //goDown1("Floor 06");position("Floor 06",tt);
        goDown11A(positinObject["Floor 00"],posA);positionA("Floor 00",ttA);

    }
}
function goDown11A(selected,existing){

    if (true){
        //alert(selected + " " + existing);
        if (selected<existing){
            movingCarrageNagativeA();
        }if (selected>existing) {
            movingCarrageA();
        }if (selected===existing) {
            //existingPositionB = pos;
            carragea.style.top = existing + "px";
            //clearInterval(tt);
            //alert("hhhh");
            //return;
        }
    }
};
//////////////////////
let b10DnA = document.getElementById("btn10R");
b10DnA.addEventListener("click",callCarrageToMyFloorA);
let b09DnA = document.getElementById("btn09R");
b09DnA.addEventListener("click",callCarrageToMyFloorA);
let b08DnA = document.getElementById("btn08R");
b08DnA.addEventListener("click",callCarrageToMyFloorA);
let b07DnA = document.getElementById("btn07R");
b07DnA.addEventListener("click",callCarrageToMyFloorA);
let b06DnA = document.getElementById("btn06R");
b06DnA.addEventListener("click",callCarrageToMyFloorA);
let b05DnA = document.getElementById("btn05R");
b05DnA.addEventListener("click",callCarrageToMyFloorA);
let b04DnA = document.getElementById("btn04R");
b04DnA.addEventListener("click",callCarrageToMyFloorA);
let b03DnA = document.getElementById("btn03R");
b03DnA.addEventListener("click",callCarrageToMyFloorA);
let b02DnA = document.getElementById("btn02R");
b02DnA.addEventListener("click",callCarrageToMyFloorA);
let b01DnA = document.getElementById("btn01R");
b01DnA.addEventListener("click",callCarrageToMyFloorA);
let b00DnA = document.getElementById("btn00R");
b00DnA.addEventListener("click",callCarrageToMyFloorA);
let b0_1DnA = document.getElementById("btn-1R");
b0_1DnA.addEventListener("click",callCarrageToMyFloorA);

///////////////
function callCarrageToMyFloorA(e) {
    //alert("no");
    //alert(e.target.id);
    if (checkForDoubleA === false){
        return;
    }
    if (checkForDoubleA1 === false){
        return;
    }
    if (e.target.id === "btn10R") {
        // This Carrage can not reach floor 10
        return;
    }

    let txt1 = getInnerText(this.id );
    temptT1A = txt1;
    //console.log(txt1);
    //alert( "ttttt" + checkForDouble);
    //alert("tempt" + tempT + " " +txt1);
    //buttonDisable(this.id);
    if (txt1 === "b10R"){

        //alert(txt1);
        checkForDoubleA = false;
        ttA = setInterval( goHomeA ,10 );
    }
    if (txt1 === "b09R"){

        //if (checkForDouble === true) {
        //alert("ggg" + checkForDouble);
        checkForDoubleA = false;
        ttA = setInterval( goHomeA ,10 );
        //}
        //alert(txt1);

    }
    if (txt1 === "b08R"){

        //alert(txt1);
        checkForDoubleA = false;
        ttA = setInterval( goHomeA ,10 );
    }
    if (txt1 === "b07R"){

        //alert(txt1);
        checkForDoubleA = false;
        ttA = setInterval( goHomeA ,10 );
    }
    if (txt1 === "b06R"){

        //alert(txt1);
        checkForDoubleA = false;
        ttA = setInterval( goHomeA ,10 );
    }
    if (txt1 === "b05R"){

        //alert(txt1);
        checkForDoubleA = false;
        ttA = setInterval( goHomeA ,10 );
    }
    if (txt1 === "b04R"){

        //alert(txt1);
        checkForDoubleA = false;
        ttA = setInterval( goHomeA ,10 );
    }
    if (txt1 === "b03R"){

        // alert(txt1);
        checkForDoubleA = false;
        ttA = setInterval( goHomeA ,10 );
    }
    if (txt1 === "b02R"){

        //alert(txt1);
        checkForDoubleA = false;
        ttA = setInterval( goHomeA ,10 );
    }
    if (txt1 === "b01R"){

        //alert(txt1);
        checkForDoubleA = false;
        ttA = setInterval( goHomeA ,10 );
    }
    if (txt1 === "b00R"){

        //alert(txt1);
        checkForDoubleA = false;
        ttA = setInterval( goHomeA ,10 );
    }
    if (txt1 === "b-1R"){

        //alert(txt1);
        checkForDoubleA = false;
        ttA = setInterval( goHomeA ,10 );
    }
}
function goHomeA() {
    // checkForDouble = false;
    //alert("jjjjjj"+ tempT);

    if (temptT1A === "b10R"){
        goDown1A("Floor 10");positionA("Floor 10",ttA);
        if (posA === 0){
            checkForDoubleA = true;
        }
    }
    if (temptT1A === "b09R"){
        goDown1A("Floor 09");positionA("Floor 09",ttA);
        if (posA === 0){
            checkForDoubleA = true;
        }

    }
    if (temptT1A === "b08R"){
        goDown1A("Floor 08");positionA("Floor 08",ttA);
        if (posA === 105){
            checkForDoubleA = true;
        }
    }
    if (temptT1A === "b07R"){
        goDown1A("Floor 07");positionA("Floor 07",ttA);
        if (posA === 210){
            checkForDoubleA = true;
        }
    }
    if (temptT1A === "b06R"){
        goDown1A("Floor 06");positionA("Floor 06",ttA);
        if (posA === 315){
            checkForDoubleA = true;
        }
    }
    if (temptT1A === "b05R"){
        goDown1A("Floor 05");positionA("Floor 05",ttA);
        if (posA === 420){
            checkForDoubleA = true;
        }
    }
    if (temptT1A === "b04R"){
        goDown1A("Floor 04");positionA("Floor 04",ttA);
        if (posA === 525){
            checkForDoubleA = true;
        }
    }
    if (temptT1A === "b03R"){
        goDown1A("Floor 03");positionA("Floor 03",ttA);
        if (posA === 630){
            checkForDoubleA = true;
        }
    }
    if (temptT1A === "b02R"){
        goDown1A("Floor 02");positionA("Floor 02",ttA);
        if (posA === 735){
            checkForDoubleA = true;
        }
    }
    if (temptT1A === "b01R"){
        goDown1A("Floor 01");positionA("Floor 01",ttA);
        if (posA === 840){
            checkForDoubleA = true;
        }
    }
    if (temptT1A === "b00R"){
        goDown1A("Floor 00");positionA("Floor 00",ttA);
        if (posA === 945){
            checkForDoubleA = true;
        }
    }
    if (temptT1A === "b-1R"){
        goDown1A("Floor 00");positionA("Floor -1",ttA);
        if (posA === 1050){
            checkForDoubleA = true;
        }
    }
    //buttonAble();
}


//automatic
function autoSet(){

}