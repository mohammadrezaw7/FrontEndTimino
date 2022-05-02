import { Card, Collapse } from "react-bootstrap";
import classes from "./Main.module.css";
import Footer from "./Footer";
import MessageList from "./Message/MessageList";

export default function Main(props) {
  return (
    <Collapse in={props.open} dimension="width">
      <Card className={classes.main}>
        
        <Card.Body className={classes.body}>
          <MessageList />
        </Card.Body>

        <Card.Footer className={classes.footer}>
          <Footer />
        </Card.Footer>
      </Card>
    </Collapse>
  );
}
