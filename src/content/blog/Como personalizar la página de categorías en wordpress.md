---
title: Cómo Personalizar la Página de Categorías en WordPress
description: Las páginas de categorías son una parte esencial de cualquier sitio web, si utilizas WordPress exploraremos cómo puedes personalizarla.
date: 2025-03-23
tags: [Diseño WEB, Wordpress, DEV ]
draft: false
image: /personalizar-y-anadir-imagen-destacada-en-categorias-de-wordpress.webp
image_alt: "Cómo Personalizar la Página de Categorías en WordPress"
twitter_img: /Eloy-martinez-cuesta-web.webp
twitterCreator: "@eloy_emc"
twitterSite: "@eloy_emc"
keywords:
  - Plastico
  - Polimeros
  - Quimica  
author: "eloymartinez"
authorUrl: "https://www.linkedin.com/in/eloymartinezemc/"
authorImage: "/eloy_feria_iluminacion.webp"
publishedDate: "2023-08-25T00:00:00Z" # Fecha de publicación en formato ISO
modifiedDate: "" # Puedes actualizarlo dinámicamente si es necesario
ogType: "article" # Cambia a 'website' si es una página general
locale: "es_ES"
siteName: "Eloy Martínez Cuesta"
noindex: false # Cambiar a true si no quieres que los buscadores indexen este post
nofollow: false # Cambiar a true si no quieres que los enlaces del post sean seguidos por buscadores
faqs:
  - question: "¿Qué son las páginas de categorías en WordPress?"
    answer: "Las páginas de categorías en WordPress son páginas que agrupan y muestran entradas (posts) relacionadas con una categoría específica. Estas páginas son útiles para organizar el contenido de un sitio web y mejorar la navegación para los usuarios."

  - question: "¿Por qué es importante personalizar las páginas de categorías en WordPress?"
    answer: "Personalizar las páginas de categorías en WordPress es importante porque permite mejorar la experiencia del usuario, optimizar el diseño para SEO, y destacar visualmente el contenido de cada categoría. Además, una buena personalización puede aumentar el tiempo de permanencia en el sitio y mejorar la tasa de conversión."

  - question: "¿Se puede personalizar la página de categorías sin usar código?"
    answer: "Sí, es posible personalizar la página de categorías sin usar código mediante el uso de plugins como Elementor, Category Page Enhanced o Category Templates. Estos plugins ofrecen opciones de personalización mediante interfaces gráficas fáciles de usar."

  - question: "¿Qué es un Child Theme y por qué es recomendable usarlo para personalizar WordPress?"
    answer: "Un Child Theme es un tema secundario que hereda las funcionalidades y estilos de un tema principal (parent theme). Es recomendable usarlo para personalizar WordPress porque permite realizar modificaciones sin afectar el tema principal, lo que facilita las actualizaciones y evita la pérdida de cambios."

  - question: "¿Cómo se añade una imagen a una categoría en WordPress?"
    answer: "Para añadir una imagen a una categoría en WordPress, puedes usar el plugin Advanced Custom Fields (ACF) para crear un campo de imagen en el formulario de categorías. Luego, debes modificar el archivo `functions.php` del Child Theme y los archivos de plantilla para mostrar la imagen en la página de la categoría."

  - question: "¿Qué formatos de imagen son recomendables para las páginas de categorías?"
    answer: "Los formatos recomendables para las imágenes en las páginas de categorías son JPEG (para imágenes con buena calidad y tamaño reducido) y PNG (para imágenes con transparencia). Además, es importante optimizar las imágenes para web para garantizar un buen rendimiento."

  - question: "¿Cómo afecta la personalización de las páginas de categorías al SEO?"
    answer: "La personalización de las páginas de categorías puede mejorar el SEO al permitir la inclusión de textos optimizados, imágenes con etiquetas alt, y una estructura de contenido más clara. Esto ayuda a los motores de búsqueda a entender mejor el contenido y mejorar el posicionamiento."

  - question: "¿Qué herramientas se pueden usar para probar la visualización responsiva de las páginas de categorías?"
    answer: "Puedes usar herramientas como el modo de desarrollo del navegador (DevTools), servicios en línea como BrowserStack, o plugins de WordPress para probar la visualización responsiva de las páginas de categorías en diferentes dispositivos y tamaños de pantalla."

  - question: "¿Es necesario realizar mantenimiento después de personalizar las páginas de categorías?"
    answer: "Sí, es recomendable realizar mantenimiento periódico después de personalizar las páginas de categorías, especialmente después de actualizaciones de WordPress, temas o plugins. Esto asegura que las personalizaciones sigan funcionando correctamente y no causen conflictos."
