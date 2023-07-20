import { useState } from 'react'

function SelectionMenu() {
  const [language, setLanguage] = useState(initialLanguage);

  // const res = fetch("https://libretranslate.com/translate", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     q: '<p class="green">Hello!</p>',
  //     source: "en",
  //     target: "es",
  //     format: "html"
  //   }),
  //   headers: { "Content-Type": "application/json" }
  // });

  // console.log(res.json());

  return (
    <>
      <button> {language}</button>
      <div>{languages}</div>
    </>
  )
}

export default SelectionMenu;