let cmd;
let todoList=[];
while(true){
    cmd = prompt("enter the command you want");
    if(cmd==="view"){//dd pag view kanya gin enter mag loloop sa array para ma console log an mga item
        if(todoList.length===0){//dd gn check kun may sulud an array pag zero execute sa ubus an code
            console.log("your todo list is empty please add");
        }else{//pag may sulud an array mag loloop cya ig priprint kada item
            let count = 0;
            console.log("*********")
            for(i of todoList){
                console.log(`${count}. ${i}`)
                count++;
            }
            console.log("*********")
        }
    }else if(cmd==="new"){
        let todo =prompt("add a todolist")
        todoList.push(todo);
        alert("SUCCESFULY ADDED")
        console.log(todo)
    }else if(cmd ==="q"){
        break;
    }else if(cmd ==="del"){
        let del = prompt("enter the index pf the item you want to delete")
        console.log(`the item you deleted is ${todoList.splice(del)}`)
        
    }

}