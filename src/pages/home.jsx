import { Link } from "react-router-dom";
import { allPosts } from "../data/posts";


const stats = [
  { icon: "bi-people", value: "10+ ألف", label: "قارئ" },
  { icon: "bi-newspaper", value: "مقالة", label: "50+" },
  { icon: "bi-pen", value: "كاتب", label: "6" },
  { icon: "bi-folder", value: "تصنيفات", label: "4" },
];

const featured = allPosts.filter((p) => [4, 5, 6].includes(p.id));

const categories = [
  { name: "بورتريه", icon: "bi-person", count: "3" },
  { name: "إضاءة", icon: "bi-brightness-high", count: "3" },
  { name: "تقنيات", icon: "bi-sliders", count: "5" },
  { name: "مناظر طبيعية", icon: "bi-mountain", count: "2" },
  { name: "معدات", icon: "bi-camera", count: "3" },
];

const latest = [
  {
    id: 1,
    category: "تقنيات",
    readTime: "7 دقائق للقراءة",
    date: "8 يناير 2026",
    title: "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
    excerpt: "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",
    author: "داود خالد",
    role: "مدرب تصوير",
    avatar: "https://i.pravatar.cc/40?img=9",
    image: "https://picsum.photos/700/300?random=31",
  },
  {
    id: 2,
    category: "تقنيات",
    readTime: "9 دقائق للقراءة",
    date: "5 يناير 2026",
    title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
    excerpt: "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",
    author: "ليث محمود",
    role: "فنان بصري",
    avatar: "https://i.pravatar.cc/40?img=8",
    image: "https://picsum.photos/700/300?random=32",
  },
  {
    id: 3,
    category: "معدات",
    readTime: "8 دقائق للقراءة",
    date: "3 يناير 2026",
    title: "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",
    excerpt: "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",
    author: "جمال عبدالله",
    role: "مصور ومراجع تقني",
    avatar: "https://i.pravatar.cc/40?img=5",
    image: "https://picsum.photos/700/300?random=33",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section text-center px-3">
        <span className="badge-pill-dark mb-4 d-inline-block">مرحباً بك في عدسة</span>
        <h1 className="hero-title fw-bold mb-3">
          اكتشف <span className="text-gradient-orange">فن</span>
          <br />
          التصوير الفوتوغرافي
        </h1>
        <p className="text-white fs-5 mb-4 mx-auto" style={{ maxWidth: "600px" }}>
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
          <button className="btn btn-orange">استكشف المقالات</button>
          <button className="btn btn-outline-light-pill">اعرف المزيد</button>
        </div>

        <div className="container section-gap">
          <div className="row g-3 justify-content-center mx-auto" style={{ maxWidth: "800px" }}>
  {stats.map((s) => (
    <div className="col-6 col-md-2" key={s.icon}>
      <div className="stat-card text-center py-3 px-2">
        <i className={`bi ${s.icon} fs-5 text-orange mb-1 d-block`}></i>
        <h6 className="fw-bold mb-0">{s.label}</h6>
        <p className="text-white mb-0" style={{ fontSize: "0.8rem" }}>{s.value}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* Featured articles */}
<section className="container py-5 section-gap">
  <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap gap-3">
    <div>
      <span className="badge-pill-dark d-inline-block mb-2">مميز</span>
      <h2 className="fw-bold">مقالات مختارة</h2>
      <p className="text-white">محتوى منتقى لبدء رحلة تعلمك</p>
    </div>
    <button className="btn btn-outline-light-pill">
      عرض الكل <i className="bi bi-arrow-left ms-2"></i>
    </button>
  </div>

  <div className="d-flex flex-column gap-4">
   {featured.map((post) => (
  <Link to={`/blog/${post.id}`} className="text-decoration-none text-reset d-block" key={post.id}>
  <div className="card-dark row g-0 overflow-hidden">
        <div className="col-md-8 p-4 order-2 order-md-1">
          <div className="d-flex align-items-center gap-3 text-white small mb-2">
            <span className="badge-pill-dark">{post.category}</span>
            <span><i className="bi bi-clock"></i> {post.readTime}</span>
          </div>
          <h4 className="fw-bold">{post.title}</h4>
          <p className="text-white">{post.excerpt}</p>
          <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-3">
            <a href="#" className="text-orange text-decoration-none">
              <i className="bi bi-arrow-left"></i> اقرأ المقال
            </a>
            <div className="d-flex align-items-center gap-2">
              <img src={post.avatar} className="rounded-circle" width="36" height="36" alt={post.author} />
              <div>
                <div className="small fw-semibold">{post.author}</div>
                <div className="small text-white">{post.date}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 position-relative order-1 order-md-2">
          <img
            src={post.image}
            className="w-100 h-100"
            style={{ objectFit: "cover", minHeight: "260px" }}
            alt={post.title}
          />
          {post.featuredBadge && (
            <span className="badge bg-white text-dark position-absolute top-0 end-0 m-2 rounded-pill px-3 py-2">مميز</span>
          )}
        </div>
      </div>
      </Link>
    ))}
  </div>
</section>
     

      {/* Categories */}
      <section className="container py-5 section-gap">
        <div className="text-center mb-4">
          <span className="badge-pill-dark d-inline-block mb-2">التصنيفات</span>
          <h2 className="fw-bold">استكشف حسب الموضوع</h2>
          <p className="text-white">اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>
        <div className="row g-3 mb-5">
      {categories.map((cat) => (
  <div className="col-6 col-md-4" key={cat.name}>
    <Link to={`/blog?category=${encodeURIComponent(cat.name)}`} className="text-decoration-none text-reset d-block">
      <div className="category-card text-center py-4">
        <div className="icon-circle">
          <i className={`bi ${cat.icon} text-orange fs-5`}></i>
        </div>
        <div className="fw-semibold">{cat.name}</div>
        <div className="small text-white">{cat.count} مقالة</div>
      </div>
    </Link>
  </div>
))}
        </div>
      </section>

      {/* Latest articles */}
      <section className="container py-5 section-gap">
        <div className="text-center mb-4">
          <span className="badge-pill-dark d-inline-block mb-2">الأحدث</span>
          <h2 className="fw-bold">أحدث المقالات</h2>
          <p className="text-white">محتوى جديد طازج من المطبعة</p>
          <a href="#" className="text-orange text-decoration-none small">
            عرض جميع المقالات <i className="bi bi-arrow-left"></i>
          </a>
        </div>

        <div className="d-flex flex-column gap-4">
          {latest.map((post) => (
            <div className="card-dark overflow-hidden" key={post.id}>
              <div className="position-relative">
                <img src={post.image} className="w-100" style={{ height: "220px", objectFit: "cover" }} alt={post.title} />
                <span className="badge bg-white text-dark position-absolute top-0 end-0 m-3 rounded-pill px-3 py-2">{post.category}</span>
              </div>
              <div className="p-4">
                <div className="d-flex align-items-center gap-3 text-white small mb-2">
                  <span><i className="bi bi-clock"></i> {post.readTime}</span>
                  <span>{post.date}</span>
                </div>
                <h5 className="fw-bold">{post.title}</h5>
                <p className="text-white">{post.excerpt}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button className="arrow-nav-btn">
                    <i className="bi bi-chevron-right"></i>
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <div className="text-end">
                      <div className="small fw-semibold">{post.author}</div>
                      <div className="small text-white">{post.role}</div>
                    </div>
                    <img src={post.avatar} className="rounded-circle" width="36" height="36" alt={post.author} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-5 section-gap">
        <div className="card-dark text-center mx-auto p-5" style={{ maxWidth: "600px" }}>
          <div className="icon-circle mx-auto mb-3" style={{ width: "48px", height: "48px", background: "var(--orange)" }}>
            <i className="bi bi-envelope text-white fs-5"></i>
          </div>
          <h4 className="fw-bold">اشترك في نشرتنا الإخبارية</h4>
          <p className="text-white">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
          <div className="d-flex flex-column gap-2 mt-3">
            <input type="email" className="form-control bg-input" placeholder="أدخل بريدك الإلكتروني" />
            <button className="btn btn-orange">اشترك الآن</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;