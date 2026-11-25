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
    feedbackBox.textContent = '¡Excelente base! Tu marca tiene un punto de partida sólido.';
  } else if (checkedCount <= 2) {
    feedbackBox.textContent = 'Tienes ' + checkedCount + ' punto(s) clave por optimizar para destacar de la competencia.';
  } else {
    feedbackBox.textContent = 'Detectamos ' + checkedCount + '/4 aspectos a potenciar con una identidad estratégica.';
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

// Control y navegación fluida para "Inicio" y el Logotipo
document.querySelectorAll('a[href="#inicio"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    closeMobileMenu();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    if (history.pushState) {
      history.pushState(null, '', '#inicio');
    }
  });
});

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

// Reel interactivo: deslizamiento automático lento + arrastre con mouse o dedo
(function () {
  const wrapper = document.querySelector('.works-reel-wrapper');
  const track = document.querySelector('.works-reel-track');
  if (!wrapper || !track) return;

  let isDragging = false;
  let isPaused = false;
  let hasDragged = false;
  let startX = 0;
  let scrollStart = 0;
  let exactScroll = 0;

  function autoStep() {
    if (!isDragging && !isPaused) {
      exactScroll += 0.7;
      const halfWidth = track.scrollWidth / 2;
      if (halfWidth > 0 && exactScroll >= halfWidth) {
        exactScroll -= halfWidth;
      }
      wrapper.scrollLeft = exactScroll;
    } else {
      exactScroll = wrapper.scrollLeft;
    }
    requestAnimationFrame(autoStep);
  }
  requestAnimationFrame(autoStep);

  wrapper.addEventListener('mouseenter', function () { isPaused = true; });
  wrapper.addEventListener('mouseleave', function () {
    isPaused = false;
    isDragging = false;
    wrapper.classList.remove('is-dragging');
  });

  wrapper.addEventListener('mousedown', function (e) {
    isDragging = true;
    hasDragged = false;
    startX = e.pageX - wrapper.offsetLeft;
    scrollStart = wrapper.scrollLeft;
    wrapper.classList.add('is-dragging');
  });

  window.addEventListener('mouseup', function () {
    if (!isDragging) return;
    isDragging = false;
    wrapper.classList.remove('is-dragging');
  });

  wrapper.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - wrapper.offsetLeft;
    const walk = x - startX;
    if (Math.abs(walk) > 5) hasDragged = true;
    wrapper.scrollLeft = scrollStart - walk;
  });

  wrapper.addEventListener('touchstart', function () { isPaused = true; }, { passive: true });
  wrapper.addEventListener('touchend', function () { isPaused = false; }, { passive: true });

  wrapper.addEventListener('dragstart', function (e) { e.preventDefault(); });
  wrapper.addEventListener('click', function (e) {
    if (hasDragged) {
      e.preventDefault();
      hasDragged = false;
    }
  });
})();
