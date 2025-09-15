import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  BookOpen, 
  PenTool, 
  Users, 
  Clock, 
  ArrowRight,
  Baby,
  GraduationCap,
  UserCheck
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Troubles du langage oral",
      description: "Retard ou trouble du langage, dysphasie, bégaiement, troubles articulatoires.",
      age: "Dès 2 ans",
      duration: "45-60min",
      color: "primary"
    },
    {
      icon: BookOpen,
      title: "Troubles de la lecture",
      description: "Dyslexie, difficultés d'apprentissage de la lecture, troubles de la compréhension.",
      age: "Dès 6 ans",
      duration: "45min",
      color: "secondary"
    },
    {
      icon: PenTool,
      title: "Troubles de l'écriture",
      description: "Dysorthographie, dysgraphie, difficultés d'expression écrite.",
      age: "Dès 7 ans",
      duration: "45min",
      color: "primary"
    },
    {
      icon: Users,
      title: "Accompagnement familial",
      description: "Guidance parentale, conseils pour soutenir l'enfant à la maison.",
      age: "Tous âges",
      duration: "60min",
      color: "secondary"
    }
  ];

  const ageGroups = [
    {
      icon: Baby,
      title: "Petite enfance (2-6 ans)",
      description: "Stimulation précoce du langage, prévention des troubles, développement des prérequis à la lecture.",
      features: ["Jeux éducatifs", "Stimulation multisensorielle", "Guidance parentale"]
    },
    {
      icon: GraduationCap,
      title: "Enfants & adolescents (6-18 ans)",
      description: "Rééducation spécialisée, soutien scolaire orthophonique, préparation aux examens.",
      features: ["Méthode Borel-Maisonny", "Outils numériques", "Liaison école-famille"]
    },
    {
      icon: UserCheck,
      title: "Adultes (18+ ans)",
      description: "Rééducation post-AVC, troubles neurologiques, perfectionnement professionnel.",
      features: ["Adaptation individuelle", "Objectifs personnalisés", "Suivi à long terme"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary-dark font-medium text-sm mb-6">
            Nos spécialités
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Des services adaptés à 
            <span className="text-primary block">chaque besoin</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Notre équipe pluridisciplinaire propose un accompagnement personnalisé pour tous les âges, 
            de la petite enfance à l'âge adulte, avec des méthodes éprouvées et des outils modernes.
          </p>
        </div>

        {/* Services principaux */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <Card key={index} className={`border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group ${
              service.color === 'primary' ? 'hover:border-primary/30' : 'hover:border-secondary/30'
            }`}>
              <CardHeader className="pb-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                  service.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                }`}>
                  <service.icon className={`w-6 h-6 ${
                    service.color === 'primary' ? 'text-primary' : 'text-secondary-dark'
                  }`} />
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {service.age}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {service.duration}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Accompagnement par âge */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Un accompagnement adapté à chaque âge
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos approches thérapeutiques évoluent selon les besoins développementaux et les objectifs de chaque patient.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-lg mb-6 mx-auto">
                    <group.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground text-center mb-4">
                    {group.title}
                  </h4>
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {group.description}
                  </p>
                  <div className="space-y-2">
                    {group.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-br from-primary-soft/30 to-secondary-soft/30 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Prêt à commencer votre parcours ?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un premier entretien gratuit. Nous établirons ensemble 
            un plan d'accompagnement personnalisé selon vos besoins et objectifs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3"
            >
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
            >
              Poser une question
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;