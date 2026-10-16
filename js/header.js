/**
 * HEADER & NAVIGATION CONTROLLER
 * Dra. Mariana Lopes — Psicóloga Clínica
 *
 * Gerencia o menu responsivo, acessibilidade (WAI-ARIA, foco, teclado)
 * e integração com as configurações do WhatsApp.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inicialização dos links do WhatsApp a partir de SITE_CONFIG
  initWhatsAppLinks();

  // 2. Inicialização dos links editoriais
  initEditorialLinks();

  // 3. Inicialização do Menu Responsivo (Mobile Drawer)
  initMobileNavigation();
});

/**
 * Atualiza os links editoriais com base no SITE_CONFIG
 */
function initEditorialLinks() {
  if (typeof window.SITE_CONFIG === "undefined" || !window.SITE_CONFIG.editorial) return;
  const url = window.SITE_CONFIG.editorial.allContentsUrl;
  if (!url) return;

  const editorialButtons = document.querySelectorAll("[data-editorial-all]");
  editorialButtons.forEach((btn) => {
    btn.setAttribute("href", url);
  });
}

/**
 * Atualiza os links de WhatsApp na página com base no SITE_CONFIG
 */
function initWhatsAppLinks() {
  if (typeof window.SITE_CONFIG === "undefined") return;

  const waUrl = window.SITE_CONFIG.getWhatsAppUrl();
  const waButtons = document.querySelectorAll("[data-whatsapp-link]");

  waButtons.forEach((btn) => {
    btn.setAttribute("href", waUrl);
  });
}

/**
 * Controla abertura, fechamento e acessibilidade do menu mobile
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector(".header__toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const backdrop = document.querySelector(".mobile-backdrop");

  if (!toggleBtn || !mobileNav) return;

  const navLinks = mobileNav.querySelectorAll("a, button");
  let lastFocusedElement = null;

  /**
   * Abre o menu móvel
   */
  function openMenu() {
    lastFocusedElement = document.activeElement;
    toggleBtn.setAttribute("aria-expanded", "true");
    toggleBtn.setAttribute("aria-label", "Fechar menu de navegação");
    mobileNav.classList.add("is-open");
    if (backdrop) backdrop.classList.add("is-active");
    document.body.classList.add("menu-open");

    // Move o foco para o primeiro link do menu após abrir
    if (navLinks.length > 0) {
      setTimeout(() => {
        navLinks[0].focus();
      }, 50);
    }
  }

  /**
   * Fecha o menu móvel
   */
  function closeMenu() {
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-label", "Abrir menu de navegação");
    mobileNav.classList.remove("is-open");
    if (backdrop) backdrop.classList.remove("is-active");
    document.body.classList.remove("menu-open");

    // Restaura o foco para o botão de toggle ou último elemento ativo
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    } else {
      toggleBtn.focus();
    }
  }

  // Alterna o estado do menu ao clicar no botão hambúrguer
  toggleBtn.addEventListener("click", () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Fecha o menu ao clicar no backdrop (se presente)
  if (backdrop) {
    backdrop.addEventListener("click", () => {
      closeMenu();
    });
  }

  // Fecha o menu ao clicar em qualquer link de navegação interna
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Fecha o menu ao pressionar a tecla 'Escape'
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggleBtn.getAttribute("aria-expanded") === "true") {
      closeMenu();
    }
  });

  // Gerenciamento de Trap de Foco dentro do menu aberto
  mobileNav.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || toggleBtn.getAttribute("aria-expanded") !== "true") return;

    const focusableElements = Array.from(mobileNav.querySelectorAll('a[href], button:not([disabled])'));
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      // Shift + Tab: se estiver no primeiro, vai para o último
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab: se estiver no último, volta para o primeiro
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });

  // Fecha automaticamente o menu caso a janela seja redimensionada para desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820 && toggleBtn.getAttribute("aria-expanded") === "true") {
      closeMenu();
    }
  });
}

