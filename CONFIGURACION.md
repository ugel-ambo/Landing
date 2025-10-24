# Configuración del Sistema de Noticias

## Problema Identificado

El sistema de noticias no funciona porque faltan las variables de entorno necesarias para conectar con Facebook API y Gemini AI.

## Solución

### 1. Crear archivo de variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

```env
# Variables de entorno para Facebook API
NEXT_PUBLIC_FACEBOOK_GRAPH_API_URL=https://graph.facebook.com/v24.0
NEXT_PUBLIC_FACEBOOK_PAGE_ID=tu_page_id_aqui
NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN=tu_access_token_aqui

# Variables de entorno para Gemini AI
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=tu_gemini_api_key_aqui
```

### 2. Obtener Facebook Access Token

1. Ve a [Facebook Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Selecciona tu aplicación o crea una nueva
3. Obtén un token de acceso de larga duración
4. Copia el token y reemplaza `tu_access_token_aqui` en el archivo `.env.local`

### 3. Obtener Facebook Page ID

1. Ve a tu página de Facebook
2. En la URL, copia el número que aparece después de `/pages/` o usa el ID de la página
3. Reemplaza `tu_page_id_aqui` en el archivo `.env.local`

### 4. Obtener Gemini API Key

1. Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crea una nueva API key
3. Copia la key y reemplaza `tu_gemini_api_key_aqui` en el archivo `.env.local`

### 5. Verificar la configuración

1. Inicia el servidor de desarrollo: `npm run dev`
2. Ve a `http://localhost:3000/debug` para ver el estado de la configuración
3. Verifica que tanto Facebook API como Gemini AI estén funcionando

## Archivos Modificados

- ✅ `src/app/services/facebook.service.ts` - Agregado logging y validación
- ✅ `src/app/services/gemini.service.ts` - Agregado logging y validación  
- ✅ `src/app/components/news-section.tsx` - Mejorado manejo de errores
- ✅ `src/app/debug/page.tsx` - Nueva página de diagnóstico
- ✅ `src/app/api/facebook-test/route.ts` - Endpoint de prueba para Facebook
- ✅ `src/app/api/gemini-test/route.ts` - Endpoint de prueba para Gemini

## Flujo del Sistema

1. **Carga de noticias**: El componente `NewsSection` llama a `facebookService.getPosts()`
2. **Validación**: Se verifica que las variables de entorno estén configuradas
3. **Obtención de datos**: Se obtienen los posts de Facebook
4. **Formateo con AI**: Los mensajes se envían a Gemini AI para formateo
5. **Transformación**: Los datos se transforman a `NewsItem[]` para mostrar

## Logs de Debug

El sistema ahora incluye logs detallados en la consola del navegador que te ayudarán a identificar dónde está fallando:

- `FacebookService config:` - Estado de la configuración de Facebook
- `NewsSection - Iniciando carga de noticias` - Inicio del proceso
- `Facebook API Success:` - Posts obtenidos exitosamente
- `GeminiService.formatPost - Iniciando formateo` - Proceso de AI
- `NewsSection - Gemini AI exitoso:` - Formateo exitoso

## Próximos Pasos

1. Configura las variables de entorno según las instrucciones
2. Reinicia el servidor de desarrollo
3. Ve a la página principal para verificar que las noticias se cargan
4. Si hay problemas, revisa la página de debug en `/debug`
