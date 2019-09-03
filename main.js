let fakeDataBase=[

    {id:1, task: "Gå och handla", ready:false},
    {id:2, task: "Gå och sporta", ready:false},
    {id:3, task: "Gå och hålla någon i handen", ready:false}
];
let order=true;

_id("orderButton").addEventListener("click", changeOrder);
function changeOrder(){
    order=!order;
    renderFakeData();
};
renderFakeData();


function renderFakeData(){
//skapa html från vår fakedatabas
    let htmlOutput= fakeDataBase.map(function(taskObject,index){
        console.log(index);
        return `
        <div>
            <h1 id="${index}">${taskObject.task} <sub>${taskObject.ready}</sub> </h1>
            <button onclick="deleteTask(${index})">Delete</button>
            <button onclick="doneTask(${index})">DONE</button>
        </div> `;

    }); //end map
    if(order){
    document.getElementById("taskList").innerHTML=htmlOutput.join("");
    }
    else{
        document.getElementById("taskList").innerHTML=htmlOutput.reverse().join("");
    }
}



// lyssna efter form submit
document.getElementById("taskForm").addEventListener("submit", addTask);

function addTask(event){
    event.preventDefault();
    
    


//gäta input-datan
let inputText=document.getElementById("taskId").value;
//skapa ett task-object
if(inputText.trim() !="")
{
let taskObject={id:Date.now(), task:inputText, ready:false}
//spara i fakedatabas
fakeDataBase.push(taskObject);
//rendera på nytt
renderFakeData(); }
document.getElementById("taskId").value="";
document.getElementById("taskId").focus();
}

function deleteTask(index){
    fakeDataBase.splice(index,1);
    renderFakeData();
}

function doneTask(index){
    fakeDataBase[index].ready=!fakeDataBase[index].ready;
    renderFakeData();

}



function _id(id){
    return document.getElementById(id);
}