import { useContext } from 'react';
import {Context} from './ThemeContextProvider';
export default function Header() {
  const {mudar} =useContext(Context )
    return (
      <header>
        <h1>Aplicativo Demonstração</h1>
        <button onClick={mudar}>Mudar Tema</button>
      </header>
    );
  }
  