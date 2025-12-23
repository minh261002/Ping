import AuthGuard from "@/modules/auth/ui/components/auth-guard";
import OrganizationGuard from "@/modules/auth/ui/components/organization-guard";
import React from "react";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import { cookies } from "next/headers";
import DashboardSidebar from "../components/dashboard-sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookeiStore = await cookies();
  const defaultOpen = cookeiStore.get("sidebar_state")?.value === "true";

  return (
    <AuthGuard>
      <OrganizationGuard>
        <SidebarProvider defaultOpen={defaultOpen}>
          <DashboardSidebar />
          <main className="flex flex-1 flex-col">{children}</main>
        </SidebarProvider>
      </OrganizationGuard>
    </AuthGuard>
  );
};

export default DashboardLayout;
