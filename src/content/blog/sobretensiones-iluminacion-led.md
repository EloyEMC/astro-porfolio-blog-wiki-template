---
title: "Sobretensiones en iluminación LED: por qué una instalación correcta también puede fallar"
slug: "sobretensiones-iluminacion-led"
date: 2026-10-09
category: "Iluminación"
description: "Cómo distinguir sobretensiones transitorias y temporales, evaluar la protección de una instalación LED y diagnosticar fallos sin atribuir causas sin evidencia."
seoTitle: "Sobretensiones en iluminación LED: causas, protección y diagnóstico"
tags: [Iluminación, LED, Energía, Instalaciones eléctricas]
keywords:
  - sobretensiones iluminación LED
  - protección sobretensiones LED
  - fallos luminarias LED
  - SPD iluminación
author: "eloymartinez"
authorUrl: "https://www.linkedin.com/in/eloymartinezemc/"
authorImage: "/eloy_feria_iluminacion.webp"
image: /images/articles/sobretensiones-iluminacion-led/hero-sobretensiones-led.webp
image_alt: "Esquema conceptual de una sobretensión en una red de iluminación LED y sus etapas de protección y diagnóstico"
twitter_img: /images/articles/sobretensiones-iluminacion-led/hero-sobretensiones-led.webp
ogType: "article"
locale: "es_ES"
siteName: "Eloy Martínez Cuesta"
noindex: false
nofollow: false
---

Una luminaria LED puede fallar aunque el cuadro parezca correcto, el cableado cumpla su función y el producto tenga una ficha técnica sólida. La explicación no suele estar en una única pieza: depende del fenómeno eléctrico, la exposición del edificio, el driver, las protecciones, la puesta a tierra, la coordinación entre dispositivos y el mantenimiento.

Por eso, ante un fallo, la pregunta responsable no es «¿la luminaria era defectuosa?» ni «¿la instalación estaba mal?». Es: **¿qué fenómeno ocurrió, qué evidencias existen y cómo respondió el sistema?** Sin registros y diagnóstico de calidad eléctrica, una sobretensión no puede atribuirse a la luminaria.

## Qué es una sobretensión

Una sobretensión es una elevación de la tensión respecto de la condición de referencia del sistema. No todas tienen la misma duración ni el mismo origen, y esa diferencia cambia tanto el riesgo como la forma de investigarlo.

### Sobretensión transitoria

Una sobretensión transitoria es un evento breve, generalmente asociado a una perturbación impulsiva u oscilatoria. Puede aparecer por maniobras de cargas, conmutaciones de bancos de condensadores, desconexiones de cargas inductivas o efectos indirectos de descargas atmosféricas.

Su duración corta no significa que sea irrelevante. Puede someter al rectificador, al bus de continua, al aislamiento y a los componentes de conmutación del driver a un esfuerzo para el que la combinación de equipo y protección no estaba preparada. El resultado puede ser inmediato o quedar como degradación que se manifiesta más tarde.

### Sobretensión temporal

Una sobretensión temporal es una elevación sostenida durante más tiempo que un transitorio. Puede relacionarse con fallos de neutro, desequilibrios, problemas de red o determinadas condiciones de la instalación. No debe tratarse como si fuera simplemente un «pico».

La Guía-BT-23 española trata las sobretensiones transitorias y deja fuera de su alcance las sobretensiones temporales. Esa separación es importante: aplicar una recomendación pensada para impulsos a un fenómeno temporal puede llevar a una protección inadecuada o a un diagnóstico equivocado.

Las sobretensiones tampoco deben confundirse con sobrecorrientes, huecos de tensión, interrupciones o distorsión armónica. Una instalación puede experimentar varias perturbaciones a la vez, pero cada una requiere evidencia y análisis propios.

## De dónde puede llegar el problema

La exposición de una luminaria depende del edificio completo, no solo del circuito de iluminación.

- **Red de suministro:** una perturbación externa puede propagarse hasta la instalación del edificio. La existencia de un fallo en una luminaria no demuestra por sí misma que el origen estuviera en la red.
- **Maniobras internas:** motores, contactores, transformadores, cargas inductivas o equipos de compensación pueden generar perturbaciones al conectar o desconectar. La proximidad eléctrica y la topología del cableado influyen en el acoplamiento.
- **Descargas atmosféricas indirectas:** un rayo cercano puede acoplar energía por las redes eléctricas, de datos o por elementos metálicos, sin que exista un impacto directo en la luminaria.
- **Entorno y arquitectura:** recorridos largos, instalaciones exteriores, líneas compartidas y diferencias de potencial pueden aumentar la exposición. La evaluación depende de la instalación concreta.

