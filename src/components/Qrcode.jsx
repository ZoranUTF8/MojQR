import { useState } from "react";
import { Typography, Stack, Box, TextField, Button } from "@mui/material";
import QRCode from "react-qr-code";

const Qrcode = () => {
  const [searchValue, setSearchValue] = useState("");

  function handleChange(e) {
    setSearchValue(e.target.value.toLowerCase());
  }

  function getQRCode() {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
        alignItems: "center",
        justifyContent: "center",
        padding: { lg: "3rem", sm: "1rem" },
        minHeight: "70vh",
        color: "#9C8FBA",
      }}
    >
      <QRCode
        id="QRCode"
        value={searchValue}
        size={256}
        style={{
          minHeight: "80%",
          padding: "20px",
          background: "#fff",
        }}
        viewBox={`0 0 256 256`}
      />

      <TextField
        id="outlined-basic"
        label="Vas text"
        variant="outlined"
        onChange={handleChange}
        sx={{
          width: { lg: "500px", xs: "350px" },
        }}
        height="76px"
      />
      <Stack gap={2} flexDirection="row">
        <Button
          variant="outlined"
          size="large"
          disabled={searchValue.length > 0 ? false : true}
          sx={{
            width: { lg: "175px", xs: "130px" },
            fontSize: { lg: "20px", xs: "14px" },
            alignSelf: "center",
            height: "56px",
          }}
          onClick={getQRCode}
        >
          Preuzmi
        </Button>
      </Stack>
    </Box>
  );
};
export default Qrcode;
