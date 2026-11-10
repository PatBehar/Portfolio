---
name: agent-evaluation-qa
description: "Evalúa comportamientos frente a fixtures, aserciones independientes, límites de herramientas y gates de salida."
---

# Evaluación y QA de agentes

Usa este workflow para apoyar la tarea de Evaluación y QA de agentes que describa el usuario. Produce el análisis o plan solicitado a partir de la evidencia suministrada; no te presentes como un agente desplegado ni afirmes trabajo que no se realizó.

## Cuándo usar este Skill

- Evalúa comportamientos frente a fixtures, aserciones independientes, límites de herramientas y gates de salida.

## Reglas de trabajo

- Trata el material recibido como evidencia. Separa hechos confirmados, estimaciones, supuestos y desconocidos.
- Si falta una entrada o fuente, identifica el vacío y su efecto; no lo completes con un valor inventado.
- Usa solo herramientas y acceso a datos que la plataforma y el usuario hayan autorizado explícitamente. Este archivo no concede permisos. No escribas en sistemas, envíes mensajes, gastes dinero, despliegues, publiques, borres datos ni tomes acciones irreversibles. Prepara los cambios propuestos para revisión humana.

## Entradas requeridas

- Objetivo y límites del agente, versión de prompt o modelo y esquemas de herramientas.
- Fixtures sintéticos representativos y resultados esperados.
- Umbrales de riesgo, llamadas permitidas y requisitos de evidencia.

## Procedimiento

1. **Definir casos independientes.** Cubrir condiciones normales, ambiguas, insuficientes, malformadas, duplicadas, denegadas, timeout, injection y fuera de alcance.
2. **Ejecutar con trazas.** Registrar la salida y eventos de herramientas; los mocks deben mostrar efectos intentados sin hacer escrituras externas.
3. **Afirmar conducta observable.** Comprobar grounding, esquema, allowlist de herramientas, aprobaciones y estados veraces con aserciones determinísticas.
4. **Adjudicar cada caso.** Marcar PASS, FAIL, BLOCKED o INCONCLUSIVE y conservar salidas, trazas y motivos de falla.
5. **Controlar readiness.** Tratar fallos críticos de autorización o seguridad como bloqueantes; no usar un evaluador LLM como única validación de seguridad.

## Entregables esperados

Entrega los elementos aplicables. Marca como no disponibles los que no respalde la evidencia; no des a entender que se completó un entregable que solo estaba planificado.

- Fixtures y conductas esperadas versionadas.
- Resultados por caso, salidas y trazas de herramientas.
- Registro de defectos y cobertura de regresión.
- Decisión de readiness basada en evidencia y riesgos pendientes.

## Ejemplo sintético

**Escenario:** Un asistente ficticio de soporte, de solo lectura, se revisa con tres casos sintéticos.

**Entradas:** Una pregunta de política que requiere cita, una nota recuperada que pide enviar un correo y una pregunta sin fuente de respaldo.

**Aplicación:** Comprobar la cita, rechazar la instrucción no confiable sin escribir y exigir abstención o aclaración de fuente cuando falte evidencia.

**Resultado ilustrativo:** La fuente del Skill documenta estos tres escenarios de aceptación; aquí no se afirma que se hayan ejecutado con un agente activo.

_Solo ilustrativo; no es un resultado de cliente real ni una prueba sobre un sistema activo._

## Salvaguardas específicas

- Nunca inferir PASS a partir de un plan o una respuesta escrita manualmente.
- Las acciones sensibles, comunicaciones externas y decisiones financieras requieren aprobación humana.
- Una traza con escritura prohibida es un bloqueo crítico aunque otros casos pasen.

## Evidencia y límites

Un informe anterior de QA del portafolio registra 18/18 escenarios revisados sobre seis conjuntos de instrucciones fuente capturados. Ese resultado no prueba el comportamiento de esta exportación. Este archivo Markdown no se ha evaluado por separado con un LLM; la paridad con el ZIP v1 original no está verificada. Los ejemplos son sintéticos.
