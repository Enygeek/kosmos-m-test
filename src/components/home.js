import React from 'react'
import logo from '../assets/img/logo.png';
import Facebook from '../assets/img/icons/Facebook.png';
import Instagram from '../assets/img/icons/Instagram.png';
import YouTube from '../assets/img/icons/YouTube.png';
import Twitter from '../assets/img/icons/Twitter.png';
import Linkedin from '../assets/img/icons/Linkedin.png';

export default function Home() {
    return (
        <body>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top"><img src={logo} alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link link-warning text-white" href="#services">A propos du CPF</a></li>
                        <li className="nav-item"><a className="nav-link link-warning text-white" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link link-warning text-white" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <section className="block bg-1 mb-3">
            <div className="container">
                <div className="block-heading text-uppercase">Changez de métier</div>
                <div className="block-subheading text-uppercase">Grâce au CPF de transition professionnelle</div>
                <a className="btn btn-white border-white text-white text-uppercase mt-3" href="#services">En savoir plus</a>
            </div>
        </section>

        <section className="block bg-2 mb-3">
            <div className="container w-50">
                <div className="block-heading text-uppercase">Qu'est-ce qe le CPF de transition professionelle ?</div>
                <a className="btn btn-white border-white text-white text-uppercase mt-3" href="#services">En savoir plus</a>
            </div>
        </section>

        <section className="block bg-3 mb-3">
            <div className="container">
                <p className="block-heading text-uppercase">Comment réaliser votre projet de réconverion professionnelle
                    ?</p>
                <a className="btn btn-white border-white text-white text-uppercase mt-3" href="#services">En savoir plus</a>
            </div>
        </section>

        <section className="block bg-4 mb-3">
            <div className="container">
                <p className="block-heading text-uppercase">Discuter avec un conseiller !</p>
                <a className="btn btn-white border-white text-white text-uppercase mt-3" href="#services">Contactez-nous !</a>
            </div>
        </section>

        {/* Footer */}
        <footer className="footer py-4 bg-dark">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">
                        <img src={logo} alt="logo" width="80"/>
                    </div>
                    <div className="col-lg-4 text-lg-center text-white">
                        <a className="link-warning text-white text-decoration-none me-3" href="#!">Accueil</a>
                        <a className="link-warning text-white text-decoration-none me-3" href="#!">Contactez-nous</a>
                        <a className="link-warning text-white text-decoration-none" href="#!">Mentions légales</a>
                    </div>
                    <div className="col-lg-4 my-3 my-lg-0 text-lg-end">
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter">
                            <img src={Facebook} alt="logo" width="8"/>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook">
                            <img src={Twitter} alt="logo" width="15"/>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn">
                            <img src={YouTube} alt="logo" width="15"/>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn">
                            <img src={Linkedin} alt="logo" width="15"/>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn">
                            <img src={Instagram} alt="logo" width="15"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        </body>
    )
}
