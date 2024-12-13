"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { animations } from "@/lib/design-system";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="scroll-section">
      <div className="scroll-content">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: animations.duration.normal }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 justify-items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: animations.duration.normal }}
              className="lg:col-span-8 lg:col-start-3 w-full"
            >
              <form onSubmit={handleSubmit} className="space-y-6 mx-auto max-w-2xl">
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
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full max-w-md px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
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
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
