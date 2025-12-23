import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

const isOgrFreeRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/ogr-selection(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, orgId } = await auth();

  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  if (!userId && !orgId && !isOgrFreeRoute(req)) {
    const searchParams = new URLSearchParams();
    const orgSelection = new URL(
      `/ogr-selection?${searchParams.toString()}`,
      req.url
    );

    return Response.redirect(orgSelection.toString());
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
