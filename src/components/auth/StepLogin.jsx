import authStore from "@/store/authStore";
import { Box, Button, Stack, TextField } from "@mui/material";
import { observer } from "mobx-react";
import { signIn } from "next-auth/react";

export const StepLogin = observer(() => {
  const handleSignIn = async (e) => {
    e.preventDefault();

    await signIn("credentials", {
      email: authStore.email,
      password: authStore.password,
      redirect: "/",
    });
  };

  return (
    <Box className="animate__animated animate__fadeIn">
      <Stack spacing={1} component="form" onSubmit={handleSignIn}>
        <TextField
          label="Correo electrónico"
          placeholder="tucorreo@gmail.com"
          variant="outlined"
          margin="normal"
          fullWidth
          type="email"
          required
          value={authStore.email}
          disabled
          sx={{ mt: 0 }}
        />
        <TextField
          label="Contraseña"
          placeholder="tuC0ntrASeñ4"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={authStore.password}
          onChange={(e) => {
            authStore.password = e.target.value;
          }}
        />
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{
            fontWeight: "bold",
          }}
          type="submit"
        >
          INICIAR SESIÓN
        </Button>
      </Stack>
    </Box>
  );
});
