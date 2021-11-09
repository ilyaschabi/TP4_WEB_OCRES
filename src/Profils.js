import React from "react";

export default class Profil extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }


    render(){

        function newtheme() {
            var element1 = document.getElementById("body");
            var element2 = document.getElementById("infos_profil");
            var element3 = document.getElementById("infos_container");
            var element4 = document.getElementById("description_profil");
            var element5 = document.getElementById("c_super");
            element1.classList.toggle("newtheme");
            element2.classList.toggle("infos_profil_dark");
            element3.classList.toggle("infos_container_dark");
            element4.classList.toggle("description_profil_dark");
            element5.classList.toggle("c_super_dark");
         }
         console.log(this.props.src)
        return(
            <main>
                <article className="infos_profil" id="infos_profil">
                    <header className="photo_profil">
                        <img src={this.props.src} alt=""/>
                    </header>
                    <article className="infos_container" id="infos_container">
                        <p>{this.props.firstname}</p>
                        <p>{this.props.name}</p>
                        <p>{this.props.birthdate}</p>
                    </article>
                    <article className="newtheme_button_container">
                        <button id="newtheme" onClick={() => newtheme()}>Changer de theme</button>
                    </article>
                </article>
                <article className="description_profil" id="description_profil">
                    <p>{this.props.p}</p>
                    <article class="c_super" id="c_super">
                    <button onClick={this.increment}><img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Thumbs-up_position.jpg" alt=""/></button>
                        <p>C'est super !</p>
                        <p id="nb">{this.state.count}</p>

                    </article>
                </article>
            </main>
        )
    }
}