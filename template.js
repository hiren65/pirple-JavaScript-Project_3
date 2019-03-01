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
function switchesInSideCrrageCreation(id,id1,id2,id3,id4){
    let sw1 = document.getElementById(id);
    sw1.innerHTML = `
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
            
    `;
}
switchesInSideCrrageCreation("carrage-B","select09left","btnPush09L","emergency","reset");

function createTemplate(id,id1,id2,id3,id4,id5,no) {
    let div = document.getElementById(id);
    div.innerHTML = `<span id=${id1}>F0${no}</span>
            <button id=${id2}>Dn</button><br>
                        
    `
}
createTemplate("b05L","s05L","btn05L","btn05LUp","select05left","btnPush05L",5);
createTemplate("b04L","s04L","btn04L","btn04LUp","select04left","btnPush04L",4);
createTemplate("b03L","s03L","btn03L","btn03LUp","select03left","btnPush03L",3);
createTemplate("b02L","s02L","btn02L","btn02LUp","select02left","btnPush02L",2);
createTemplate("b01L","s01L","btn01L","btn01LUp","select01left","btnPush01L",1);
createTemplate("b00L","s00L","btn00L","btn00LUp","select00left","btnPush00L",0);
createTemplate("b-1L","s-1L","btn-1L","btn-1LUp","select-1left","btnPush-1L",-1);