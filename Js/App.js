const endDate= "31 December 2025 7:00 PM";
const trip= "Trip To Sikkim Coming Soon";
const Tiktok= "Tiktok !";
const inputs= document.querySelectorAll("input")

document.getElementById("trip").innerText = trip;
document.getElementById("end-date").innerText=endDate;
document.getElementById("tiktok").innerText = Tiktok;

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    console.log(end)
    const difference = ((end -now) / 1000)        // Convert the Mili seconds to seconds
    const days= (difference / 3600 /24)          // Day calculation
    const hrs= ((difference / 3600) % 24)       // Hours Calculation
    const min=((difference / 60) % 60)         // Minutes Calculation
    const sec=(difference % 60)

    if(difference < 0)
    return;

    inputs[0].value=Math.floor(days);
    inputs[1].value = Math.floor(hrs);
    inputs[2].value = Math.floor(min);
    inputs[3].value = Math.floor(sec);
}
clock()

setInterval(                                  // To call clock() function in every 1 second
   () =>{
        clock()
    },
    1000
)