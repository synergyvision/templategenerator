# Generador de plantillas

<h1 align="center">
  <br>
  <img src="https://jekyllrb.com/img/logo-2x.png" alt="Jekyll logo" width="160">
</h1>

## Instalación 🚧

## Cómo usar 🧮

### Blog panadero 🥖
  Directorio "_data"
   - Contiene todos aquellos datos que serán utilizados a lo largo de la plantilla.
      * colors.yml: Incluye los colores que serán utilizados a lo largo de la planilla.
      * global.yml: Incluye todos aquellos datos globales. Como:
          - titulo de la página, descripción, cuenta oficial de instagram, etc.
          - logo que serà mostrado en las redes sociales, favicon, etc.
          - directorios de iconos, imagenes, javascript y css.
          - dirección base de la plantilla.
      * home.yml:  Incluye todos aquellos datos que se muestran en los componentes utilizados en la página de inicio de la plantilla.
      * recipes-and-courses.yml: Incluye todos aquellos datos repetitivos y/o globales, como imagen de banner a lo largo de las páginas, iconos, botones generales, filtros, titulos y encabezados de tablas, etc.
      * footer.yml: Incluye todos aquellos datos del pie de página.
      * header.yml: Incluye todos aquellos datos del encabezado.
      * not-found.yml: Incluye los datos mostrados en la página 404 de la plantilla.

  Directorio "_culinary-blog-recipes"
  - Contiene una colección de recetas, y en sí toda aquella información particular, que será usada a lo largo de la plantilla, como paso a paso, ingredientes, score, características, imagen, tipo de pan, etc. Nota 🚨: basic-info es información que será utilizada en las cartas de presentación.
  ⚠️ Para añadir una nueva receta, agregue un archivo a este directorio con la extensión ".md" y rellene los datos requeridos.

  Directorio "_culinary-blog-techniques"
  - Contiene una colección de texnicas, y en sí toda aquella información particular, que será usada a lo largo de la plantilla, como video y textos.
  - Nota 🚨: basic-info es información que será utilizada en las cartas de presentación.
  ⚠️ Para añadir una nueva técnica, agregue un archivo a este directorio con la extensión ".md" y rellene los datos requeridos.

  Directorio "_culinary-blog-courses"
  - Contiene en sí otros directorios que indican el nombre del curso. Estos a su vez contienen una colección de archivos con la extensión ".md".
  - Nota 🚨: Cada archivo contiene un prefijo 'step-' , este prefijo podrá ser modificado en data si así se desea. Dichos archivos contienen información del paso como video y textos.
  - Apartando lo archivos que incluyen el prefijo 'step-', existe un archivo info que contiene la información del curso en general, como titulos, tipo, imagenes, etc.

  Directorio "_includes"
   - Contiene todos aquellos componentes utilizados a lo largo de la plantilla
    Globales:
      * header.html : Encabezado de página
          Parámetros:
              sticky: Incluir si desea que el encabezado contenga un fondo y una profundidad. Opcional
              logo: Objeto que incluye:
                name: nombre de imagen del logo
                alt: Texto alternativo a imagen
              nav-links:
                href: nombre de la página a redirigir
                text: Texto del link
              base-url: Añada si el sitio a redirijir no es un sitio externo. Especifique la dirección base.
              icons: Objeto que incluye:
                icon-close: Nombre de ícono para cerrar menú en dispositivos pequeños.
                icon-open: Nombre de ícono para abrir menú en dispositivos pequeños.
              svg-directory: Directorio base de los íconos.
              image-directory: Directorio base de las imágenes
      * footer.html : Pie de página
          Parámetros:
              footer: Objeto que incluye:
                logo: Objeto que incluye:
                  image: nombre de la imagen
                  alt: Texto alternativo de no mostrarse la imagen
                social-media: Collección que incluye
                  icon: nombre del ícono a mostrar.
                  href: enlace de dirección a red social.
                quote: Mensaje. Objeto que incluye:
                  icon: nombre de ícono de comillas
                  text: cita de una persona.
                  member-image: Objeto que incluye:
                    name: nombre de imagen de una persona
                    alt: Texto alternativo a imagen
                instagram-section: Imágenes de cuenta instagram. Objeto que incluye:
                    title: titulo de la sección
                    href: Redirección a cuenta de instagram
                    pictures: Collección que incluye:
                        name: nombre de imagen
                        alt: Texto alternativo a imagen
                contacts: Objeto que incluye:
                    title: titulo de la sección
                    sections: Collección que incluye:
                        icon: icono de contacto. Ej: Īcono de teléfono.
                        text: texto de contacto. Ej: teléfono
                copyright: Texto de derechos de autor.
              svg-directory: Directorio base de los íconos.
              image-directory: Directorio base de las imágenes
      * title-primary.html:
          Parámetros: 
              small: Igualar a "true" si se desea una versión más pequeña. "false" por defecto. Opcional.
              title: Título a mostrar.
              subtitle: Subtítulo a mostrar.
      * accordion.html: 
          Parámetros: 
              collection: Se incluye una collección que contiene "title" para especificar los títulos, y "texts" para enumerar parrafos. Cada texto es llamado "text" respectivamente.
              icons-prefix: Incluir este parámetro si la colección contará con una imagen lateral, especificando el prefijo de las imagenes que se mostrarán. En el ejemplo se muestra el prefijo 'prep-step-', para mostrar los pasos de una receta.
              image: Igualar a "true" si se desea mostrar la imagen lateral. Es falso por defecto.
              image-directory: Directorio base de las imágenes
              icon: Ícono que marca cada uno de los textos.
              svg-directory: Directorio base del ícono.
      * banner-secondary.html
          Parámetros:
              image-directory: Directorio base de la imágen.
              image: Nombre de la imagen de fondo.
              title: Titulo del banner.
      * button-primary.html
          Parámetros:
              title: Nombre del botón.
              href: Añada este parámetro si desea que el botón redirija a una página, indicando el nombre de dicha página.
              inverted: Añada este parámetro si desea invertir los colores del botón.
              base-url: Añada si el sitio a redirijir no es un sitio externo.
              onclick: Añada si desea realizar una acción con el botón, especificando el nombre de la función.
      * button-scroll.html : Botón fijado en la ezquina inferior derecha, que redirige al tope de la ventana.
          Parámetros:
              icon: id del icono (svg) a utilizar.
              svg-directory: Directorio base del ícono.
      * empty-message.html : Mensaje de vacío. Se puede utilizar cuando no se encuentran resultados de algún tipo.
          Parámetros:
              info: Objeto que contiene:
                  icon: nombre del icono a utilizar. Opcional
                  message: Mensaje a mostrar.
              svg-directory: Directorio base del icono.
      * increase-value.html : Caja con botones de aumentar y disminuir cantidad.
          Parámetros:
              value: Valor por defecto del input.
      * information.html : texto plano. Incluye titulos, subtitulos, y check
          Parámetros:
              information: Collección que incluye
                    name: texto a ser mostrado
                    type: puede ser: 
                      'paragraph': Se mostrará un párrafo plano.
                      'title' : Se mostrará un titulo con un ícono en la parte inferior.
                      'subtitle' : Se mostrará un subtitulo con un ícono en la parte inferior.
                      'check' : Se mostrará un marcador del lado izquierdo del texto.
              svg-directory: Directorio base del icono.
      * stripe.html: Banda degradada de color secundario, con iconos espaciados.
          Parámetros:
              icons: Collección que incluye:
                  icon: nombre de ícono 
              svg-directory: Directorio base del icono.
    Home:
      * banner.html: Banner de página de inicio.
          Parámetros:
              background: Imágen de fondo.
              title: Objeto que incluye:
                first-line: texto de primera línea
                second-line: texto de segunda línea
              image-directory: Directorio base de la imagen.
      * features-section.html : Sección que muestra imagenes  con texto inferior.
          Parámetros:
              features: Objeto que incluye:
                background: nombre de imagen de fondo. Opcional
                collection: Colección que incluye:
                  image: Objeto que incluye
                    name: Nombre de imagen
                    alt:  Texto alternativo a imagen
                  name: texto inferior a imagen
              image-directory: Directorio base de la imagen.
      * gallery-section.html: Seccion que incluye imagenes unidas, cubriendo todo el espacio. Nota 🚨 : Para una mejor visualización añadir cantidad de imágenes multiplos de 4.
          Parámetros:
              collection: Collección que incluye:
                image: Objeto que incluye:
                  name: nombre de la imagen
                  alt: texto alternativo a imagen
              image-directory: Directorio base de imágenes.
      * nesletter-section.html
          Parámetros:
              background: imágen de fondo de la sección. Opcional.
              form: Objeto que incluye:
                your-email: Correo al que llegarán cada una de las suscripciones.
                title: título del formulario
                subtitle: subtítulo del formulario
                inputs: Collección que incluye:
                  type: tipo del campo
                  name: nombre que define el identificador del campo
                  placeholder: texto del placeholder del campo
                btn: Objeto que incluye
                  text: texto del botón del formularip
              image-directory: Directorio base de imágenes.
      * quote-section.html: Sección que incluye cita de alguna persona.
          Parámetros:
              background: imágen de fondo de la sección. Opcional.
              section: Objeto que incluye:
                quote:
                  icon: nombre de ícono de comillas
                  text: texto de la cita
                  person: Objeto que incluye:
                    image: Objeto que incluye:
                      name: nombre de imágen de persona que cita
                      alt: Texto alternativo a imágen.
                    name: nombre de la persona que cita el texto
              image-directory: Directorio base de imágenes.
      * top-section.html : Sección que muestra componente "title-primary", y un carousel con los componentes "presentation-card", descrito a continuación.
          Parámetros:
              section: Objeto que incluye:
                  title: título de la sección
                  subtitle: subtítulo de la sección
              collection: Collección que incluye los parámetros solicitados en "presentation-card"
    cards:
      * presentation-card.html: Carta de presentación de recetas, cursos, tecnicas, etc.
           Parámetros:
              large: Añada e iguale a "true" si desea una versión horizontal y agrandada del card. Opcional
              small: Añada e iguale a "true" si desea una versión horizontal y más pequeña del card. Opcional
              card: Objeto que incluye:
                primary-image: Objeto que incluye:
                  name: nombre de imagen 
                  alt:  texto alternativo de la imagen
                name: texto a incluir en el card
                url: nombre del archivo a redirigir.
      * recipe-box.html : Card que incluye un header, y la ficha técnica de un pan o para una cita.
          Parámetros:
            Ficha técnica:
              page: Página de receta.Objeto que incluye:
                title: título del encabezado
                subtitle: subtítulo del encabezado
                basic-info:
                  primary-image: Objeto que incluye:
                      name: nombre de la imagen a mostrar
                      alt: texto alternativo a la imagen
                  sections: Colección que incluye:
                      name: nombre de la sección a mostrar
                  breve-text:
                      title: titulo del texto breve
                      text: texto breve
                  score: valor que muestra el "rating" del producto.
              icon: ícono que se utiliza para marcar las secciones
            Cita:
              quote: Objeto que incluye:
                person: Objeto que incluye:
                  image: nombre de la imagen de la persona
                  alt: texto alternativo a la imágen
                  name: nombre de la persona que cita
                message: Cita de la persona

            svg-directory = directorio base de los íconos.
      * filter-box.html: Caja de filtrado de "cards", contiene checks, y barra de búsqueda.
          Parámetros:
              info: Objeto que incluye:
                  filter: Colelcción que incluye:
                      checked: Setear en "true" si desea que se encuentre checkeado por defecto. Opcional
                      value: valor por el cual se filtrarán los "cards"
                      name: texto lateral del check
                  search: Objeto que incluye:
                      placeholder: texto que mostrará el campo / buscador.
                      icon: ícono del buscador
              svg-directory: Directorio base del icono.
      * gallery-card.html: Carta que muestra imagen circular, con ícono inferior. Posee un background del color secundario.
          Parámetros:
            card: Objeto que incluye:
              image: Objeto que incluye:
                name: nombre de la imágen
                alt: texto alternativo a imágen
      * ingredients-box.html:
          Parámetros:
            info: Objeto que incluye:
              title: título de la sección
              subtitle: subtítulo de la sección
            column: Añada e iguale a "true" si desea formar una columna. Opcional
            background: Imágen de fondo. Opcional
            quantity-box: Parámetros para componente "quantity-box"
              title: titulo de la caja
              btn: Nombre del botón de cantidad
              quantity: Cantidad por defecto, que mostrará el campo
            table:  Parámetros para componente "table": header, footer, content.
      * steps-box.html : Menú que muestra los pasos de una receta
          Parámetros:
            steps: Objeto que incluye:
              id: identificador del paso
              name: nombre del paso
            page: Página de receta. Incluye identificador de la receta.
            
## Generación: "docs"

`jekyll build` or `bundle exec jekyll build`

