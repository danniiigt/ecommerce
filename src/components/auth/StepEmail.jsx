import authStore from "@/store/authStore";
import { Box, Button, Divider, Stack, TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import EastIcon from "@mui/icons-material/East";
import { observer } from "mobx-react";

export const StepEmail = observer(() => {
  const [emailValue, setEmailValue] = useState("");

  const handleContinue = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/user/email/${emailValue}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const usuario = await res.json();

    if (usuario) {
      if (usuario.password == null) {
        console.log("aqui");
        toast.error("Este correo ya está registrado con Google o Github", {
          position: "bottom-center",
        });
      } else {
        authStore.type = "login";
        authStore.email = emailValue;
        authStore.step = 2;
      }
    } else {
      authStore.type = "register";
      authStore.email = emailValue;
      authStore.step = 2;
    }

    console.log(usuario);
  };

  return (
    <Box className="animate__animated animate__fadeIn">
      <Stack component="form" onSubmit={handleContinue}>
        <TextField
          label="Correo electrónico"
          placeholder="tucorreo@gmail.com"
          variant="outlined"
          margin="normal"
          fullWidth
          type="email"
          required
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
          sx={{
            mt: 0,
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
          endIcon={<EastIcon />}
        >
          Continuar
        </Button>
      </Stack>
    </Box>
  );
});
