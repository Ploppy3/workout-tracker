import { Button } from "@material-ui/core";
import React from "react";
import "./App.css";
import { DialogAddWorkout } from "./components/DialogAddWorkout";
import { useModal } from "./Hooks/useModal";

function App() {
  const { isOpened, open, close } = useModal();

  return (
    <>
      <Button onClick={() => open().then(() => console.log("closed"))}>
        Add
      </Button>

      {isOpened && <DialogAddWorkout onClose={() => close()} />}
    </>
  );
}

export default App;
