const api= "https://dog.ceo/api/breeds/image/random";
fetch(api)
.then(response=>response.json())
//.then(jsonData=>console.log(jsonData))  ---choose from console what to display

.then(jsonData=>display(jsonData))
.catch(error=>console.log("Error in fetch:" +error))

var display=(data)=>{
    document.getElementById('img').src=data.message;
}
