"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { deleteLinkAction } from "@/src/actions/delete-link";

type DeleteLinkButtonProps = {
  id: string;
};

export function DeleteLinkButton({ id }: DeleteLinkButtonProps) {
  const [pending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      const result = await deleteLinkAction(id);

      if (!result.success) {
        toast.error(result.message ?? "حذف لینک با خطا مواجه شد.");

        return;
      }

      toast.success(result.message ?? "لینک با موفقیت حذف شد.");
    });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button
            size="icon"
            variant="ghost"
            disabled={pending}
            aria-label="حذف لینک"
            className="
              text-destructive
              hover:bg-destructive/10
            "
          />
        }
      >
        <Trash2 size={18} />
      </AlertDialogTrigger>

      <AlertDialogContent dir="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle>حذف لینک</AlertDialogTitle>

          <AlertDialogDescription>
            آیا مطمئن هستید که می‌خواهید این لینک را حذف کنید؟ این عملیات قابل
            بازگشت نیست.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>انصراف</AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            disabled={pending}
            variant="destructive"
          >
            {pending ? "در حال حذف..." : "حذف لینک"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
