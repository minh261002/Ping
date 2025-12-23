"use client";

import React, { use } from "react";
import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
const Page = () => {
  const users = useQuery(api.users.getMany);
  return <div>{JSON.stringify(users, null, 2)}</div>;
};

export default Page;
