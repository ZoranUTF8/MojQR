import React from "react";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { Typography, Stack } from "@mui/material";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-around"
    borderBottom="1px solid gray"
    mb="2%"
  >
    <QrCodeScannerIcon
      sx={{
        fontSize: {
          lg: "5rem",
          md: "3rem",
          sm: "5rem",
          xs: "3rem",
        },
        margin: "1%",
        color: "#9C8FBA",
      }}
    />
    <Typography
      variant="h5"
      noWrap
      sx={{
        display: {
          sm: "block",
          md: "block",
        },
        fontSize: {
          sm: "3rem",
          md: "2rem",
        },
        fontWeight: 700,
        letterSpacing: ".3rem",
        textDecoration: "none",
        color: "#9C8FBA",
      }}
    >
      Moj QR
    </Typography>
  </Stack>
);

export default Navbar;
