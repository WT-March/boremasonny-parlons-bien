import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Award, GraduationCap } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. A****** D******",
      role: "Orthophoniste - Directrice",
      specialization: "Troubles du langage oral, Dyslexie",
      experience: "15 ans d'expérience",
      education: "Master en Orthophonie - Université",
      description: "Spécialisée dans la méthode Borel-Maisonny depuis 2009, notre directrice accompagne enfants et adultes avec une approche bienveillante et personnalisée.",
      image: "/api/placeholder/300/300",
      certifications: ["Formée Borel-Maisonny", "Certification TDAH"]
    },
    {
      name: "S****** M******",
      role: "Orthophoniste",
      specialization: "Dysgraphie, Troubles de l'écriture",
      experience: "8 ans d'expérience",
      education: "Master en Sciences du Langage",
      description: "Passionnée par les nouvelles technologies éducatives, elle intègre les outils numériques dans ses thérapies pour maximiser les résultats.",
      image: "/api/placeholder/300/300",
      certifications: ["Spécialiste numérique", "Formation DYS"]
    },
    {
      name: "T****** L*****",
      role: "Éducateur spécialisé",
      specialization: "Accompagnement scolaire, Troubles de l'attention",
      experience: "6 ans d'expérience",
      education: "DEES - Institut Régional du Travail Social",
      description: "Il apporte son expertise en pédagogie adaptée et travaille en étroite collaboration avec les familles et les établissements scolaires.",
      image: "/api/placeholder/300/300",
      certifications: ["Formation TDAH", "Pédagogie Montessori"]
    },
    {
      name: "E****** R*******",
      role: "Psychomotricienne",
      specialization: "Développement psychomoteur, Graphomotricité",
      experience: "10 ans d'expérience",
      education: "Diplôme d'État en Psychomotricité",
      description: "Elle complète notre équipe en prenant en charge les aspects moteurs et sensoriels liés aux troubles des apprentissages.",
      image: "/api/placeholder/300/300",
      certifications: ["Intégration sensorielle", "Graphothérapie"]
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-gradient-to-br from-secondary-soft/20 to-primary-soft/20">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary-dark font-medium text-sm mb-6">
            <Award className="w-4 h-4 mr-2" />
            Notre équipe
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Des professionnels
            <span className="text-primary block">à votre écoute</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Notre équipe pluridisciplinaire réunit des experts passionnés par leur métier, 
            unis par une même vision : accompagner chaque patient vers l'épanouissement 
            et la réussite dans sa relation au langage.
          </p>
        </div>

        {/* Équipe */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
                  {/* Photo */}
                  <div className="relative flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                      <img
                        src={member.image}
                        alt={`Portrait de ${member.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Informations */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.specialization}
                    </p>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {member.description}
                    </p>

                    {/* Détails professionnels */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center md:justify-start text-xs text-muted-foreground">
                        <GraduationCap className="w-3 h-3 mr-2 text-secondary-dark" />
                        {member.education}
                      </div>
                      <div className="flex items-center justify-center md:justify-start text-xs text-muted-foreground">
                        <Award className="w-3 h-3 mr-2 text-primary" />
                        {member.experience}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      {member.certifications.map((cert, certIndex) => (
                        <span
                          key={certIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Engagement qualité */}
        <div className="bg-white/70 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Notre engagement qualité
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Formation continue :</strong> Notre équipe se forme régulièrement aux dernières recherches et méthodes en orthophonie.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-dark rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Supervision clinique :</strong> Nous nous réunissons chaque semaine pour échanger sur nos pratiques et cas complexes.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Réseau professionnel :</strong> Nous collaborons avec pédiatres, psychologues et enseignants spécialisés.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full mb-6">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">
                Certifiés et agréés
              </h4>
              <p className="text-muted-foreground">
                Tous nos praticiens sont diplômés d'État et inscrits dans leurs ordres professionnels respectifs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;