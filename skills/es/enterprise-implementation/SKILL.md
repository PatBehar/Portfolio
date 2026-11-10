---
name: enterprise-implementation
description: "Conecta el alcance aprobado con dependencias, UAT, preparación, decisiones de salida y rollback."
---

# Implementación empresarial

Usa este workflow para apoyar la tarea de Implementación empresarial que describa el usuario. Produce el análisis o plan solicitado a partir de la evidencia suministrada; no te presentes como un agente desplegado ni afirmes trabajo que no se realizó.

## Cuándo usar este Skill

- Conecta el alcance aprobado con dependencias, UAT, preparación, decisiones de salida y rollback.

## Reglas de trabajo

- Trata el material recibido como evidencia. Separa hechos confirmados, estimaciones, supuestos y desconocidos.
- Si falta una entrada o fuente, identifica el vacío y su efecto; no lo completes con un valor inventado.
- Usa solo herramientas y acceso a datos que la plataforma y el usuario hayan autorizado explícitamente. Este archivo no concede permisos. No escribas en sistemas, envíes mensajes, gastes dinero, despliegues, publiques, borres datos ni tomes acciones irreversibles. Prepara los cambios propuestos para revisión humana.

## Entradas requeridas

- Sponsor, alcance aceptado, roles de stakeholders y restricciones.
- Responsables de integración, requisitos de privacidad, medidas y fechas previstas.
- Dependencias conocidas, evidencia de aceptación y necesidades de soporte operativo.

## Procedimiento

1. **Acordar el alcance.** Separar los requisitos aprobados de los deseos pendientes y asignar responsables.
2. **Trazar la entrega.** Relacionar requisitos con dependencias, pruebas y evidencia; marcar lo planificado y lo completado.
3. **Preparar UAT.** Incluir escenarios positivos, negativos, de interrupción y recuperación sin otorgar un PASS no demostrado.
4. **Preparar la operación.** Definir responsables de capacitación, soporte, monitoreo, escalamiento y rollback.
5. **Tomar la decisión.** Documentar Go, No-go o Conditional Go con evidencia, gates pendientes y responsables.

## Entregables esperados

Entrega los elementos aplicables. Marca como no disponibles los que no respalde la evidencia; no des a entender que se completó un entregable que solo estaba planificado.

- Trazabilidad de requisitos y dependencias.
- Escenarios UAT y evidencia de aceptación.
- Plan por fases, responsables y registro de riesgos.
- Capacitación, soporte, rollout y rollback con recomendación de salida.

## Ejemplo sintético

**Escenario:** Un equipo ficticio evalúa un piloto para categorizar tickets.

**Entradas:** Alcance aprobado del piloto, tickets sintéticos, sponsor nombrado, condiciones de seguridad y medidas de aceptación.

**Aplicación:** Preparar UAT trazable, incluir rutas incorrectas y de servicio no disponible, asignar responsables de capacitación y escalamiento y mantener el rollout detrás del gate de aprobación.

**Resultado ilustrativo:** Recomendar un piloto controlado solo tras las aprobaciones requeridas. Las sugerencias siguen sujetas a revisión; el ejemplo no envía correos externos.

_Solo ilustrativo; no es un resultado de cliente real ni una prueba sobre un sistema activo._

## Salvaguardas específicas

- No inventar aprobaciones, responsables, resultados de pruebas, métricas ni despliegues.
- La falta de aprobación de seguridad bloquea el Go; se nombra responsable y acción correctiva.
- Una dependencia fallida activa pausa y recuperación, no una afirmación de salida exitosa.

## Evidencia y límites

Un informe anterior de QA del portafolio registra 18/18 escenarios revisados sobre seis conjuntos de instrucciones fuente capturados. Ese resultado no prueba el comportamiento de esta exportación. Este archivo Markdown no se ha evaluado por separado con un LLM; la paridad con el ZIP v1 original no está verificada. Los ejemplos son sintéticos.
