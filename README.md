# Portfolio Personal - Jose Luis Zamora

Sitio web profesional para marca personal como desarrollador Full Stack, construido con Next.js 15, TypeScript y Tailwind CSS.

## 🚀 Características

- **Frontend Moderno**: Next.js 15 con TypeScript para máxima calidad de código
- **Diseño Responsive**: Mobile-first con Tailwind CSS
- **Modo Oscuro**: Toggle dinámico entre temas claro y oscuro
- **Animaciones Suaves**: Framer Motion para transiciones elegantes
- **SEO Optimizado**: Meta tags, Open Graph y Schema markup
- **Performance**: Optimización de imágenes y lazy loading
- **Accesibilidad**: Cumple estándares WCAG AA

## 🛠️ Tecnologías

- **Framework**: Next.js 15
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Hosting**: Vercel (configurado)

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── about/             # Página "Sobre mí"
│   ├── blog/              # Blog personal
│   ├── contact/           # Formulario de contacto
│   ├── portfolio/         # Portafolio de proyectos
│   ├── layout.tsx         # Layout principal
│   └── page.tsx          # Página de inicio
├── components/
│   ├── layout/           # Componentes de layout (Navbar, Footer)
│   ├── sections/         # Secciones de la página principal
│   └── ui/              # Componentes reutilizables
├── data/                 # Datos estáticos (proyectos, habilidades)
├── hooks/               # Hooks personalizados
├── lib/                 # Utilidades y configuraciones
└── types/               # Definiciones de tipos TypeScript
```

## 🎨 Diseño

### Paleta de Colores

- **Primario**: Azul (#1E3A8A)
- **Secundario**: Grises para fondos y texto
- **Modo Oscuro**: Automático basado en preferencias del sistema

### Tipografía

- **Texto**: Inter (legible y moderna)
- **Títulos**: Poppins (elegante y distintiva)

### Espaciado

- Sistema basado en 8px para consistencia visual

## 📄 Páginas

### 🏠 Inicio

- Hero section con presentación personal
- Sección de habilidades técnicas con barras de progreso
- Proyectos destacados
- Call-to-action para contacto

### 👨‍💻 Sobre mí

- Trayectoria profesional en timeline
- Filosofía de desarrollo
- Educación y certificaciones

### 💼 Portafolio

- Grid de proyectos con filtros por categoría
- Cada proyecto incluye: descripción, tecnologías, enlaces
- Integración con GitHub para repositorios

### 📝 Blog

- Listado de artículos técnicos
- Sistema de etiquetas
- Tiempo de lectura estimado

### 📧 Contacto

- Formulario funcional con validación
- Información de contacto
- Enlaces a redes sociales

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Configuración

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/blog-personal.git
cd blog-personal
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo con Turbopack
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
```

## 📊 Performance

### Optimizaciones Implementadas

- **Images**: Componente Image de Next.js con formatos WebP/AVIF
- **Fonts**: Optimización automática de Google Fonts
- **Code Splitting**: Lazy loading automático de componentes
- **CSS**: Purging automático de Tailwind CSS

### Métricas Objetivo

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Performance Score**: > 90

## 🌐 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio de GitHub a Vercel
2. Las variables de entorno se configuran automáticamente
3. Deploy automático en cada push a main

### Variables de Entorno

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_GITHUB_USERNAME=tu-usuario
```

## 🔧 Personalización

### Datos Personales

Edita los archivos en `src/data/` para actualizar:

- Proyectos
- Habilidades técnicas
- Experiencia laboral
- Información de contacto

### Estilos

Modifica `tailwind.config.js` para:

- Cambiar colores de la marca
- Ajustar tipografías
- Personalizar animaciones

### Contenido

Actualiza las páginas en `src/app/` para:

- Cambiar textos y descripciones
- Añadir nuevas secciones
- Modificar la estructura

## 📈 Esquema de Implementación por Fases

### ✅ Fase 1: Fundación (Completada)

- [x] Configuración inicial de Next.js
- [x] Sistema de diseño con Tailwind
- [x] Componentes base (Button, Card, etc.)
- [x] Layout principal con Navbar y Footer

### ✅ Fase 2: Páginas Principales (Completada)

- [x] Página de inicio con secciones
- [x] Página "Sobre mí"
- [x] Portafolio de proyectos
- [x] Formulario de contacto

### 🔄 Fase 3: Funcionalidades Avanzadas (En Progreso)

- [ ] Integración con GitHub API
- [ ] Sistema de blog con MDX
- [ ] Formulario de contacto funcional
- [ ] Analytics y métricas

### 📋 Fase 4: Optimización y Pulido

- [ ] Optimización SEO avanzada
- [ ] Tests unitarios y de integración
- [ ] Accesibilidad WCAG AA completa
- [ ] PWA (Progressive Web App)

## 🤝 Contribución

¿Encontraste un bug o tienes una sugerencia? ¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Jose Luis Zamora**

- Website: [tu-dominio.com](https://tu-dominio.com)
- Email: tu-email@ejemplo.com
- LinkedIn: [linkedin.com/in/tu-perfil](https://linkedin.com/in/tu-perfil)
- GitHub: [github.com/tu-usuario](https://github.com/tu-usuario)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
