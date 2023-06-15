import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./addNewAccount.css"

function AddNewAccount({ setNewAccount, setAccountList }) {

  // Geçici olarak inputlardan veri alarak, accountList'e verileri aktarabilmek için oluşturuyoruz
  const [state, setState] = useState({
    id: "",
    link: "",
    name: "",
    desc: ""
  })

  // Ayrı ayrı fonksiyon tanımlayarak, girdi verilerini almak için uğraşmak yerine, tek bir fonksiyon ile bu işlemi yapabiliyoruz.
  // [node] kullanarak bu onChange kullanan girdilerden direkt olarak belirlenen verileri ve değerlerini tek bir state altında toplayabilmekteyiz.
  const changeHandler = (node, value) => {
    setState((prevState) => (
      {
        ...prevState,
        [node]: value
      }
    ))
    console.log(state)
  }

  // State içerisine aldığımız verileri, AccountList içerisine eklememizi ve sonrasında bu verileri tabloda görüntüleyebilmemizi sağlar 
  const submitHandler = (e) => {
    e.preventDefault()
    setAccountList((prevState) => [
      ...prevState,
      {
        id: uuidv4(),
        link: state.link,
        name: state.name,
        desc: state.desc
      }
    ])
    setNewAccount(false)
  }

  return (
    <div className='form-container'>

      <form onSubmit={submitHandler}>

          {/* Kapatma ikonuna tıkladığımız zaman form'umuzu kapatacaktır */}
        <div className='close-icon' onClick={() => setNewAccount(false)}><img src="/assets/close.png" alt="close-icon" /></div>

        <fieldset className='fieldset'>
          <label>Sosyal Medya Linki</label><br/>
          <input
            className='form-input'
            type='text'
            onChange={(e) => changeHandler("link", e.target.value)}
            required
          />
        </fieldset>

        <fieldset className='fieldset'>
          <label>Sosyal Medya Adı</label><br/>
          <input
            className='form-input'
            type='text'
            onChange={(e) => changeHandler("name", e.target.value)}
            required
          />
        </fieldset>

        <fieldset className='fieldset'>
          <label>Açıklama</label><br/>
          <input
            className='form-input'
            type='text'
            onChange={(e) => changeHandler("desc", e.target.value)}
            required
          />
        </fieldset>

        <div className="buttons">

          {/* Vazgeç butonuna tıkladığımız zaman form'umuzu kapatacaktır */}
          <button className='giveup-btn' type='submit' onClick={() => setNewAccount(false)}>
            Vazgeç
          </button>
          <button className='newAccount-btn' type='submit'>
            Kaydet
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNewAccount