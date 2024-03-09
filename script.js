const taskinput = document.getElementById('task-input');
const addBtn = document.getElementById('addBtn');
const unordered = document.getElementById('unordered');
// const taskList = document.getElementsByTagName('li');

addBtn.addEventListener('click', () => {
    if(taskinput.value ===''){
        alert("First Enter some task")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = taskinput.value;
        unordered.append(li);
        let span = document.createElement('span');
        span.innerHTML = "&times;"
        li.append(span)
        saveListdata()
    }
    taskinput.value = '';
})

unordered.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        
        saveListdata()
        
    }
  
    if (e.target.tagName == "SPAN"){
        const li = e.target.parentElement;
        li.remove();
        saveListdata()
    }
})
function showListData(){
   unordered.innerHTML = localStorage.getItem('listItem');
}

function saveListdata(){
    localStorage.setItem('listItem', unordered.innerHTML)
}

showListData()