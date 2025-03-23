---
title: Cómo poner cajas de autor en wordpress en Generatepress
description: El Cuadro de Autor es una valiosa herramienta que nos permite mostrar información relevante sobre el autor de una publicación, mejora el EEAT, te ayudo a crear una.
date: 2025-03-23
tags: [Diseño WEB, Wordpress, DEV ]
draft: false
image: /Caja-de-Autor-sin-plugin.webp
image_alt: "Cómo Personalizar la Página de Categorías en WordPress"
twitter_img: /Eloy-martinez-cuesta-web.webp
twitterCreator: "@eloy_emc"
twitterSite: "@eloy_emc"
keywords:
  - Wordpress
  - Personalizar páginas
  - CSM 
  - Caja Autor en wordpress 
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
  - question: "¿Por qué es importante agregar un cuadro de autor en mi sitio web?"
    answer: "Agregar un cuadro de autor es relevante para mejorar las señales EAT (Experiencia, Autoridad y Confiabilidad) en tu sitio web. Google utiliza estas señales para mejorar su algoritmo de búsqueda. Además, la biografía del autor ayuda a los lectores a conocer al escritor detrás del contenido, aumentando así la credibilidad del blog y su autenticidad."

  - question: "¿Qué es Gravatar y por qué necesito configurarlo para el cuadro de autor?"
    answer: "Gravatar es un servicio mundialmente reconocido que proporciona avatares o imágenes de perfil para usuarios de WordPress. Configurarlo es esencial para que la imagen de perfil del autor aparezca junto a su biografía en el cuadro de autor."

  - question: "¿Cómo puedo habilitar Gravatar en mi sitio de WordPress?"
    answer: "Para habilitar Gravatar, debes crear una cuenta en el sitio web de Gravatar y completar tu perfil con una foto de perfil. Luego, al comentar en sitios de WordPress, la imagen de perfil asociada a tu correo electrónico de Gravatar se mostrará automáticamente en el cuadro de autor."

  - question: "¿Cuál es la diferencia entre el tema GeneratePress gratuito y Premium en cuanto al cuadro de autor?"
    answer: "En la versión gratuita de GeneratePress, se necesita un complemento para agregar el cuadro de autor, mientras que en la versión Premium, se puede implementar el cuadro de autor utilizando el método de Hook sin necesidad de un complemento adicional."

  - question: "¿Cuáles son algunos de los complementos recomendados para agregar el cuadro de autor en GeneratePress gratuito?"
    answer: "Algunos de los complementos recomendados para agregar el cuadro de autor en GeneratePress gratuito son: Fancier Author Box, Simple Author Box, Social Pug: Author Box y Starbox: The Author Box for Humans."

  - question: "¿Cuál es el método preferido para agregar el cuadro de autor en GeneratePress Premium Theme?"
    answer: "El método preferido para agregar el cuadro de autor en GeneratePress Premium es utilizar el módulo de elementos y crear un nuevo gancho para el cuadro de autor sin la necesidad de un complemento adicional."

  - question: "¿Puedo personalizar el diseño del cuadro de autor en GeneratePress Premium Theme?"
    answer: "Sí, el diseño del cuadro de autor se puede personalizar utilizando código CSS. Puedes modificar el CSS según tus preferencias para adaptar el aspecto del cuadro de autor al diseño de tu tema."

  - question: "¿Es necesario tener una cuenta en Gravatar para mostrar la biografía del autor en el cuadro de autor?"
    answer: "Sí, tener una cuenta en Gravatar es esencial para que la biografía del autor se muestre junto a la imagen de perfil en el cuadro de autor. Al crear una cuenta en Gravatar y asociar una foto de perfil con tu dirección de correo electrónico, esta imagen se utilizará en el cuadro de autor."

  - question: "¿Qué beneficios obtengo al agregar el cuadro de autor en mi sitio web?"
    answer: "Al agregar el cuadro de autor, aumentas la confianza y la credibilidad de tu sitio web, lo que puede tener un impacto positivo en la experiencia del usuario y en la clasificación en motores de búsqueda. Además, permite a los lectores conocer al autor detrás del contenido, lo que puede fortalecer la conexión con la audiencia."

  - question: "¿Cuál es el mejor enfoque para agregar el cuadro de autor en mi sitio web?"
    answer: "El mejor enfoque para agregar el cuadro de autor depende de tus necesidades y de si estás utilizando la versión gratuita o Premium de GeneratePress. Si tienes la versión gratuita, instalar un complemento como Simple Author Box puede ser una opción. Si utilizas GeneratePress Premium, utilizar el método de Hook sin complementos puede ofrecer una solución más personalizada y optimizada."
