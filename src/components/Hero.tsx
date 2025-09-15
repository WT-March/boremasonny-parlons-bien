import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center bg-gradient-to-br from-primary-soft/30 to-secondary-soft/30 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary-dark font-medium text-sm">
                <Heart className="w-4 h-4 mr-2" />
                Méthode Borel-Maisonny
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Accompagner chaque enfant 
                <span className="text-primary block">vers la réussite</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Centre orthophonique spécialisé dans l'accompagnement des troubles du langage, 
                de la lecture et de l'écriture. Notre approche bienveillante et notre expertise 
                reconnue aident enfants, adolescents et adultes à retrouver confiance en eux.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-lg"
              >
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => scrollToSection('methode')}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
              >
                Découvrir notre méthode
              </Button>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Patients accompagnés</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-3 mx-auto">
                  <Award className="w-6 h-6 text-secondary-dark" />
                </div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 mx-auto">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image héro */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Enfant en séance d'orthophonie avec une thérapeute souriante"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-60 h-60 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;