import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';


function App() {
  return (
      <>
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
                              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                              <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                              <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                          </ul>
                      </div>
                  </div>
              </nav>

              <section className="block bg-1 mb-3">
                  <div className="container">
                      <div className="masthead-heading text-uppercase">Changez de métier</div>
                      <div className="masthead-subheading text-uppercase">Grâce au CPF br de transition professionnelle </div>
                      <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
                  </div>
              </section>

              <section className="block bg-2 mb-3">
                  <div className="container">
                      <div className="masthead-subheading">Welcome To Our Studio!</div>
                      <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                      <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
                  </div>
              </section>

              <section className="block bg-3 mb-3">
                  <div className="container">
                      <div className="masthead-subheading">Welcome To Our Studio!</div>
                      <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                      <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
                  </div>
              </section>

              <section className="block bg-4 mb-3">
                  <div className="container">
                      <div className="masthead-subheading">Welcome To Our Studio!</div>
                      <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                      <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
                  </div>
              </section>


              {/* Footer */}
              <footer class="footer py-4">
                  <div class="container">
                      <div class="row align-items-center">
                          <div class="col-lg-4 text-lg-start">Copyright &copy; Your Website 2022</div>
                          <div class="col-lg-4 my-3 my-lg-0">
                              <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                              <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                              <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                          </div>
                          <div class="col-lg-4 text-lg-end">
                              <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                              <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                          </div>
                      </div>
                  </div>
              </footer>
          </body>

      </>
  );
}

export default App;
