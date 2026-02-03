// Configuración inicial
document.addEventListener('DOMContentLoaded', function() {
    // Establecer el año actual en el footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Inicializar funcionalidades
    initSmoothScroll();
    initScrollSpy();
    initScrollAnimations();
    initButtonEvents();
    initNavbarScroll();
    initTooltips();
    
    // Mostrar mensaje de bienvenida
    console.log('Sitio web educativo de WordPress CMS/LMS cargado correctamente');
});

// Smooth scroll para enlaces internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Excluir enlaces que no son secciones
            if (targetId === '#' || targetId === '#!') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calcular posición con offset para la navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Cerrar navbar en dispositivos móviles
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler && !navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
}

// ScrollSpy para resaltar enlaces activos
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Observador de intersección
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Actualizar enlaces activos
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50% 0px'
    });
    
    // Observar cada sección
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Animaciones al hacer scroll
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.card, .highlight-box, .section-title, .comparison-table');
    
    // Agregar clase inicial para animación
    animatedElements.forEach(el => {
        el.classList.add('section-hidden');
    });
    
    // Observador de intersección para animaciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('section-hidden');
                entry.target.classList.add('section-visible');
                
                // Animar elementos con retraso escalonado
                if (entry.target.classList.contains('card')) {
                    const index = Array.from(animatedElements).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observar elementos animados
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Eventos para botones
function initButtonEvents() {
    // Botón de demostración
    const demoBtn = document.getElementById('demo-btn');
    if (demoBtn) {
        demoBtn.addEventListener('click', function() {
            showModal(
                'Solicitar Demostración',
                'Complete el siguiente formulario y nos pondremos en contacto para coordinar una demostración personalizada de WordPress como CMS/LMS.',
                'demo-form'
            );
        });
    }
    
    // Botón de guía PDF
    const guideBtn = document.getElementById('guide-btn');
    if (guideBtn) {
        guideBtn.addEventListener('click', function() {
            showModal(
                'Descargar Guía PDF',
                '¡Gracias por tu interés! La guía "WordPress como CMS y LMS: Guía Completa" se descargará automáticamente. Si la descarga no comienza, <a href="#" class="text-primary">haz clic aquí</a>.',
                'download-guide'
            );
            
            // Simular descarga después de 2 segundos
            setTimeout(() => {
                alert('¡Guía descargada! Revisa tu carpeta de descargas.');
            }, 2000);
        });
    }
    
    // Botón de contacto
    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            showModal(
                'Contactar con Nosotros',
                '¿Tienes preguntas sobre WordPress como CMS o LMS? Completa el formulario y nuestro equipo te responderá en menos de 24 horas.',
                'contact-form'
            );
        });
    }
    
    // Todos los botones btn-custom
    document.querySelectorAll('.btn-custom').forEach(btn => {
        if (!btn.id) { // Solo si no tiene ID específico
            btn.addEventListener('click', function() {
                showModal(
                    'Más Información',
                    'Para obtener más información sobre nuestros servicios de desarrollo web educativo con WordPress, por favor contáctenos.',
                    'info-form'
                );
            });
        }
    });
}

// Efecto de scroll para la navbar
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
}

// Tooltips para iconos
function initTooltips() {
    // Inicializar tooltips de Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Agregar tooltips personalizados a iconos
    document.querySelectorAll('.icon-container').forEach(icon => {
        icon.setAttribute('title', 'Característica destacada');
        icon.setAttribute('data-bs-toggle', 'tooltip');
        icon.setAttribute('data-bs-placement', 'top');
        
        // Crear tooltip para este icono
        new bootstrap.Tooltip(icon);
    });
}

// Mostrar modal personalizado
function showModal(title, content, modalType) {
    // Crear modal dinámico
    const modalId = 'custom-modal-' + Date.now();
    const modalHTML = `
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${modalId}Label">${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>${content}</p>
                        ${getFormByType(modalType)}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-custom" onclick="submitForm('${modalType}')">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Agregar modal al body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Mostrar modal
    const modalElement = document.getElementById(modalId);
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    
    // Eliminar modal cuando se cierre
    modalElement.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modalElement);
    });
}

// Obtener formulario según tipo
function getFormByType(type) {
    switch(type) {
        case 'demo-form':
            return `
                <form id="demoForm">
                    <div class="mb-3">
                        <label for="demoName" class="form-label">Nombre completo</label>
                        <input type="text" class="form-control" id="demoName" required>
                    </div>
                    <div class="mb-3">
                        <label for="demoEmail" class="form-label">Correo electrónico</label>
                        <input type="email" class="form-control" id="demoEmail" required>
                    </div>
                    <div class="mb-3">
                        <label for="demoOrganization" class="form-label">Organización</label>
                        <input type="text" class="form-control" id="demoOrganization">
                    </div>
                    <div class="mb-3">
                        <label for="demoMessage" class="form-label">¿Qué te gustaría ver en la demostración?</label>
                        <textarea class="form-control" id="demoMessage" rows="3"></textarea>
                    </div>
                </form>
            `;
        case 'contact-form':
            return `
                <form id="contactForm">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="contactName" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="contactName" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="contactEmail" class="form-label">Email</label>
                            <input type="email" class="form-control" id="contactEmail" required>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="contactSubject" class="form-label">Asunto</label>
                        <select class="form-select" id="contactSubject" required>
                            <option value="">Selecciona un tema</option>
                            <option value="cms">WordPress como CMS</option>
                            <option value="lms">WordPress como LMS</option>
                            <option value="both">Ambos (CMS y LMS)</option>
                            <option value="other">Otro</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="contactMessage" class="form-label">Mensaje</label>
                        <textarea class="form-control" id="contactMessage" rows="4" required></textarea>
                    </div>
                </form>
            `;
        case 'download-guide':
            return `
                <div class="text-center p-3">
                    <i class="bi bi-file-earmark-pdf display-1 text-primary"></i>
                    <p class="mt-3">Guía completa en formato PDF (2.5 MB)</p>
                </div>
            `;
        default:
            return `
                <div class="alert alert-info">
                    <i class="bi bi-info-circle me-2"></i>
                    Por favor, completa tus datos y nos pondremos en contacto contigo.
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" placeholder="Tu correo electrónico" required>
                </div>
            `;
    }
}

// Simular envío de formulario
function submitForm(formType) {
    // Simular validación y envío
    const modal = bootstrap.Modal.getInstance(document.querySelector('.modal.show'));
    
    // Mostrar mensaje de éxito
    const modalBody = document.querySelector('.modal.show .modal-body');
    modalBody.innerHTML = `
        <div class="text-center p-4">
            <i class="bi bi-check-circle display-1 text-success mb-3"></i>
            <h5>¡Solicitud enviada con éxito!</h5>
            <p>Te contactaremos en las próximas 24 horas. Gracias por tu interés.</p>
        </div>
    `;
    
    // Actualizar botones del modal
    const modalFooter = document.querySelector('.modal.show .modal-footer');
    modalFooter.innerHTML = `
        <button type="button" class="btn btn-custom" data-bs-dismiss="modal">Aceptar</button>
    `;
    
    // Registrar en consola
    console.log(`Formulario ${formType} enviado`);
}

// Función para animar contadores (si se añaden estadísticas en el futuro)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    });
}

// Detectar si el usuario está en un dispositivo táctil
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Ajustar estilos para dispositivos táctiles
if (isTouchDevice()) {
    document.body.classList.add('touch-device');
    
    // Mejorar la experiencia táctil
    document.querySelectorAll('.card, .btn').forEach(element => {
        element.style.cursor = 'pointer';
    });
}