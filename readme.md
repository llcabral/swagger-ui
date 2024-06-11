# Configuração e Teste - Polaris Swagger UI

### Pré-requisitos
    - Python instalado.
    - Git instalado.

### Passos para Configurar e Testar

1. Clone o Repositório Swagger UI
Clone o repositório oficial do Swagger UI do GitHub:

```git
git clone https://github.com/swagger-api/swagger-ui.git
```

2. Navegue até a Pasta dist

```sh
cd swagger-ui/dist
```

3. Inicie um Servidor HTTP Simples
Use Python para iniciar um servidor HTTP simples na pasta dist:

```sh
python3 -m http.server 8000
```

6. Acesse o Swagger UI no Navegador
Abra o navegador e vá para a URL:

```sh
http://localhost:8000
```

Você deve ver a interface do Swagger UI carregada com a documentação da sua API baseada no arquivo swagger.yaml.
