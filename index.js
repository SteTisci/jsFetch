import { fetchALL } from './fetchAll.js';
import { URLS } from './urls.js';


fetchALL(URLS).then(responses => console.log(responses));
// #TODO: manipolare risposte HTML per scraper informazioni 
//      - Regex per estrazione info generica
//      - modifica fetchURL per formato HTML
//      - Open data x statistica 