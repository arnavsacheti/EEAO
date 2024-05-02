import { Box, Paper, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";

const ConclusionPage = () => {
  return (
    <>
      <PageHeader title="Conclusion" last_update={new Date(2024, 3, 29)} />
      <Box sx={{ width: "90%", margin: "auto", padding: "5px" }}>
        <Paper sx={{ padding: "4px", textIndent: "40px" }}>
          <Typography
            variant="body1"
            color={"text.primary"}
            sx={{ fontFamily: "Arial, sans-serif" }}
          >
            Everything Everywhere All at Once is an absurd movie, at its core it
            explores the narrative of an immigrant business owner traversing the
            complicated structure of taxes. Looking further at the movie we are
            left to deal with the complexities of living with the knowledge of
            what life could have been, even if we were to just be a rock. Even
            while navigating the multiverse the film touches on the impact of
            technology on individual identities, society and decision making.
          </Typography>
          <Typography
            variant="body1"
            color={"text.primary"}
            sx={{ fontFamily: "Arial, sans-serif" }}
          >
            One technology that is explored is Verse Jumping, this technology
            creates a temporary link to the consciousness of another version of
            yourself. This connection allows you to access their memories,
            skills, and emotions; this can be extremely helpful, providing the
            tools to navigate different situations. This technology does not
            come without downsides; a concern is how this technology is
            regulated solely by the Alphaverse, with a lack of transparency and
            unregulated control. This technology also poses a risk of paving the
            way to act as another yourself in another universe. Together these
            concerns can lead to grave consequences, giving a group the tools to
            influence actions in another universe. Overuse of verse jumping is
            problematic, splitting your mind based on the different links you
            have; comparable to the different personalities that people have in
            their online interactions over social media. Social Media is often
            linked to having similar aspects of information overload, allowing
            individuals to connect virtually. However, many associate the site
            as showing what they could be, similar to how Evelyn would seemingly
            get lost in other universes.The dangers of social media have often
            come into scrutiny and are subject to many studies, with one finding
            “using between 7 and 11 different social media platforms compared to
            respondents using only 2 or fewer platforms” had a “3 times greater
            odds of having high levels of depressive symptoms and a 3.2 times
            greater odds of having high levels of anxiety symptoms” [1].
          </Typography>
          <Typography
            variant="body1"
            color={"text.primary"}
            sx={{ fontFamily: "Arial, sans-serif" }}
          >
            Another technology that is explored in the film is the life path
            visualizer, a tool that shows all the different decisions that a
            person has made in their life; each decision creating a branch from
            the main lifepath, the Alphaverse. This tool presents privacy
            concerns as it tracks a lot of personal/private data about someone,
            showing all the different versions that someone could be; some good,
            some bad. This tool opens up the possibility that the Alphaverse may
            choose to use this tool for their goal, potentially interfering with
            other universes, without any reasoning other than it is our mission.
          </Typography>
          <Typography
            variant="body1"
            color={"text.primary"}
            sx={{ fontFamily: "Arial, sans-serif" }}
          >
            Based on these implications this movie poses a few key conclusions,
            that your right to privacy should be protected from everyone, even
            yourself, legislation should be current to the technology, and that
            tools that impede privacy can have significant damage.
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ width: "90%", margin: "auto", padding: "5px" }}>
        <Paper sx={{ padding: "4px" }}>
          <Typography variant="h6" color={"text.primary"}>
            References
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ width: "90%", margin: "auto", padding: "5px" }}>
        <Paper sx={{ padding: "4px", textIndent: "40px" }}>
          <Typography
            variant="body1"
            color={"text.primary"}
            sx={{ fontFamily: "Arial, sans-serif" }}
          >
            [1] Naslund, J. A., Bondre, A., Torous, J., & Aschbrenner, K. A.
            (2020). Social Media and Mental Health: Benefits, Risks, and
            Opportunities for Research and Practice. Journal of technology in
            behavioral science, 5(3), 245-257.
            https://doi.org/10.1007/s41347-020-00134-x
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default ConclusionPage;
