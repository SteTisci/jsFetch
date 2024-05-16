import { fetchALL } from './fetchAll.js';
import { URLS } from './urls.js';


fetchALL(URLS)
    .then((risposte) => {
        const statusRisposte = risposte;
        console.table(statusRisposte);
        process.exit();
    });
// #TODO: manipolare risposte HTML per scraper informazioni 
//      - Regex per estrazione info generica
//      - modifica fetchURL per formato HTML
//      - Open data x statistica 