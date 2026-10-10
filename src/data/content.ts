// Local site content — edit freely in src/data/content.ts
export const siteName = 'Nápoles';

export const whatsappData = {
    phone: '5491163616346',
    message: 'Hola, quiero reservar una mesa en Nápoles',
};

export const googleMapsUrl =
    'https://www.google.com/maps/place/?q=place_id:ChIJDRUlv8Epo5URTkrnNdLb2Do';

export const footerData = {
    address: ['Av. 21 n° 5312', 'Berazategui', 'Buenos Aires, Argentina'],
    copyright: 'Nápoles Cucina Italiana',
    nav: [
        {
            title: 'Seguinos',
            items: [
                {
                    label: 'Instagram',
                    href: 'https://www.instagram.com/napolescucinaitaliana',
                },
            ],
        },
        {
            title: 'Contacto',
            items: [
                {
                    label: 'WhatsApp',
                    href: 'https://wa.me/5491163616346',
                },
                {
                    label: '+54 11 6361-6346',
                    href: 'tel:+5491163616346',
                },
            ],
        },
        {
            title: 'Visitanos',
            items: [
                {
                    label: 'Ubicación',
                    href: googleMapsUrl,
                },
               /*  {
                    label: 'Reservas',
                    href: 'https://wa.me/5491163616346?text=Hola%2C%20quiero%20reservar%20una%20mesa%20en%20N%C3%A1poles',
                }, */
            ],
        },
        {
            title: 'Legal',
            items: [
                {
                    label: 'Términos y privacidad',
                    href: '/legal',
                },
            ],
        },
    ],
};

