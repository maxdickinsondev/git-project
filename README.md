# Git Project

![image](https://user-images.githubusercontent.com/59968647/90522998-c3f62100-e142-11ea-8005-aa35fd9e28e2.png)

- Projeto que exibe informações do usuário como foto, perfil, nome, repositórios estrelados e localização no mapa.

## Ideias e linha de raciocínio

1. Primeiramente antes de desenvolver qualquer aplicação eu costumo criar um protótipo de alta fidelidade para que eu possa ter um modelo para me basear e desenvolver a aplicação. A ferramente de prototipação que eu utilizado é o Figma e o link do protótipo pode ser encontrado abaixo: 

```
https://www.figma.com/file/H0JygYf0Y50OhwcU7bQ2w3/GitHub-Project?node-id=2%3A2
```

2. Com o protótipo criado dei então início ao processo de desenvolvimento onde comecei criando a estrutura do projeto React com o Create-React-App, organizei a estrutura de pastas, configurei o arquivo de estilo global etc.

3. Como eu já havia desenvolvido aplicações com a api do github foi bem rápido o desenvolvimento das funcionalidades de buscar os dados da api, exibir repositórios estrelados etc. Algo que me fez sair um pouco da zona de conforto foi a parte de exibir a localização do usuário no mapa. Eu já tinha trabalhado com mapa no React, porém a api do github fornece apenas o **nome da cidade** do usuário, e o mapa necessita dos valores de cordenada como **latitude e longitude**. Foi necessário então pesquisar na api do Google Maps um endpoint que convertesse o **address** pra **latitude e longitude**.

4. Entretanto, não tive resultados satisfatórios com a api do Google Maps, pesquisei, realizei bastante configurações pra poder ter acesso ao endpoint, e no fim das contas acabou não funcionando. Decidi então pesquisar outras api's em que fosse possível converter o address para as cordenadas. E nisso acabei encontrando uma api muito boa e simples que necessita apenas criar uma **key** e passar no endpoint junto com o **nome da cidade**. Em seguida faço uma requisição e ela me retorna os valores de latitude e longitude. Após isso só precisaria aplicar esses valores no componente de mapa e já teríamos a localização do usuário bonitinha. Api utilizada para converter o endereço: 

```
https://api.opencagedata.com/geocode/v1/json?q=PLACENAME&key=YOUR-API-KEY
```

5. Outro ponto que me fez sair também da zona de confoto foi a utilização de testes. Isso era algo que eu nunca havia feito em qualquer linguagem, e pra esse projeto decidi pesquisar sobre pra poder aplicar. Utilizei como ferramenta de teste o *React Libary Testing* que é uma biblioteca de testes que já vem integrada no pacote *create-react-app*.
Particularmente falando achei muito interessante essa parte de testes, sei que ela á fundamental em qualquer projeto, isso vai procurar evitar muitos erros quando o sistema for pra produção. Tive algumas dificuldades já que era algo novo pra mim, mas no final conseguir realizar alguns testes simples já que o sistema proposto também é bem simples.

6. Por último, algo que tive mais dificuldade e passei um bom tempo pesquisando na documentação do github foi a parte de realizar autenticação para poder setar uma estrela em um repositório listado. Demorei um pouco pra encontrar os endpoints no qual seria possível realizar a autenticação. Esses endpoints ou rotas, recebiam vários paramêtros e pra isso foi necessário realizar algumas configurações no próproio github. De todos os requisitos pedidos, esse foi o único que não foi possível realizar a tempo. Até conseguir realizar autenticação com o github através do método *POST*, porém o problema foi a última requisição, a qual eu teria acesso aos dados do usuário, sem acesso a esses dados não foi então possível setar uma estrela pros repositórios listados.

