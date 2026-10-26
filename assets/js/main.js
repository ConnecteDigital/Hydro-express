// HidroExpress — scripts do site
(function () {
  "use strict";

  var WHATSAPP = "5511970540360";

  document.documentElement.classList.remove("no-js");

  // Menu mobile
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var aberto = menu.classList.toggle("aberto");
      toggle.setAttribute("aria-expanded", aberto ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("aberto");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Ano atual no rodapé
  document.querySelectorAll("[data-ano]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Animação de entrada ao rolar
  var itens = document.querySelectorAll(".revelar");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observer.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    itens.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    itens.forEach(function (item) {
      item.classList.add("visivel");
    });
  }

  // Formulário de contato: monta a mensagem e abre o WhatsApp
  var form = document.getElementById("form-contato");
  if (form) {
    form.addEventListener("submit", function (evento) {
      evento.preventDefault();
      if (!form.reportValidity()) return;

      var dados = new FormData(form);
      var linhas = [
        "Olá, HidroExpress! Gostaria de um orçamento.",
        "",
        "*Nome:* " + dados.get("nome"),
        "*Telefone:* " + dados.get("telefone"),
        "*Cidade/Bairro:* " + dados.get("cidade"),
        "*Serviço:* " + dados.get("servico")
      ];
      var mensagem = (dados.get("mensagem") || "").trim();
      if (mensagem) {
        linhas.push("*Detalhes:* " + mensagem);
      }

      var url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(linhas.join("\n"));
      window.open(url, "_blank", "noopener");
    });
  }
})();
