---
title: "Lo que he aprendido programando sin ser programador de profesión"
slug: "aprendiendo-a-programar"
category: "Tecnología"
seoTitle: "Aprender a programar sin ser programador de profesión | Eloy Martínez Cuesta"
description: "Lo que he aprendido al programar desde un oficio técnico: pensar en procesos y datos, automatizar con límites, validar resultados y colaborar con especialistas."
date: 2026-10-15
tags: [Tecnología, Programación, Automatización, Iluminación, Aprendizaje]
keywords:
  - aprender a programar
  - programar sin ser programador
  - programación para profesionales
  - aprender programación desde cero
  - automatización en iluminación
author: "eloymartinez"
authorUrl: "https://www.linkedin.com/in/eloymartinezemc/"
authorImage: "/eloy_feria_iluminacion.webp"
image: /images/articles/aprendiendo-a-programar/hero-aprendiendo-a-programar.webp
image_alt: "Escritorio conceptual que conecta un oficio técnico con el aprendizaje de programación"
twitter_img: /images/articles/aprendiendo-a-programar/hero-aprendiendo-a-programar.webp
ogType: "article"
locale: "es_ES"
siteName: "Eloy Martínez Cuesta"
noindex: false
nofollow: false
---

Aprender a programar no me convirtió en programador de profesión. Me ayudó a mirar de otra manera problemas que ya conocía: qué datos entran, qué decisiones se repiten, qué resultado espero y cómo puedo comprobarlo. Esa diferencia importa, porque una herramienta nueva no sustituye el criterio del oficio que la utiliza.

Escribo desde mi experiencia en un entorno técnico relacionado con la iluminación. Lo que sigue no es un curso ni una receta para cambiar de carrera. Son conclusiones provisionales sobre una práctica que me sirve para entender mejor el software, automatizar tareas concretas y colaborar con personas que tienen una especialización más profunda que la mía.

## No empecé queriendo ser programador

Mi punto de partida no fue una vocación por memorizar sintaxis. Fue la incomodidad de repetir tareas y de mover información entre documentos, hojas de cálculo y herramientas que no siempre hablan el mismo idioma. En iluminación aparecen problemas muy concretos: comparar fichas técnicas, ordenar datos de luminarias, preparar información para un presupuesto o detectar por qué una escena no responde como debería.

Al principio pensaba que programar consistía principalmente en aprender instrucciones. Con el tiempo, mi experiencia fue otra: la parte difícil era describir con precisión el problema. Antes de escribir una línea, tenía que decidir qué significaba cada dato, qué excepciones existían y cuál sería una salida aceptable.

Esto es una observación personal, no una regla universal. A otra persona puede resultarle más natural empezar por algoritmos, por interfaces o por un lenguaje concreto. En mi caso, el dominio profesional fue el contexto que dio sentido a los conceptos técnicos.

## El cambio: pensar en procesos y datos

Programar me obligó a volver explícitas decisiones que antes quedaban en la intuición o en una secuencia manual. Una tarea técnica puede descomponerse, de forma sencilla, en preguntas como estas:

- ¿Cuál es la entrada y en qué formato llega?
- ¿Qué información es fiable y cuál necesita revisión?
- ¿Qué transformación se debe hacer?
- ¿Qué casos normales y excepcionales hay?
- ¿Cómo sabré que la salida es correcta?

Variables, estructuras de datos, funciones y APIs dejaron de ser palabras aisladas cuando aparecieron dentro de esas preguntas. No aprendí una definición para repetirla, sino una forma de representar un proceso. Esa representación también revela sus límites: si una ficha de producto no incluye un dato, ningún script debería inventarlo silenciosamente.

La programación no elimina la complejidad del trabajo técnico. La hace más visible. Una automatización puede ahorrar una copia repetitiva y, a la vez, amplificar un criterio equivocado en cientos de registros. Por eso el objetivo no debería ser automatizar por automatizar, sino hacer más controlable una tarea cuyo resultado entendemos.

<figure>
  <img src="/images/articles/aprendiendo-a-programar/flujo-problema-aprendizaje-prueba-validacion.webp" alt="Flujo conceptual desde un problema técnico hacia aprendizaje, prueba y validación" />
  <figcaption>Esquema conceptual de un aprendizaje aplicado: partir de un problema, convertirlo en una pequeña práctica, probar el resultado y validarlo antes de usarlo. No representa un método universal ni sustituye la revisión del contexto profesional.</figcaption>
</figure>

## Proyectos pequeños con problemas reales

La práctica que mejor me ha funcionado ha sido empezar por una molestia acotada, con una entrada y una salida observables. Un proyecto pequeño permite aprender sin fingir que ya se comprende un sistema entero. También permite descartar una idea antes de convertirla en una dependencia difícil de mantener.

