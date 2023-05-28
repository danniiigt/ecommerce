import { ClientNavbar } from "@/components/shared/ClientNavbar";
import userStore from "@/store/userStore";
import { Box } from "@mui/material";

export const MainLayout = ({ children }) => {
  if (userStore.status == "unauthenticated") {
    return (
      <Box sx={{ maxWidth: 1200, paddingX: "16px", marginX: "auto" }}>
        {children}
      </Box>
    );
  }

  return (
    <>
      <ClientNavbar />
      <Box sx={{ maxWidth: 1200, paddingX: "16px", marginX: "auto" }}>
        {children}
      </Box>
    </>
  );
};