En un sistema con control digital, una perturbación puede afectar también a fuentes auxiliares, pasarelas o comunicaciones. Si el proyecto utiliza control de iluminación, conviene separar la investigación de la alimentación de la investigación de la comunicación; [revisar las especificaciones eléctricas de una luminaria](/blog/leer-ficha-tecnica-luminaria/) permite identificar qué parte del sistema se está observando.

<figure>
  <img src="/images/articles/sobretensiones-iluminacion-led/flujo-red-evento-proteccion-diagnostico-mantenimiento.webp" alt="Flujo conceptual desde la red y el evento de sobretensión hasta la protección, el diagnóstico y el mantenimiento" />
  <figcaption>Esquema conceptual de la relación entre red, evento, protección, diagnóstico y mantenimiento. No representa un cableado ejecutable ni garantiza la protección de una instalación concreta.</figcaption>
</figure>

## El driver es parte del sistema de protección

El LED suele tolerar bien ciertas condiciones dentro de su diseño, pero la electrónica que convierte y regula la energía tiene límites concretos. El driver puede incorporar componentes de protección y filtrado, aunque eso no convierte automáticamente a la luminaria en un sistema de protección contra cualquier sobretensión.

Al leer una ficha técnica hay que distinguir, como mínimo:

- la inmunidad declarada del equipo y las condiciones del ensayo;
- la tensión de funcionamiento y el esquema de conexión previsto;
- las limitaciones de instalación, temperatura, cableado y entorno;
- la protección externa que el fabricante exige, recomienda o presupone;
- las condiciones de garantía y la evidencia que se solicita en caso de fallo.

Una cifra aislada no describe la robustez completa. El resultado de un ensayo de inmunidad no es una promesa de supervivencia ante cualquier evento real, y la presencia de un SPD en el cuadro no prueba que la energía que llega al driver esté coordinada con él.

## SPD, puesta a tierra y coordinación

Un SPD (dispositivo de protección contra sobretensiones) limita y deriva parte de la perturbación según su tecnología, ubicación, conexión y condiciones de funcionamiento. No «elimina» todo riesgo ni sustituye el diseño de la instalación.

La selección debe considerar el sistema eléctrico, el tipo de exposición, el esquema de conexión, la capacidad de descarga, la tensión soportada por los equipos y la coordinación con otros dispositivos. La ubicación importa: un dispositivo alejado del equipo protegido, con conductores de conexión inadecuados o sin la coordinación prevista, puede ofrecer una protección distinta de la que su etiqueta sugiere.

La puesta a tierra y los conductores de protección forman parte de ese camino de descarga. Una tierra no es un talismán que garantice por sí sola la protección; hay que verificar continuidad, conexiones, equipotencialidad, recorridos y el sistema de distribución aplicable. Tampoco es seguro deducir el estado de la tierra observando únicamente que exista un conductor verde y amarillo.

La coordinación incluye, según el caso, la relación entre SPD aguas arriba y aguas abajo, la distancia eléctrica, la impedancia de los conductores, el driver y los elementos de protección del propio equipo. IEC 61643-12 aborda precisamente la selección, operación, ubicación y coordinación de SPD en sistemas de baja tensión. El método concreto debe quedar en manos de un profesional competente y de la normativa aplicable al proyecto; no existe una combinación universal válida para todos los edificios.

## Inmunidad no es garantía

IEC 61547 establece requisitos de inmunidad electromagnética para equipos de iluminación, incluidas luminarias y módulos. IEC 61000-4-5 describe un ensayo de inmunidad frente a ondas de choque. Ambos documentos ayudan a entender qué se ha ensayado y bajo qué condiciones, pero un ensayo de laboratorio no reproduce automáticamente la instalación, el cableado ni el historial de perturbaciones de un edificio.

También conviene distinguir tres afirmaciones que suelen mezclarse:

1. **El equipo tiene una inmunidad declarada:** existe una condición de ensayo o una especificación del producto.
2. **La instalación tiene protección:** hay medidas instaladas que deben estar correctamente seleccionadas, conectadas y mantenidas.
3. **El fallo está cubierto por garantía:** la garantía depende del producto, las condiciones contractuales, la instalación y la evidencia del caso.

