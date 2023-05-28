import { MainLayout } from "@/layouts/MainLayout";
import { Button, Stack, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import prisma from "../../lib/prisma";
import userStore from "@/store/userStore";

const IndexPage = ({ user }) => {
  if (user) {
    user = JSON.parse(user);
    userStore.setAuth(user);
  }

  return (
    <MainLayout>
      <Typography>Hola mundo!</Typography>
    </MainLayout>
  );
};

export const getServerSideProps = async (ctx) => {
  const nextAuthSession = await getServerSession(ctx.req, ctx.res, authOptions);
  let session = null;

  if (nextAuthSession?.user?.user) {
    session = nextAuthSession.user;
  } else {
    session = nextAuthSession;
  }

  let user;

  if (session) {
    user = await prisma.user.findUnique({
      where: {
        email: session?.user.email,
      },
    });
  }

  return {
    props: {
      user: JSON.stringify(user) || null,
    },
  };
};

export default IndexPage;
