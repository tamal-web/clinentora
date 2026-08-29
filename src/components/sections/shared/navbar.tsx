"use client";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Menu, XIcon } from "lucide-react";

import React from "react";

import Container from "@/components/container";
import UserMenu from "@/components/sections/shared/user-menu";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/hooks/use-auth";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Qlerkly",
    href: "/feature/qlerkly",
    description: "Reliable case management for legal teams",
  },
  {
    name: "Lexora",
    href: "/feature/lexora",
    description: "AI-powered platform with full automation",
  },
];

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="w-full md:top-10 top-6 mx-auto absolute z-40">
      <Container className="flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-2 xl:w-[35%] md:w-[30%] w-fit"
        >
          <img
            src="/images/common/logo.svg"
            alt="Clinentora"
            className="h-[3.5rem] w-auto"
          />
        </Link>

        {/* <!-- Mobile --> */}
        <div className="flex items-center gap-2 lg:hidden">
          {!loading &&
            (user ? (
              <UserMenu />
            ) : (
              <Button asChild size="sm">
                <Link to="/book-a-demo">Book a Demo</Link>
              </Button>
            ))}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer lg:hidden text-white h-11 w-11 flex items-center justify-center"
              >
                <Menu className="w-6 h-6" />
              </div>
            </SheetTrigger>

            <SheetContent className="flex flex-col justify-between bg-black border-border">
              <div className="h-full flex flex-col">
                <SheetHeader className="flex flex-row justify-between border-b border-foreground">
                  <SheetTitle className="flex items-center">
                    <Link
                      to="/"
                      className="flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <img
                        src="/images/common/logo.svg"
                        alt="Clinentora"
                        className="h-4"
                      />
                    </Link>
                  </SheetTitle>
                  <div className="flex items-center gap-2">
                    <SheetPrimitive.Close className="h-11 w-11 flex items-center justify-center data-[state=open]:bg-white right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none">
                      <XIcon className="size-5 text-white" />
                      <span className="sr-only">Close</span>
                    </SheetPrimitive.Close>
                  </div>
                </SheetHeader>
                <div className="px-2 py-6 flex flex-col h-full justify-between flex-1 overflow-y-auto">
                  <div className="flex flex-col gap-4">
                    <div className="space-y-3">
                      <p className="text-white uppercase mb-3">Products</p>
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          to={product.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-1 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {product.name}
                          <span className="block text-xs text-muted-foreground/60 mt-0.5">
                            {product.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="space-y-2 pt-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-1 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* <!-- Desktop --> */}
        <NavigationMenu className="hidden lg:block mx-auto">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white bg-transparent hover:bg-transparent data-[state=open]:bg-transparent hover:text-primary">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[360px] p-6 bg-background">
                  <div className="space-y-5">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        to={product.href}
                        className="flex items-start gap-4 group"
                      >
                        {/*

                        <img
                          src={`/logos/${product.name}.png`}
                          alt={product.name}
                          className="h-8 w-auto mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                          */}
                        <div>
                          <p className="text-white font-medium group-hover:text-primary transition-colors">
                            {product.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {product.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink asChild>
                  <Link
                    to={link.href}
                    className="px-4 py-2 text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex gap-2 items-center xl:w-[35%] md:w-[30%] w-fit justify-end">
          {!loading &&
            (user ? (
              <UserMenu />
            ) : (
              <Button asChild>
                <Link to="/book-a-demo">Book a Demo</Link>
              </Button>
            ))}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
