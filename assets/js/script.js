const translations = {
    fr: {
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_cars: "Nos Voitures",
        nav_locations: "Nos Agences",
        nav_contact: "Contact",
        hero_title: "AzizStarsCars : Location de Voitures à <span class='gold-text-gradient italic'>El Jadida & Zemamra</span>",
        hero_desc: "Service de haute qualité. Large choix de voitures citadines et familiales pour tous vos besoins au Maroc.",
        btn_whatsapp: "Réserver via WhatsApp",
        btn_fleet: "Voir notre flotte",
        about_title: "Qualité & Proximité",
        about_desc: "AzizStarsCars est votre agence locale de confiance. Nous nous engageons à fournir des véhicules récents et un service client irréprochable à El Jadida et Zemamra.",
        cat_title: "Notre <span class='gold-text-gradient'>Parc Automobile</span>",
        filter_all: "Tous",
        filter_economy: "Économique",
        filter_citadine: "Citadine",
        filter_family: "Familiale",
        price_day: "DH/jour",
        locations_title: "Nos <span class='gold-text-gradient'>Agences</span>",
        loc_eljadida: "Agence El Jadida",
        loc_zemamra: "Agence Zemamra",
        loc_desc: "Retrouvez-nous dans nos deux points de vente pour un service rapide et efficace.",
        contact_title: "Prêt pour votre <span class='gold-text-gradient italic'>Prochain Voyage ?</span>",
        contact_desc: "Notre équipe est disponible pour répondre à vos besoins et préparer votre véhicule.",
        label_name: "Nom complet",
        label_email: "Email",
        label_message: "Message",
        btn_send: "Envoyer le message",
        promo_title: "Nos <span class='gold-text-gradient italic'>Offres Stars</span>",
        footer_copy: "&copy; 2026 AzizStarsCars Maroc. La qualité au meilleur prix."
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_cars: "Our Cars",
        nav_locations: "Locations",
        nav_contact: "Contact",
        hero_title: "AzizStarsCars: Car Rental in <span class='gold-text-gradient italic'>El Jadida & Zemamra</span>",
        hero_desc: "High quality service. Wide choice of city and family cars for all your needs in Morocco.",
        btn_whatsapp: "Book via WhatsApp",
        btn_fleet: "View Fleet",
        about_title: "Quality & Proximity",
        about_desc: "AzizStarsCars is your trusted local agency. We are committed to providing recent vehicles and impeccable customer service in El Jadida and Zemamra.",
        cat_title: "Our <span class='gold-text-gradient'>Car Fleet</span>",
        filter_all: "All",
        filter_economy: "Economy",
        filter_citadine: "City Car",
        filter_family: "Family",
        price_day: "DH/day",
        locations_title: "Our <span class='gold-text-gradient'>Locations</span>",
        loc_eljadida: "El Jadida Branch",
        loc_zemamra: "Zemamra Branch",
        loc_desc: "Find us in our two locations for fast and efficient service.",
        contact_title: "Ready for your <span class='gold-text-gradient italic'>Next Trip?</span>",
        contact_desc: "Our team is available to meet your needs and prepare your vehicle.",
        label_name: "Full Name",
        label_email: "Email",
        label_message: "Message",
        btn_send: "Send Message",
        promo_title: "Our <span class='gold-text-gradient italic'>Star Offers</span>",
        footer_copy: "&copy; 2026 AzizStarsCars Morocco. Quality at the best price."
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_cars: "سياراتنا",
        nav_locations: "وكالاتنا",
        nav_contact: "اتصل بنا",
        hero_title: "عزيز ستارز كارز: كراء السيارات في <span class='gold-text-gradient italic'>الجديدة والزمامرة</span>",
        hero_desc: "خدمة عالية الجودة. مجموعة واسعة من السيارات الحضرية والعائلية لجميع احتياجاتكم في المغرب.",
        btn_whatsapp: "حجز عبر واتساب",
        btn_fleet: "تصفح أسطولنا",
        about_title: "الجودة والقرب",
        about_desc: "عزيز ستارز كارز هي وكالتكم المحلية الموثوقة. نحن ملتزمون بتوفير سيارات حديثة وخدمة عملاء ممتازة في الجديدة والزمامرة.",
        cat_title: "أسطول <span class='gold-text-gradient'>سياراتنا</span>",
        filter_all: "الكل",
        filter_economy: "اقتصادية",
        filter_citadine: "حضرية",
        filter_family: "عائلية",
        price_day: "درهم/يوم",
        locations_title: "فروعنا <span class='gold-text-gradient'>المحلية</span>",
        loc_eljadida: "وكالة الجديدة",
        loc_zemamra: "وكالة الزمامرة",
        loc_desc: "تفضلوا بزيارتنا في فروعنا للحصول على خدمة سريعة وفعالة.",
        contact_title: "هل أنت مستعد <span class='gold-text-gradient italic'>لرحلتك القادمة؟</span>",
        contact_desc: "فريقنا متاح لتلبية احتياجاتك وتجهيز سيارتك.",
        label_name: "الاسم الكامل",
        label_email: "البريد الإلكتروني",
        label_message: "الرسالة",
        btn_send: "إرسال الرسالة",
        promo_title: "عروضنا <span class='gold-text-gradient italic'>المتميزة</span>",
        footer_copy: "&copy; 2026 عزيز ستارز كارز المغرب. الجودة بأفضل الأسعار."
    }
};

