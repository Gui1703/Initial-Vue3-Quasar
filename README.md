<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/Gui1703/CRUD-SAS?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/Gui1703/CRUD-SAS?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Gui1703/CRUD-SAS?color=56BEB8">
</p>

## :dart: Sobre ##

Projeto desenvolvido com o Framework do VueJs, o Quasar. Onde abstrai todos os scripts na pasta composable, armazenado informações como AccessToken no local storage com o Pinia. Utilizado TypeScript, na pasta models esta todas as interfaces do sistema. O login foi desenvolvido como uma apenas página e feito verificações e tratamento de acordo com o path da página, para login e signup foi utilizado o Firebase para armazenar o AccessToken e poder fazer validação no index.ts de routes, usuários só poderá acessar o ambiente de admin se estiver logado. O CRUD foi enviado no teste o Bearer token fixo, onde criei uma const e usei fixo no arquivo headers.ts, localizado na pasta composables. Integrado capacitor no projeto para geração de APK. Implementado internacionalização com i18n.
## :sparkles: Características ##

:heavy_check_mark: Pinia;\
:heavy_check_mark: SweetAlert;\
:heavy_check_mark: i18n;

## :rocket: Tecnologias ##

The following tools were used in this project:

- [Quasar](https://quasar.dev/)
- [VueJs](https://vuejs.org/)
- [SweetAlert](https://sweetalert2.github.io/)
- [i18n](https://vue-i18n.intlify.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requerimentos ##


Antes de iniciar :checkered_flag:, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Inicialização ##

```bash
# Clone this project
$ git clone https://github.com/Gui1703/CRUD-SAS

# Access
$ cd CRUD-SAS

# Install dependencies
$ yarn

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:9000>
```
## :checkered_flag: Gerar APK com Android Studio ##

```bash
$ yarn build && npx cap sync

$ npx cap open android

$ file -> sync project with gradle file

$ build-> make projec

$ build-> build apk
```



Feito com :heart: by <a href="https://github.com/Gui1703" target="_blank">Guilherme Raposo</a>

&#xa0;

<a href="#top">Ir ao topo</a>
