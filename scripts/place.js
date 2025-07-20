const temperature = 21;
const windSpeed = 14;
let windChillText = 'N/A'
const calculateWindChill = (temp,wind) => 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);

if (temperature <= 10 && windSpeed > 4.8){
    const windChill = calculateWindChill(temperature,windSpeed);
    windChillText = `${windChill.toFixed(2)}°C`;
}

const windChillParagraph = document.getElementById("wind-chill");
windChillParagraph.textContent = windChillText;