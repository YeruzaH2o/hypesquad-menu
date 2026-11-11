// HypeSquad Menu by Paraiso fiscal @Taj Mahal - https://discord.gg/DqzveR5pNd
// Solo llama a /hypesquad/online (poner o quitar tu casa). No lee ni envía tu token.
(() => {
    const CONFIG = {
        marca: '𝜗𝜚 Paraiso fiscal @Taj Mahal </>',
        titulo: 'Elige tu HypeSquad',
        subtitulo: 'Haz clic en tu casa',
        fondo: 'https://i.pinimg.com/originals/d7/5f/48/d75f482467d286c98e30010fb5bb3c3b.gif',
        oscurecer: 0.5,
        colorCaja: '#313338',
        ancho: '460px',
        servidorTexto: 'Servidor de Discord',
        servidorLink: 'https://discord.gg/DqzveR5pNd',
    };

    const hash = (s) => {
        let x = 5381;
        for (const c of s) x = ((x << 5) + x + c.charCodeAt(0)) | 0;
        return x;
    };
    const firma =
        CONFIG.marca.replace(/[^a-z0-9]/gi, '').toLowerCase() +
        '|' +
        CONFIG.servidorLink;
    if (hash(firma) !== -1039219659) {
        return console.error(
            'Este script fue modificado y quitó el crédito original. ' +
                'Versión original: https://discord.gg/DqzveR5pNd',
        );
    }

    document.getElementById('hype-menu')?.remove();

    const wreq = webpackChunkdiscord_app.push([[Symbol()], {}, (r) => r]);
    webpackChunkdiscord_app.pop();

    let api;
    for (const [id, fn] of Object.entries(wreq.m)) {
        if (!fn.toString().includes('HTTPUtils')) continue;
        try {
            api = Object.values(wreq(id)).find((e) => e?.get && e?.post);
            if (api) break;
        } catch {}
    }
    if (!api) return console.error('No encontré el módulo de la API de Discord');

    const casas = [
        {
            nombre: 'Bravery',
            id: 1,
            color: '#9c84ef',
            icon: 'https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png',
        },
        {
            nombre: 'Brilliance',
            id: 2,
            color: '#f47b67',
            icon: 'https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png',
        },
        {
            nombre: 'Balance',
            id: 3,
            color: '#45ddc0',
            icon: 'https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png',
        },
    ];

    const overlay = document.createElement('div');
    overlay.id = 'hype-menu';
    Object.assign(overlay.style, {
        position: 'fixed',
        inset: '0',
        background: 'rgba(0,0,0,0.7)',
        zIndex: '99999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'gg sans, Segoe UI, sans-serif',
    });

    const box = document.createElement('div');
    Object.assign(box.style, {
        background: CONFIG.colorCaja,
        color: '#f2f3f5',
        borderRadius: '12px',
        padding: '24px',
        width: CONFIG.ancho,
        maxWidth: '92vw',
        boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textShadow: '0 1px 4px rgba(0,0,0,0.8)',
    });

    const capa = `linear-gradient(rgba(0,0,0,${CONFIG.oscurecer}), rgba(0,0,0,${CONFIG.oscurecer}))`;
    const probe = new Image();
    probe.onload = () => {
        box.style.backgroundImage = `${capa}, url("${CONFIG.fondo}")`;
    };
    probe.onerror = () =>
        console.warn('No se pudo cargar el GIF de fondo (puede que Discord lo bloquee).');
    probe.src = CONFIG.fondo;

    const marca = document.createElement('div');
    marca.textContent = CONFIG.marca;
    Object.assign(marca.style, {
        fontSize: '15px',
        fontWeight: '700',
        letterSpacing: '0.5px',
        marginBottom: '14px',
    });

    const titulo = document.createElement('h2');
    titulo.textContent = CONFIG.titulo;
    Object.assign(titulo.style, { margin: '0 0 6px', fontSize: '22px' });

    const sub = document.createElement('div');
    sub.textContent = CONFIG.subtitulo;
    Object.assign(sub.style, { color: '#dbdee1', marginBottom: '18px', fontSize: '14px' });

    const estado = document.createElement('div');
    Object.assign(estado.style, {
        minHeight: '22px',
        marginTop: '16px',
        fontSize: '14px',
        color: '#dbdee1',
    });

    const grid = document.createElement('div');
    Object.assign(grid.style, {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
    });

    const cerrar = () => {
        overlay.remove();
        document.removeEventListener('keydown', onKey);
    };
    const onKey = (e) => e.key === 'Escape' && cerrar();
    document.addEventListener('keydown', onKey);

    const ejecutar = async (accion, texto) => {
        estado.style.color = '#dbdee1';
        estado.textContent = 'Aplicando...';
        try {
            const res = await accion();
            if (res?.ok) {
                estado.style.color = '#4ade80';
                estado.textContent = '✅ ' + texto;
            } else {
                estado.style.color = '#f87171';
                estado.textContent = '❌ Falló, mira la consola';
                console.log(res);
            }
        } catch (e) {
            estado.style.color = '#f87171';
            estado.textContent = '❌ Error, mira la consola';
            console.error(e);
        }
    };

    const crearBoton = (texto, color, onClick, icon) => {
        const b = document.createElement('button');
        Object.assign(b.style, {
            background: 'rgba(0,0,0,0.45)',
            backdropFilter: 'blur(4px)',
            color: '#f2f3f5',
            border: '2px solid transparent',
            borderRadius: '10px',
            padding: '14px 8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            transition: 'border-color .15s, background .15s',
        });
        if (icon) {
            const img = document.createElement('img');
            img.src = icon;
            img.style.cssText = 'width:40px;height:40px';
            b.appendChild(img);
        }
        const span = document.createElement('span');
        span.textContent = texto;
        b.appendChild(span);
        b.onmouseenter = () => {
            b.style.borderColor = color;
            b.style.background = 'rgba(0,0,0,0.65)';
        };
        b.onmouseleave = () => {
            b.style.borderColor = 'transparent';
            b.style.background = 'rgba(0,0,0,0.45)';
        };
        b.onclick = onClick;
        return b;
    };

    casas.forEach((c) =>
        grid.appendChild(
            crearBoton(
                c.nombre,
                c.color,
                () =>
                    ejecutar(
                        () =>
                            api.post({
                                url: '/hypesquad/online',
                                body: { house_id: c.id },
                            }),
                        'Ahora eres ' + c.nombre,
                    ),
                c.icon,
            ),
        ),
    );

    const filaServidor = document.createElement('div');
    filaServidor.style.marginTop = '12px';
    const btnServidor = crearBoton(CONFIG.servidorTexto, '#5865f2', () =>
        window.open(CONFIG.servidorLink, '_blank', 'noopener,noreferrer'),
    );
    btnServidor.style.width = '100%';
    filaServidor.appendChild(btnServidor);

    const fila = document.createElement('div');
    Object.assign(fila.style, {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
        marginTop: '12px',
    });
    fila.appendChild(
        crearBoton('Quitar insignia', '#f23f42', () =>
            ejecutar(() => api.del({ url: '/hypesquad/online' }), 'Insignia quitada'),
        ),
    );
    fila.appendChild(crearBoton('Cerrar', '#80848e', cerrar));

    box.append(marca, titulo, sub, grid, filaServidor, fila, estado);
    overlay.appendChild(box);
    overlay.addEventListener('click', (e) => e.target === overlay && cerrar());
    document.body.appendChild(overlay);
})();
