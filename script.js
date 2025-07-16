// const endDate = new Date("23 SEP, 2025 00:00:00").getTime();

let endDate;
const startDate = new Date().getTime();


function setCustomDate(){
    const userInput = document.getElementById("date").value;
    if(!userInput){
        alert("Please Select a valid Date and Time");
        return;
    }
    endDate = new Date(userInput).getTime();
}


let x = setInterval(function updateTimer(){
    const now = new Date().getTime();

    const distanceCovered = now - startDate ;
    const distancePending = endDate - now ;


    //time in milli sec
    //calc days hrs min sec
    // 1day = 24 * 60 * 60 * 1000 ms
    const oneDayInMilli = 24 * 60 * 60 * 1000;
    const oneHourInMilli = 60 * 60 * 1000;
    const oneMinuteInMilli = 60 * 1000;
    const oneSecondInMilli = 1000;
    const days = Math.floor(distancePending / oneDayInMilli);
    const hrs = Math.floor((distancePending % oneDayInMilli) / oneHourInMilli);
    const min = Math.floor((distancePending % oneHourInMilli) / oneMinuteInMilli);
    const sec = Math.floor((distancePending % oneMinuteInMilli) / oneSecondInMilli);
 
    //populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minute").innerHTML = min;
    document.getElementById("second").innerHTML = sec;

    //calc width for progress bar
    const totalDistance = endDate - startDate;
    const percentageDistance = ((distanceCovered/totalDistance) * 100);

    //set width for progress bar
    document.getElementById("progressbar").style.width = percentageDistance + "%";


    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progressbar").style.width = "100%";
    }
}, 1000);


