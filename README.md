# Git Project

![image](https://user-images.githubusercontent.com/59968647/90522998-c3f62100-e142-11ea-8005-aa35fd9e28e2.png)

- Projeto que exibe informações do usuário como foto, perfil, nome, repositórios estrelados e localização no mapa.

## Ideias e linha de raciocínio

1. Primeiramente antes de desenvolver qualquer aplicação eu costumo criar um protótipo de alta fidelidade para que eu possa ter um modelo para me basear e desenvolver a aplicação. A ferramente de prototipação que eu utilizado é o Figma e o link do protótipo pode ser encontrado neste link: https://www.figma.com/file/H0JygYf0Y50OhwcU7bQ2w3/GitHub-Project?node-id=2%3A2

2. Com o protótipo criado dei então início ao processo de desenvolvimento onde comecei criando a estrutura do projeto React com o Create-React-App, organizei a estrutura de pastas, configurei o arquivo de estilo global etc.

3. Como eu já havia desenvolvido aplicações com a api do github foi então bem rápido o desenvolvimento das funcionalidades de buscar os dados da api a partir do que o usuário digitou, exibir repositórios estrelados etx. Algo que me fez sair um pouco da zona de conforto foi a parte de exibir a localização do usuário no mapa. Eu já tinha trabalhado com mapa no React, porém a api do github fornece apenas o **nome da cidade** do usuário, e o mapa necessita dos valores de cordenada como **latitude e longitude**. Foi necessário então pesquisar na api do Google Maps um endpoint que convertesse o **address** pra **latitude e longitude**.

4. Entretanto não tive resultados satisfatórios com a api do Google Maps, pesquisei, realizei bastante configurações pra poder ter acesso ao endpoint, e no fim das contas acabou não funcionando e decidi pesquisar outras api's que fosse possível converter o address para as cordenadas. E nisso acabei encontrando uma api muito boa e simples que necessita apenas criar uma **key** e passar no endpoint junto com o nome da cidade, e em seguida faço uma requisição e ela me retorna os valores de latitude e longitude. Após isso só precisaria aplicar esses valores no componente de mapa e já teríamos a localização do usuário bonitinha. 

