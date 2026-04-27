import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { FileBracesCorner, Menu, Zap } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full border-b px-4 py-2 flex items-center justify-between">
      <div className="text-lg font-bold">
        <Link href="/">Wilo Chat</Link>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Menu</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href="/login">Change user</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/doc">Documentation</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/add-device">Add device</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
