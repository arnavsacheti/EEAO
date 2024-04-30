import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import PageHeader from "../components/PageHeader";
import { Box, Paper, Stack, Typography } from "@mui/material";

const TimelineItems = [
  {
    title: "Start of Movie",
    timestamp: "0:00:00",
    content: [
      { time: "0:07:35", body: "First time seeing a verse jump" },
      { time: "0:09:29", body: "Meet Gong Gong" },
    ],
  },
  {
    title: "Everything",
    timestamp: "0:12:09",
    content: [
      { time: "0:13:30", body: "Alpha Waymond introduces Evelyn to Danger" },
      { time: "0:16:30", body: "Tax Audit" },
      {
        time: "0:17:46",
        body: "Evelyn follows instructions for verse jumping unknowingly",
      },
      { time: "0:18:46", body: "Evelyn is in two universes at once" },
      {
        time: "0:20:28",
        body: "['Excuse my french'] Auditor of the Month (AKA. 'Bullshit') Trophy",
      },
      { time: "0:22:20", body: "Evelyn is just a failure" },
      {
        time: "0:24:26",
        body: "Tax audit is given extension to resubmit by 6:00 pm",
      },
      { time: "0:26:17", body: "Evelyn punches Deirde" },
      { time: "0:26:41", body: "Dissolution of Marriage is introduced" },
      { time: "0:28:20", body: "Most epic fanny pack fight scene" },
      { time: "0:32:55", body: "Enter Jobu Tupaki" },
      { time: "0:33:10", body: "Jobu Tupaki is Joy??" },
      { time: "0:34:30", body: "Multiverse explained" },
      {
        time: "0:34:55",
        body: "“In your search to prove the existence of other universes, you discovered a way to temporarily link your conscious to another version of yourself, accessing all of their memories, their skills, even their emotions” - Alpha Waymond",
      },
      {
        time: "0:37:25",
        body: "Alphaverse’s Mission: 'To take us back to how it's supposed to be'",
      },
      { time: "0:43:12", body: "Alphaverse gives up on Evelyn" },
      { time: "0:43:56", body: "Evelyn’s Mind begins to fracture" },
      { time: "0:44:18", body: "Waymond be big sad" },
      { time: "0:45:17", body: "Evelyn verse jumps by herself" },
      {
        time: "0:49:15",
        body: "“If you fall for their [other universes] temptations you invite contradiction. Chaos.” - Alpha Waymond",
      },
      {
        time: "0:49:38",
        body: "“Enough of your clay pots, cream cheese, no cows” - Evelyn",
      },
      { time: "0:53:17", body: "Jobu has cool entry" },
      {
        time: "0:56:32",
        body: "Evelyn blames Jobu for making Joy act the way she does",
      },
      {
        time: "0:58:27",
        body: "Evolutionary branch that results in hot dog hands",
      },
      { time: "1:00:18", body: "‘Everything’ Bagel is introduced" },
      {
        time: "1:08:19",
        body: "Alpha Gong Gong threatens Joy and Evelyn choses a side",
      },
      { time: "1:09:33", body: "Evelyn begins to fracture her mind" },
      {
        time: "1:12:19",
        body: "Evelyn seems to be in control of her verse jumping now",
      },
      { time: "1:18:17", body: "Fight for the ‘Bullshit’ trophy begins" },
      { time: "1:21:25", body: "Pinky Kung Fu" },
      { time: "1:25:09", body: "The end of the movie (inside the movie)" },
      { time: "1:25:36", body: "Evelyn is present in multiple universes now" },
      {
        time: "1:28:05",
        body: "Evelyn can now see the multiverse splitting based on her decisions",
      },
    ],
  },
  {
    title: "Everywhere",
    timestamp: "1:28:12",
    content: [
      {
        time: "1:29:50",
        body: "“Everything we do gets washed away in a sea of every other possibility” - Jobu Tupaki",
      },
      {
        time: "1:32:26",
        body: "“Every version of Joy is Jobu Tupaki” - Jobu Tupaki",
      },
      { time: "1:33:05", body: "Joy explains how she is trapped" },
      {
        time: "1:34:13",
        body: "Evelyn is portrayed to be experiencing a mental breakdown",
      },
      { time: "1:36:50", body: "Laundromat is seized" },
      {
        time: "1:39:51",
        body: "Joy and Evelyn are now in a universe where life is just rocks",
      },
      { time: "1:43:20", body: "Waymond makes things better" },
    ],
  },
  {
    title: "All At Once",
    timestamp: "2:10:28",
    content: []
  }
];

const TimelinePage = () => {
  return (
    <>
      <PageHeader title="Timeline" last_update={new Date(2024, 3, 29)} />
      {TimelineItems.map((section) => (
        <Box sx={{ width: "90%", margin: "auto", padding: "4px" }}>
          <Paper sx={{ padding: "4px", borderRadius: "4px" }}>
            <Stack
              direction="row"
              alignItems="stretch"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Typography variant="h4" color={"text.primary"}>
                {section.title}
              </Typography>
              <Typography variant="h4" color={"text.secondary"}>
                {section.timestamp}
              </Typography>
            </Stack>
          </Paper>

          <Timeline position="right">
            {section.content.map((event) => (
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  {event.time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{event.body}</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      ))}
    </>
  );
};

export default TimelinePage;
