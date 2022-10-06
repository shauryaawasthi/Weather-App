const cityText=document.getElementById("cityText");
const temp=document.getElementById("temp");
const cloud=document.getElementById("cloud");
const humidity=document.getElementById("humidity");
const wind=document.getElementById("wind");
const button=document.getElementsByClassName("button");
const box=document.getElementById("box");


let ApiKey="d3a20cf4768c963ccf4a47458447f7f1";

// const url="https://api.openweathermap.org/data/2.5/weather?q=Denver&appid="+ApiKey;
// const url1="https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=d3a20cf4768c963ccf4a47458447f7f1";



function clicked()
{
    const url="https://api.openweathermap.org/data/2.5/weather?q="+box.value+"&appid="+ApiKey;
    
    
    // fetch(url).then((response)=>response.json()).then((data)=>{console.log(data);})
    fetch(url).then((response)=>response.json()).then((data)=>{
        console.log(data);
        display(data);})

    function display(data)
    {
        cityText.innerText="Weather in "+box.value;
        temp.innerText=data.main.temp+" C";
        cloud.innerText=data.weather[0].description;

    };

    
    

};


















