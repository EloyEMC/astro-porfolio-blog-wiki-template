---
title: "BC3 y FIEBDC explicados: qué contiene un archivo de mediciones y cómo usarlo sin perder contexto"
category: "Tecnología"
seoTitle: "Qué es un archivo BC3 y cómo funciona FIEBDC"
description: "Una explicación para principiantes: versión, conceptos, unidades, descomposiciones, mediciones, precios y validación de un intercambio BC3/FIEBDC."
date: 2026-09-16
modifiedDate: "2026-08-29T00:00:00Z"
tags: [Tecnología, BC3, FIEBDC, Presupuestos, Mediciones]
keywords:
  - qué es BC3
  - FIEBDC BC3
  - archivo BC3
  - formato BC3 presupuesto
  - intercambio mediciones BC3
  - BC3Tools
  - abrir archivo BC3
  - exportar importar BC3
author: "eloymartinez"
authorUrl: "https://www.linkedin.com/in/eloymartinezemc/"
authorImage: "/eloy_feria_iluminacion.webp"
image: /images/articles/bc3-fiebc-explicado/flujo-bc3-horizontal-hero.webp
image_alt: "Diagrama horizontal del flujo de un archivo BC3 desde el origen hasta la comprobación"
twitter_img: /images/articles/bc3-fiebc-explicado/flujo-bc3-horizontal-hero.webp
ogType: "article"
locale: "es_ES"
siteName: "Eloy Martínez Cuesta"
noindex: false
nofollow: false
faqs:
  - question: "¿Qué es un archivo BC3?"
    answer: "BC3 es el nombre habitual del formato de intercambio FIEBDC para bases de precios, presupuestos, mediciones y certificaciones. Su contenido no es un presupuesto universal: depende de la versión, los registros incluidos y el programa que lo exporta o importa."
  - question: "¿Qué significa FIEBDC-3/2024?"
    answer: "Es la versión 2024 del formato definido por FIEBDC para intercambiar información de construcción. La especificación oficial y la compatibilidad del programa deben comprobarse antes de usar sus posibilidades."
  - question: "¿Qué es una descomposición en BC3?"
    answer: "Es la relación entre un concepto compuesto y los conceptos que lo forman, con sus cantidades o rendimientos. Permite representar, por ejemplo, una partida y sus materiales, mano de obra o equipos."
  - question: "¿Un archivo BC3 conserva siempre todas las mediciones?"
    answer: "No necesariamente. La exportación puede omitir posibilidades del formato o el programa de destino puede no importarlas. Hay que comprobar unidades, fórmulas, líneas, capítulos, descomposiciones y resultados después de importar."
  - question: "¿Cómo se valida un BC3?"
    answer: "Primero se verifica la estructura con el comprobador oficial o una herramienta compatible con la versión declarada. Después se hace una revisión semántica: se compara una muestra con el origen y se confirma que conceptos, unidades, mediciones, descomposiciones y precios conservan su significado."
---

Un archivo BC3 puede parecer una colección de líneas difícil de leer, pero el problema más importante no es la sintaxis. Es asumir que, porque un programa lo abre, todos entendieron lo mismo.

BC3 es el nombre habitual del intercambio definido por FIEBDC para bases de precios, presupuestos, mediciones y certificaciones. No es “el archivo universal de un presupuesto” ni una garantía de que dos programas reconstruyan idéntico contexto.

Para empezar sin perderse, leelo en este orden:

> **versión → concepto → unidad → descomposición → medición → precio → validación**

Ese recorrido permite preguntar qué representa cada pieza, qué relación tiene con las demás y qué se debe comprobar después de una importación.

![Diagrama del recorrido de un archivo BC3 desde la versión hasta la validación, pasando por concepto, unidad, descomposición, medición y precio](/images/articles/bc3-fiebc-explicado/flujo-version-a-validacion.webp)

*Este diagrama es una guía conceptual: ordena las preguntas de lectura, pero no representa un archivo concreto ni una secuencia obligatoria de todos los programas. No contiene cifras de obra y no demuestra compatibilidad entre aplicaciones.*

## Versión: primero, qué contrato estás usando

