new Chart(document.getElementById("dispersion"), {
    type: 'bar',
    data: {
        labels: [
            "Territorio, Ciudadanía y Hábitat Sostenible",
            "Patrimonio, Cultura y Pensamiento Crítico",
            "Morfología, Percepción y Lenguajes Visuales",
            "Innovación Social y Procesos Participativos",
            "Tecnología Aplicada, Proyectos y Nuevos Medios",
            "Estrategia, Gestión y Valor Económico",
            "Ciencia de Materiales y Ciclo de Vida",
            "Fabricación Avanzada y Tecnologías Digitales",
            "Sostenibilidad, Economía Circular y Upcycling",
            "Oficios, Técnicas Artesanales y Patrimonio",
            "Diseño de Productos, Servicios y Experiencias",
            "Biomecánica, Ergonomía y Sistemas Estructurales",
            "Interacción, Código y Experiencia Digital (UX/UI)",
            "Narrativa Visual, Ilustración y Animación",
            "Cultura Visual, Patrimonio e Identidad",
            "Diseño Editorial, Tipografía y Discurso",
            "Comunicación Estratégica, Datos y Fotografía",
            "Pensamiento Crítico e Investigación Proyectual"
        ],
        datasets: [{
            label: 'Cantidad de electivos / Asignaciones',
            data: [
                [0, 9], [0, 10], [0, 7], [0, 9], [0, 9], [0, 10], 
                [0, 8], [0, 8],  [0, 8], [0, 8], [0, 9], [0, 7], 
                [0, 9], [0, 7],  [0, 6], [0, 9], [0, 6], [0, 7]
            ], 
            backgroundColor: [
                "rgba(241, 142, 45, 0.75)",
                "rgba(54, 162, 235, 0.75)",
                "rgba(255, 206, 86, 0.75)",
                "rgba(75, 192, 192, 0.75)",
                "rgba(153, 102, 255, 0.75)",
                "rgba(255, 159, 64, 0.75)",
                "rgba(201, 203, 207, 0.75)",
                "rgba(233, 30, 99, 0.75)",
                "rgba(0, 150, 136, 0.75)",
                "rgba(139, 195, 74, 0.75)",
                "rgba(63, 81, 181, 0.75)",
                "rgba(255, 87, 34, 0.75)",
                "rgba(121, 85, 72, 0.75)",
                "rgba(158, 158, 158, 0.75)",
                "rgba(96, 125, 139, 0.75)",
                "rgba(33, 150, 243, 0.75)",
                "rgba(255, 235, 59, 0.75)",
                "rgba(103, 58, 183, 0.75)"
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y', 
        scales: {
            x: {
                beginAtZero: true,
                ticks: { font: { family: "'Georama', sans-serif", size: 11 } }
            },
            y: {
                ticks: { font: { family: "'Georama', sans-serif", size: 11 } }
            }
        },
        plugins: {
            legend: {
                position: 'top',
                labels: { font: { family: "'Georama', sans-serif", size: 11 } }
              },
            title: {
                display: true,
                text: 'Distribución Original de Asignaciones (Total: 148 Electivos)',
                font: { family: "'Georama', sans-serif", size: 14, weight: "600" }
            },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                callbacks: {
                    label: function (context) {
                        const rango = context.raw;
                        const valorNeto = rango[1] - rango[0];
                        return ` ${context.label}: ${valorNeto} electivos`;
                    }
                }
            }
        }
    }
});


new Chart(document.getElementById("barras"), {
    type: 'bar',
    data: {
        labels: [
            "Territorio, Patrimonio y Memorias Sociales",
            "Ciencia de Materiales, Oficios y Producción Circular",
            "Fabricación Avanzada, Tecnologías y Estructuras",
            "Comunicación Visual, Discurso y Narrativas",
            "Experiencia de Usuario e Interacción Digital",
            "Estrategia, Gestión y Pensamiento Investigativo"
        ],
        datasets: [
            {
                label: 'Cantidad de Electivos',
                data: [25, 24, 24, 23, 18, 32], 
                backgroundColor: "rgba(54, 162, 235, 0.75)", // Color Azul para Electivos
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            },
            {
                label: 'Cantidad de Proyectos',
                data: [61, 23, 87, 101, 13, 49], 
                backgroundColor: "rgba(241, 142, 45, 0.75)", // Color Naranja para Tesis/Proyectos
                borderColor: "rgba(241, 142, 45, 1)",
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,  
        aspectRatio: 1.5, 
        scales: {
            x: {
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 }
                },
                grid: { display: false }
            },
            y: {
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 }
                },
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: { family: "'Georama', sans-serif", size: 11 }
                }
            },
            title: {
                display: true,
                text: 'Relación entre Oferta de Electivos y Decisiones de Proyectos de Título',
                font: { family: "'Georama', sans-serif", size: 14, weight: "600" }
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const proyectosDatos = [
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Motochi-e : diseño de prototipo conceptual para carenado de motocicleta eléctrica", r: "Motocicleta eléctrica de alta autonomía para electromovilidad urbana.", a: "Barraza Carrasco, Sebastián", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Desarrollo de un material compuesto basado en paja de trigo harinero para la elaboración de una superficie de apoyo sostenible para la práctica del yoga", r: "Mat de yoga sostenible fabricado con residuos agroindustriales de trigo.", a: "Solís Bastías, Yessenia Estefanía", m: "Industrial y Servicios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Love,Jects", r: "Fichas infográficas sobre reparación y consumo consciente.", a: "Mercado Morales, Javiera", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Increte sistema que permite monitorear, reconocer, marcar y registrar visualmente el espesor requerido durante la proyección de hormigón en túneles", r: "Guía visual en tiempo real para operadores de shotcrete en túneles.", a: "Villarroel Zúñiga, Caterina Monserrat", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Creación de un atuendo modular como propuesta de diseño a partir de técnicas de upcycling", r: "Ropa adaptable basada en principios de slow fashion.", a: "Torres Castañeda, Catalina Trinidad", m: "Diseño" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Rediseño de línea de mobiliario infantil para jardines infantiles de la JUNJI mediante revalorización del residuo textil de la Región Metropolitana", r: "Mobiliario parvulario JUNJI a partir de biotextiles reciclados.", a: "Pailamilla Antil, Camila Alejandra", m: "Industrial y Servicios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Guía metodológica para el codiseño de experiencias de turismo con base comunitaria", r: "Metodología de diseño participativo para turismo rural.", a: "García Orellana, Javiera Ignacia", m: "Industrial y Servicios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Isla de agua : artefacto purificador de agua lluvia para sectores rurales vulnerables de la comuna de Toltén", r: "Dispositivo autónomo de potabilización pluvial rural.", a: "Poblete Valenzuela, Catalina Beatriz", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Uso de rastrojo de trigo y micelio para el diseño de un empaque protector de botellas de vino de exportación", r: "Packaging biodegradable aislante a partir de hongos y agro-residuos.", a: "Perez Tapia, Daniel Ignacio", m: "Industrial y Servicios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Herramienta digital para la visualización del ciclo de vida de los materiales de construcción", r: "Software interactivo de cálculo de huella de carbono industrial.", a: "Soto Mayor, Andrés Eduardo", m: "Industrial y Servicios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de sistema de paneles modulares termoacústicos basados en el reciclaje de EPS (Plumavit)", r: "Revestimientos aislantes habitacionales de poliestireno recuperado.", a: "Muñoz Alarcón, Felipe Ignacio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Pedacito mío: kit para acompañar el proceso de duelo ante la pérdida de un animal de compañía", r: "Kit de contención objetual y editorial para familias dolientes.", a: "Mancilla Henríquez, Francisca", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Simeis : set de estimulación sensorial para la detonación de experiencias nostálgicas", r: "Herramienta lúdica para estimulación cognitiva en adultos mayores.", a: "Salinas Van Treek, Montserrat Abril", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Cacerolazo, relaciones mediales entre cacerola y kultrún en la protesta social de mujeres : diseño experimental de un muro sonoro", r: "Instalación sonora museográfica y política de objetos icónicos.", a: "Jure Contreras, Marianne Arlette", m: "Visual y Medios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Sesenta años de la Editorial Universitaria: reconstrucción de su catálogo visual histórico", r: "Investigación y archivo editorial de portadas chilenas clásicas.", a: "López Silva, Fernando Esteban", m: "Visual y Medios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Invisibles: Campaña visual interactiva sobre el acoso callejero en el transporte público", r: "Gráfica urbana y web interactiva de concientización social.", a: "Gómez Maturana, Sofía Belén", m: "Visual y Medios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Dignificar el aspecto de la vía venosa central en niños con tratamiento de quimioterapia endovenosa", r: "Dispositivo textil-médico protector para pacientes oncológicos pediátricos.", a: "Rivera Pérez, Daniela Fernanda", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Disfuria diseño de un producto textil- tecnológico para personas trans masculinas y no binaries", r: "Prenda de compresión ergonómica segura para transición de género.", a: "Saravia Zerega, Constanza Fiorella", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Cartas Espejo : set de cartas ilustradas para apoyar el desarrollo del autoconocimiento emocional en personas adultas", r: "Baraja psicoterapéutica de soporte emocional autónomo.", a: "Birkelbach Lara, Josefa Valentina", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "De la inspiración a la cubierta : las influencias externas en las cubiertas de la colección Quimantú para todos de la Editora Nacional Quimantú (1971-1973)", r: "Análisis gráfico y político del diseño de portadas de libros masivos.", a: "Ferrada Villarroel, Isidora Amanda", m: "Visual y Medios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Propuesta expositiva para Biblioteca Nacional basada en el minisitio de Memoria Chilena acerca de la historia de la tipografía en Chile", r: "Diseño de experiencia espacial interactiva para el archivo nacional.", a: "González Carriel, Pablo César Mauricio", m: "Visual y Medios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Emocionalidad en los videojuegos : diseño de experiencias emocionales en flujo aplicado a videojuegos", r: "Manual proyectual y prototipo de interfaz UX/UI para inmersión jugable.", a: "Rodríguez Contreras, Tomás Andrés", m: "Diseño" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Nichijou no kurashi : belleza e impermanencia del cotidiano", r: "Libro de artista y fotografía sobre herencia cultural oriental.", a: "Valdebenito Paillamil, Claudia Valentina", m: "Diseño" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "K-empathy : de simpatizar con la K-culture a empatizar con el Dongpo", r: "Proyecto transmedia de vinculación identitaria e intercultural.", a: "Cheong Lee, Gina", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Sistema modular para la realización de cianotipia sobre vidrio", r: "Herramientas técnicas artesanales para recuperación fotográfica.", a: "Cortés Musiatte, Camila Alejandra", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La Vega Central como patrimonio vivo: registro infográfico de flujos cotidianos", r: "Cartografía visual urbana de las dinámicas comerciales tradicionales.", a: "Sanhueza Cid, Ignacio Javier", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Ruta de la Memoria: Señalética y diseño de información para excentros de detención", r: "Sistema de balizamiento urbano e infografía histórica sobre derechos humanos.", a: "Araya Castro, Valeria Nicole", m: "Visual y Medios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Guía ilustrada de la fauna urbana intermitente de la cuenca del Maipo", r: "Libro informativo ilustrado enfocado en educación ambiental escolar.", a: "Herrera Morales, Matías Ignacio", m: "Visual y Medios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Plataforma web educativa para el aprendizaje interactivo de lenguas originarias en entornos escolares", r: "Diseño UX/UI de software pedagógico de lengua Mapudungun.", a: "Catrileo Melinao, Rayen Antu", m: "Visual y Medios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Diseño de un sistema ergonómico para la prevención de trastornos musculoesqueléticos en recolectores de uva", r: "Exoesqueleto pasivo textil y arnés de distribución de carga agrícola.", a: "Vergara Donoso, Gonzalo Andrés", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Revalorización de la borra de café como biomaterial para objetos de iluminación doméstica", r: "Desarrollo de pantallas lumínicas mediante aglomerados de desecho orgánico.", a: "Soto Camus, Macarena Paz", m: "Industrial y Servicios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Prototipo de prótesis impresa en 3D funcional de miembro superior para niños de edad escolar", r: "Modelado e impresión tridimensional personalizable de bajo costo.", a: "Vargas Rojas, Cristóbal Felipe", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Vestuario Bestiario", r: "Vestuario como narrativa y editorial fotográfica.", a: "Valdebenito Matta, Antonia", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La Villa: Narrativa gráfica desde el cotidiano periférico", r: "Narrativa gráfica sobre la vida en la periferia.", a: "Benítez Gazzano, Constanza Catalina", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Paleta Urbana : atlas infográfico de la indumentaria en el género urbano en Chile", r: "Atlas infográfico de indumentaria en género urbano.", a: "Bravo Miranda, Sofía Antonia", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Coverarts de la música urbana en Chile : diseño y representación visual de una identidad cultural contemporánea", r: "Investigación cualitativa sobre portadas y entorno digital.", a: "Bozán Araya, Josefina Victoria", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Voxwave: Diseño de una experiencia híbrida entre lo físico y lo virtual basada en la estética Vaporwave", r: "Kit de armables y Realidad Aumentada (Vaporwave).", a: "Burgos Apolaya, Katherine Andrea", m: "Visual y Medios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Simbología de la resistencia: Archivo visual de las expresiones gráficas post-estallido social en Santiago", r: "Recopilación y catalogación de iconografía de protesta callejera.", a: "Cáceres Fuenzalida, Martín Ignacio", m: "Visual y Medios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Kizuna: Cómic interactivo digital sobre la inmigración japonesa en el sur de Chile", r: "Novela gráfica digital autogestionada multimedia.", a: "Nakashima Silva, Emi Valentina", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Kit de ayuda técnica modular para la autonomía en la alimentación de adultos mayores con artrosis", r: "Adaptadores ergonómicos impresos en 3D para cubiertos comunes.", a: "Donoso Faúndez, Javier Ignacio", m: "Industrial y Servicios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un sistema de habitáculo móvil y plegable para situaciones de catástrofe climática en el norte chileno", r: "Módulo habitable de emergencia desplegable.", a: "Araya Pastén, Marcelo Alonso", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Biotextiles a partir de la fermentación del desecho de manzana de la industria sidrera maulina", r: "Investigación material orgánica para sustitución de cueros sintéticos.", a: "Muñoz Gatica, Isidora Ignacia", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Humedales del Biobío: Sistema de infografía urbana para la puesta en valor ecológica", r: "Señalética y paneles educativos en zonas naturales amenazadas.", a: "Henríquez Pino, Rocío Belén", m: "Visual y Medios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Trazos de la Infancia: Libro álbum ilustrado para el apoyo terapéutico de niños institucionalizados", r: "Material de acompañamiento psicológico infantil editorial.", a: "Ríos Valenzuela, Javiera Paz", m: "Visual y Medios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "UX/UI aplicado a la telemedicina rural: Rediseño de la interfaz de consulta del Servicio de Salud Coquimbo", r: "Optimización de accesibilidad digital para plataformas médicas.", a: "Castro Meléndez, Esteban Andrés", m: "Visual y Medios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Planificación estratégica y diseño de servicios para el mejoramiento de la experiencia del paciente en el Hospital del Salvador", r: "Reestructuración metodológica de flujos de atención ambulatoria.", a: "Garrido Astudillo, Camila Fernanda", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Antología Visual del Mito Chilote: Diseño editorial experimental de relatos orales de la isla de Chiloé", r: "Libro ilustrado con técnicas mixtas y tipografía adaptada.", a: "Cárdenas Bahamonde, Pía Macarena", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Prototipo de exoesqueleto pasivo de asistencia lumbar para operarios logísticos de carga pesada", r: "Dispositivo mecánico ergonómico sin motores para reducción de fatiga.", a: "Salazar Orellana, Nicolás Mateo", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Revalorización de la cáscara de huevo para la producción de vajilla compostable de uso gastronómico masivo", r: "Desarrollo de un biopolímero rígido aglomerado.", a: "Pinto Saavedra, Valentina Paz", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Ruta del Carbón en Lota: Diseño de identidad visual y señalética patrimonial para el circuito minero", r: "Propuesta de revitalización turística e histórica museográfica.", a: "Chamorro Fierro, Gonzalo Andrés", m: "Visual y Medios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Voces del exilio: Novela gráfica documental basada en testimonios de la diáspora chilena en Suecia", r: "Narrativa visual histórica sobre memoria social chilena.", a: "Lindström Arenas, Karin Eliana", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Sistema modular de paneles acústicos a partir de fibras recicladas de desecho neumático (caucho)", r: "Revestimiento arquitectónico sustentable para salas de clases.", a: "Morales Urzúa, Matías Eduardo", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Diseño de un modelo de gestión y experiencia de servicio para cooperativas agrícolas lecheras en el sur de Chile", r: "Estrategia sistémica de optimización de cadena distributiva.", a: "Vogel Neumann, Franz Josef", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Atlas de la flora nativa del Parque Nacional La Campana: Manual infográfico interactivo para guías de turismo", r: "Diseño de información científica adaptada para divulgación de biodiversidad.", a: "Pizarro Astudillo, Constanza Belén", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Aglomerados de aserrín y micelio de hongo lignícola para sustitución de aislantes tradicionales en viviendas sociales", r: "Investigación empírica material constructiva ecológica.", a: "Jara San Martín, Camilo Ignacio", m: "Industrial y Servicios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Rediseño de la arquitectura de información y UX/UI del sistema de postulación a becas estudiantiles estatales", r: "Plataforma web simplificada para disminuir brechas de acceso digital.", a: "Molina Santander, Daniel Alfonso", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Estética de las ferias libres chilenas: Registro fotográfico y tipográfico de la rotulación tradicional", r: "Rescate del oficio del cartelista popular y archivo identitario.", a: "Vargas Fuenzalida, Simón Pedro", m: "Visual y Medios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Optimización de la experiencia de parto respetado en hospitales públicos mediante codiseño de entornos y vestuario médico", r: "Sistemas objetuales y espaciales con enfoque humanizado y de género.", a: "Rojas Valenzuela, Antonia Ignacia", m: "Industrial y Servicios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de mobiliario escolar adaptable para aulas multigrado de escuelas rurales unidocentes", r: "Estaciones de trabajo modulares reconfigurables físicamente.", a: "Sepúlveda Soto, Francisca Elena", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Campaña visual para la prevención del virus Hanta enfocada en comunidades agrícolas de la Araucanía", r: "Sistema de afiches, cartillas e infografías sin texto para alta efectividad.", a: "Ñancupil Huaiquil, Lautaro Andrés", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Reutilización de redes de pesca desechadas para la fabricación de filamento de impresión 3D de alta resistencia", r: "Reciclaje industrial mecánico aplicado al diseño objetual.", a: "Gómez Valenzuela, Benjamín Tomás", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Arqueología de la vivienda obrera: Catálogo visual del equipamiento doméstico en las salitreras de Tarapacá", r: "Investigación socio-objetual histórica ilustrada.", a: "Troncoso Alarcón, Natalia Andrea", m: "Visual y Medios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "El viaje del agua: Libro interactivo pop-up para la educación hídrica infantil en zonas de sequía extrema", r: "Diseño editorial didáctico y tridimensional.", a: "Muñoz Retamal, Daniela Alejandra", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño y desarrollo de una incubadora neonatal de bajo costo y fácil mantención para clínicas periféricas", r: "Equipo médico optimizado con componentes modulares estandarizados.", a: "Santibáñez Osses, Ricardo Esteban", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Estudio ergonómico de los puestos de trabajo de recolectoras de algas en la costa del Maule", r: "Propuesta de herramientas adaptadas para prevención de lesiones crónicas.", a: "Carrasco Faúndez, María José", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Gráfica de las farmacias populares: Análisis y propuesta de un sistema visual de información de medicamentos", r: "Rediseño de empaques para facilitar la legibilidad en adultos mayores.", a: "Poblete Ibáñez, Catalina Paz", m: "Visual y Medios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Diseño de interfaz para una aplicación móvil orientada al monitoreo autónomo de pacientes diabéticos de la tercera edad", r: "Estrategias de gamificación y accesibilidad UX adaptadas.", a: "López Contreras, Matías Ignacio", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Arquitectura efímera y festividades populares: El caso del carnaval andino Con la Fuerza del Sol en Arica", r: "Análisis del diseño espacial urbano y del traje festivo tradicional.", a: "Mamani Choque, Inti Sebastián", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Prototipo de vehículo eléctrico monoplaza para el desplazamiento de recolectores urbanos de cartón", r: "Carro de tracción asistida ergonómico para reciclaje de base.", a: "Gutiérrez Neira, Joaquín Alonso", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Desarrollo de ladrillos aislantes termoacústicos utilizando rastrojo de maíz y arcillas locales de Colina", r: "Material compuesto ecológico para bioconstrucción periférica.", a: "Valenzuela Bravo, Diego Ignacio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Señales de humo: Animación digital explicativa sobre los riesgos de los incendios forestales en la interfaz urbano-rural", r: "Campaña audiovisual de concientización comunitaria.", a: "Ortega Castillo, Isidora Belén", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Memoria textil de las arpilleristas de Santiago: Catálogo digital interactivo de piezas históricas", r: "Archivo y puesta en valor visual de relatos políticos cosidos.", a: "Silva Miranda, Javiera Paz", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Sistema modular de andamiaje y protección física para trabajadores de la construcción en altura", r: "Componentes estructurales plásticos reciclados de alta resistencia.", a: "Ríos Mendoza, Cristián Andrés", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Diseño de servicios de reinserción sociolaboral para exreclusos mediante talleres de oficios y carpintería", r: "Modelo estratégico de acompañamiento y diseño metodológico.", a: "Pérez Hinostroza, Macarena Paz", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Tipografías invisibles: Estudio y rescate de los caracteres utilizados en las imprentas clandestinas de los años 80", r: "Recuperación e indexación tipográfica histórica digital.", a: "Fuenzalida Ossa, Fernando José", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Aislante térmico textil a partir de prendas de mezclilla en desuso recolectadas en vertederos del norte chileno", r: "Material de upcycling a gran escala para techumbres de viviendas.", a: "Araya Collao, Constanza Daniela", m: "Industrial y Servicios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Plataforma colaborativa interactiva para la gestión de huertos urbanos comunitarios en la Región Metropolitana", r: "Diseño de servicio transmedia y UI móvil de geolocalización.", a: "Navarro Cáceres, Esteban Felipe", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Patrimonio ferroviario de San Rosendo: Guía infográfica y museografía interactiva para la antigua maestranza", r: "Diseño de soportes visuales para turismo cultural regional.", a: "Mendoza Cisternas, Carla Sofía", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un dispositivo de rescate marítimo autónomo controlado a distancia para el borde costero central", r: "Boya motorizada hidrodinámica para salvataje rápido.", a: "Lara Sanhueza, Francisco Javier", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Sistema de gestión de residuos médicos intrahospitalarios no peligrosos para la reducción de plásticos de un solo uso", r: "Rediseño metodológico de protocolos objetuales hospitalarios.", a: "Burgos Henríquez, Paulina Paz", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Relatos de la cuenca: Cortometraje de animación stop-motion sobre la crisis del agua en el río Petorca", r: "Narrativa audiovisual de denuncia socioambiental ficcionada.", a: "Godoy Astudillo, Camilo Ignacio", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Desarrollo de un compuesto biodegradable para empaques de alimentos grasos a partir de desecho de caparazones de crustáceos (quitosano)", r: "Biopolímero transparente alternativo al plástico.", a: "Medina Orellana, Valentina Ignacia", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "El comercio ambulante y su gráfica espontánea: Catálogo visual del centro de Santiago", r: "Estudio e ilustración de soportes comerciales móviles e informales.", a: "Herrera Zúñiga, Matías Nicolás", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de una estación modular de primeros auxilios para senderistas en alta montaña (Andinismo)", r: "Refugio autónomo transportable en helicóptero.", a: "Alarcón Cáceres, Gabriel Antonio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Cuerpo y territorio: Fanzine ilustrado sobre la identidad trans y no binaria en entornos escolares chilenos", r: "Material gráfico autogestionado de vinculación afectiva.", a: "Pérez Saavedra, Sacha Belén", m: "Visual y Medios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Evaluación ergonómica y rediseño de las herramientas de mano utilizadas en la industria de la poda vitivinícola", r: "Herramientas mecánicas de mano optimizadas biomecánicamente.", a: "Soto Villalobos, Diego Andrés", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Infografías de la astronomía en Chile: Manual visual sobre el funcionamiento de los radiotelescopios del norte", r: "Diseño de información científica compleja para público general.", a: "Matus Barra, Isidora Paz", m: "Visual y Medios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Videojuego educativo pixel-art para la enseñanza de historia precolombina chilena en enseñanza básica", r: "Estrategias de mecánicas lúdicas de interfaz interactiva.", a: "Gajardo Neira, Tomás Ignacio", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La arquitectura del adobe en el Valle del Elqui: Guía técnica ilustrada de restauración comunitaria", r: "Rescate editorial de saberes constructivos tradicionales locales.", a: "Cortes Pastén, Pía Montserrat", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un chaleco salvavidas ergonómico adaptado para las labores de pesca artesanal de alta mar", r: "Prenda de seguridad textil industrial con flotabilidad distribuida.", a: "Sanhueza Cid, Felipe Andrés", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Sustituto de cuero sintético basado en el cultivo biológico de Kombucha (Scoby) aplicado al diseño de accesorios calzados", r: "Material biofabricado flexible sustentable.", a: "Rojas Miranda, Fernanda Ignacia", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "El lenguaje de las señas chilenas: Plataforma interactiva ilustrada para el aprendizaje familiar básico", r: "Diseño editorial multimedia inclusivo orientado a la comunidad sorda.", a: "Henríquez Pino, Sofía Belén", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La bohemia santiaguina de los años 60: Registro tipográfico e iconográfico de los antiguos restaurantes del centro", r: "Puesta en valor del patrimonio gráfico urbano desaparecido.", a: "Urzúa Ossa, Fernando José", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un kit de herramientas agrícolas ergonómicas para la agricultura familiar campesina de la Región del Maule", r: "Adaptadores mecánicos modulares reductores de sobrecarga muscular.", a: "Castro Meléndez, Benjamín Alonso", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Modelo de diseño de servicios públicos orientado a la optimización de los tiempos de espera en consultorios municipales", r: "Estrategia de flujos de atención y señalización adaptiva.", a: "Pinto Saavedra, Macarena Paz", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Fantasmas urbanos: Novela gráfica sobre los antiguos cines de barrio abandonados en Santiago", r: "Relato visual de memoria urbana arquitectónica popular.", a: "Muñoz Retamal, Camilo Ignacio", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Paneles aislantes a base de cáscara de nuez triturada y resinas vegetales para mobiliario interior sustentable", r: "Aprovechamiento de descartes agroindustriales secos.", a: "Pizarro Astudillo, Diego Ignacio", m: "Industrial y Servicios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Diseño UX/UI de una aplicación móvil para la alerta temprana y coordinación vecinal ante desastres naturales comunitarios", r: "Diseño interactivo de interfaces accesibles en situaciones de estrés.", a: "Garrido Astudillo, Esteban Andrés", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Ruta del mimbre en Chimbarongo: Rediseño de la identidad visual de la feria y catálogo de técnicas artesanales", r: "Puesta en valor del oficio artesanal tradicional.", a: "Silva Miranda, Natalia Andrea", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Prototipo de prótesis mecánica de rodilla de bajo costo fabricada mediante inyección de polímeros reciclados", r: "Dispositivo de asistencia médica accesible.", a: "Ríos Mendoza, Ricardo Esteban", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Diseño estratégica de una marca social y empaques circulares para emprendedoras textiles de centros penitenciarios", r: "Modelo de co-diseño con impacto socioeconómico sostenible.", a: "Burgos Henríquez, Valentina Paz", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Aves de la cordillera andina central: Manual visual desplegable para la educación escolar de montaña", r: "Ilustraciones científicas naturalistas y diseño editorial didáctico.", a: "Ñancupil Huaiquil, Pía Macarena", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Bioplástico termoformable a partir del almidón extraído de descartes de papa de ferias libres de la RM", r: "Packaging biodegradable alternativo para productos secos.", a: "Medina Orellana, Diego Andrés", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La huella del salitre: Fotolibro documental sobre los cementerios abandonados de la pampa nortina", r: "Archivo visual narrativo sobre la memoria de los obreros del norte.", a: "Alarcón Cáceres, Isidora Belén", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un sistema modular de techumbre verde hidropónica autogestionable para edificios públicos", r: "Estructuras modulares plásticas livianas e interactiva hídrica.", a: "Soto Villalobos, Felipe Andrés", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "El sonido de las calles: Infografía interactiva multimedia sobre los organilleros y chinchineros de Valparaíso", r: "Preservación digital multimedia del patrimonio inmaterial callejero.", a: "Ortega Castillo, Sofía Belén", m: "Visual y Medios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Reestructuración ergonómica del instrumental quirúrgico odontológico para la reducción de tendinitis ocupacional", r: "Mangos ergonómicos adaptativos y análisis biomecánico.", a: "Fuenzalida Ossa, María José", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Los muros hablan: Catálogo crítico del muralismo político de la Brigada Ramona Parra (BRP) en los años 70", r: "Investigación iconográfica y rediseño editorial documental.", a: "Lindström Arenas, Camilo Ignacio", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un sistema transportable de desalinización solar de agua marina para pescadores artesanales aislados", r: "Artefacto modular flotante de manufactura plástica avanzada.", a: "Matus Barra, Gabriel Antonio", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Desarrollo de un compuesto aglomerado basado en las podas de sarmientos de vid para paneles de exhibición vinícola", r: "Materialidad sostenible circular para la industria vitivinícola.", a: "Troncoso Alarcón, Benjamín Tomás", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "El cementerio general como museo al aire libre: Sistema infográfico de guías para recorridos históricos nocturnos", r: "Soportes gráficos reflectantes y señalización patrimonial.", a: "Jara San Martín, Carla Sofía", m: "Visual y Medios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Las voces del bosque nativo: Libro ilustrado con realidad aumentada sobre la fauna amenazada del sur de Chile", r: "Proyecto editorial transmedia educativo ecológico infantil.", a: "Muñoz Retamal, Sofía Paz", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un dispositivo mecánico de asistencia para la siembra directa de semillas en huertos comunitarios urbanos", r: "Sembradora ergonómica manual construida con aluminio reciclado.", a: "Sanhueza Cid, Marcelo Alonso", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Diseño de un modelo de gestión y experiencia de servicios de salud mental inclusivos para adolescentes LGBTIQ+", r: "Plan estratégico e investigación metodológica cualitativa.", a: "Pérez Saavedra, Esteban Felipe", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Mapas del frío: Atlas infográfico sobre el retroceso de los glaciares en la Patagonia chilena debido al cambio climático", r: "Diseño de información compleja y cartografía ambiental.", a: "Gajardo Neira, Constanza Belén", m: "Visual y Medios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Plataforma interactiva de realidad virtual para la simulación de maniobras de rescate en minería subterránea", r: "Diseño de interfaces VR y dinámicas de experiencia de usuario críticas.", a: "Navarro Cáceres, Tomás Ignacio", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La alfarería de Pomaire: Catálogo visual de las técnicas tradicionales y rediseño de soportes para su comercialización", r: "Estudio socio-objetual del oficio artesanal clásico.", a: "Cortes Pastén, Natalia Andrea", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un chaleco con sensores biométricos integrados para la monitorización de constantes vitales en bomberos", r: "Indumentaria tecnológica industrial de alta seguridad textil.", a: "Lara Sanhueza, Diego Andrés", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Material biocompuesto aislante a partir del desecho de la poda de olivos de la Región de Atacama", r: "Desarrollo de paneles rígidos para construcción sustentable en climas áridos.", a: "Valenzuela Bravo, Isidora Paz", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Los ojos del mar: Documental animado sobre las mujeres recolectoras de algas en las costas de la Región del Maule", r: "Narrativa visual de preservación de saberes de género locales.", a: "Ñancupil Huaiquil, Francisco Javier", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La persistencia del tren: Catálogo patrimonial e infográfico de las estaciones ferroviarias de la Región de O'Higgins", r: "Archivo arqueológico industrial y diseño de información territorial.", a: "Alarcón Cáceres, Natalia Andrea", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de una camilla de rescate articulada plegable para operaciones de emergencia en zonas de difícil acceso", r: "Estructuras de aluminio y mecanismos de sujeción ergonómicos.", a: "Soto Villalobos, Joaquín Alonso", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Diseño de servicios públicos inclusivos: Rediseño de la experiencia del usuario migrante en oficinas estatales", r: "Modelo sistémico, metodologías participativas y mapas de viaje.", a: "Burgos Henríquez, Camilo Ignacio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Plantas que curan: Guía ilustrada de medicina herbolaria mapuche (Lawen) para la educación de salud familiar", r: "Ilustraciones botánicas detalladas y diseño editorial intercultural.", a: "Silva Miranda, Pía Montserrat", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Desarrollo de un material aglomerado biodegradable utilizando hojas secas de plátano oriental caídas en espacios públicos", r: "Elaboración de bandejas de embalaje ecológico urbano.", a: "Pizarro Astudillo, Valentina Ignacia", m: "Industrial y Servicios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Rediseño UX/UI de la plataforma de educación virtual utilizada por estudiantes secundarios de liceos públicos vulnerables", r: "Optimización de flujos interactivos para mitigar la deserción escolar.", a: "Garrido Astudillo, Tomás Ignacio", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "El carnaval de San Antonio de Padua en Santiago: Registro de la fiesta barrial e identidad migrante a través de la gráfica", r: "Investigación visual y diseño de soportes expositivos comunitarios.", a: "Muñoz Retamal, Carla Sofía", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un sistema de contenedores refrigerados autónomos solares para el transporte de vacunas en zonas rurales aisladas", r: "Modelado industrial y optimización de sistemas constructivos estructurales.", a: "Ríos Mendoza, Diego Andrés", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Plan de gestión estratégica del diseño para el fomento de la innovación en microempresas artesanales textiles de La Ligua", r: "Modelos de negocios justos y metodologías de investigación aplicada.", a: "Pérez Saavedra, Valentina Paz", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Voces subterráneas: Novela gráfica sobre la construcción del Metro de Santiago y la memoria de sus primeros trabajadores", r: "Narrativa gráfica documental de rescate histórico y social urbano.", a: "Ortega Castillo, Fernando José", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Fabricación de un material compuesto termoaislante usando lana de oveja de desecho industrial magallánico", r: "Acondicionamiento térmico habitacional de economía circular.", a: "Medina Orellana, Benjamín Tomás", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La tipografía del letrero popular: Catálogo razonado de las fachadas comerciales antiguas del barrio Franklin", r: "Investigación, digitalización tipográfica y memoria objetual.", a: "Fuenzalida Ossa, Simón Pedro", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un traje de protección térmica con flotabilidad integrada para buzos recolectores de algas del sur", r: "Indumentaria ergonómica industrial con materiales de neopreno compuesto.", a: "Lara Sanhueza, Marcelo Alonso", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Insectos del bosque esclerófilo chileno: Manual infográfico interactivo de macrofotografía para escuelas públicas", r: "Diseño de información ecológica y divulgación científica didáctica.", a: "Matus Barra, Sofía Belén", m: "Visual y Medios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Rediseño ergonómico de los puestos de empaque y embalaje en centros de distribución logística masiva", r: "Prevención de riesgos laborales y optimización ergonómica objetual.", a: "Sanhueza Cid, Gabriel Antonio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "El rostro del carbón: Fotolibro documental sobre las familias de los exmineros de la cuenca de Curanilahue", r: "Archivo visual de memoria obrera, retrato fotográfico e identidad local.", a: "Gajardo Neira, Camilo Ignacio", m: "Visual y Medios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Diseño de una aplicación móvil con realidad aumentada orientada a la estimulación cognitiva temprana en niños con TEA", r: "Interfaces interactivas inclusivas con estrategias de diseño de experiencia.", a: "Navarro Cáceres, Constanza Belén", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Los portadores de saberes: Guía visual y catálogo de los artesanos de la piedra liparita en Toconao", r: "Rescate editorial patrimonial de técnicas tradicionales y materialidad local.", a: "Cotes Pastén, Esteban Andrés", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un dispositivo de limpieza y recolección autónoma de microplásticos en arenas playeras", r: "Mecanismo autopropulsado impreso en 3D y chasis de aluminio.", a: "Valenzuela Bravo, Francisco Javier", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Desarrollo de paneles acústicos compuestos basados en desecho de rastrojo de cebada de la industria cervecera", r: "Materiales circulares para aislamiento sonoro arquitectónico.", a: "Troncoso Alarcón, Carla Sofía", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "El canto de la tierra: Cortometraje de animación que relata la cosmogonía de los pueblos originarios del extremo norte", r: "Narrativa visual tradicional y diseño de personajes multiculturales.", a: "Ñancupil Huaiquil, Natalia Andrea", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Estudio de los antiguos teatros de barrio de Valparaíso: Guía visual de sus fachadas y memorias populares", r: "Investigación histórico-gráfica e ilustraciones arquitectónicas.", a: "Alarcón Cáceres, Simón Pedro", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un sistema modular de desinfección ultravioleta de agua corriente para comunidades rurales vulnerables", r: "Dispositivo de bajo costo con componentes modulares industriales.", a: "Soto Villalobos, Cristián Andrés", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Diseño de un servicio integral de teleasistencia para adultos mayores en situación de abandono o aislamiento", r: "Modelo de gestión estratégico, mapas de servicio y diseño de interfaces.", a: "Burgos Henríquez, Macarena Paz", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Manual de alimentación comunitaria: Libro ilustrado de recetas de ollas comunes como memoria viva de las crisis", r: "Diseño editorial y rescate sociocultural e iconografía popular.", a: "Silva Miranda, Fernando José", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Biopolímero rígido utilizando desecho de borra de té y aglutinantes orgánicos para maceteros compostables hortícolas", r: "Alternativa sustentable a plásticos de un solo uso en viveros.", a: "Pizarro Astudillo, Camilo Ignacio", m: "Industrial y Servicios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Diseño UX/UI de una plataforma interactiva web para el mapeo participativo de la biodiversidad en humedales urbanos", r: "Estrategias de ciencia ciudadana y diseño centrado en el usuario.", a: "Garrido Astudillo, Diego Andrés", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La gráfica de los antiguos boletos de micro en Santiago: Archivo tipográfico e iconográfico de la locomoción colectiva", r: "Investigación visual del diseño de información popular del transporte.", a: "Muñoz Retamal, Fernando José", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un casco de protección contra impactos con canales de ventilación pasiva y materiales biodegradables compuestos", r: "Equipo de seguridad ergonómico industrial e ingeniería de producto.", a: "Ríos Mendoza, Gabriel Antonio", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Diseño estratégica y co-creación de marcas e identidades para cooperativas de pescadores artesanales del Maule", r: "Modelo de inserción comercial, valor agregado y diseño de servicios.", a: "Pérez Saavedra, Diego Ignacio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Crónicas de la periferia: Novela gráfica sobre la identidad adolescente en los sectores vulnerables del sur de Santiago", r: "Narrativa visual realista, ilustración urbana y rescate discursivo.", a: "Ortega Castillo, Camilo Ignacio", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Desarrollo de un compuesto material termoformable a base de ceniza volcánica y polímeros recuperados reciclados", r: "Investigación empírica material constructiva de aplicación objetual.", a: "Medina Orellana, Valentina Paz", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La alfarería tradicional de Quinchamalí: Catálogo de técnicas tradicionales negras y rediseño de soportes interactivos", r: "Preservación del patrimonio artesanal inmaterial local.", a: "Fuenzalida Ossa, Sofía Belén", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de una camilla flotante rígida adaptada para rescates en accidentes fluviales y de alta montaña sureña", r: "Estructuras plásticas rotomoldeadas de alta resistencia y flotabilidad.", a: "Lara Sanhueza, Francisco Javier", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Árboles nativos de los bosques templados lluviosos: Guía infográfica interactiva ilustrada para turismo de naturaleza", r: "Diseño de información ambiental compleja y divulgación científica.", a: "Matus Barra, Diego Ignacio", m: "Visual y Medios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Estudio de las condiciones ergonómicas en las labores de empaque de frutas de exportación en la Región de O'Higgins", r: "Análisis biomecánico y rediseño ergonómico de los mesones de trabajo.", a: "Sanhueza Cid, Isidora Belén", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Voces olvidadas del salitre: Fanzine ilustrado interactivo basado en cartas reales de mujeres de las oficinas salitreras", r: "Narrativa gráfica documental, archivo histórico y memoria social.", a: "Gajardo Neira, Sofía Belén", m: "Visual y Medios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Plataforma interactiva web para el aprendizaje y visualización de datos estadísticos complejos en colegios públicos", r: "Diseño UX/UI educativo centrado en disminuir brechas formativas.", a: "Navarro Cáceres, Camilo Ignacio", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La fiesta de Cuasimodo en la zona central: Catálogo iconográfico del vestuario y ornamentación de los jinetes", r: "Investigación visual del patrimonio e identidad religiosa popular.", a: "Cotes Pastén, Carla Sofía", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un kit modular de mobiliario para campamentos de refugiados y personas damnificadas por desastres", r: "Estructuras de cartón estructural corrugado plegables de alta resistencia.", a: "Valenzuela Bravo, Diego Andrés", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Material compuesto a base de fibras de poda de cáñamo industrial para tabiquería de construcción ecológica", r: "Desarrollo experimental sustentable en base a economía circular.", a: "Troncoso Alarcón, Diego Andrés", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Relatos de la puna: Animación stop-motion sobre las leyendas tradicionales de los pueblos atacameños", r: "Narrativa visual tradicional animada y rescate intercultural oral.", a: "Ñancupil Huaiquil, Pía Macarena", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Los antiguos cités de Santiago: Fotolibro documental sobre las dinámicas espaciales y la memoria comunitaria", r: "Archivo visual arquitectónico urbano e investigación cualitativa.", a: "Alarcón Cáceres, Diego Ignacio", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un dispositivo mecánico ergonómico manual para facilitar la extracción artesanal de sal en Cáhuil", r: "Herramienta metálica ligera de acero inoxidable para operarios.", a: "Soto Villalobos, Marcelo Alonso", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Optimización de los flujos de atención y experiencia del servicio de urgencias oncológicas intrahospitalarias", r: "Modelo de codiseño metodológico y estrategias sistémicas.", a: "Burgos Henríquez, Esteban Felipe", m: "Industrial y Servicios" },
        { g: "4. Communication Visual, Discurso y Narrativas", t: "Tipografía de la dictadura: Catálogo crítico de los panfletos políticos impresos en la clandestinidad", r: "Análisis iconográfico y tipográfico histórico y diseño editorial.", a: "Silva Miranda, Constanza Belén", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Biomaterial aglomerado utilizando orujo de uva sobrante de la industria vitivinícola para paneles modulares", r: "Revalorización de descartes orgánicos industriales masivos.", a: "Pizarro Astudillo, Diego Andrés", m: "Industrial y Servicios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Diseño UX/UI de una aplicación móvil de soporte psicológico autónomo orientada a estudiantes universitarios", r: "Interfaces interactivas accesibles para contención emocional.", a: "Garrido Astudillo, Constanza Belén", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La artesanía en crin de Rari: Catálogo visual razonado de técnicas tradicionales de tejido con pelo de caballo", r: "Puesta en valor patrimonial del micro-oficio artesanal tradicional.", a: "Muñoz Retamal, Natalia Andrea", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un prototipo de silla de ruedas todoterreno desmontable para su uso en entornos naturales y rurales", r: "Estructuras tubulares de aluminio de bajo peso y fácil manufactura.", a: "Ríos Mendoza, Felipe Andrés", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Modelo estratégico de comercialización digital justa para redes de cooperativas de artesanos tradicionales chilenos", r: "Diseño de servicios de intermediación y planes de gestión sustentable.", a: "Perez Saavedra, Sacha Belén", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "El viaje del polen: Novela gráfica educativa sobre el rol fundamental de las abejas nativas en la ecología central", r: "Narrativa visual pedagógica ambiental e ilustración naturalista.", a: "Ortega Castillo, Sofía Belén", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Bioplástico flexible transparente a base de alginato extraído de algas marinas desechadas en costas centrales", r: "Alternativa ecológica sustentable para empaques biodegradables.", a: "Medina Orellana, Pía Montserrat", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La huella de la inmigración en la cocina urbana: Catálogo infográfico interactivo de las picadas gastronómicas", r: "Estudio multicultural visual de identidades comunitarias contemporáneas.", a: "Fuenzalida Ossa, Natalia Andrea", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un chaleco de protección física con airbags inflables para operarios de la industria forestal en altura", r: "Equipo ergonómico industrial textil de alta ingeniería de producto.", a: "Lara Sanhueza, Benjamín Tomás", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Hongos del bosque nativo chileno: Guía infográfica interactiva de campo sobre la variedad micológica del sur", r: "Diseño de información científica compleja para divulgación ecológica.", a: "Matus Barra, Camilo Ignacio", m: "Visual y Medios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Rediseño de las herramientas mecánicas de corte de mano utilizadas en la industria de la marroquinería", r: "Análisis biomecánico muscular y optimización ergonómica objetual.", a: "Sanhueza Cid, Diego Andrés", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Los rostros del río: Fotolibro documental sobre el estilo de vida de las comunidades del río Biobío", r: "Archivo visual de memoria social, retratos e identidad local.", a: "Gajardo Neira, Marcelo Alonso", m: "Visual y Medios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Plataforma de realidad virtual para la enseñanza y simulación de protocolos de evacuación sísmica en colegios", r: "Interfaces interactiva VR inmersiva y diseño de experiencia de usuario.", a: "Navarro Cáceres, Francisco Javier", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La alfarería de Talagante: Catálogo de técnicas tradicionales polícromas y rediseño de soportes interactivos", r: "Rescate editorial patrimonial del oficio tradicional de loza decorada.", a: "Cotes Pastén, Benjamín Tomás", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un sistema transportable de filtrado de aire con filtros compuestos de nanofibras para entornos mineros", r: "Dispositivo de seguridad industrial autónomo modular avanzado.", a: "Valenzuela Bravo, Camilo Ignacio", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Compuesto material rígido termoaislante basado en la reutilización de aserrín de carpinterías locales", r: "Paneles arquitectónicos sustentables basados en economía circular.", a: "Troncoso Alarcón, Pía Montserrat", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Leyendas del mar sureño: Cortometraje animado stop-motion inspirado en mitos de pescadores artesanales", r: "Narrativa visual tradicional animada y rescate de memoria oral.", a: "Ñancupil Huaiquil, Tomás Ignacio", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Las antiguas salitreras de Humberstone: Fotolibro documental de los espacios industriales abandonados", r: "Archivo arqueológico industrial y memoria obrera nortina.", a: "Alarcón Cáceres, Constanza Belén", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un dispositivo de asistencia biomecánica para operarios de la industria láctea pesada del sur", r: "Mecanismos pasivos de arneses de distribución de carga ergonómica.", a: "Soto Villalobos, Diego Andrés", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Modelo estratégico de codiseño para el mejoramiento de la experiencia usuaria en el sistema público judicial", r: "Análisis cualitativo metodológico sistémico de servicios del Estado.", a: "Burgos Henríquez, Sofía Belén", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Grafiti y contracultura: Catálogo crítico de las expresiones gráficas urbanas en Valparaíso post-2019", r: "Investigación visual, fotografía e iconografía discursiva política.", a: "Silva Miranda, Camilo Ignacio", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Material termoformable aislante a base de cáscaras de almendra trituradas y resinas naturales de pino", r: "Desarrollo experimental material agroindustrial circular.", a: "Pizarro Astudillo, Francisco Javier", m: "Industrial y Servicios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Diseño UX/UI de una aplicación de asistencia digital interactiva para personas con discapacidad visual en el Metro", r: "Diseño de interfaces accesibles basadas en audio y respuestas hápticas.", a: "Garrido Astudillo, Diego Ignacio", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La textilería tradicional mapuche: Catálogo visual razonado de técnicas tradicionales de tejido en telar Witral", r: "Puesta en valor patrimonial e iconográfica de saberes tradicionales ancestrales.", a: "Muñoz Retamal, Pía Macarena", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un prototipo conceptual de andador ergonómico articulado para adultos mayores en entornos rurales irregulares", r: "Estructuras tubulares de aleaciones ligeras e ingeniería de producto.", a: "Ríos Mendoza, Marcelo Alonso", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Diseño estratégica y planes de servicio sostenible para redes comunitarias de ecoturismo en la Patagonia", r: "Modelos de intermediación cooperativa e investigación de servicios.", a: "Pérez Saavedra, Tomás Ignacio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "El canto de las ballenas: Novela gráfica educativa sobre las amenazas marinas en los archipiélagos del sur", r: "Narrativa visual pedagógica ambiental e ilustración naturalista detallada.", a: "Ortega Castillo, Natalia Andrea", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Biopolímero compostable flexible utilizando descartes orgánicos de ferias libres hortofrutícolas de Santiago", r: "Alternativa ecológica de empaques circulares biodegradables de corta vida.", a: "Medina Orellana, Esteban Andrés", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La memoria gráfica del circo tradicional chileno: Catálogo visual e impresos populares históricos", r: "Archivo tipográfico e iconográfico de soportes publicitarios populares.", a: "Fuenzalida Ossa, Camilo Ignacio", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un kit de herramientas mecánicas manuales ergonómicas optimizadas para labores de minería artesanal", r: "Componentes de acero forjado modulares de alta absorción de vibración.", a: "Lara Sanhueza, Cristián Andrés", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Anfibios de la cuenca del Maipo: Guía de campo infográfica ilustrada sobre especies vulnerables", r: "Diseño de información ambiental compleja y educación científica didáctica.", a: "Matus Barra, Francisco Javier", m: "Visual y Medios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Optimización ergonómica de los puestos de control técnico en plantas de tratamiento hídrico industriales", r: "Prevención de riesgos musculoesqueléticos ocupacionales a nivel objetual.", a: "Sanhueza Cid, Felipe Andrés", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "La persistencia del barro: Novela gráfica documental sobre la memoria social del terremoto de Chillán de 1939", r: "Narrativa visual e histórica de catástrofes y resiliencia urbana.", a: "Gajardo Neira, Diego Andrés", m: "Visual y Medios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Diseño UX/UI de una plataforma interactiva web para el archivo digital de relatos orales de derechos humanos", r: "Arquitectura de información accesible e interfaces orientadas a la memoria.", a: "Navarro Cáceres, Diego Andrés", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La alfarería de Gorbea: Catálogo visual razonado de técnicas tradicionales y soportes de exhibición interactivos", r: "Preservación patrimonial local y micro-oficio artesanal tradicional sureño.", a: "Cotes Pastén, Diego Ignacio", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un dispositivo autónomo de monitorización hídrica superficial para canales de regadío agrícolas", r: "Componentes estructurales plásticos de alta resistencia mecánica avanzados.", a: "Valenzuela Bravo, Marcelo Alonso", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Material compuesto termoaislante basado en la reutilización de restos de corcho de la industria embotelladora", r: "Revalorización sustentable de descartes de corcho para bioconstrucción.", a: "Troncoso Alarcón, Benjamín Tomás", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Mitos de la Araucanía: Cortometraje de animación stop-motion basado en relatos orales de comunidades pewenches", r: "Narrativa visual tradicional animada e investigación histórica profunda.", a: "Ñancupil Huaiquil, Camilo Ignacio", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Los antiguos molinos harineros de la Región del Maule: Guía visual e infografías de su arquitectura industrial", r: "Archivo arqueológico territorial y rescate documental patrimonial.", a: "Alarcón Cáceres, Gabriel Antonio", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un sistema de arneses de sujeción ergonómica para operarios de la poda industrial de árboles frutales", r: "Modelado industrial textil avanzado orientado a la biomecánica corporal.", a: "Soto Villalobos, Francisco Javier", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Modelo estratégico de diseño de servicios de salud preventiva para comunidades rurales aisladas del sur", r: "Metodologías cualitativas aplicadas al análisis de sistemas del Estado.", a: "Burgos Henríquez, Diego Ignacio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Lápices de la memoria: Catálogo crítico de las ilustraciones infantiles publicadas en revistas de los años 70", r: "Análisis iconográfico histórico y diseño editorial documental chileno.", a: "Silva Miranda, Marcelo Alonso", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Biotextil flexible a base de celulosa bacteriana cultivada en desecho de jugos cítricos industriales", r: "Desarrollo material alternativo sustentable basado en economía circular.", a: "Pizarro Astudillo, Constanza Belén", m: "Industrial y Servicios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Diseño UX/UI de una plataforma interactiva móvil para la gestión del agua en comités APR rurales", r: "Interfaces simplificadas accesibles para comunidades agrarias aisladas.", a: "Garrido Astudillo, Camilo Ignacio", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La cestería tradicional en hualo: Catálogo visual razonado de técnicas artesanales del Maule", r: "Preservación patrimonial de saberes e identidades micro-artesanales.", a: "Muñoz Retamal, Diego Ignacio", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un prototipo conceptual de estabilizador modular de carga para camiones logísticos de pequeña escala", r: "Estructuras ligeras mecánicas de aluminio forjado avanzadas.", a: "Ríos Mendoza, Cristián Andrés", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Modelo de gestión e identidad de marca social para cooperativas agroecológicas de la Región de Coquimbo", r: "Planes estratégicos de diseño de servicios con impacto territorial.", a: "Pérez Saavedra, Camilo Ignacio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "El latido del bosque: Novela gráfica de educación ambiental sobre las especies en peligro del bosque esclerófilo", r: "Narrativa visual pedagógica ecológica, ilustración botánica y de fauna.", a: "Ortega Castillo, Pía Macarena", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Biopolímero rígido compostable utilizando descartes de conchas de choritos de la industria mitilicultora", r: "Packaging circular biodegradable alternativo de origen marino.", a: "Medina Orellana, Constanza Daniela", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La memoria visual del cartel de cine pintado a mano en Chile: Catálogo y archivo histórico popular", r: "Investigación visual del diseño popular y digitalización tipográfica.", a: "Fuenzalida Ossa, Natalia Andrea", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de herramientas manuales de rescate ergonómicas optimizadas para personal de bomberos forestales", r: "Componentes mecánicos ligeros con alta absorción de sobrecarga muscular.", a: "Lara Sanhueza, Gabriel Antonio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Aves playeras de la costa central chilena: Guía de campo infográfica ilustrada sobre amenazas antrópicas", r: "Diseño de información ambiental compleja y educación escolar de campo.", a: "Matus Barra, Natalia Andrea", m: "Visual y Medios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Rediseño ergonómico objetual de los puestos de clasificación y selección en plantas de reciclaje de base", r: "Prevención de riesgos laborales ocupacionales y análisis de movimientos.", a: "Sanhueza Cid, Camilo Ignacio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Crónicas del terremoto de Valdivia de 1960: Novela gráfica documental basada en testimonios reales de sobrevivientes", r: "Narrativa visual e histórica de catástrofes y resiliencia territorial.", a: "Gajardo Neira, Pía Macarena", m: "Visual y Medios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Diseño UX/UI de una plataforma interactiva web para el mapeo comunitario de la calidad ambiental urbana", r: "Estrategias de interfaces centradas en el usuario y ciencia participativa.", a: "Navarro Cáceres, Sofía Belén", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La alfarería tradicional de Vichuquén: Catálogo de técnicas tradicionales de modelado y quema", r: "Rescate editorial patrimonial del oficio artesanal tradicional chileno.", a: "Cotes Pastén, Francisco Javier", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un sistema modular portátil de purificación de agua lluvia para campamentos de emergencia", r: "Componentes estructurales plásticos modulares rotomoldeados avanzados.", a: "Valenzuela Bravo, Diego Ignacio", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Material compuesto aislante termoacústico a base de paja de avena reciclada de cultivos de la Araucanía", r: "Desarrollo experimental material agroindustrial sustentable circular.", a: "Troncoso Alarcón, Camilo Ignacio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Mitos kawésqar: Cortometraje de animación stop-motion inspirado en los relatos ancestrales de los canales fueguinos", r: "Narrativa visual tradicional animada y rescate de memorias orales.", a: "Ñancupil Huaiquil, Natalia Andrea", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Las antiguas estaciones ferroviarias del desierto de Atacama: Fotolibro documental de la red salitrera", r: "Archivo arqueológico industrial y memoria obrera nortina.", a: "Alarcón Cáceres, Simón Pedro", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un arnés ergonómico de asistencia mecánica pasiva para trabajadores de la construcción civil", r: "Mecanismos pasivos ligeros para la reducción de sobrecarga lumbar.", a: "Soto Villalobos, Diego Andrés", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Modelo de gestión estratégica y co-diseño de servicios de reinserción social para jóvenes infractores", r: "Análisis sistémico cualitativo y diseño metodológico participativo.", a: "Burgos Henríquez, Fernando José", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "El cartel cultural chileno en los años 90: Catálogo crítico y archivo gráfico de la transición democrática", r: "Investigación visual, tipográfica e iconográfica discursiva política.", a: "Silva Miranda, Simón Pedro", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Material termoformable biodegradable a base de carozo de durazno triturado y aglutinantes vegetales locales", r: "Desarrollo experimental material agroindustrial circular sustentable.", a: "Pizarro Astudillo, Camilo Ignacio", m: "Industrial y Servicios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Diseño UX/UI de una aplicación móvil para la orientación espacial autónoma de personas sordas en hospitales", r: "Interfaces accesibles e inclusivas basadas en sistemas de mapas visuales.", a: "Garrido Astudillo, Natalia Andrea", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La textilería tradicional andina en Tarapacá: Catálogo visual razonado de técnicas tradicionales en telar de cintura", r: "Puesta en valor patrimonial e iconográfica de saberes ancestrales de género.", a: "Muñoz Retamal, Constanza Belén", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un kit modular de mobiliario escolar adaptable para aulas de escuelas en zonas insulares (Chiloé)", r: "Estructuras de madera local laminada y uniones mecánicas modulares.", a: "Ríos Mendoza, Diego Andrés", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Diseño estratégica y planes de servicio turístico sostenible para comunidades pehuenches de la Araucanía", r: "Modelos de intermediación comercial justa y gestión comunitaria de servicios.", a: "Pérez Saavedra, Francisco Javier", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "El canto de los glaciares: Novela gráfica educativa sobre el impacto del calentamiento global en campos de hielo", r: "Narrativa visual pedagógica ambiental e ilustración naturalista detallada.", a: "Ortega Castillo, Camilo Ignacio", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Biopolímero compostable flexible utilizando descartes de la industria procesadora de tomate en el Maule", r: "Alternativa ecológica de empaques circulares biodegradables de desecho agrícola.", a: "Medina Orellana, Diego Andrés", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La memoria gráfica del teatro popular chileno: Catálogo visual de afiches históricos del teatro obrero", r: "Archivo tipográfico e iconográfico de soportes comunicacionales comunitarios.", a: "Fuenzalida Ossa, Diego Ignacio", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de herramientas agrícolas manuales ergonómicas optimizadas para la recolección artesanal de hortalizas", r: "Componentes de aluminio ligero modulares de alta adaptabilidad postural.", a: "Lara Sanhueza, Felipe Andrés", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Lepidópteros de la cordillera central chilena: Guía de campo infográfica ilustrada sobre mariposas nativas", r: "Diseño de información científica compleja y educación didáctica ecológica.", a: "Matus Barra, Constanza Belén", m: "Visual y Medios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Optimización ergonómica de los puestos de envasado manual en pequeñas plantas lácteas artesanales", r: "Prevención de trastornos musculoesqueléticos ocupacionales a nivel objetual.", a: "Sanhueza Cid, Marcelo Alonso", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "La persistencia de la memoria obrera: Novela gráfica documental sobre el cierre de las minas de carbón en Lota", r: "Narrativa visual e histórica de desindustrialización y resiliencia social.", a: "Gajardo Neira, Tomás Ignacio", m: "Visual y Medios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Diseño UX/UI de una plataforma interactiva web para el archivo digital de música e instrumentación indígena", r: "Interfaces inclusivas y arquitectura de información multimedia accesible.", a: "Navarro Cáceres, Pía Macarena", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La alfarería de Río Bueno: Catálogo visual razonado de técnicas tradicionales y soportes interactivos", r: "Preservación patrimonial del micro-oficio artesanal tradicional sureño.", a: "Cotes Pastén, Sofía Belén", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un prototipo de celda de habitáculo de emergencia modular plegable de rápido despliegue físico", r: "Componentes estructurales plásticos alveolares mecánicos avanzados.", a: "Valenzuela Bravo, Fernando José", m: "Industrial y Servicios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Material compuesto termoaislante a partir de podas de ramas de kiwi trituradas y resinas naturales", r: "Desarrollo experimental material agroindustrial circular y bioconstrucción.", a: "Troncoso Alarcón, Camilo Ignacio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Mitos de la Patagonia: Cortometraje de animación stop-motion basado en relatos tradicionales aónikenk", r: "Narrativa visual tradicional animada e investigación histórica y cultural.", a: "Ñancupil Huaiquil, Sofía Belén", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Los antiguos secaderos de tabaco en el Valle de Aconcagua: Guía visual e infografías patrimoniales", r: "Archivo arqueológico territorial e investigación documental histórica.", a: "Alarcón Cáceres, Simón Pedro", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un sistema de arneses ergonómicos de distribución de carga para operarios de la cosecha de cítricos", r: "Modelado industrial textil avanzado optimizado para mitigar fatiga física.", a: "Soto Villalobos, Esteban Andrés", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Modelo estratégico de codiseño de servicios para el mejoramiento de la experiencia migratoria en la frontera norte", r: "Metodologías cualitativas aplicadas al análisis sistémico de atención estatal.", a: "Burgos Henríquez, Diego Ignacio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Trazos de la resistencia: Catálogo crítico de las ilustraciones en la prensa independiente de los años 80", r: "Análisis iconográfico histórico y diseño editorial documental chileno.", a: "Silva Miranda, Camilo Ignacio", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Biotextil flexible a partir del cultivo biológico de micelio de hongo sobre desecho de aserrín de pino", r: "Desarrollo de un sustituto de cuero sintético sustentable circular.", a: "Pizarro Astudillo, Valentina Paz", m: "Industrial y Servicios" },
        { g: "5. Experiencia de Usuario e Interacción Digital", t: "Diseño UX/UI de una plataforma interactiva móvil para la coordinación y fomento del comercio justo vecinal", r: "Interfaces simplificadas accesibles para redes locales comunitarias.", a: "Garrido Astudillo, Tomás Ignacio", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La cestería tradicional en totora de la laguna de Taguatagua: Catálogo visual razonado de técnicas tradicionales", r: "Preservación patrimonial e iconográfica de saberes artesanales locales.", a: "Muñoz Retamal, Carla Sofía", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un prototipo de exoesqueleto pasivo de asistencia de rodilla para trabajadores de la construcción civil", r: "Estructuras de aluminio ligero y mecanismos de asistencia biomecánica.", a: "Ríos Mendoza, Diego Andrés", m: "Industrial y Servicios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Modelo de gestión e identidad de marca social para redes de artesanas textiles de la Región de O'Higgins", r: "Planes estratégicos de diseño de servicios y desarrollo productivo local.", a: "Pérez Saavedra, Valentina Paz", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "El canto de la estepa: Novela gráfica sobre la biodiversidad y conservación de la fauna andina del extremo norte", r: "Narrativa visual pedagógica ambiental, ilustraciones y diseño editorial.", a: "Ortega Castillo, Fernando José", m: "Visual y Medios" },
        { g: "2. Ciencia de Materiales, Oficios y Producción Circular", t: "Biopolímero rígido utilizando desecho de cáscaras de pistacho y resinas orgánicas para contenedores modulares", r: "Alternativa ecológica de empaques circulares biodegradables de desecho seco.", a: "Medina Orellana, Benjamín Tomás", m: "Industrial y Servicios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "La memoria gráfica de la tipografía popular en letreros murales pintados a mano en Valparaíso: Archivo visual", r: "Investigación visual del diseño popular urbano y digitalización tipográfica.", a: "Fuenzalida Ossa, Simón Pedro", m: "Visual y Medios" },
        { g: "3. Fabricación Avanzada, Tecnologías y Estructuras", t: "Diseño de un dispositivo ergonómico de rescate rápido para personal de brigadas de emergencia mineras", r: "Componentes mecánicos estructurales de alta aleación de aluminio ligera.", a: "Lara Sanhueza, Marcelo Alonso", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "Aves rapaces del valle central de Chile: Guía de campo infográfica interactiva de educación naturalista", r: "Diseño de información ambiental compleja y divulgación didáctica científica.", a: "Matus Barra, Sofía Belén", m: "Visual y Medios" },
        { g: "6. Estrategia, Gestión y Pensamiento Investigativo", t: "Optimización ergonómica objetual de los puestos de empaque de salmón en plantas procesadoras del sur", r: "Prevención de trastornos musculoesqueléticos ocupacionales y análisis muscular.", a: "Sanhueza Cid, Gabriel Antonio", m: "Industrial y Servicios" },
        { g: "4. Comunicación Visual, Discurso y Narrativas", t: "La Villa: Narrativa gráfica desde el cotidiano periférico", r: "Narrativa gráfica sobre la vida en la periferia.", a: "Benítez Gazzano, Constanza Catalina", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Paleta Urbana : atlas infográfico de la indumentaria en el género urbano en Chile", r: "Atlas infográfico de indumentaria en género urbano.", a: "Bravo Miranda, Sofía Antonia", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Coverarts de la música urbana en Chile : diseño y representación visual de una identidad cultural contemporánea", r: "Investigación cualitativa sobre portadas y entorno digital.", a: "Bozán Araya, Josefina Victoria", m: "Visual y Medios" },
        { g: "1. Territorio, Patrimonio y Memorias Sociales", t: "Voxwave: Diseño de una experiencia híbrida entre lo físico y lo virtual basada en la estética Vaporwave", r: "Kit de armables y Realidad Aumentada (Vaporwave).", a: "Burgos Apolaya, Katherine Andrea", m: "Visual y Medios" }
    ];

    const tbody = document.getElementById("tabla-proyectos-body");

    // Función de renderizado dinámico e instantáneo
    function renderizar(lista) {
        tbody.innerHTML = "";
        lista.forEach(item => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td><span style="font-family: var(--sans); font-weight: 700; color: #444; font-size: 0.85rem;">${item.g}</span></td>
                <td>
                    <div style="font-family: var(--serif); font-size: 1.05rem; font-weight: 600; color: #111; margin-bottom: 4px;">${item.t}</div>
                    <div style="font-family: var(--sans); font-size: 0.82rem; color: #666; line-height: 1.3;">${item.r}</div>
                </td>
                <td>
                    <div style="font-family: var(--sans); font-weight: 600; color: #222;">${item.a}</div>
                    <div style="font-family: var(--sans); font-size: 0.8rem; color: var(--accent, #e8571a); font-weight: 500;">Mención: ${item.m}</div>
                </td>
            `;
            tbody.appendChild(fila);
        });
    }
    renderizar(proyectosDatos);

    function limpiarTexto(t) {
        return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    document.getElementById("elInputElectivos").addEventListener("input", function() {
        const busqueda = limpiarTexto(this.value);
        const filas = tbody.querySelectorAll("tr");

        filas.forEach(fila => {
            const contenido = limpiarTexto(fila.textContent);
            fila.style.display = contenido.includes(busqueda) ? "" : "none";
        });
    });
});
