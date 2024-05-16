import { fetchALL } from './fetchAll.js';
import { URLS } from './urls.js';


fetchALL(URLS).then(responses => console.log(responses));