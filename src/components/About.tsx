import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Heart, Lightbulb } from 'lucide-react';
import aboutImage from '@/assets/about-image.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Chaque patient est accueilli avec empathie et respect, dans un environnement sécurisant."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Nos pratiques s'appuient sur les dernières recherches en orthophonie et neurosciences."
    },
    {
      icon: Users,
      title: "Accompagnement",
      description: "Nous impliquons les familles dans le parcours thérapeutique pour optimiser les résultats."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous adaptons constamment nos méthodes aux besoins spécifiques de chaque patient."
    }
  ];

  return (
    <section id="a-propos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary-dark font-medium text-sm">
                Notre histoire
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Un centre dédié à 
                <span className="text-primary block">votre épanouissement</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fondé en 2009, le Centre Borel Maisonny est né de la conviction que chaque personne 
                mérite un accompagnement personnalisé et bienveillant dans sa relation au langage.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Notre mission</h3>
                <p className="text-muted-foreground">
                  Accompagner enfants, adolescents et adultes dans la résolution de leurs difficultés 
                  de communication, lecture, écriture et langage oral, en utilisant des méthodes 
                  éprouvées et une approche humaine centrée sur le patient.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Notre approche</h3>
                <p className="text-muted-foreground">
                  Nous privilégions un diagnostic précis, un suivi individualisé et une collaboration 
                  étroite avec les familles, les enseignants et les autres professionnels de santé 
                  pour garantir les meilleurs résultats.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Salle d'orthophonie moderne et chaleureuse du Centre Borel Maisonny"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Nos valeurs */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Nos valeurs fondamentales
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quatre piliers guident notre action quotidienne et définissent notre identité professionnelle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;