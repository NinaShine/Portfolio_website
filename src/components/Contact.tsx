import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Caster e.target en HTMLFormElement
  const form = e.target as HTMLFormElement;
  
    emailjs.sendForm('service_a6yxvz7', 'template_fpayn5d', form, 'Hgrr4VJzDsIFoJt-Z')
      .then(() => {
        setSubmitMessage('Votre message a été envoyé avec succès!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitMessage(''), 5000);
      })
      .catch(() => {
        setSubmitMessage('Erreur lors de l\'envoi, veuillez réessayer.');
      });
  
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'salhinina.pro@gmail.com',
      link: 'mailto:salhinina.pro@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Téléphone',
      value: '06-58-48-22-95',
      link: 'tel:0658482295'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localisation',
      value: 'Montpellier, France',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="text-center mb-12">
        <h2 className="section-title">Contact</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Vous avez un projet en tête ou souhaitez discuter d'une opportunité? N'hésitez pas à me contacter!
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-moi un message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="cta-button primary-cta"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
            
            {submitMessage && (
              <p className="text-green-600 font-medium mt-2">{submitMessage}</p>
            )}
          </form>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Informations de contact</h3>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="text-black-800 mr-4">

                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{info.title}</h4>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h4 className="section-title">Langues</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Français : Courant</li>
              <li>Anglais : Niveau B2</li>
              <li>Arabe : Langue maternelle</li>
              <li>Kabyle : Langue maternelle</li>
            </ul>
          </div>
          
          <div className="mt-8">
            <h4 className="section-title">Centres d'intérêt</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Art (pratique de la peinture et du dessin)</li>
              <li>Tennis (1 an en club)</li>
              <li>Volley-Ball (6 ans en club)</li>
              <li>Photographie (shooting)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;