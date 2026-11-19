// 1. Abrir y cerrar el menú en dispositivos móviles
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });

    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
    }

    // 2. Actualizar el mensaje del Checklist interactivo del Hero
    function updateAuditFeedback() {
      const checkedCount = document.querySelectorAll('#quickAuditList input[type="checkbox"]:checked').length;
      const feedbackBox = document.getElementById('auditFeedbackBox');

      if (checkedCount === 0) {
        feedbackBox.textContent = '✨ ¡Excelente base! Aun así, podemos ayudarte a escalar tus resultados al siguiente nivel.';
      } else if (checkedCount <= 2) {
        feedbackBox.textContent = '💡 Tienes ' + checkedCount + ' punto(s) clave por optimizar. ¡Resolvámoslo en tu Diagnóstico Inicial Gratuito!';
      } else {
        feedbackBox.textContent = '🚨 Tu marca necesita estructura urgente (' + checkedCount + '/4 señales). ¡Agenda tu Diagnóstico Gratis hoy mismo!';
      }
    }

    // 3. Preseleccionar un servicio en el formulario cuando el usuario hace clic en una tarjeta
    function selectService(serviceName) {
      const selectElement = document.getElementById('servicioInteres');
      selectElement.value = serviceName;

      // Desplazar suavemente hacia la sección de contacto
      const contactSection = document.getElementById('contacto');
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    // 4. Filtrar los Casos de Éxito por categoría
    function filterCases(category, clickedButton) {
      // Quitar clase activa de todos los botones y ponerla en el botón pulsado
      const buttons = document.querySelectorAll('.filter-btn');
      buttons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      clickedButton.classList.add('active');

      // Mostrar u ocultar las tarjetas según su atributo data-category
      const cards = document.querySelectorAll('.case-card');
      cards.forEach(function (card) {
        if (category === 'todos' || card.getAttribute('data-category') === category) {
          card.classList.remove('hidden-case');
        } else {
          card.classList.add('hidden-case');
        }
      });
    }

    // 5. Validación y envío del formulario de Diagnóstico Inicial Gratuito
    const diagnosticForm = document.getElementById('diagnosticForm');
    const formError = document.getElementById('formError');
    const submitBtn = diagnosticForm ? diagnosticForm.querySelector('button[type="submit"]') : null;

    diagnosticForm.addEventListener('submit', function (event) {
      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const instagram = document.getElementById('instagram').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      // Validar que no estén vacíos y que el correo tenga "@"
      if (!nombre || !correo || !instagram || !mensaje || !correo.includes('@')) {
        event.preventDefault(); // Detiene el envío si faltan campos
        formError.style.display = 'block';
        return;
      }

      formError.style.display = 'none';

      // Cambiar texto del botón para feedback visual mientras viaja
      if (submitBtn) {
        submitBtn.textContent = 'Enviando solicitud... ⏳';
      }
      // Al ser método POST nativo, el formulario se envía directamente a FormSubmit
    });

    function resetForm() {
      diagnosticForm.reset();
      formSuccess.style.display = 'none';
      diagnosticForm.style.display = 'block';
    }

    // 6. Marcar enlace activo en el menú superior según el scroll
    window.addEventListener('scroll', function () {
      const sections = ['inicio', 'quienes-somos', 'servicios', 'casos-exito', 'contacto'];
      let currentSection = 'inicio';

      sections.forEach(function (id) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          currentSection = id;
        }
      });

      document.querySelectorAll('.main-nav__link').forEach(function (link) {
        if (link.getAttribute('data-section') === currentSection) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });
