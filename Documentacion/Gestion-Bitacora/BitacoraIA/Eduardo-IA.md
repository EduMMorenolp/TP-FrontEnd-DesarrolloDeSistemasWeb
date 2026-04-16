---
title: Bitacora IA - Eduardo
status: activo
integrante: eduardo
updated: 2026-04-16
---

# Bitacora IA - Eduardo

## Formato de registro

Esta bitacora se mantiene en formato changelog.
Cada entrada representa un cambio puntual realizado con asistencia de IA.

## Plantilla de uso 

### [YYYY-MM-DD] Titulo breve del cambio
- Tipo:
- Modelo:
- Herramienta:
- Archivos impactados:
- Cambio:
- Impacto:
- Validacion manual:

## Changelog

### [2026-04-16] Estandarizacion de consigna en Markdown

- Tipo: Documentacion.
- Modelo: GPT-5.3-Codex.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `Documentacion/Consigna TP1 - Markdown.md`
- Cambio:
  - Se genero una copia limpia de la consigna con estructura de encabezados y listas.
- Impacto:
  - Mejor lectura y referencia rapida para el equipo.
- Validacion manual:
  - Se ajustaron detalles de redaccion y formato luego de la generacion.

### [2026-04-16] Estructura inicial de Obsidian

- Tipo: Documentacion.
- Modelo: GPT-5.3-Codex.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `Documentacion/Index.md`
  - `Documentacion/Proyecto-Core/Consignas-Faltantes-Por-Definir.md`
- Cambio:
  - Se creo indice de navegacion y checklist de consignas faltantes.
- Impacto:
  - Orden de trabajo claro antes de iniciar implementacion.
- Validacion manual:
  - Se revisaron enlaces internos y texto del checklist.

### [2026-04-16] Definicion de arquitectura y convenciones

- Tipo: Documentacion tecnica.
- Modelo: GPT-5.3-Codex.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `Documentacion/Proyecto-Core/Arquitectura.md`
- Cambio:
  - Se documento arquitectura final de carpetas, subcarpetas y criterios de trabajo.
- Impacto:
  - Base comun para todo el equipo y menor riesgo de retrabajo.
- Validacion manual:
  - Pendiente aprobacion final del equipo.

### [2026-04-16] Implementacion base de frontend

- Tipo: Codigo frontend.
- Modelo: GPT-5.3-Codex.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `Proyecto/index.html`
  - `Proyecto/bitacora.html`
  - `Proyecto/eduardo.html`
  - `Proyecto/leandro.html`
  - `Proyecto/marcelo.html`
  - `Proyecto/melisa.html`
  - `Proyecto/css/style.css`
  - `Proyecto/js/main.js`
- Cambio:
  - Se generaron paginas base con navegacion compartida.
  - Se agrego interaccion JS para portada y paginas individuales.
  - Se definieron breakpoints en 1200px, 900px y 400px.
  - Se creo estructura de assets visuales:
    - `Proyecto/img/avatares/`
    - `Proyecto/img/fondos/`
    - `Proyecto/img/ui/`
- Impacto:
  - Proyecto funcional para continuar desarrollo colaborativo.
- Validacion manual:
  - Pendiente completar contenido real por integrante.

### [2026-04-16] Renombre de archivos globales

- Tipo: Estructura de codigo.
- Modelo: GPT-5.3-Codex.
- Herramienta: GitHub Copilot Chat.
- Archivos impactados:
  - `Proyecto/css/styleGlobal.css` -> `Proyecto/css/style.css`
  - `Proyecto/js/scripts.js` -> `Proyecto/js/main.js`
- Cambio:
  - Se aplico convencion definitiva de nombres en CSS y JS.
- Impacto:
  - Coherencia entre codigo y documentacion de arquitectura.
- Validacion manual:
  - Enlaces y referencias actualizadas en las paginas base.
