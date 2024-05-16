# FetchALL

`FetchALL` è una semplice utility JavaScript che invia richieste HTTP a più URL e restituisce le informazioni sul loro stato. Questo può essere utile per controllare rapidamente lo stato di più endpoint in una sola volta.

## Funzionalità

- **Fetching Asincrono**: Utilizza `async/await` per gestire le richieste HTTP.
- **Report di Stato**: Restituisce il codice di stato HTTP e il testo di stato per ogni URL.
- **Logging**: Registra lo stato di ciascuna richiesta nella console.

## Utilizzo

### Fetch URL

Recupera lo stato di un singolo URL:

```javascript
const fetchURL = async (URL) => {
    const risposta = await fetch(URL);
    return {
        rispStatus: {
            stato: risposta.statusText, 
            codice: risposta.status,
        }
    };
};
```
```javascript
export const fetchALL = async (URLS) => {
    const risposte = [];
    for (const URL of URLS) {
        const risposta = await fetchURL(URL);
        console.log(`Richiesta... ${URL}\t\t...${risposta.rispStatus['stato']}`);
        risposte[URL] = risposta;
    }
    return risposte;
};
