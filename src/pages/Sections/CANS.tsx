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
            The main concept of the film is that every choice, no matter how
            small, has an infinite number of possible worlds and lives. This
            concept reflects the massive exponential complexity of the digital
            world, where even seemingly trivial coding errors, misconfigured
            setups, or overlooked inputs can lead to catastrophic system
            vulnerabilities that can be exploited by malicious actors. Just as
            Yeoh's character uses verse-jumping to gain the ability to safely
            navigate the multiverse, cybersecurity professionals also require
            specialized tools and training to assess, secure, and seamlessly
            transition between different networks, software, and devices.
            Changing between universes is like reorienting across environments
            and modifying controls to address newly discovered threats.
            Malicious Evelyn versions that seek to subjugate all other realities
            to their dominant form of existence bear a striking resemblance to
            aggressive malware, such as worms, viruses, and trojans, which
            propagate throughout systems, disrupt operations, and establish
            persistent footholds. At the same time, the total destruction that
            Deirdre the reality nihilist seeks is comparable to the mayhem that
            denial of service attacks seek to unleash. The way that characters
            manipulate and take advantage of holes in the boundaries between
            dimensions is similar to how hackers take advantage of software
            bugs, improper configurations, or oversights to gain unauthorized
            access or control. The universe's compact and concentrated
            physicality, embodied in the raccaccoonie, represents the surprising
            complexity that can be unlocked by malware payloads that are
            deceptive yet subtle. Ultimately, the goal of the protagonists to
            prevent the end of the world and bring the world back to its "alpha"
            state is similar to the critical duty of cyber defenders, who have
            to fend off ever-increasing threats and, in the event that their
            systems are compromised, fix firmware, restore backups, and wipe out
            infections from devices. Though highly metaphysical, the multiverse
            journey of "Everything Everywhere All At Once" successfully
            illustrates the continuous cyberwarfare of defending our constantly
            expanding, globally interconnected digital multiverse. Its cosmic
            turmoil personifies the potentially catastrophic domino effects that
            can happen when even seemingly innocuous weaknesses in an endlessly
            intricate, high-stakes virtual environment are disregarded.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default CANSPage;
