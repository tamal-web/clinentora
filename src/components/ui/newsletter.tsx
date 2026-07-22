import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as React from "react";

export interface NewsletterProps extends React.FormHTMLAttributes<HTMLFormElement> {
  placeholder?: string;
  className?: string;
}

const Newsletter = React.forwardRef<HTMLFormElement, NewsletterProps>(
  ({ placeholder = "Enter Your Email", className, ...props }, ref) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // No action yet as specified
      console.log("Submit");
    };

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={cn(
          "flex items-center w-full max-w-[490px] h-[58px] rounded-[56px]",
          "bg-[rgba(255,255,255,0.1)] border-[1.12698px] border-solid border-[rgba(255,255,255,0.1)]",
          "px-[22px] py-[6px] pr-[2px]",
          "font-normal text-[18px] leading-[140%] tracking-[-0.02em] text-white",
          className
        )}
        {...props}
      >
        <input
          type="email"
          required
          placeholder={placeholder}
          className={cn(
            "flex-1 h-full w-full bg-transparent border-0 outline-none",
            "text-white placeholder:text-white/70",
            "font-normal text-[18px] leading-[140%] tracking-[-0.02em]",
            "pr-2"
          )}
          style={{
            fontFamily: "'Inter Tight', sans-serif",
          }}
        />
        <Button
          type="submit"
          variant="form"
          className="flex-shrink-0"
        >
          Send Code
        </Button>
      </form>
    );
  }
);

Newsletter.displayName = "Newsletter";

export { Newsletter };

