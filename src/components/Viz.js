import { useState, useRef, useEffect } from "react";

const { tableau } = window;

function Viz({ startDate, endDate }) {
  const [viz, setViz] = useState(null);

  // Set up the arguments to pass into the Tableau Viz function
  const ref = useRef(null);
  const url =
    "https://public.tableau.com/views/DateRangePicker/DateRangePicker";
  const options = {
    hideTabs: true,
    hideToolbar: true,
    width: "1200px",
    height: "530px",
  };

  // This function will be run on page load to initialize our viz.
  const initViz = () => {
    setViz(new tableau.Viz(ref.current, url, options));
  };

  // Initialize viz when the page loads
  useEffect(initViz, []);

  // This function will run with the startDate is changed
  // update the parameter value in the workbook and update the viz
  async function changeStartDateParameterValue(startDate) {
    let startYear, startMonth, startDay;

    if (startDate === null) {
      startYear = 2016;
      startMonth = 0;
      startDay = 1;
    } else {
      startYear = startDate.getUTCFullYear();
      startMonth = startDate.getUTCMonth();
      startDay = startDate.getUTCDate();
    }

    if (viz !== null) {
      const workbook = viz.getWorkbook();

      workbook.changeParameterValueAsync(
        "Start Date",
        new Date(Date.UTC(startYear, startMonth, startDay))
      );
    } else {
      console.log("We don't have a viz yet");
    }
  }

  // This hook is listening to the startDate prop. When it's changed the
  // changeStartDateParameterValue function will run with the new startDate
  useEffect(() => {
    changeStartDateParameterValue(startDate);
  }, [startDate]);

  // This function will run with the endDate is changed
  // update the parameter value in the workbook and update the viz
  async function changeEndDateParameterValue(endDate) {
    let endYear, endMonth, endDay;

    if (endDate === null) {
      endYear = 2019;
      endMonth = 11;
      endDay = 31;
    } else {
      endYear = endDate.getUTCFullYear();
      endMonth = endDate.getUTCMonth();
      endDay = endDate.getUTCDate();
    }

    if (viz !== null) {
      const workbook = viz.getWorkbook();

      workbook.changeParameterValueAsync(
        "End Date",
        new Date(Date.UTC(endYear, endMonth, endDay))
      );
    } else {
      console.log("We don't have a viz yet");
    }
  }

  // This hook is listening to the endDate prop. When it's changed the
  // changeendDateParameterValue function will run with the new endDate
  useEffect(() => {
    changeEndDateParameterValue(endDate);
  }, [endDate]);

  return <div ref={ref} />;
}

export default Viz;
