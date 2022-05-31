import { styled } from "@stitches/react";

// ====== APP COMPONENT STYLES ====== //

export const Section = styled("section", {
  display: "flex",
  width: "100vw",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
});

export const Box = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  background: "#030523",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  width: "100%",
  height: "100%",
});

export const CardSection = styled("section", {
  width: "300px",
  height: "150px",
  marginTop: "1%",
  background: " rgba( 24, 26, 84, 1 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.1 )",
  borderRadius: 30,
  color: "#FEFEFE",
  padding: 25,
});

export const CardDiv = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  justifyContent: "space-evenly",
  fontWeight: "bold",
  fontSize: 26,
});
