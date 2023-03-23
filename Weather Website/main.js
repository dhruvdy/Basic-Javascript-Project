const yourWeatherbtn = document.querySelector('#yourWeatherbtn');
const searchWeatherbtn = document.querySelector('#searchWeatherbtn');
const yourWeathertab = document.getElementById('yourWeather');
const grantlocationsection = document.querySelector('.grantAccessSection');
const locationaccessbtn = document.querySelector('[grantAccess]');
const loading = document.querySelector('.loading')
const weatherScreen = document.querySelector('.weather')

const cityname= document.querySelector('[cityname]');
const citysearch = document.querySelector('[citysearch]');

let currentTab = searchWeatherbtn;

const API_key='d1845658f92b31c64bd94f06f7188c9c';
async function searchWeatherByCity(e){
    console.log(e)
  //  if(e.key === 'Enter' || e.type === 'click'){
    loading.classList.remove('hide');
    weatherScreen.classList.add('hide');
    let city=cityname.value;
     let response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
     let data = await response.json();
    // console.log(data)
     renderDataOnScreen(data);
   // }
}

function renderDataOnScreen(data){
    const country = document.querySelector('.country');
    const skycondition = document.querySelector('.skycondition');
    const temp = document.querySelector('.temp');
    const windspeed = document.querySelector('.windspeed>span');
    const humidity = document.querySelector('.humidity>span');
    const clouds = document.querySelector('.clouds>span');
    country.innerText = data?.name;
    skycondition.innerText = data?.weather?.[0]?.main;
    temp.innerText = Math.round(data?.main?.temp - 272.15) +'°C';
    windspeed.innerText = data?.wind?.speed + 'm/s';
    humidity.innerText=data?.main?.humidity +'%';
    clouds.innerText = data?.clouds?.all +'%';
    loading.classList.add('hide');
    weatherScreen.classList.remove('hide');
}

function switchTab(e){
    if(currentTab == e.target) return ;
    else{
        grantlocationsection.classList.add('hide');
        weatherScreen.classList.add('hide');
        currentTab.classList.toggle('fade-white');
        e.target.classList.toggle('fade-white');
        document.getElementById(currentTab.id.slice(0,currentTab.id.length-3)).classList.toggle('hide');
        document.getElementById(e.target.id.slice(0,e.target.id.length-3)).classList.toggle('hide');
        currentTab = e.target;
    }

    if(currentTab.id.slice(0,currentTab.id.length-3) === yourWeathertab.id){ 
        if(checkSessionStorage()) {
            grantlocationsection.classList.add('hide');
            fetchWeatherInfo();
            
    }
        else grantlocationsection.classList.remove('hide');
    }
}



 function checkSessionStorage(){
    if(sessionStorage.getItem('longitude') && sessionStorage.getItem('latitude')){
        return true;
    }
    else {
        false; 
     }
}

function fetchLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success,error);
    }
    else {

    }
}

function success(position){
    sessionStorage.setItem('longitude',position.coords.longitude)
    sessionStorage.setItem('latitude',position.coords.latitude)
    fetchWeatherInfo();
}

function error(error){
    console.log(error);
}

async function fetchWeatherInfo(){
        try{        
        grantlocationsection.classList.add('hide');
        loading.classList.remove('hide');
        let longitude = sessionStorage.getItem('longitude');
        let latitude = sessionStorage.getItem('latitude');
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`);
        let data = await response.json();
        renderDataOnScreen(data);
    }
    catch(e){
        console.log('API call went wrong!!!!')
    }
}

yourWeatherbtn.addEventListener('click',switchTab);
searchWeatherbtn.addEventListener('click',switchTab);
citysearch.addEventListener('click',searchWeatherByCity);
locationaccessbtn.addEventListener('click',fetchLocation);