import React, { useState } from "react";

function App() {


    const API_KEY = "c505d32864c696defe980486164c85c5";

    const [city, setCity] = useState("Santos");
    const [weather, setWeather] = useState(null);  // useState({})

    const getSantos = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-23.974023&lon=-46.311010&appid=${API_KEY}&units=metric`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setWeather(data);
        })
    }

    const getSaoPaulo = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-23.5653115&lon=-46.6411359&appid=${API_KEY}&units=metric`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setWeather(data);
        })
    }

    const getBlumenau = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-26.8560343&lon=-49.2395305&appid=${API_KEY}&units=metric`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setWeather(data);
        })
    }


    return(
        <section className="centered">
            <div className="search">
                <button className="button-29" onClick={getSantos}>Santos</button>
                <button className="button-29" onClick={getSaoPaulo}>São Paulo</button>
                <button className="button-29" onClick={getBlumenau}>Blumenau</button>
                {weather ? (
                    <>
                        <li>{weather.name} °C</li>
                        <li>{weather.main.temp} °C</li>
                    </>
                ) : null}
                
            </div>
        </section>
    );

}
   // );
//}

export default App;