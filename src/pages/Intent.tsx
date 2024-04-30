import { Box, Paper, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";

const IntentPage = () => {
  return (
    <>
      <PageHeader title="Intent" last_update={new Date(2024, 3, 29)} />
      <Box sx={{ width: "90%", margin: "auto", padding: "5px" }}>
        <Paper sx={{ padding: "4px", textIndent: "40px" }}>
          <Typography variant="body1" color={"text.primary"}>
            The writers and directors of the Everything Everywhere All At Once,
            Daniel Kwan and Daniel Scheinert, explored science and philosophy
            through creative storytelling which helped add many deep layers
            within the film. They showed more of the emotional side of theories
            like the multiverse and quantum physics, while also making it
            digestible for the viewer. The main idea for Kwan and Scheinnert was
            to embrace and be creative of the possibilities of parallel
            universes. They combined sci-fi, action, and comedy to name a few to
            look at very complex themes like one's identity and life's biggest
            questions, for example, what is our true sense of purpose? Kwan and
            Scheinert wanted to make these concepts feel relatable to the viewer
            like how the main character's neurodivergence reflected Kwan's own
            experiences feeling different. For young people questioning identity
            and purpose, the film could inspire creativity through its wackiness
            in tackling heavy concepts that aren't usually talked about in such
            a way. And while the film may not directly inspire young people to
            pursue careers in quantum physics, the idea of unlimited curiosity
            and its creative uses of quantum superposition could intrigue young
            people of all walks of life in pursuing careers in the field.
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
          <Typography variant="body1" color={"text.primary"}>
            Chew, Sarah and Taylor W. Cyr. "How 'Everything Everywhere All at
            Once' Finds Meaning in a 'Nothing Matters' World." (The Gospel
            Coalition, 3 Mar. 2023). Everything-everywhere-all-at-once
          </Typography>
          <Typography variant="body1" color={"text.primary"}>
            Kwong, Emily, et al. "Meet the mathematical minds behind
            Oscar-nominated 'Everything Everywhere All At Once'." (NPR, 25 Jan.
            2023).
            meet-the-mathematical-minds-behind-oscar-nominated-everything-everywhere-all-at-
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default IntentPage;
