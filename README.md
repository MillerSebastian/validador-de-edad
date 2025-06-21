# 🎯 Validador de Edad Interactivo

Una aplicación web moderna y elegante que permite a los usuarios ingresar su nombre y edad para determinar su categoría etaria de manera interactiva y visualmente atractiva.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Demo](#-demo)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Funcionalidades](#-funcionalidades)
- [Validaciones](#-validaciones)
- [Categorías de Edad](#-categorías-de-edad)
- [Diseño y Estilo](#-diseño-y-estilo)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Autor](#-autor)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz con efectos glassmorphism y gradientes
- 📱 **Totalmente Responsivo**: Optimizado para dispositivos móviles y desktop
- ✅ **Validación en Tiempo Real**: Validación inmediata de datos de entrada
- 🌟 **Animaciones Suaves**: Transiciones y efectos visuales elegantes
- 🔒 **Validación Robusta**: Previene entrada de datos inválidos
- ⚡ **Rendimiento Optimizado**: Código ligero y eficiente
- 🎯 **Experiencia de Usuario**: Interfaz intuitiva y fácil de usar

## 🚀 Demo

Visita la demo en vivo: **[TU_DOMINIO_AQUI]**

![Screenshot del Validador de Edad](screenshot.png)

## 🛠 Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Estilos avanzados con Flexbox y animaciones
- **JavaScript ES6+**: Lógica de validación y manipulación del DOM
- **Responsive Design**: Compatible con todos los dispositivos

## 📦 Instalación

### Opción 1: Descarga Directa
```bash
# Clona el repositorio
git clone https://github.com/TU_USUARIO_GITHUB/validador-edad.git

# Navega al directorio
cd validador-edad

# Abre index.html en tu navegador
```

### Opción 2: Uso Directo
Descarga los archivos y mantenlos en la estructura de carpetas:
- `index.html` en la raíz
- `src/css/style.css` para los estilos
- `src/js/main.js` para la funcionalidad

Luego abre `index.html` en cualquier navegador web moderno.

## 💡 Uso

1. **Ingresa tu nombre**: Escribe tu nombre completo en el primer campo
2. **Ingresa tu edad**: Introduce tu edad en años en el segundo campo
3. **Haz clic en "Verificar Edad"**: O presiona Enter para validar
4. **Ve el resultado**: La aplicación mostrará tu categoría etaria con un mensaje personalizado

## 🔧 Funcionalidades

### Validaciones Implementadas

#### 📝 Validación de Nombre
- ✅ Solo acepta letras y espacios
- ✅ Mínimo 2 caracteres
- ✅ No permite números ni caracteres especiales
- ✅ Elimina espacios en blanco al inicio y final

#### 🔢 Validación de Edad
- ✅ Solo acepta números enteros
- ✅ Rango válido: 1-120 años
- ✅ No permite números negativos
- ✅ No permite el valor 0
- ✅ No permite valores decimales

### Características de la Interfaz

#### 🎨 Elementos Visuales
- **Labels Flotantes**: Se animan al enfocar los campos
- **Efectos Hover**: Botones con transformaciones suaves
- **Animaciones de Error**: Efecto shake en campos inválidos
- **Transiciones**: Aparición suave de resultados
- **Glassmorphism**: Efecto de vidrio esmerilado en la carta principal

#### ⌨️ Interacciones
- **Envío con Enter**: Permite validar presionando la tecla Enter
- **Limpieza Automática**: Los errores se limpian al escribir
- **Feedback Visual**: Colores y animaciones indican el estado
- **Responsive**: Adaptación automática a diferentes tamaños de pantalla

## 📊 Categorías de Edad

La aplicación clasifica a los usuarios en tres categorías:

| Categoría | Rango de Edad | Color | Emoji | Descripción |
|-----------|---------------|-------|-------|-------------|
| **Menor de Edad** | 0-17 años | 🔴 Rojo | 👶 | Personas que aún no han alcanzado la mayoría de edad |
| **Mayor de Edad** | 18-64 años | 🔵 Azul | 🧑 | Adultos con plenos derechos y responsabilidades |
| **Adulto Mayor** | 65+ años | 🟡 Dorado | 🌟 | Personas en la tercera edad |

## 🎨 Diseño y Estilo

### Paleta de Colores
- **Primario**: `#007bff` - Azul principal
- **Secundario**: `#00d4ff` - Azul claro
- **Error**: `#ff4757` - Rojo para errores
- **Éxito**: `#ffd700` - Dorado para adultos mayores
- **Fondo**: Gradiente oscuro `#0f0f0f` a `#1a1a1a`

### Tipografía
- **Fuente Principal**: Segoe UI, system fonts
- **Tamaños**: Jerárquicos desde 12px hasta 2.2em
- **Pesos**: Regular (400) y Semi-bold (600)

### Efectos Visuales
- **Backdrop Filter**: Efecto blur de 10px
- **Box Shadow**: Sombras suaves y profundas
- **Border Radius**: Esquinas redondeadas de 12-20px
- **Gradientes**: Lineales en múltiples elementos

## 📁 Estructura del Proyecto

```
validador-edad/
├── index.html              # Página principal HTML
├── src/                    # Código fuente
│   ├── css/
│   │   └── style.css      # Estilos CSS principales
│   └── js/
│       └── main.js        # Lógica JavaScript
├── README.md              # Documentación del proyecto
├── screenshot.png         # Captura de pantalla (opcional)
└── LICENSE               # Licencia del proyecto (opcional)
```

### Organización del Código

El proyecto utiliza una estructura modular organizada:

- **index.html**: Estructura HTML semántica y limpia
- **src/css/style.css**: Estilos CSS organizados por componentes
- **src/js/main.js**: Funciones JavaScript modulares para validación

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Sigue estos pasos:

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Ideas para Contribuir
- 🌍 Agregar soporte para múltiples idiomas
- 🎨 Nuevos temas de color
- 📊 Gráficos de distribución etaria
- 🔊 Efectos de sonido
- 💾 Guardado de historial (localStorage)

## 🐛 Reportar Bugs

Si encuentras algún problema:

1. Verifica que no haya sido reportado anteriormente
2. Crea un nuevo issue con detalles específicos
3. Incluye pasos para reproducir el error
4. Adjunta capturas de pantalla si es necesario

## 📈 Roadmap

- [ ] Modo oscuro/claro toggle
- [ ] Soporte para fechas de nacimiento
- [ ] Cálculo automático de edad
- [ ] Estadísticas de uso
- [ ] PWA (Progressive Web App)
- [ ] Base de datos para guardar registros

## 🔧 Configuración de Desarrollo

Para desarrollar localmente:

```bash
# Clona el repositorio
git clone https://github.com/TU_USUARIO_GITHUB/validador-edad.git
cd validador-edad

# La estructura de archivos es:
# - index.html (página principal)
# - src/css/style.css (estilos)
# - src/js/main.js (JavaScript)

# Para desarrollo web, puedes usar:
# - Live Server (VS Code extension)
# - Python: python -m http.server 8000
# - Node.js: npx serve

# No se requieren dependencias adicionales
```

## 📱 Compatibilidad

| Navegador | Versión Mínima | Estado |
|-----------|----------------|--------|
| Chrome | 60+ | ✅ Totalmente compatible |
| Firefox | 55+ | ✅ Totalmente compatible |
| Safari | 12+ | ✅ Totalmente compatible |
| Edge | 79+ | ✅ Totalmente compatible |
| Opera | 47+ | ✅ Totalmente compatible |

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ve el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**[Sebastian_Rodelo_Riwi_Coder]**

- 🌍 Website: []
- 🐱 GitHub: [@Miller_Sebastian](https://github.com/TU_USUARIO_GITHUB)
- 📧 Email: sebastianrodelog@gmail.com
- 💼 LinkedIn: [[Sebastian Rodelo](https://linkedin.com/in/tu-perfil](https://www.linkedin.com/in/sebastian-rodelo-2a30041b1/))]

---

⭐ **¿Te gustó el proyecto?** ¡Dale una estrella en GitHub!

**Hecho con 💜 por [Miller_Sebastian]**
