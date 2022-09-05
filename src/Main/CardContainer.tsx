import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardContainer = () => {
  return (
    <div data-testid="cardContainer" id="cardContainer">
      <Card>
        <CardContent>
          <Typography>Word of the Day</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardContainer;
