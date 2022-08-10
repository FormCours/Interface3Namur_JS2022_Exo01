import clsx from 'clsx';
import style from './welcome-react.module.css';

const WelcomeReact = ({ firstname, age }) => {

    // Utilisation du package "clsx" -> Génération de classe name dynamique
    //  - Syntaxe sous forme d'ensemble de variable
    const styleText11 = clsx(style.text1, age > 30 && style.textColor);
    //  - Syntaxe sous forme d'objet
    const styleText12 = clsx({
        [style.text1]: true,
        [style.textColor]: age > 30
    });

    return (
        <>
            <p className={styleText12}>Bienvenue {firstname} sur l'app React !</p>

            <p className={style.text2}>
                {/* Utilisation d'un operateur boolean, pour afficher du contenu */}
                Vous avez {age} ans ! {age > 40 && 'Oula'}
            </p>
        </>
    );
};

export default WelcomeReact;