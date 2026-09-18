import { useState, useMemo } from "react";
import { Link , useSearchParams } from "react-router-dom";
import { allPosts, categories } from "../data/posts";



const POSTS_PER_PAGE = 6;

function Blog() {
  const [searchParams] = useSearchParams();
const categoryFromUrl = searchParams.get("category");
const [activeCategory, setActiveCategory] = useState(categoryFromUrl || "جميع المقالات");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory = activeCategory === "جميع المقالات" || post.category === activeCategory;
      const matchesSearch = post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  function handleCategoryClick(cat) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  }

  function goToPage(page) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-section text-center px-3">
        <span className="badge-pill-dark mb-4 d-inline-block">
          <i className="bi bi-journal-text text-orange"></i> مدونتنا
        </span>
        <h1 className="hero-title fw-bold mb-3">
          استكشف <span className="text-gradient-orange">مقالاتنا</span>
        </h1>
        <p className="text-white fs-5 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>

       <div className="container">
  <div className="d-flex flex-wrap justify-content-center gap-3 align-items-center mb-4">
    <input
      type="text"
      className="search-input-dark flex-shrink-0"
      style={{ minWidth: "260px" }}
      placeholder="ابحث في المقالات..."
      value={searchQuery}
      onChange={handleSearchChange}
    />
    <div className="d-flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-pill ${activeCategory === cat ? "active" : ""}`}
          onClick={() => handleCategoryClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  </div>

  <div className="d-flex justify-content-between align-items-center">
    <span className="text-white">عرض {filteredPosts.length} مقالات</span>
    <div className="d-flex gap-2">
      <button
        className={`view-toggle-btn ${viewMode === "list" ? "active" : ""}`}
        onClick={() => setViewMode("list")}
      >
        <i className="bi bi-list"></i>
      </button>
      <button
        className={`view-toggle-btn ${viewMode === "grid" ? "active" : ""}`}
        onClick={() => setViewMode("grid")}
      >
        <i className="bi bi-grid-3x3-gap"></i>
      </button>
    </div>
  </div>
</div>
      </section>

      {/* Articles */}
      <section className="container py-5">
        {paginatedPosts.length === 0 ? (
          <p className="text-center text-white py-5">لا توجد مقالات تطابق بحثك.</p>
        ) : (
          <div className={viewMode === "grid" ? "row g-4" : "d-flex flex-column gap-4"}>
            {paginatedPosts.map((post) => (
          <div className={viewMode === "grid" ? "col-md-4" : ""} key={post.id}>
  <Link to={`/blog/${post.id}`} className="text-decoration-none text-reset d-block h-100">
    <div className={`card-dark h-100 ${viewMode === "list" ? "row g-0 overflow-hidden" : ""}`}>
                  <div className={viewMode === "list" ? "col-md-4 position-relative" : "position-relative"}>
                    <img
                      src={post.image}
                      className="w-100 rounded-top"
                      style={{ height: viewMode === "list" ? "100%" : "200px", objectFit: "cover" }}
                      alt={post.title}
                    />
                    <span className="badge bg-white text-dark position-absolute top-0 end-0 m-2 rounded-pill px-3 py-2">
                      {post.category}
                    </span>
                  </div>
                  <div className={viewMode === "list" ? "col-md-8 p-4" : "p-3"}>
                    <div className="d-flex align-items-center gap-3 text-white small mb-2">
                      <span><i className="bi bi-clock"></i> {post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <h5 className="fw-bold">{post.title}</h5>
                    <p className="text-white small">{post.excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <button className="arrow-nav-btn">
                        <i className="bi bi-chevron-right"></i>
                      </button>
                      <div className="d-flex align-items-center gap-2">
                        <div className="text-end">
                          <div className="small fw-semibold">{post.author}</div>
                          <div className="small text-white">{post.role}</div>
                        </div>
                        <img src={post.avatar} className="rounded-circle" width="32" height="32" alt={post.author} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
            <button className="page-btn" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
              <i className="bi bi-chevron-right"></i>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`page-btn ${currentPage === page ? "active" : ""}`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            ))}
            <button className="page-btn" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
              <i className="bi bi-chevron-left"></i>
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default Blog;