En ese recorrido, un ejemplo que reúne documentos, datos y formatos de intercambio es [automatizar un proceso repetitivo con criterio](/blog/dali-2-d4i-dali-plus-proyecto/). Lo menciono como caso de aprendizaje y de producto concreto, no como promesa de que toda tarea profesional pueda resolverse igual.

Un buen primer proyecto, desde mi experiencia, tiene estas características:

- trabaja con datos de prueba o con ejemplos públicos;
- resuelve una sola transformación o comprobación;
- permite comparar el resultado con una referencia conocida;
- deja claro qué casos no cubre;
- se puede repetir después de un cambio.

El tamaño reducido no significa que el problema sea trivial. Significa que podemos observarlo. GitHub recomienda que los cambios pequeños y las revisiones con contexto facilitan detectar problemas; esa idea también resulta útil para aprender: un cambio aislado permite entender mejor qué causó un resultado.

## Errores que enseñan, si se pueden ver

Una de las primeras lecciones fue que un error de sintaxis suele ser el problema más amable. El sistema avisa y se detiene. Más peligrosos son los resultados plausibles pero incorrectos: una unidad interpretada como otra, un campo vacío tratado como cero o una conversión que pierde información sin avisar.

Por eso intento separar tres momentos:

1. detectar qué ocurrió;
2. formular una hipótesis sobre la causa;
3. cambiar una cosa y volver a comprobar.

Copiar una solución encontrada en una búsqueda puede desbloquearme, pero no demuestra que la entienda. La documentación, los ejemplos y las herramientas de IA pueden ayudar a generar hipótesis o a explicar una alternativa. No deberían ocultar la entrada, la salida esperada ni la razón por la que una solución es segura para ese caso.

También aprendí a conservar ejemplos mínimos que reproduzcan un fallo, sin incluir datos laborales confidenciales. Un archivo anonimizado y pequeño suele enseñar más que un volcado completo del proyecto. Además, permite compartir la pregunta con otra persona sin exponer información que no corresponde.

## Automatización no es autonomía

Automatizar una tarea no equivale a transferirle toda la responsabilidad. En un flujo relacionado con iluminación, un programa puede ordenar catálogos, comprobar campos, convertir formatos o avisar de una inconsistencia. Eso no significa que pueda decidir por sí solo si una luminaria es adecuada, si un cálculo cumple las condiciones del proyecto o si una instalación física se comportará correctamente.

La validación debe estar pensada antes de ejecutar. Algunas comprobaciones que me parecen razonables son:

- comparar una muestra con una revisión manual;
- contar entradas, salidas y elementos descartados;
- informar de campos ausentes o ambiguos;
- comprobar unidades, rangos y formatos;
- guardar una explicación suficiente del resultado;
- definir quién revisa y qué ocurre si la automatización falla.

El NIST, en su **Secure Software Development Framework (SSDF) SP 800-218**, no presenta la calidad como una consecuencia automática de escribir código. Sus prácticas incluyen preparar el entorno, proteger el software, producir software bien asegurado y responder a vulnerabilidades, con actividades de pruebas, documentación, triage y verificación. El alcance principal del documento es el desarrollo seguro, no una guía completa para cada automatización profesional; aun así, ofrece una cautela transferible: un resultado debe poder revisarse y los problemas deben tener un tratamiento definido.

## Lo que sigue siendo difícil

No me parece honesto decir que, por programar algunas herramientas, ya puedo resolver cualquier problema de software. Hay límites concretos:

- no tengo la profundidad de quien trabaja a diario en arquitectura de sistemas, seguridad, rendimiento o desarrollo de producto;
- puedo no conocer requisitos ocultos de una plataforma o de una instalación;
- una prueba que funciona con datos de ejemplo puede fallar ante condiciones reales;
- mantener una herramienta exige tiempo, documentación y atención a cambios externos;
- la responsabilidad profesional no desaparece porque una salida la produzca un script.

Estos límites no invalidan aprender. Definen cuándo debo pedir ayuda. La práctica profesional de la ingeniería de software incluye pruebas, mantenimiento, juicio independiente y aprendizaje continuo, pero una referencia profesional no convierte automáticamente a un principiante en especialista. Conviene leer esas afirmaciones según su alcance: describen expectativas de práctica responsable, no una certificación de competencia por haber completado un proyecto.

## Cuando el software toca el mundo físico

La cautela aumenta cuando el software interactúa con elementos físicos. En iluminación, un error puede quedarse en una pantalla o llegar a una programación, un controlador, una red o una instalación. Un sistema de control puede tener estados, tiempos de respuesta, fallos de comunicación y consecuencias que no aparecen en un ejemplo aislado.

