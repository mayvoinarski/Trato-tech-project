import Header from 'components/Header';
import styles from './Home.module.scss';
import relogio from 'assets/inicial.png';

export default function Home () {
    return (
        <div>
            <Header 
                title='Classificado Tech'
                description='Compre diversos tipos de produtos no melhor site do Brasil!'
                image={relogio}
                className={styles.header}
            />
        </div>
    )
}