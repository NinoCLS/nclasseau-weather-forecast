const form = document.getElementById('select');
const town = document.getElementById('town');
const button = document.getElementById('button');
const screen = document.querySelector('.screen');


function getWeather(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9568a0c35e70901db53dc16e2c85b1cf`)
    
    .then(res => 
        res.json()
    )  
    .then(res => 
        res.weather[0].main
    )
    .then(res => {
        return res
    })
    .catch( err => console.log(err))
}

function insertImg(img) {
    let newImg = document.createElement('img');
    newImg.setAttribute('src', img);
    newImg.classList.add('image');
    console.log(newImg);
    return screen.append(newImg)
    //inner html 
}



document.addEventListener('DOMContentLoaded', () => {


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let city = town.value;
        getWeather(city).then(res => {
            
            if (res === 'Clear') {
                let img = './icon/sun.svg';
                insertImg(img)
                
            } 
            if (res === 'Snow') {
                let img = './icon/snow.svg';
                insertImg(img)
                
            } 
            if (res === 'Clouds') {
                let img = './icon/clouds.svg';
                insertImg(img)

                
            } 
            if (res === 'Cloudy') {
                let img = './icon/cloudy.svg';
                insertImg(img)                

            } 
            if (res === 'Rain' | res === 'Thunderbolt' | res === 'Mist' | res === 'Fog') {
                let img= './icon/rain.svg';
                insertImg(img)
                
            }
        })
        
    })

})