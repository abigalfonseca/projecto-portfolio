var smsCookies = document.getElementById('cookies-sms')


function aceito() {
    localStorage.skll = "sim"
    smsCookies.classList.remove('mostrar')
}

if(localStorage.skll == 'sim'){
    smsCookies.classList.remove('mostrar')
}else{
    smsCookies.classList.add('mostrar')
}