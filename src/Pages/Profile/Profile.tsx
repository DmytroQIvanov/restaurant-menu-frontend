import cross from '../../assets/close.png'
import './Profile.sass'
import { Link } from 'react-router-dom'
import user from '../../assets/user.png'
import phone from '../../assets/call.png'
import { useState } from 'react'

const Profile = () => {
    const localData = localStorage.getItem('profile')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const [phoneMessage, setPhoneMessage] = useState('')
    const [nameMessage, setNameMessage] = useState('')

    if (!localData) {
        return (<div className="profile">
            <div className="profile__nav-panel">
                <Link to="/menu" className="profile__cross-container">
                    <img src={cross} className="profile__cross" />
                </Link>
                <div className="profile__profile-title">Профиль</div>

                <div className="profile__button_create" onClick={() => {
                    if (name.length >= 2 && number.length >= 8) {
                        localStorage.setItem('profile', JSON.stringify({ name, number }))
                    } else {
                        setNameMessage("Введите данные")
                    }
                }
                }>Создать</div>
            </div>
            <div className="profile__input-block">
                <img src={user} />

                <input placeholder="Введите своё имя" value={name}
                    onChange={(elem) => { setName(elem.target.value) }}
                    onFocus={() => { setNameMessage('') }}
                    onBlur={() => { name.length <= 2 ? setNameMessage("Введите корректное имя") : setNameMessage("") }} />
                {nameMessage && <div className="profile__message">{nameMessage}</div>}

            </div>

            <div className="profile__input-block">
                <img src={phone} />

                <input placeholder="Номер телефона"
                    value={number}
                    onChange={(elem) => { setNumber(elem.target.value) }}
                    onFocus={() => { setPhoneMessage('') }}
                    onBlur={() => { number.length <= 8 ? setPhoneMessage("Введите корректный номер") : setPhoneMessage("") }} />
                {phoneMessage && <div className="profile__message">{phoneMessage}</div>}

            </div>


        </div>)
    }
    const profileData = JSON.parse(localData)


    return (
        <div className="profile-registered">
            <Link to="/menu"><img src={cross} className="profile-registered__cross" /></Link>
            <div className="profile-registered__profile-title">
                Ваш профиль:
            </div>
            <div className="profile-registered__data-container">
                <div className="profile-registered__data">
                    <a className="profile-registered__data-title">Имя:</a>
                    {profileData?.name}
                </div>
                <div className="profile-registered__data">
                    <a className="profile-registered__data-title">
                        Телефон:
                    </a> {profileData?.number}
                </div>
            </div>
            <button
                className="profile-registered__button_delete-profile"
                onClick={() => { localStorage.removeItem('profile') }}>Удалить профиль</button>
        </div>
    )
}
export default Profile