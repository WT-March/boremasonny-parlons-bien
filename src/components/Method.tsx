import { Card, CardContent } from '@/components/ui/card';
import { Eye, Hand, Ear, Brain, BookOpen, Users } from 'lucide-react';

const Method = () => {
  const principles = [
    {
      icon: Eye,
      title: "Visuel",
      description: "Utilisation de gestes et symboles visuels pour faciliter la mémorisation des sons."
    },
    {
      icon: Hand,
      title: "Gestuel",
      description: "Chaque phonème est associé à un geste précis qui aide à la production du son."
    },
    {
      icon: Ear,
      title: "Auditif",
      description: "Développement de la discrimination auditive et de la conscience phonologique."
    },
    {
      icon: Brain,
      title: "Kinesthésique",
      description: "Engagement du corps entier dans l'apprentissage pour renforcer la mémorisation."
    }
  ];

  const benefits = [
    "Amélioration de la lecture et de l'orthographe",
    "Développement de la conscience phonologique",
    "Renforcement de la confiance en soi",
    "Adaptation aux différents profils d'apprentissage",
    "Résultats durables et transférables",
    "Méthode ludique et motivante"
  ];

  return (
    <section id="methode" className="py-20 bg-gradient-to-br from-primary-soft/20 to-secondary-soft/20">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary-dark font-medium text-sm mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Méthode éprouvée
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            La méthode 
            <span className="text-primary">Borel-Maisonny</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Développée par Suzanne Borel-Maisonny, orthophoniste pionnière, cette méthode phonético-gestuelle 
            revolutionnaire associe la parole, l'audition, la vue et le mouvement pour faciliter l'apprentissage 
            de la lecture et l'expression orale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Contenu explicatif */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Une approche multisensorielle
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                La méthode Borel-Maisonny repose sur l'idée que l'apprentissage est optimisé quand 
                plusieurs sens sont mobilisés simultanément. Chaque phonème (son) de la langue française 
                est associé à un geste précis, créant un lien indissociable entre le mouvement et le son.
              </p>
              
              <div className="bg-white/50 rounded-lg p-6 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Adaptée à tous les profils
                </h4>
                <p className="text-muted-foreground text-sm">
                  Cette méthode s'adapte particulièrement bien aux enfants dyslexiques, 
                  aux personnes ayant des troubles de l'attention, ou simplement à ceux 
                  qui ont besoin d'une approche différente de l'apprentissage traditionnel.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/api/placeholder/500/400"
                alt="Séance de méthode Borel-Maisonny avec enfant et orthophoniste"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Les 4 principes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Les quatre piliers de la méthode
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/70">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-lg mb-4 mx-auto">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{principle.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bénéfices */}
        <div className="bg-white/70 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Des résultats concrets et durables
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Notre expérience de plus de 15 ans avec la méthode Borel-Maisonny nous permet 
                d'affirmer son efficacité remarquable. Les patients développent non seulement 
                leurs compétences linguistiques, mais aussi leur confiance en eux.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/api/placeholder/400/300"
                alt="Gestes de la méthode Borel-Maisonny"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;