const carData = [
    { id: 1, name: 'Dacia Logan', type_fr: 'Économique', type_en: 'Economy', type_ar: 'اقتصادية', price: 250, img: 'https://images.unsplash.com/photo-1619103444050-25e24391e604?auto=format&fit=crop&q=80&w=600', cat: 'economy' },
    { id: 2, name: 'Renault Clio 5', type_fr: 'Citadine', type_en: 'City Car', type_ar: 'حضرية', price: 350, img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600', cat: 'citadine' },
    { id: 3, name: 'Peugeot 208', type_fr: 'Citadine', type_en: 'City Car', type_ar: 'حضرية', price: 350, img: 'https://images.unsplash.com/photo-1632243193444-93c623351f7e?auto=format&fit=crop&q=80&w=600', cat: 'citadine' },
    { id: 4, name: 'Dacia Sandero Stepway', type_fr: 'Économique', type_en: 'Economy', type_ar: 'اقتصادية', price: 300, img: 'https://images.unsplash.com/photo-1619103444050-25e24391e604?auto=format&fit=crop&q=80&w=600', cat: 'economy' },
    { id: 5, name: 'Fiat 500', type_fr: 'Citadine', type_en: 'City Car', type_ar: 'حضرية', price: 300, img: 'https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&q=80&w=600', cat: 'citadine' },
    { id: 6, name: 'Hyundai Accent', type_fr: 'Familiale', type_en: 'Family', type_ar: 'عائلية', price: 400, img: 'https://images.unsplash.com/photo-1709403328475-68045610817c?auto=format&fit=crop&q=80&w=600', cat: 'family' }
];

function initApp() {
    return {
        lang: localStorage.getItem('lang') || 'fr',
        theme: localStorage.getItem('theme') || 'dark',
        mobileMenu: false,
        scrolled: false,
        activeFilter: 'all',
        cars: carData,
        phone: "+212665660104",
        phoneFormatted: "+212 665-660104",
        t(key) {
            return translations[this.lang][key] || key;
        },
        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', this.theme);
        },
        setLang(l) {
            this.lang = l;
            localStorage.setItem('lang', l);
            document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
            document.documentElement.lang = l;
        },
        init() {
            this.setLang(this.lang);
            AOS.init({ duration: 1200, once: true });
            lucide.createIcons();
            window.addEventListener('scroll', () => {
                this.scrolled = window.pageYOffset > 50;
            });
        }
    }
}
