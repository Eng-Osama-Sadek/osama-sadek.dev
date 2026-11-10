import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-brand-electric/30 bg-brand-electric/10 text-brand-cyan",
        muted: "border-white/10 bg-white/5 text-white/70",
        success: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
        violet: "border-brand-violet/30 bg-brand-violet/10 text-brand-violet",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}