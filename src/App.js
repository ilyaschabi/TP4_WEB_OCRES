import './App.css';
import React, {useState} from "react";
import Profil from './Profils';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>

function App() {
  const[active,setActive]= useState("Guillaume");

  return (

    <body className="theme" id="body">
        <article className="nav_container">
          <button className="name" onClick={() => setActive("Guillaume")}>Guillaume</button>
          <button className="name" onClick={() => setActive("Lea")}>Lea</button>
          <button className="name" onClick={() => setActive("Marie")}>Marie</button>
        </article>
        <article className="profil">
          {active === "Guillaume" && <Profil src="https://pbs.twimg.com/profile_images/728315333384253440/sImbPUfr_400x400.jpg" firstname="Guillaume" name="Gibert" birthdate="27/04/2000" p="Alcoolique et détraqué classique de ECE"/>}

          {active === "Lea" && <Profil src="https://media-exp1.licdn.com/dms/image/C4E22AQHHQe5FrQwnUw/feedshare-shrink_800/0/1611653660907?e=1637193600&v=beta&t=8YRtRJsLRblz0zRWypnNn0s-zvTKgOAkdmpgoslTSbg" firstname="Lea" name="Guignochau" birthdate="26/08/1999" p="Quasiment sûr qu'elle mène une double vie"
          />}
          {active === "Marie" && <Profil src="https://d2mjvz2lqjkhe7.cloudfront.net/as/assets-mem-com/cmi/8/5/1/3/9203158/20200604_151123427_0_orig.jpg/-/marie-dupont-rosemere-qc-obituary.jpg?crop=%28182.5799648506151%2C1.2083333333333332%2C688%2C464%29&cropxunits=688&cropyunits=464" firstname="Marie" name="Dupont" birthdate="21/05/2000" p="Respo à Nol, j'ai jamais vu un seul mec de Nol chanter, cette asso c'est un prank"
          />}
        </article>
    </body>

  );
}

export default App;