import {
  AppBar,
  Avatar,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import userStore from "@/store/userStore";
import Link from "next/link";
import { SearchPopup } from "./SearchPopup";

export const ClientNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = (url) => {
    router.push(url);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: "100%",
            maxWidth: 1200,
            marginX: "auto",
            paddingX: "16px !important",
          }}
        >
          <Typography>Ecommerce</Typography>

          <Stack direction="row" alignItems="center" spacing={3} ml={4}>
            <Link href="#" style={{ color: "#c9c9c9", textDecoration: "none" }}>
              <Button
                variant=""
                sx={{
                  textTransform: "none",
                }}
              >
                Inicio
              </Button>
            </Link>
            <Link href="#" style={{ color: "#c9c9c9", textDecoration: "none" }}>
              <Button
                variant=""
                sx={{
                  textTransform: "none",
                }}
              >
                Más vendidos
              </Button>
            </Link>
            <Link href="#" style={{ color: "#c9c9c9", textDecoration: "none" }}>
              <Button
                variant=""
                sx={{
                  textTransform: "none",
                }}
              >
                Colecciones
              </Button>
            </Link>
          </Stack>

          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={3}
          >
            <SearchPopup />
            <Tooltip title="Tu bolsa">
              <IconButton>
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
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </IconButton>
            </Tooltip>
            <Tooltip title="Tu perfil">
              <IconButton onClick={handleMenu}>
                <Avatar
                  alt={"daniel"}
                  src={userStore.image}
                  sx={{ width: 30, height: 30 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "35px" }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem disableTouchRipple disableRipple>
                <Stack>
                  <ListItemText>{userStore.name}</ListItemText>
                </Stack>
              </MenuItem>

              <Divider sx={{ marginY: "3px !important" }} />

              <MenuItem onClick={() => handleRedirect("/perfil")}>
                <ListItemIcon>
                  <Person2Icon sx={{ mr: 2 }} />
                </ListItemIcon>
                <ListItemText>Perfil</ListItemText>
              </MenuItem>

              <Divider sx={{ marginY: "3px !important" }} />

              <MenuItem
                onClick={() => {
                  signOut({
                    callbackUrl: `${window.location.origin}/login`,
                  });
                  handleClose();
                }}
              >
                <ListItemIcon>
                  <LogoutIcon sx={{ mr: 2 }} />
                </ListItemIcon>
                <ListItemText>Cerrar Sesión</ListItemText>
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