export const homeData = {
    seo: {
        title: 'Inicio',
    },
    hero: {
        title: 'Napoles',
        address: 'Av. 21 n° 5312, Berazategui',
        open_time:
            '<p><strong>Abierto 9AM-01AM</strong><br />(Miercoles a Domingos)</p>',
        map_image: '/images/001-hero-map.webp',
        description: [
            {
                type: 'text',
                content: '<p>Bienvenidos a Napoles Cucina Italiana',
            },
            {
                type: 'image',
                src: '/images/002-inline-1.webp',
                width: 208,
                alt: '',
            },
            {
                type: 'text',
                content:
                    '<p>Un rincón en Zona Sur nacido de las recetas y la tradición de nuestras abuelas tanas. Todo lo que hacemos acá es a pulmón y con una sola misión: brindarte ese recibimiento cálido que te hace sentir, desde que llegas, parte de nuestra casa. Pasen y compartan la mesa</p>',
            },
        ],
    },
    /* menuSection: {
        title: 'Menú',
        description:
            '<p>Aca vas a encontrar nuestros platos principales. Cada plato es una obra de arte, con ingredientes frescos y sabores únicos. Disfruta de una experiencia culinaria única en Nápoles.</p>',
        meals: [
             {
                title: 'Almuerzo',
                slug: 'lunch',
                description:
                    '<p>Cortá la rutina del mediodía con un almuerzo como en casa. En Nápoles te invitamos a hacer una pausa y disfrutar de nuestras opciones ejecutivas y platos tradicionales, hechos con amor y materia prima premium. Vení a recargar energías en un ambiente cómodo, relajado y con la calidez de nuestra atención de siempre.</p>',
                cover_image: '/images/005-meal-1.webp',
            },
            {
                title: 'Cena',
                slug: 'dinner',
                description:
                    '<p>Para nosotros, la cena es el momento más sagrado del día. Es cuando encendemos nuestro horno para prepararte la verdadera pizza napolitana de bordes gruesos, y cuando servimos nuestras pastas artesanales hechas a mano, como nuestro exclusivo pappardelle relleno de carne braseada al vino por 6 horas. Te invitamos a cerrar el día en un ambiente íntimo y acogedor, disfrutando de sabores reales con la calidez de nuestra atención</p>',
                cover_image: '/images/006-meal-2.webp',
            },
        ],
    }, */
    seasonsSection: {
        title: 'Menú',
        description:
            '<p>Aca vas a encontrar nuestros platos principales. Cada plato es una obra de arte, con ingredientes frescos y sabores únicos. Disfruta de una experiencia culinaria única en Napoles.</p>',
        seasons: [
            {
                title: 'BEBIDAS',
                slug: 'winter',
                cover_image: '/images/bebidas.webp',
                pdf_url: 'https://res.cloudinary.com/q1nr5zxg/image/upload/v1791126674/Vinos_y_Bebidas.pdf',
            },
            {
                title: 'Carnes',
                slug: 'spring',
                cover_image: '/images/007-season-home-0.webp',
                pdf_url: 'https://res.cloudinary.com/q1nr5zxg/image/upload/v1790878182/Carnes.pdf',
            },
            {
                title: 'Pizza',
                slug: 'summer',
                cover_image: '/images/008-season-home-1.webp',
                pdf_url: 'https://res.cloudinary.com/q1nr5zxg/image/upload/v1790878181/Pizzas_y_Calzones.pdf',
            },
            {
                title: 'Ensaladas',
                slug: 'fall',
                cover_image: '/images/009-season-home-2.webp',
                pdf_url: 'https://res.cloudinary.com/q1nr5zxg/image/upload/v1791126673/Ensaladas.pdf',
            },
            {
                title: 'Menu ejecutivo',
                subtitle: 'plato principal + bebida + postre o cafe',
                slug: 'winter',
                cover_image: '/images/calzone-menu-ejecutivo.webp',
                pdf_url: 'https://res.cloudinary.com/q1nr5zxg/image/upload/v1790878181/Men%C3%BA_Ejecutivo.pdf',
            },
            {
                title: 'Entradas',
                slug: 'winter',
                cover_image: '/images/rabas-entradas.webp',
                pdf_url: 'https://res.cloudinary.com/q1nr5zxg/image/upload/v1791126673/Entradas.pdf',
            },
            {
                title: 'Risotto',
                slug: 'winter',
                cover_image: '/images/risotto.webp',
                pdf_url: 'https://res.cloudinary.com/q1nr5zxg/image/upload/v1790878182/Risotto.pdf',
            },
            {
                title: 'Pastas',
                slug: 'winter',
                cover_image: '/images/010-season-home-3.webp',
                pdf_url: 'https://res.cloudinary.com/q1nr5zxg/image/upload/v1790878183/Pastas.pdf',
            },
            {
                title: 'Pescados',
                slug: 'winter',
                cover_image: '/images/pescados.webp',
                pdf_url: 'https://res.cloudinary.com/q1nr5zxg/image/upload/v1790878182/Pescados.pdf',
            },
            {
                title: 'Menu infantil',
                slug: 'winter',
                cover_image: '/images/milanesa-con-pure.webp',
                pdf_url: 'https://res.cloudinary.com/q1nr5zxg/image/upload/v1790878181/Men%C3%BA_Infantil.pdf',
            },
            {
                title: 'POSTRES',
                slug: 'winter',
                cover_image: '/images/tiramisu.webp',
                pdf_url: 'https://res.cloudinary.com/q1nr5zxg/image/upload/v1790878182/Postres.pdf',
            },
            
        ],
    },
    ambienceSection: {
        title: 'Ambiente',
        description:
            '<p>Un espacio cálido y acogedor pensado para que te sientas como en casa. Iluminación suave, música en vivo algunos días y la atención cercana de nuestro equipo hacen de cada visita una experiencia especial.</p>',
        items: [
            {
                text: '<p>Ingreso</p>',
                image: '/images/011-ambience-0.webp',
            },
            {
                text: '<p>Salón principal</p>',
                image: '/images/012-ambience-1.webp',
            },
            {
                text: '<p>Salon principal</p>',
                image: '/images/013-ambience-2.webp',
            },
            {
                text: '<p>Salon principal</p>',
                image: '/images/014-ambience-3.webp',
            },
            {
                text: '<p>Salon principal</p>',
                image: '/images/015-ambience-4.webp',
            },
        ],
    },
   /*  specialsSection: {
        title: 'Especiales del día',
        description:
            '<p>Cada día preparamos platos especiales con ingredientes frescos. Consultá en el local o por WhatsApp las propuestas de la jornada.</p>',
    }, */
    eventsSection: {
        title: 'Eventos',
        description:
            '<p>Música en vivo, noches temáticas y celebraciones especiales. Seguinos en Instagram para enterarte de las próximas fechas en Nápoles.</p>',
        events: [
            {
                title: 'Música en vivo',
                description:
                    '<p>En algunas ocaciones vas a disfrutár de música en vivo mientras cenas o almorzas. Ambiente íntimo, buena comida y la calidez de siempre en Berazategui.</p>',
                date: 'Consultar en Instagram',
                cover_image: '/images/016-event-home-0.webp',
            },
            {
                title: 'Pizza Libre',
                description:
                    '<p>Los miércoles, jueves y domingos la noche se vive a pleno. Elegí tu propuesta ideal desde las 19:30 hs: Pizza libre + Cerveza tirada + Postre, o disfrutá de nuestras Pastas con un 2x1 en tragos. Reservá tu mesa por WhatsApp con anticipación, ¡te esperamos!</p>',
                date: 'Seguinos para novedades',
                cover_image: '/images/017-event-home-1.webp',
            },
        ],
    },
    testimonialsSection: {
        title: 'Reseñas',
        description:
            '<p>Lo que dicen nuestros clientes en Google sobre su experiencia en Nápoles.</p>',
        google_maps_url:
            'https://www.google.com/maps/place/Napoles+Cucina+Italiana/@-34.7656075,-58.1991434,17z/data=!3m1!4b1!4m6!3m5!1s0x95a329c1bf25150d:0x3ad8dbd235e74a4e!8m2!3d-34.7656075!4d-58.1991434!16s%2Fg%2F11l1wpwt1c',
    },
};

