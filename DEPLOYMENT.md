# 🚀 Guía de Despliegue - Portfolio Roberto Zapata

Esta guía te ayudará a desplegar tu portafolio profesional en Vercel con todas las características de producción.

## 📋 Pre-requisitos

- Node.js 18+ instalado
- Cuenta en [Vercel](https://vercel.com)
- Cuenta en [GitHub](https://github.com)
- Git configurado localmente

## 🛠️ Configuración Inicial

### 1. Clonar el Repositorio
```bash
cd ~/
git clone https://github.com/tu-usuario/roberto-zapata-portfolio.git
cd roberto-zapata-portfolio
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Verificar que Todo Funciona
```bash
# Ejecutar tests
npm run test
npm run test:e2e

# Verificar build
npm run build
```

## 🌐 Despliegue en Vercel

### Opción A: Despliegue Automático (Recomendado)

1. **Push a GitHub:**
```bash
git add .
git commit -m "feat: initial portfolio setup"
git push origin main
```

2. **Conectar con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub
   - Importa el repositorio `roberto-zapata-portfolio`
   - Vercel detectará automáticamente Next.js

3. **Configurar Variables de Entorno:**
   En el dashboard de Vercel, añade estas variables:
   ```
   NODE_ENV=production
   ```

### Opción B: Despliegue Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Deploy
vercel --prod
```

## 🔧 Configuración CI/CD

### 1. Crear Secrets en GitHub

Ve a tu repositorio → Settings → Secrets and variables → Actions:

```bash
VERCEL_TOKEN=tu_vercel_token
VERCEL_ORG_ID=tu_org_id
VERCEL_PROJECT_ID=tu_project_id
CODECOV_TOKEN=tu_codecov_token (opcional)
```

Para obtener estos valores:
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login y obtener tokens
vercel login
vercel link
cat .vercel/project.json
```

### 2. El Pipeline se Ejecutará Automáticamente

Cada push a `main` ejecutará:
- ✅ Lint checks
- ✅ Unit tests (Jest)
- ✅ E2E tests (Playwright)
- ✅ Security audit
- ✅ Build production
- ✅ Deploy a Vercel

## 📊 Monitoreo y Analytics

### 1. Google Analytics 4
En `src/app/layout.tsx`, añade tu GA4 ID:
```typescript
// Descomenta y añade tu GA4 ID
// gtag('config', 'TU_GA4_ID')
```

### 2. Vercel Analytics
Habilita en tu dashboard de Vercel:
- Ve a tu proyecto → Analytics → Enable

### 3. Performance Monitoring
El Lighthouse CI se ejecuta automáticamente y reporta:
- Performance Score
- Accessibility Score
- SEO Score
- Best Practices Score

## 🔒 Seguridad

### Headers de Seguridad Configurados:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

### SSL/TLS:
Vercel proporciona HTTPS automático con certificados SSL.

## 📱 Dominio Personalizado

### 1. Configurar Dominio (Opcional)
```bash
# En Vercel dashboard
# Settings → Domains → Add Domain
# Ejemplo: roberto-zapata.dev
```

### 2. Actualizar URLs en el Código
Busca y reemplaza todas las instancias de:
- `roberto-zapata.vercel.app` → `tu-dominio.com`

En archivos:
- `public/sitemap.xml`
- `README.md`
- `src/app/layout.tsx` (metadata)

## 🧪 Testing en Producción

### 1. Verificar Deployment
```bash
# Verificar que el sitio carga
curl -I https://tu-portfolio.vercel.app

# Verificar performance
npx lighthouse https://tu-portfolio.vercel.app --view
```

### 2. Ejecutar E2E Tests contra Producción
```bash
PLAYWRIGHT_BASE_URL=https://tu-portfolio.vercel.app npm run test:e2e
```

## 📈 Optimizaciones Post-Despliegue

### 1. SEO
- [x] Sitemap configurado
- [x] Robots.txt configurado
- [x] Meta tags optimizados
- [x] Schema markup (JSON-LD)

### 2. Performance
- [x] Images optimizadas
- [x] Bundle size optimizado
- [x] Cache headers configurados
- [x] Lazy loading implementado

### 3. Analytics y Tracking
- [ ] Google Analytics 4 (opcional)
- [ ] Google Search Console
- [ ] LinkedIn pixel (opcional)

## 🔄 Actualizaciones Futuras

### Para añadir nuevos proyectos:
1. Edita `src/data/personal.ts`
2. Añade assets en `public/`
3. Commit y push → deploy automático

### Para actualizar experiencia:
1. Modifica `experiences` en `src/data/personal.ts`
2. Los tests se ejecutarán automáticamente

## 📞 Soporte

Si tienes problemas:

1. **Vercel Build Logs:** Check en tu dashboard
2. **GitHub Actions:** Revisa los workflows
3. **Local Testing:** `npm run dev` para probar localmente

### Comandos Útiles de Debug:
```bash
# Verificar build local
npm run build && npm run start

# Verificar tests
npm run test:coverage

# Debug E2E
npm run test:e2e:ui
```

---

## ✅ Checklist Final

- [ ] Repositorio en GitHub creado
- [ ] Vercel conectado y desplegado
- [ ] CI/CD pipeline funcionando
- [ ] Tests pasando (Jest + Playwright)
- [ ] Lighthouse Score > 90 en todas las categorías
- [ ] SEO optimizado
- [ ] Analytics configurado (opcional)
- [ ] Dominio personalizado configurado (opcional)

**🎉 ¡Tu portafolio está listo para impresionar a los reclutadores!**

---

**Próximos pasos recomendados:**
1. Comparte el enlace en tu LinkedIn
2. Añádelo a tu CV como "Portfolio Online"
3. Úsalo en aplicaciones a empleos
4. Monitorea analytics y métricas de visitas