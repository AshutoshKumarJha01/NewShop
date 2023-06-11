import React from 'react'
import { Button } from "@mui/material";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

export default function Home() {
  return (
    <>
      <AccessAlarm />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <ThreeDRotation />
      <h1>Hello</h1>
    </>
  )
}