FIEBDC es la asociación que define y mantiene el formato de intercambio. La versión vigente publicada por la asociación es **FIEBDC-3/2024**, en vigor desde el 1 de enero de 2024. La [especificación oficial](https://www.fiebdc.es/web2/datos/uploads/Formato-FIEBDC-3-2024.pdf) describe sintaxis, separadores, tipos de registro, campos y posibilidades del formato.

La versión no es un dato decorativo. Determina qué puede expresar el archivo y qué debe saber interpretar el programa. Un software puede abrir un BC3 antiguo, aceptar una parte de una versión nueva o traducir ciertos registros perdiendo información.

Antes de intercambiar, anotá:

- versión declarada del BC3;
- programa y versión que lo exportó;
- programa y versión que lo importará;
- codificación y separadores utilizados;
- registros que el caso necesita conservar;
- advertencias o funciones no soportadas.

FIEBDC publica una página de [formatos vigentes y comprobador BC3](https://www.fiebdc.es/format-fiebdc/). También informa de compatibilidades concretas por programa; por ejemplo, su página de [programas y versiones](https://www.fiebdc.es/programas-y-versiones/) indica soporte de FIEBDC-3/2024 en Presto a partir de Presto 2026. Es una evidencia de ese programa y versión, no una afirmación sobre todo el ecosistema.

## Concepto: la unidad básica de significado

Un concepto es una entidad identificada por un código y una descripción. Puede representar un material, una unidad de obra, mano de obra, maquinaria, equipo o partida compuesta, según el uso que haga el presupuesto.

Pensalo como una ficha con identidad, no como una línea de texto. Para usarlo de forma segura necesitás saber:

- código;
- descripción;
- tipo o naturaleza del concepto;
- unidad;
- precio, si corresponde;
- descomposición, si es compuesto;
- información adicional y relaciones que el archivo conserve.

### Ejemplo sintético — concepto

> **Ejemplo sintético, no extraído de una base real:**
>
> `MAT-001` · “Luminaria de ejemplo” · unidad `ud` · precio `P`

Las letras `MAT-001`, `ud` y `P` son marcadores didácticos. No describen un producto ni un precio real. El punto del ejemplo es mostrar que el código identifica, la unidad explica cómo se mide y el precio debe tener una fuente y unas condiciones.

Dos archivos pueden usar descripciones parecidas para conceptos distintos. No fusiones conceptos por similitud textual sin confirmar código, unidad, fabricante, fecha y alcance.

## Unidad: qué significa una cantidad

La unidad vincula el concepto con una medición o un rendimiento. `ud`, `m`, `m²`, `m³`, `kg` y `h` no son etiquetas intercambiables: cambian la forma de calcular cantidades y precios.

La unidad también puede estar condicionada por la descripción. Una partida medida en metros puede necesitar longitud, mientras una medida en metros cuadrados puede necesitar largo y ancho. Si el archivo solo conserva el resultado final y no el desglose, el presupuesto puede seguir siendo utilizable, pero ya no conserva el mismo nivel de explicación.

Al revisar una importación, buscá estos errores:

- unidad vacía convertida en una unidad por defecto;
- coma decimal reinterpretada como separador;
- `m²` convertido en `m2` sin una regla compatible con el destino;
- cantidades redondeadas sin registro;
- unidad del concepto confundida con unidad de uno de sus componentes.

Una unidad ausente no significa cero. Si no se declara o no se puede interpretar, el estado correcto es pendiente o desconocido hasta revisarlo.

## Descomposición: de qué está hecha una partida

Una partida compuesta puede depender de varios conceptos: materiales, mano de obra, maquinaria y otros componentes. La **descomposición** expresa esa relación y el rendimiento o cantidad que corresponde a cada componente.

Por ejemplo, una unidad de obra podría tener:

- una referencia a un material;
- otra a una hora de mano de obra;
- otra a un equipo;
- una cantidad de cada uno;
- reglas de cálculo, porcentajes o información adicional.

### Ejemplo sintético — relación entre conceptos

> **Ejemplo sintético, sin precios ni rendimientos reales:**
>
> `PART-001` “Partida de ejemplo”
>
> - `MAT-001` “Material de ejemplo” · cantidad `Q₁`
> - `MO-001` “Mano de obra de ejemplo” · cantidad `Q₂`
>
> La relación significa que `PART-001` depende de esos componentes. No permite deducir qué trabajo real representa, cuánto cuesta ni si faltan componentes. Para responder eso hay que revisar el origen y la documentación del presupuesto.

La descomposición es uno de los lugares donde una importación aparentemente correcta puede quedarse corta. Un programa puede mostrar la partida y su precio total sin mostrar todos los componentes, o puede importar los componentes pero perder rendimientos, porcentajes, textos o referencias.

Por eso no alcanza con preguntar “¿se abrió?”. Preguntá: **¿se reconstruyó la relación completa y se conservan las cantidades?**

## Medición: cuánto se aplica en una obra

Una medición expresa la cantidad de una partida en un contexto de obra, capítulo o línea de presupuesto. Puede ser un resultado directo o un desglose con dimensiones, unidades parciales, fórmulas y observaciones.

Una medición completa puede necesitar:

- referencia al concepto;
- capítulo o ubicación;
- cantidad total;
- dimensiones o líneas que la componen;
- signo, fórmula o criterio de cálculo;
- unidad y precisión;
- texto o información de seguimiento.

### Ejemplo sintético — medición desglosada

> **Ejemplo sintético, deliberadamente abstracto:**
>
> `cantidad = largo × ancho × número de zonas`
>
> Si el archivo conserva solo la cantidad final, podés obtener un importe, pero no necesariamente auditar de dónde salió. Si conserva las dimensiones, el destino debe importarlas de forma compatible para que la revisión siga siendo posible.

El estándar puede representar más información de la que un programa muestra en su pantalla. La pérdida puede estar en la exportación, en la importación o en la interfaz que oculta campos que sí están almacenados. Compará el archivo y el resultado, no solo la vista del programa.

## Precio: una cifra con tipo y contexto

Un precio no es simplemente un número. Para interpretarlo, necesitás saber a qué concepto, unidad, fecha, tarifa y condición corresponde.

Diferenciá al menos:

- precio de un concepto simple;
- precio calculado de un concepto compuesto;
- precio de lista, coste, importe o precio neto, cuando el caso los distinga;
- porcentaje, recargo o ajuste;
- moneda y precisión;
- fecha de vigencia y fuente.

### Ejemplo sintético — precio sin falsa precisión

> **Ejemplo sintético:**
>
> `importe = cantidad × precio unitario`
>
> La fórmula muestra la relación, pero no inventa una cantidad, un precio ni un redondeo. Si una fuente dice “desde”, “según tarifa” o “a confirmar”, esa condición forma parte del dato y no debe desaparecer al importar.

El precio de un concepto compuesto puede depender de la descomposición. Si un componente cambia, el precio calculado puede cambiar aunque el código de la partida permanezca igual. Registrá la fuente y la fecha para distinguir una actualización legítima de un error de importación.

## Qué puede perderse entre exportar e importar

Los problemas más frecuentes no siempre producen un error visible. Puede ocurrir que:

- los códigos se recorten o cambien de formato;
- una unidad se normalice de forma incompatible;
- una nota quede fuera de la tabla;
- una descomposición llegue incompleta;
- una medición pierda dimensiones o fórmulas;
- un precio se redondee con otra precisión;
- un capítulo o relación jerárquica desaparezca;
- un registro de una versión nueva se ignore sin bloquear la importación.

La compatibilidad tampoco se demuestra porque una aplicación anuncie “importa BC3”. Hay que identificar versión, registros y límites. La documentación de RIB sobre [exportación e importación FIEBDC](https://www.rib-software.com/pdf/es/exportacion-e-importacion-formato-fiebdc.pdf), por ejemplo, documenta el comportamiento de un producto concreto; no define lo que todos los programas harán.

## Cómo validar un intercambio BC3

![Flujo conceptual de PDF a BC3 con extracción, revisión humana, conceptos, mediciones, precios y comprobación](/images/articles/bc3-fiebc-explicado/flujo-pdf-bc3-revision.webp)

*Este esquema resume un caso de intercambio asistido: una herramienta puede proponer una extracción y una persona debe aceptar, corregir o rechazar antes de generar el BC3. Es un diagrama original, no una captura de software ni una promesa de conversión automática; la comprobación estructural y la revisión semántica siguen siendo necesarias.*

La validación debe tener dos capas.

### 1. Validación estructural

Usá el [BC3 Checker oficial](https://www.fiebdc.es/format-fiebdc/) o una herramienta compatible con la versión declarada. Esta comprobación busca problemas del archivo: sintaxis, registros, separadores, campos y reglas formales.

Que el checker pase es necesario, pero no suficiente. Un archivo puede ser formalmente válido y contener un concepto equivocado, una unidad mal asignada o una relación que no corresponde al origen.

### 2. Validación semántica

Elegí una muestra y compará:

- código y descripción;
- unidad;
- concepto simple o compuesto;
- componentes y rendimientos;
- capítulos y jerarquía;
- mediciones y dimensiones;
- precios, precisión, moneda y fecha;
- textos, observaciones y campos críticos.

Después reimportá el BC3 en el programa de destino y repetí la comparación. Si el uso es crítico, conservá el archivo de origen, el archivo exportado, la versión de los programas, los avisos y el resultado de la revisión.

## BC3Tools y el papel de una herramienta

Una herramienta puede ayudar a transformar, revisar o convertir información, pero su nombre no sustituye al estándar. BC3Tools publica, entre otras, funciones para [convertir hojas de Excel a BC3](https://bc3tools.com/excel-to-bc3) y [pasar un archivo BC3 a Excel](https://bc3tools.com/bc3-to-excel). La documentación y el alcance de cada operación deben leerse para el caso concreto.

Esto conecta con [estructurar información de producto para reutilizarla](/blog/dali-2-d4i-dali-plus-proyecto/), donde el problema está antes de la exportación: convertir un documento heterogéneo en evidencia estructurada, revisar el significado y recién entonces generar un intercambio. Este artículo se concentra en cómo leer ese intercambio; no repite el proceso de extracción del PDF.

No confundas tres afirmaciones:

1. “La herramienta genera un archivo con extensión `.bc3`”.
2. “El archivo cumple la sintaxis de una versión concreta”.
3. “El archivo conserva correctamente el significado que necesita mi presupuesto”.

Cada afirmación necesita una comprobación distinta.

## Checklist para principiantes

Antes de confiar en un BC3, preguntá:

- ¿Qué versión FIEBDC declara?
- ¿Quién lo exportó y con qué versión de programa?
- ¿Qué conceptos incluye y cómo se identifican?
- ¿Las unidades son explícitas y coherentes?
- ¿Las descomposiciones conservan componentes y cantidades?
- ¿Las mediciones conservan líneas, dimensiones y fórmulas necesarias?
- ¿Los precios tienen tipo, fecha, moneda y fuente?
- ¿Qué registros o funciones no soporta el destino?
- ¿Pasó el comprobador estructural?
- ¿Se comparó una muestra después de reimportar?

Si una respuesta no está disponible, marcala como desconocida o pendiente. No rellenes el hueco con la suposición de que el programa “ya lo habrá resuelto”.

## Un contrato de datos, no una promesa universal

FIEBDC-3/2024 aporta un lenguaje común para intercambiar información de construcción. El significado práctico aparece cuando versión, conceptos, unidades, relaciones, mediciones y precios se mantienen juntos y pueden verificarse.

Un BC3 correcto no es el que simplemente abre. Es el que permite saber qué llegó, qué no llegó, cómo se interpretó y contra qué origen se comprobó.

La próxima vez que recibas uno, no empieces por importarlo a ciegas. Leé primero la versión; seguí cada concepto hasta su unidad y su descomposición; comprobá cómo se miden y valorizan; validá la estructura y reimportá una muestra. Esa secuencia convierte un archivo opaco en un intercambio que se puede revisar.

## Fuentes consultadas

- FIEBDC, **Formato FIEBDC-3/2024**, especificación oficial de registros, campos, sintaxis y posibilidades del formato: [PDF oficial](https://www.fiebdc.es/web2/datos/uploads/Formato-FIEBDC-3-2024.pdf), vigente desde el 1 de enero de 2024.
- FIEBDC, **BC3 format and official checker**, formatos en vigor y comprobador BC3: [fiebdc.es/format-fiebdc](https://www.fiebdc.es/format-fiebdc/), consultado el 29 de agosto de 2026.
- FIEBDC, **Programas y versiones**, compatibilidades publicadas por programa y versión: [fiebdc.es/programas-y-versiones](https://www.fiebdc.es/programas-y-versiones/), consultado el 29 de agosto de 2026.
- RIB Software, **Exportación e importación del formato FIEBDC**, documentación técnica de un software concreto; no equivale a una definición universal: [PDF técnico](https://www.rib-software.com/pdf/es/exportacion-e-importacion-formato-fiebdc.pdf).
- BC3Tools, documentación de sus operaciones de conversión **Excel to BC3** y **BC3 to Excel**, consultadas el 29 de agosto de 2026.
