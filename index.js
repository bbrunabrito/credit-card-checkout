let nameCard = document.getElementById('name')


nameCard.addEventListener('keyup', function(){
    document.getElementById('cred-name').innerHTML = nameCard.value
    document.getElementById('cred-name').style.textTransform = 'uppercase'
})

let numberCard = document.getElementById('number')

numberCard.onkeyup = function() {
    if(numberCard.value.length > 15){
        numberCard.setAttribute('disabled', 'disabled')
    }
}

numberCard.addEventListener('change', function(){
        document.getElementById('cred-num').innerHTML = numberCard.value[0] + numberCard.value[1] + numberCard.value[2] + numberCard.value[3] + " " + numberCard.value[4] + numberCard.value[5] + numberCard.value[6] + numberCard.value[7] + ' ' + numberCard.value[8] + numberCard.value[9] + numberCard.value[10] + numberCard.value[11] + ' ' + numberCard.value[12] + numberCard.value[13] + numberCard.value[14] + numberCard.value[15];

       

     if(numberCard.value[0] === '4'){
         document.getElementById('visa').style.opacity = '1'
         document.getElementById('mastercard').style.opacity = '0'
     } else if(numberCard.value[0] === '5'){
        document.getElementById('mastercard').style.opacity = '1'
        document.getElementById('visa').style.opacity = '0'
     } 

    
})

let expiryDate = document.getElementById('mounth')

expiryDate.addEventListener('change', function () {
    document.getElementById('cred-date').innerHTML = expiryDate.value[0] + expiryDate.value[1] + '/' + expiryDate.value[2] + expiryDate.value[3]

   

})
expiryDate.onkeyup = function () {
    if(expiryDate.value.length > 3) expiryDate.setAttribute('disabled', 'disabled')
}

let cvc = document.getElementById('cvc')

cvc.addEventListener('keyup', function(){
    document.getElementById('cred-code').innerHTML = cvc.value
    if(cvc.value.length > 2) cvc.setAttribute('disabled', 'disabled')
})