# KraftDo NFC — Contexto Completo para Claude Code

## Arquitectura Real (Abril 2026)
- **Frontend:** Next.js 15 en Vercel → https://app.kraftdo.cl
- **API:** Laravel 12 en VPS → https://api.kraftdo.cl
- **Admin:** Filament 4 en /admin
- **Cache:** Redis vía NfcCacheService (Activo en GET /api/tokens/{uuid})
- **Rate Limit:** 200 req/hora por UUID.

## Content Types Activos
1. **GIFT:** Regalos multimedia.
2. **PROFILE:** Perfiles personales/profesionales con redes sociales.
3. **BUSINESS:** Negocios y restaurantes con catálogo de productos.
4. **EVENT:** Gestión de eventos (FE pendiente formulario de edición).

*Nota: Los tipos TOURIST y BUS_STOP fueron eliminados para simplificar el núcleo.*

## Estado del Sistema
- **Backend:** 332 tests aprobados (Pest). Cobertura core verificada.
- **Frontend:** Build verificado. Dashboard operativo para gestión de tokens y QR.
- **Infraestructura:** VPS con 3.6GB RAM. Scheduler en producción requiere revisión técnica.

## Pendientes Técnicos
1. Implementar `EventContentForm.tsx` en el frontend.
2. Refactorizar subida de archivos para usar un componente común en todos los tipos.
3. Sincronizar logs de producción para arreglar el contenedor del scheduler.

Este contexto refleja el estado real después de la limpieza de tipos de contenido redundantes.
