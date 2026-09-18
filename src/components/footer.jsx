import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="pt-5 pb-3 border-top" style={{ borderColor: "#1e1e1e", background: "#0a0a0a" }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-3">
            <div className="logo-box d-inline-flex align-items-center gap-2 mb-2">
  <span className="text-orange small">عالم التصوير الفوتوغرافي</span>
  <i className="bi bi-aperture fs-4 text-orange"></i>
</div>
            <p className="text-white small">
              منصة متخصصة في عالم التصوير الفوتوغرافي تشارك أسرار المحترفين ونصائح عملية لتطوير مهاراتك.
            </p>
            <div className="d-flex gap-3 mt-3 fs-5">
              <i className="bi bi-youtube"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-github"></i>
              <i className="bi bi-twitter-x"></i>
            </div>
          </div>

          <div className="col-md-3">
            <h6 className="text-orange mb-3">استكشف</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/" className="text-white text-decoration-none">الرئيسية</Link></li>
              <li className="mb-2"><Link to="/blog" className="text-white text-decoration-none">المدونة</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="text-orange mb-3">التصنيفات</h6>
            <ul className="list-unstyled small text-white">
              <li className="mb-2">إضاءة</li>
              <li className="mb-2">بورتريه</li>
              <li className="mb-2">مناظر طبيعية</li>
              <li className="mb-2">تقنيات</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="text-orange mb-3">ابقى على اطلاع</h6>
            <input type="email" className="form-control form-control-sm bg-input mb-2" placeholder="أدخل بريدك الإلكتروني" />
            <button className="btn btn-orange btn-sm w-100">اشترك</button>
          </div>
        </div>

        <hr style={{ borderColor: "#1e1e1e" }} className="mt-4" />
        <div className="d-flex justify-content-between text-white small flex-wrap gap-2">
          <span>© 2026 عدسة، جميع الحقوق محفوظة.</span>
          <div className="d-flex gap-3">
            <span>سياسة الخصوصية</span>
            <span>شروط الخدمة</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;