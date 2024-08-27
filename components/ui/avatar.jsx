"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import _ from "lodash";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef(
  ({ className, colour, ...props }, ref) => {
    // const colours = [
    //   "#F9A8D4",
    //   "#2ecc71",
    //   "#9b59b6",
    //   "#3498db",
    //   "#e74c3c",
    //   "#f1c40f",
    //   "#1abc9c",
    //   "#34495e",
    // ];
    // const selectedColour = _.sample(colours);

    return (
      <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
          `flex h-full w-full items-center justify-center rounded-full bg-[#9b59b6] text-white`,
          className
        )}
        {...props}
      />
    );
  }
);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
