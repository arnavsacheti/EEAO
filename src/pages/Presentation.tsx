import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";

const PresentationPage = () => {
  return (
    <>
      <PageHeader title="Presentation" last_update={new Date(2024, 3, 26)} />
      <Box sx={{ width: "960px", margin: "auto" }}>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vRY7FDr9edUwafn1qc7R-ymbl-MZLEBGl29n2WTRYt4KhT4H_hPR4AM1IGRpyVRhHlr6qO8kucRiu0A/embed?start=true&loop=true&delayms=30000"
          frameBorder="0"
          width="960"
          height="569"
          allowFullScreen={true}
        />
      </Box>
      <a href="/EEAO/pres.pptx">Link to paper</a>
    </>
  );
};

export default PresentationPage;
