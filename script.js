  function showInfoMessage(message, type = 'info') {
    const infoAlertDiv = document.getElementById('infoAlert');
    let icon = 'fas fa-info-circle';
    if (type === 'success') icon = 'fas fa-lightbulb';
    if (type === 'warning') icon = 'fas fa-quote-left';
    if (type === 'info') icon = 'fas fa-info-circle';

    infoAlertDiv.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show mt-2" role="alert">
      <i class="${icon} me-2"></i> ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    infoAlertDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  const factsArray = [
    "🌟 Борские мастера изготовили рубиновое стекло для кремлёвских звёзд!",
    "🏭 В 1943 году Борский стеклозавод выпускал колбы для авиационных ламп и бронестекло.",
    "🚡 Канатная дорога «Нижний Новгород – Бор» — единственная в России городская канатная дорога через такую широкую реку.",
    "🌲 Бор в переводе означает сосновый лес, и действительно, город окружён хвойными массивами.",
    "🏅 В 2020 году Бор получил почётное звание «Город трудовой доблести»."
  ];

  const quotes = [
    "«Бор — это не просто город, это перекрёсток древних торговых путей и индустриальной мощи» — краевед И. Орлов",
    "«Здесь, на левом берегу Волги, сосны шепчут истории о героях-стеклодувах и космонавтах» — Н. Зарубин",
    "«Сквозь столетия пронёс Бор дух мастерства: от слободской иконописи до звёздного стекла» — летопись города."
  ];

  document.getElementById('surpriseBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * factsArray.length);
    showInfoMessage(factsArray[randomIndex], 'success');
  });

  document.getElementById('quoteBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    showInfoMessage(quotes[randomIndex], 'warning');
  });

  document.body.addEventListener('click', (e) => {
    const targetBtn = e.target.closest('.fact-card-btn');
    if (targetBtn && targetBtn.getAttribute('data-fact')) {
      e.preventDefault();
      const factText = targetBtn.getAttribute('data-fact');
      showInfoMessage(factText, 'info');
    }
  });

  const showPlacesBtn = document.getElementById('showPlacesBtn');
  const placesMessage = document.getElementById('placesMessage');
  showPlacesBtn.addEventListener('click', () => {
    placesMessage.innerHTML = `<div class="alert alert-secondary mt-2 alert-dismissible fade show" role="alert">
      🗺️ Маршрут: Исторический музей → Стекольный завод (экскурсия) → Сергиевская слобода → парк «Моховые горы» → канатная дорога.
      <i class="fas fa-walking ms-2"></i> Протяжённость ~6 км.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
  });

  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  if (typeof bootstrap !== 'undefined') {
    tooltipTriggerList.map(el => new bootstrap.Tooltip(el));
  }