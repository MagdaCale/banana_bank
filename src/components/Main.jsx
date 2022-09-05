import { useState } from 'react'
import './Header'

const Main = () => {
    const [eingabe, setEingabe] = useState('')
    const [kontostand, setKontostand] = useState(0)
    const [dispo, setDispo] = useState(0)

    return(
        <section className='konto'>

            <h2 className='headlilne'>Dein Girokonto</h2>
            <div className='saldo' >{kontostand}€</div>

            <input className='geldbetrag' value={eingabe} onChange={(e) => setEingabe(Number(e.target.value))} type="number" id="betrag" placeholder='Neuer Betrag in €'/>

            <input className='geldbetrag' onChange={(e)=> setDispo(Number(e.target.value))} type="number" placeholder='Dispo einrichten'/>

            <div>
                <button className='einzahlen' onClick={() => {setKontostand((prev) => prev + Number(eingabe));setEingabe('') }}>Einzahlen</button>

                <button className='auszahlen' onClick={() => {kontostand + dispo - eingabe >= 0 ? setKontostand((prev) => prev - Number(eingabe)) : window.alert('Sie können nicht mehr als das verfügbare Guthaben auszahlen'); setEingabe(''); }}>Auszahlen</button>
            </div>

        </section>
    )
}

export default Main