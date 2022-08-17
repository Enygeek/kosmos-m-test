import React from 'react'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Home() {
    return (
        <body>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top"><img src="assets/img/logo.png" alt="..."/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">A propos du CPF</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>


        <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</a>
                        </li>
                        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                                                    href="about.html">About</a></li>
                        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="post.html">Sample
                            Post</a></li>
                        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4"
                                                    href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <section className="block bg-1 mb-3">
            <div className="container w-50">
                <div className="block-heading text-uppercase">Changez de métier</div>
                <div className="block-subheading text-uppercase">Grâce au CPF de transition professionnelle</div>
                <a className="btn btn-primary btn-xl text-uppercase mt-3" href="#services">Tell Me More</a>
            </div>
        </section>

        <section className="block bg-2 mb-3">
            <div className="container w-50">
                <div className="block-heading text-uppercase">Qu'est-ce qe le CPF de transition professionelle ?</div>
                <a className="btn btn-primary btn-xl text-uppercase mt-3" href="#services">Tell Me More</a>
            </div>
        </section>

        <section className="block bg-3 mb-3">
            <div className="container">
                <p className="block-heading text-uppercase">Comment réaliser votre projet de réconverion professionnelle
                    ?</p>
                <a className="btn btn-primary btn-xl text-uppercase mt-3" href="#services">Tell Me More</a>
            </div>
        </section>

        <section className="block bg-4 mb-3">
            <div className="container">
                <p className="block-heading text-uppercase">Discuter avec un conseiller !</p>
                <a className="btn btn-primary btn-xl text-uppercase mt-3" href="#services">Tell Me More</a>
            </div>
        </section>

        {/* Footer */}
        <footer className="footer py-4 bg-dark">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">
                        <img src="../assets/img/logo.png" alt="..."/>
                    </div>
                    <div className="col-lg-4 text-lg-center text-white">
                        <a className="link-dark text-white text-decoration-none me-3" href="#!">Accueil</a>
                        <a className="link-dark text-white text-decoration-none me-3" href="#!">Contactez-nous</a>
                        <a className="link-dark text-white text-decoration-none" href="#!">Mentions légales</a>
                    </div>
                    <div className="col-lg-4 my-3 my-lg-0 text-lg-end">
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i
                            className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i
                            className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i
                            className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>
        </body>
    )
}
