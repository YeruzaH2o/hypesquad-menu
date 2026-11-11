# 𝜗𝜚 HypeSquad Menu

Menú para elegir o quitar tu casa de **HypeSquad** (Bravery, Brilliance o Balance) en Discord, con un clic.

By **Paraiso fiscal @Taj Mahal** · Servidor: https://discord.gg/DqzveR5pNd

## Qué hace

- Muestra un menú con las 3 casas, un botón para quitar la insignia y un botón al servidor.
- Solo llama a `/hypesquad/online` (poner o quitar tu casa).
- **No lee ni envía tu token.** El código es corto y está completo en `menu.js`: léelo antes de usarlo.
- La extensión no corre nada por sí sola: solo actúa cuando haces clic en su ícono, y únicamente en `discord.com`.

## Seguridad

**Lo que hace el código** (puedes comprobarlo leyendo `menu.js`, son unas 250 líneas):

- Pide a Discord poner o quitar tu casa: una sola petición a `/hypesquad/online` cuando haces clic en una casa o en "Quitar insignia".
- Carga imágenes: el fondo del menú y los íconos de las casas.
- Abre la invitación del servidor, solo si haces clic en ese botón.

**Lo que NO hace:**

- No lee, copia ni envía tu token.
- No usa cookies, `localStorage` ni tus mensajes, contactos o servidores.
- No envía datos a ningún servidor propio ni de terceros. No hay `fetch` ni `XMLHttpRequest` en el código.
- No se ejecuta sola: la extensión solo actúa cuando haces clic en su ícono, y solo en `discord.com`.
- Los únicos permisos de la extensión son `activeTab` y `scripting`, más acceso a los dominios de Discord.

**Compruébalo tú mismo:** abre las herramientas de desarrollador (`F12`), pestaña **Red** (Network), usa el menú y mira las peticiones. Verás la de `hypesquad/online` hacia Discord y las imágenes, nada más.

### Verifica que tu copia es la original

Estas son las huellas SHA-256 de la versión original (v1.0.0):

```
4d2e917ad9f6af58e88abbc1be996c39e1d76555076d8bd26443c9323b597054  menu.js
4e3497e3075245b301619cb2c7439a8783796d1f7301b283ac7bbfe2a2894b33  background.js
29b9f1c63c522e0f564c1fa0b0fd3cf45f2333449c0d098ae33a08ae3fcbc2b0  manifest.json
```

- Linux o Chromebook (Archivos de Linux): `sha256sum menu.js background.js manifest.json`
- Windows (PowerShell): `Get-FileHash menu.js -Algorithm SHA256`
- Mac: `shasum -a 256 menu.js`

Si el resultado no coincide, el archivo fue modificado: no lo uses y descárgalo de este repositorio. Si tú mismo cambiaste algo en `CONFIG`, la huella de `menu.js` también cambia, y eso es normal.

### Copias falsas

La única versión original es la de este repositorio. Si alguien te pasa una copia por mensaje privado, un enlace acortado o un archivo `.exe`, no la uses. Este proyecto nunca te va a pedir tu token, tu contraseña ni un código de verificación. Si algo te los pide, no es esto.

Si encuentras una copia que robe datos o se haga pasar por este proyecto, avísanos en el servidor: https://discord.gg/DqzveR5pNd

## Instalar como extensión (Chrome, Edge, Brave y otros Chromium, en computadora)

1. Descarga este repositorio (**Code → Download ZIP**) o el zip de la sección **Releases**, y descomprímelo. No borres la carpeta después, Chrome la usa desde ahí.
2. Abre `chrome://extensions` y activa el **Modo de desarrollador**.
3. Clic en **Cargar descomprimida** y elige la carpeta que tenga adentro `manifest.json`, `menu.js` y `icons`.
4. Fija el ícono con el puzzle de la barra de Chrome.

> Si sale "Falta el archivo de manifiesto", elegiste una carpeta de más arriba o de más abajo. Entra hasta ver `manifest.json` y elige esa.

## Usarla

1. Abre Discord en `discord.com` (en el navegador, no en la app de escritorio).
2. Clic en el ícono de la extensión.
3. Elige tu casa o quita la insignia. Recarga Discord (Ctrl + R) para verla en tu perfil.

Si haces clic fuera de Discord, el ícono muestra una "!" roja un momento.

## Usarla sin instalar (consola)

1. Abre Discord en el navegador y presiona `Ctrl + Shift + I`.
2. En la pestaña **Consola** escribe `allow pasting` y presiona Enter.
3. Pega el contenido de `menu.js` y presiona Enter.

## Personalizar

Todo lo editable (textos, fondo, colores y tamaño) está en el bloque `CONFIG` al inicio de `menu.js`.
El script incluye un chequeo de crédito: si cambias o borras la marca o el enlace del servidor, el menú no abre. Es una protección simple, no infalible.

## Aviso

- Este proyecto **no está afiliado a Discord**. HypeSquad es una marca de Discord.
- Usa módulos internos de la página de Discord (no una API oficial), y modificar el cliente de Discord va contra sus términos de servicio. Úsalo bajo tu propia responsabilidad.
- Si Discord cambia su código interno, el menú puede dejar de funcionar hasta que se actualice.
- Descarga este proyecto solo desde este repositorio. Una copia editada por otra persona podría hacer otra cosa.
