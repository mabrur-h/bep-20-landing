import './App.css';
import Logo from './logo.svg'
import {Component} from "react";
import {Container, Button} from "react-bootstrap";
import {NavigationComponent} from "./components/navigation/navigation.component";

class App extends Component {
    // constructor(props) {
    //   super(props);
    // }

    render() {
        return (
            <div className="App bg-dark">
                <NavigationComponent />
                <section id="trade">
                    <Container fluid className="h-100">
                        <div className="mx-5 px-5 d-flex flex-column align-content-center h-100">
                            <div className="d-flex flex-column justify-content-center h-100">
                                <p className="m-0 text-uppercase mb-5 trade-upper-text">Blockchain - fast for everyone</p>
                                <h2 className="text-white my-4">Transform your Business with Blockchain</h2>
                                <p className="text-white mt-5 mb-5 trade-down-text">All of the community tools and resources you need to bootstrap your community and fundraise.</p>
                                <div>
                                    <Button className="header-button">
                                        <p className="px-2 m-0 mx-3">Join Us</p>
                                    </Button>
                                    <Button className="header-button">
                                        <p className="px-2 m-0 mx-3">Join Us</p>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        );
    }

}

export default App;
