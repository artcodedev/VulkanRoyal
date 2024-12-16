
import { headers } from 'next/headers'

const Lang = () => {

    const accept_language = headers().get("Accept-Language");

    if (accept_language?.length) {

        let spl_lang = accept_language.split(",")[0].split("-")[0];

        let lang = ['ru', 'en'].indexOf(spl_lang) != -1 ? spl_lang : "en";

        return lang;

    }

    return 'en'
}

export default Lang;