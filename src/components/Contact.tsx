import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Calendar,
  Car,
  Bus
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    age: '',
    urgency: 'normale'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation d'envoi du formulaire
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });

    // Reset du formulaire
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      age: '',
      urgency: 'normale'
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "+212 5 37 XX XX XX",
      description: "Lun-Ven : 9h-18h"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@centre-borel-maisonny.ma",
      description: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "3ème étage Appt N°6\nLot El Kasbah, 19 Avenue Mohamed V\nTemara",
      description: "Proche centre-ville"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven : 9h-18h\nSam : 9h-13h",
      description: "Sur rendez-vous uniquement"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary-dark font-medium text-sm mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Prendre contact
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Commençons ensemble
            <span className="text-primary block">votre parcours</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            N'hésitez pas à nous contacter pour toute question ou pour prendre rendez-vous. 
            Notre équipe est à votre disposition pour vous accompagner dans vos démarches.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Informations de contact */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Nos coordonnées
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {info.title}
                      </h4>
                      <p className="text-foreground text-sm whitespace-pre-line">
                        {info.content}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accès */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Comment venir ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Bus className="w-4 h-4 text-secondary-dark" />
                  <span className="text-sm text-muted-foreground">
                    Transports en commun disponibles
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="w-4 h-4 text-secondary-dark" />
                  <span className="text-sm text-muted-foreground">
                    Parking disponible
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Urgences */}
            <Card className="border-border bg-secondary-soft/20">
              <CardContent className="p-4">
                <p className="text-sm text-foreground font-medium mb-2">
                  Situation d'urgence ?
                </p>
                <p className="text-xs text-muted-foreground">
                  Pour toute urgence orthophonique, n'hésitez pas à nous appeler. 
                  Nous ferons notre possible pour vous recevoir rapidement.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <Card className="border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Envoyez-nous un message
                </CardTitle>
                <p className="text-muted-foreground">
                  Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Votre nom et prénom"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Téléphone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="01 23 45 67 89"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="votre@email.fr"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-foreground mb-2">
                        Âge du patient
                      </label>
                      <Input
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="Age en années"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Objet de votre demande *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground"
                      >
                        <option value="">Sélectionnez un objet</option>
                        <option value="consultation">Première consultation</option>
                        <option value="bilan">Demande de bilan</option>
                        <option value="information">Demande d'information</option>
                        <option value="urgence">Situation d'urgence</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-foreground mb-2">
                        Niveau d'urgence
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground"
                      >
                        <option value="normale">Normale</option>
                        <option value="urgent">Urgent</option>
                        <option value="tres-urgent">Très urgent</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Votre message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Décrivez-nous votre situation, vos besoins ou vos questions..."
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-xs text-muted-foreground">
                      En soumettant ce formulaire, vous acceptez que vos données soient utilisées 
                      pour traiter votre demande. Nous nous engageons à respecter votre vie privée 
                      et ne partagerons jamais vos informations avec des tiers.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-dark text-white"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <Card className="border-border overflow-hidden">
            <div className="h-64 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">
                  Plan d'accès au Centre Borel Maisonny
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Lot El Kasbah, 19 Avenue Mohamed V, Temara
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;