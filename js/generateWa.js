function generateWa(){
    let phonenumber = '+6289515794028'
    let name = document.getElementById('inputName').value
    let confirm = document.getElementById('inputConfirm').value
    let people = document.getElementById('inputPeople').value
    let ifconfirm = confirm === 'Hadir' ? 'Apakah masih ada tempat tersedia untuk saya dan partner ?' : 'Maaf saya tidak bisa Hadir !!!'

    let url = 'https://wa.me/' + phonenumber + '?text=' 
    +'*nama :* ' +name+'%0a'
    +'*jumlah orang :* ' +people+'%0a'
    +'*konfirmasi :* ' +confirm+'%0a'
    + ifconfirm
    window.open(url, '_blank').focus()
}