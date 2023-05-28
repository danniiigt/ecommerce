import { AuthWrapper } from "@/components/shared/AuthWrapper";
import { StepEmail } from "@/components/auth/StepEmail";
import authStore from "@/store/authStore";
import { StepLogin } from "@/components/auth/StepLogin";
import { StepRegister } from "@/components/auth/StepRegister";
import { observer } from "mobx-react";
import { Box } from "@mui/material";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

const LoginPage = observer(() => {
  return (
    <AuthWrapper>
      {authStore.step == 1 && <StepEmail />}

      {authStore.step == 2 && authStore.type == "login" && <StepLogin />}
      {authStore.step == 2 && authStore.type == "register" && <StepRegister />}
    </AuthWrapper>
  );
});

export const getServerSideProps = async (ctx) => {
  const nextAuthSession = await getServerSession(ctx.req, ctx.res, authOptions);
  let session = null;

  if (nextAuthSession?.user?.user) {
    session = nextAuthSession.user;
  } else {
    session = nextAuthSession;
  }

  if (session) {
    return { redirect: { destination: "/" } };
  }

  return {
    props: {},
  };
};

export default LoginPage;
