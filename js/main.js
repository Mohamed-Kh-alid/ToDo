let Taskinput = document.getElementById('Taskinput');
let TaskBtn = document.getElementById('TaskBtn');
let AddTaskes1 = document.getElementById('AddTaskes1');
let NewTaskes = document.querySelector('.NewTaskes');
let closeBtn = document.querySelector('.close');
let valid = document.getElementById('valid');
let TaskDelete = document.querySelector('.TaskDelete')


let Add = ()=>{
    let push = Taskinput.value;
    if ( push.trim() == 0 || push.length <3) {
        valid.classList.remove('none')
        
    }else{

        AddTaskes1.classList.add('none');
        NewTaskes.innerHTML += `
        <div class="alert alert-info pb-4 pt-3 ">
        ${push }
        <button class=" Delete btn btn-danger float-right my-auto  "> Delete </button>
        <button class=" Edit btn btn-info float-right my-auto mr-1  "> Edit </button>
        </div>
        `
        Taskinput.value = "";
    }

}

let Delete = ()=>{
    valid.classList += " none"
}







closeBtn.addEventListener('click', Delete )
TaskBtn.addEventListener('click', Add );

document.addEventListener( 'click', function(e){

    if (e.target.classList.contains('Delete')) {
        e.target.parentElement.remove();

        if (NewTaskes.children.length == 0) {
            AddTaskes1.classList.remove('none');
               
           }
    }
   

})

