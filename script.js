const apiKey = "41dc28d6d8e5f300a18351e881119b42";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityElement= document.querySelector('.city');
const temp= document.querySelector('.temp');
const humidity= document.querySelector('.humidity');
const wind= document.querySelector('.wind');
const seaechBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherImg= document.querySelector('.weather-icon');
const weatherDisplay= document.querySelector('.weather');
const errorMsg= document.querySelector('.error');



async function checkWeather(city) { 
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        errorMsg.style.display="block";
        weatherDisplay.style.display="none";
      
    }
    else{
        var data = await response.json();

   cityElement.innerHTML= data.name;
   temp.innerHTML=Math.round(data.main.temp)  + "°c";
   humidity.innerHTML=data.main.humidity+"%";
   wind.innerHTML=data.wind.speed+"km/h";

   if(data.weather[0].main =="Clouds"){
    weatherImg.src = "images/clouds.png";

   }
   else if(data.weather[0].main=="Clear"){
    weatherImg.src = "images/clear.png";
   }
   else if(data.weather[0].main=="Rain"){
    weatherImg.src = "images/rain.png";
   }
   
   else if(data.weather[0].main=="Drizzle"){
    weatherImg.src = "images/drizzle.png";
   }
   else if(data.weather[0].main=="Mist"){
    weatherImg.src = "images/mist.png";
   }


   weatherDisplay.style.display = "block"; 
   errorMsg.style.display="none";


    }
    
   
   
   
}

searchBtn.addEventListener("click",()=>{
    checkWeather(seaechBox.value);
})

