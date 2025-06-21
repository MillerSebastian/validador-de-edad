       function validarNombre(nombre) {
            const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
            return regex.test(nombre.trim()) && nombre.trim().length >= 2;
        }

        function validarEdad(edad) {
            const numero = parseInt(edad);
            return !isNaN(numero) && numero > 0 && numero <= 120 && edad.trim() !== '';
        }

        function mostrarError(elemento, mensaje) {
            const input = document.getElementById(elemento);
            const errorDiv = document.getElementById('error' + elemento.charAt(0).toUpperCase() + elemento.slice(1));
            
            input.classList.add('error');
            errorDiv.textContent = mensaje;
            errorDiv.classList.add('show');
            
            setTimeout(() => {
                input.classList.remove('error');
            }, 500);
        }

        function limpiarErrores() {
            const inputs = document.querySelectorAll('input');
            const errors = document.querySelectorAll('.error-message');
            
            inputs.forEach(input => input.classList.remove('error'));
            errors.forEach(error => {
                error.classList.remove('show');
                error.textContent = '';
            });
        }

        function determinarCategoria(edad) {
            if (edad < 18) {
                return {
                    categoria: 'menor',
                    mensaje: `¡Hola! eres menor de edad ${edad}. ¡Sigue aprendiendo y disfrutando del código!. ¡Disfruta esta etapa de tu vida! 🌟`,
                    icono: '👶'
                };
            } else if (edad >= 18 && edad < 65) {
                return {
                    categoria: 'mayor',
                    mensaje: `¡Perfecto! Eres mayor de edad con ${edad} ¡Prepárate para grandes oportunidades en el mundo de la programación! 💪`,
                    icono: '🧑'
                };
            } else {
                return {
                    categoria: 'adulto-mayor',
                    mensaje: `¡Qué honor! Eres un adulto mayor con ${edad} años. ¡Toda una vida de experiencias! 👴`,
                    icono: '🌟'
                };
            }
        }

        function validarDatos() {
            const button = document.querySelector('button');
            button.classList.add('clicked');
            
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 300);

            limpiarErrores();

            const nombre = document.getElementById('nombre').value;
            const edad = document.getElementById('edad').value;
            const resultado = document.getElementById('resultado');
            
            let hayErrores = false;

            // Validar nombre
            if (!nombre.trim()) {
                mostrarError('nombre', 'El nombre es obligatorio');
                hayErrores = true;
            } else if (!validarNombre(nombre)) {
                mostrarError('nombre', 'El nombre solo puede contener letras y espacios');
                hayErrores = true;
            }

            // Validar edad
            if (!edad.trim()) {
                mostrarError('edad', 'La edad es obligatoria');
                hayErrores = true;
            } else if (!validarEdad(edad)) {
                mostrarError('edad', 'Ingresa una edad válida (1-120 años)');
                hayErrores = true;
            }

            if (hayErrores) {
                resultado.classList.remove('show');
                return;
            }

            // Mostrar resultado
            const edadNum = parseInt(edad);
            const info = determinarCategoria(edadNum);
            
            resultado.className = `respuesta ${info.categoria}`;
            resultado.innerHTML = `
                <div>
                    <div style="font-size: 2em; margin-bottom: 10px;">${info.icono}</div>
                    <strong>${nombre.trim()}</strong><br>
                    ${info.mensaje}
                </div>
            `;
            
            setTimeout(() => {
                resultado.classList.add('show');
            }, 100);
        }

        // Permitir envío con Enter
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                validarDatos();
            }
        });

        // Limpiar errores al escribir
        document.getElementById('nombre').addEventListener('input', function() {
            if (this.classList.contains('error')) {
                limpiarErrores();
            }
        });

        document.getElementById('edad').addEventListener('input', function() {
            if (this.classList.contains('error')) {
                limpiarErrores();
            }
            
            // Solo permitir números
            this.value = this.value.replace(/[^0-9]/g, '');
        });