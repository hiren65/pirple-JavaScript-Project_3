//alert();
/*
<div id="b06L" class="sideBoxL"><span id="s06L">F06</span>
            <button id="btn06L">Dn</button>
            <button id="btn06LUp">Up</button>
            <select id="select06left" class="select">
                <option value="no">blank</option>
                <option value="Floor 10">Pent House</option>
                <option value="Floor 09">Floor 09</option>
                <option value="Floor 08">Floor 08</option>
                <option value="Floor 07">Floor 07</option>
                <option value="Floor 06">Floor 06</option>
                <option value="Floor 05">Floor 05</option>
                <option value="Floor 04">Floor 04</option>
                <option value="Floor 03">Floor 03</option>
                <option value="Floor 02">Floor 02</option>
                <option value="Floor 01">Floor 01</option>
                <option value="Floor 00">Floor 00</option>
                <option value="Floor -1">Floor -1</option>
            </select>
            <button id="btnPush06L">Push</button>

        </div>
 */
function switchesInSideCrrageCreation(id,id1,id2,id3,id4,id5,id6,id7,id8){
    let sw1 = document.getElementById(id);
    sw1.innerHTML = `
                 <div id= ${id5}> </div>
          <div id=${id6}>
                 <select id=${id1} class="select">
                        <option value="no">blank</option>
                        <option value="Floor 10">Pent House</option>
                        <option value="Floor 09">Floor 09</option>
                        <option value="Floor 08">Floor 08</option>
                        <option value="Floor 07">Floor 07</option>
                        <option value="Floor 06">Floor 06</option>
                        <option value="Floor 05">Floor 05</option>
                        <option value="Floor 04">Floor 04</option>
                        <option value="Floor 03">Floor 03</option>
                        <option value="Floor 02">Floor 02</option>
                        <option value="Floor 01">Floor 01</option>
                        <option value="Floor 00">Floor 00</option>
                        <option value="Floor -1">Floor -1</option>
                 </select>
                <button id=${id2}>Push</button><br>
                <button id=${id3}>emergency</button>
                <button id=${id4}>Reset</button>
          </div><i id = ${id8}>${id7}</i>
    `;
}
switchesInSideCrrageCreation("carrage-B","select09left","btnPush09L","emergency","reset","gate","last","B","i1");


switchesInSideCrrageCreation("carrage-A","select09right","btnPush09R","emergency11","reset11","gate11","last11","A","i2");


function createTemplate(id,id1,id2,id3,id4,id5,no) {
    let div = document.getElementById(id);
    div.innerHTML = `<span id=${id1}>F0${no}</span>
            <button id=${id2}>((o))</button><br>
                        
    `
}
createTemplate("b05L","s05L","btn05L","btn05LUp","select05left","btnPush05L",5);
createTemplate("b04L","s04L","btn04L","btn04LUp","select04left","btnPush04L",4);
createTemplate("b03L","s03L","btn03L","btn03LUp","select03left","btnPush03L",3);
createTemplate("b02L","s02L","btn02L","btn02LUp","select02left","btnPush02L",2);
createTemplate("b01L","s01L","btn01L","btn01LUp","select01left","btnPush01L",1);
createTemplate("b00L","s00L","btn00L","btn00LUp","select00left","btnPush00L",0);
createTemplate("b-1L","s-1L","btn-1L","btn-1LUp","select-1left","btnPush-1L",-1);
///////////////////
createTemplate("b-1R","s-1R","btn-1R","btn-1RUp","select-1right","btnPush-1R",-1);
createTemplate("b00R","s00R","btn00R","btn00RUp","select00right","btnPush00R",0);
createTemplate("b01R","s01R","btn01R","btn01RUp","select01right","btnPush01R",1);
createTemplate("b02R","s02R","btn02R","btn02RUp","select02right","btnPush02R",2);
createTemplate("b03R","s03R","btn03R","btn03RUp","select03right","btnPush03R",3);
createTemplate("b04R","s04R","btn04R","btn04RUp","select04right","btnPush04R",4);
createTemplate("b05R","s05R","btn05R","btn05RUp","select05right","btnPush05R",5);
createTemplate("b06R","s06R","btn06R","btn06RUp","select06right","btnPush06R",6);
createTemplate("b07R","s07R","btn07R","btn07RUp","select07right","btnPush07R",7);
createTemplate("b08R","s08R","btn08R","btn08RUp","select08right","btnPush08R",8);
createTemplate("b09R","s09R","btn09R","btn09RUp","select09right","btnPush09R",9);
createTemplate("b10R","s10R","btn10R","btn10RUp","select10right","btnPush10R",10);