El **Software Engineering Institute**, en su trabajo sobre sistemas ciberfísicos y desarrollo de sistemas, destaca que los sistemas deben considerar la colaboración entre software y elementos físicos. No es una afirmación específica sobre cada proyecto de iluminación: es un marco de alcance amplio para sistemas donde ambas partes interactúan. La consecuencia práctica para mí es sencilla: una simulación o un archivo generado no reemplazan la prueba en el entorno adecuado, la documentación de la instalación ni la intervención del profesional competente.

En estos casos, el software puede ayudar a preparar, comprobar y registrar. La puesta en servicio, la seguridad, el cumplimiento normativo y las decisiones de diseño requieren el conocimiento correspondiente. Saber programar una parte del flujo no autoriza a ignorar esa frontera.

## Aprender con otras personas, no contra ellas

Programar desde otro oficio puede producir una falsa independencia. Después de resolver algunos problemas, es fácil confundir familiaridad con dominio. La colaboración corrige esa ilusión.

Yo aporto contexto sobre el problema, los datos y el uso cotidiano. Un especialista en software puede detectar riesgos de diseño, seguridad, rendimiento o mantenimiento que yo no veo. Un profesional de la instalación puede advertir que una solución cómoda en el ordenador no es viable en obra. Un experto en normativa puede señalar una condición que no aparece en mis ejemplos.

Para que esa colaboración sea útil, intento llevar una pregunta concreta, una descripción del comportamiento actual, ejemplos sanitizados y criterios para evaluar la respuesta. También procuro aceptar que la respuesta correcta puede ser no automatizar, reducir el alcance o reemplazar la idea por otra más simple.

## Lo que recomendaría a alguien que empieza

No recomendaría comenzar por una lista interminable de tecnologías. Empezaría por un problema pequeño que la persona ya pueda explicar y por una forma de saber si la solución funciona. Después, incorporaría conceptos a medida que el problema los haga necesarios.

La documentación de **MDN Web Docs**, en su guía **“Learn web development”**, estructura el recorrido desde los fundamentos hasta un nivel de comodidad para construir y entender proyectos web. Ese objetivo es más acotado que convertirse en experto y está pensado para desarrollo web; no es una medida universal de competencia. Me parece valioso precisamente por esa moderación: aprender puede significar alcanzar autonomía suficiente para seguir investigando, no dominar todo el campo.

La progresión que me resulta más realista es:

- describir el problema con ejemplos;
- aprender lo mínimo para representar datos y pasos;
- hacer una versión pequeña y observable;
- probar casos normales y errores previsibles;
- leer el resultado con criterio del dominio;
- documentar límites y mantenimiento;
- pedir una revisión cuando el impacto o la complejidad lo justifiquen.

La velocidad no es el indicador principal. Comprender por qué funciona, reconocer cuándo deja de funcionar y poder corregirlo vale más que producir una demo rápida.

## Conclusión: ampliar criterio

Lo más importante que he aprendido programando no es un lenguaje. Es que los problemas técnicos mejoran cuando sus datos, supuestos y decisiones dejan de estar implícitos. A veces eso conduce a una automatización. Otras veces conduce a una prueba manual mejor, a una conversación con un especialista o a la decisión de no construir nada todavía.

Programar desde un oficio técnico puede ampliar el criterio sin borrar los límites. Permite preguntar mejor, detectar tareas repetitivas, validar con más cuidado y entender qué parte del problema sigue necesitando experiencia humana. Ese me parece un resultado suficiente: no sustituir el aprendizaje ni a los especialistas, sino participar con más claridad en el trabajo que compartimos.

## Fuentes y alcance

- [MDN Web Docs: Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development): ruta educativa de desarrollo web, desde fundamentos hasta un nivel cómodo. No define por sí sola la competencia profesional en programación general.
- [GitHub Docs: About pull requests](https://docs.github.com/en/pull-requests/concepts/helping-others-review-your-changes): documentación sobre cambios propuestos, contexto y revisión colaborativa. La relación entre cambios pequeños y revisión más manejable es una práctica de colaboración, no una garantía de ausencia de errores.
- [NIST SP 800-218, Secure Software Development Framework (SSDF) Version 1.1](https://csrc.nist.gov/pubs/sp/800/218/final): prácticas de desarrollo seguro que incluyen pruebas, documentación, triage y verificación. Su alcance es la seguridad del desarrollo de software, no una metodología completa para cualquier proyecto técnico.
- [ACM/IEEE-CS Software Engineering Code of Ethics and Professional Practice](https://www.acm.org/code-of-ethics/software-engineering-code): responsabilidades profesionales, calidad, juicio y consideración del interés público. Es un código ético y profesional, no una guía paso a paso para aprender a programar.
- [Software Engineering Institute: Cyber-Physical Systems](https://www.sei.cmu.edu/blog/systems-engineering-and-software-engineering-collaborating-for-the-smart-systems-of-the-future/): contexto sobre sistemas donde software y elementos físicos interactúan. Sus cautelas son generales y deben complementarse con requisitos, normas y especialistas del proyecto concreto.
