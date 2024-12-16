

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

export default function Index() {

  // надо брать куки еще
  // ================================

  const accept_language = headers().get("Accept-Language");

  if (accept_language?.length) {

    let spl_lang = accept_language.split(",")[0].split("-")[0];

    let lang = ['ru', 'en'].indexOf(spl_lang) != -1 ? spl_lang : "en";

    redirect(`/${lang}`);
    
  } else { redirect(`/en`); }
	
}
