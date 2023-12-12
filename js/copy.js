function copy1(){
    const inputRek1 = document.getElementById('input1')

    //select the field
    inputRek1.select()
    inputRek1.setSelectionRange(0, 99999) // mobile devices


    navigator.clipboard.writeText(inputRek1.value)

    alert('text di salin :' + inputRek1.value)
}

function copy2(){
    const inputRek2 = document.getElementById('input2')


     //select the field
     inputRek2.select()
     inputRek2.setSelectionRange(0, 99999) // mobile devices

    navigator.clipboard.writeText(inputRek2.value)

    alert('text di salin :' + inputRek2.value)
}