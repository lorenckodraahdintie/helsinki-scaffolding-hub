import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useLanguage } from "../contexts/LanguageContext";

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const { t } = useLanguage ? useLanguage() : { t: (k: string) => k };
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errors: string[] = [];
    if (!formData.name.trim()) errors.push("Name is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.push("Valid email is required");
    if (!formData.message.trim()) errors.push("Message is required");
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (errors.length) {
      toast({
        title: t ? t("contact.validationTitle") : "Please fix the errors",
        description: errors.join(" • "),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/functions/v1/send-contact-email", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || ''}`
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error((data && (data.error || data.message)) || "Failed to send message");
      }

      toast({
        title: t ? t("toast.sent") : "Sent",
        description: t ? t("contact.sentDesc") : "Your message has been sent.",
      });
      setFormData(initialState);
    } catch (err: any) {
      toast({
        title: t ? t("toast.error") : "Error",
        description: err?.message || (t ? t("contact.errorDesc") : "Could not send your message."),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t ? t("contact.title") : "Contact Us"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t ? t("contact.subtitle") : "Get in touch with us for your next project"}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {t ? t("contact.formTitle") : "Send us a message"}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t ? t("contact.name") : "Name"} *
                  </label>
                  <input
                    className="w-full rounded-md border px-3 py-2"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t ? t("contact.email") : "Email"} *
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-md border px-3 py-2"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t ? t("contact.phone") : "Phone"}
                  </label>
                  <input
                    className="w-full rounded-md border px-3 py-2"
                    name="phone"
                    value={formData.phone}
                    onChange={onChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t ? t("contact.projectType") : "Project type"}
                  </label>
                  <select
                    className="w-full rounded-md border px-3 py-2"
                    name="projectType"
                    value={formData.projectType}
                    onChange={onChange}
                  >
                    <option value="">{t ? t("contact.select") : "Select…"}</option>
                    <option value="Scaffolding">{t ? t("contact.scaffolding") : "Scaffolding"}</option>
                    <option value="Weather protection">
                      {t ? t("contact.weatherProtection") : "Weather protection"}
                    </option>
                    <option value="Facade">{t ? t("contact.facade") : "Facade"}</option>
                    <option value="Other">{t ? t("contact.other") : "Other"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t ? t("contact.message") : "Message"} *
                  </label>
                  <textarea
                    className="w-full rounded-md border px-3 py-2"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={onChange}
                    required
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (t ? t("contact.sending") : "Sending…") : (t ? t("contact.send") : "Send")}
                </Button>

                <p className="text-xs text-muted-foreground">
                  {t ? t("contact.privacyNote") : "By sending this form you agree that we may contact you back."}
                </p>
              </form>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {t ? t("contact.infoTitle") : "Contact Information"}
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="text-lg font-semibold mb-4">
                    {t ? t("contact.billing") : "Billing Information"}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Multe Oy</strong></p>
                    <p>Y-tunnus: 3347077-9</p>
                    <p>Tilintarkastaja: KHT Juha Toikka</p>
                    <p>ALV-numero: FI33470779</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="text-lg font-semibold mb-4">
                    {t ? t("contact.address") : "Address"}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>Ainonkatu 4 A 18</p>
                    <p>02270 ESPOO</p>
                    <p>Finland</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="text-lg font-semibold mb-4">
                    {t ? t("contact.contactInfo") : "Contact"}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> info@multe.fi</p>
                    <p><strong>Phone:</strong> +358 451509570</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg border">
            <p className="text-sm text-muted-foreground">
              {t ? t("contact.fullNotice") : "Multe Oy is a professional scaffolding and weather protection company operating in the Helsinki metropolitan area. We provide high-quality services for construction projects of all sizes. Our experienced team ensures safety and efficiency in every project. Contact us for a free quote and consultation for your next construction project."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
