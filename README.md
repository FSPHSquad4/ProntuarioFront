# Prontuário Frontend

Este projeto é uma aplicação frontend desenvolvida para gerenciar prontuários médicos, agendamentos e profissionais de saúde. Ele utiliza tecnologias modernas como React, Vite e bibliotecas auxiliares para criar uma interface de usuário dinâmica e responsiva.

## Funcionalidades Principais

-   **Gerenciamento de Agendamentos**: Integração com `FullCalendar` para exibir e gerenciar consultas médicas.
-   **Cadastro de Profissionais**: Formulário de registro com validação usando `react-hook-form` e `yup`.
-   **Contextos Dinâmicos**: Uso de contextos como `useBookingContext`, `useProfessionalsContext`, `useAuth` e `usePatientsContext` para gerenciar estados globais.
-   **Filtros**: Suporte para filtros avançados em listas de profissionais.
-   **Interface Responsiva**: Design adaptado para diferentes tamanhos de tela.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

-   **`src/app`**: Contém as páginas e componentes principais divididos por áreas como `bookings`, `patients` e `professionals`.
-   **`src/context`**: Gerencia estados globais e lógica compartilhada entre componentes.
-   **`src/components`**: Componentes reutilizáveis como formulários, tabelas e layouts.
-   **`src/utils`**: Funções utilitárias para manipulação de dados e formatação.
-   **`src/services`**: Configuração de chamadas à API.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

-   Node.js (versão 16 ou superior)
-   Gerenciador de pacotes npm ou yarn

## Como Inicializar o Projeto

1. **Clone o repositório**:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd ProntuarioFront/JS
    ```

2. **Instale as dependências**:

    ```bash
    npm install
    ```

3. **Inicie o servidor de desenvolvimento**:

    ```bash
    npm run dev
    ```

4. **Acesse a aplicação**:
   Abra o navegador e vá para `http://localhost:5173`.

## Scripts Disponíveis

-   `npm run dev`: Inicia o servidor de desenvolvimento.

## Tecnologias Utilizadas

-   **React**: Biblioteca para construção de interfaces de usuário.
-   **Vite**: Ferramenta de build rápida para projetos modernos.
-   **React Hook Form**: Gerenciamento de formulários.
-   **Yup**: Validação de esquemas.
-   **FullCalendar**: Biblioteca para exibição de calendários interativos.
-   **React Toastify**: Exibição de notificações.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature ou correção de bug:
    ```bash
    git checkout -b minha-feature
    ```
3. Commit suas alterações:
    ```bash
    git commit -m "Descrição da minha feature"
    ```
4. Envie para o repositório remoto:
    ```bash
    git push origin minha-feature
    ```
5. Abra um Pull Request.

## Contato

Para dúvidas ou sugestões, entre em contato com o time de desenvolvimento.
