import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface JobApplicationFormProps {
  jobTitle: string;
  children: React.ReactNode;
}

const JobApplicationForm = ({ jobTitle, children }: JobApplicationFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const applicationData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      experience: formData.get('experience') as string,
      message: formData.get('message') as string,
      position: jobTitle,
    };

    try {
      // Here you would typically send the application data to your backend
      // For now, we'll just show a success message
      console.log('Application data:', applicationData);
      console.log('CV file:', formData.get('cv'));

      toast({
        title: "Hakemus lähetetty!",
        description: "Kiitos hakemuksestasi. Otamme sinuun yhteyttä pian.",
      });

      setOpen(false);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Virhe",
        description: "Hakemuksen lähettäminen epäonnistui. Yritä uudelleen.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Hae työpaikkaa: {jobTitle}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nimi *</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Sähköposti *</Label>
              <Input id="email" name="email" type="email" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Puhelinnumero *</Label>
            <Input id="phone" name="phone" type="tel" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Työkokemus (vuosina)</Label>
            <Input id="experience" name="experience" placeholder="Esim. 3 vuotta telinetyötä" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cv">CV (PDF, Word) *</Label>
            <Input 
              id="cv" 
              name="cv" 
              type="file" 
              accept=".pdf,.doc,.docx" 
              required 
              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Vapaa sana</Label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Kerro itsestäsi ja motivaatiostasi..."
              rows={4}
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Peruuta
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Lähetetään..." : "Lähetä hakemus"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationForm;