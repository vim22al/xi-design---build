'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import LuxuryButton from './LuxuryButton';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Thank you! Your message has been sent.");
    reset();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-foreground/50 ml-1">Full Name</label>
          <input
            {...register("name")}
            className="w-full bg-transparent border-b border-rich-black/10 py-3 px-1 focus:border-luxury-gold outline-none transition-colors font-light"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-deep-burgundy text-[10px] uppercase tracking-widest mt-1">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-foreground/50 ml-1">Email Address</label>
          <input
            {...register("email")}
            className="w-full bg-transparent border-b border-rich-black/10 py-3 px-1 focus:border-luxury-gold outline-none transition-colors font-light"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-deep-burgundy text-[10px] uppercase tracking-widest mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-foreground/50 ml-1">Phone Number</label>
          <input
            {...register("phone")}
            className="w-full bg-transparent border-b border-rich-black/10 py-3 px-1 focus:border-luxury-gold outline-none transition-colors font-light"
            placeholder="+44 000 000 000"
          />
          {errors.phone && <p className="text-deep-burgundy text-[10px] uppercase tracking-widest mt-1">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-foreground/50 ml-1">Service Interest</label>
          <select
            {...register("service")}
            className="w-full bg-transparent border-b border-rich-black/10 py-3 px-1 focus:border-deep-green outline-none transition-colors font-light appearance-none"
          >
            <option value="">Select a service</option>
            <option value="residential">Residential Architecture</option>
            <option value="commercial">Commercial Design</option>
            <option value="planning">Planning Permission</option>
            <option value="build">Design & Build</option>
          </select>
          {errors.service && <p className="text-deep-burgundy text-[10px] uppercase tracking-widest mt-1">{errors.service.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-foreground/50 ml-1">Message</label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full bg-transparent border-b border-rich-black/10 py-3 px-1 focus:border-luxury-gold outline-none transition-colors font-light resize-none"
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="text-deep-burgundy text-[10px] uppercase tracking-widest mt-1">{errors.message.message}</p>}
      </div>

      <LuxuryButton
        type="submit"
        disabled={isSubmitting}
        variant="green"
        className="w-full md:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </LuxuryButton>
    </motion.form>
  );
}
