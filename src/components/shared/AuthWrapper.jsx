import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import Image from "next/image";
import authStore from "@/store/authStore";
import { signIn } from "next-auth/react";

export const AuthWrapper = ({ title = "Acceder", children }) => {
  return (
    <Stack
      spacing={1.5}
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        maxWidth: 600,
      }}
    >
      <Paper
        elevation={1}
        sx={{
          backgroundColor: "white",
          p: 3,
          borderRadius: 2,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">{title}</Typography>
          <GroupIcon color="primary" fontSize="large" />
        </Stack>
      </Paper>

      {authStore.step === 1 && (
        <Paper
          elevation={1}
          sx={{
            backgroundColor: "white",
            p: 3,
            borderRadius: 2,
          }}
        >
          <Stack spacing={1}>
            <Button
              onClick={() => {
                signIn("google");
              }}
              variant=""
              size="large"
              fullWidth
              sx={{
                border: "1px solid #cccccc",
                fontWeight: 400,
                color: "#666",
                paddingY: 1,
              }}
              startIcon={
                <Image
                  src="/icons/google-icon.svg"
                  alt="google"
                  width={18}
                  height={18}
                  style={{
                    marginRight: 10,
                  }}
                />
              }
            >
              Iniciar Sesión con Google
            </Button>
            <Button
              onClick={() => {
                signIn("github");
              }}
              variant=""
              size="large"
              fullWidth
              sx={{
                border: "1px solid #cccccc",
                fontWeight: 400,
                color: "#666",
                paddingY: 1,
              }}
              startIcon={
                <Image
                  src="/icons/github-icon.svg"
                  alt="google"
                  width={18}
                  height={18}
                  style={{
                    marginRight: 10,
                  }}
                />
              }
            >
              Iniciar Sesión con Github
            </Button>
          </Stack>
        </Paper>
      )}

      <Paper
        elevation={1}
        sx={{
          backgroundColor: "white",
          p: 3,
          borderRadius: 2,
          width: "100%",
          borderBottom: "5px solid #613F75",
        }}
      >
        {children}
      </Paper>
    </Stack>
  );
};
