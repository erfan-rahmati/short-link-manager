"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";

type CopyButtonProps = {
  value: string;
};

export function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      toast.success("لینک با موفقیت کپی شد.");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      toast.error("کپی لینک انجام نشد. دوباره تلاش کنید.");

      setCopied(false);
    }
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={handleCopy}
      aria-label="کپی لینک"
    >
      {copied ? <Check size={18} /> : <Copy size={18} />}
    </Button>
  );
}
