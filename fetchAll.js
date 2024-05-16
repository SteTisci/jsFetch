const fetchURL = async (URL) => {
    const risposta = await fetch(URL);
    return {
        stato: risposta.statusText,
        codice: risposta.status,
    };
}

export const fetchALL = async (URLS) => {
    const risposte = {};
    // Inoltro richieste http
    for (const URL of URLS) {
        const risposta = await fetchURL(URL);
        console.log(`Richiesta... ${URL}\t\t...${risposta.stato}`);
        risposte[URL] = risposta;
    }
    return risposte;
}