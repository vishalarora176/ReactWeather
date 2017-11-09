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
            <div className="row">
                <div className="columns large-4 medium-6 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;