export const foodItemsData = [
    {
        title: 'Kebab',
        slug: 'kebab',
        description:
            '<p>Freshly baked bread brushed with garlic butter and served with a side of marinara sauce</p>',
        price: 10,
        cover_image: '/images/019-food-0-kebab.webp',
        day_available: 'SUN',
        special: true,
        meal_types: ['lunch', 'dinner'],
        seasons: ['spring'],
    },
    {
        title: 'Meatballs',
        slug: 'meatballs',
        description:
            '<p>Freshly baked bread brushed with garlic butter and served with a side of marinara sauce</p>',
        price: 11,
        cover_image: '/images/020-food-1-meatballs.webp',
        day_available: 'SUN',
        special: true,
        meal_types: ['lunch', 'dinner'],
        seasons: ['spring'],
    },
    {
        title: 'Avocado Toast With Egg',
        slug: 'avocado-toast-with-egg',
        description:
            '<p>Freshly baked bread brushed with garlic butter and served with a side of marinara sauce</p>',
        price: 10,
        cover_image: '/images/021-food-2-avocado-toast-with-egg.webp',
        day_available: 'SUN',
        special: true,
        meal_types: ['breakfast'],
        seasons: ['spring'],
    },
    {
        title: 'Salad',
        slug: 'salad',
        description:
            '<p>Freshly baked bread brushed with garlic butter and served with a side of marinara sauce</p>',
        price: 10,
        cover_image: '/images/022-food-3-salad.webp',
        day_available: 'SUN',
        special: true,
        meal_types: ['lunch', 'dinner'],
        seasons: ['spring'],
    },
    {
        title: 'Pizza',
        slug: 'pizza',
        description:
            '<p>Freshly baked bread brushed with garlic butter and served with a side of marinara sauce</p>',
        price: 12,
        cover_image: '/images/023-food-4-pizza.webp',
        day_available: 'SUN',
        special: true,
        meal_types: ['lunch', 'dinner'],
        seasons: ['spring'],
    },
    {
        title: 'Garlic bread',
        slug: 'garlic-bread',
        description:
            '<p>Freshly baked bread brushed with garlic butter and served with a side of marinara sauce</p>',
        price: 6,
        cover_image: '/images/024-food-5-garlic-bread.webp',
        day_available: 'SUN',
        special: false,
        meal_types: ['breakfast'],
        seasons: ['spring'],
    },
    {
        title: 'Bruschetta',
        slug: 'bruschetta',
        description:
            '<p>Toasted bread topped with fresh tomatoes, basil, and olive oil</p>',
        price: 7,
        cover_image: '/images/025-food-6-bruschetta.webp',
        day_available: 'SUN',
        special: false,
        meal_types: ['breakfast'],
        seasons: ['spring'],
    },
    {
        title: 'Fried CalamarI',
        slug: 'fried-calamari',
        description:
            '<p>Tender calamari rings lightly battered and fried to golden perfection, served with a side of marinara sauce</p>',
        price: 9,
        cover_image: '/images/026-food-7-fried-calamari.webp',
        day_available: 'SUN',
        special: false,
        meal_types: ['breakfast'],
        seasons: ['spring'],
    },
    {
        title: 'Buffalo Wings',
        slug: 'buffalo-wings',
        description:
            '<p>Crispy chicken wings coated in spicy buffalo sauce and served with a side of blue cheese dressing</p>',
        price: 8,
        cover_image: '/images/027-food-8-buffalo-wings.webp',
        day_available: 'SUN',
        special: false,
        meal_types: ['breakfast'],
        seasons: ['spring'],
    },
    {
        title: 'Spinach and Artichoke Dip',
        slug: 'spinach-and-artichoke-dip',
        description:
            '<p>: A creamy blend of spinach, artichoke hearts, and melted cheese, served with tortilla chips</p>',
        price: 10,
        cover_image: '/images/028-food-9-spinach-and-artichoke-dip.webp',
        day_available: 'SUN',
        special: false,
        meal_types: ['breakfast'],
        seasons: ['spring'],
    },
];

