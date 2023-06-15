import React, { useEffect, useState } from 'react'
import DataGrids from './DataGrids'
import "./heroSection.css"
import AddNewAccount from './AddNewAccount'
import { v4 as uuidv4 } from 'uuid';


// Burada ilk başlangıç verisi olarak göndermek istediğim, task içerisinden de ulaşabileceğimiz statik veriler bulunmakta. 
// Bunları referans olarak aldım. İsteğe göre dinamik olarak da uygulanabilir.
const getStorage = () => {
    let itemList = []
    const array = [
        { id: uuidv4(), link: "instagram.com/mobilerast/", name: 'instagram', desc: "We'll help you to finish your development project successfully." },
        { id: uuidv4(), link: "tr.linkedin.com/company/rastmobile", name: 'linkedin', desc: "Hire vetted developers from Rast Mobile to scale up your tech projects." },
        { id: uuidv4(), link: "behance.net/rastmobile", name: 'behance', desc: "Software Development Agency Rast Mobile Information Technology Ltd." },
        { id: uuidv4(), link: "twitter.com/rastmobile", name: 'twitter', desc: "Software Development Agency Rast Mobile Information Technology Ltd." }
    ]

    // Verileri tablo içerisine yazdırabilmek için localStorage'ımızdan çekip, liste içerisine parse ediyoruz
    if (localStorage.getItem("Accounts")) {
        itemList = JSON.parse(localStorage.getItem("Accounts"))
        return itemList
    }
    return array
}

function HeroSection() {
    // Tablomuza yeni bir hesap ekleyebilmek için öncelikle verimizi useState ile çekip, daha sonra AddNewAccount componentimiz aracılığıyla tabloya ekleyebiliyoruz
    const [accountList, setAccountList] = useState(getStorage())
    const [newAccount, setNewAccount] = useState(false)

    // Arama butonuna yazdığımız verileri filtrelememiz için, tablodaki array içerisinden veri çekmemizi sağlamakta
    const [search, setSearch] = useState("")

    // showRow butonumuza tıkladığımız zaman dropdown olarak açılması için kullanıyoruz
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // Başlangıçta kaç adet satırdan oluşan bir tablo göstereceğimizi, daha sonrasından seçimlerimize göre gösterilecek satırları da belirlememizi sağlar
    const [showRows, setShowRows] = useState(12);

    // localStorage'ımıza yeni hesap eklememiz için set ve stringify metodları ile veri göndermemiz gerekmekte
    useEffect(() => {
        localStorage.setItem("Accounts", JSON.stringify(accountList))
    }, [accountList])

    // Eğer yeni hesap true ise form componentimiz açılacak ve içerisine gönderdiğimiz proplar sayesinde yeni hesap ekleme işlemini yapabileceğiz.
    if (newAccount) {
        return (
            <AddNewAccount setNewAccount={setNewAccount} accountList={accountList} setAccountList={setAccountList} />
        )
    }

    // showRows butonumuza tanımladığımız onClick sayesinde butona tıklandığı her seferinde bu fonksiyon çalışacak ve bize default row sayılarının olduğu bir dropdown gösterecek.
    // Hangi row sayısını seçersek, o kadar sayıda row'a sahip bir tablo gösterilecek
    const handleRowsShow = (numRows) => {
        setShowRows(numRows);
        setDropdownOpen(false);
    };

    return (
        <main className='hero-container'>
            <div className="main-content">
                <div className="filter-area">
                    <div className="container-left">
                        <div className="input-btn">

                            {/* Arama alanına yazmaya başladığımız anda, girilen değerleri direkt olarak tablodaki elemanlar ile kıyaslayarak, filtre sonucunu bize gösteriyor */}
                            <input type="text" placeholder='Search objects...' onChange={(e) => setSearch(e.target.value)} />
                            <button className="search"><img src="assets/Search.png" alt="search icon" /></button>
                        </div>
                        <button className="filter-btn"><img src="assets/Filter.png" alt="filter icon" /></button>
                    </div>
                    <div className="container-right">

                        {/* Hesap ekle butonuna tıkladığımız anda form komponent ekranının açılmasını sağlamakta */}
                        <button className="new-account" onClick={() => setNewAccount(true)}>
                            <img src="assets/Line-vertical.png" alt="Line-vertical icon" className='line-v' />
                            <img src="assets/Line-horizontal.png" alt="Line-horizontal icon" className='line-h' />
                            <span className='new-account-text'>Yeni Hesap Ekle</span>
                        </button>
                    </div>
                </div>
                <div className="table-container">

                    {/* Tablomuzu dataGrids komponenti içerisinde kullanıyoruz, proplar göndererek işlevselliğiği arttırmış oluyoruz */}
                    <DataGrids accountList={accountList} search={search} showRows={showRows} />
                </div>
                <div className="footer">
                    <div className="footer-left">
                        <span>Show:</span>
                        <div className="dropdown">

                            {/* showRows butonuna tıklandığında dropdown'ı aktif etmekte */}
                            <button className="show-rows" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                {showRows} rows 
                                <img src="assets/Arrow-up.png" alt="Arrow-up icon" className='arrow-up' />
                                <img src="assets/Arrow-down.png" alt="Arrow-down icon" className='arrow-down' />
                            </button>
                            {dropdownOpen && (
                                <div className="dropdown-items">

                                    {/* showRows butonuna tıklandığı anda kaç satır sıralamak istiyorsak bu bilgileri buradan değiştirebilmekteyiz */}
                                    <li onClick={() => handleRowsShow(4)}>4 rows</li>
                                    <li onClick={() => handleRowsShow(8)}>8 rows</li>
                                    <li onClick={() => handleRowsShow(12)}>12 rows</li>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="footer-right">
                        <div>
                            <img src="assets/Arrow-left.png" alt="arrow-left icon" />
                            <button className='footer-btn'>1</button>
                            <span className='footer-text-f'>of</span>
                            <span className='footer-text-l'>4</span>
                            <img src="assets/Arrow-right.png" alt="arrow-right icon" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HeroSection