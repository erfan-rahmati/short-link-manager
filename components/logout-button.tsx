"use client";

import { useTransition } from "react";

import { logoutAction } from "@/src/actions/logout";

import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const [pending, startTransition] = useTransition();

  function handleLogout() {
    startTransition(async () => {
      await logoutAction();

      window.location.href = "/login";
    });
  }

  return (
    <Button
      onClick={handleLogout}
      disabled={pending}
      variant="outline"
      className="
        w-22
        text-destructive
        hover:bg-destructive/10
        hover:text-destructive
      "
    >
      {pending ? "در حال خروج..." : "خروج"}
    </Button>
  );
}
