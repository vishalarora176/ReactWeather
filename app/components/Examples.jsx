var React = require('react');

// var Examples = React.createClass({
//     render : function () {
//         return (
//             <h3>Examples Component</h3>
//         );
//     }
// });

var Examples = (props) => {
    return (
        <div>
            <h3>Examples Component</h3>
            <p>This is a simple page to show examples!</p>
        </div>
    );
};

module.exports = Examples;
