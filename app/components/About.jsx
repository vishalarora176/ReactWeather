var React = require('react');

// var About = React.createClass({
//     render : function () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application built on React.</p>
            <p>Her are some of the tools I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the JS framework used.
                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather Map</a> - API used to fetch weather by city name.
                </li>
            </ul>
        </div>
    );
};

module.exports = About;
