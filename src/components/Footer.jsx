import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <Stack alignItems="center">
        {/* <img src={Logo} alt="logo" width="200px" height="40px" /> */}
        <Typography variant="h5" pb="40px" mt="40px" color="#9C8FBA">
          Zoran Janjic 2022
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
