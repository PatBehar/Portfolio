---
name: operations-intelligence
description: "Audita datos operativos, reconcilia denominadores KPI y separa observaciones de hipótesis causales."
---

# Inteligencia de operaciones

Usa este workflow para apoyar la tarea de Inteligencia de operaciones que describa el usuario. Produce el análisis o plan solicitado a partir de la evidencia suministrada; no te presentes como un agente desplegado ni afirmes trabajo que no se realizó.

## Cuándo usar este Skill

- Audita datos operativos, reconcilia denominadores KPI y separa observaciones de hipótesis causales.

## Reglas de trabajo

- Trata el material recibido como evidencia. Separa hechos confirmados, estimaciones, supuestos y desconocidos.
- Si falta una entrada o fuente, identifica el vacío y su efecto; no lo completes con un valor inventado.
- Usa solo herramientas y acceso a datos que la plataforma y el usuario hayan autorizado explícitamente. Este archivo no concede permisos. No escribas en sistemas, envíes mensajes, gastes dinero, despliegues, publiques, borres datos ni tomes acciones irreversibles. Prepara los cambios propuestos para revisión humana.

## Entradas requeridas

- Extractos o consultas de datos, definiciones de indicadores y objetivos.
- Rango de fechas, zona horaria, granularidad de reporte y reglas de segmentos.
- Líneas base, exclusiones y problemas de calidad de datos conocidos.

## Procedimiento

1. **Revisar los datos.** Comprobar vigencia, granularidad, faltantes, duplicados, joins y elegibilidad.
2. **Definir el indicador.** Declarar numerador, denominador, exclusiones, periodo y reglas de madurez.
3. **Calcular y reconciliar.** Usar el método analítico declarado y rastrear el resultado a los registros fuente.
4. **Interpretar con cautela.** Segmentar solo si la muestra lo permite; distinguir cambios observados de causas posibles.
5. **Recomendar con límites.** Documentar incertidumbre y requerir aprobación humana antes de cambiar la operación.

## Entregables esperados

Entrega los elementos aplicables. Marca como no disponibles los que no respalde la evidencia; no des a entender que se completó un entregable que solo estaba planificado.

- Memo de calidad de datos y definiciones KPI.
- Cálculos reconciliados y trazables a sus fuentes.
- Segmentos sustentados y matriz de observación, hipótesis y acción.
- Recomendaciones acotadas con incertidumbre explícita.

## Ejemplo sintético

**Escenario:** Una operación de soporte ficticia compara dos periodos sintéticos.

**Entradas:** SLA cumplido en 180 de 200 casos elegibles en el primer periodo y 168 de 200 en el segundo, bajo la misma regla de elegibilidad.

**Aplicación:** Reconciliar ambos denominadores y calcular 90% frente a 84%, una disminución de 6 puntos porcentuales.

**Resultado ilustrativo:** Señalar la disminución para investigarla. Los datos mostrados no establecen por qué ocurrió ni demuestran una causa.

_Solo ilustrativo; no es un resultado de cliente real ni una prueba sobre un sistema activo._

## Salvaguardas específicas

- No hacer afirmaciones causales sin evidencia ni adivinar cálculos.
- Marcar periodos incompletos y granularidad de duplicados incierta en lugar de compararlos silenciosamente.
- Exigir un denominador explícito y tamaño de muestra suficiente para segmentar.

## Evidencia y límites

Un informe anterior de QA del portafolio registra 18/18 escenarios revisados sobre seis conjuntos de instrucciones fuente capturados. Ese resultado no prueba el comportamiento de esta exportación. Este archivo Markdown no se ha evaluado por separado con un LLM; la paridad con el ZIP v1 original no está verificada. Los ejemplos son sintéticos.
