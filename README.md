### Desafio técnico para vaga de Desenvolvedor Front-End Júnior.

O desafio consiste em criar uma página Home e uma página de Carrinho,
replicando toda a interface de exemplo de forma responsiva e o mais
próxima possível da original, sem utilizar nenhum protótipo. Além disso, é
necessário implementar corretamente o fluxo do carrinho.

**Requisitos da Aplicação:**

- NextJS: A aplicação deve ser construída utilizando NextJS.
- Tailwind CSS: Utilize Tailwind CSS para a estilização dos componentes.
- Requisição de Produtos: A página Home deve buscar os produtos fictícios através
  de uma requisição feita pelo lado do servidor.
- Cache: O cache dos produtos da Home deve ter uma duração de 2 minutos.
- Persistência do Carrinho: O estado do carrinho deve ser persistido no local
  storage, para que o usuário não perca seu carrinho ao recarregar a página.
- Experiência do Usuário: A experiência do usuário deve ser colocada em primeiro
  lugar.

#### Tecnologias utiilizadas

JavaScript, TypeScript, ReactJS, NextJS, TailwindCSS, Prettier, Phosphor Icons

#### Inicializando projeto

Abra o seu terminal e rode o comando abaixo para clonar o repositório:

`git clone https://github.com/nahteruya/shopping-cart.git`

Instale as dependências do projeto com o seguinte comando:

`npm install
#ou, se tiver utilizando o gerenciador de pacotes yarn 
yarn install`

Em seguida, inicialize o projeto rodando o comando:

`npm run dev
#ou, se tiver utilizando o gerenciador de pacotes yarn
yarn run dev`

Com isso, o projeto deve abrir na URL http://localhost:3000

#### Organização das pastas

A pasta `app` contém os arquivos mais importantes do projeto. Nela, estão contidas as pastas:

- `_components`: contém os arquivos com os componentes `Header` e `Card` (card dos produtos utilizado na Home)
- `_contexts`: contem o arquivo de `CartProvider` que cria o contexto e possibilita o compartilhamento de informações e funções relacionadas aos itens do carrinho.
- `_utils`: contem o arquivo `price` que exporta funções para formatação de preço e cálculo de produtos com e sem desconto.
- `api`: contem a rota `products` onde é configurado a base de dados de produtos fictícios e disponibilizados no endpoint http://localhost:3000/api/products.
- `cart`: contem o arquivo da página de carrinho.

```shell
tree
├───app
│   ├───_components
│   ├───_contexts
│   └───_utils
│   ├───api
│   │   └───products
│   ├───cart
```
