document.getElementById('submit').addEventListener('click', function(event){

    // untuk mengehentikan form melakukan refresh page ketika tombol di klik
    event.preventDefault()

    // data berupa object
    let dataObject = {
        input : document.getElementById('name').value,
        message : document.getElementById('message').value
    }

   // kondisi untuk melakukan penambahan data dan di masukkan ke local storage
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

// ini fungsi untuk menampilkan data ke halaman melalui local.storage.getItem 
function display(){
    let content = document.getElementById('ucapan-content')
    content.innerHTML = ""

    let todos = JSON.parse(localStorage.getItem('items')) || []


    let items = ""
    todos.map((datas,index)=>{
        items = `<div class="content" key=${index}>
                    <div>
                        <h3>${datas.input}</h3>
                        <p class="mb-3">${datas.message}</p>
                    </div>
                </div>
                `
        content.insertAdjacentHTML('beforeend', items)
    })
}       


// ini untuk mengupdate data ketika ada perubahan
window.onload=function(){
    display()
}