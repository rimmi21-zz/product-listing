import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Body style={{ backgroundColor: "#F4ECF7" }}>
            <Card.Title>Much Scalable</Card.Title>
            <Card.Text>
              Our product xyz is very scalable and has grown a lot in the past 2
              years. More extra text here to explain.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "#D6EAF8" }}>
            <small className="text-muted">Last updated 8 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body style={{ backgroundColor: "#F4ECF7" }}>
            <Card.Title>Very Fast</Card.Title>
            <Card.Text>
              Our product xyz is very fast and has proven itself a lot in the
              past 2 years. More extra text here to explain.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "#D4EFDF" }}>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body style={{ backgroundColor: "#F4ECF7" }}>
            <Card.Title>Free to use</Card.Title>
            <Card.Text>
              Our product xyz is absolutely free to use and is available to
              download directly from our website. More extra text here to
              explain.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "#FCF3CF" }}>
            <small className="text-muted">Last updated 4 days ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}
