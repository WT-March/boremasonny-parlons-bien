import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4">
        {/* Contenu principal du footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BM</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">BOREL MAISONNY</h3>
                <p className="text-sm text-gray-300">Centre d'orthophonie</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              VOTRE VOIX, VOS MOTS, NOTRE MISSION! Spécialisés en orthophonie et neurofeedback 
              pour un accompagnement complet de vos troubles de la communication.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('accueil')}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('a-propos')}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection('methode')}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Notre méthode
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Nos services
              </button>
              <button
                onClick={() => scrollToSection('equipe')}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Notre équipe
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos services</h4>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">Troubles de la parole & langage oral</p>
              <p className="text-gray-300 text-sm">Troubles du langage écrit</p>
              <p className="text-gray-300 text-sm">Entraînement cérébral (Neurofeedback)</p>
              <p className="text-gray-300 text-sm">Troubles neurologiques</p>
              <p className="text-gray-300 text-sm">Déficiences auditives</p>
              <p className="text-gray-300 text-sm">Troubles du spectre autistique</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">+212 612 622 080</p>
                  <p className="text-gray-300 text-xs">Lun-Ven : 10h-18h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">centreborelmaisonny123@gmail.com</p>
                  <p className="text-gray-300 text-xs">Réponse sous 24h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">3ème étage Appt N°6</p>
                  <p className="text-white text-sm font-medium">Lot El Kasbah, 19 Avenue Mohamed V</p>
                  <p className="text-gray-300 text-xs">Temara, Maroc</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700"></div>

        {/* Pied de page */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-300 text-sm">
            <span>© 2024 BOREL MAISONNY - Centre d'orthophonie</span>
            <span>•</span>
            <span>Tous droits réservés</span>
            <span>•</span>
            <span className="flex items-center">
              Fait avec <Heart className="w-4 h-4 text-red-400 mx-1" /> à Paris
            </span>
          </div>
          
          <div className="flex space-x-6 text-gray-300 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;