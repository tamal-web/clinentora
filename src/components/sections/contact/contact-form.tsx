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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const contactFormSchema = z.object({
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
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setError(null);
    try {
      // 1. Save to Supabase contacts table
      const { error: dbError } = await supabase.from("contacts").insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
      });

      if (dbError) throw new Error(dbError.message);

      // 2. Send confirmation email via Edge Function (non-blocking)
      supabase.functions
        .invoke("send-confirmation-email", {
          body: {
            type: "contact",
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            message: data.message,
          },
        })
        .catch((err) => console.error("Email send error:", err));

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 1–2 business days.",
        variant: "default",
      });

      form.reset();
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Failed to send message.";
      setError(msg);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
      setTimeout(() => setError(null), 6000);
    }
  };

  return (
    <section className="hero-padding-top pb-20">
      <Container className="space-y-12">
        {/* Header */}
        <div className="text-center max-w-[540px] mx-auto space-y-4">
          <h1 className="h1">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have a question, a partnership idea, or need help with anything?
            We're here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Contact Info */}
          <div className="bg-card md:p-[30px] p-6 md:rounded-3xl rounded-lg border border-border md:space-y-[60px] space-y-8 h-full">
            <div className="space-y-3">
              <h2 className="h3">Get in Touch with Us</h2>
              <p className="text-muted-foreground">
                Have questions or need assistance? We're here to help you every
                step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email Card */}
              <div className="bg-background p-6 rounded-2xl border border-white/5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Email</span>
                </div>
                <div className="text-sm text-muted-foreground pt-4">
                  <a
                    href="mailto:info@clinentora.com"
                    className="hover:text-white transition-colors"
                  >
                    info@clinentora.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-background p-6 rounded-2xl border border-white/5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Phone</span>
                </div>
                <div className="text-sm text-muted-foreground pt-4">
                  +(91) 76579 91807
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-background p-6 rounded-2xl border border-white/5 space-y-6 md:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Address</span>
                </div>
                <div className="text-sm text-muted-foreground pt-4">
                  SCO 4, VIP Road, Zirakpur, SAS Nagar (Mohali), Punjab,
                  140603{" "}
                </div>
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
                <h3 className="h4">Message received!</h3>
                <p className="text-muted-foreground max-w-xs">
                  A confirmation email is on its way to you. We'll be in touch
                  within 1–2 business days.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider">
                          Email address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email address"
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider">
                          Phone Number
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

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type here..."
                            className="min-h-[150px] bg-background border-none rounded-[14px] focus-visible:ring-1 focus-visible:ring-white/20 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 rounded-full bg-gradient-to-b from-white to-[#d1d1d1] text-black font-medium hover:opacity-90 transition-opacity mt-4"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Sending…" : "Send Message"}
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

export default ContactForm;
