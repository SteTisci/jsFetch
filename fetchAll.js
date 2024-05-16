const fetchURL = async (URL) => {
    const risposta = await fetch(URL);
    return {
        // Cambiare valori di ritorno con valori open data
        rispStatus: {
            stato: risposta.statusText, 
            codice: risposta.status,
        }
    };
}

export const fetchALL = async (URLS) => {
    const risposte = [];
    // Inoltro richieste http
    for (const URL of URLS) {
        const risposta = await fetchURL(URL);
        console.log(`Richiesta... ${URL}\t\t...${risposta.rispStatus['stato']}`);
        risposte[URL] = risposta;
    }
    return risposte;
}