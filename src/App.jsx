import './App.css';
import {Component} from "react";
import {Container, Button, Row, Col} from "react-bootstrap";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {HeaderComponent} from "./components/header/header.component";
import {TradeStatsComponent} from "./components/trade-stats/trade-stats.component";

class App extends Component {
    // constructor(props) {
    //   super(props);
    // }

    render() {
        return (
            <div className="App bg-test overflow-hidden">
                <NavigationComponent />
                <HeaderComponent />
                <TradeStatsComponent />
            </div>
        );
    }

}

export default App;
