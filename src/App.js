import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { Box, Container, createTheme, Stack } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette:{
      mode:mode
    }})

  return (
    <ThemeProvider theme={darkTheme} >
      <Navbar />
      <Box bgcolor={"background.default"} color={"text.primary"} >
      <Container>

        <Stack direction="row" spacing={2} justifyContent="space-between" bgcolor={"background.default"} color={"text.primary"} sx={{overflowX:"auto"}}>
          <Sidebar mode={mode} setMode={setMode}/>
          <Feed />
          <Rightbar />

        </Stack>
        <Add/>
      </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