---
Las páginas de categorías son una parte esencial de cualquier sitio web que organice su contenido en diferentes temas o categorías. Si utilizas WordPress como plataforma para tu sitio web, tienes la oportunidad de personalizar estas páginas de categorías para mejorar la apariencia y la experiencia del usuario. En este artículo, exploraremos cómo puedes personalizar la página de categorías en WordPress de acuerdo con tus necesidades y preferencias. **¿Te ayuda en el SEO? No dejes de leer el artículo para descubrirlo.**

## Contenido

- [Contenido](#contenido)
- [Comprender la Estructura de las Páginas de Categorías en WordPress](#comprender-la-estructura-de-las-páginas-de-categorías-en-wordpress)
- [Seleccionar el Método de Personalización](#seleccionar-el-método-de-personalización)
  - [Personalización Sin Código con Plugins de WordPress](#personalización-sin-código-con-plugins-de-wordpress)
    - [Plugins de Personalización](#plugins-de-personalización)
  - [Personalización Con Código](#personalización-con-código)
    - [Creación de un Child Theme](#creación-de-un-child-theme)
    - [Crear Campo Imagen](#crear-campo-imagen)
    - [Incluir Consulta en `functions.php` del Child Theme](#incluir-consulta-en-functionsphp-del-child-theme)
- [Resolución y Formato](#resolución-y-formato)
  - [Resolución](#resolución)
  - [Formato](#formato)
- [Tamaños Recomendados](#tamaños-recomendados)
  - [Imagen Destacada en Entradas o Páginas](#imagen-destacada-en-entradas-o-páginas)
  - [Miniaturas y Galerías](#miniaturas-y-galerías)
    - [Cabecera (Header) o Imagen de Portada](#cabecera-header-o-imagen-de-portada)
- [Optimización para SEO y Rendimiento](#optimización-para-seo-y-rendimiento)
- [Pruebas y Visualización Responsiva](#pruebas-y-visualización-responsiva)
- [Mantenimiento Continuo](#mantenimiento-continuo)
- [Faqs sobre: Cómo Personalizar la Página de Categorías en WordPress](#faqs-sobre-cómo-personalizar-la-página-de-categorías-en-wordpress)

---

## Comprender la Estructura de las Páginas de Categorías en WordPress

Antes de sumergirnos en la personalización, es importante comprender cómo WordPress organiza y muestra las páginas de categorías. Por defecto, WordPress utiliza una plantilla predeterminada para mostrar estas páginas, y esta plantilla puede variar según el tema que estés utilizando. Normalmente, verás una lista de entradas (posts) que pertenecen a una categoría específica.

Si has decidido indexar las categorías, sería interesante poder personalizar estas páginas para que tengan un texto optimizado para el SEO, una imagen para cada categoría, y más.

---

## Seleccionar el Método de Personalización

Cuando se trata de personalizar la página de categorías en WordPress, tienes dos enfoques principales: personalización con plugins y personalización con código. La elección entre estos enfoques depende de tus habilidades técnicas y preferencias.

### Personalización Sin Código con Plugins de WordPress

Partiendo del supuesto de que conoces qué son las categorías y su importancia en la estructura de tu web, lo primero es acceder a la edición de las categorías y tener claro qué es lo que necesitas o quieres tener.

![Ejemplo de panel de creación de categorías](/EMC-categorias-wordpress.webp)

En las siguientes imágenes se muestra un ejemplo del panel de creación de categorías. Observa la diferencia entre ambas:

![Añadir categorías en WordPress](/EMC-anadir-categorias-wordpress.webp)

![Añadir categorías modificada en WordPress](/EMC-anadir-categorias-modificada-wordpress-e1692179220274.webp)

Como podéis observar, se ha añadido la imagen de la categoría, algo muy interesante si quieres hacer un menú por clusters o categorías dinámico y con imágenes. También es una parte importante a la hora de personalizar la página de la categoría correspondiente, puesto que la puedes añadir a la cabecera.

#### Plugins de Personalización

Si deseas opciones más avanzadas de personalización, considera utilizar plugins específicos como «Category Page Enhanced» o «Category Templates». Estos plugins pueden agregar funcionalidades adicionales y opciones de diseño a tus páginas de categorías. Tras la última revisión, esto es lo poco que queda en el repositorio de plugins de WordPress, ya que la gente prefiere editar el código, ya que termina siendo más sencillo.

Aquí hay algunos plugins populares que puedes utilizar para personalizar la página de categorías en WordPress:

1. **[Elementor](https://wordpress.org/plugins/elementor/)**: Elementor es un popular plugin de creación de páginas que te permite personalizar fácilmente el diseño de tus páginas de categorías. Puedes arrastrar y soltar elementos, agregar widgets y personalizar el diseño de la página según tus necesidades.

Es importante tener en cuenta que la elección del plugin dependerá de tus necesidades específicas y del tema que estés utilizando en tu sitio de WordPress. Algunos temas pueden tener opciones de personalización incorporadas para las páginas de categorías, por lo que es posible que no necesites utilizar un plugin adicional. Recuerda siempre investigar y probar los plugins antes de instalarlos en tu sitio en vivo. Lee las reseñas, verifica la compatibilidad con tu versión de WordPress y asegúrate de que el plugin sea confiable y esté bien mantenido.

---

### Personalización Con Código

#### Creación de un Child Theme

Si prefieres un control más profundo sobre la personalización y deseas mantener los cambios después de las actualizaciones del tema, crear un tema secundario (child theme) es esencial:

1. Crea una carpeta para tu child theme en el directorio `wp-content/themes/`.
2. Crea un archivo `style.css` en la carpeta del child theme y define los detalles del tema.
3. Activa el child theme desde el panel de administración.

#### Crear Campo Imagen

Para poder introducir la imagen en el formulario de creación de categorías, recomiendo hacerlo con ACF, una forma sencilla y rápida:

- Instala el plugin [ACF del repositorio de WordPress](https://wordpress.org/plugins/advanced-custom-fields/).
- Crea un nuevo grupo de campos.

![Añadir imagen principal a la categoría con ACF](/Como-personalizar-la-pagina-de-categorias-en-wordpress-anadir-imagen-principal-a-la-categoria-con-ACF1.webp)

- Añadir el nombre del grupo.

![Nombre del grupo en ACF](/Como-personalizar-la-pagina-de-categorias-en-wordpress-anadir-imagen-principal-a-la-categoria-con-ACF2.webp)

- En Tipo de campo elegir «imagen».

![Tipo de campo en ACF](/Como-personalizar-la-pagina-de-categorias-en-wordpress-anadir-imagen-principal-a-la-categoria-con-ACF3.webp)

- Darle nombre a la etiqueta de campo.

![Etiqueta de campo en ACF](/Como-personalizar-la-pagina-de-categorias-en-wordpress-anadir-imagen-principal-a-la-categoria-con-ACF4.webp)

- Darle nombre al campo, este luego será necesario para añadirlo al código.
- En formato de retorno elegir «Url de imagen» y guardar.

![Formato de retorno en ACF](/Como-personalizar-la-pagina-de-categorias-en-wordpress-anadir-imagen-principal-a-la-categoria-con-ACF5.webp)

- Este es el resultado:

![Resultado en ACF](/Como-personalizar-la-pagina-de-categorias-en-wordpress-anadir-imagen-principal-a-la-categoria-con-ACF6.webp)

![Resultado final en ACF](/Como-personalizar-la-pagina-de-categorias-en-wordpress-anadir-imagen-principal-a-la-categoria-con-ACF7.webp)

#### Incluir Consulta en `functions.php` del Child Theme

Para poder utilizar la imagen recién introducida con ACF, tenemos que añadir en el `functions.php` del tema hijo (repito, tema hijo para que no se dañe la web con las modificaciones, para que se mantenga cuando se actualice el tema y para poder arreglar la web cuando metamos la pata al tocar lo que no toca… jajaja):

```php
// Imagen en categorias
add_action( 'category_template_part', 'category_thumbnail' );

function category_thumbnail() {
  if ( is_category() && has_category_thumbnail() ) {
    echo '<img src="' . category_thumbnail_url() . '" />';
  }
}

function category_thumbnail_url() {
  $thumbnail_id = get_term_meta( get_query_var( 'cat' ), 'Nombre_del_campo', true );
  return wp_get_attachment_url( $thumbnail_id ); 
}

function has_category_thumbnail() {
  return get_term_meta( get_query_var( 'cat' ), 'cat_img', true ); 
}  
// Fin en categorias
```
Recuerda tener instalado un tema hijo y realizar las modificaciones en él.

En la plantilla se tendría que añadir el siguiente código, dependiendo de la zona donde quieres que aparezca:
```php
if ( has_category_thumbnail() ) {
  echo '<img src="' . category_thumbnail_url() . '" />';
}
```
## Resolución y Formato

### Resolución
La resolución de las imágenes se mide en píxeles por pulgada (PPI o DPI). Para imágenes web, una resolución de 72 PPI es común y suficiente para la visualización en pantalla.

### Formato
El formato más común y recomendado para las imágenes web es JPEG (o JPG). Es un formato comprimido que ofrece una buena calidad de imagen y un tamaño de archivo razonable. Para imágenes con transparencias, como logotipos, utiliza el formato PNG.

## Tamaños Recomendados

### Imagen Destacada en Entradas o Páginas

El tamaño de imagen destacada puede variar según el diseño de tu sitio web y cómo se muestra en diferentes dispositivos. Sin embargo, aquí tienes algunas medidas recomendadas que suelen funcionar bien en la mayoría de los casos:

- Tamaño recomendado: 1200 x 800 píxeles (ancho x alto)

- Proporción: 3:2

Este tamaño proporciona una buena calidad en la mayoría de las pantallas y se adapta bien a diferentes diseños de página.

### Miniaturas y Galerías

WordPress genera automáticamente miniaturas de tus imágenes destacadas para diferentes partes del sitio, como las páginas de inicio, las páginas de categorías y las galerías. Aquí hay algunas medidas recomendadas para miniaturas:

- Miniatura cuadrada: 150 x 150 píxeles

- Miniatura horizontal: 300 x 200 píxeles

- Miniatura vertical: 150 x 225 píxeles

#### Cabecera (Header) o Imagen de Portada

Si tu tema permite una imagen de cabecera o portada, aquí hay un tamaño recomendado:

- Tamaño recomendado: 2000 x 1200 píxeles (ancho x alto)

- Proporción: 5:3

Este tamaño asegura que la imagen se vea bien en pantallas grandes y mantenga una buena calidad en dispositivos más pequeños.

Recuerda que estas son recomendaciones generales y que los tamaños pueden variar según el diseño de tu sitio web y tus preferencias. Además, es importante optimizar las imágenes para web mediante compresión para que se carguen rápidamente sin sacrificar demasiada calidad.

## Optimización para SEO y Rendimiento

Al personalizar las páginas de categorías, asegúrate de que las optimizaciones SEO y el rendimiento no se vean comprometidos. Mantén en mente las mejores prácticas de SEO y utiliza herramientas para verificar la velocidad de carga de la página.

## Pruebas y Visualización Responsiva

Antes de finalizar tus personalizaciones, realiza pruebas exhaustivas en diferentes dispositivos y tamaños de pantalla. Utiliza herramientas de prueba como el modo de desarrollo del navegador y servicios de prueba en línea para asegurarte de que todo se vea y funcione como debería.

## Mantenimiento Continuo

Recuerda que las personalizaciones pueden requerir ajustes periódicos debido a las actualizaciones de WordPress, temas o plugins. Mantén un ojo en las actualizaciones y realiza pruebas después de cada actualización importante.

Personalizar la página de categorías en WordPress puede marcar la diferencia en la apariencia y experiencia general de tu sitio web. Ya sea que elijas la personalización sin código o la personalización con código, el resultado final debe reflejar tus objetivos y visión para el sitio. Experimenta, prueba y adapta tus personalizaciones para crear un sitio web único y atractivo que atraiga a tus usuarios.

¿Has personalizado alguna vez la página de categorías en WordPress? ¡Comparte tus experiencias y resultados en los comentarios a continuación!

---

## Faqs sobre: Cómo Personalizar la Página de Categorías en WordPress


  - ¿Qué son las páginas de categorías en WordPress?
  
    Las páginas de categorías en WordPress son páginas que agrupan y muestran entradas (posts) relacionadas con una categoría específica. Estas páginas son útiles para organizar el contenido de un sitio web y mejorar la navegación para los usuarios.

  - ¿Por qué es importante personalizar las páginas de categorías en WordPress?
  
    Personalizar las páginas de categorías en WordPress es importante porque permite mejorar la experiencia del usuario, optimizar el diseño para SEO, y destacar visualmente el contenido de cada categoría. Además, una buena personalización puede aumentar el tiempo de permanencia en el sitio y mejorar la tasa de conversión.

  - ¿Se puede personalizar la página de categorías sin usar código?
  
    Sí, es posible personalizar la página de categorías sin usar código mediante el uso de plugins como Elementor, Category Page Enhanced o Category Templates. Estos plugins ofrecen opciones de personalización mediante interfaces gráficas fáciles de usar.

  - ¿Qué es un Child Theme y por qué es recomendable usarlo para personalizar WordPress?

    Un Child Theme es un tema secundario que hereda las funcionalidades y estilos de un tema principal (parent theme). Es recomendable usarlo para personalizar WordPress porque permite realizar modificaciones sin afectar el tema principal, lo que facilita las actualizaciones y evita la pérdida de cambios.

  - ¿Cómo se añade una imagen a una categoría en WordPress?

    Para añadir una imagen a una categoría en WordPress, puedes usar el plugin Advanced Custom Fields (ACF) para crear un campo de imagen en el formulario de categorías. Luego, debes modificar el archivo `functions.php` del Child Theme y los archivos de plantilla para mostrar la imagen en la página de la categoría.

  - ¿Qué formatos de imagen son recomendables para las páginas de categorías?
  
    Los formatos recomendables para las imágenes en las páginas de categorías son JPEG (para imágenes con buena calidad y tamaño reducido) y PNG (para imágenes con transparencia). Además, es importante optimizar las imágenes para web para garantizar un buen rendimiento.

  - ¿Cómo afecta la personalización de las páginas de categorías al SEO?

    La personalización de las páginas de categorías puede mejorar el SEO al permitir la inclusión de textos optimizados, imágenes con etiquetas alt, y una estructura de contenido más clara. Esto ayuda a los motores de búsqueda a entender mejor el contenido y mejorar el posicionamiento.

  - ¿Qué herramientas se pueden usar para probar la visualización responsiva de las páginas de categorías?
  
    Puedes usar herramientas como el modo de desarrollo del navegador (DevTools), servicios en línea como BrowserStack, o plugins de WordPress para probar la visualización responsiva de las páginas de categorías en diferentes dispositivos y tamaños de pantalla.

  - ¿Es necesario realizar mantenimiento después de personalizar las páginas de categorías?

    Sí, es recomendable realizar mantenimiento periódico después de personalizar las páginas de categorías, especialmente después de actualizaciones de WordPress, temas o plugins. Esto asegura que las personalizaciones sigan funcionando correctamente y no causen conflictos.s