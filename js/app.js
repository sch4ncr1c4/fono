(function() {
  'use strict';

  // ===== DATA: INSTRUCCIONES / PORTADA =====
  const SECTIONS = [
    {
      id: 'datos_iniciales',
      part: -1,
      title: 'Instrucciones',
      type: 'instructions',
      fields: [
        { id: 'child_name', label: 'Nombre del niño/a', required: true },
        { id: 'birth_date', label: 'Fecha de nacimiento', type: 'date' },
        { id: 'eval_date', label: 'Fecha de hoy', type: 'date' },
        { id: 'age_months', label: 'Edad en meses', type: 'number' }
      ],
      reminders: [
        'Anote en la cabecera de esta página la fecha de nacimiento del niño y la <strong>fecha de hoy</strong>.',
        'Lea con mucho cuidado las instrucciones de cada apartado y llene el cuestionario con tranquilidad dedicando todo el tiempo que sea necesario para entender las preguntas y recordar lo que el niño hace, comprende o dice.',
        'Para cualquier <strong>aclaración</strong> o duda sobre la manera de rellenar el cuestionario, debe consultar con la persona que se lo suministró.',
        'En caso de duda sobre la conducta por la que se pregunta es aconsejable <strong>preguntar a otras personas</strong> que también estén en contacto frecuente con el niño.',
        'Compruebe que ha rellenado todas las páginas del cuestionario.',
        'Los recuadros que hay al final de cada apartado con las palabras "Puntuación", "Comprende" o "Dics" están reservados para uso de los profesionales. No anote nada en ellos.'
      ],
      note: 'Si su hijo es <strong>BILINGÜE</strong> sólo tiene que marcar las palabras o frases que use en español.'
    },
    // ===== PÁGINA 2: PARTE 0 - VOCALIZACIONES =====
    {
      id: 'vocalizaciones',
      part: 0,
      partTitle: 'Parte 0. Vocalizaciones',
      title: 'Vocalizaciones',
      description: 'Los niños muy pequeños, aunque todavía no hablen o sólo digan unas pocas palabras, tienen muchas maneras de expresarse (producen sonidos, cantan...). ¿Hace su hijo alguna de las cosas que aparecen en la siguiente lista? Por favor, marque una de las opciones.',
      type: 'frequency',
      options: ['Todavía no', 'A veces', 'Muchas veces', 'Ya no'],
      questions: [
        { text: 'A veces los niños cantan por su cuenta, por ejemplo, tratan de cantarle a un adulto o a algún muñeco suyo. ¿Hace eso su hijo?' },
        { text: 'Los niños tienen muchas maneras diferentes de pedir las cosas. A veces señalan y miran lo que quieren y entonces dicen algo como "a-a", ¿hacen que oglamos su petición? ¿Hace eso su hijo?' },
        { text: 'Para llamar su atención sobre algo que les llama la atención, por ejemplo, si ven un pájaro o un coche que pasa, los niños a veces acompañan voz gestos con sonidos. ¿Hace eso su hijo?' },
        { text: 'Algunas veces, cuando se habla a los niños, da la impresión de que responden y establecen un diálogo. Aunque no siempre utilizan palabras, parece que están conversando. ¿Hace eso su hijo?' },
        { text: 'A veces los niños repiten una sílaba varias o muchas veces. Son sílabas que usted oye bien y que usted puede repetir, como "pa-pa-pa" o "ma-ma-ma" o "ba-ba-ba". ¿Hace eso su hijo?' },
        { text: 'Otras veces dicen sílabas que usted también oye bien y que puede repetir, pero no son todas iguales como: "a-da-ba" o "gu-du-gu-du-a" o "ma-na-ma-da". ¿Hace eso su hijo?' },
        { text: 'A veces los niños, inmediatamente después de oír una palabra, intentan repetirla. ¿Hace eso su hijo?' },
        { text: 'Muchos niños, inmediatamente después de oír una frase (p.ej. una pregunta), repiten su entonación, es decir, reproduciendo la melodía de la frase. ¿Hace eso su hijo?' },
        { text: 'Algunas veces los niños hablan solos o para sí mismos, haciendo como si jugaran a ser otro niño o a ser adulto, utilizando palabras o frases del lenguaje que han descubierto. ¿Ha descubierto usted alguna vez a su hijo haciendo algo parecido en su cuna, cama, parque, etc.?' },
        { text: 'A veces los niños juegan callados, pero otras veces "hablan en su lenguaje" a los juguetes. ¿Ha descubierto usted alguna vez a su hijo "hablando en su lenguaje" a los juguetes?' },
        { text: 'Algunos niños "hablan sin usar palabras" y parece que han hecho una pregunta, o que han regañado a alguien, o que se han asustado de algo. Incluso pueden incluir alguna palabra que usted entienda. ¿Hace eso su hijo?' },
        { text: 'Otras veces los niños dicen palabras que se parecen un poco a las nuestras, pero que sólo los padres entienden a la primera. Como, por ejemplo, "aba" por "agua", "ola" por "pelota", "otata" por "las gafas". ¿Hace eso su hijo?' }
      ]
    },
    // ===== PÁGINA 3: PARTE I - PALABRAS =====
    {
      id: 'parte1',
      part: 1,
      partTitle: 'Parte I. Palabras',
      title: 'Producción Temprana, Desarrollo del Vocabulario y Vocabulario',
      type: 'parte1',
      produccion: {
        options: ['Todavía no', 'A veces', 'Muchas veces'],
        questions: [
          { text: 'A veces los niños, aunque hablan muy poco, van "pidiendo" que se les diga el nombre de las cosas que van viendo. Pueden ir señalando y preguntando a un adulto: "¿esto?", "¿qué es eso?" o "¿qué es esto?", "¿cuál es esto?". ¿Hace su hijo estas cosas?' },
          { text: 'Algunos niños dicen los nombres de las cosas que ven. Andan por la casa y dicen los nombres de las cosas o personas que ven. ¿Hace esto su hijo?' }
        ]
      },
      desarrollo: {
        question: '¿Cómo fue el inicio del lenguaje de su hijo?',
        options: [
          'Una vez que dijo su primera palabra, empezó a decir muchas más.',
          'Dijo su primera palabra y desde entonces ha ido diciendo palabras nuevas, pero muy poquito a poco.',
          'Empezó poquito a poco y pasó un tiempo de pronto empezó a decir muchas más.',
          'Aún está diciendo las primeras palabras, muy pocas.',
          'Todavía no dice palabras.'
        ]
      },
      vocabulario: {
        note: 'Recuerde: No se deben marcar las palabras que el niño limita, sino sólo las que produce espontáneamente. Por ejemplo, si el niño dice "agua" por "lavadora", o "teta" por "leche", "abe" por "agua", etc. Marque la palabra cuando el niño dice otra palabra parecida con el mismo significado. Por ejemplo, marque "pelota" si el niño dice "pelota".',
        groups: [
          {
            title: '1. Interjecciones y sonidos de animales y cosas',
            count: 19,
            words: [
              'aupa', '¡ah!', 'nino-nino (sirena)', 'nínin (timbre)',
              'auau (lobo)', '¡guau-guau!', '¡ja-ja!', 'toclocloc (caballo)',
              'bese', '¡pum!', 'pló-pló', 'brumbrum (coche)',
              '¡asno (burro)', 'palmas', '¡uy!',
              'cuá-cuá', '¡miau!', '¡Quiquiriquí!'
            ]
          },
          {
            title: '2. Juegos, rutinas y fórmulas sociales',
            count: 31,
            words: [
              'a bañar', 'cariño', 'gracias', '¿qué pasó?',
              'a comer', 'chau chau', 'hasta luego/hasta mañana', 'te quiero',
              'a dormir', 'cochino', 'hole/helade', 'triste',
              'a ver', 'cuidado', 'mira', 'vale',
              'a vestir', 'déjeme', 'no', 'venga',
              'adiós', 'espera-', 'palmas/palmas', 'ya está',
              'bueno (bien)', 'estáte quieto', 'por favor', '¿qué?',
              'buenos días/noches', 'shh...', 'sí'
            ]
          },
          {
            title: '3. Animales, de verdad o de juguete',
            count: 43,
            words: [
              'animal', 'dinosaurio', 'mariquita', 'pollito',
              'araña', 'elefante', 'mono', 'rana',
              'abeja', 'gallina', 'mosca', 'rata',
              'bicho', 'gato', 'oso', 'ratón',
              'burro', 'gusano', 'oveja', 'serpiente',
              'caballo', 'hormiga', 'paloma', 'tigre',
              'caracol', 'jirafa', 'pájaro', 'toro',
              'cebra', 'león', 'pavera', 'tortuga',
              'cerdo', 'lobo', 'perro', 'vaca',
              'cabra', 'loro', 'pez', 'zorra',
              'conejo', 'mariposa', 'buey'
            ]
          },
          {
            title: '4. Personas',
            count: 22,
            words: [
              'abuelo (yayo)', 'familia', 'novio/a', 'sobrina',
              'abuela (yaya)', 'mamá (mami)', 'papá (papi)', 'tía',
              'bruja', 'nene/a', 'primo', 'tío',
              'tíos', 'nombre propio', 'profe',
              'hermano', 'señor', 'señorita',
              'hermana', 'señora', 'prima', 'abuelos'
            ]
          },
          {
            title: '5. Partes del cuerpo',
            count: 24,
            words: [
              'barba', 'orejas', 'lengua', 'oreja/s',
              'barriga', 'cuello', 'lunar', 'pestañas',
              'boca', 'culo', 'mano/s', 'pierna/s (pata/s)',
              'bigote', 'ojos', 'nariz', 'rodillas',
              'brazos', 'dientes', 'pecho', 'tripa',
              'cara', 'labios', 'ombligo', 'uñas'
            ]
          },
          {
            title: '6. Juguetes',
            count: 29,
            words: [
              'balde', 'fútbol', 'osito', 'pulsera',
              'canicas/bolitas', 'gol', 'papel', 'rastrillo',
              'caja', 'guitarra', 'patinete', 'rompecabezas',
              'coche', 'juguete', 'pelota', 'tambor',
              'cubo', 'lana', 'piano', 'muñeco',
              'carrito', 'muñeca', 'pintura',
              'cubos', 'moño', 'puzzle',
              'columpio', 'topo', 'tren'
            ]
          },
          {
            title: '7. Vehículos, de verdad o de juguete',
            count: 16,
            words: [
              'ambulancia', 'bici', 'coche policía', 'patines',
              'autobús/bus', 'camión', 'grúa', 'tractor',
              'avión', 'carro/carrito', 'helicóptero', 'tren',
              'barco', 'coche', 'moto', 'triciclo'
            ]
          },
          {
            title: '8. Alimentos y Bebidas',
            count: 59,
            words: [
              'aceituna/s', 'chupa-chupa', 'limón', 'pollo',
              'agua', 'ciruela', 'mandarina', 'pomelo',
              'arroz', 'comida', 'manzana', 'puerco',
              'azúcar', 'fanta', 'mango', 'queso (quemado)',
              'batido', 'filete', 'melocotón', 'sardinas/caracol',
              'bizcocho', 'fruta', 'melón', 'sopa',
              'boniatos', 'galleta', 'mermelada', 'tarta',
              'bollo', 'gusanitos', 'pan', 'tomate',
              'caramelo', 'helado', 'pastel', 'tortilla',
              'carne (chicha)', 'huevo', 'patatas/fritas', 'uvas',
              'cereales', 'jamón (york)', 'pescado', 'yogur',
              'chocolate', 'leche', 'pipas', 'zanahoria',
              'chorizo', 'mechada', 'piña', 'átomo',
              'chuches', 'lentejas', 'plátano'
            ]
          },
          {
            title: '9. Ropa',
            count: 28,
            words: [
              'abrigo', 'calcetines', 'guantes', 'sombrero',
              'bata', 'camiseta', 'jersey', 'sudadera',
              'baby', 'chaqueta', 'pantalones', 'zapatillas',
              'balletas', 'cinturón', 'pañuel', 'calcetines',
              'body', 'cremallera', 'pendientes', 'bata',
              'botas', 'faldas', 'pulseras', 'collar',
              'botón', 'gafas', 'reloj', 'anillo'
            ]
          },
          {
            title: '10. Objetos y lugares fuera de la casa',
            count: 32,
            words: [
              'árbol', 'cole', 'luna', 'piscina',
              'arena/tierra', 'columpio', 'lupa', 'planta',
              'banco', 'estrella', 'mar', 'playa',
              'cabañitas', 'fiesta', 'metro', 'plaza',
              'calle', 'flor', 'nieve', 'sol',
              'campo', 'guardería', 'nube', 'tienda',
              'casa', 'hierba/hojas', 'parque', 'tabernazo',
              'cielo', 'jardín', 'piedra', 'zoo'
            ]
          },
          {
            title: '11. Objetos y lugares de la casa',
            count: 59,
            words: [
              'almohada', 'cuchillo', 'llaves', 'salón',
              'basura', 'cuna', 'martillo', 'silla',
              'batidora', 'ducha', 'mechero', 'sofá',
              'batería', 'encimera', 'mesa', 'suelo',
              'baño', 'escalera', 'microondas', 'taza',
              'botella', 'escoba', 'monedas', 'teléfono',
              'cama', 'esponja', 'móvil', 'televisión',
              'CD/compact', 'garaje/cochera', 'nevera/horno/frigo', 'tenedor',
              'cepillo', 'grifo', 'pasillo', 'terraza',
              'chupete', 'habitación/cuarto', 'puertas', 'tierca',
              'cocina', 'jabón', 'pila', 'toalla',
              'colador', 'jarra', 'plato', 'tostadora',
              'cojín', 'lavacoches', 'puerta', 'vaso',
              'collar', 'lavabo', 'radio', 'video',
              'cuchara', 'luz', 'reloj'
            ]
          },
          {
            title: '12. Acciones',
            count: 86,
            words: [
              'abrir', 'comer', 'lavar(se)', 'compar(se)',
              'andar', 'correr', 'leer', 'saber (no sé)',
              'apagar', 'cocinar', 'llover', 'sacar',
              'aprender', 'cuidar', 'lover', 'salir',
              'bailar', 'bajar(se)', 'matar(se)', 'sentar(se)',
              'beber', 'despertar(se)', 'mirar', 'subir(se)',
              'buscar', 'dibujar', 'mojar(se)', 'tapar',
              'caber', 'dormir(se)', 'morir', 'tocar',
              'cantar', 'encender(se)', 'oír', 'tirar(se)',
              'cambiar(se)', 'enseñar', 'pasar', 'tomar(se)',
              'cenar', 'entrar', 'pasear', 'trabajar',
              'cerrar', 'escribir', 'pegar(se)', 'traer',
              'cocinar', 'esperar(se)', 'perder(se)', 'valer',
              'coger', 'esquiar(se)', 'pintar', 'ver (veo, veo)',
              'comprar', 'estornudar', 'poner(se)', 'volver(se)',
              'contar (yo, vos, vosotros)', 'gastar', 'quitar(se)', 'volar',
              'correr', 'hablar (haz, haces...)', 'regar(se)', 'viajar',
              'jugar', 'nevar(se)', 'romper(se)', 'señalar'
            ]
          },
          {
            title: '13. Cualidades',
            count: 35,
            words: [
              'alto', 'contento', 'hambre', 'rojo',
              'ancho', 'raro', 'largo', 'solo',
              'apagado', 'encendido', 'malo', 'sucio',
              'averiado', 'enfadado', 'guapo', 'triste',
              'azul', 'enfermo/malito', 'miedo', 'verde',
              'bajo', 'feo', 'negro', 'viejo',
              'bonito', 'frío', 'nuevo', 'guapo',
              'bueno', 'grande', 'pariente/tío/tito', 'satisfecho',
              'cariñoso', 'guapo', 'redondo'
            ]
          },
          {
            title: '14. Tiempo',
            count: 8,
            words: [
              'ahora', 'día', 'mañana', 'pronto',
              'después', 'luego', 'tarde', 'ya'
            ]
          },
          {
            title: '15. Pronombres y Determinantes',
            count: 29,
            words: [
              'algo', 'esa', 'mi', 'tú',
              'aquel', 'ese', '(para) mí', 'tú',
              'aquella/as/os', 'eso', 'mío/mía', 'tuyo/tuya',
              'cualquier', 'esas', 'mío/as', 'tuyo/tuya',
              'conmigo', 'estas', 'nosotros/as', 'yo',
              'ella', 'esto', 'otro',
              'él', 'esto', 'suyo/a',
              'ellos/as', 'delante/detrás', '(para) él'
            ]
          },
          {
            title: '16. Preguntas',
            count: 8,
            words: [
              'cómo', 'cuándo', 'dónde', 'qué',
              'cuál', 'cuántos', 'por qué', 'cuántos'
            ]
          },
          {
            title: '17. Preposiciones y Locativos',
            count: 24,
            words: [
              'a (a dormir)', 'así', 'delante', 'fuera/afuera',
              'ahí', 'bajo', 'dentro/adentro', 'hasta',
              'aquí', 'con', 'detrás', 'al lado',
              'aquello', 'de', 'en', 'para',
              'antes', 'del', 'encima', 'por',
              'después', 'cerca', 'entre', 'sin'
            ]
          },
          {
            title: '18. Cuantificadores y Artículos',
            count: 24,
            words: [
              'alguno/a', 'los', 'otra vez', 'tres',
              'dos', 'más', 'poco', 'un',
              'cuatro', 'muchos/as/os', 'también', 'uno',
              'el', 'nadie', 'mucho', 'unos',
              'la', 'no hay', 'todas/os', 'unas',
              'las', 'otro', 'todo', 'un'
            ]
          },
          {
            title: '19. Auxiliares y Perífrasis',
            count: 5,
            words: [
              'estar (estoy jugando)', 'ir (vamos a dormir)', 'querer (quiero comer)',
              'hacer (he dormido)', 'poner (está comiendo)'
            ]
          },
          {
            title: '20. Conectivas',
            count: 7,
            words: [
              'entonces', 'pero', 'que (que no vengas)', 'y',
              'aunque', 'porque', 'si (si tú quieres)'
            ]
          }
        ]
      },
      usos: {
        options: ['Todavía no', 'A veces', 'Muchas veces'],
        questions: [
          { text: '¿Habla su hijo de personas o cosas que no están presentes? Por ejemplo, ¿cuenta su hijo cosas que le han pasado o hace una pregunta por una persona ausente?' },
          { text: '¿Habla de situaciones pasadas? Si unos días antes vieron un payaso en el circo, ¿lo comenta después?' },
          { text: '¿Habla su hijo de cosas que todavía no han ocurrido? Por ejemplo, ¿dice que va a ver a su abuelo?' },
          { text: '¿Hace preguntas?' }
        ]
      }
    },
    // ===== PÁGINA 4: PARTE II - GRAMÁTICA =====
    {
      id: 'gramatica',
      part: 2,
      partTitle: 'Parte II. Gramática',
      title: 'Terminaciones de las Palabras y Verbos Difíciles',
      type: 'gramatica',
      terminaciones: {
        options: ['Todavía no', 'A veces', 'Muchas veces'],
        questions: [
          { text: 'Para hablar de más de una cosa, añadimos al final de muchas palabras una "s", por ejemplo, decimos "coches" (para más de un coche), "casas", "flores", etc. ¿Utiliza su hijo palabras en plural como estas, cuando se refiere a varias cosas?' },
          { text: 'Muchas palabras tienen una forma masculina y otra femenina. Por ejemplo "muñeco/muñeca", o "nene/nena", o "malo/mala", etc. ¿Dice su hijo las dos formas?' },
          { text: 'Algunas veces añadimos terminaciones a las palabras y decimos, por ejemplo, "grandote", "gordísimo", "linda", "triste", etc. ¿Ha empezado su hijo a usar palabras con estas terminaciones?' },
          { text: 'Para hablar del resultado de una acción decimos, por ejemplo, "está mojado", "está roto", "está dormido", etc. ¿Usa su hijo expresiones como estas?' },
          { text: 'Cuando acaba de pasar algo decimos, por ejemplo, "he tirado", "se ha caído", "he ido", etc. ¿Usa su hijo expresiones como estas?' },
          { text: 'Cuando hablamos de algo que pasó decimos, por ejemplo, "comió", "oyó", "durmió", etc. ¿Ha empezado su hijo a usar formas como estas?' },
          { text: 'Para contar cosas decimos, por ejemplo, "estaba", "había", "iba", etc. ¿Ha empezado su hijo a usar formas como estas?' },
          { text: 'Para hablar de lo que está pasando decimos, por ejemplo, "jugando", "comiendo", "durmiendo", etc. ¿Ha empezado su hijo a usar formas como estas?' },
          { text: 'Cuando algo está a punto de suceder decimos, por ejemplo, "vamos a bailar", "a comer", "a dormir", etc. ¿Usa su hijo expresiones como estas?' },
          { text: 'Cuando hablamos de algo que pasará decimos, por ejemplo, "bajaré", "comerás", "subirá", etc. ¿Usa su hijo formas como estas?' },
          { text: 'Para pedir a alguien que haga o no haga algo decimos, por ejemplo, "que gates", "que comas" o "no toques", "no bebas" etc. ¿Ha empezado su hijo a usar expresiones como estas?' }
        ],
        personas: [
          { text: 'Para hablar de nosotros mismos o de los demás usamos formas distintas. Por ejemplo decimos: "(yo) como", "(él) come", "(nosotros) comemos", etc. Por favor, marque cuáles de esas formas dice su hijo (no importa que use verbos diferentes, por ejemplo: "jugar" en vez de "jugar" o "beber" en vez de "comer", etc.).' }
        ],
        personasOptions: [
          ['Tú, como, subes.', 'Juegas, comes, subes.'],
          ['Él, come.', 'Jugamos, comemos, subimos.'],
          ['Ellos, comen.', 'Juegan, comen, suben.']
        ]
      },
      verbos: {
        title: 'II. Verbos Difíciles',
        note: 'Si su hijo dice alguna de estas palabras, por favor, márquelo.',
        groups: [
          {
            title: 'Verbos en presente',
            count: 10,
            words: [
              '(yo) estoy', '(tú) eres', '(yo) echo', '(yo) voy', '(yo) digo',
              '(yo) tengo', '(yo) pongo', '(yo) salgo', '(yo) doy', '(yo) sé'
            ]
          },
          {
            title: 'Verbos en pretérito',
            count: 9,
            words: [
              '(yo) he hecho', '(yo) he salido', '(yo) he dicho', '(yo) he puesto',
              '(yo) he visto', '(yo) he escrito', '(yo) he vuelto', '(yo) he muerto', '(yo) he roto'
            ]
          }
        ]
      },
      sorprendentes: {
        question: 'A veces los niños pequeños se equivocan queriendo "hablar bien". ¿Ha oído alguna vez a su hijo hacer algo parecido?',
        items: [
          { label: '"Se ha rompido", "lo he puesto mal", "no he hasido", "no sébio", "he barrido", etc.' },
          { label: '"Idiota", "una fantasma", "un flor", "otro meno", etc.' }
        ]
      },
      combinacion: {
        question: '¿Ha empezado su hijo a combinar palabras, como "papá coche" o "más agua" o "nene aquí" o "nene (l) pa(ñ)ique", etc.?',
        options: ['Todavía no', 'A veces', 'Muchas veces'],
        examplesCount: 3
      },
      complejidad: {
        title: 'V. Complejidad Morfosintáctica',
        description: 'Por todas estas preguntas vamos a imaginar que su hijo o hija se llama "María". Por favor, MARQUE LA MANERA DE HABLAR QUE LE SUENE MÁS PARECIDA A CÓMO HABLA SU HIJO EN ESTE MOMENTO. El niño no tiene por qué usar exactamente las palabras que aparecen en los ejemplos. Lo que le pedimos es que marque la frase que más se parezca a la manera en que habitualmente habla su hijo.',
        note: 'A veces los niños a la misma vez dicen cosas de dos modos distintos. Si su hijo hace esto, puede marcar dos respuestas.',
        questions: [
          {
            text: 'María intenta alcanzar un chupete. Usted le pregunta: "¿Qué quieres, María?". Ella le dice:',
            options: ['Bote', 'E bote', 'El bote', 'Todavía no dice nada parecido']
          },
          {
            text: 'Está viendo un cuento con María. Le pregunta señalando una imagen del cuento: "¿Qué es esto?". María responde:',
            options: ['Patu', 'U pato', 'Un pato', 'Todavía no dice nada parecido']
          },
          {
            text: 'María está buscando sus botas. Usted le pregunta: "¿Dónde están las botas?". María responde:',
            options: ['Norá bota', "Norá'ta bota", 'No (pys\'tán) las botas', 'Todavía no dice nada parecido']
          },
          {
            text: 'María le muestra un lápiz y una hoja de papel. Usted le pregunta: "¿Qué quieres que haga?". María responde:',
            options: ['Mamá guaguaun', 'Mamá a pinta(r) guaguauu', 'Mamá pinta un guaguau', 'Todavía no dice nada parecido']
          },
          {
            text: 'De repente María empieza a toser. Usted le pregunta: "¿Qué tienes niña?". María responde:',
            options: ['Tengo tos', 'Nanta tene (tiene) tos', 'Tengo tos', 'Todavía no dice nada parecido']
          },
          {
            text: 'María está en su cama/cuna/orina y la llama. Usted le dice: "Hola María, ¿Qué quieres?". María responde:',
            options: ['Saca tos', 'A saca María', 'Sácate', 'Todavía no dice nada parecido']
          },
          {
            text: 'María quiere un coche que usted tiene en la mano. La niña dice:',
            options: ['¡E cote!', '¿E[me] dejá[s] y cote?', 'Mildá me deja[s]?', 'Todavía no dice nada parecido']
          },
          {
            text: 'María está comiendo chocolate. Usted le dice: "Dale a la muñeca un poco". María responde:',
            options: ['No güita e chocolate', 'No e(gü)ita e chocolate', 'No güita (ni) chocolate', 'Todavía no dice nada parecido']
          },
          {
            text: 'El abuelo trae agua a María. Usted pregunta a la niña: "¿Qué hace el abuelo?". María responde:',
            options: ['Vayay agua', 'Vayay á [da] agua', 'Vayay mes de agua', 'Todavía no dice nada parecido']
          },
          {
            text: 'El padre de María acaba de irse. María lo está buscando. Dice:',
            options: ["Papá' no", 'Papá otá[no está]', 'Papá no está', 'Todavía no dice nada parecido']
          },
          {
            text: 'María está en el salón y quiere coger un objeto frágil. Usted le dice: María responde:',
            options: ['Mamá mía [maía]', 'Mamá e má', 'Mamá es mía', 'Todavía no dice nada parecido']
          },
          {
            text: 'María sigue mirando el objeto frágil. Usted le pregunta: "María, ¿por qué lo miras?, si no lo voy a dejar". María responde:',
            options: ['No miro [miro]', 'No o miro', 'No to miro', 'Todavía no dice nada parecido']
          },
          {
            text: 'En un momento en que usted no mira, María coge el objeto frágil, se le cae... ¡se rompe! Usted le dice: "¡Pero María!, ¿Qué has hecho?". María responde:',
            options: ['Oto', 'O tolo/to/to', 'Se ha roto', 'Todavía no dice nada parecido']
          },
          {
            text: 'María quiere bañar a su muñeco. Le pregunta: "¿Qué vas a hacer María?". María responde:',
            options: ['Bañá [bañar] nene', 'A baña(r) nene', 'Voy a bañar nene', 'Todavía no dice nada parecido']
          },
          {
            text: 'María está mirando el reloj de su padre. Usted le pregunta: "¿De quién es el reloj?". María responde:',
            options: ['Papá', 'E papá', 'De papá', 'Todavía no dice nada parecido']
          },
          {
            text: 'María se prepara para ir de paseo con papá. Le pregunta: "¿Con quién vas al parque, María?". Ella responde:',
            options: ['Papá', 'E papá', 'Con(p) papá', 'Todavía no dice nada parecido']
          },
          {
            text: 'María está comiendo papilla y se le ha manchado la mano. Usted le pregunta: "¿Qué tienes aquí?". María responde:',
            options: ['Caca mía [mano]', 'Caca a má[cilla] y má', 'Caca en la mano', 'Todavía no dice nada parecido']
          },
          {
            text: 'María en vez de comerse el jamón está jugando con el tenedor. Usted le pregunta: "¿Para qué es el tenedor?". Ella responde:',
            options: ['Comé(comer) jamón/chicha', 'E come jamón/chicha', 'E[la] para[ce] comer jamón/chicha', 'Todavía no dice nada parecido']
          },
          {
            text: 'María está inquieta. Se dirige hacia la puerta. Usted le pregunta: "¿Quieres ir a la calle?". María responde:',
            options: ['Calle no', 'A calle no', 'A la calle no', 'Todavía no dice nada parecido']
          },
          {
            text: 'María está jugando con su juguete favorito. Usted le pregunta: "¿De quién es este juguete?". María responde:',
            options: ['Nami María', 'E míli mí', 'Es mío', 'Todavía no dice nada parecido']
          },
          {
            text: 'María quiere pintar. Usted le pregunta: "¿Qué lápiz quieres?". María dice:',
            options: ['Api [lapiz] María', 'Api é María', 'Mí (lapiz)', 'Todavía no dice nada parecido']
          },
          {
            text: 'María está vestiendo a su muñeca. Usted le dice: "Te gusta, María". Ella responde:',
            options: ['¡Guapa!', 'Nana mi guapa', 'La nena es guapa', 'Todavía no dice nada parecido']
          },
          {
            text: 'María está buscando un juguete suyo, un coche por ejemplo. Se gira hacia usted y pregunta:',
            options: ['¿Cote? [coche]', '¿O (a)tiá e cote?', '¿Dónde está el cote?', 'Todavía no dice nada parecido']
          },
          {
            text: 'María señala con su dedo un objeto y le pregunta:',
            options: ['¿Eto?', '¿É èto? [qué es esto]', '¿Qué es esto?', 'Todavía no dice nada parecido']
          },
          {
            text: 'María se acerca con intención de pedirle algo. Usted le pregunta: "¿Qué quieres?"',
            options: ['Agua', 'Quiero agua/dame agua', '[Quiero] que me des agua', 'Todavía no dice nada parecido']
          },
          {
            text: 'María mira la estantería de los juguetes. Usted le pregunta: "¿Qué pasa, María?". Ella le dice:',
            options: ['Osito', 'Quiero el osito', 'Quiero coger el osito', 'Todavía no dice nada parecido']
          },
          {
            text: 'Mientras usted baña a María, ella está jugando con una muñeca y dice:',
            options: ['A bañar', 'A bañar ... a peinar', 'A bañar y a peinar', 'Todavía no dice nada parecido']
          },
          {
            text: 'María le dice "Mírala". Usted le pregunta "¿Qué quieres que mire?". Ella dice:',
            options: ['La muñeca', 'La muñeca ahí', 'La muñeca que está ahí', 'Todavía no dice nada parecido']
          },
          {
            text: 'Antes de comer María tiene algo en la boca. Usted le pregunta: "¿Qué estás comiendo?". Ella responde:',
            options: ['El caramelo', 'El caramelo ... papá', 'El caramelo que me ha dado papá', 'Todavía no dice nada parecido']
          },
          {
            text: 'María mira una liguita delicada que no debe coger. A la vez está diciendo:',
            options: ['Estito no', 'Esto no se toca', 'Que no se toca esto', 'Todavía no dice nada parecido']
          },
          {
            text: 'María le da la llave del armario de las galletas. Usted le pregunta: "¿Por qué me das la llave?". María le dice:',
            options: ['Abre la puerta', 'Para abrir la puerta', 'Para que abras la puerta', 'Todavía no dice nada parecido']
          },
          {
            text: 'María está jugando a pegar a su muñeco. Usted le pregunta: "¿Por qué le pegas al muñeco?". María responde:',
            options: ['Malo', 'E(s) malo', 'Porque es malo', 'Todavía no dice nada parecido']
          },
          {
            text: 'María juega con un muñeco roto. Usted le pregunta: "¿Qué le pasa al muñeco?". Ella dice:',
            options: ['Se ha roto el pie, no anda', 'Se ha roto el pie y no anda', 'No anda porque se ha roto el pie', 'Todavía no dice nada parecido']
          },
          {
            text: 'Después de explicarle a María que ahora no puede ir a la calle con ella, María dice:',
            options: ['Viene papá, vamos a la calle', 'Viene papá y nos vamos a la calle', 'Cuando venga papá nos vamos a la calle', 'Todavía no dice nada parecido']
          }
        ]
      }
    },
    // ===== PÁGINA 14: INFORMACIÓN GENERAL =====
    {
      id: 'informacion',
      part: 3,
      partTitle: 'Información General',
      title: 'Información General',
      type: 'informacion'
    }
  ];

  // ===== STATE =====
  let currentSection = 0;
  const responses = {};
  const DB_NAME = 'macarthur-cdi';
  const DB_STORE = 'state';

  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => req.result.createObjectStore(DB_STORE);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function saveState() {
    try {
      const db = await openDB();
      const tx = db.transaction(DB_STORE, 'readwrite');
      tx.objectStore(DB_STORE).put({ id: 'main', responses, currentSection });
    } catch (e) { /* silently fail */ }
  }

  async function loadState() {
    try {
      const db = await openDB();
      return new Promise((resolve) => {
        const tx = db.transaction(DB_STORE, 'readonly');
        const req = tx.objectStore(DB_STORE).get('main');
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      });
    } catch (e) { return null; }
  }

  function clearState() {
    openDB().then(db => {
      const tx = db.transaction(DB_STORE, 'readwrite');
      tx.objectStore(DB_STORE).delete('main');
    }).catch(() => {});
  }

  const app = document.getElementById('app');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');

  // ===== RENDER =====
  function render() {
    if (currentSection >= SECTIONS.length) {
      renderFinal();
      return;
    }

    const section = SECTIONS[currentSection];
    let html = '';

    if (section.type === 'instructions') {
      html = renderInstructions(section);
    } else if (section.type === 'parte1') {
      html = renderParte1(section);
    } else if (section.type === 'gramatica') {
      html = renderGramatica(section);
    } else if (section.type === 'informacion') {
      html = renderInformacion(section);
    } else if (section.type === 'yesno') {
      html = renderYesNo(section);
    } else if (section.type === 'single') {
      html = renderSingle(section);
    } else if (section.type === 'frequency') {
      html = renderFrequency(section);
    } else if (section.type === 'wordlist') {
      html = renderWordList(section);
    }

    // Check if we need to show a part header
    const prevSection = currentSection > 0 ? SECTIONS[currentSection - 1] : null;
    const showPartHeader = section.partTitle && (!prevSection || prevSection.part !== section.part);

    let partHeaderHtml = '';
    if (showPartHeader) {
      partHeaderHtml = `
        <div class="part-header">
          <div class="part-header-title">${section.partTitle}</div>
        </div>
      `;
    }

    let sectionHeaderHtml = '';
    if (section.type !== 'instructions' && section.type !== 'parte1' && section.type !== 'gramatica' && section.type !== 'informacion') {
      sectionHeaderHtml = `
        <div class="section-header">
          <div class="section-number">${currentSection}</div>
          <div>
            <div class="section-title">${section.title}</div>
            <div class="section-desc">${section.description}</div>
          </div>
        </div>
      `;
    }

    if (section.type === 'parte1' || section.type === 'gramatica' || section.type === 'informacion') {
      app.innerHTML = `${partHeaderHtml}${html}`;
    } else {
      app.innerHTML = `
        ${partHeaderHtml}
        <div class="section-card">
          ${sectionHeaderHtml}
          <div class="section-body">${html}</div>
        </div>
      `;
    }

    updateNav();
    bindEvents(section);
  }

  function renderYesNo(section) {
    return section.questions.map((q, qi) => {
      const key = section.id + '_' + qi;
      const saved = responses[key];
      return `
        <div class="question">
          <div class="question-text"><span class="question-number">${qi + 1}.</span> ${q.text}</div>
          <div class="options-group">
            <label class="option-label ${saved === 'Sí' ? 'selected' : ''}">
              <input type="radio" name="${key}" value="Sí" ${saved === 'Sí' ? 'checked' : ''}>
              <span>Sí</span>
            </label>
            <label class="option-label ${saved === 'No' ? 'selected' : ''}">
              <input type="radio" name="${key}" value="No" ${saved === 'No' ? 'checked' : ''}>
              <span>No</span>
            </label>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderSingle(section) {
    const q = section.questions[0];
    const key = section.id + '_0';
    const saved = responses[key];
    return `
      <div class="question">
        <div class="question-text">${q.text}</div>
        <div class="options-group">
          ${q.options.map((opt, oi) => `
            <label class="option-label ${saved === opt ? 'selected' : ''}">
              <input type="radio" name="${key}" value="${opt}" ${saved === opt ? 'checked' : ''}>
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderFrequency(section) {
    return section.questions.map((q, qi) => {
      const key = section.id + '_' + qi;
      const saved = responses[key];
      return `
        <div class="question">
          <div class="question-text"><span class="question-number">${qi + 1}.</span> ${q.text}</div>
          <div class="options-group">
            ${section.options.map(opt => `
              <label class="option-label ${saved === opt ? 'selected' : ''}">
                <input type="radio" name="${key}" value="${opt}" ${saved === opt ? 'checked' : ''}>
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  function renderWordList(section) {
    let html = '';
    if (section.note) {
      html += `<div style="background:var(--primary-bg);padding:12px;border-radius:8px;font-size:13px;color:var(--gray-600);margin-bottom:16px"><strong>Recuerde:</strong> ${section.note}</div>`;
    }

    section.groups.forEach((group, gi) => {
      const key = section.id + '_' + gi;
      const checked = responses[key] || [];

      html += `
        <div style="margin-bottom:20px">
          <div style="font-size:14px;font-weight:600;color:var(--gray-800);margin-bottom:4px">${group.title}</div>
          <div class="word-list-grid">
            ${group.words.map((word, wi) => `
              <label class="word-item ${checked.includes(word) ? 'checked' : ''}">
                <input type="checkbox" data-group="${key}" value="${word}" ${checked.includes(word) ? 'checked' : ''}>
                <span>${word}</span>
              </label>
            `).join('')}
          </div>
          <div class="word-count"><span id="count-${key}">${checked.length}</span> / ${group.count}</div>
        </div>
      `;
    });

    return html;
  }

  function renderInstructions(section) {
    const saved = responses[section.id] || {};
    const today = new Date().toISOString().split('T')[0];

    let fieldsHtml = section.fields.map(field => {
      const value = saved[field.id] || (field.type === 'date' ? today : '');
      return `
        <div class="form-group">
          <label for="${field.id}">${field.label}${field.required ? ' *' : ''}</label>
          <input type="${field.type || 'text'}" id="${field.id}" value="${value}" ${field.required ? 'required' : ''}>
        </div>
      `;
    }).join('');

    let remindersHtml = section.reminders.map((r, i) => `
      <li class="instructions-item">${r}</li>
    `).join('');

    return `
      <div class="instructions-card">
        <div class="instructions-header">
          ${fieldsHtml}
        </div>
      </div>
      <div class="instructions-card">
        <div class="instructions-title">RECUERDE</div>
        <ul class="instructions-list">
          ${remindersHtml}
        </ul>
      </div>
      ${section.note ? `
        <div class="instructions-note">
          <div class="instructions-note-title">NOTA</div>
          <p>${section.note}</p>
        </div>
      ` : ''}
    `;
  }

  function renderParte1(section) {
    const saved = responses[section.id] || {};

    // Producción Temprana
    let prodHtml = section.produccion.questions.map((q, qi) => {
      const key = 'prod_' + qi;
      const val = saved[key];
      return `
        <div class="question">
          <div class="question-text"><span class="question-number">${qi + 1}.</span> ${q.text}</div>
          <div class="options-group">
            ${section.produccion.options.map(opt => `
              <label class="option-label ${val === opt ? 'selected' : ''}">
                <input type="radio" name="${key}" value="${opt}" ${val === opt ? 'checked' : ''}>
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    // Desarrollo del Vocabulario
    const devKey = 'desarrollo_0';
    const devVal = saved[devKey];
    let devHtml = `
      <div class="question">
        <div class="question-text">${section.desarrollo.question}</div>
        <div class="options-group">
          ${section.desarrollo.options.map(opt => `
            <label class="option-label ${devVal === opt ? 'selected' : ''}">
              <input type="radio" name="${devKey}" value="${opt}" ${devVal === opt ? 'checked' : ''}>
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;

    // Vocabulario
    let vocabHtml = '';
    if (section.vocabulario.note) {
      vocabHtml += `<div style="background:var(--primary-bg);padding:12px;border-radius:8px;font-size:13px;color:var(--gray-600);margin-bottom:16px"><strong>Recuerde:</strong> ${section.vocabulario.note}</div>`;
    }
    section.vocabulario.groups.forEach((group, gi) => {
      const key = 'vocab_' + gi;
      const checked = saved[key] || [];
      vocabHtml += `
        <div style="margin-bottom:20px">
          <div style="font-size:14px;font-weight:600;color:var(--gray-800);margin-bottom:4px">${group.title}</div>
          <div class="word-list-grid">
            ${group.words.map((word, wi) => `
              <label class="word-item ${checked.includes(word) ? 'checked' : ''}">
                <input type="checkbox" data-group="${key}" value="${word}" ${checked.includes(word) ? 'checked' : ''}>
                <span>${word}</span>
              </label>
            `).join('')}
          </div>
          <div class="word-count"><span id="count-${key}">${checked.length}</span> / ${group.count}</div>
        </div>
      `;
    });

    // Usos del Lenguaje
    let usosHtml = section.usos.questions.map((q, qi) => {
      const key = 'usos_' + qi;
      const val = saved[key];
      return `
        <div class="question">
          <div class="question-text"><span class="question-number">${qi + 1}.</span> ${q.text}</div>
          <div class="options-group">
            ${section.usos.options.map(opt => `
              <label class="option-label ${val === opt ? 'selected' : ''}">
                <input type="radio" name="${key}" value="${opt}" ${val === opt ? 'checked' : ''}>
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="section-card">
        <div class="section-header">
          <div class="section-title" style="color:var(--primary)">I. Producción Temprana</div>
        </div>
        <div class="section-body">
          <div style="font-size:13px;color:var(--gray-600);margin-bottom:12px">Por favor, marque la opción que corresponda a lo que su hijo hace en este momento.</div>
          ${prodHtml}
        </div>
      </div>
      <div class="section-card">
        <div class="section-header">
          <div class="section-title" style="color:var(--primary)">II. Desarrollo del Vocabulario</div>
        </div>
        <div class="section-body">
          <div style="font-size:13px;color:var(--gray-600);margin-bottom:12px">En el proceso de aprender a hablar los niños dicen sus primeras palabras y luego cada vez se dicen más. Por favor, marque la opción que más se parezca a cómo su hijo empezó a hablar.</div>
          ${devHtml}
        </div>
      </div>
      <div class="section-card">
        <div class="section-header">
          <div class="section-title" style="color:var(--primary)">III. Vocabulario</div>
        </div>
        <div class="section-body">
          <div style="font-size:13px;color:var(--gray-600);margin-bottom:12px">A continuación encontrará una lista con palabras del vocabulario de los niños pequeños. Los niños comprenden muchas más palabras de las que dicen. En este caso estamos interesados sólo en las palabras que su hijo DICE. Por favor, lea la lista y señale sólo las palabras que su hijo dice marcando el cuadrado que hay al lado de cada palabra.</div>
          ${vocabHtml}
        </div>
      </div>
      <div class="section-card">
        <div class="section-header">
          <div class="section-title" style="color:var(--primary)">IV. Usos del Lenguaje</div>
        </div>
        <div class="section-body">
          <div style="font-size:13px;color:var(--gray-600);margin-bottom:12px">Por favor, marque la opción que corresponda a lo que su hijo hace en este momento.</div>
          ${usosHtml}
        </div>
      </div>
    `;
  }

  function renderGramatica(section) {
    const saved = responses[section.id] || {};

    // Terminaciones
    let termHtml = section.terminaciones.questions.map((q, qi) => {
      const key = 'term_' + qi;
      const val = saved[key];
      return `
        <div class="question">
          <div class="question-text"><span class="question-number">${qi + 1}.</span> ${q.text}</div>
          <div class="options-group">
            ${section.terminaciones.options.map(opt => `
              <label class="option-label ${val === opt ? 'selected' : ''}">
                <input type="radio" name="${key}" value="${opt}" ${val === opt ? 'checked' : ''}>
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    // Personas (question 12)
    let personasHtml = section.terminaciones.personas.map((q, qi) => {
      const key = 'personas_' + qi;
      const val = saved[key] || [];
      return `
        <div class="question">
          <div class="question-text"><span class="question-number">12.</span> ${q.text}</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
            ${section.terminaciones.personasOptions.flat().map(opt => `
              <label class="option-label ${val.includes(opt) ? 'selected' : ''}" style="font-size:13px">
                <input type="checkbox" data-personas="${key}" value="${opt}" ${val.includes(opt) ? 'checked' : ''}>
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    // Verbos Difíciles
    let verbosHtml = '';
    if (section.verbos.note) {
      verbosHtml += `<div style="background:var(--primary-bg);padding:12px;border-radius:8px;font-size:13px;color:var(--gray-600);margin-bottom:16px"><strong>Recuerde:</strong> ${section.verbos.note}</div>`;
    }
    section.verbos.groups.forEach((group, gi) => {
      const key = 'verbos_' + gi;
      const checked = saved[key] || [];
      verbosHtml += `
        <div style="margin-bottom:20px">
          <div style="font-size:14px;font-weight:600;color:var(--gray-800);margin-bottom:4px">${group.title}</div>
          <div class="word-list-grid">
            ${group.words.map((word, wi) => `
              <label class="word-item ${checked.includes(word) ? 'checked' : ''}">
                <input type="checkbox" data-group="${key}" value="${word}" ${checked.includes(word) ? 'checked' : ''}>
                <span>${word}</span>
              </label>
            `).join('')}
          </div>
          <div class="word-count"><span id="count-${key}">${checked.length}</span> / ${group.count}</div>
        </div>
      `;
    });

    // Palabras Sorprendentes
    let sorprendentesHtml = section.sorprendentes.items.map((item, ii) => {
      const key = 'sorp_' + ii;
      const val = saved[key];
      return `
        <div class="question">
          <div class="question-text">${item.label}</div>
          <div class="options-group">
            <label class="option-label ${val === 'Sí' ? 'selected' : ''}">
              <input type="radio" name="${key}" value="Sí" ${val === 'Sí' ? 'checked' : ''}>
              <span>Sí</span>
            </label>
            <label class="option-label ${val === 'No' ? 'selected' : ''}">
              <input type="radio" name="${key}" value="No" ${val === 'No' ? 'checked' : ''}>
              <span>No</span>
            </label>
          </div>
        </div>
      `;
    }).join('');

    // Combinación de Palabras
    const combKey = 'combinacion_0';
    const combVal = saved[combKey];
    let combHtml = `
      <div class="question">
        <div class="question-text">${section.combinacion.question}</div>
        <div class="options-group">
          ${section.combinacion.options.map(opt => `
            <label class="option-label ${combVal === opt ? 'selected' : ''}">
              <input type="radio" name="${combKey}" value="${opt}" ${combVal === opt ? 'checked' : ''}>
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
    if (combVal && combVal !== 'Todavía no') {
      combHtml += `
        <div style="margin-top:16px;padding:12px;background:#F9FAFB;border-radius:8px">
          <div style="font-size:13px;color:var(--gray-600);margin-bottom:12px">Escriba tres ejemplos de las frases más largas que recuerda que su hijo haya dicho últimamente:</div>
          ${[1,2,3].map(n => {
            const ek = 'ejemplo_' + n;
            return `
              <div class="form-group">
                <label for="${ek}">${n}.</label>
                <input type="text" id="${ek}" data-ejemplo="${n}" value="${saved[ek] || ''}" placeholder="Ejemplo ${n}">
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // Complejidad Morfosintáctica
    let compHtml = `
      <div style="background:var(--primary-bg);padding:12px;border-radius:8px;font-size:13px;color:var(--gray-600);margin-bottom:16px">
        <strong>${section.complejidad.title}</strong><br>
        ${section.complejidad.description}<br>
        <em>${section.complejidad.note}</em>
      </div>
    `;
    section.complejidad.questions.forEach((q, qi) => {
      const key = 'comp_' + qi;
      const checked = saved[key] || [];
      compHtml += `
        <div class="question" style="margin-bottom:16px">
          <div class="question-text"><span class="question-number">${qi + 1}.</span> ${q.text}</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
            ${q.options.map(opt => `
              <label class="option-label ${checked.includes(opt) ? 'selected' : ''}">
                <input type="checkbox" data-comp="${key}" value="${opt}" ${checked.includes(opt) ? 'checked' : ''}>
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `;
    });

    return `
      <div class="section-card">
        <div class="section-header">
          <div class="section-title" style="color:var(--primary)">I. Terminaciones de las Palabras</div>
        </div>
        <div class="section-body">
          <div style="font-size:13px;color:var(--gray-600);margin-bottom:12px">Por favor, marque la opción que corresponda a lo que su hijo hace en este momento.</div>
          ${termHtml}
          ${personasHtml}
        </div>
      </div>
      <div class="section-card">
        <div class="section-header">
          <div class="section-title" style="color:var(--primary)">${section.verbos.title}</div>
        </div>
        <div class="section-body">
          ${verbosHtml}
        </div>
      </div>
      <div class="section-card">
        <div class="section-header">
          <div class="section-title" style="color:var(--primary)">III. Palabras Sorprendentes</div>
        </div>
        <div class="section-body">
          <div style="font-size:13px;color:var(--gray-600);margin-bottom:12px">${section.sorprendentes.question}</div>
          ${sorprendentesHtml}
        </div>
      </div>
      <div class="section-card">
        <div class="section-header">
          <div class="section-title" style="color:var(--primary)">IV. Combinación de Palabras</div>
        </div>
        <div class="section-body">
          ${combHtml}
        </div>
      </div>
      <div class="section-card">
        <div class="section-body">
          ${compHtml}
        </div>
      </div>
    `;
  }

  function renderInformacion(section) {
    const saved = responses[section.id] || {};

    function field(id, label, type, opts) {
      const val = saved[id] || '';
      if (type === 'radio') {
        return `
          <div class="form-group">
            <label>${label}</label>
            <div class="options-group" style="flex-direction:row;gap:12px;flex-wrap:wrap">
              ${opts.map(opt => `
                <label class="option-label ${val === opt ? 'selected' : ''}">
                  <input type="radio" name="${id}" value="${opt}" ${val === opt ? 'checked' : ''}>
                  <span>${opt}</span>
                </label>
              `).join('')}
            </div>
          </div>`;
      }
      if (type === 'textarea') {
        return `
          <div class="form-group">
            <label for="${id}">${label}</label>
            <textarea id="${id}" data-info="${id}" rows="2" style="width:100%;padding:8px;border:1px solid var(--gray-300);border-radius:6px;font-size:13px">${val}</textarea>
          </div>`;
      }
      if (type === 'checkgroup') {
        return `
          <div class="form-group">
            <label>${label}</label>
            <div class="options-group" style="flex-direction:row;gap:12px;flex-wrap:wrap">
              ${opts.map(opt => `
                <label class="option-label ${val.includes(opt) ? 'selected' : ''}">
                  <input type="checkbox" data-checkgroup="${id}" value="${opt}" ${val.includes(opt) ? 'checked' : ''}>
                  <span>${opt}</span>
                </label>
              `).join('')}
            </div>
          </div>`;
      }
      return `
        <div class="form-group">
          <label for="${id}">${label}</label>
          <input type="${type || 'text'}" id="${id}" data-info="${id}" value="${val}">
        </div>`;
    }

    return `
      <div class="section-card" style="margin-bottom:12px">
        <div class="section-header" style="padding:12px 16px">
          <div class="section-title" style="color:var(--primary);font-size:15px">Datos del Padre o Cuidador</div>
        </div>
        <div class="section-body" style="padding:12px 16px">
          ${field('info_padre_nombre', 'Nombre del padre o cuidador')}
          ${field('info_padre_direccion', 'Dirección')}
          <div class="info-grid">
            ${field('info_padre_tel', 'Teléfono')}
            ${field('info_padre_email', 'E-mail', 'email')}
          </div>
        </div>
      </div>

      <div class="section-card" style="margin-bottom:12px">
        <div class="section-header" style="padding:12px 16px">
          <div class="section-title" style="color:var(--primary);font-size:15px">Datos del Niño</div>
        </div>
        <div class="section-body" style="padding:12px 16px">
          <div class="info-grid">
            ${field('info_nino_edad', 'Edad del niño')}
            ${field('info_nino_sexo', 'Sexo', 'radio', ['Varón', 'Mujer'])}
          </div>
          <div class="info-grid">
            ${field('info_nino_orden', 'Orden de nacimiento', 'radio', ['1°', '2°'])}
            ${field('info_nino_hijos', '¿Cuántos hijos tiene su familia?')}
          </div>
          ${field('info_nino_cuidador', '¿Con quién pasa el niño la mayor parte del día?', 'checkgroup', ['Mamá', 'Papá', 'Abuelo'])}
        </div>
      </div>

      <div class="section-card" style="margin-bottom:12px">
        <div class="section-header" style="padding:12px 16px">
          <div class="section-title" style="color:var(--primary);font-size:15px">Escolarización</div>
        </div>
        <div class="section-body" style="padding:12px 16px">
          ${field('info_escuela', '¿Escuela Infantil/guardería?', 'radio', ['No', 'Si'])}
          <div id="escuela-si" class="info-grid" style="display:${saved.info_escuela === 'Si' ? 'grid' : 'none'};max-width:50%">
            ${field('info_escuela_edad', 'Edad de inicio')}
            ${field('info_escuela_horas', 'Horas al día')}
          </div>
        </div>
      </div>

      <div class="section-card" style="margin-bottom:12px">
        <div class="section-header" style="padding:12px 16px">
          <div class="section-title" style="color:var(--primary);font-size:15px">Contacto con Otras Lenguas</div>
        </div>
        <div class="section-body" style="padding:12px 16px">
          ${field('info_lenguas', 'El niño, ¿tiene contacto con otras lenguas que no sean el español?', 'radio', ['No', 'Si'])}
          <div id="lenguas-si" class="info-grid" style="display:${saved.info_lenguas === 'Si' ? 'grid' : 'none'}">
            ${field('info_lenguas_cual', '¿Con qué lengua?')}
            ${field('info_lenguas_edad', '¿Desde qué edad?')}
            ${field('info_lenguas_veces', '¿Cuántas veces por semana?')}
            ${field('info_lenguas_horas', '¿Cuántas horas al día?')}
          </div>
        </div>
      </div>

      <div class="section-card" style="margin-bottom:12px">
        <div class="section-header" style="padding:12px 16px">
          <div class="section-title" style="color:var(--primary);font-size:15px">Información sobre la Salud del Niño</div>
        </div>
        <div class="section-body" style="padding:12px 16px">
          <div class="info-grid">
            ${field('info_salud_prematuro', '¿Nació antes de los 9 meses?', 'radio', ['No', 'Si'])}
            ${field('info_salud_peso', '¿Cuánto pesó al nacer?')}
          </div>
          ${field('info_salud_audicion', '¿Ha tenido enfermedades o problemas de audición o lenguaje?', 'radio', ['No', 'Si'])}
          <div id="audicion-si" style="display:${saved.info_salud_audicion === 'Si' ? 'block' : 'none'}">
            ${field('info_salud_audicion_desc', 'Describa el problema:', 'textarea')}
          </div>
          <div class="info-grid">
            ${field('info_salud_oido', '¿Ha tenido infecciones de oído?', 'radio', ['No', 'Si'])}
            <div id="oido-si" style="display:${saved.info_salud_oido === 'Si' ? 'block' : 'none'}">
              ${field('info_salud_oido_cuantas', '¿Cuántas al año?')}
            </div>
          </div>
        </div>
      </div>

      <div class="section-card" style="margin-bottom:12px">
        <div class="section-header" style="padding:12px 16px">
          <div class="section-title" style="color:var(--primary);font-size:15px">Datos de los Padres</div>
        </div>
        <div class="section-body" style="padding:12px 16px">
          ${field('info_padres_quien', 'Persona que rellenó el inventario', 'radio', ['Madre', 'Padre', 'Otro'])}

          <div style="margin-top:12px">
            <div style="font-size:13px;font-weight:600;color:var(--gray-800);margin-bottom:6px">Escolaridad <span style="font-weight:400;font-size:11px;color:var(--gray-600)">(nivel más alto alcanzado)</span></div>
            <div style="overflow-x:auto">
              <table style="width:100%;border-collapse:collapse;font-size:13px">
                <tr style="background:var(--gray-100)">
                  <th style="padding:6px 8px;text-align:left;border:1px solid var(--gray-200)"></th>
                  <th style="padding:6px 8px;text-align:center;width:70px;border:1px solid var(--gray-200)">Madre</th>
                  <th style="padding:6px 8px;text-align:center;width:70px;border:1px solid var(--gray-200)">Padre</th>
                </tr>
                ${['Sin escolaridad', 'Primaria o 1er Ciclo EGB o equivalente', 'Secundaria o 2° Ciclo EGB o equivalente', 'Bachillerato o COU o equivalente', 'Universidad'].map(nivel => `
                  <tr>
                    <td style="padding:5px 8px;border:1px solid var(--gray-200)">${nivel}</td>
                    <td style="padding:5px 8px;text-align:center;border:1px solid var(--gray-200)">
                      <label class="option-label ${saved.info_esc_madre === nivel ? 'selected' : ''}" style="margin:0;display:inline-flex">
                        <input type="radio" name="info_esc_madre" value="${nivel}" ${saved.info_esc_madre === nivel ? 'checked' : ''}>
                      </label>
                    </td>
                    <td style="padding:5px 8px;text-align:center;border:1px solid var(--gray-200)">
                      <label class="option-label ${saved.info_esc_padre === nivel ? 'selected' : ''}" style="margin:0;display:inline-flex">
                        <input type="radio" name="info_esc_padre" value="${nivel}" ${saved.info_esc_padre === nivel ? 'checked' : ''}>
                      </label>
                    </td>
                  </tr>
                `).join('')}
              </table>
            </div>
          </div>

          <div style="margin-top:12px">
            <div style="font-size:13px;font-weight:600;color:var(--gray-800);margin-bottom:6px">Lugar de origen <span style="font-weight:400;font-size:11px;color:var(--gray-600)">(infancia o adolescencia)</span></div>
            <div style="overflow-x:auto">
              <table style="width:100%;border-collapse:collapse;font-size:13px">
                <tr style="background:var(--gray-100)">
                  <th style="padding:6px 8px;text-align:left;border:1px solid var(--gray-200)"></th>
                  <th style="padding:6px 8px;text-align:center;border:1px solid var(--gray-200)">Madre</th>
                  <th style="padding:6px 8px;text-align:center;border:1px solid var(--gray-200)">Padre</th>
                </tr>
                ${['País', 'Provincia', 'Ciudad o pueblo'].map(campo => `
                  <tr>
                    <td style="padding:5px 8px;border:1px solid var(--gray-200);white-space:nowrap">${campo}</td>
                    <td style="padding:4px 6px;border:1px solid var(--gray-200)">
                      <input type="text" data-info="origen_madre_${campo}" value="${saved['origen_madre_' + campo] || ''}" style="width:100%;padding:4px 6px;border:1px solid var(--gray-300);border-radius:4px;font-size:12px;box-sizing:border-box">
                    </td>
                    <td style="padding:4px 6px;border:1px solid var(--gray-200)">
                      <input type="text" data-info="origen_padre_${campo}" value="${saved['origen_padre_' + campo] || ''}" style="width:100%;padding:4px 6px;border:1px solid var(--gray-300);border-radius:4px;font-size:12px;box-sizing:border-box">
                    </td>
                  </tr>
                `).join('')}
              </table>
            </div>
          </div>

          <div style="margin-top:12px">
            <div style="font-size:13px;font-weight:600;color:var(--gray-800);margin-bottom:6px">Número de habitantes</div>
            <div style="overflow-x:auto">
              <table style="width:100%;border-collapse:collapse;font-size:13px">
                <tr style="background:var(--gray-100)">
                  <th style="padding:6px 8px;text-align:left;border:1px solid var(--gray-200)"></th>
                  <th style="padding:6px 8px;text-align:center;width:70px;border:1px solid var(--gray-200)">Madre</th>
                  <th style="padding:6px 8px;text-align:center;width:70px;border:1px solid var(--gray-200)">Padre</th>
                </tr>
                ${['Menos de 10.000', '10.000-50.000', 'Más de 50.000'].map(hab => `
                  <tr>
                    <td style="padding:5px 8px;border:1px solid var(--gray-200)">${hab}</td>
                    <td style="padding:5px 8px;text-align:center;border:1px solid var(--gray-200)">
                      <label class="option-label ${saved.info_hab_madre === hab ? 'selected' : ''}" style="margin:0;display:inline-flex">
                        <input type="radio" name="info_hab_madre" value="${hab}" ${saved.info_hab_madre === hab ? 'checked' : ''}>
                      </label>
                    </td>
                    <td style="padding:5px 8px;text-align:center;border:1px solid var(--gray-200)">
                      <label class="option-label ${saved.info_hab_padre === hab ? 'selected' : ''}" style="margin:0;display:inline-flex">
                        <input type="radio" name="info_hab_padre" value="${hab}" ${saved.info_hab_padre === hab ? 'checked' : ''}>
                      </label>
                    </td>
                  </tr>
                `).join('')}
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="section-card">
        <div class="section-body" style="text-align:center;padding:24px">
          <div style="font-size:18px;font-weight:700;color:var(--gray-800);margin-bottom:8px">¡Cuestionario completado!</div>
          <p style="font-size:14px;color:var(--gray-600);margin-bottom:16px">Completaste todas las secciones del MacArthur.<br>Palabras marcadas: <strong>${countAllWords()}</strong></p>
          <button class="btn btn-success" style="width:100%;max-width:300px;margin:0 auto;display:flex;align-items:center;justify-content:center;gap:8px" id="btn-pdf">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Generar PDF
          </button>
        </div>
      </div>
    `;
  }

  // ===== FINAL SCREEN =====
  function renderFinal() {
    app.innerHTML = `
      <div class="section-card">
        <div class="section-body">
          <div class="final-screen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <h2>¡Cuestionario completado!</h2>
            <p>Has terminado todas las secciones del MacArthur.<br>Palabras marcadas: <strong>${countAllWords()}</strong></p>
            <button class="btn btn-primary" style="margin-top:16px" onclick="window.location.reload()">Volver a empezar</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-prev').style.display = '';
    btnPrev.disabled = false;
    btnNext.style.display = 'none';
    progressFill.style.width = '100%';
    progressText.textContent = 'Completado';
  }

  function countAllWords() {
    let count = 0;
    Object.values(responses).forEach(val => {
      if (Array.isArray(val)) {
        count += val.length;
      } else if (val && typeof val === 'object') {
        Object.values(val).forEach(v => {
          if (Array.isArray(v)) count += v.length;
        });
      }
    });
    return count;
  }

  // ===== EVENTS =====
  function bindEvents(section) {
    if (section.type === 'yesno' || section.type === 'single' || section.type === 'frequency' || section.type === 'parte1' || section.type === 'gramatica') {
      app.querySelectorAll('input[type="radio"]').forEach(r => {
        r.addEventListener('change', () => {
          const sectionId = section.id;
          if (section.type === 'parte1' || section.type === 'gramatica') {
            if (!responses[sectionId]) responses[sectionId] = {};
            responses[sectionId][r.name] = r.value;
          } else {
            responses[r.name] = r.value;
          }
          r.closest('.options-group').querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
          r.closest('.option-label').classList.add('selected');
        });
      });
    }

    // Checkboxes for personas (gramatica)
    if (section.type === 'gramatica') {
      app.querySelectorAll('input[data-personas]').forEach(cb => {
        cb.addEventListener('change', () => {
          const key = cb.dataset.personas;
          const sectionId = section.id;
          if (!responses[sectionId]) responses[sectionId] = {};
          if (!responses[sectionId][key]) responses[sectionId][key] = [];
          if (cb.checked) {
            if (!responses[sectionId][key].includes(cb.value)) responses[sectionId][key].push(cb.value);
          } else {
            responses[sectionId][key] = responses[sectionId][key].filter(v => v !== cb.value);
          }
          cb.closest('.option-label').classList.toggle('selected', cb.checked);
        });
      });
    }

    // Checkboxes for complejidad (gramatica)
    if (section.type === 'gramatica') {
      app.querySelectorAll('input[data-comp]').forEach(cb => {
        cb.addEventListener('change', () => {
          const key = cb.dataset.comp;
          const sectionId = section.id;
          if (!responses[sectionId]) responses[sectionId] = {};
          if (!responses[sectionId][key]) responses[sectionId][key] = [];
          if (cb.checked) {
            if (!responses[sectionId][key].includes(cb.value)) responses[sectionId][key].push(cb.value);
          } else {
            responses[sectionId][key] = responses[sectionId][key].filter(v => v !== cb.value);
          }
          cb.closest('.option-label').classList.toggle('selected', cb.checked);
        });
      });
    }

    if (section.type === 'instructions') {
      if (!responses[section.id]) responses[section.id] = {};
      section.fields.forEach(field => {
        const input = document.getElementById(field.id);
        if (input) {
          input.addEventListener('input', () => {
            responses[section.id][field.id] = input.value;
          });
        }
      });
    }

    if (section.type === 'wordlist' || section.type === 'parte1' || section.type === 'gramatica') {
      app.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => {
          const key = cb.dataset.group;
          if (!key) return;
          const sectionId = section.id;
          if (section.type === 'parte1' || section.type === 'gramatica') {
            if (!responses[sectionId]) responses[sectionId] = {};
            if (!responses[sectionId][key]) responses[sectionId][key] = [];
            if (cb.checked) {
              if (!responses[sectionId][key].includes(cb.value)) responses[sectionId][key].push(cb.value);
            } else {
              responses[sectionId][key] = responses[sectionId][key].filter(w => w !== cb.value);
            }
            const countEl = document.getElementById('count-' + key);
            if (countEl) countEl.textContent = responses[sectionId][key].length;
          } else {
            if (!responses[key]) responses[key] = [];
            if (cb.checked) {
              if (!responses[key].includes(cb.value)) responses[key].push(cb.value);
            } else {
              responses[key] = responses[key].filter(w => w !== cb.value);
            }
            const countEl = document.getElementById('count-' + key);
            if (countEl) countEl.textContent = responses[key].length;
          }
          cb.closest('.word-item').classList.toggle('checked', cb.checked);
        });
      });
    }

    // Text inputs for gramatica (ejemplos)
    if (section.type === 'gramatica') {
      app.querySelectorAll('input[data-ejemplo]').forEach(input => {
        input.addEventListener('input', () => {
          const sectionId = section.id;
          if (!responses[sectionId]) responses[sectionId] = {};
          responses[sectionId][input.id] = input.value;
        });
      });
    }

    // Información General
    if (section.type === 'informacion') {
      if (!responses[section.id]) responses[section.id] = {};
      const sid = section.id;

      // All radio buttons
      app.querySelectorAll('input[type="radio"]').forEach(r => {
        r.addEventListener('change', () => {
          responses[sid][r.name] = r.value;
          r.closest('.options-group').querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
          r.closest('.option-label').classList.add('selected');

          // Toggle conditional fields
          if (r.name === 'info_escuela') {
            document.getElementById('escuela-si').style.display = r.value === 'Si' ? 'grid' : 'none';
          }
          if (r.name === 'info_lenguas') {
            document.getElementById('lenguas-si').style.display = r.value === 'Si' ? 'grid' : 'none';
          }
          if (r.name === 'info_salud_audicion') {
            document.getElementById('audicion-si').style.display = r.value === 'Si' ? 'block' : 'none';
          }
          if (r.name === 'info_salud_oido') {
            document.getElementById('oido-si').style.display = r.value === 'Si' ? 'block' : 'none';
          }
        });
      });

      // Text inputs
      app.querySelectorAll('input[data-info]').forEach(input => {
        input.addEventListener('input', () => {
          responses[sid][input.dataset.info] = input.value;
        });
      });

      // Textareas
      app.querySelectorAll('textarea[data-info]').forEach(ta => {
        ta.addEventListener('input', () => {
          responses[sid][ta.dataset.info] = ta.value;
        });
      });

      // Checkgroups
      app.querySelectorAll('input[data-checkgroup]').forEach(cb => {
        cb.addEventListener('change', () => {
          const key = cb.dataset.checkgroup;
          if (!responses[sid][key]) responses[sid][key] = [];
          if (cb.checked) {
            if (!responses[sid][key].includes(cb.value)) responses[sid][key].push(cb.value);
          } else {
            responses[sid][key] = responses[sid][key].filter(v => v !== cb.value);
          }
          cb.closest('.option-label').classList.toggle('selected', cb.checked);
        });
      });

      // PDF button
      const pdfBtn = document.getElementById('btn-pdf');
      if (pdfBtn) pdfBtn.addEventListener('click', generatePDF);
    }
  }

  // Auto-save on any input change (delegated)
  app.addEventListener('input', () => saveState());
  app.addEventListener('change', () => saveState());

  // ===== NAV =====
  function updateNav() {
    btnPrev.disabled = currentSection === 0;
    btnNext.style.display = '';
    btnNext.textContent = currentSection === SECTIONS.length - 1 ? 'Finalizar' : 'Siguiente →';
    const pct = Math.round(((currentSection) / SECTIONS.length) * 100);
    progressFill.style.width = pct + '%';
    progressText.textContent = 'Sección ' + (currentSection + 1) + ' de ' + SECTIONS.length;
  }

  // ===== VALIDATION =====
  function validate(section) {
    const errors = [];

    if (section.type === 'instructions') {
      const name = (responses[section.id] || {}).child_name;
      if (!name || !name.trim()) errors.push('Nombre del niño/a es obligatorio');
      return errors;
    }

    if (section.type === 'frequency') {
      section.questions.forEach((q, qi) => {
        if (!responses[section.id + '_' + qi]) errors.push(qi + 1);
      });
    }

    if (section.type === 'yesno') {
      section.questions.forEach((q, qi) => {
        if (!responses[section.id + '_' + qi]) errors.push(qi + 1);
      });
    }

    if (section.type === 'single') {
      if (!responses[section.id + '_0']) errors.push(1);
    }

    if (section.type === 'parte1') {
      const sr = responses[section.id] || {};
      section.produccion.questions.forEach((q, qi) => {
        if (!sr['prod_' + qi]) errors.push('Producción ' + (qi + 1));
      });
      if (!sr['desarrollo_0']) errors.push('Desarrollo del vocabulario');
      let anyVocab = false;
      section.vocabulario.groups.forEach((g, gi) => {
        if ((sr['vocab_' + gi] || []).length > 0) anyVocab = true;
      });
      if (!anyVocab) errors.push('Vocabulario (marque al menos una palabra)');
      section.usos.questions.forEach((q, qi) => {
        if (!sr['usos_' + qi]) errors.push('Usos ' + (qi + 1));
      });
    }

    if (section.type === 'gramatica') {
      const sr = responses[section.id] || {};
      section.terminaciones.questions.forEach((q, qi) => {
        if (!sr['term_' + qi]) errors.push('Terminaciones ' + (qi + 1));
      });
      if (!(sr['personas_0'] || []).length) errors.push('Personas (marque al menos una)');
      let anyVerbo = false;
      section.verbos.groups.forEach((g, gi) => {
        if ((sr['verbos_' + gi] || []).length > 0) anyVerbo = true;
      });
      if (!anyVerbo) errors.push('Verbos difíciles (marque al menos uno)');
      section.sorprendentes.items.forEach((item, ii) => {
        if (!sr['sorp_' + ii]) errors.push('Palabras sorprendentes ' + (ii + 1));
      });
      if (!sr['combinacion_0']) errors.push('Combinación de palabras');
      if (sr['combinacion_0'] && sr['combinacion_0'] !== 'Todavía no') {
        [1,2,3].forEach(n => {
          if (!sr['ejemplo_' + n] || !sr['ejemplo_' + n].trim()) errors.push('Ejemplo ' + n);
        });
      }
      section.complejidad.questions.forEach((q, qi) => {
        if ((sr['comp_' + qi] || []).length === 0) errors.push('Complejidad ' + (qi + 1));
      });
    }

    if (section.type === 'wordlist') {
      let any = false;
      section.groups.forEach((g, gi) => {
        if ((responses[section.id + '_' + gi] || []).length > 0) any = true;
      });
      if (!any) errors.push('Marque al menos una palabra');
    }

    return errors;
  }

  function showValidation(errors) {
    const existing = app.querySelector('.validation-msg');
    if (existing) existing.remove();
    const msg = document.createElement('div');
    msg.className = 'validation-msg';
    msg.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Faltan ' + errors.length + ' respuesta(s). Por favor, complete todo antes de continuar.';
    app.prepend(msg);
    msg.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  btnPrev.addEventListener('click', () => {
    if (currentSection > 0) {
      currentSection--;
      saveState();
      render();
      window.scrollTo(0, 0);
    }
  });

  btnNext.addEventListener('click', () => {
    if (currentSection < SECTIONS.length) {
      const section = SECTIONS[currentSection];
      const errors = validate(section);
      if (errors.length > 0) {
        showValidation(errors);
        return;
      }
      const oldMsg = app.querySelector('.validation-msg');
      if (oldMsg) oldMsg.remove();
      currentSection++;
      saveState();
      render();
      window.scrollTo(0, 0);
    }
  });

  // ===== PDF GENERATION =====
  function generatePDF() {
    const datos = responses['datos_iniciales'] || {};
    const name = datos.child_name || document.getElementById('child-name')?.value.trim();
    if (!name) {
      const el = document.getElementById('child-name') || document.querySelector('[id="child_name"]');
      if (el) { el.focus(); el.style.borderColor = '#DC2626'; }
      return;
    }

    const birthDate = datos.birth_date || '';
    const evalDate = datos.eval_date || document.getElementById('eval-date')?.value || new Date().toISOString().split('T')[0];
    const ageMonths = datos.age_months || '';
    const evaluator = document.getElementById('evaluator')?.value.trim() || '';

    const printWindow = window.open('', '_blank');
    let html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>MacArthur - ${name}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; padding: 32px; color: #1F2937; line-height: 1.5; font-size: 13px; }
  h1 { font-size: 20px; color: #2563EB; margin-bottom: 4px; }
  h2 { font-size: 15px; color: #2563EB; margin: 28px 0 12px; border-bottom: 2px solid #2563EB; padding-bottom: 6px; }
  h3 { font-size: 13px; color: #374151; margin: 16px 0 8px; font-weight: 600; }
  .header-info { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; font-size: 12px; color: #6B7280; margin-bottom: 20px; padding: 12px; background: #F9FAFB; border-radius: 6px; }
  .header-info span { font-weight: 600; color: #374151; }
  .badge { display: inline-block; padding: 2px 10px; border-radius: 4px; font-size: 11px; font-weight: 600; }
  .badge-si { background: #ECFDF5; color: #059669; }
  .badge-no { background: #FEF2F2; color: #DC2626; }
  .badge-av { background: #FEF3C7; color: #D97706; }
  .badge-mv { background: #D1FAE5; color: #059669; }
  .badge-tn { background: #F3F4F6; color: #6B7280; }
  .badge-yn { background: #F3F4F6; color: #6B7280; }
  .badge-single { background: #EFF6FF; color: #2563EB; }
  table { width: 100%; border-collapse: collapse; margin: 8px 0 16px; font-size: 12px; }
  th, td { padding: 5px 8px; border: 1px solid #E5E7EB; text-align: left; }
  th { background: #F3F4F6; font-weight: 600; font-size: 11px; }
  .word-checked { background: #EFF6FF; }
  .question-block { margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid #F3F4F6; }
  .question-block:last-child { border-bottom: none; padding-bottom: 0; }
  .question-text { font-size: 12px; color: #374151; margin-bottom: 6px; line-height: 1.5; }
  .question-text strong { color: #2563EB; }
  .options-row { display: flex; gap: 6px; flex-wrap: wrap; }
  .option-pill { display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 11px; border: 1px solid #E5E7EB; color: #6B7280; }
  .option-pill.selected { background: #2563EB; color: white; border-color: #2563EB; font-weight: 600; }
  .summary { background: #F9FAFB; padding: 16px; border-radius: 8px; margin: 16px 0; border: 1px solid #E5E7EB; }
  .summary-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
  .summary-item { text-align: center; }
  .summary-value { font-size: 22px; font-weight: 700; color: #2563EB; }
  .summary-label { font-size: 11px; color: #6B7280; }
  @media print { body { padding: 20px; } @page { margin: 15mm; } }
</style></head><body>
<h1>MacArthur - Evaluación del Lenguaje Infantil</h1>
<div class="header-info">
  <div><span>Niño/a:</span> ${name}</div>
  ${birthDate ? `<div><span>Fecha de nacimiento:</span> ${birthDate}</div>` : ''}
  <div><span>Fecha de evaluación:</span> ${evalDate}</div>
  ${ageMonths ? `<div><span>Edad en meses:</span> ${ageMonths}</div>` : ''}
  ${evaluator ? `<div><span>Evaluador/a:</span> ${evaluator}</div>` : ''}
</div>`;

    // Summary
    let totalYes = 0, totalWords = 0, totalVocal = 0;
    SECTIONS.forEach(s => {
      if (s.type === 'yesno') {
        s.questions.forEach((q, qi) => {
          if (responses[s.id + '_' + qi] === 'Sí') totalYes++;
        });
      }
      if (s.type === 'frequency') {
        s.questions.forEach((q, qi) => {
          const val = responses[s.id + '_' + qi];
          if (val === 'A veces' || val === 'Muchas veces') totalVocal++;
        });
      }
      if (s.type === 'wordlist') {
        s.groups.forEach((g, gi) => {
          const checked = responses[s.id + '_' + gi] || [];
          totalWords += checked.length;
        });
      }
      if (s.type === 'parte1') {
        const sr = responses[s.id] || {};
        ['prod_0', 'prod_1'].forEach(k => {
          if (sr[k] === 'A veces' || sr[k] === 'Muchas veces') totalYes++;
        });
        s.vocabulario.groups.forEach((g, gi) => {
          const checked = sr['vocab_' + gi] || [];
          totalWords += checked.length;
        });
      }
      if (s.type === 'gramatica') {
        const sr = responses[s.id] || {};
        s.verbos.groups.forEach((g, gi) => {
          const checked = sr['verbos_' + gi] || [];
          totalWords += checked.length;
        });
      }
    });

    html += `<div class="summary">
  <div class="summary-grid">
    <div class="summary-item"><div class="summary-value">${totalVocal}</div><div class="summary-label">Vocalizaciones</div></div>
    <div class="summary-item"><div class="summary-value">${totalYes}</div><div class="summary-label">Producción temprana (Sí)</div></div>
    <div class="summary-item"><div class="summary-value">${totalWords}</div><div class="summary-label">Palabras dichas</div></div>
  </div>
</div>`;

    // Sections detail
    SECTIONS.forEach(s => {
      if (s.type === 'instructions') return;

      html += `<h2>${s.title}</h2>`;

      if (s.type === 'yesno') {
        s.questions.forEach((q, qi) => {
          const val = responses[s.id + '_' + qi] || 'Sin respuesta';
          const cls = val === 'Sí' ? 'badge-si' : 'badge-no';
          html += `<div class="question-block">
            <div class="question-text"><strong>${qi + 1}.</strong> ${q.text}</div>
            <span class="badge ${cls}">${val}</span>
          </div>`;
        });
      }

      if (s.type === 'single') {
        const q = s.questions[0];
        const val = responses[s.id + '_0'] || 'Sin respuesta';
        html += `<div class="question-block">
          <div class="question-text">${q.text}</div>
          <div class="options-row">
            ${q.options.map(opt => `<span class="option-pill ${val === opt ? 'selected' : ''}">${opt}</span>`).join('')}
          </div>
        </div>`;
      }

      if (s.type === 'frequency') {
        const opts = s.options || ['Todavía no', 'A veces', 'Muchas veces', 'Ya no'];
        s.questions.forEach((q, qi) => {
          const val = responses[s.id + '_' + qi] || 'Sin respuesta';
          const colorMap = { 'Todavía no': 'badge-tn', 'A veces': 'badge-av', 'Muchas veces': 'badge-mv', 'Ya no': 'badge-yn' };
          const cls = colorMap[val] || 'badge-tn';
          html += `<div class="question-block">
            <div class="question-text"><strong>${qi + 1}.</strong> ${q.text}</div>
            <div class="options-row">
              ${opts.map(opt => `<span class="option-pill ${val === opt ? 'selected' : ''}">${opt}</span>`).join('')}
            </div>
          </div>`;
        });
      }

      if (s.type === 'wordlist') {
        s.groups.forEach((group, gi) => {
          const checked = responses[s.id + '_' + gi] || [];
          html += `<h3>${group.title} (${checked.length}/${group.count})</h3>
<table><tr><th>Palabra</th><th>Dice</th></tr>`;
          group.words.forEach(w => {
            const isChecked = checked.includes(w);
            html += `<tr class="${isChecked ? 'word-checked' : ''}"><td>${w}</td><td>${isChecked ? '✓' : ''}</td></tr>`;
          });
          html += `</table>`;
        });
      }

      if (s.type === 'parte1') {
        const sr = responses[s.id] || {};
        const colorMap = { 'Todavía no': 'badge-tn', 'A veces': 'badge-av', 'Muchas veces': 'badge-mv' };

        html += `<h3>I. Producción Temprana</h3>`;
        s.produccion.questions.forEach((q, qi) => {
          const val = sr['prod_' + qi] || 'Sin respuesta';
          const cls = colorMap[val] || 'badge-tn';
          html += `<div class="question-block">
            <div class="question-text"><strong>${qi + 1}.</strong> ${q.text}</div>
            <span class="badge ${cls}">${val}</span>
          </div>`;
        });

        html += `<h3>II. Desarrollo del Vocabulario</h3>`;
        const devVal = sr['desarrollo_0'] || 'Sin respuesta';
        html += `<div class="question-block">
          <div class="question-text">${s.desarrollo.question}</div>
          <div class="options-row">
            ${s.desarrollo.options.map(opt => `<span class="option-pill ${devVal === opt ? 'selected' : ''}">${opt}</span>`).join('')}
          </div>
        </div>`;

        html += `<h3>III. Vocabulario</h3>`;
        s.vocabulario.groups.forEach((group, gi) => {
          const checked = sr['vocab_' + gi] || [];
          html += `<h3>${group.title} (${checked.length}/${group.count})</h3>
<table><tr><th>Palabra</th><th>Dice</th></tr>`;
          group.words.forEach(w => {
            const isChecked = checked.includes(w);
            html += `<tr class="${isChecked ? 'word-checked' : ''}"><td>${w}</td><td>${isChecked ? '✓' : ''}</td></tr>`;
          });
          html += `</table>`;
        });

        html += `<h3>IV. Usos del Lenguaje</h3>`;
        s.usos.questions.forEach((q, qi) => {
          const val = sr['usos_' + qi] || 'Sin respuesta';
          const cls = colorMap[val] || 'badge-tn';
          html += `<div class="question-block">
            <div class="question-text"><strong>${qi + 1}.</strong> ${q.text}</div>
            <span class="badge ${cls}">${val}</span>
          </div>`;
        });
      }

      if (s.type === 'gramatica') {
        const sr = responses[s.id] || {};
        const colorMap = { 'Todavía no': 'badge-tn', 'A veces': 'badge-av', 'Muchas veces': 'badge-mv' };

        html += `<h3>I. Terminaciones de las Palabras</h3>`;
        s.terminaciones.questions.forEach((q, qi) => {
          const val = sr['term_' + qi] || 'Sin respuesta';
          const cls = colorMap[val] || 'badge-tn';
          html += `<div class="question-block">
            <div class="question-text"><strong>${qi + 1}.</strong> ${q.text}</div>
            <span class="badge ${cls}">${val}</span>
          </div>`;
        });

        s.terminaciones.personas.forEach((q, qi) => {
          const val = sr['personas_' + qi] || [];
          html += `<div class="question-block">
            <div class="question-text"><strong>12.</strong> ${q.text}</div>
            <div class="options-row">
              ${s.terminaciones.personasOptions.flat().map(opt => `<span class="option-pill ${val.includes(opt) ? 'selected' : ''}">${opt}</span>`).join('')}
            </div>
          </div>`;
        });

        html += `<h3>${s.verbos.title}</h3>`;
        s.verbos.groups.forEach((group, gi) => {
          const checked = sr['verbos_' + gi] || [];
          html += `<h3>${group.title} (${checked.length}/${group.count})</h3>
<table><tr><th>Verbo</th><th>Dice</th></tr>`;
          group.words.forEach(w => {
            const isChecked = checked.includes(w);
            html += `<tr class="${isChecked ? 'word-checked' : ''}"><td>${w}</td><td>${isChecked ? '✓' : ''}</td></tr>`;
          });
          html += `</table>`;
        });

        html += `<h3>III. Palabras Sorprendentes</h3>`;
        html += `<div class="question-block"><div class="question-text">${s.sorprendentes.question}</div></div>`;
        s.sorprendentes.items.forEach((item, ii) => {
          const val = sr['sorp_' + ii] || 'Sin respuesta';
          const cls = val === 'Sí' ? 'badge-si' : 'badge-no';
          html += `<div class="question-block">
            <div class="question-text">${item.label}</div>
            <span class="badge ${cls}">${val}</span>
          </div>`;
        });

        html += `<h3>IV. Combinación de Palabras</h3>`;
        const combVal = sr['combinacion_0'] || 'Sin respuesta';
        const combCls = colorMap[combVal] || 'badge-tn';
        html += `<div class="question-block">
          <div class="question-text">${s.combinacion.question}</div>
          <div class="options-row">
            ${s.combinacion.options.map(opt => `<span class="option-pill ${combVal === opt ? 'selected' : ''}">${opt}</span>`).join('')}
          </div>
        </div>`;
        if (combVal && combVal !== 'Todavía no') {
          html += `<h3>Ejemplos</h3>`;
          [1,2,3].forEach(n => {
            const ex = sr['ejemplo_' + n] || '';
            html += `<div class="question-block"><div class="question-text"><strong>${n}.</strong> ${ex || '<em>(sin respuesta)</em>'}</div></div>`;
          });
        }

        html += `<h3>V. Complejidad Morfosintáctica</h3>`;
        html += `<div class="question-block"><div class="question-text"><em>${s.complejidad.note}</em></div></div>`;
        s.complejidad.questions.forEach((q, qi) => {
          const checked = sr['comp_' + qi] || [];
          html += `<div class="question-block">
            <div class="question-text"><strong>${qi + 1}.</strong> ${q.text}</div>
            <div class="options-row">
              ${q.options.map(opt => `<span class="option-pill ${checked.includes(opt) ? 'selected' : ''}">${opt}</span>`).join('')}
            </div>
          </div>`;
        });
      }

      if (s.type === 'informacion') {
        const sr = responses[s.id] || {};
        html += `<h2>Información General</h2>`;

        html += `<h3>Datos del Padre o Cuidador</h3>
<div class="question-block">
  <div class="question-text"><strong>Nombre:</strong> ${sr.info_padre_nombre || '-'}</div>
  <div class="question-text"><strong>Dirección:</strong> ${sr.info_padre_direccion || '-'}</div>
  <div class="question-text"><strong>Teléfono:</strong> ${sr.info_padre_tel || '-'} &nbsp; <strong>E-mail:</strong> ${sr.info_padre_email || '-'}</div>
</div>`;

        html += `<h3>Datos del Niño</h3>
<div class="question-block">
  <div class="question-text"><strong>Edad:</strong> ${sr.info_nino_edad || '-'} &nbsp; <strong>Sexo:</strong> ${sr.info_nino_sexo || '-'}</div>
  <div class="question-text"><strong>Orden de nacimiento:</strong> ${sr.info_nino_orden || '-'} &nbsp; <strong>Hijos en la familia:</strong> ${sr.info_nino_hijos || '-'}</div>
  <div class="question-text"><strong>Pasa el día con:</strong> ${(sr.info_nino_cuidador || []).join(', ') || '-'}</div>
</div>`;

        html += `<h3>Escolarización</h3>
<div class="question-block">
  <div class="question-text"><strong>¿Escuela Infantil/guardería?</strong> ${sr.info_escuela || '-'}</div>
  ${sr.info_escuela === 'Si' ? `<div class="question-text"><strong>Edad de inicio:</strong> ${sr.info_escuela_edad || '-'} &nbsp; <strong>Horas al día:</strong> ${sr.info_escuela_horas || '-'}</div>` : ''}
</div>`;

        html += `<h3>Contacto con Otras Lenguas</h3>
<div class="question-block">
  <div class="question-text"><strong>¿Tiene contacto con otras lenguas?</strong> ${sr.info_lenguas || '-'}</div>
  ${sr.info_lenguas === 'Si' ? `
    <div class="question-text"><strong>Lengua:</strong> ${sr.info_lenguas_cual || '-'} &nbsp; <strong>Desde:</strong> ${sr.info_lenguas_edad || '-'}</div>
    <div class="question-text"><strong>Veces/semana:</strong> ${sr.info_lenguas_veces || '-'} &nbsp; <strong>Horas/día:</strong> ${sr.info_lenguas_horas || '-'}</div>
  ` : ''}
</div>`;

        html += `<h3>Salud del Niño</h3>
<div class="question-block">
  <div class="question-text"><strong>¿Nació antes de los 9 meses?</strong> ${sr.info_salud_prematuro || '-'} &nbsp; <strong>Peso al nacer:</strong> ${sr.info_salud_peso || '-'}</div>
  <div class="question-text"><strong>¿Enfermedades de audición/lenguaje?</strong> ${sr.info_salud_audicion || '-'}</div>
  ${sr.info_salud_audicion === 'Si' ? `<div class="question-text"><em>${sr.info_salud_audicion_desc || '-'}</em></div>` : ''}
  <div class="question-text"><strong>¿Infecciones de oído?</strong> ${sr.info_salud_oido || '-'}</div>
  ${sr.info_salud_oido === 'Si' ? `<div class="question-text"><strong>Cuántas al año:</strong> ${sr.info_salud_oido_cuantas || '-'}</div>` : ''}
</div>`;

        html += `<h3>Datos de los Padres</h3>
<div class="question-block">
  <div class="question-text"><strong>Persona que rellenó el inventario:</strong> ${sr.info_padres_quien || '-'}</div>
</div>`;

        html += `<h3>Escolaridad</h3>
<table><tr><th>Nivel</th><th>Madre</th><th>Padre</th></tr>`;
        ['Sin escolaridad', 'Primaria o 1er Ciclo EGB o equivalente', 'Secundaria o 2° Ciclo EGB o equivalente', 'Bachillerato o COU o equivalente', 'Universidad'].forEach(nivel => {
          html += `<tr><td>${nivel}</td><td>${sr.info_esc_madre === nivel ? '✓' : ''}</td><td>${sr.info_esc_padre === nivel ? '✓' : ''}</td></tr>`;
        });
        html += `</table>`;

        html += `<h3>Lugar de Origen</h3>
<table><tr><th></th><th>Madre</th><th>Padre</th></tr>`;
        ['País', 'Provincia', 'Ciudad o pueblo'].forEach(campo => {
          html += `<tr><td>${campo}</td><td>${sr['origen_madre_' + campo] || '-'}</td><td>${sr['origen_padre_' + campo] || '-'}</td></tr>`;
        });
        html += `</table>`;

        html += `<h3>Número de Habitantes</h3>
<table><tr><th></th><th>Madre</th><th>Padre</th></tr>`;
        ['Menos de 10.000', '10.000-50.000', 'Más de 50.000'].forEach(hab => {
          html += `<tr><td>${hab}</td><td>${sr.info_hab_madre === hab ? '✓' : ''}</td><td>${sr.info_hab_padre === hab ? '✓' : ''}</td></tr>`;
        });
        html += `</table>`;
      }
    });

    html += '</body></html>';
    printWindow.document.write(html);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 500);
  }

  // ===== INIT =====
  (async function init() {
    const saved = await loadState();
    if (saved) {
      Object.assign(responses, saved.responses || {});
      currentSection = saved.currentSection || 0;
    }
    render();
  })();

})();
