import { useState, useEffect } from 'react';

import './styles/textPage.css'
import switchIcon from '../assets/icons/switch-icon.svg'
import Client from '../client';



function TextPage() {
  const [textAreaText, setTextArea] = useState("");

  useEffect(() => {
    async function initial() {
      const response = await Client.post('/languages',{
        // params: {
        //   folderId: "b1gi4083b5lap400r850"
        // }
      });
      return response;
    }

    console.log(initial());
  }, []);

  return (
    <div className="text-page">
      <div className="language-panel">
        <img src={switchIcon} alt="Switch icon" />
      </div>
      <div className="text-box">
        <textarea
          className="input"
          placeholder="Введите текст для перевода"
          value={textAreaText}
          onChange={(e) => setTextArea(e.target.value)}
        />
        <textarea
          className="output"
          placeholder="Перевод"
          value={textAreaText}
        />
      </div>

    </div>
  );
}

export default TextPage;