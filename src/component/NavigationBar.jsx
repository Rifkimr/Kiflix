import Logo from "../assets/bg/kiflix-low-resolution-logo-color-on-transparent-background.png";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div className="Navigation">
      <Navbar className="navbar justify-content-between">
        <Navbar.Brand href="#home">
          <Image className="logo" src={Logo} alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Row>
          <Col xs="auto">
            <Button className="bg-danger" type="submit">
              Masuk
            </Button>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
