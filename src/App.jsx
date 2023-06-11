import "./App.css";
import { Button } from "@mui/material";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

function App() {
  return (
    <>
      <AccessAlarm />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <ThreeDRotation />
    </>
  );
}

export default App;
