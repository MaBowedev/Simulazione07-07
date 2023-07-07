import Header from './Header.jsx'
import Footer from './footer.jsx'
import MainLogic from './mainlogic.jsx'

export default function Exreact1(props) {

    //Creare un array di 8 oggetti a piacere che rappresentano libri (titolo, autore, immagineCopertina, prezzo),
    // con almeno 2 libri di 2 autori identici, e 2 libri con titolo identico ma autori differenti.
    // Il componente Header mostra il titolo dell'app, il componente Footer i copyright.
    //  Il componente Main mostra la logica dell'applicazione: abbiamo un campo di input per digitare il titolo e
    // uno per digitare l'autore, e un pulsante di ricerca. La ricerca mostra i risultati del match di almeno uno dei
    //  due criteri di ricerca, oppure "nessun libro trovato".
    // Inizialmente la lista di libri in output è vuota, alla produzione delle ricerche vengono mostrate tutte le info
    // dei libri corrispondenti. Usare la strategia preferita per mostrare le immagini di copertina

const Books =[
{titolo: 'Baere',
autore: 'frenond',
pic: "https://m.media-amazon.com/images/M/MV5BYmM4MjBkNGMtZjE5Zi00ZDMwLWE5MjYtN2M0MTM2YTQ2MmNlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX67_CR0,0,67,98_AL_.jpg",
prezzo: 20},

{titolo: 'Baere',
autore: 'Kokko',
pic: "https://m.media-amazon.com/images/M/MV5BYmM4MjBkNGMtZjE5Zi00ZDMwLWE5MjYtN2M0MTM2YTQ2MmNlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX67_CR0,0,67,98_AL_.jpg",
prezzo: 25},

{titolo: 'Parro',
autore: 'Mammo',
pic: "https://m.media-amazon.com/images/M/MV5BYmM4MjBkNGMtZjE5Zi00ZDMwLWE5MjYtN2M0MTM2YTQ2MmNlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX67_CR0,0,67,98_AL_.jpg",
prezzo: 20},

{titolo: 'Tarro',
autore: 'Mammo',
pic: "https://m.media-amazon.com/images/M/MV5BYmM4MjBkNGMtZjE5Zi00ZDMwLWE5MjYtN2M0MTM2YTQ2MmNlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX67_CR0,0,67,98_AL_.jpg",
prezzo: 20},

{titolo: 'Calma',
autore: 'Lorelo',
pic: "https://m.media-amazon.com/images/M/MV5BYmM4MjBkNGMtZjE5Zi00ZDMwLWE5MjYtN2M0MTM2YTQ2MmNlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX67_CR0,0,67,98_AL_.jpg",
prezzo: 20},

{titolo: 'Ballo',
autore: 'Poppop',
pic: "https://m.media-amazon.com/images/M/MV5BYmM4MjBkNGMtZjE5Zi00ZDMwLWE5MjYtN2M0MTM2YTQ2MmNlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX67_CR0,0,67,98_AL_.jpg",
prezzo: 20},

{titolo: 'Canto',
autore: 'Felice',
pic: "https://m.media-amazon.com/images/M/MV5BYmM4MjBkNGMtZjE5Zi00ZDMwLWE5MjYtN2M0MTM2YTQ2MmNlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX67_CR0,0,67,98_AL_.jpg",
prezzo: 20},

{titolo: 'Dormo',
autore: 'Bene',
pic: "https://m.media-amazon.com/images/M/MV5BYmM4MjBkNGMtZjE5Zi00ZDMwLWE5MjYtN2M0MTM2YTQ2MmNlXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX67_CR0,0,67,98_AL_.jpg",
prezzo: 20},

]











    return (
        <div className='flex flex-col items-center'>

        <Header/>

        <MainLogic/>

        <Footer/>
        </div>
    )
}