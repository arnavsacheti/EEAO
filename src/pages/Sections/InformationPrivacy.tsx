import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import SectionHeader from "../../components/SectionHeader";

const InformationPrivacyPage: React.FC = () => {
  return (
    <>
      <SectionHeader
        title="Information Privacy"
        author="Shawn Greenwood"
        last_update={new Date(2024, 3, 26)}
      />
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Paper sx={{ padding: "4px", textIndent: "40px" }}>
          <Typography
            variant="body1"
            color={"text.primary"}
            sx={{ fontFamily: "Arial, sans-serif" }}
          >
            “Everything everywhere all at once” is not a movie that concerns
            itself with the issue of information privacy. However, that doesn't
            mean that there are no privacy issues present within the film. In
            fact, it's quite the opposite. According to Merriam-Webster, privacy
            is “the quality or state of being apart from company or observation”
            or the “freedom from unauthorized intrusion”. If people have a
            natural right to a state of privacy, then that right is violated in
            this film from the start.
          </Typography>
          <Typography
            variant="body1"
            color={"text.primary"}
            sx={{ fontFamily: "Arial, sans-serif" }}
          >
            The biggest information privacy issues in “Everything everywhere all
            at once” stem from the verse that coordinates and controls the
            “jumping” technology featured prominently in the film. In order to
            initiate a “jump”, there must first be two universes that contain
            the same “person”, and then a seemingly random action is performed
            as a catalyst to bridge the universes and share memories between
            that person. This can enable people to gain unique abilities they
            didn't have in their current universe, like when Evelyn “remembers”
            how to use martial arts to fight the tax lady, but in doing so, we
            fall upon two major privacy-related issues that aren't really
            addressed by the film.
          </Typography>
          <Typography
            variant="body1"
            color={"text.primary"}
            sx={{ fontFamily: "Arial, sans-serif" }}
          >
            The first issue is related to the organization that coordinates the
            jumps in the first place. Throughout the film, they displayed
            extensive knowledge about every person who performed a jump; not
            only in the universe that is performing the jump, but also in all
            other universes. They need this knowledge to track which skills each
            person has and in what universe they come from, but they do all of
            this without the consent of the person in question, and they also
            don't explicitly disclose this anywhere in the film to anyone who
            they've assisted in jumping. It's unknown how they find this
            information in the first place, whether it's through mathematical
            calculation or via some sort of interdimensional data mining, but
            the breach of privacy remains regardless of their methods.
          </Typography>
          <Typography
            variant="body1"
            color={"text.primary"}
            sx={{ fontFamily: "Arial, sans-serif" }}
          >
            The second issue relates to the memories that are being swapped in
            the first place. As mentioned previously, the memories of a person
            who is performing a jump are supplemented by the version of the
            person they are “jumping” to, and vice versa. This is also done
            without the latter's consent, and the person who is being jumped to
            may have no idea that their entire life is being analyzed and used
            for another version's benefit. Therefore, it stands to reason that
            their right to privacy is being violated by both the initiator of
            the jump, and the organization coordinating them since they already
            had to snoop on the alternate version's life to understand what kind
            of skills they had in the first place.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default InformationPrivacyPage;
