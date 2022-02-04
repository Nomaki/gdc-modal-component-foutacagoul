import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Modal } from "../src";
import "./modal.css"

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  const [show, setShow] = useState(false);
  
  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal title="New Modal" onClose={() => setShow(false)} show={show}>
        <p>Modal incredible content 👽</p>
      </Modal>
    </div>
  );
});
