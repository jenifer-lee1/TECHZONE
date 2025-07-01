class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/web-components-project/components/footer/footer.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
      <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
      <footer>
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <i class="fas fa-gamepad"></i>
              <span class="logo_name">TECHZONE</span>
            </div>
            <div class="media-icons">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-tiktok"></i></a>
              <a href="#"><i class="fab fa-twitch"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
          <div class="link-boxes">
            <ul class="box">
              <li class="link_name">Loja</li>
              <li><a href="#">Início</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Novidades</a></li>
            </ul>
            <ul class="box">
              <li class="link_name">Categorias</li>
              <li><a href="#">Periféricos</a></li>
              <li><a href="#">PC Gamer</a></li>
              <li><a href="#">Consoles</a></li>
              <li><a href="#">Acessórios</a></li>
            </ul>
            <ul class="box">
              <li class="link_name">Minha Conta</li>
              <li><a href="#">Perfil</a></li>
              <li><a href="#">Meus pedidos</a></li>
              <li><a href="#">Favoritos</a></li>
              <li><a href="#">Carrinho</a></li>
            </ul>
            <ul class="box">
              <li class="link_name">Suporte</li>
              <li><a href="#">Ajuda</a></li>
              <li><a href="#">Trocas & Devoluções</a></li>
              <li><a href="#">Garantia</a></li>
              <li><a href="#">Fale conosco</a></li>
            </ul>
            <ul class="box input-box">
              <li class="link_name">Receba novidades</li>
              <li><input type="text" placeholder="Digite seu e-mail"></li>
              <li><input type="button" value="Inscrever"></li>
            </ul>
          </div>
        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">
              Copyright © 2025 <a href="#">THECHZONE</a>. Todos os direitos reservados.
            </span>
            <span class="policy_terms">
              <a href="#">Política de Privacidade</a>
              <a href="#">Termos & Condições</a>
            </span>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);