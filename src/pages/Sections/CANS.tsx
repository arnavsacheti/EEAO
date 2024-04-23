import React from "react";
import { Grid, Box, Stack, Typography, Paper } from "@mui/material";

const CANSPage: React.FC = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            Computer and Network Security
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
            <Typography variant="subtitle1" color="text.secondary">
              Jan Pilja
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} />
      </Grid>
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Paper sx={{ padding: "4px", textIndent: "40px" }}>
          <Typography variant="body1" color={"text.primary"}>
            In the film, 'Everything Everywhere All At Once' the main concept is
            that every choice, no matter how small, has an infinite number of
            possible worlds and lives. This concept reflects how complex the
            digital world is, where simple coding errors, misconfigured setups,
            or overlooked inputs can lead to systems vulnerabilities being
            exposed and exploited by malicious actors. Just as Evelyn, the main
            character, uses verse-jumping technology to gain the ability to
            travel through the multiverse, cybersecurity professionals also
            require specialized tools and training to assess, secure, and
            seamlessly transition between different networks, software, and
            devices. Changing between universes is sort of like modifying
            controls to address newly discovered threats. Threats like malicious
            versions of Evelyn that seek to overpower all other realities which
            draw comparison to aggressive malware, such as worms, viruses, and
            trojans, which disrupt operations of a system. And at the same time,
            the characters of Deidre and Jobu Tupaki show how they exist only to
            cause pure destruction and draw comparison to threat actors and
            their malicious intentions. The way that characters manipulate and
            take advantage of holes in the boundaries between dimensions is
            similar to how hackers take advantage of software bugs, improper
            configurations, or oversights to gain unauthorized access or
            control. The universe's compact and concentrated physicality,
            embodied in the ridiculous 'Ratatouille” offshoot: Raccaccoonie,
            represents the surprising complexity that can be unlocked by malware
            payloads that are deceptive yet subtle. A simple racoon carries a
            lot of power and influence without looking like it. Much like
            malware payloads can unload major consequences. Ultimately, the
            verse-jumping technology that remains the main focus of "Everything
            Everywhere All At Once" can be used as the perfect metaphor for
            understanding the vast interconnected digital universe called the
            internet. Just as Evelyn acquires the ability to travel between
            universes, cybersecurity professionals must be equally adept at
            seamlessly assessing and securing a number of networks, devices, and
            systems that make up our virtual multiverse.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default CANSPage;
