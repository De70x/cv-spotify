import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./CardContainer.css";

const CardContainer = () => {
  return (
    <div data-testid="cardContainer" id="cardContainer">
      <Card>
        <CardContent>
          <Typography>Card for tests</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardContainer;
