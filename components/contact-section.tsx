"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { animations } from "@/lib/design-system";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "miramateolorenzo@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+33 6 42 40 33 00",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote",
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-24">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: animations.duration.normal }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: animations.duration.normal }}
            className="lg:col-span-7 lg:col-start-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 rounded-md border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-md border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 rounded-md border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <textarea
                placeholder="Message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-md border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: animations.duration.normal }}
            className="lg:col-span-3 space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="p-3 bg-red-500/10 rounded-md text-red-500">
                  <info.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-medium">{info.label}</h3>
                  <p className="text-sm text-muted-foreground">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}