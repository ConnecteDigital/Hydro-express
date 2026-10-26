# HidroExpress — Desentupidora 24h na Grande São Paulo

Site estático (HTML + CSS + JS puro), sem dependências e sem etapa de build.

## Páginas

| Página | Arquivo |
| --- | --- |
| Início | `index.html` |
| Serviços (pia, ralo, esgoto, vaso sanitário, hidrojateamento) | `servicos.html` |
| Área de atendimento (capital + 39 cidades da Grande SP) | `area-de-atendimento.html` |
| Depoimentos | `depoimentos.html` |
| Contato (formulário que envia para o WhatsApp) | `contato.html` |
| Blog + 3 artigos | `blog.html`, `blog/*.html` |

## Contatos usados no site

- WhatsApp: (11) 97054-0360 → `https://wa.me/5511970540360`
- Ligação: 011 97054-0360 → `tel:+5511970540360`

Botão flutuante de ligação no canto inferior esquerdo e de WhatsApp no canto inferior direito, em todas as páginas.

## Antes de publicar

- Substitua os depoimentos de exemplo (`depoimentos.html` e a seção na `index.html`) por avaliações reais de clientes.

## Como visualizar

Abra `index.html` no navegador ou rode `python3 -m http.server` nesta pasta e acesse http://localhost:8000.
Para publicar, basta enviar os arquivos para qualquer hospedagem estática (Vercel, Netlify, GitHub Pages, Hostinger etc.).
