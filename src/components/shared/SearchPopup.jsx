import {
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ReplayIcon from "@mui/icons-material/Replay";

export const SearchPopup = () => {
  const [searchPopup, setSearchPopup] = useState(false);

  return (
    <>
      <Tooltip title="Buscar">
        <IconButton
          onClick={() => {
            setSearchPopup(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ color: "#c9c9c9", height: 25, width: 25 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </IconButton>
      </Tooltip>
      <Dialog
        open={searchPopup}
        onClose={() => setSearchPopup(false)}
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },

          "& .MuiDialog-container": {
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,

            "& .MuiPaper-root": {
              margin: 0,
              borderRadius: "4px",
            },
          },
        }}
      >
        <Stack
          direction="row"
          sx={{
            p: 0.5,
            width: "600px",
            borderRadius: "4px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px 0 0 4px",
            },
          }}
        >
          <TextField
            placeholder="Zapatos verdes"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px 0 0 4px",
              },
            }}
            InputProps={{
              startAdornment: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{
                    color: "#c9c9c9",
                    height: 25,
                    width: 25,
                    marginRight: 20,
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              ),
            }}
          />
          <Button
            disableElevation
            variant="contained"
            sx={{
              borderRadius: "0 4px 4px 0",
            }}
          >
            BUSCAR
          </Button>
        </Stack>
      </Dialog>
    </>
  );
};
