// Year
var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

// Nav scroll
var nav = document.getElementById('nav');
if (nav) {
  var onScroll = function(){ nav.classList.toggle('scrolled', window.scrollY > 20 || nav.classList.contains('force-solid')); };
  // Always solid on inner pages (no hero behind), keep dynamic on home
  if (document.body.dataset.home !== '1') nav.classList.add('scrolled');
  else { onScroll(); window.addEventListener('scroll', onScroll); }
}

// Mobile nav
var toggle = document.getElementById('navToggle');
var mobile = document.getElementById('navMobile');
if (toggle && mobile) {
  toggle.addEventListener('click', function(){ mobile.classList.toggle('open'); });
  mobile.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ mobile.classList.remove('open'); }); });
}

// Services
var services = [
  { icon:'🧭', title:'Ingeniería y Desarrollo de Proyectos', desc:'Diseñamos soluciones técnicas eficientes y adaptadas a cada cliente. Desarrollamos ingeniería conceptual, básica y de detalle.', items:['Estudios y diseño de líneas de transmisión','Ingeniería de subestaciones eléctricas','Cálculos y especificaciones técnicas','Integración de sistemas de protección y control']},
  { icon:'⛑️', title:'Construcción de Líneas de Transmisión', desc:'Proyectos de líneas de transmisión en alta y media tensión hasta 500 kV con altos estándares de calidad y seguridad.', items:['Montaje de estructuras y torres','Tendido y tensado de conductores','Obras civiles asociadas','Puesta en servicio']},
  { icon:'⚙️', title:'Construcción y Montaje de Subestaciones', desc:'Subestaciones eléctricas desde la obra civil hasta la energización: nuevas, ampliaciones y modernizaciones.', items:['Obras civiles (fundaciones, salas de control)','Montaje electromecánico','Instalación de equipos de potencia','Sistemas de protección y automatización']},
  { icon:'🔧', title:'Mantenimiento de Infraestructura Eléctrica', desc:'Continuidad operativa y confiabilidad mediante mantenimiento preventivo, correctivo y predictivo.', items:['Mantenimiento de líneas de transmisión','Mantenimiento de subestaciones','Inspecciones técnicas','Diagnóstico y optimización de activos']},
  { icon:'🍃', title:'Energías Renovables', desc:'Desarrollo de proyectos de energías limpias e integración de generación renovable a la red.', items:['Infraestructura para parques eólicos','Infraestructura para sistemas fotovoltaicos','Subestaciones y líneas asociadas']},
  { icon:'📋', title:'Inspección, Supervisión y Fiscalización', desc:'Cumplimiento técnico, normativo y contractual en cada fase del proyecto como soporte técnico independiente.', items:['Supervisión técnica de proyectos','Control de calidad','Verificación de cumplimiento normativo','Seguimiento de avance de obra']},
  { icon:'📈', title:'Gestión Integral de Proyectos', desc:'Coordinación y gestión eficiente desde la planificación hasta la entrega final, orientada a resultados.', items:['Planificación y control de proyectos','Gestión de contratos','Coordinación de equipos','Control documental y trazabilidad']},
  { icon:'👥', title:'Suministro de Personal Técnico', desc:'Profesionales cualificados para proyectos de infraestructura energética con experiencia internacional.', items:['Ingenieros eléctricos','Supervisores de obra','Especialistas en subestaciones y líneas','Personal técnico de campo']},
  { icon:'🛡️', title:'Consultoría en Sistemas ISO', desc:'Implementación y mejora de sistemas de gestión bajo estándares internacionales aplicados al sector energético.', items:['ISO 9001 (Calidad)','ISO 14001 (Medio Ambiente)','ISO 45001 (Seguridad y Salud)','ISO 50001 (Energía) · ISO 27001']},
];
var sg = document.getElementById('servicesGrid');
if (sg) sg.innerHTML = services.map(function(s,i){ return '<article class="service"><div class="service-num">'+String(i+1).padStart(2,'0')+'</div><div class="service-icon">'+s.icon+'</div><h3>'+s.title+'</h3><p class="service-desc">'+s.desc+'</p><ul>'+s.items.map(function(it){return '<li>'+it+'</li>';}).join('')+'</ul></article>'; }).join('');

// Values
var values = [
  {i:'🛡️',t:'Seguridad',d:'Priorizamos la integridad de personas, instalaciones y entorno con cultura de prevención.'},
  {i:'🏆',t:'Calidad',d:'Altos estándares técnicos y de gestión, con resultados confiables y sostenibles.'},
  {i:'🤝',t:'Compromiso',d:'Responsabilidad y orientación a resultados, cumpliendo plazos y objetivos.'},
  {i:'🔨',t:'Excelencia Técnica',d:'Equipo calificado con experiencia internacional para proyectos complejos.'},
  {i:'📜',t:'Integridad',d:'Principios éticos y alineación con normativas y estándares internacionales.'},
  {i:'🌱',t:'Sostenibilidad',d:'Desarrollo energético responsable e integración de energías renovables.'},
  {i:'💡',t:'Innovación',d:'Soluciones tecnológicas y metodologías avanzadas para optimizar proyectos.'},
];
var vg = document.getElementById('valuesGrid');
if (vg) vg.innerHTML = values.map(function(v){ return '<div class="value"><div class="value-icon">'+v.i+'</div><div class="value-title">'+v.t+'</div><p>'+v.d+'</p></div>'; }).join('');

// Form
var cf = document.getElementById('contactForm');
if (cf) cf.addEventListener('submit', function(e){ e.preventDefault(); alert('Gracias. Le contactaremos a la brevedad.'); e.target.reset(); });
