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
      const res = await fetch("/api/contact-form-handler.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
  );
};

export default ContactForm;