export const menuData = {
    seo: {
        title: 'Menú',
    },
    title: 'Menú',
    meals: [
        {
            title: 'Almuerzo',
            slug: 'lunch',
            description:
                '<p>Platos ejecutivos y propuestas de la cocina italiana para el mediodía, en un ambiente relajado.</p>',
            cover_image: '/images/030-menu-meal-1.webp',
        },
        {
            title: 'Cena',
            slug: 'dinner',
            description:
                '<p>Pizzas napolitanas, pastas artesanales y platos de autor para cerrar el día en Nápoles.</p>',
            cover_image: '/images/031-menu-meal-2.webp',
        },
        {
            title: 'Postres',
            slug: 'dessert',
            description:
                '<p>Postres caseros inspirados en la tradición italiana para terminar tu comida con dulzura.</p>',
            cover_image: '/images/032-menu-meal-3.webp',
        },
    ],
};

export const aboutData = {
    seo: {
        title: 'Nosotros',
    },
    hero: {
        titleLine1: 'Cada plato se hace',
        titleLine2: 'con cuidado y atención',
        subtitle:
            '<p>Al detalle, para asegurar<br />el mejor sabor y calidad.</p>',
        description:
            '<p>En Nápoles Cucina Italiana ofrecemos pastas artesanales, pizzas napolitanas y platos de la tradición italiana. Ya sea que busques un almuerzo ejecutivo o una cena especial, tenemos opciones para todos los gustos.</p>',
        cover: '/images/033-about-hero.webp',
    },
    sections: [
        {
            text: '<p>La experiencia en Nápoles no es solo comida. Nuestro equipo te recibe con calidez desde que entrás y te acompaña durante toda la visita para que te sientas parte de la casa.</p>',
            image: '/images/034-about-section-0.webp',
        },
        {
            text: '<p>Además de nuestra carta, contamos con una selección de vinos y bebidas pensada para acompañar cada plato y hacer de tu comida un momento aún más disfrutable.</p>',
            image: '/images/035-about-section-1.webp',
        },
        {
            text: '<p>Ya sea una celebración o una salida en familia, te invitamos a compartir la mesa con nosotros. Prometemos una experiencia memorable en Berazategui.</p>',
            image: '/images/036-about-section-2.webp',
        },
    ],
};

