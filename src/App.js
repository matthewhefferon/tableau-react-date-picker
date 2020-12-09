import React, { useState } from "react";
import { Container } from "@material-ui/core";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import Viz from "./components/Viz";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <Container>
      <div className="app">
        <DateRangePicker
          ranges={[selectionRange]}
          months={2}
          direction="horizontal"
          onChange={handleSelect}
        />

        <Viz startDate={startDate} endDate={endDate} />
      </div>
    </Container>
  );
}

export default App;
