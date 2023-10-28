import React from "react";

function Header({ onSearch }) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          Catatan Saya
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#aktif">
                Aktif
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#arsip">
                Arsip
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input type="search" className="form-control" placeholder="Cari catatan" aria-label="Search" onChange={(event) => onSearch(event)} id="search-navbar" />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
