import authStore from "@/store/authStore";
import { Button, Stack, TextField } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import { observer } from "mobx-react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

export const StepRegister = observer(() => {
  const handleGoBack = () => {
    authStore.reset();
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: authStore.email,
        password: authStore.password,
        name: authStore.firstName + " " + authStore.lastName,
      }),
    });

    if (res.status == 200) {
      await signIn("credentials", {
        email: authStore.email,
        password: authStore.password,
        redirect: "/",
      });
    } else {
      toast.error("Ha ocurrido un error. Pruebe de nuevo más tarde");
    }
  };

  return (
    <Stack
      className="animate__animated animate__fadeIn"
      component="form"
      spacing={2}
      mt={2}
      onSubmit={handleRegister}
    >
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
        sx={{ m: 0 }}
      />
      <Stack direction="row" spacing={2}>
        <TextField
          label="Nombre"
          placeholder="Daniel"
          variant="outlined"
          margin="normal"
          fullWidth
          type="text"
          required
          value={authStore.firstName}
          onChange={(e) => {
            authStore.firstName = e.target.value;
          }}
          sx={{ m: 0 }}
        />
        <TextField
          label="Apellido(s)"
          placeholder="González"
          variant="outlined"
          margin="normal"
          fullWidth
          type="text"
          required
          value={authStore.lastName}
          onChange={(e) => {
            authStore.lastName = e.target.value;
          }}
          sx={{ m: 0 }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Contraseña"
          placeholder="tuC0ntrASeñ4"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          required
          value={authStore.password}
          onChange={(e) => {
            authStore.password = e.target.value;
          }}
          sx={{
            mt: 0,
          }}
        />
        <TextField
          label="Confirmar Contraseña"
          placeholder="tuC0ntrASeñ4"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          required
          value={authStore.confirmPassword}
          onChange={(e) => {
            authStore.confirmPassword = e.target.value;
          }}
        />
      </Stack>

      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{
          fontWeight: "bold",
        }}
        type="submit"
      >
        REGISTRARME AHORA
      </Button>

      <Button
        variant="outlined"
        color="primary"
        size="small"
        startIcon={<WestIcon />}
        onClick={handleGoBack}
        sx={{ mt: "10px !important" }}
      >
        Volver atrás
      </Button>
    </Stack>
  );
});
