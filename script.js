const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
  });
}

function closeMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
  }
}

function updateAuditFeedback() {
  const checkedCount = document.querySelectorAll('#quickAuditList input[type="checkbox"]:checked').length;
  const feedbackBox = document.getElementById('auditFeedbackBox');
  if (!feedbackBox) return;

  if (checkedCount === 0) {
    feedbackBox.textContent = 'Excelente base. Aun así, podemos ayudarte a escalar tus resultados al siguiente nivel.';
  } else if (checkedCount <= 2) {
    feedbackBox.textContent = 'Tienes ' + checkedCount + ' punto(s) clave por optimizar. Podemos resolverlo en tu Diagnóstico Inicial.';
  } else {
    feedbackBox.textContent = 'Tu marca necesita estructura estratégica urgente (' + checkedCount + '/4 señales detectadas). Agenda tu Diagnóstico Inicial hoy mismo.';
  }
}

function selectService(serviceName) {
  const selectElement = document.getElementById('servicioInteres');
  if (selectElement) {
    selectElement.value = serviceName;
  }

  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function filterCases(category, clickedButton) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(function (btn) {
    btn.classList.remove('active');
  });
  if (clickedButton) {
    clickedButton.classList.add('active');
  }

  const cards = document.querySelectorAll('.case-card');
  cards.forEach(function (card) {
    if (category === 'todos' || card.getAttribute('data-category') === category) {
      card.classList.remove('hidden-case');
    } else {
      card.classList.add('hidden-case');
    }
  });
}

const diagnosticForm = document.getElementById('diagnosticForm');
const formError = document.getElementById('formError');
const formSuccess = document.getElementById('formSuccess');
const successText = document.getElementById('successText');
const submitBtn = diagnosticForm ? diagnosticForm.querySelector('button[type="submit"]') : null;

if (diagnosticForm) {
  diagnosticForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const instagram = document.getElementById('instagram').value.trim();
    const servicio = document.getElementById('servicioInteres').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !correo || !instagram || !mensaje || !correo.includes('@')) {
      if (formError) formError.style.display = 'block';
      return;
    }

    if (formError) formError.style.display = 'none';

    const textoOriginal = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando solicitud...';
    }

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'eb2337b7-0c45-4611-b81d-d313ae6fb3d2',
        Nombre: nombre,
        Email: correo,
        Instagram: instagram,
        Servicio: servicio,
        Mensaje: mensaje,
        from_name: 'Leuswork Web Leads',
        subject: 'Nueva Solicitud de Diagnóstico - ' + nombre + ' (' + instagram + ')'
      })
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log('Solicitud enviada:', data);
      })
      .catch(function (err) {
        console.warn('Nota de envío:', err);
      })
      .finally(function () {
        diagnosticForm.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
        if (successText) {
          successText.textContent =
            '¡Listo, ' + nombre + '! Hemos recibido los datos de ' + instagram +
            ' para "' + servicio + '". Dayana y Diana te contactarán pronto al correo ' + correo + '.';
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = textoOriginal;
        }
      });
  });
}

function resetForm() {
  if (diagnosticForm) {
    diagnosticForm.reset();
    if (formSuccess) formSuccess.style.display = 'none';
    diagnosticForm.style.display = 'block';
  }
}

window.addEventListener('scroll', function () {
  const sections = ['inicio', 'servicios', 'casos-exito', 'quienes-somos', 'contacto'];
  let currentSection = 'inicio';

  const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60);

  if (isAtBottom) {
    currentSection = 'contacto';
  } else {
    sections.forEach(function (id) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 140) {
        currentSection = id;
      }
    });
  }

  document.querySelectorAll('.main-nav__link').forEach(function (link) {
    if (link.getAttribute('data-section') === currentSection) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
