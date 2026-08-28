---
title: "DALI-2, D4i y DALI+: qué es cada cosa y cuándo importa realmente en un proyecto"
category: "Iluminación"
seoTitle: "DALI-2, D4i y DALI+: guía para elegir tecnología de control lumínico"
description: "Qué significan DALI-2, D4i y DALI+, qué relación tienen y qué criterios conviene revisar antes de especificarlos en un proyecto de iluminación."
date: 2026-08-28
modifiedDate: "2026-08-28T00:00:00Z"
tags: [Iluminación, Tecnología, Energía, Automatización]
keywords:
  - DALI-2
  - D4i
  - DALI+
  - control de iluminación
  - DALI Data
  - IEC 62386
  - proyecto de iluminación
author: "eloymartinez"
authorUrl: "https://www.linkedin.com/in/eloymartinezemc/"
authorImage: "/eloy_feria_iluminacion.webp"
ogType: "article"
locale: "es_ES"
siteName: "Eloy Martínez Cuesta"
noindex: false
nofollow: false
faqs:
  - question: "¿Qué es DALI?"
    answer: "DALI es un protocolo digital estandarizado para controlar y consultar equipos de iluminación mediante una comunicación bidireccional."
  - question: "¿Qué diferencia hay entre DALI y DALI-2?"
    answer: "DALI-2 amplía y ordena la especificación DALI, incorpora más tipos de dispositivos y añade un programa de certificación que permite comprobar la interoperabilidad de productos concretos."
  - question: "¿Qué significa que un producto sea DALI-2 certificado?"
    answer: "Significa que el producto ha pasado el proceso de certificación aplicable de DiiA y aparece en su Product Database. La certificación genérica DALI no equivale por sí sola a certificación DALI-2."
  - question: "¿Qué son los control devices en DALI-2?"
    answer: "Son dispositivos que generan o gestionan órdenes, como sensores, pulsadores o aplicaciones de control. No son lo mismo que los control gear que alimentan y regulan las luminarias."
  - question: "¿Qué aporta D4i?"
    answer: "D4i es una extensión certificada de DALI-2 orientada a incorporar datos normalizados de activos, energía y diagnóstico dentro de luminarias y sistemas compatibles."
  - question: "¿Qué datos define DALI Data?"
    answer: "DALI Data define, entre otros, datos de la luminaria en la Parte 251, información energética en la Parte 252 y datos de diagnóstico y mantenimiento en la Parte 253."
  - question: "¿D4i es una tecnología inalámbrica?"
    answer: "No. D4i describe capacidades y requisitos de interoperabilidad para dispositivos DALI-2, incluidos datos y comunicación intra-luminaire; no es un protocolo inalámbrico."
  - question: "¿Qué es DALI+?"
    answer: "DALI+ permite transportar comandos DALI mediante redes o carriers basados en IP, incluidos escenarios inalámbricos y cableados. Thread fue su primer carrier inalámbrico estandarizado."
  - question: "¿DALI+ elimina la infraestructura de un proyecto?"
    answer: "No. El carrier, la alimentación, la red, las pasarelas y la arquitectura del edificio siguen siendo decisiones del proyecto y deben especificarse y verificarse."
  - question: "¿Cómo elegir entre DALI-2, D4i y DALI+?"
    answer: "Primero hay que definir funciones, topología, datos, integración, puesta en marcha y mantenimiento. Después se comprueba qué tecnología y productos certificados cumplen realmente esos requisitos."
---

En iluminación aparecen muchas siglas que parecen describir generaciones consecutivas. DALI-2, D4i y DALI+ no forman una cadena en la que una versión sustituya automáticamente a la anterior: describen capas y capacidades diferentes. Entender esa relación evita convertir una etiqueta técnica en una decisión de proyecto.

La pregunta útil no es cuál de las tres tecnologías es “mejor”, sino qué necesita el edificio, qué información debe circular y qué infraestructura se puede mantener durante toda la vida útil de la instalación. Para situar el tema, conviene recordar que un proyecto de [iluminación técnica](/iluminacion/) empieza por el uso del espacio, no por el protocolo.

## Qué es DALI

DALI (Digital Addressable Lighting Interface) es un protocolo digital para controlar equipos de iluminación y consultar su estado. Su comunicación bidireccional permite enviar órdenes —por ejemplo, encender, apagar o regular— y recibir información del dispositivo.

La base técnica se articula en la familia de normas IEC 62386. La norma no convierte por sí sola cualquier producto en interoperable: las funciones implementadas, los perfiles y la comprobación de cada equipo siguen siendo relevantes.

DALI trabaja dentro de una arquitectura de control. Hay que definir alimentación del bus, cableado, direccionamiento, grupos, escenas, entradas, pasarelas y relación con otros sistemas. Por eso un producto con interfaz DALI no resuelve automáticamente la programación, la integración ni la puesta en marcha.

## DALI-2: protocolo, perfiles y certificación

DALI-2 es la evolución certificable del ecosistema DALI. La especificación incorpora un marco más amplio para los dispositivos de control y hace más explícitas las funciones que deben interoperar. En la documentación de la [DALI Alliance sobre DALI-2](https://www.dali-alliance.org/dali2/) se distinguen los equipos que ejecutan la regulación de la carga y los dispositivos que generan o gestionan órdenes.

### Certificación y Product Database

La certificación DALI-2 no es una afirmación genérica sobre una interfaz. DiiA comprueba resultados conforme a sus reglas de certificación y publica los productos certificados en la [Product Database oficial](https://www.dali-alliance.org/products). Un equipo que no aparece allí no debe presentarse como DALI-2 certificado.

Esto no significa que todo producto no certificado sea inútil, sino que la especificación pierde una evidencia importante de interoperabilidad. En una licitación o en una compra conviene comprobar el fabricante, el modelo exacto, la versión y las partes certificadas, no solo buscar el logotipo.

DALI-2 también amplía el papel de los **control devices**: sensores, pulsadores, controladores y otras entradas pueden participar en el sistema con funciones normalizadas. Es distinto de un **control gear**, que es el equipo que controla la fuente de luz. Confundir ambos conceptos puede producir una lista de materiales incompleta.

## D4i: una extensión de DALI-2 orientada a los datos

[D4i](https://www.dali-alliance.org/d4i) es una extensión de DALI-2. Todos los drivers y dispositivos de control D4i son también DALI-2, pero DALI-2 no implica que el equipo sea D4i. Su interés aparece cuando, además de controlar la luz, el sistema debe conservar información normalizada sobre la luminaria, la energía o el diagnóstico.

Los drivers D4i incorporan requisitos específicos, entre ellos los relacionados con las Partes 207 y 250–253. También se contempla la alimentación del bus por defecto en los drivers D4i, una condición que debe comprobarse al diseñar la instalación y no asumirse fuera del contexto certificado.

### DALI Data: Partes 251, 252 y 253

La [documentación oficial de DALI Data](https://www.dali-alliance.org/dali/data.html) organiza datos que pueden viajar y almacenarse de forma interoperable:

- **Parte 251:** datos de la luminaria y sus características.
- **Parte 252:** datos relacionados con el consumo y la energía.
- **Parte 253:** información de diagnóstico, estado y mantenimiento.

D4i favorece una relación más estrecha entre el driver y la luminaria, lo que suele describirse como comunicación **intra-luminaire**. Eso puede simplificar el acceso a datos de activos o de funcionamiento, pero no crea por sí solo una plataforma de gestión, un modelo de explotación ni un plan de mantenimiento predictivo. Esas capacidades dependen también de sensores, almacenamiento, software, reglas de análisis y operación.

## DALI+: llevar comandos DALI a otros carriers

DALI+ aborda otra cuestión: cómo transportar comandos y datos DALI mediante carriers basados en IP. Puede contemplar redes cableadas o inalámbricas, según la solución y el carrier utilizado. La [información de DALI+ e IP](https://www.dali-alliance.org/dali/ip.html) ayuda a separar el protocolo de control del medio que lo transporta.

Thread fue el primer carrier inalámbrico estandarizado para DALI+. Eso no convierte DALI+ en “DALI inalámbrico” sin más: la red, la seguridad, el direccionamiento, la alimentación, la cobertura, las pasarelas y la integración forman parte de la arquitectura. También existen escenarios cableados, por lo que la etiqueta no debe interpretarse como una eliminación automática del bus o de la infraestructura.

En un sistema DALI+ pueden coexistir la lógica de control DALI y una red de transporte con sus propias reglas. El proyectista debe comprobar qué funciones están disponibles de extremo a extremo, dónde se ejecutan las órdenes y qué ocurre si la red o un elemento intermedio no está disponible.

## Comparativa prudente

| Tecnología | Qué aporta principalmente | Qué no sustituye |
| --- | --- | --- |
| **DALI-2** | Control digital bidireccional y un marco de interoperabilidad certificable para control gear y control devices. | No sustituye el diseño lumínico, el cableado, la alimentación del bus, la programación ni la verificación del modelo exacto. |
| **D4i** | Extiende DALI-2 con requisitos para datos de activo, energía, diagnóstico y comunicación intra-luminaire. | No sustituye una plataforma de gestión, sensores adecuados, análisis de datos, mantenimiento ni una red IP. |
| **DALI+** | Transporta comandos DALI mediante carriers basados en IP, cableados o inalámbricos; Thread fue el primero estandarizado. | No sustituye la infraestructura de red, la alimentación, la ciberseguridad, las pasarelas ni la definición de funciones. |

## Criterios para decidir en un proyecto

Antes de escribir una tecnología en una memoria o una especificación, conviene responder estas preguntas:

1. **Qué se quiere controlar:** regulación, escenas, horarios, sensores, emergencia, integración con BMS u otras funciones.
2. **Qué datos son necesarios:** solo órdenes y estado, o también identificación de luminarias, energía y diagnóstico.
3. **Dónde debe vivir la inteligencia:** en el bus, en controladores locales, en una red IP, en una plataforma o en una combinación de capas.
4. **Qué topología y alimentación existen:** distancias, segmentación, pasarelas, disponibilidad de red y mantenimiento de la infraestructura.
5. **Cómo se verificará la compatibilidad:** modelos exactos, certificación en Product Database, partes implementadas y pruebas de puesta en marcha.
6. **Qué sucederá después de la entrega:** quién opera el sistema, quién interpreta los datos y qué soporte queda disponible.

La tecnología debería quedar vinculada a requisitos comprobables. En un [proyecto de iluminación](/proyectos/), una tabla de señales, una secuencia de funcionamiento y una estrategia de mantenimiento suelen ser más útiles que una lista de siglas.

<aside class="lighting-application">
<h2>LA TECNOLOGÍA NO ES EL PROYECTO</h2>
<p>DALI-2, D4i y DALI+ pueden resolver necesidades distintas, pero ninguna etiqueta reemplaza el análisis del espacio, la definición de funciones, la coordinación con otras instalaciones y la comprobación de lo que ocurrirá durante la explotación. Primero se define el problema; después se elige la tecnología que pueda resolverlo con límites y responsabilidades claros.</p>
</aside>

## Tres casos conceptuales

### 1. Oficina con regulación y presencia

En una oficina pequeña puede ser suficiente definir escenas, regulación y detección de presencia con DALI-2. Si además se necesita inventariar luminarias o consultar consumos, D4i podría aportar datos útiles, siempre que exista un sistema capaz de leerlos y utilizarlos.

### 2. Edificio con datos de explotación

En un edificio con muchas luminarias, los datos de activo, energía y diagnóstico pueden reducir tareas manuales de inventario. D4i puede ser una base técnica para obtenerlos, pero la utilidad final depende de cómo se almacenan, validan y convierten en acciones de operación.

### 3. Espacio donde la red es parte de la arquitectura

En una instalación donde el transporte IP o inalámbrico encaja con la infraestructura disponible, DALI+ puede ser una alternativa arquitectónica. La decisión debe incluir cobertura, seguridad, alimentación, continuidad de servicio y responsabilidades de red; no basta con sustituir la palabra “cableado” por “wireless”.

## Cinco errores habituales

1. **Tratar las siglas como generaciones sucesivas.** DALI-2, D4i y DALI+ resuelven preguntas diferentes y pueden relacionarse sin ser versiones lineales.
2. **Confundir el logotipo con la certificación.** Hay que comprobar el producto concreto en la [base de datos de certificación de DiiA](https://www.dali-alliance.org/certification), no solo aceptar una mención comercial.
3. **Suponer que D4i es inalámbrico.** D4i está centrado en capacidades DALI-2 y datos; no define por sí mismo el medio de transmisión.
4. **Prometer mantenimiento predictivo solo por instalar D4i.** Los datos son una materia prima, no un servicio completo de diagnóstico ni una estrategia de mantenimiento.
5. **Pensar que DALI+ elimina infraestructura.** Cambiar el carrier cambia la arquitectura: no elimina la necesidad de alimentación, red, seguridad, configuración y soporte.

Cuando el proyecto incluye mediciones, presupuesto y documentación de equipos, también importa que la información pueda mantenerse consistente entre herramientas. En ese contexto puede encajar revisar un flujo como [BC3Tools](/blog/bc3tools-herramientas-archivos-bc3/), sin confundir el intercambio de datos de presupuesto con la interoperabilidad del control de iluminación.

## Primero el proyecto. Después la tecnología

DALI-2 aporta una base de control e interoperabilidad certificable. D4i añade un marco para datos de luminaria, energía y diagnóstico dentro del ecosistema DALI-2. DALI+ define cómo transportar comandos DALI sobre carriers basados en IP, con opciones cableadas e inalámbricas.

La elección responsable consiste en traducir las necesidades del edificio a funciones, datos, infraestructura y responsabilidades verificables. Solo entonces tiene sentido comparar productos certificados, diseñar la red y decidir qué tecnología encaja. Para seguir relacionando estas decisiones con la práctica profesional, la sección de [tecnología](/tecnologia/) ofrece un contexto más amplio sobre herramientas y sistemas aplicados.

## Preguntas frecuentes

### ¿Qué es DALI?

DALI es un protocolo digital estandarizado para controlar y consultar equipos de iluminación mediante comunicación bidireccional.

### ¿Qué diferencia hay entre DALI y DALI-2?

DALI-2 amplía el marco DALI, incorpora más tipos de dispositivos y establece un programa de certificación para comprobar productos concretos.

### ¿Qué significa que un producto sea DALI-2 certificado?

Que ha pasado el proceso aplicable de DiiA y figura en su Product Database. Una certificación DALI genérica no equivale a DALI-2 certificado.

### ¿Qué son los control devices en DALI-2?

Son dispositivos que generan o gestionan órdenes, como sensores, pulsadores o controladores. Se diferencian del control gear que regula la carga.

### ¿Qué aporta D4i?

Extiende DALI-2 con requisitos para datos de activos, energía, diagnóstico y comunicación intra-luminaire.

### ¿Qué datos define DALI Data?

La Parte 251 trata datos de la luminaria, la 252 datos energéticos y la 253 datos de diagnóstico y mantenimiento.

### ¿D4i es una tecnología inalámbrica?

No. D4i define capacidades y requisitos del ecosistema DALI-2; no es un protocolo inalámbrico.

### ¿Qué es DALI+?

Es una forma de transportar comandos DALI mediante carriers basados en IP, cableados o inalámbricos. Thread fue su primer carrier inalámbrico estandarizado.

### ¿DALI+ elimina la infraestructura de un proyecto?

No. La alimentación, la red, la seguridad, las pasarelas y la arquitectura del edificio siguen siendo necesarias y deben verificarse.

### ¿Cómo elegir entre DALI-2, D4i y DALI+?

Definí primero funciones, datos, topología, integración y mantenimiento. Después comprobá qué tecnología y productos certificados cumplen esos requisitos.
