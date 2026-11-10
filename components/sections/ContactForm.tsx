"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactInput } from "@/lib/validators";

const budgets = ["< $500", "$500 – $2k", "$2k – $5k", "$5k – $10k", "$10k+"];
const timelines = ["ASAP", "1–2 weeks", "2–4 weeks", "1–3 months", "Flexible"];

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactInput) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Failed to send");
      }
      toast.success("Message sent! I'll reply within 24h.");
      setSuccess(true);
      reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {success ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-16 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="mt-6 font-display text-2xl font-semibold">Message received 🎉</h3>
          <p className="mt-2 max-w-sm text-white/60">
            Thanks for reaching out — I&apos;ll reply to you within 24 hours.
          </p>
          <Button onClick={() => setSuccess(false)} variant="ghost" className="mt-6">
            Send another message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} placeholder="Your name" className="mt-2" />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} placeholder="you@company.com" className="mt-2" />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <Label htmlFor="budget">Budget</Label>
              <select
                id="budget"
                {...register("budget")}
                className="mt-2 flex h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white backdrop-blur focus:border-brand-electric/60 focus:outline-none focus:ring-2 focus:ring-brand-electric/30"
                defaultValue=""
              >
                <option value="" disabled className="bg-brand-navy">Select…</option>
                {budgets.map((b) => (
                  <option key={b} value={b} className="bg-brand-navy">{b}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="timeline">Timeline</Label>
              <select
                id="timeline"
                {...register("timeline")}
                className="mt-2 flex h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white backdrop-blur focus:border-brand-electric/60 focus:outline-none focus:ring-2 focus:ring-brand-electric/30"
                defaultValue=""
              >
                <option value="" disabled className="bg-brand-navy">Select…</option>
                {timelines.map((t) => (
                  <option key={t} value={t} className="bg-brand-navy">{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="message">Project brief</Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="What are you building? What's the goal, the stack, the deadline?"
              className="mt-2"
              rows={6}
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
          </div>

          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} className="hidden" aria-hidden />

          <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send message
              </>
            )}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}