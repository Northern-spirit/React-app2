import React from 'react';
class Weather extends React.Component {
   render() {
      return (
         <div className="infoWeath">
            {this.props.name &&
               <div>
                  <p>Местоположение:{this.props.name}, {this.props.country} </p>
                  <p>Температура:{this.props.temp}</p>
                  <p>Давление:{this.props.pressure}</p>
                  <p>Заход солнца:{this.props.sunset}</p>
               </div>
            }
         </div>
      );
   }
}
export default Weather;