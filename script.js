//alert();
let carrageb = document.getElementById("carrage-B");
carrageb.style.position = "relative";
let pos = 0;
let tt,tt1;
let existingPositionB = 0;
let currentCallFloorPosition;
let checkForDouble = true;
//for push
let checkForDouble1 = true;
//for DIV id
let tempT;let tempT1;
let gatePos = 0;
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
let list10 = document.getElementById("select10left");
////////////////
let b10Dn = document.getElementById("btn10L");
b10Dn.addEventListener("click",callCarrageToMyFloor);

/*let b10PushL = document.getElementById("btnPush10L");
b10PushL.addEventListener("click",goDown);*/

function goDown (){
        if (checkForDouble1 === false){
            return;
        }
    if (checkForDouble === false){
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

/*function goDown01 (){
        if (checkForDouble === false){
            return;
        }
        checkForDouble = false;
        tempT1 = this.id;
        tt = setInterval( main ,10 );

}*/
//////////////////////////////////////////
let list08 = document.getElementById("select08left");
//let list08 = document.getElementById("select08left");

let b08Dn = document.getElementById("btn08L");
b08Dn.addEventListener("click",callCarrageToMyFloor);

/*let b08PushL = document.getElementById("btnPush08L");
b08PushL.addEventListener("click",goDown);*/
//////////////////////////////

let list07 = document.getElementById("select07left");

let b07Dn = document.getElementById("btn07L");
b07Dn.addEventListener("click",callCarrageToMyFloor);

/*let b07PushL = document.getElementById("btnPush07L");
b07PushL.addEventListener("click",goDown);*/
//////////////////////////////

let list06 = document.getElementById("select06left");

let b06Dn = document.getElementById("btn06L");
b06Dn.addEventListener("click",callCarrageToMyFloor);

/*let b06PushL = document.getElementById("btnPush06L");
b06PushL.addEventListener("click",goDown);*/
//////////////////////////////
let list05 = document.getElementById("select05left");

let b05Dn = document.getElementById("btn05L");
b05Dn.addEventListener("click",callCarrageToMyFloor);

//let b05PushL = document.getElementById("btnPush05L");
//b05PushL.addEventListener("click",goDown);
//////////////////////////////
let list04 = document.getElementById("select04left");

let b04Dn = document.getElementById("btn04L");
b04Dn.addEventListener("click",callCarrageToMyFloor);

/*let b04PushL = document.getElementById("btnPush04L");
b04PushL.addEventListener("click",goDown);*/
//////////////////////////////
let list03 = document.getElementById("select03left");

let b03Dn = document.getElementById("btn03L");
b03Dn.addEventListener("click",callCarrageToMyFloor);

/*let b03PushL = document.getElementById("btnPush03L");
b03PushL.addEventListener("click",goDown);*/
//////////////////////////////
let list02 = document.getElementById("select02left");

let b02Dn = document.getElementById("btn02L");
b02Dn.addEventListener("click",callCarrageToMyFloor);

/*let b02PushL = document.getElementById("btnPush02L");
b02PushL.addEventListener("click",goDown);*/
//////////////////////////////
let list01 = document.getElementById("select01left");

let b01Dn = document.getElementById("btn01L");
b01Dn.addEventListener("click",callCarrageToMyFloor);

/*let b01PushL = document.getElementById("btnPush01L");
b01PushL.addEventListener("click",goDown);*/
//////////////////////////////
let list00 = document.getElementById("select00left");

let b00Dn = document.getElementById("btn00L");
b00Dn.addEventListener("click",callCarrageToMyFloor);

/*let b00PushL = document.getElementById("btnPush00L");
b00PushL.addEventListener("click",goDown);*/

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
/*    if (tempT1 === "btnPush08L") {
        goDown1(list08.value);position(list08.value,tt);
    }
    if (tempT1 === "btnPush07L") {
        goDown1(list07.value);position(list07.value,tt);
    }
    if (tempT1 === "btnPush06L") {
        goDown1(list06.value);position(list06.value,tt);
    }
    if (tempT1 === "btnPush05L") {
        goDown1(list05.value);position(list05.value,tt);
    }
    if (tempT1 === "btnPush04L") {
        goDown1(list04.value);position(list04.value,tt);
    }
    if (tempT1 === "btnPush03L") {
        goDown1(list03.value);position(list03.value,tt);
    }
    if (tempT1 === "btnPush02L") {
        goDown1(list02.value);position(list02.value,tt);
    }
    if (tempT1 === "btnPush01L") {
        goDown1(list01.value);position(list01.value,tt);
    }
    if (tempT1 === "btnPush00L") {
        goDown1(list00.value);position(list00.value,tt);
    }
    if (tempT1 === "btnPush-1L") {
        goDown1(list_1.value);position(list_1.value,tt);
    }*/
    //checkForDouble = true;
}
/*function main1() {
    goDown1(list09.value);position(list09.value,tt);
}*/
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


    if (pos === 0 && selected === "no"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 0;
        existingPositionB = pos;
        checkForDouble1 = true;
    }
    if ((pos === 0 && selected === "Floor 10") || (pos === 0 && selected === "no")){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 0;
        existingPositionB = pos;
        checkForDouble1 = true;
    }
    if (pos === 105 && selected === "Floor 09"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 105;
        existingPositionB = pos;
        checkForDouble1 = true;
    }
    if (pos === 210 && selected === "Floor 08"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 210;
        existingPositionB = pos;
        checkForDouble1 = true;
    }
    if (pos === 315 && selected === "Floor 07"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 315;
        existingPositionB = pos;
        checkForDouble1 = true;
    }
    if (pos === 420 && selected === "Floor 06"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 420;
        existingPositionB = pos;
        checkForDouble1 = true;
    }
    if (pos === 525 && selected === "Floor 05"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 525;
        existingPositionB = pos;
        checkForDouble1 = true;
    }
    if (pos === 630 && selected === "Floor 04"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 630;
        existingPositionB = pos;
        checkForDouble1 = true;
    }
    if (pos === 735 && selected === "Floor 03"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 735;
        existingPositionB = pos;
        checkForDouble1 = true;
    }
    if (pos === 840 && selected === "Floor 02"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 840;
        existingPositionB = pos;
        checkForDouble1 = true;
    }
    if (pos === 945 && selected === "Floor 01"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 945;
        existingPositionB = pos;
        checkForDouble1= true;
    }
    if (pos === 1050 && selected === "Floor 00"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 1050;
        existingPositionB = pos;
        checkForDouble1= true;
    }
    if (pos === 1155 && selected === "Floor -1"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 1155;
        existingPositionB = pos;
        checkForDouble1= true;
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
gatePos =  100;
gate.style.color = "yellow";
//alert("gg " + typeof gate.style.height);
let open = true;
function gateOpen(){
    if (open){
        gatePos--;
        gate.style.height = gatePos + "%";
        //gate.style.visibility = null;
        last.style.top = 0;
        if (gatePos === 0){
            clearInterval(gg);
        }
    }
     if (open === false){
         gatePos++;
         gate.style.height = gatePos + "%";
         last.style.top = -20+ "px";
         if (gatePos === 100){
             clearInterval(gg);

         }
     }
}
let gg = setInterval(gateOpen,10);
gg();







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


//automatic
function autoSet(){

}