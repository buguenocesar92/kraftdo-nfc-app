# KraftDo NFC Platform

Plataforma para crear productos fisicos con perfil digital activado por NFC.
Al acercar el celular al chip, abre una pagina personalizada con fotos, videos y redes sociales.

## Caso de uso real

25 cuadros de graduacion para el Colegio El Pilar, Generacion 2026, Machali Chile.

    Cesar crea proyecto en Filament
            |
    Genera 25 usuarios + tokens + URLs
            |
    Padres reciben link por WhatsApp
            |
    Login -> suben foto, mensaje, video, redes sociales
            |
    Filament aprueba el contenido
            |
    NFC se activa
            |
    Cesar imprime el cuadro con chip NFC empotrado (Bambu A1)

## Arquitectura

    kraftdo-nfc/           <- Laravel 11 backend + Filament 4 admin
    kraftdo-nfc-frontend/  <- Next.js frontend publico

El frontend y el backend son repos separados que se comunican via API REST.

## Stack

Backend:
- Laravel 11 / PHP 8.3
- Filament 4 (panel admin)
- MySQL + Redis
- Docker Compose

Frontend:
- Next.js 14 / React
- TypeScript
- Playwright (tests E2E)

Hardware:
- Chips NFC Coin 30mm
- Bambu A1 con AMS (cavidad NFC impresa en 3D)
- Rate limiting 200 req/hora por UUID

## Tipos de tokens NFC

| Tipo     | Descripcion                        |
|----------|------------------------------------|
| PROFILE  | Perfil personal                    |
| BUSINESS | Tarjeta de visita digital          |
| EVENT    | Pagina de evento                   |
| GIFT     | Regalo con contenido personalizado |

## Instalacion local (backend)

    git clone https://github.com/buguenocesar92/kraftdo-nfc.git
    cd kraftdo-nfc
    cp .env.example .env
    composer install
    php artisan key:generate
    docker compose -f docker-compose.local.yml up -d
    php artisan migrate

## Instalacion local (frontend)

    git clone https://github.com/buguenocesar92/kraftdo-nfc-frontend.git
    cd kraftdo-nfc-frontend
    cp .env.example .env.local
    npm install
    npm run dev

---

Parte del ecosistema KraftDo SpA — digitalizamos PYMEs chilenas.
https://kraftdo.cl
