//loads data onto page

class InputData{

constructor(
time_sec,
latitude,
longitude,
gps_alt,
BMPsAlt,
BMPsPres,
BMPsTemp,
DIGsTemp,
CSSsTemp,
CSSseC02,
CSSsTVOC,
UV,
accelX,
accelY,
accelZ,
magX,
magY,
magZ,
gyrox,
gyroy,
gyroz,
){
this.time_sec = time_sec;
this.latitude = latitude;
this.longitude = longitude;
this.gps_alt = gps_alt;
this.BMPsAlt = BMPsAlt;
this.BMPsPres = BMPsPres;
this.BMPsTemp = BMPsTemp;
this.DIGsTemp = DIGsTemp;
this.CSSsTemp = CSSsTemp;
this.CSSseC02 = CSSseC02;
this.CSSsTVOC = CSSsTVOC;
this.UV = UV;
this.accelX = accelX;
this.accelY = accelY;
this.accelZ = accelZ;
this.magX = magX;
this.magY = magY;
this.magZ = magZ;
this.gyrox = gyrox;
this.gyroy = gyroy;
this.gyroz = gyroz;
}}
//gets data func, extracts data from dataloader.js
function getData(){
    var loadedData = loadData();

    return loadedData;



}

//set up data in the table
function dataRow(legend,value,units){
msg = "<td>";
msg += legend;
msg += "; </td><td>";
msg += value;
msg += " " + units;
msg += "</td>";
return msg;



}
function updateDisplay(){

    console.log("update started");
    //record andn display time data
    theTime = new Date();
    console.log(theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes())
    + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds : theTime.getSeconds()));

//update table
var timeRead = data[index].time_sec;

if (timeRead >= 10){
    document.getElementById("dataTable").rows["timeelapsed"].innerHTML = 
        dataRow("Time Elapsed",data[index].time_sec,"seconds");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");
}

}