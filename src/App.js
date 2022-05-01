import classes from "./App.module.css";
import Main from "./view/Main";
import { useState } from "react";
import { BsXLg, BsJustify } from "react-icons/bs";
import { Button } from "react-bootstrap";

function App() {
  const [panelIsOpen, setPanelIsOpen] = useState(false);
  return (
    <div className={classes.App}>
      <Button
        style={{ marginBottom: "4px" }}
        onClick={() => setPanelIsOpen((prev) => !prev)}
        aria-controls="example-collapse-text"
        aria-expanded={panelIsOpen}
      >
        {panelIsOpen ? <BsXLg /> : <BsJustify />}
      </Button>
      <Main open={panelIsOpen} />
    </div>
  );
}

export default App;
