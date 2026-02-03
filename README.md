# 🎬 Cine Millenium: Desafio de Performance

Este projeto é uma aplicação de reserva de cinema focada na trilogia "O Senhor dos Anéis". O objetivo principal não foi apenas a estética, mas a **velocidade máxima**, utilizando as melhores práticas de otimização exigidas pelo mercado.

## 🚀 O que foi feito? (Resumo da Otimização)
O site foi analisado pelo **Google Lighthouse** (uma ferramenta que mede a velocidade dos sites). Identificamos que as fotos dos filmes eram muito pesadas e o site demorava para "ficar pronto" para o usuário.

### 🔍 Problemas Identificados (Gargalos)
* **Fotos pesadas:** As imagens originais demoravam a carregar, gastando internet do usuário.
* **Layout Instável:** O site "pulava" enquanto as fotos carregavam.
* **Código Desnecessário:** Havia funções que não estavam sendo usadas, deixando o arquivo final maior que o necessário.

### 🛠️ Melhorias Aplicadas
1. **Fotos Super Leves:** Converti todas as imagens para o formato `.webp` (muito mais leve que o padrão).
2. **Carregamento Inteligente:** Usei o "Lazy Loading", onde o site só carrega o que o usuário está vendo no momento.
3. **Reserva de Espaço:** Defini o tamanho fixo dos cartazes para que o site não balance durante o carregamento.
4. **Código Limpo:** Removi tudo o que não era usado e simplifiquei as funções para o site carregar instantaneamente.

## 📊 Comparativo de Performance
| Métrica | Antes da Otimização | Depois da Otimização |
| :--- | :--- | :--- |
| **Pontuação Geral** | 65 pontos | **100 pontos** 🏆 |
| **Velocidade de Carregamento** | 4.2 segundos | **0.8 segundos** |
