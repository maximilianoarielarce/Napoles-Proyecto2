/**
 * Menú real de Nápoles Cucina Italiana.
 * Fuente: los 11 PDF de la carpeta /public/menus (transcritos a mano de la carta).
 *
 * Precios: la carta muestra DOS precios por plato ("$24.137 / $21.000").
 * `price` es el primero y `priceAlt` el segundo, tal cual figuran en el PDF.
 * Todavía no está confirmado qué significa cada uno (ver PRICE_LEGEND).
 * Los precios están en pesos argentinos, sin decimales ($24.137 => 24137).
 */

export interface MenuItem {
    name: string;
    description?: string;
    price?: number;
    priceAlt?: number;
    isNew?: boolean;
    /** La carta muestra el símbolo de "sin gluten" junto a este plato. */
    glutenFreeSymbol?: boolean;
    /** Foto que corresponde con certeza a este plato. */
    image?: string;
    imageAlt?: string;
}

export interface MenuSection {
    title?: string;
    note?: string;
    items: MenuItem[];
}

export interface MenuCategory {
    slug: string;
    title: string;
    /** Texto corto para la tarjeta de la home y la meta descripción. */
    summary: string;
    image: string;
    imageAlt: string;
    pdf: string;
    note?: string;
    sections: MenuSection[];
}

/**
 * Leyenda para los dos precios. Dejar vacío ('') hasta confirmarlo con el
 * restaurante; cuando se complete, se muestra arriba del menú.
 * Ejemplo: 'Primer precio: tarjeta · Segundo precio: efectivo/transferencia'
 */
export const PRICE_LEGEND = '';

export const TABLE_SERVICE_NOTE = 'Servicio de mesa: $2.500';

