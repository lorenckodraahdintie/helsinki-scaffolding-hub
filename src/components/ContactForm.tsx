import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://www.multe.fi/api/contact-form-handler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Unknown error');

      toast({
        title: t('toast.sent'),
        description: t('toast.description')
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // keep your JSX part the same (no change needed below here)
  return (
    <section id="contact" className="py-20 bg-gray-50">
      {/* ... your JSX stays unchanged ... */}
      {/* Only the handleSubmit function was changed */}
    </section>
  );
};

export default ContactForm;
