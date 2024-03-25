import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button className="px-2" variant="link" type="submit">
        Sign Out
      </Button>
    </form>
  );
}

const Header = async () => {
  const session = await auth();

  return (
    <header className="border bottom-1">
      <nav className="border-gray-200 px-4 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/">
            <h1 className="text-xl font-semibold md:text-2xl">Formify</h1>
          </Link>
          <div>
            {session?.user ? (
              <div className="flex items-center gap-1 lg:gap-4">
                <Link href="/view-forms">
                  <Button variant="outline">
                    <span className="hidden md:inline">Dashboard</span>{" "}
                    <LayoutDashboard className="md:hidden" />
                  </Button>
                </Link>

                <div className="flex items-center gap-x-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      {session?.user?.name && session?.user?.image && (
                        <Image
                          src={session?.user?.image}
                          alt="User"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      )}
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="pt-2">
                      <div className="w-full">
                        <div className="border-b pb-2 pl-2">
                          <h3 className="text-sm font-semibold">
                            {session?.user?.name}
                          </h3>
                          <p className="text-xs font-semibold text-muted-foreground">
                            {session?.user?.email}
                          </p>
                        </div>
                        <SignOut />
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ) : (
              <div>
                <Link href="/api/auth/signin">
                  <Button className="text-md">Sign in</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
