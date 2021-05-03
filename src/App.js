import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />

      <main>
        <Container>
          <Route path="/" component={Homescreen} exact />
          <Route path="/product/:id" component={Productpage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
