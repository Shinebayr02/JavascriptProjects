const taskInput = document.getElementById('input');
const taskList = document.getElementById('list');
function addList(){
    const task = taskInput.value;
    if(task !== ''){
        const li = document.createElement('li');
        li.innerHTML = task;
        taskList.appendChild(li);
        const span = document.createElement('span');
        span.innerHTML = '\u00D7';
        li.appendChild(span);
        taskInput.value = '';
        
    }
    else{
        alert('Please enter a task');
    }
    
}
taskList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
    else
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
});
        
