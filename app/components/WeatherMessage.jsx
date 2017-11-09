 var React = require('react');

// var WeatherMessage = React.createClass({
//     render : function () {
//         var {location, temp} = this.props;
//         return (
//             <h4>The temprature of the {location} is {temp} degree</h4>
//         );
//     }
// });

var WeatherMessage = ({temp, location}) => {
    // var {location, temp} = props;
    return (
        <h3 className="text-center">The temprature of {location} is {temp} degree</h3>
    );
};

module.exports = WeatherMessage;
