import "./Footer.css";

export const Footer = ()=>{
    return(
        <footer className="footer">
            <nav className="footer-nav">
                <ul className="footer-nav_list">
                    <li>
                        <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Instagram
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Facebook
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://web.whatsapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Whatsapp
                        </a>
                    </li>
                </ul>
                <h6>Sitio desarrollado por AFCOIRO</h6>
            </nav>
        </footer>
    )
}