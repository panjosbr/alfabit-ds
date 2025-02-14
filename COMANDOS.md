# Comandos NX

Link de referencia: https://nx.dev/nx-api/angular/generators/library

## Iniciar a aplicação
```
npm nx run alfabit:serve
```

## Gera uma nova lib
```
npx nx generate @nx/angular:library button --directory=libs/button --publishable --importPath=@alfabit-panjos/button --selector=ab-button --prefix=ab --dry-run
```

--directory=libs/button
  - Diretorio onde o componente será criado

--publishable
  - Permite que o componente seja publicado futuramente

--importPath=@alfabit-panjos/button
  - Nome da biblioteca quando for publicado

--selector=ab-button
  - Nome do seletor html do componente

--prefix=ab
  - Define prefixo para ser utilizado no css/scss

--dry-run
  - Verifica se a saida do terminal está do jeito esperado

## Listar plugins nx instalados

```
npx nx list
```

## Criando um monorepo

```
npx create-nx-workspace@19.0.4 alfabit-monorepo --preset=angular-monorepo
```

## Instalar o NX globalmente

```
npm i -g nx@19.0.4
```
