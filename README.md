# CarSalePage - Página de Venda de Carro

Este projeto é uma página responsiva para a venda de um veículo particular, utilizando **React**, **MUI**, **Swiper.js** e integração com **Tawk.to** para chat.

<!-- ![Preview](https://placehold.co/1000x400?text=CarSalePage+Preview) -->

##  Tecnologias Utilizadas
- [React](https://react.dev/) – Biblioteca JavaScript para a construção de interfaces de usuário interativas.
- [Vite](https://vitejs.dev/) – Ferramenta de build e desenvolvimento moderna e otimizada para aplicações web.
- [TypeScript](https://www.typescriptlang.org/) – Superconjunto do JavaScript que adiciona tipagem estática e recursos avançados à linguagem.
- [MUI (Material-UI)](https://mui.com/) – Biblioteca de componentes React que implementa o Material Design para interfaces elegantes e responsivas.
- [Swiper.js](https://swiperjs.com/) – Biblioteca moderna para criação de sliders e carrosséis com suporte a gestos e responsividade.
- [Date-fns](https://date-fns.org/) – Biblioteca para manipulação e formatação de datas de forma simples e eficiente.
- [Tawk.to](https://www.tawk.to/) – Ferramenta de chat online que possibilita interações em tempo real com os visitantes do site.


##  Instalação e Execução
###  Pré-requisitos
Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) – Ambiente de execução JavaScript que permite a execução de código no servidor, possibilitando a construção de aplicações escaláveis.
- [Git](https://git-scm.com/) – Sistema de controle de versões distribuído, essencial para gerenciar e colaborar no desenvolvimento de projetos de software.


###  Passos para rodar o projeto
1. **Clone o repositório**
   ```Bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```
   
2. **Instale as dependências**
   ```Bash
   npm install
   ```

3. **Execute o projeto**
   ```Bash
   npm run dev
   ```

4. **Acesse no navegador**  
   O projeto estará rodando em http://localhost:5173/ (ou outra porta indicada).

##  Configuração do Tawk.to
Este projeto integra o **Tawk.to** para suporte via chat.  
Para ativar, modifique o componente \TawkToWidget.tsx\ e insira a **URL do seu widget**.

<!-- ##  Demonstração
###  Layout Desktop
![Demo Desktop](https://placehold.co/600x400/gray/white)

###  Layout Mobile
![Demo Mobile](https://placehold.co/400x800/gray/white) -->

##  Galeria de Imagens (Swiper.js)
A página possui uma galeria de fotos responsiva, que se ajusta automaticamente ao tamanho das imagens.

```	sx
<Swiper modules={[Pagination, Navigation]} pagination navigation autoHeight>
  <SwiperSlide><img src='URL_DA_IMAGEM' alt='Imagem do carro' /></SwiperSlide>
</Swiper>
```

##  Sobre o Projeto
Esta página foi criada para oferecer uma apresentação profissional e organizada de um veículo à venda. Ela inclui:
 Informações detalhadas do carro  
 Galeria de fotos interativa  
 Integração com chat online  
 Layout responsivo  

##  Futuras Melhorias
- [ ] Implementar API para gerenciamento de ofertas  
- [ ] Adicionar formulário de contato  
- [ ] Melhorar a animação da página  

##  Autor
- [Ricardo](https://github.com/bragarik)  

Caso tenha dúvidas ou sugestões, fique à vontade para abrir uma **issue** ou um **pull request**.   

