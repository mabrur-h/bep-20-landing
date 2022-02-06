import './App.css';
import React, {Component} from "react";
import {Container, Button, Row, Col, Accordion} from "react-bootstrap";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {HeaderComponent} from "./components/header/header.component";
import {TradeStatsComponent} from "./components/trade-stats/trade-stats.component";
import Logo from './logo.svg'
import Triangle from "./icons/triangle.svg";
import {JoinUsComponent} from "./components/join-us/join-us.component";
import LeverageIcon from './icons/Group.svg'
import {CryptoInfoComponent} from "./components/crypto-info/crypto-info.component";
import {FastSpeedComponent} from "./components/fast-speed/fast-speed.component";
import {IndustryInfoComponent} from "./components/industry-info/industry-info.component";
import FacebookIcon from './icons/facebook.svg'
import TelegramIcon from './icons/telegram.svg'
import TwitterIcon from './icons/twitter.svg'
import YoutubeIcon from './icons/youtube.svg'
import {ManageTokenComponent} from "./components/manage-token/manage-token.component";
import {FooterComponent} from "./components/footer/footer.component";

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
                <FastSpeedComponent />
                <IndustryInfoComponent />
                <ManageTokenComponent />
                <FooterComponent />
            </div>
        );
    }
}

export default App;
