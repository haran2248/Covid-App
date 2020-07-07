

const message=document.querySelector('#form1')
const search=document.querySelector('input')
const confirmed=document.querySelector('#message1')
const recovered=document.querySelector('#message2')
const deaths=document.querySelector('#message3')

message.addEventListener('submit',(e)=>{
    e.preventDefault()
    const country=search.value
    fetch('/details?country='+country).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
            {
                confirmed.textContent=data.error
            }
            else{
                confirmed.textContent='Confirmed cases:'+data.confirmed
                recovered.textContent='Recovered cases:'+data.recovered
                deaths.textContent='Deaths:'+data.dead
                console.log(data.recovered)
            }
        })
    })
})