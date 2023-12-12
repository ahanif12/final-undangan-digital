document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault()

    let dataObject = {
        input : document.getElementById('name').value,
        message : document.getElementById('message').value
    }

   
    
    if (dataObject.input !== "" || dataObject.message !== "") {
        let dataArray = JSON.parse(localStorage.getItem('items')) || []
        dataArray.push(dataObject)
        localStorage.setItem('items', JSON.stringify(dataArray))
        display()
        document.getElementById('name').value = ""
        document.getElementById('message').value = ""
    }else{
        alert('nama dan pesan harus di isi')
    }
})

function display(){
    let content = document.getElementById('ucapan-content')
    content.innerHTML = ""

    let todos = JSON.parse(localStorage.getItem('items')) || []
    let items = ""
    todos.map((datas,index)=>{
        items = `<div class="content" key=${index}>
                    <h3>${datas.input}</h3>
                    <p class="mb-3">${datas.message}</p>
                </div>`

                content.insertAdjacentHTML('beforeend', items)
            })
            
    // let items = `<li class="content">
    // <h3>${input}</h3>
    // <p>${message}</p>
    // </li>`

    
}

window.onload=function(){
    display()
}