---
En este artículo, exploraremos cómo implementar el Cuadro de Autor en el tema GeneratePress, tanto en su versión gratuita como premium, en un sitio web de
WordPress.

**El Cuadro de Autor** es una valiosa herramienta que nos permite mostrar información relevante sobre el autor de una publicación, lo cual es especialmente importante para mejorar las señales de Experiencia, Autoridad y Fiabilidad (Expertise, Authoritativeness, Trustworthiness) de [Quality Raters de Google](https://www.google.com/search/howsearchworks/how-search-works/rigorous-testing/) que utiliza Google para mejorar su algoritmo de búsqueda.

### Contenido

- [**¿Por qué es importante el Cuadro de Autor en su sitio web?**](#por-qué-es-importante-el-cuadro-de-autor-en-su-sitio-web)
- [**Antes de agregar el cuadro de autor en WordPress** **activa tu gravatar**](#antes-de-agregar-el-cuadro-de-autor-en-wordpress-activa-tu-gravatar)
- [**Implementación del Cuadro de Autor en GeneratePress Theme**](#implementación-del-cuadro-de-autor-en-generatepress-theme)
  - [**Usando Complementos en GeneratePress Free:**](#usando-complementos-en-generatepress-free)
  - [**Implementación sin plugin en GeneratePress Premium:**](#implementación-sin-plugin-en-generatepress-premium)
    - [**Activar el Módulo de Elementos:**](#activar-el-módulo-de-elementos)
    - [**Añadir un Nuevo hook de Elemento:**](#añadir-un-nuevo-hook-de-elemento)
    - [**Configurar el gancho:**](#configurar-el-gancho)
    - [**Personalizar con CSS:**](#personalizar-con-css)
    - [**¿Donde colocar el CSS de la caja de autor personalizada?**](#donde-colocar-el-css-de-la-caja-de-autor-personalizada)
- [**Opinión personal**](#opinión-personal)
- [**FAQs: Agregando el Cuadro de Autor en WordPress con GeneratePress Theme**](#faqs-agregando-el-cuadro-de-autor-en-wordpress-con-generatepress-theme)
  - [**¿Por qué es importante agregar un cuadro de autor en mi sitio web?**](#por-qué-es-importante-agregar-un-cuadro-de-autor-en-mi-sitio-web)
  - [**¿Qué es Gravatar y por qué necesito configurarlo para el cuadro de autor?**](#qué-es-gravatar-y-por-qué-necesito-configurarlo-para-el-cuadro-de-autor)
  - [**¿Cómo puedo habilitar Gravatar en mi sitio de WordPress?**](#cómo-puedo-habilitar-gravatar-en-mi-sitio-de-wordpress)
  - [**¿Cuál es la diferencia entre el tema GeneratePress gratuito y Premium en cuanto al cuadro de autor?**](#cuál-es-la-diferencia-entre-el-tema-generatepress-gratuito-y-premium-en-cuanto-al-cuadro-de-autor)
  - [**¿Cuáles son algunos de los complementos recomendados para agregar el cuadro de autor en GeneratePress gratuito?**](#cuáles-son-algunos-de-los-complementos-recomendados-para-agregar-el-cuadro-de-autor-en-generatepress-gratuito)
  - [**¿Cuál es el método preferido para agregar el cuadro de autor en GeneratePress Premium Theme?**](#cuál-es-el-método-preferido-para-agregar-el-cuadro-de-autor-en-generatepress-premium-theme)
  - [**¿Puedo personalizar el diseño del cuadro de autor en GeneratePress Premium Theme?**](#puedo-personalizar-el-diseño-del-cuadro-de-autor-en-generatepress-premium-theme)
  - [**¿Es necesario tener una cuenta en Gravatar para mostrar la biografía del autor en el cuadro de autor?**](#es-necesario-tener-una-cuenta-en-gravatar-para-mostrar-la-biografía-del-autor-en-el-cuadro-de-autor)
  - [**¿Qué beneficios obtengo al agregar el cuadro de autor en mi sitio web?**](#qué-beneficios-obtengo-al-agregar-el-cuadro-de-autor-en-mi-sitio-web)
  - [**¿Cuál es el mejor enfoque para agregar el cuadro de autor en mi sitio web?**](#cuál-es-el-mejor-enfoque-para-agregar-el-cuadro-de-autor-en-mi-sitio-web)


## **¿Por qué es importante el Cuadro de Autor en su sitio web?**

Antes de sumergirnos en los detalles de cómo agregar el Cuadro de Autor en GeneratePress Theme, es importante comprender por qué es tan relevante. Las señales EEAT mencionadas anteriormente son cruciales para el posicionamiento de su sitio web en los resultados de búsqueda de Google. La información del autor proporciona a Google una mayor comprensión de quién está detrás del contenido y por qué se debe confiar en esa persona.

Además de los aspectos técnicos de SEO, el Cuadro de Autor también humaniza su sitio web. Permite a los lectores conocer al creador detrás del contenido y establece una conexión más personal con ellos. La credibilidad y autenticidad de su blog se ven reforzadas con la inclusión de una biografía del autor.

## **Antes de agregar el cuadro de autor en WordPress** **activa tu gravatar**

Antes de que la biografía del autor aparezca en el sitio de WordPress, es importante familiarizarse con **Gravatar** y la información biográfica.

[**Gravatar** es un reconocido avatar a nivel mundial y forma parte de WordPress](https://wordpress.com/support/gravatars/), siendo mantenido y respaldado por Automattic.

Para configurar Gravatar, simplemente debe seguir estos pasos:

  1. Acceda al Panel de WordPress.
  2. Visite el Menú de Usuarios.
  3. Edite su perfil de usuario.
  4. Vaya a la sección «Acerca de ti» y seleccione «Imagen de perfil».
  5. Haga clic en «Puede cambiar su imagen de perfil en Gravatar».
  6. Será redirigido al sitio web de Gravatar, donde puede iniciar sesión o registrarse con las credenciales de WordPress.com.
  7. Autorice su cuenta de WordPress con Gravatar.
  8. A continuación, diríjase a la sección «Agregar una nueva imagen» y cargue su foto.
  9. Califique su Gravatar eligiendo entre las opciones G, PG, R y X.
  10. ¡Listo! Su perfil de Gravatar está configurado. Vuelva a la sección «Acerca de ti» en WordPress y verá su foto de perfil.

> Gravatar te pide que clasifiques tu imagen según el contenido:  
> **G** : Este gravatar es adecuado para mostrar en todos los sitios web con
> cualquier tipo de audiencia. Para todos los públicos.  
> **PG** : Este gravatar puede contener gestos descorteses, individuos
> vestidos provocativamente, malas palabras o violencia moderada. Posiblemente
> ofensivo, normalmente para mayores de 13 años.  
> **R** : Este gravatar puede contener cosas tales como duras blasfemias,
> violencia intensa, desnudez o uso de drogas duras. Destinado a un público
> adulto mayor de 17 años.  
> **X** : Este gravatar puede contener imágenes sexuales extremas o violencia
> extremadamente perturbadora. Contenido más adulto que los anteriores.  
> Selecciona la clasificación que corresponda según la imagen que hayas
> subido.
>


Una vez configurado, su imagen de perfil de Gravatar se mostrará al comentar en sitios de WordPress, en la biografía del autor y en los foros de WordPress, funcionando para todos sus perfiles en la plataforma. Es importante tener en cuenta que tanto Gravatar como la información biográfica son utilizados por el sitio web de WordPress en ciertos casos, lo que ayuda a enriquecer la experiencia del lector y aumentar la credibilidad del contenido y del autor.

## **Implementación del Cuadro de Autor en GeneratePress Theme**

Para implementar el Cuadro de Autor, hay dos métodos principales que podemos seguir: el uso de complementos o el método de Hooks en la versión Premium del tema.

### **Usando Complementos en GeneratePress Free:**

Existen varios complementos disponibles en el repositorio de WordPress que pueden ayudarnos a agregar fácilmente el Cuadro de Autor a nuestras publicaciones. Algunas opciones populares son:

![](https://eloymartinezcuesta.com/wp-content/uploads/2023/07/plugins-caja-autor-wordpress-simple-author-box.webp)

  * **Cuadro de Autor Simple[(Simple Author Box)](https://wordpress.org/plugins/simple-author-box/)**: Este es un complemento sencillo pero efectivo que nos permite personalizar el diseño de la caja de autor y agregar hasta 30 perfiles de redes sociales.

![](https://eloymartinezcuesta.com/wp-content/uploads/2023/07/plugins-caja-autor-wordpress-starbox-genetatepress.webp)

  * **Starbox: La Caja de Autor para Humanos ([Starbox Author](https://wordpress.org/plugins/starbox/)):** Este complemento es altamente recomendado por el equipo de soporte de GeneratePress para los usuarios de la versión Premium.

[![](https://eloymartinezcuesta.com/wp-content/uploads/2023/07/plugins-caja-autor-wordpress-molongui-authorship-generatepress.webp)](https://eloymartinezcuesta.com/wp-content/uploads/2023/07/plugins-caja-autor-wordpress-molongui-authorship-generatepress.webp)

  * **La caja elegante para autor (Molongui Authorship)** : Este plugin incluye una única plantilla en la versión gratuita, pero siete diseños más en la premium. Lo que más me gusta de Molongui Authorship es que se puede modificar su aspecto desde el personalizado de la plantilla de tu web. Por supuesto, permite personalizar todos sus elementos (nombre, avatar, descripción, botones sociales) y también el diseño (fondo, borde, sombra, etc).

### **Implementación sin plugin en GeneratePress Premium:**

    
    
A destacar de esta opción que con ayuda de algún [plugin simple de Hooks puedes añadirlo en cualquier tema.](https://www.hostinger.com/tutorials/what-are-wordpress-hooks/)

En la versión Premium del tema GeneratePress, podemos optar por utilizar el método de Hooks para agregar el Cuadro de Autor sin necesidad de instalar un complemento adicional. A continuación, se describen los pasos para hacerlo:

#### **Activar el Módulo de Elementos:**

Primero, necesitamos acceder al Módulo de Elementos en GeneratePress para poder utilizar Hooks.

[![](https://eloymartinezcuesta.com/wp-content/uploads/2023/07/caja_author_wordpress_sin_plugin.jpg)](https://eloymartinezcuesta.com/wp-content/uploads/2023/07/caja_author_wordpress_sin_plugin.jpg)

#### **Añadir un Nuevo hook de Elemento:**

[![](https://eloymartinezcuesta.com/wp-content/uploads/2023/07/caja_author_wordpress_sin_plugin_1.jpg)](https://eloymartinezcuesta.com/wp-content/uploads/2023/07/caja_author_wordpress_sin_plugin_1.jpg)

Luego, debemos agregar un nuevo gancho en los elementos de GeneratePress.

![](https://eloymartinezcuesta.com/wp-content/uploads/2023/07/caja_author_wordpress_sin_plugin_2.jpg)

Elegimos el tipo de elemento como **HOOK**  . Asigne el nuevo título como **cuadro de autor**.

[![](https://eloymartinezcuesta.com/wp-content/uploads/2023/07/caja_author_wordpress_sin_plugin_3-1024x585.jpg)](https://eloymartinezcuesta.com/wp-content/uploads/2023/07/caja_author_wordpress_sin_plugin_3.jpg)

Utilizar el Código PHP:

Pegue el código PHP proporcionado para agregar el Cuadro de Autor.

Ahora es cuando podemos añadir nuestro código al Hook para crear nuestro cuadro de autor, yo te voy a proporcionar tres básicos con sus correspondientes CSS para que solo tengas que copiar y pegar. Solo tienes que elegir uno de los tres o modificarlos a tu gusto.

**Primer Código:**

    
```html      
    <div class="author-box">
        <div class="avatar"><?php echo get_avatar( get_the_author_meta( 'ID' )); ?></div>
     
            <h5 class="author-title"><?php printf( esc_attr__( 'About %s', 'the author' ), get_the_author_meta( 'display_name') );?></h5>
        
        <div class="author-summary">
        
            <p class="author-description"><?php echo wp_kses( get_the_author_meta( 'description' ), null ); ?></p>
     
            <div class="author-links">
     
            <a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>" title="Read more">...</a>
     
            </div>
     
        </div>
     
    </div>
```    

**Segundo Código:**

```html    
    
    <div class="author-box">
        <div class="avatar">
            <?php echo get_avatar( get_the_author_meta( 'ID' ), 250 ); ?>
        </div>
        <div class="author-info">
            <h5 class="author-title" itemprop="author" itemscope itemtype="http://schema.org/Person">
                <span itemprop="name"><?php printf( get_the_author_meta( 'display_name') );?></span>
            </h5>
            <div class="author-summary">
                <p class="author-description"><?php echo wp_kses( get_the_author_meta( 'description' ), null ); ?></p></div>
    <div class="author-links">
                <a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>" title="Read more">...</a>
           </div>
        </div>
    </div>
```    

**Tercer código:**

En este código he ampliado la caja con varias cosas:

  * He añadido enlaces con iconos a las redes sociales
  * He modificado el aspecto y la posición de la foto

```html    
    
    <div class="author-box">
        <div class="avatar-container">
            <div class="avatar">
                <?php echo get_avatar( get_the_author_meta( 'ID' ), 150 ); ?>
            </div>
        </div>
        <div class="author-info">
            <h5 class="author-title" itemprop="author" itemscope itemtype="http://schema.org/Person">
                <span itemprop="name"><?php printf( get_the_author_meta( 'display_name') );?></span>
            </h5>
        </div>
        <div class="author-summary">
            <div class="author-description"><?php echo wpautop( get_the_author_meta( 'description' ) ); ?></div>
        </div>
        <div class="author-links">
            <a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>" title="Read more"><i class="fas fa-ellipsis-h"></i></a>
            <a href="https://twitter.com/tuperfil" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/tuperfil/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
        </div>
    </div>
```    

Como ves es muy fácil modificarlo para crear tu caja de autor personalizada.

#### **Configurar el gancho:**

Una vez **copiado y pegado el código PHP** tienes que bajar y rellenar los datos como te indico en la foto. El lugar donde mostrarlo, **después del contenido (after_content)** , marcar la casilla de **Ejecutar PHP y darle como prioridad 20.**

![](https://eloymartinezcuesta.com/wp-content/uploads/2023/07/caja_author_wordpress_sin_plugin_5.webp)

Después has de asignar en que publicaciones quieres mostrarla, normalmente en los posts.

![](https://eloymartinezcuesta.com/wp-content/uploads/2023/07/caja_author_wordpress_sin_plugin_4.webp)

#### **Personalizar con CSS:**

Puede utilizar CSS para dar estilo al Cuadro de Autor y ajustarlo al diseño de su tema.

Ahora llega el CSS con todas sus variante, puedes poner sombras, imágenes cuadradas o en círculo, dentro o fuera de la caja. Imaginación al poder….

```css

Código CSS opción 1:

    
    
    .author-box {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 4%;
        margin-top: 30px;
        font-size: 1em;
        box-shadow: 0 9px 28px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }
    
    .author-links a {
        font-size: 3em;
        line-height: 0.5em;
        float: right;
    }
    
    .author-box .avatar {
        width: 30px;
        border-radius: 100%;
        margin-right: 20px;
    }
    
    .author-title {
       font-weight: 700;
    }
    
    h4.author-title {
        margin-bottom: 0.5em;
    }
    
    .author-description {
    	margin-bottom: 10px;
    }
    
    /* For Mobile Devices */
    @media (max-width: 768px) {
        .author-box {
            flex-direction: column;
            text-align: center;
    	padding: 50px 10px;
        }
    
        .author-box .avatar {
            margin-right: 0;
            margin-bottom: 10px;
            width: 100%;
    	margin-top: -35px;
        }
    
        .author-box .avatar img {
            max-width: 70px;
        }
    }
    
```
Código CSS para segunda opción:
```css
    
    
    .autor-box {
    	relleno: 3%;
    	parte inferior del relleno: 10px;
    	margen superior: 30px;
    	tamaño de fuente: 0,9 em;
    	color de fondo: #fff;
    	pantalla: -webkit-caja;
    	pantalla: -ms-flexbox;
    	pantalla: flexible;
    	-webkit-box-align: centro;
    	-ms-flex-alinear: centro;
    	alinear elementos: centro;
            sombra de caja: 0 9px 28px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }
    .autor-box .avatar {
    	ancho: 250px;
    	altura: automático;
    	borde-radio: 100%;
    	margen derecho: 30px;
    }
    h5.autor-título {
    	margen inferior: 0,1 em;
    	peso de fuente: 600;
    }
    .autor-descripción {
    	altura de línea: 1.6em
    }
    .autor-enlaces a {
    	margen superior: -1,5em;
    	tamaño de fuente: 2em;
    	altura de línea: 2em;
    	flotador izquierdo;
    }
    @media (ancho máximo: 768px) {
    	.autor-box {
    		relleno: 20px;
    		relleno inferior: 25px;
    		margen superior: 60px;
    		dirección de flexión: columna;
    		alineación de texto: centro;
    	}
    	.autor-box .avatar {
    		margen derecho: 0;
    		ancho: 100%;
    		margen superior: -25px;
    	}
    	.autor-box .avatar img {
    		ancho máximo: 100px;
    	}
    	.autor-enlaces a {
    		flotante: ninguno;
    		alinear-auto: centro;
    	}
    	.autor-descripción {
    		margen inferior: -0.1em;
    	}
    }
```
Código CSS para personalizar la 3º opción:
```css
    
    
    .author-box {
        position: relative;
        padding: 3%;
        margin-top: 50px;
        font-size: 0.9em;
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        box-shadow: 0 9px 28px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
    }
    
    .author-box .avatar-container {
        position: absolute;
        top: -25px;
        left: 5%;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 9px 28px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22); /* Agregamos sombra a la imagen */
    }
    
    .author-box .avatar {
        width: 100%;
        height: 100%;
    }
    
    .author-box .avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
    
    .author-box .author-info {
        flex-grow: 1;
        flex-basis: 100%;
        margin-top: 110px;
    }
    
    .author-box .author-summary {
        margin-bottom: 20px;
    }
    
    .author-box .author-links {
        margin-top: 10px;
    }
    
    .author-box .author-links a {
        font-size: 2em;
        line-height: 2em;
        margin-right: 10px;
        color: #333;
    }
    
    .author-box .author-links a:hover {
        color: #007bff;
    }
    
    @media (max-width: 768px) {
        .author-box {
            padding: 20px;
            padding-bottom: 25px;
            margin-top: 60px;
            flex-direction: column;
            text-align: center;
        }
        .author-box .avatar-container {
            width: 100px;
            height: 100px;
            margin-top: -25px;
        }
        .author-box .avatar img {
            max-width: 100%;
        }
        .author-box .author-info {
            margin-left: 0;
        }
        .author-box .author-links a {
            float: none;
            display: block;
        }
        .author-description {
            margin-bottom: -0.1em;
        }
    }
```    

#### **¿Donde colocar el CSS de la caja de autor personalizada?**

Tienes varias opciones, desde hacerlo en tu archivo style.css de tu tema hijo, GeneratePress Child a la más sencilla y menos peligrosa, añadirlo en la parte
de personalización de CSS adicional. 

Qué encontrarás en **Apariencia >Apariencia>CSS Adicional**

Pegas y le das a publicar y te olvidas, tambien desde alli puedes hacer cambios y verlos en vivo sin perder mucho tiempo.

## **Opinión personal**

Creo que es una buena opción para darle un aire diferente a tu web y mejorar el EEAT como comentábamos al principio sin necesidad de añadir más plugins que hacen más lento y pesado tu wordpress. Pero como en todo esto va ha gustos así que tu decides.

## **FAQs: Agregando el Cuadro de Autor en WordPress con GeneratePress Theme**

### **¿Por qué es importante agregar un cuadro de autor en mi sitio web?**

Agregar un cuadro de autor es relevante para mejorar las señales EAT (Experiencia, Autoridad y Confiabilidad) en tu sitio web. Google utiliza estas señales para mejorar su algoritmo de búsqueda. Además, la biografía del autor ayuda a los lectores a conocer al escritor detrás del contenido, aumentando así la credibilidad del blog y su autenticidad.

### **¿Qué es Gravatar y por qué necesito configurarlo para el cuadro de autor?**

Gravatar es un servicio mundialmente reconocido que proporciona avatares o imágenes de perfil para usuarios de WordPress. Configurarlo es esencial para que la imagen de perfil del autor aparezca junto a su biografía en el cuadro de autor.

### **¿Cómo puedo habilitar Gravatar en mi sitio de WordPress?**

Para habilitar Gravatar, debes crear una cuenta en el sitio web de Gravatar y completar tu perfil con una foto de perfil. Luego, al comentar en sitios de WordPress, la imagen de perfil asociada a tu correo electrónico de Gravatar se mostrará automáticamente en el cuadro de autor.

### **¿Cuál es la diferencia entre el tema GeneratePress gratuito y Premium en cuanto al cuadro de autor?**

En la versión gratuita de GeneratePress, se necesita un complemento para agregar el cuadro de autor, mientras que en la versión Premium, se puede implementar el cuadro de autor utilizando el método de Hook sin necesidad de un complemento adicional.

### **¿Cuáles son algunos de los complementos recomendados para agregar el cuadro de autor en GeneratePress gratuito?**

Algunos de los complementos recomendados para agregar el cuadro de autor en GeneratePress gratuito son: Fancier Author Box, Simple Author Box, Social Pug: Author Box y Starbox: The Author Box for Humans.

### **¿Cuál es el método preferido para agregar el cuadro de autor en GeneratePress Premium Theme?**

El método preferido para agregar el cuadro de autor en GeneratePress Premium es utilizar el módulo de elementos y crear un nuevo gancho para el cuadro de autor sin la necesidad de un complemento adicional.

### **¿Puedo personalizar el diseño del cuadro de autor en GeneratePress Premium Theme?**

Sí, el diseño del cuadro de autor se puede personalizar utilizando código CSS. Puedes modificar el CSS según tus preferencias para adaptar el aspecto del cuadro de autor al diseño de tu tema.

### **¿Es necesario tener una cuenta en Gravatar para mostrar la biografía del autor en el cuadro de autor?**

Sí, tener una cuenta en Gravatar es esencial para que la biografía del autor se muestre junto a la imagen de perfil en el cuadro de autor. Al crear una cuenta en Gravatar y asociar una foto de perfil con tu dirección de correo electrónico, esta imagen se utilizará en el cuadro de autor.

### **¿Qué beneficios obtengo al agregar el cuadro de autor en mi sitio web?**

Al agregar el cuadro de autor, aumentas la confianza y la credibilidad de tu sitio web, lo que puede tener un impacto positivo en la experiencia del usuario y en la clasificación en motores de búsqueda. Además, permite a los lectores conocer al autor detrás del contenido, lo que puede fortalecer la conexión con la audiencia.

### **¿Cuál es el mejor enfoque para agregar el cuadro de autor en mi sitio web?**

El mejor enfoque para agregar el cuadro de autor depende de tus necesidades y de si estás utilizando la versión gratuita o Premium de GeneratePress. Si tienes la versión gratuita, instalar un complemento como Simple Author Box puede ser una opción. Si utilizas GeneratePress Premium, utilizar el método de Hook sin complementos puede ofrecer una solución más personalizada y optimizada.

