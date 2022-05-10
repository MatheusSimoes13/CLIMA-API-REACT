import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



function App() {


    const API_KEY = "c505d32864c696defe980486164c85c5";

    const [city, setCity] = useState("Santos");
    const [weather, setWeather] = useState(null);  // useState({})

    const getCity = () => {

        const inputCity = document.getElementById("inputCity").value;
        setCity(inputCity);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then((response) => {
            console.log(response);
            if(response.status === 400){
                alert('Cidade inválida');
            }
            else{
                return response.json();
            }
        })
        .then((data) => {
            console.log(data);
            setWeather(data);
        })
    }

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

                <div className="searchBar">
                    <form>
                        <input type="text" placeholder="Digite outra cidade" id="inputCity" required />
                        <button type="button" className="searchCityButton" onClick={getCity}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </form>
                </div>
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

export default App;