export const contactData = {
    seo: {
        title: 'Contacto',
    },
    title: 'Contacto',
    description:
        '<p>Av. 21 n° 5312, Berazategui<br />Buenos Aires, Argentina<br /><br />(<a href="tel:+5491163616346" target="_blank">+54 11 6361-6346</a> <strong>· </strong><a href="https://www.instagram.com/napolescucinaitaliana" target="_blank">@napolescucinaitaliana</a>)</p>',
    map_image: '/images/001-hero-map.webp',
    maps_url: googleMapsUrl,
};

export const eventsData = {
    seo: {
        title: 'Eventos',
    },
    title: 'Eventos',
    description:
        '<p>En Nápoles organizamos noches con música en vivo y propuestas especiales. Seguinos en redes para conocer las próximas fechas.</p>',
    events: [
        {
            title: 'Música en vivo',
            description:
                '<p>Disfrutá de música en vivo mientras cenás. Consultá en Instagram los viernes y fechas especiales con artistas invitados.</p>',
            date: 'Consultar en Instagram',
            cover_image: '/images/038-events-page-0.webp',
        },
        {
            title: 'Noches especiales',
            description:
                '<p>Celebramos fechas importantes con menús y ambientación únicos. Reservá con anticipación por WhatsApp.</p>',
            date: 'Seguinos para novedades',
            cover_image: '/images/039-events-page-1.webp',
        },
    ],
};

export const reservationData = {
    seo: {
        title: 'Reservas',
    },
    title: 'Reservas',
};

export const seasonalData = {
    seasons: [
        {
            title: 'Primavera',
            slug: 'spring',
            description:
                '<p>Ingredientes frescos y platos ligeros que celebran la llegada de la primavera.</p>',
            cover_image: '/images/040-seasonal-0.webp',
        },
        {
            title: 'Verano',
            slug: 'summer',
            description:
                '<p>Propuestas frescas y sabores vibrantes para los días más cálidos del año.</p>',
            cover_image: '/images/041-seasonal-1.webp',
        },
        {
            title: 'Otoño',
            slug: 'fall',
            description:
                '<p>Sabores más intensos y platos reconfortantes con productos de estación.</p>',
            cover_image: '/images/042-seasonal-2.webp',
        },
        {
            title: 'Invierno',
            slug: 'winter',
            description:
                '<p>Pastas, guisos y platos de horno para disfrutar el frío con calidez italiana.</p>',
            cover_image: '/images/043-seasonal-3.webp',
        },
    ],
};

export const legalData = [
    {
        title: 'Política de privacidad',
        content:
            '<p>Esta política de privacidad aplica al sitio web de Nápoles Cucina Italiana. Nos comprometemos a proteger tu información personal y a usarla únicamente para gestionar reservas, consultas y la comunicación relacionada con nuestro restaurante.</p>',
    },
    {
        title: 'Información que recopilamos',
        content:
            '<p>Podemos recopilar datos que nos proporcionás al contactarnos o reservar, como nombre, teléfono, correo electrónico y preferencias de reserva. También podemos recibir información técnica básica de navegación en el sitio.</p>',
    },
    {
        title: 'Cómo usamos tu información',
        content:
            '<p>Utilizamos tus datos para confirmar reservas, responder consultas y mejorar nuestro servicio. No compartimos tu información con terceros con fines comerciales sin tu consentimiento.</p>',
    },
    {
        title: 'Protección de datos',
        content:
            '<p>Tomamos medidas razonables para proteger tu información contra acceso no autorizado, divulgación o uso indebido.</p>',
    },
/*     {
        title: 'Tus derechos',
        content:
            '<p>Podés solicitar acceso, corrección o eliminación de tus datos personales contactándonos por WhatsApp o Instagram.</p>',
    }, */
/*     {
        title: 'Contacto',
        content:
            '<p>Para consultas sobre esta política, escribinos por <a href="https://wa.me/5491163616346" target="_blank">WhatsApp</a> o <a href="https://www.instagram.com/napolescucinaitaliana" target="_blank">Instagram</a>.</p>',
    }, */
];
