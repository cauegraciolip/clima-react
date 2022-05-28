import { styled } from "@stitches/react";

// ====== APP COMPONENT STYLES ====== //

export const Main = styled("main", {
  width: "100vw",
  height: "100vh",
});

export const Section = styled("section", {
  display: "flex",
  backgroundColor: "#F2E9DC",
  opacity: 0.8,
  backgroundImage:
    "linear-gradient(135deg, #e0e0e0 25%, transparent 25%), linear-gradient(225deg, #e0e0e0 25%, transparent 25%), linear-gradient(45deg, #e0e0e0 25%, transparent 25%), linear-gradient(315deg, #e0e0e0 25%, #F2E9DC 25%)",
  backgroundPosition: "4px 0, 4px 0, 0 0, 0 0",
  backgroundSize: "4px 4px",
  backgroundRepeat: "repeat",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
});

export const Box = styled("div", {
  background: "#030523",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  borderRadius: 10,
  width: "250px",
  height: "500px",
  padding: "35px",
});

export const CardSection = styled("section", {
  width: "100%",
  height: "40%",
  marginTop: "5%",
  background: " rgba( 24, 26, 84, 1 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.1 )",
  borderRadius: 30,
  color: "#FEFEFE",
});

export const CardDiv = styled("div", {
  display: "flex",
  width: "100%",
  height: "95%",
  flexDirection: "column",
  justifyContent: "space-evenly",
  fontWeight: "bold",
  fontSize: 26,
});
