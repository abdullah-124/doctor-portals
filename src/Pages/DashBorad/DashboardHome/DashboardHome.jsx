import { Grid } from "@mui/material"
import * as React from "react";
import Calendar from "../../Shared/Calendar/Calendar"
import Appointments from "../Appointments/Appointments"

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={4}>
        <Calendar date={date} setDate={setDate}></Calendar>
      </Grid>
      <Grid item xs={12} md={8}>
        <Appointments date={date} />
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
