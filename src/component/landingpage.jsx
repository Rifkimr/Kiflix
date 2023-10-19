import { Row, Col } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="landing-page text-center d-flex justify-content-center align-items-center">
      <Row>
        <Col className="Movie-title">
          <div className="title">WELCOME KIFLIX</div>
          <div className="title ">
            NONTON GRATIS TANPA BATAS DAN MELAMPAUINYA
          </div>
          <p className="chile-judul">Nonton dimanapun dan kapanpun</p>
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
