"use client";

import React from "react";
import { Unauthenticated, useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { Authenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";

const Page = () => {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.ad);
  return (
    <div>
      <Authenticated>
        {JSON.stringify(users, null, 2)}
        <Button onClick={() => addUser()}>Create User</Button>
        <UserButton />
      </Authenticated>
      <Unauthenticated>
        <div>Please sign in to view users.</div>
        <SignInButton>Sign In</SignInButton>
      </Unauthenticated>
    </div>
  );
};

export default Page;
