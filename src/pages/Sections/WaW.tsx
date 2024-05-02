import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import SectionHeader from "../../components/SectionHeader";

const WorkAndWealthPage: React.FC = () => {
  return (
    <>
      <SectionHeader
        title="Work And Wealth"
        author="Shawn Greenwood"
        last_update={new Date(2024, 3, 26)}
      />
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Paper sx={{ padding: "4px", textIndent: "40px" }}>
          <Typography variant="body1" color={"text.primary"} sx={{ fontFamily: "Arial, sans-serif" }}>
            The threat of automation is something that almost every worker
            fears. If people lose their careers to automation, it can destroy
            their lives and leave them broke and homeless. However, the
            characters of “Everything, Everywhere, All at Once” don’t have a
            whole lot to worry about in that regard, since many of their jobs
            are “safe” from automation, and the threats of both Jobu Tupaki and
            the increasing instability of the multiverse are far more important
            than focusing on automation.
          </Typography>
          <Typography variant="body1" color={"text.primary"} sx={{ fontFamily: "Arial, sans-serif" }}>
            The primary motivator behind this lack of focus on automation comes
            from the fact that the very foundation of their universe is
            perceived to be in danger. Jobu Tupaki, the antagonist of the film,
            is believed by the supporting cast in the “alphaverse” to be
            attempting to destroy all universes and bring everything to an end.
            During times of war, many countries will focus their efforts on
            producing weapons and honing battle strategies rather than improving
            quality of life using automation and other means, and the
            organization working in the alphaverse is no different.
          </Typography>
          <Typography variant="body1" color={"text.primary"} sx={{ fontFamily: "Arial, sans-serif" }}>
            This impending threat causes an attitude where collaboration is
            encouraged between members of the alphaverse, where everyone is
            seemingly in agreement that this inter-universal threat is the most
            important part of their lives. When the alphaverse calls for
            assistance to stop Evelyn from saving her daughter, we can see many
            people dropping their daily activities to “jump” to her universe for
            military deployment. This suggests that automation isn’t really a
            concern in the alphaverse, since they are more focused on stopping
            the destruction rather than tasks in their everyday lives. If they
            don’t even have time to perform those tasks, how would they have
            time to figure out how to automate them?
          </Typography>
          <Typography variant="body1" color={"text.primary"} sx={{ fontFamily: "Arial, sans-serif" }}>
            Even looking into the individual universes Evelyn “jumps” to yields
            little to no trace of the threat of automation. Many of the
            universes she “jumps” to in the film do not disclose her method of
            employment, and the ones that do often have career paths that are
            unlikely to be automated, like a chef or an actress. Even in
            Evelyn’s original universe, where she and her husband own and
            operate a laundromat, the threat of automation taking her job is
            nearly nonexistent, since they own the building themselves and
            people will always need to do laundry. Even in a world where washing
            machines and dryers are interconnected and can even fold the clothes
            themselves, there will always be people who own these machines and
            will be willing to charge others to use them.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default WorkAndWealthPage;
