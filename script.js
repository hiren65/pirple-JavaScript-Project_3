//alert();
let carrageb = document.getElementById("carrage-B");
carrageb.style.position = "relative";
let pos = 0;
let tt;
let existingPositionB = 5;
let currentCallFloorPosition;

let positinObject = {
    "Floor 10":0,
    "Floor 09":105,
    "Floor 08":210,
    "Floor 07":315,
    "Floor 06":315,
    "Floor 05":420,
    "Floor 04":525,
    "Floor 03":630,
    "Floor 02":735,
    "Floor 01":840,
    "Floor 00":945,
    "Floor -1":1050,
};
/////////
let b10Dn = document.getElementById("btn10L");
b10Dn.addEventListener("click",goDown);

let list10 = document.getElementById("select10left");

function goDown (){

        tt = setInterval( goDown1,10 );
}
/////////

function goDown1(){

    if (true){
        if (positinObject[list10.value]<existingPositionB){
            movingCarrageNagative();
        }if (positinObject[list10.value]>existingPositionB) {
            movingCarrage();
        }if (positinObject[list10.value]===existingPositionB) {
            //existingPositionB = pos;
            carrageb.style.top = existingPositionB + "px";
            //clearInterval(tt);
            //return;
        }
    }

    position();

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
function position() {
    if (pos === 0 && list10.value === "Floor 10" || pos === 0 && list10.value === "no"){
        //alert();
        clearInterval(tt);
        pos = 0;
        existingPositionB = pos;
    }
    if (pos === 105 && list10.value === "Floor 09"){
        alert();
        clearInterval(tt);
        pos = 105;
        existingPositionB = pos;
    }
    if (pos === 210 && list10.value === "Floor 08"){
        //alert();
        clearInterval(tt);
        pos = 210;
        existingPositionB = pos;
    }
    if (pos === 315 && list10.value === "Floor 07"){
        //alert();
        clearInterval(tt);
        pos = 315;
        existingPositionB = pos;
    }
    if (pos === 420 && list10.value === "Floor 06"){
        //alert();
        clearInterval(tt);
        pos = 420;
        existingPositionB = pos;
    }
    if (pos === 525 && list10.value === "Floor 05"){
        //alert();
        clearInterval(tt);
        pos = 525;
        existingPositionB = pos;
    }
    if (pos === 630 && list10.value === "Floor 04"){
        //alert();
        clearInterval(tt);
        pos = 630;
        existingPositionB = pos;
    }
    if (pos === 735 && list10.value === "Floor 03"){
        //alert();
        clearInterval(tt);
        pos = 735;
        existingPositionB = pos;
    }
    if (pos === 840 && list10.value === "Floor 02"){
        //alert();
        clearInterval(tt);
        pos = 840;
        existingPositionB = pos;
    }
    if (pos === 945 && list10.value === "Floor 01"){
        //alert();
        clearInterval(tt);
        pos = 945;
        existingPositionB = pos;
    }
    if (pos === 1050 && list10.value === "Floor 00"){
        //alert();
        clearInterval(tt);
        pos = 1050;
        existingPositionB = pos;
    }
}