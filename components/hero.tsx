import { ArrowUpRight, CirclePlay, Terminal, Zap } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundPattern } from "@/components/background-pattern";

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <BackgroundPattern />

      <div className="relative z-10 max-w-3xl text-center">
        <Badge
          asChild
          className="rounded-full border-border py-1"
          variant="secondary"
        >
          <Link href="/changelog">
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 font-satoshi font-semibold text-4xl tracking-tight sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-7xl">
          Your keys. Your messages.
        </h1>
        <p className="mt-6 text-foreground/80 md:text-lg">
          Connect with anyone. Share what you want. Your private key is all you
          need. Built open, so anyone can build a client. Your identity belongs
          to you, not us.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/login">
              <Zap></Zap> Join the network
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="doc">
              <Terminal className="h-5! w-5!" /> Build a client
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