Ninguna de las tres afirmaciones prueba por sí sola las otras dos.

## Cómo investigar un fallo

Después de un fallo, la prioridad es preservar evidencias y evitar intervenciones inseguras. No se debe abrir, desconectar ni manipular una instalación energizada siguiendo instrucciones genéricas. La inspección y las mediciones corresponden a personal cualificado, con los procedimientos de seguridad del lugar.

Una investigación útil reúne, cuando estén disponibles:

- fecha, hora, ubicación y patrón del fallo;
- cantidad de equipos afectados y cantidad que continúa funcionando;
- modelo, lote, versión y fecha de instalación de luminarias y drivers;
- esquema unifilar, circuitos compartidos y cambios recientes;
- estado, modelo, ubicación y mantenimiento de los SPD;
- registros de protecciones disparadas, alarmas y control del sistema;
- mediciones o registros de calidad eléctrica realizados con equipos adecuados;
- condiciones meteorológicas y maniobras de cargas cercanas;
- fotografías del daño, conservando los equipos y componentes sin alterarlos;
- historial de mantenimiento, sustituciones y recurrencia del evento.

El patrón también importa, pero no reemplaza la medición. Que fallen las luminarias de una zona puede sugerir una relación con el circuito; que fallen varios equipos del edificio puede sugerir una exposición común. Son hipótesis para comprobar, no conclusiones.

## Lista de comprobación de proyecto y mantenimiento

Antes de poner en servicio una instalación LED, conviene pedir que el proyecto deje claro:

- qué perturbaciones se han considerado y cuáles quedan fuera del alcance;
- qué protección externa se ha previsto y con qué criterio de coordinación;
- cómo se verifica la puesta a tierra y la continuidad de los conductores de protección;
- qué condiciones de instalación presupone el fabricante del driver;
- qué documentación y registros se entregarán durante la puesta en marcha;
- qué señales deben activar una inspección posterior a una tormenta o maniobra relevante.

Durante el mantenimiento, hay que revisar el estado de los SPD según las indicaciones del fabricante y del diseño, documentar sustituciones y observar cambios en el patrón de fallos. Si el edificio incorpora medición o supervisión, sus registros pueden ser más valiosos que una explicación basada únicamente en el componente averiado.

La conclusión debe ser proporcional a la evidencia. Es razonable decir que un driver presenta daños compatibles con un esfuerzo eléctrico; no es razonable afirmar, sin más datos, que una sobretensión fue la causa ni que la luminaria era responsable. La responsabilidad puede repartirse entre producto, instalación, red, diseño, mantenimiento o condiciones de uso, pero solo un diagnóstico documentado permite establecerla.

## Evidencia normativa y fuentes

Las siguientes referencias se consultaron para separar los fenómenos, los ensayos de inmunidad y la protección de la instalación. Las normas completas son documentos de pago y deben aplicarse según la edición y jurisdicción correspondientes.

- **Guía-BT-23, Ministerio de Industria:** apartado de ámbito y tratamiento de sobretensiones transitorias; exclusión de las sobretensiones temporales. [PDF oficial](https://industria.gob.es/Calidad-Industrial/seguridadindustrial/instalacionesindustriales/baja-tension/Documents/bt/guia_bt_23_nov19R4.pdf).
- **IEC 60364-4-44:2024:** cláusulas 442, 443 y 444, sobre perturbaciones de tensión, protección frente a sobretensiones y perturbaciones electromagnéticas en instalaciones de baja tensión. [Ficha oficial IEC](https://webstore.iec.ch/en/publication/73668).
- **IEC 61643-12:2020:** selección y principios de operación, ubicación y coordinación de dispositivos de protección contra sobretensiones en sistemas de baja tensión. [Ficha oficial IEC](https://webstore.iec.ch/en/publication/32531).
- **IEC 61547:2020:** requisitos de inmunidad EMC para equipos de iluminación, incluidas luminarias y módulos. [Ficha oficial IEC](https://webstore.iec.ch/en/publication/62039).
- **IEC 61000-4-5:2014 + AMD1:2017:** ensayo de inmunidad frente a sobretensiones tipo onda de choque. [Ficha oficial IEC](https://webstore.iec.ch/en/publication/4223).

Estas fuentes aportan el marco técnico; no sustituyen el diagnóstico de una instalación concreta ni autorizan a intervenir sobre ella sin las competencias y medidas de seguridad necesarias.