export const menuCategories: MenuCategory[] = [
    {
        slug: 'entradas',
        title: 'Entradas',
        summary: 'Rabas, langostinos, bruschettas y más para empezar.',
        image: '/images/rabas-entradas.webp',
        imageAlt: 'Plato de rabas con limón y salsa en una mesa de madera',
        pdf: '/menus/entradas.pdf',
        note: 'Consultá por el plato del día.',
        sections: [
            {
                items: [
                    {
                        name: 'Langostinos al pinche',
                        description: 'Envueltos en panceta',
                        price: 20689,
                        priceAlt: 18000,
                    },
                    {
                        name: 'Mix de Bruschettas',
                        description:
                            'Queso roquefort, espárragos y nueces / prosciutto, tomates secos y bocconcini / tomate, albahaca y ajo',
                        price: 17241,
                        priceAlt: 15000,
                    },
                    {
                        name: 'Mozzarella frita',
                        description: 'Acompañado de salsa fileto/pomodoro',
                        price: 15517,
                        priceAlt: 13500,
                    },
                    { name: 'Prosciutto', price: 20689, priceAlt: 18000 },
                    {
                        name: 'Rabas',
                        price: 20689,
                        priceAlt: 18000,
                        image: '/images/rabas-entradas.webp',
                        imageAlt: 'Rabas con rodajas de limón y salsa',
                    },
                    {
                        name: 'Roll de Berenjenas',
                        description: 'Relleno de Verdura y Ricota',
                        price: 13793,
                        priceAlt: 12000,
                    },
                ],
            },
        ],
    },
    {
        slug: 'ensaladas',
        title: 'Ensaladas',
        summary: 'Caesar, Di mare, Nápoles, Roma, Tropical y 3 Verdes.',
        image: '/images/009-season-home-2.webp',
        imageAlt: 'Ensalada con salmón, palta y crotones sobre una mesa de madera',
        pdf: '/menus/ensaladas.pdf',
        note: TABLE_SERVICE_NOTE,
        sections: [
            {
                items: [
                    {
                        name: 'Caesar Pollo',
                        description:
                            'Pollo, queso parmesano, crotones de pan, aderezo y lechuga',
                        price: 17586,
                        priceAlt: 15300,
                    },
                    {
                        name: 'Caesar de Salmón',
                        description:
                            'Salmón, queso parmesano, crotones de pan, aderezo y lechuga',
                        price: 20689,
                        priceAlt: 18000,
                    },
                    {
                        name: 'Di mare',
                        description:
                            'Lechuga, rúcula, mejillones, gambas, calamar y berberechos',
                        price: 19655,
                        priceAlt: 17100,
                    },
                    {
                        name: 'Nápoles',
                        description:
                            'Rúcula, palta, cebolla morada, salmón crocante, crotones de pan, aderezo dijón y mix de semillas',
                        price: 20689,
                        priceAlt: 18000,
                    },
                    {
                        name: 'Roma',
                        description:
                            'Castañas de Caju, cherry, portobello, queso crocante, palta y aderezo dijón',
                        price: 18620,
                        priceAlt: 16200,
                    },
                    {
                        name: 'Tropical',
                        description:
                            'Pera, queso azul, rúcula, nueces, ciruela alineada con oliva, frutilla, sal y pimienta',
                        price: 18620,
                        priceAlt: 16200,
                    },
                    {
                        name: '3 Verdes',
                        description:
                            'Lechuga, espinaca, rúcula, almendras tostadas y queso de cabra',
                        price: 13793,
                        priceAlt: 12000,
                    },
                ],
            },
        ],
    },
    {
        slug: 'menu-ejecutivo',
        title: 'Menú ejecutivo',
        summary: 'Plato principal, bebida y postre o café.',
        image: '/images/calzone-menu-ejecutivo.webp',
        imageAlt: 'Calzone gratinado con tomate y albahaca sobre una tabla',
        pdf: '/menus/menu-ejecutivo.pdf',
        note: 'Bienvenidos a nuestro homenaje al laburante. Nuestro menú incluye: plato principal, bebida, postre o café.',
        sections: [
            {
                items: [
                    {
                        name: 'Calzone',
                        description:
                            'Muzzarella, tomate, albahaca, reggianito, aceite de oliva',
                        price: 19885,
                        priceAlt: 17300,
                    },
                    {
                        name: 'Ensalada del chef',
                        description:
                            'Penne Rigatti, cebolla morada, cherrys, palta, albahaca, lechuga, rúcula',
                        price: 19885,
                        priceAlt: 17300,
                    },
                    {
                        name: 'Margarita',
                        description:
                            'Muzzarella, tomate, albahaca, reggianito, aceite de oliva',
                        price: 19885,
                        priceAlt: 17300,
                    },
                    {
                        name: 'Ñoquis de espinaca',
                        description: 'Crema de orégano con parmesano gratinado',
                        price: 19885,
                        priceAlt: 17300,
                    },
                ],
            },
            {
                items: [
                    {
                        name: 'Filet de Merluza crocante',
                        description:
                            'Apanado con panko y acompañado de puré de papa',
                        price: 21954,
                        priceAlt: 19100,
                    },
                    {
                        name: 'Ñoquis de papa',
                        description: 'Con salsa cuatro quesos',
                        price: 21954,
                        priceAlt: 19100,
                    },
                    {
                        name: 'Pinche Mixto de bondiola y pollo',
                        description:
                            'Zanahoria, cebolla, cebolla morada y papines andinos',
                        price: 21954,
                        priceAlt: 19100,
                        isNew: true,
                    },
                ],
            },
            {
                items: [
                    {
                        name: 'Bondiola',
                        description:
                            'Crema al Malbec con ralladura de lima y puré de batata',
                        price: 24252,
                        priceAlt: 21100,
                    },
                    {
                        name: 'Lasagna de Berenjena',
                        description:
                            'Berenjena, zucchini, cebolla morada, lonjas de zanahoria, muzzarella y morrón',
                        price: 24252,
                        priceAlt: 21100,
                    },
                    {
                        name: 'Spaghetti con milanesa',
                        description: 'Spaghetti a la crema con milanesa de peceto',
                        price: 24252,
                        priceAlt: 21100,
                    },
                ],
            },
        ],
    },
    {
        slug: 'pizzas-y-calzones',
        title: 'Pizzas y calzones',
        summary: 'Pizza napolitana de horno de leña y calzone.',
        image: '/images/008-season-home-1.webp',
        imageAlt: 'Pizza con jamón, aceitunas y albahaca de borde grueso',
        pdf: '/menus/pizzas-y-calzones.pdf',
        sections: [
            {
                items: [
                    {
                        name: 'Berenjena',
                        description:
                            'Berenjena frita, queso reggianito, muzzarella, albahaca y aceitunas',
                        price: 20689,
                        priceAlt: 18000,
                    },
                    {
                        name: 'Calabresa',
                        description: 'Muzzarella, albahaca, orégano y aceitunas',
                        price: 21724,
                        priceAlt: 18900,
                    },
                    {
                        name: 'Del Bosque',
                        description:
                            'Masa de espinaca con hongos de pino y portobello',
                        price: 24137,
                        priceAlt: 21000,
                        isNew: true,
                    },
                    {
                        name: 'Di Mare',
                        description: 'Con frutos de mar y salsa de ostras',
                        price: 33333,
                        priceAlt: 29000,
                        isNew: true,
                    },
                    { name: 'Jamón y Morron', price: 21724, priceAlt: 18900 },
                    {
                        name: 'Margarita',
                        description: 'Tomate, muzzarella y albahaca',
                        price: 19655,
                        priceAlt: 17100,
                    },
                    { name: 'Marinara', price: 19655, priceAlt: 17100 },
                    {
                        name: 'Marinara con anchoa',
                        price: 19655,
                        priceAlt: 17100,
                    },
                    { name: 'Mortadela y Pesto', price: 20689, priceAlt: 18000 },
                    {
                        name: 'Nápoles',
                        description:
                            'Tomate, muzzarella, pomodoro, pesto y bocconcino',
                        price: 21724,
                        priceAlt: 18900,
                    },
                    {
                        name: 'Rúcula, Jamón Crudo y Parmesano',
                        price: 21724,
                        priceAlt: 18900,
                    },
                    {
                        name: '4 Quesos',
                        description:
                            'Ricota, roquefort, muzzarella, reggianito, albahaca, aceitunas negras',
                        price: 20689,
                        priceAlt: 18000,
                    },
                    {
                        name: 'Calzone Napolitano',
                        description: 'Jamón, queso, cherry y morrón',
                        price: 21724,
                        priceAlt: 18900,
                    },
                ],
            },
        ],
    },
    {
        slug: 'pastas',
        title: 'Pastas',
        summary: 'Pasta artesanal, pasta seca y salsas a elección.',
        image: '/images/010-season-home-3.webp',
        imageAlt: 'Plato de ñoquis con salvia sobre un plato blanco',
        pdf: '/menus/pastas.pdf',
        sections: [
            {
                title: 'Nuestra pasta artesanal',
                note: 'Las salsas que acompañan nuestras pastas son sugerencia, hechas artesanalmente; las mismas pueden ser modificadas.',
                items: [
                    {
                        name: 'Canelones de verdura y ricota',
                        description: 'Con salsa zucchini',
                        price: 33448,
                        priceAlt: 29100,
                    },
                    {
                        name: 'Canelones de jamón y queso',
                        description: 'Con salsa pomodoro',
                        price: 23448,
                        priceAlt: 20400,
                    },
                    {
                        name: 'Capeletti de pollo y jamón',
                        description: 'Con salsa parisina',
                        price: 23563,
                        priceAlt: 20500,
                    },
                    {
                        name: 'Cuerda de guitarra Caprese',
                        description: 'Con tomate, ajo, albahaca y bocconcini',
                        price: 21138,
                        priceAlt: 18390,
                    },
                    {
                        name: 'Cuerda de guitarra negro',
                        description: 'Con base de crema / pomodoro y frutos de mar',
                        price: 43100,
                        priceAlt: 37500,
                    },
                    {
                        name: 'Fetuccine de morrón',
                        description: 'Con salsa fileto y estofado de ternera',
                        price: 33678,
                        priceAlt: 29300,
                    },
                    {
                        name: 'Fetuccine al huevo',
                        description: 'Con salsa mediterránea',
                        price: 18390,
                        priceAlt: 16000,
                    },
                    {
                        name: 'Fetuccine negro',
                        description: 'Con crema de langostinos al limón',
                        price: 32988,
                        priceAlt: 28700,
                        isNew: true,
                    },
                    {
                        name: 'Lasagna de berenjenas',
                        description:
                            'Berenjena, zucchini, tomate, muzzarella y salsa pomodoro',
                        price: 18390,
                        priceAlt: 16000,
                    },
                    {
                        name: 'Lasagna de carne, verdura y ricota',
                        description: 'Con salsa pomodoro',
                        price: 34367,
                        priceAlt: 29900,
                    },
                    {
                        name: 'Ñoquis de papa',
                        description: 'Con salsa cuatro quesos',
                        price: 20689,
                        priceAlt: 18000,
                    },
                    {
                        name: 'Ñoquis de batata',
                        description:
                            'Con crema de hongos y ralladura de naranja',
                        price: 30459,
                        priceAlt: 26500,
                    },
                    {
                        name: 'Panzotti de calabaza',
                        description: 'Almendra, ricota, nueces y ralladura de limón',
                        price: 20689,
                        priceAlt: 18000,
                    },
                    {
                        name: 'Papardelle',
                        description: 'Con salsa funghi',
                        price: 28850,
                        priceAlt: 25100,
                    },
                    {
                        name: 'Papardelle relleno de vacuno braseado',
                        description: 'Base de crema con vegetales salteados',
                        price: 43103,
                        priceAlt: 37500,
                        isNew: true,
                    },
                    {
                        name: 'Ravioles de cordero',
                        description: 'Con reducción en vino tinto',
                        price: 45862,
                        priceAlt: 39000,
                    },
                    {
                        name: 'Ravioles de verdura y ricota',
                        description: 'Con salsa strofa',
                        price: 20689,
                        priceAlt: 18000,
                    },
                    {
                        name: 'Triangulo con masa de remolacha',
                        description: 'Con roquefort, pera, nuez y crema de hongos',
                        price: 32528,
                        priceAlt: 28300,
                        isNew: true,
                    },
                    {
                        name: 'Spaghetti',
                        description: 'Con salsa puttonesca',
                        price: 18390,
                        priceAlt: 16000,
                    },
                    {
                        name: 'Sorrentinos de jamón y queso',
                        description: 'Con salsa pomodoro',
                        price: 22988,
                        priceAlt: 20000,
                    },
                    {
                        name: 'Sorrentinos negros de salmón',
                        description: 'Con crema de camarones',
                        price: 48275,
                        priceAlt: 42000,
                    },
                ],
            },
            {
                title: 'Pasta seca',
                note: 'Incluye salsa.',
                items: [
                    {
                        name: 'Penne Rigate',
                        price: 23793,
                        priceAlt: 20700,
                        glutenFreeSymbol: true,
                    },
                    {
                        name: 'Fusilli',
                        price: 23793,
                        priceAlt: 20700,
                        glutenFreeSymbol: true,
                    },
                    { name: 'Trofie', price: 23793, priceAlt: 20700 },
                ],
            },
            {
                title: 'Salsas',
                items: [
                    {
                        name: 'Alfredo',
                        description: 'Panceta, crema, yema de huevo',
                        price: 5747,
                        priceAlt: 5000,
                    },
                    {
                        name: 'Al Verdeo',
                        description: 'Crema y verdeo',
                        price: 4597,
                        priceAlt: 4000,
                    },
                    {
                        name: 'Arrivata',
                        description:
                            'Ajo, cherry, tomate seco, aceitunas negras y albahaca',
                        price: 5747,
                        priceAlt: 5000,
                    },
                    {
                        name: 'Blanca',
                        description: 'Crema',
                        price: 4597,
                        priceAlt: 4000,
                    },
                    {
                        name: 'Bolognesa gratinada',
                        description: 'Carne cortada a cuchillo',
                        price: 13793,
                        priceAlt: 12000,
                    },
                    {
                        name: 'Cuatro Quesos',
                        description: 'Roquefort, parmesano, muzzarella, reggianito',
                        price: 6896,
                        priceAlt: 6000,
                    },
                    {
                        name: 'Di Mare',
                        description: 'Base de crema y frutos de mar',
                        price: 13793,
                        priceAlt: 12000,
                    },
                    {
                        name: 'Funghi',
                        description: 'Crema, hongos portobello y hongos de pino',
                        price: 10344,
                        priceAlt: 9000,
                    },
                    { name: 'Pesto', price: 5747, priceAlt: 5000 },
                    { name: 'Pomodoro', price: 5747, priceAlt: 5000 },
                    {
                        name: 'Putanesca',
                        description:
                            'Olivas verdes, olivas negras, anchoas, alcaparra con base de pomodoro',
                        price: 6896,
                        priceAlt: 6000,
                    },
                ],
            },
        ],
    },
    {
        slug: 'risotto',
        title: 'Risotto',
        summary: 'De hongos, di mare, langostino y salmón, remolacha.',
        image: '/images/risotto.webp',
        imageAlt: 'Risotto cremoso con hongos en un plato de cerámica',
        pdf: '/menus/risotto.pdf',
        sections: [
            {
                items: [
                    {
                        name: 'De Hongos',
                        description: 'Pino / portobello',
                        price: 39195,
                        priceAlt: 34100,
                        image: '/images/risotto.webp',
                        imageAlt: 'Risotto cremoso con hongos en un plato de cerámica',
                    },
                    {
                        name: 'Di Mare',
                        description: 'Frutos de mar',
                        price: 44022,
                        priceAlt: 38300,
                    },
                    {
                        name: 'De Langostino y Salmón',
                        description: 'Fondo de champagne',
                        price: 48390,
                        priceAlt: 42100,
                        isNew: true,
                    },
                    {
                        name: 'Di Remolacha',
                        description: 'Con burratina',
                        price: 31150,
                        priceAlt: 27100,
                        isNew: true,
                    },
                ],
            },
        ],
    },
    {
        slug: 'carnes',
        title: 'Carnes',
        summary: 'Bbq Ribs, lomo y milanesa napolitana.',
        image: '/images/007-season-home-0.webp',
        imageAlt: 'Carne braseada con puré de papa y vegetales',
        pdf: '/menus/carnes.pdf',
        sections: [
            {
                items: [
                    {
                        name: 'Bbq Ribs',
                        description: 'Con papas cuña',
                        price: 24137,
                        priceAlt: 21000,
                        isNew: true,
                    },
                    {
                        name: 'Lomo Pizzaiola',
                        description: 'Con mil hojas de papa',
                        price: 46092,
                        priceAlt: 40100,
                    },
                    {
                        name: 'Lomo tres pimientas',
                        description: 'Con puré de espinaca',
                        price: 48045,
                        priceAlt: 41800,
                    },
                    {
                        name: 'Milanesa Napolitana',
                        description: 'Con puré de papa',
                        price: 22758,
                        priceAlt: 19800,
                    },
                ],
            },
        ],
    },
    {
        slug: 'pescados',
        title: 'Pescados',
        summary: 'Abadejo, lenguado, salmón grill y trucha.',
        image: '/images/pescados.webp',
        imageAlt: 'Salmón grillado con verduras salteadas',
        pdf: '/menus/pescados.pdf',
        sections: [
            {
                items: [
                    {
                        // VERIFICAR con el restaurante: en el PDF los precios de este plato
                        // figuran invertidos ($38.500 / $44.252); en el resto de la carta
                        // el primero es siempre el mayor.
                        name: 'Abadejo con base de risotto negro',
                        description: 'Con crema de camarones',
                        price: 38500,
                        priceAlt: 44252,
                    },
                    {
                        name: 'Lenguado con salsa roquefort',
                        description: 'Con papas cuña',
                        price: 31724,
                        priceAlt: 27600,
                    },
                    {
                        name: 'Salmón Grill',
                        description: 'Con panache de verduras',
                        price: 43218,
                        priceAlt: 37600,
                        image: '/images/pescados.webp',
                        imageAlt: 'Salmón grillado con verduras salteadas',
                    },
                    {
                        name: 'Trucha al romero',
                        description: 'Con vegetales salteados',
                        price: 43218,
                        priceAlt: 37600,
                    },
                ],
            },
        ],
    },
    {
        slug: 'menu-infantil',
        title: 'Menú infantil',
        summary: 'Milanesa, ñoquis, nuggets y spaghetti para los más chicos.',
        image: '/images/milanesa-con-pure.webp',
        imageAlt: 'Milanesas con puré de papa en un plato de cerámica',
        pdf: '/menus/menu-infantil.pdf',
        sections: [
            {
                items: [
                    {
                        name: 'Milanesa de peceto con puré',
                        price: 17586,
                        priceAlt: 15300,
                    },
                    { name: 'Ñoquis al fileto', price: 17586, priceAlt: 15300 },
                    {
                        name: 'Nuggets de pollo con puré',
                        price: 17586,
                        priceAlt: 15300,
                    },
                    {
                        name: 'Spaghetti al fileto',
                        price: 17586,
                        priceAlt: 15300,
                    },
                ],
            },
        ],
    },
    {
        slug: 'postres',
        title: 'Postres',
        summary: 'Tiramisú, flan casero, panna cotta y más.',
        image: '/images/tiramisu.webp',
        imageAlt: 'Tiramisú en un vaso sobre una mesa de madera con café',
        pdf: '/menus/postres.pdf',
        sections: [
            {
                items: [
                    { name: 'Arroz con leche', price: 8275, priceAlt: 7200 },
                    { name: 'Don Pedro', price: 9310, priceAlt: 8100 },
                    { name: 'Flan Casero', price: 8275, priceAlt: 7200 },
                    {
                        name: 'Helado de 2 gustos',
                        description:
                            'Chocolate, dulce granizado, limón, frutilla, vainilla, crema',
                        price: 8275,
                        priceAlt: 7200,
                        glutenFreeSymbol: true,
                    },
                    {
                        name: 'Mousse de chocolate',
                        description: 'Con frutos rojos',
                        price: 8850,
                        priceAlt: 7700,
                    },
                    {
                        name: 'Panna cotta',
                        description: 'Base de chocolate y crema',
                        price: 8160,
                        priceAlt: 7100,
                    },
                    {
                        name: 'Panqueque de dulce de leche',
                        price: 9310,
                        priceAlt: 8100,
                    },
                    {
                        name: 'Profiterol relleno',
                        description: 'Mousse de chocolate, dulce de leche o crema',
                        price: 8275,
                        priceAlt: 7200,
                    },
                    { name: 'Sambayón tibio', price: 8850, priceAlt: 7700 },
                    {
                        name: 'Tiramisú',
                        description: 'Con el verdadero mascarpone',
                        price: 10344,
                        priceAlt: 9000,
                        image: '/images/tiramisu.webp',
                        imageAlt: 'Tiramisú en un vaso sobre una mesa de madera',
                    },
                    {
                        name: 'Seducción de chocolate',
                        description: 'Volcán de chocolate',
                        price: 11379,
                        priceAlt: 9900,
                    },
                    {
                        name: 'Adicional',
                        description: 'Crema, dulce de leche, mixto o charlotte',
                        price: 2873,
                        priceAlt: 2500,
                    },
                ],
            },
        ],
    },
    {
        slug: 'vinos-y-bebidas',
        title: 'Vinos y bebidas',
        summary: 'Carta de vinos, espumantes, tragos, cervezas y whisky.',
        image: '/images/bebidas.webp',
        imageAlt: 'Barra con botellas de aperitivos y el horno amarillo de fondo',
        pdf: '/menus/vinos-y-bebidas.pdf',
        sections: [
            {
                title: 'Vinos',
                items: [
                    { name: 'Finca las Moras Malbec', price: 10345, priceAlt: 9000 },
                    { name: 'Alma Mora Reserva Malbec', price: 18735, priceAlt: 16300 },
                    {
                        name: 'Callejón del Crimen Malbec o Cabernet Franc',
                        price: 28390,
                        priceAlt: 24700,
                    },
                    { name: 'Trumpeter Malbec 3/8', price: 12645, priceAlt: 11000 },
                    { name: 'Trumpeter Malbec', price: 25630, priceAlt: 22300 },
                    { name: 'La Mascota Malbec', price: 28160, priceAlt: 24500 },
                    { name: 'El Enemigo Malbec', price: 56380, priceAlt: 49050 },
                    { name: 'Nicasia Cabernet Franc', price: 19770, priceAlt: 17200 },
                    { name: 'Saint Felicien Malbec', price: 30110, priceAlt: 26200 },
                    {
                        name: 'DV Catena Cabernet-Malbec',
                        price: 33560,
                        priceAlt: 29200,
                    },
                    { name: 'DV Catena Malbec-Malbec', price: 48390, priceAlt: 42100 },
                    { name: 'Portillo Malbec', price: 12180, priceAlt: 10600 },
                    { name: 'Casa Boher Malbec', price: 34710, priceAlt: 30200 },
                    { name: 'La Linda Malbec', price: 21950, priceAlt: 19100 },
                    { name: 'Luigi Bosca Malbec', price: 35750, priceAlt: 31100 },
                    {
                        name: 'Origen Malbec o Cabernet Sauvignon',
                        price: 13800,
                        priceAlt: 12000,
                    },
                    { name: 'Impuro Malbec', price: 21150, priceAlt: 18400 },
                    { name: 'Fond de Cave', price: 18390, priceAlt: 16000 },
                    { name: 'Fond de Cave Reserva', price: 27700, priceAlt: 24100 },
                    { name: 'Esmeralda', price: 13450, priceAlt: 11700 },
                    { name: 'Animal Orgánico', price: 32180, priceAlt: 28000 },
                    { name: 'Las Perdices Malbec', price: 20460, priceAlt: 17800 },
                    { name: 'Los Intocables', price: 20460, priceAlt: 17800 },
                    {
                        name: 'Ala Colorada Cabernet Franc',
                        price: 46090,
                        priceAlt: 40100,
                    },
                    { name: 'Famiglia Bianchi Malbec', price: 17470, priceAlt: 15200 },
                    { name: 'Gran Famiglia Malbec', price: 33900, priceAlt: 29500 },
                    { name: 'Los Árboles Malbec', price: 10919, priceAlt: 9500 },
                    { name: 'Navarro Correa Malbec', price: 21380, priceAlt: 18600 },
                    { name: 'Trapiche Medalla', price: 36890, priceAlt: 32100 },
                    { name: 'Trapiche Reserva', price: 18160, priceAlt: 15800 },
                    { name: 'Alamos Reserva Malbec', price: 22640, priceAlt: 19700 },
                    { name: 'Copa de Vino', price: 5632, priceAlt: 4900 },
                ],
            },
            {
                title: 'Vinos blancos',
                items: [
                    { name: 'Los Árboles Chardonnay', price: 10919, priceAlt: 9500 },
                    { name: 'Nortón Cosecha Tardía', price: 10345, priceAlt: 9000 },
                    {
                        name: 'Emilia Moscatel / Santa Julia Chennin',
                        price: 16890,
                        priceAlt: 14700,
                    },
                    {
                        name: 'Trapiche Reserva Chardonnay',
                        price: 16160,
                        priceAlt: 15800,
                    },
                    {
                        name: 'Elementos Rosado de Torrontés',
                        price: 10919,
                        priceAlt: 9500,
                    },
                ],
            },
            {
                title: 'Espumantes',
                items: [
                    { name: 'Casa Boher', price: 35290, priceAlt: 30700 },
                    { name: 'Chandon', price: 44710, priceAlt: 38900 },
                    { name: 'San Telmo Sparkling Wine', price: 12644, priceAlt: 11000 },
                ],
            },
            {
                title: 'Bebidas sin alcohol',
                items: [
                    { name: 'Agua mineral sin gas', price: 4500 },
                    { name: 'Agua mineral con gas', price: 4500 },
                    { name: 'Gaseosa - Línea Coca Cola', price: 4500 },
                    { name: 'Agua saborizada', price: 4500 },
                    { name: 'Limonada', price: 6500 },
                    { name: 'Jugo de naranja', price: 6500 },
                ],
            },
            {
                title: 'Tragos',
                items: [
                    { name: 'Fernet-Cola', price: 8000 },
                    { name: 'Campari Orange', price: 8000 },
                    { name: 'Gancia Batido', price: 8000 },
                    { name: 'Cynar Pomelado', price: 8000 },
                    { name: 'Cuba Libre', price: 8000 },
                    { name: 'Malibú', price: 8500 },
                    { name: 'Caipirinha', price: 9000 },
                    { name: 'Caipiroska', price: 9000 },
                    { name: 'Cynar Julepe', price: 8000 },
                    { name: 'Aperol Spritz', price: 8000 },
                    { name: 'Gin Tonic', price: 8000 },
                    { name: 'Gin Tonic Bombay', price: 9900 },
                    { name: 'Mojito', price: 9000 },
                    { name: 'Negroni', price: 9000 },
                    { name: 'Rosa Milan', price: 9000 },
                    { name: 'Absolut con speed', price: 9000 },
                ],
            },
            {
                title: 'Cervezas',
                items: [
                    { name: 'Tirada Quilmes', price: 7000 },
                    { name: 'Porrón Corona', price: 7500 },
                    { name: 'Porrón Heineken', price: 7500 },
                    { name: 'Porrón Stella Artois', price: 7500 },
                    { name: 'Miller 1Lt', price: 13000 },
                ],
            },
            {
                title: 'Whisky',
                items: [
                    { name: 'Johnnie Walker Black Label', price: 10000 },
                    { name: 'Johnnie Walker Red Label', price: 8000 },
                    { name: 'Johnnie Walker Gold Label', price: 15000 },
                ],
            },
        ],
    },
];

export const formatPrice = (value: number): string =>
    `$${value.toLocaleString('es-AR')}`;

export const totalDishes = menuCategories.reduce(
    (n, c) => n + c.sections.reduce((m, s) => m + s.items.length, 0),
    0,
);
