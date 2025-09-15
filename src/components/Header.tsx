import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">BM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Centre Borel Maisonny</h1>
              <p className="text-sm text-muted-foreground">Orthophonie & Rééducation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('a-propos')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('methode')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Notre méthode
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Nos services
            </button>
            <button
              onClick={() => scrollToSection('equipe')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Notre équipe
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white"
            >
              <Phone className="w-4 h-4" />
              <span>Prendre RDV</span>
            </Button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('accueil')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('a-propos')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection('methode')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Notre méthode
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Nos services
              </button>
              <button
                onClick={() => scrollToSection('equipe')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Notre équipe
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-2 bg-primary hover:bg-primary-dark text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Prendre RDV
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;