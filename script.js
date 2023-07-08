let noi = document.querySelector(".noi");
let addOne = document.querySelector(".addone");
let inputarea = document.querySelector(".for-input");
let table = document.querySelector(".table");
let execution = document.querySelector(".execution");
let tpe = document.querySelector(".tpe");
let for_output = document.querySelector(".for-output");
// tpe.style.display = 'none';
// let boxes = document.querySelectorAll(".box");
let diagram = document.querySelector(".diagram");
let inputCollection = document.createElement("div");
inputCollection.className = "inputCollection";
inputarea.appendChild(inputCollection);
// let fs = 
let displayarr=[];
let datalen=[];
class ecl{
    constructor(){
        this.elem='';
        this.code="";
        this.length='';
    }
}

let rb = document.querySelector(".reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
rb.addEventListener("click", reload, false);

// let  HuffManAlgo = require("./HuffManalgo"); 
let execute = document.querySelector(".execute");
let data=[];
let id = 0;
// let nois = document.getElementsByClassName("noi")[0];
let nois =0;
function updateValue(e){
    // console.log(e.target.value);
    nois= e.target.value;
    // e.target.value="";
}

noi.addEventListener('change',updateValue);
function putvalue(e){
    let value = e.target.value;
    // console.log(value)
    data.push(Number(value));
}

function removeFromArray(value){
    for(let i=0;i<data.length;i++){
        if(data[i]==value){
            data.splice(i,1);
        }
    }
}

addOne.addEventListener('click',function(){
    inputCollection.style.display="block"
    for(let i=0;i<nois;i++){
        let box = document.createElement("div");
        /// box for input and delbutton
        box.className='box';
        box.id=id;
       
        // intput contianer
       
         let inputbox = document.createElement("input");
        inputbox.className='probvalue';
        inputbox.placeholder=`Enter ${i+1} Prob`
        inputbox.addEventListener('change',putvalue);
       
        //delbutton
       
        let delbutton = document.createElement("button")
        delbutton.className="delbutton";
        delbutton.id = id;
        box.appendChild(inputbox);
       
        /// del icon 
       
        let delicon = document.createElement("i");
        delicon.className="fas fa-trash-alt";
        box.appendChild(delbutton);
        delbutton.innerHTML='<i class="fas fa-trash-alt"></i>'
       
        /// add box in page 
       
        inputCollection.appendChild(box);
        delbutton.addEventListener("click",function(){
          
            // console.log(delbutton.id);
          
            let prevsib = delbutton.previousElementSibling;
          
            // console.log(prevsib.value)
          
            let parNode = delbutton.parentNode;
          
            // removing value form data 
          
            removeFromArray(prevsib.value);
          
            // console.log(parNode);
            /// removing box from page 
          
            parNode.parentNode.removeChild(parNode);
        })
        id++;
    }
    
})

execute.addEventListener('click',function(){
    HuffManAlgo(data);
    // tpe.style.display = 'block';
    
    inputarea.style.display = 'none';
    document.body.style.backgroundImage = "none";
    displayarr.sort(function(a,b){
        console.log(a.elm+b.elem)
        return a.elem[1]-b.elem[1];
    })
    for_output.style.display = "block";
    let ans = "Average Length = ";
    let output = 0;
    for(let i=0;i<displayarr.length;i++){
        let obj = displayarr[i];
        let tr = document.createElement("tr");
        tr.innerHTML=`<td>${obj.elem}</td>
        <td>${obj.code}</td>
        <td>${obj.code.length}</td>`
        table.appendChild(tr);
        // let dl = [];
        // dl.push(data[i]);
        // dl.push(obj.code.length);
        // datalen.push(dl);
        ans+="  "+data[i]+" * "+obj.code.length+"  +";
        output+=data[i]* obj.code.length;
    }
    let H = 0;
    let h = "Entropy = ";
    for(let i=0;i<data.length;i++){
        h += ' '+data[i]+" * "+ "log("+(1/data[i]).toFixed(2) +")+";
        H += data[i]*(Math.log2(1/data[i]));
    }
    console.log(H);
    let div = document.createElement("div");
    div.className='AL';
    div.innerHTML=`<b> Average Length</b>  = ${ans.substring(0,ans.length-1)}==>${output.toFixed(2)}`;
    // div.innerText=;
    execution.appendChild(div);
    let div2 = document.createElement("div");
    div2.className='Ent'
    div2.innerHTML=`<b> Entropy </b>  = ${h.substring(0,ans.length)}==>${H.toFixed(2)}`;
    // div2.innerText=h.substring(0,h.length-1)+"===>"+H.toFixed(2);
    execution.appendChild(div2);
    let div3 = document.createElement("div");
    div3.className='eff';
    // div3.innerText="Efficiency = "+(output/H).toFixed(2);
    div3.innerHTML=`<b> Efficiency</b> = ${(H/output).toFixed(2)} `;
    execution.appendChild(div3);
    // console.log(datalen);
    table.style.display="block"
    execution.style.display="block"
    execute.style.display = "none"
    diagram.style.display="block"
    tpe.style.display="inline"
    alert("Upper Edge for 0 and lower edge for 1 ");
})



// let treeData = root.treeData;
