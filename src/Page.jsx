import { useContext } from 'react';
import Header from './Header';
import { Context } from './ThemeContextProvider';
export default function Page() {
  const {temas} = useContext(Context) 
  return (
    <div id="app" class={temas}>
      <Header/>
      <article>
        <h2>Estágio</h2>
        <p>
          Um momento em que se reflete se vale a pena esse sofrimento todo!
        </p>
      </article>
    </div>
   

  );
}
