import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-adasa py-3">
      <div className="container d-flex align-items-center justify-content-between flex-wrap gap-3">
      <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none order-3">
          <div className="text-end">
            <div className="fw-bold fs-5 text-white">عدسة</div>
            <div className="text-orange small">عالم التصوير الفوتوغرافي</div>
          </div>
          <i className="bi bi-aperture fs-2 text-orange"></i>
        </Link>

        <ul className="navbar-nav d-flex flex-row gap-2 align-items-center mb-0 order-2">
          <li className="nav-item">
            <NavLink to="/" end className={({ isActive }) => "nav-link " + (isActive ? "nav-pill-active" : "nav-link-plain")}>
              الرئيسية
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className={({ isActive }) => "nav-link " + (isActive ? "nav-pill-active" : "nav-link-plain")}>
              المدونة
            </NavLink>
          </li>
        
        </ul>
  <div className="d-flex align-items-center gap-3 order-1">
          <i className="bi bi-search text-light fs-5"></i>
          <button className="btn btn-orange">ابدأ القراءة</button>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;