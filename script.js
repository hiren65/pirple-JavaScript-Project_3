//alert();
let carrageb = document.getElementById("carrage-B");
carrageb.style.position = "relative";
let pos = 0;
let tt,tt1;
let existingPositionB = 0;
let currentCallFloorPosition;
let checkForDouble = true;
//for DIV id
let tempT;let tempT1;

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

let b10PushL = document.getElementById("btnPush10L");
b10PushL.addEventListener("click",goDown);

function goDown (){
        if (checkForDouble === false){
            return;
        }
        checkForDouble = false;
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

let b08PushL = document.getElementById("btnPush08L");
b08PushL.addEventListener("click",goDown);
//////////////////////////////

let list07 = document.getElementById("select07left");

let b07Dn = document.getElementById("btn07L");
b07Dn.addEventListener("click",callCarrageToMyFloor);

let b07PushL = document.getElementById("btnPush07L");
b07PushL.addEventListener("click",goDown);
//////////////////////////////

let list06 = document.getElementById("select06left");

let b06Dn = document.getElementById("btn06L");
b06Dn.addEventListener("click",callCarrageToMyFloor);

let b06PushL = document.getElementById("btnPush06L");
b06PushL.addEventListener("click",goDown);
//////////////////////////////
function main() {

    //alert(tempT);
   if (tempT1 === "btnPush10L") {
        goDown1(list10.value);position(list10.value,tt);
    }
    if (tempT1 === "btnPush09L") {
        goDown1(list09.value);position(list09.value,tt);
    }
    if (tempT1 === "btnPush08L") {
        goDown1(list08.value);position(list08.value,tt);
    }
    if (tempT1 === "btnPush07L") {
        goDown1(list07.value);position(list07.value,tt);
    }
    if (tempT1 === "btnPush06L") {
        goDown1(list06.value);position(list06.value,tt);
    }

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
        checkForDouble = true;
    }
    if ((pos === 0 && selected === "Floor 10") || (pos === 0 && selected === "no")){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 0;
        existingPositionB = pos;
        checkForDouble = true;
    }
    if (pos === 105 && selected === "Floor 09"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 105;
        existingPositionB = pos;
        checkForDouble = true;
    }
    if (pos === 210 && selected === "Floor 08"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 210;
        existingPositionB = pos;
        checkForDouble = true;
    }
    if (pos === 315 && selected === "Floor 07"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 315;
        existingPositionB = pos;
        checkForDouble = true;
    }
    if (pos === 420 && selected === "Floor 06"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 420;
        existingPositionB = pos;
        checkForDouble = true;
    }
    if (pos === 525 && selected === "Floor 05"){
        //alert();
        clearInterval(tt);
        //clearTimeout(time);
        pos = 525;
        existingPositionB = pos;
        checkForDouble = true;
    }
    if (pos === 630 && selected === "Floor 04"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 630;
        existingPositionB = pos;
        checkForDouble = true;
    }
    if (pos === 735 && selected === "Floor 03"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 735;
        existingPositionB = pos;
        checkForDouble = true;
    }
    if (pos === 840 && selected === "Floor 02"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 840;
        existingPositionB = pos;
        checkForDouble = true;
    }
    if (pos === 945 && selected === "Floor 01"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 945;
        existingPositionB = pos;
        checkForDouble = true;
    }
    if (pos === 1050 && selected === "Floor 00"){
        //alert();
        clearInterval(tt);
        //clearTimeout(tt);
        pos = 1050;
        existingPositionB = pos;
        checkForDouble = true;
    }
}

function callCarrageToMyFloor() {
    let txt1 = getInnerText(this.id );
    tempT = txt1;
    //console.log(txt1);
    //alert(txt1);
    if (txt1 === "b10L"){
        if (checkForDouble === false){
            return;
        }
        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
    if (txt1 === "b09L"){
        if (checkForDouble === false){
            return;
        }
        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
    if (txt1 === "b08L"){
        if (checkForDouble === false){
            return;
        }
        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
    if (txt1 === "b07L"){
        if (checkForDouble === false){
            return;
        }
        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
    if (txt1 === "b06L"){
        if (checkForDouble === false){
            return;
        }
        //alert(txt1);
        checkForDouble = false;
        tt = setInterval( goHome ,10 );
    }
}
function goHome() {

    if (tempT === "b10L"){
        goDown1("Floor 10");position("Floor 10",tt);
    }
    if (tempT === "b09L"){
        goDown1("Floor 09");position("Floor 09",tt);
    }
    if (tempT === "b08L"){
        goDown1("Floor 08");position("Floor 08",tt);
    }
    if (tempT === "b07L"){
        goDown1("Floor 07");position("Floor 07",tt);
    }
    if (tempT === "b06L"){
        goDown1("Floor 06");position("Floor 06",tt);
    }


}
function getInnerText(id) {
    let txt = document.getElementById(id);
    var x = document.getElementById(id).parentElement.id;
    return x;
}






//automatic
function autoSet(){

}