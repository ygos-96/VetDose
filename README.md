# VetDose

Calculadora de dosagem de medicamentos para uso veterinário. A pessoa escolhe o medicamento, a espécie e informa o peso do animal, e o app calcula a dose com base na dosagem de referência e na concentração do produto.

**Online:** https://ygos-96.github.io/VetDose/

> **Aviso:** ferramenta de apoio ao cálculo. Não substitui o julgamento clínico, a bula nem a prescrição do médico-veterinário responsável.

## O que faz

- **Busca e filtro por categoria** de medicamento, com mensagem clara quando nada é encontrado.
- **Cálculo da dose** a partir do peso do animal, da espécie e da concentração do produto, mostrando a dosagem de referência usada.
- **Concentrações comuns** disponíveis em um clique, ou concentração informada manualmente.
- **Resultado completo:** dose calculada, faixa mínima e máxima, via de administração, frequência e duração do tratamento.
- **Alerta de segurança** para raças sensíveis (Collie e Sheltie) quando o medicamento é a ivermectina.
- **Histórico de cálculos** salvo no navegador, com botão para limpar.
- **Notas pessoais** e **plano de cuidado** ligados ao cálculo.
- **Tema claro e escuro**, aplicado antes do carregamento da página para evitar o "flash" de cor.

## Como usar

1. Selecione a categoria e o medicamento.
2. Escolha a espécie e informe o peso.
3. Selecione uma concentração sugerida ou digite a do produto que você tem.
4. Toque em **Calcular dose** e confira o resultado e os alertas.

## Detalhes técnicos

- Aplicação de página única em HTML, CSS e JavaScript, publicada como site estático no GitHub Pages.
- Este repositório contém **a versão compilada** (`index.html` e a pasta `assets/`, geradas por um bundler). Não há etapa de instalação.
- Os dados ficam no navegador: histórico, notas e tema usam `localStorage`, sem servidor, sem conta e sem envio de dados.
- Metadados de SEO e Open Graph no `index.html`; fontes da família Inter.

## Rodar localmente

```bash
# na pasta do repositório, qualquer servidor estático serve
npx serve .
```

## Limitações conhecidas

- A tabela de medicamentos é fixa e precisa ser revisada por um profissional antes de qualquer uso clínico real.
- O repositório não inclui o código-fonte original, só o build publicado.
