"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Page() {
  const addUser = useMutation(api.users.ad);
  return (
    <>
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <UserButton />
          <OrganizationSwitcher hidePersonal />
          <h1 className="text-2xl font-bold">Hello From app/web</h1>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={async () => {
              await addUser();
            }}
          >
            Add User
          </button>
          {JSON.stringify(useQuery(api.users.getMany))}
        </div>
      </div>
    </>
  );
}
