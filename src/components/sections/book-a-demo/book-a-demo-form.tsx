import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const demoFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || phoneRegex.test(val),
      "Please enter a valid phone number",
    ),
  companyName: z.string().min(2, "Firm name must be at least 2 characters"),
  firmSize: z.string().min(1, "Please select your firm size"),
  ipArea: z.string().min(1, "Please select an area of IP law"),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

type DemoFormValues = z.infer<typeof demoFormSchema>;

const demoHighlights = [
  {
    icon: Clock,
    title: "30-minute live walkthrough",
    desc: "See Clinentora process a real office action, calculate deadlines, and route for attorney review from start to finish.",
  },
  {
    icon: Users,
    title: "Tailored to your firm",
    desc: "We'll focus on the docketing workflows most relevant to your practice area: patent, trademark, litigation, or mixed.",
  },
  {
    icon: Calendar,
    title: "Flexible scheduling",
    desc: "Pick a date that suits your team. We'll confirm within one business day and send a calendar invite.",
  },
];

const BookADemoForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      firmSize: "",
      ipArea: "",
      preferredDate: "",
      message: "",
    },
  });

  const onSubmit = async (data: DemoFormValues) => {
    setError(null);
    try {
      // 1. Save to demo_bookings table
      const { error: dbError } = await supabase.from("demo_bookings").insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone || null,
        company_name: data.companyName,
        firm_size: data.firmSize,
        ip_area: data.ipArea,
        preferred_date: data.preferredDate || null,
        message: data.message || null,
      });

      if (dbError) throw new Error(dbError.message);

      // 2. Fire confirmation email (non-blocking)
      supabase.functions
        .invoke("send-confirmation-email", {
          body: {
            type: "demo",
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            companyName: data.companyName,
            firmSize: data.firmSize,
            ipArea: data.ipArea,
            preferredDate: data.preferredDate,
            message: data.message,
          },
        })
        .catch((err) => console.error("Email send error:", err));

      toast({
        title: "Demo request received!",
        description: "We'll confirm your demo slot within one business day.",
        variant: "default",
      });

      form.reset();
      setIsSuccess(true);
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Failed to submit request.";
      setError(msg);
      toast({
        title: "Submission failed",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
      setTimeout(() => setError(null), 6000);
    }
  };

  return (
    <section className="hero-padding-top pb-20">
      <Container className="space-y-12">
        {/* Header */}
        <div className="text-center max-w-[600px] mx-auto space-y-4">
          <p className="text-xs uppercase tracking-[0.12em] text-primary font-medium">
            Live Demo
          </p>
          <h1 className="h1">Book a Demo</h1>
          <p className="text-lg text-muted-foreground">
            See Clinentora on your firm's actual filings. A 30-minute session,
            tailored to your practice area, with a member of our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: What to Expect */}
          <div className="bg-card md:p-[30px] p-6 md:rounded-3xl rounded-lg border border-border flex flex-col h-full md:space-y-[50px] space-y-8">
            <div className="space-y-3">
              <h2 className="h3">What to expect</h2>
              <p className="text-muted-foreground">
                We'll walk your team through a live docketing workflow: filings
                read, deadlines calculated, and entries routed for human
                confirmation.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {demoHighlights.map((item) => (
                <div
                  key={item.title}
                  className="bg-background p-5 rounded-2xl border border-white/5 flex gap-4 items-start"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
              <div className="bg-background p-4 rounded-2xl border border-white/5 flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                <a
                  href="mailto:info@clinentora.com"
                  className="text-xs text-muted-foreground hover:text-white transition-colors truncate"
                >
                  info@clinentora.com
                </a>
              </div>
              <div className="bg-background p-4 rounded-2xl border border-white/5 flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                <span className="text-xs text-muted-foreground">
                  +(91) 76579 91807
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-card md:p-[30px] p-6 md:rounded-3xl rounded-lg border border-border h-full">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full py-16 space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h4">You're booked in!</h3>
                <p className="text-muted-foreground max-w-xs">
                  A confirmation email is on its way. We'll reach out within one
                  business day to lock in your demo slot.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 rounded-full border-border"
                  onClick={() => setIsSuccess(false)}
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider">
                            First Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="First Name"
                              {...field}
                              className="bg-background border-none rounded-full h-12 focus-visible:ring-1 focus-visible:ring-white/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider">
                            Last Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Last Name"
                              {...field}
                              className="bg-background border-none rounded-full h-12 focus-visible:ring-1 focus-visible:ring-white/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider">
                          Work Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@yourfirm.com"
                            {...field}
                            className="bg-background border-none rounded-full h-12 focus-visible:ring-1 focus-visible:ring-white/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider">
                          Phone Number{" "}
                          <span className="text-muted-foreground normal-case tracking-normal">
                            (optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Phone Number"
                            {...field}
                            className="bg-background border-none rounded-full h-12 focus-visible:ring-1 focus-visible:ring-white/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Firm name */}
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider">
                          Firm / Company Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your firm's name"
                            {...field}
                            className="bg-background border-none rounded-full h-12 focus-visible:ring-1 focus-visible:ring-white/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Firm size + IP area row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="firmSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider">
                            No. of Attorneys
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger
                                id="demo-firm-size"
                                className="bg-background border-none rounded-full h-12 focus:ring-1 focus:ring-white/20"
                              >
                                <SelectValue placeholder="Select range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-card border-border">
                              <SelectItem value="1-5">1 – 5</SelectItem>
                              <SelectItem value="6-20">6 – 20</SelectItem>
                              <SelectItem value="21-50">21 – 50</SelectItem>
                              <SelectItem value="50+">50+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="ipArea"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider">
                            Area of IP Law
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger
                                id="demo-ip-area"
                                className="bg-background border-none rounded-full h-12 focus:ring-1 focus:ring-white/20"
                              >
                                <SelectValue placeholder="Select area" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-card border-border">
                              <SelectItem value="Patent">Patent</SelectItem>
                              <SelectItem value="Trademark">
                                Trademark
                              </SelectItem>
                              <SelectItem value="Copyright">
                                Copyright
                              </SelectItem>
                              <SelectItem value="Litigation">
                                Litigation
                              </SelectItem>
                              <SelectItem value="Mixed">Mixed</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Preferred date */}
                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider">
                          Preferred Demo Date{" "}
                          <span className="text-muted-foreground normal-case tracking-normal">
                            (optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                            min={new Date().toISOString().split("T")[0]}
                            className="bg-background border-none rounded-full h-12 focus-visible:ring-1 focus-visible:ring-white/20 text-muted-foreground"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider">
                          Anything else?{" "}
                          <span className="text-muted-foreground normal-case tracking-normal">
                            (optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your current docketing workflow, specific pain points, or anything you'd like us to focus on..."
                            className="min-h-[110px] bg-background border-none rounded-[14px] focus-visible:ring-1 focus-visible:ring-white/20 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    id="demo-submit-btn"
                    type="submit"
                    size="lg"
                    className="w-full h-14 rounded-full bg-gradient-to-b from-white to-[#d1d1d1] text-black font-medium hover:opacity-90 transition-opacity mt-2"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting
                      ? "Submitting…"
                      : "Request a Demo"}
                  </Button>

                  {error && (
                    <p className="text-center text-sm text-red-500 mt-2">
                      {error}
                    </p>
                  )}
                </form>
              </Form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookADemoForm;
