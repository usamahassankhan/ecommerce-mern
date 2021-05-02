import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./pages/Homepage";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Container>
          <Homescreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
