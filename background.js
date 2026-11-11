// HypeSquad Menu by Paraiso fiscal @Taj Mahal - https://discord.gg/DqzveR5pNd
// Solo inyecta menu.js al hacer clic en el ícono, y únicamente en Discord. No lee ni envía tu token.

const DISCORD = /^https:\/\/(canary\.|ptb\.)?discord\.com\//;

const avisar = (texto) => {
    chrome.action.setBadgeBackgroundColor({ color: '#f23f42' });
    chrome.action.setBadgeText({ text: texto });
    setTimeout(() => chrome.action.setBadgeText({ text: '' }), 2500);
};

chrome.action.onClicked.addListener(async (tab) => {
    if (!tab?.id || !DISCORD.test(tab.url || '')) {
        avisar('!');
        return;
    }
    try {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['menu.js'],
            world: 'MAIN',
        });
    } catch (e) {
        console.error('No se pudo abrir el menú:', e);
        avisar('X');
    }
});
