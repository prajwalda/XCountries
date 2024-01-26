import "./index.css";
import {useState,useEffect} from "react"

export default function App() {

  const [data,setData] = useState([]);

  useEffect(() => {
      const performApiCall = async () => {
          try {
              const response = await fetch('https://restcountries.com/v3.1/all');
              const result = await response.json();
              console.log(result.name);
              setData(result);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      performApiCall();
  }, []); 

  return (
    <div className="App">
      {
        data.map((country)=>(
          <div key={country.ssd} className="wrapper">
            <img src={country.flags.png} alt={`Flag of ${country.flags.alt}`}/>
            <h3>{country.name.common}</h3>
          </div>
         
        ))
      }
    </div>
  );
}
