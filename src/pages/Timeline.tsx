import { Grid, Stack, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const TimelinePage = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            Timeline
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            alignItems="stretch"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="subtitle1" color="text.secondary">
              Social Implications of Computing Movie Analysis Project
            </Typography>
            {/* <Typography variant="subtitle1" color="text.secondary">
            Everything Everywhere All at Once
          </Typography> */}
          </Stack>
        </Grid>
        <Grid item xs={12} />
      </Grid>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            12:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            9:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default TimelinePage;
