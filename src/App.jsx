import './App.css';
import React, {Component} from "react";
import {Container, Button, Row, Col} from "react-bootstrap";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {HeaderComponent} from "./components/header/header.component";
import {TradeStatsComponent} from "./components/trade-stats/trade-stats.component";
import Logo from './logo.svg'
import Triangle from "./icons/triangle-2.svg";
import {JoinUsComponent} from "./components/join-us/join-us.component";
import LeverageIcon from './icons/Group.svg'
import {CryptoInfoComponent} from "./components/crypto-info/crypto-info.component";

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
                <JoinUsComponent />
                <CryptoInfoComponent />
            </div>
        );
    }

}

export default App;
