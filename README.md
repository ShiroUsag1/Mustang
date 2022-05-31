# Baixando as dependências do package.json

### `npm install`

# Inicializando o projeto

### `npm start`

# Rodando apenas a build

Dentro desse projeto há um diretório chamado build com todo o site compactado e pronto para ser rodado em um servidor.
Coloque todo o conteúdo de dentro da pasta no diretório public_html do seu servidor.

# Notas da desenvolvedora

A imagem de fundo da seção HOME está diferente do protótipo pois não foi possível inserir as letras atrás do background. Foi testado uma opção onde a imagem toda foi pega e editada, incluindo a palavra sendo colocada na imagem, e inseri-la como background com a seção vazia. Porém, a responsividade do site foi afetada significativamente, então optou-se por manter o layout proposto da palavra MUSTANG atrás do automóvel, com imagens o mais parecidas possíveis com as do protótipo, para manter a responsividade adequada do site.

As seções foram separadas em páginas diferentes para melhor organização. O diretório pages dentro da pasta scr, é onde elas se encontram. O component Navbar se encontra dentro do diretório components.

As rotas se encontram no arquivo App.js dentro da pasta scr. A personalização visual do site encontra-se na mesma pasta, no arquivo index.css.

Em algumas seções há duas versões, a mobile e a desktop, por isso o código pode parecer mais extenso.

A maior parte dos componentes de estilização foram separados por tamanho de dela, visando a responsividade do site. Não há uma ordem para encontrar as tags.
