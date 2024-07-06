
let textinput="";
let todos=[];
const textinp=document.getElementById("inp");
const addtolist=document.getElementById("add");
const todoslist = document.getElementById("list");

textinp.addEventListener("change",function(event){
    textinput=event.target.value;
});

addtolist.addEventListener("click",addtodo);

function addtodo(e){
        e.preventDefault();
        todos.unshift({id:todos.length+1, todotext: textinput});
        document.getElementById("inp").value="";
        displaylist();
        console.log(todos);
}

function displaylist(){
        let box="";
        if(todos.length==0){
            todoslist.innerHTML="List is empty!"

        }
        else{

            todos.forEach((item)=>{
                box+= `
                 <li>
                    <span>${item.todotext}</span>
                    <button class="remove" onclick="deletetodo(${item.id})">Remove</button>
                </li>
                `;
               
            });

            todoslist.innerHTML=box;
        }

      
}


function deletetodo(id){
    let deletedid;
    for(let index in todos){
        if(todos[index].id==id){
            deletedid=index;
        }
}
todos.splice(deletedid,1);
displaylist();
}

function clearAll(){
todos.splice(0,todos.length);
displaylist();
}

displaylist();