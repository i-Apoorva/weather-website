const weatherForm= document.querySelector('form')
const search= document.querySelector('input')
const msgOne= document.querySelector('#msg-1')
const msgTwo= document.querySelector('#msg-2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location= search.value
    msgOne.textContent="Loading..."
    msgTwo.textContent=""
    console.log(location)
    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                msgOne.textContent= data.error;
                
                return console.log(data.error);
            }
            msgOne.textContent= data.location;
            msgTwo.textContent= data.forecast;
            console.log(data.location);
            console.log(data.forecast)
        })
    })
})

