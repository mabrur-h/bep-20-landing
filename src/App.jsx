import './App.css';
// import Logo from './logo.svg'
import {Component} from "react";
import {Container, Button} from "react-bootstrap";
import {NavigationComponent} from "./components/navigation/navigation.component";
import Triangle from './triangle.svg'

class App extends Component {
    // constructor(props) {
    //   super(props);
    // }

    render() {
        return (
            <div className="App bg-test">
                <NavigationComponent />
                <section id="trade" className="overflow-hidden">
                    <Container fluid className="h-100">
                        <div className="row align-items-center w-100 h-100 mx-5 px-5">
                            <div className="col-12 col-lg-6">
                                <p className="text-uppercase mb-5 trade-upper-text">Blockchain - fast for everyone</p>
                                <h1 className="text-white my-5 trade-text-main">Transform your Business with Blockchain</h1>
                                <p className="text-white mt-5 mb-5 trade-down-text">All of the tools and resources you need to bootstrap your community and fundraise.</p>
                                <div className="header-button-wrapper">
                                    <Button className="header-button btn btn-outline-warning py-3 me-3">
                                        <p className="px-2 m-0 mx-3">Request A Demo</p>
                                    </Button>
                                    <Button className="header-button header-button-v2 btn btn-outline-warning py-3 ms-2">
                                        <div className="px-2 m-0 mx-3 d-flex align-items-center justify-content-between">
                                            <p className="m-0">Learn More</p>
                                            <span className="header-button-arrow">
                                                <img src={Triangle} alt=">" width="20" height="15" />
                                            </span>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                        </div>
                    </Container>
                </section>
            </div>
        );
    }

}

export default App;
