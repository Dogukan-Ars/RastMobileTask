import React, { useRef, useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const navRef = useRef()

    const showNav = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <header className="header">
                <div className="nav-logo">

                    {/* Logoya tıklandığı anda bulunduğumuz sayfaya gitmek için Link ile "/" ifadesini kullanıyoruz */}
                    <Link to={"/"}>
                        <img src="./assets/Logo.png" alt="nav-logo" />
                    </Link>
                </div>

                {/* Burada useRef ile birlikte eğer sayfanın boyutu değişirse, yeniden veri oluşturmak yerine, 
                halihazırda bulunan verilere erişim sağlamayı mümkün hale getiriyoruz. Aynı zamanda isActive 
                değişkenimiz true değer döndürürse navbar class'ımız responsive_nav class'ı da alacak ve ona 
                göre yazdığımız css değerleri implement olacaktır. */}
                <nav className={`navbar ${isActive ? 'responsive_nav' : ''}`} ref={navRef}>

                    {/* Link yardımı ile navbar başlıklarının işlevsellik kazanmasını ve tıklandığı anda yönlendirme yapmalarını sağlıyoruz */}
                    <div className="nav-titles">

                        {/* Navbarın orta kısmındaki veriler eşit mesafelerde yer aldığı için liste yapısından faydalanıyoruz */}
                        <ul>
                            <li className="title">
                                <Link to={"/hakkimizda"} className='title-link'>
                                    Hakkimizda
                                </Link>
                            </li>
                            <li className="title">
                                <Link to={"/juri-yarisma-yazilimi"} className='title-link'>
                                    Jüri - Yarışma Yazılımı
                                </Link>
                            </li>
                            <li className="title">
                                <Link to={"/word-ninja"} className='title-link'>
                                    Word Ninja
                                </Link>
                            </li>
                            <li className="title">
                                <Link to={"/word-pyramids"} className='title-link'>
                                    Word Pyramids
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-icons">
                        <ul>
                            <li className="icon">
                                <Link to={"https://www.youtube.com/@rastmobile183"} target='_blank' className='nav-icon'>
                                    <img src="./assets/Youtube.png" alt="" />
                                </Link>
                            </li>
                            <li className="icon">
                                <Link to={"https://www.instagram.com/mobilerast/"} target='_blank' className='nav-icon'>
                                    <img src="./assets/Instagram.png" alt="" />
                                </Link>
                            </li>
                            <li className="icon">
                                <Link to={"https://www.behance.net/rastmobile"} target='_blank' className='nav-icon'>
                                    <img src="./assets/Behance.png" alt="" />
                                </Link>
                            </li>
                            <li className="icon">
                                <Link to={"https://www.linkedin.com/company/rastmobile/"} target='_blank' className='nav-icon'>
                                    <img src="./assets/Linkedin.png" alt="" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* isActive değerimiz ile gelen menu ikonu ve tıklandıktan sonra ortaya çıkacak olan kapatma ikonu ternary operatörü ile yazıldı. */}
                <button className={`nav-btn nav-menu ${isActive ? 'active' : ''}`} onClick={showNav}>
                    {isActive ? (
                        <img src="/assets/close.png" alt="close-icon" />
                    ) : (
                        <img src="/assets/menu-bar.png" alt="menu-icon" />
                    )}
                </button>
            </header>
        </>
    )
}

export default Navbar