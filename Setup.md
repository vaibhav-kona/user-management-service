## Init
In package.json set "type" to "module" 

## Typescript Setup
- yarn add -D typescript @types/express @types/node
- npx tsc --init

Set below in tsconfig.json
- "module": "Node16",
- "rootDir": "./src"
- "outDir": "./build",

## Eslint Setup
- yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
- npx eslint --init

Set below in eslintrc.json
- "parserOptions": {
    "project": ["./tsconfig.json"]
}