var React = require("react");
var NavComponent = require("NavComponent");

// var Main = React.createClass({
//     render : function () {
//         return (
//             <div>
//                 <NavComponent/>
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

var Main = (props) => {
    return (
        <div>
            <NavComponent/>
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
}

module.exports = Main;
