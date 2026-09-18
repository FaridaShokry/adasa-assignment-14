import { useParams, Link } from "react-router-dom";
import { allPosts } from "../data/posts";

const categoryContent = {
  "إضاءة": [
    { heading: "فهم اتجاه الضوء", text: "تعلم كيف يغير اتجاه مصدر الضوء من شكل الظلال وعمق الصورة، وكيف تستغل ذلك لصالح تكوينك." },
    { heading: "الإضاءة الطبيعية مقابل الاصطناعية", text: "لكل نوع إضاءة استخدامه المثالي، فالضوء الطبيعي يمنح نعومة، بينما الإضاءة الاصطناعية تمنحك تحكماً كاملاً." },
    { heading: "ضبط التعريض الضوئي", text: "تعامل مع فتحة العدسة وسرعة الغالق وحساسية ISO معاً للوصول إلى الإضاءة المثالية لمشهدك." },
    { heading: "الخلاصة", text: "الإضاءة الجيدة ليست صدفة، بل نتيجة فهم وتخطيط. جرب، لاحظ، وطور حسك البصري مع كل تصوير." },
  ],
  "بورتريه": [
    { heading: "التواصل مع الموضوع", text: "قبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة، فالنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع." },
    { heading: "اختيار العدسة المناسبة", text: "عدسات 85mm و50mm هي الكلاسيكيات لتصوير البورتريه، توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة." },
    { heading: "الإضاءة الطبيعية", text: "الضوء القادم من نافذة جانبية يمنح البورتريه عمقاً ونعومة دون الحاجة لمعدات إضاءة معقدة." },
    { heading: "التركيز على العيون", text: "العيون هي مركز الاهتمام في أي بورتريه، تأكد دائماً من أنها الجزء الأوضح في الصورة." },
    { heading: "الخلفية والتكوين", text: "اختر خلفية بسيطة لا تشتت الانتباه عن الموضوع، واستخدم قاعدة الأثلاث لتكوين متوازن." },
    { heading: "الخلاصة", text: "تصوير البورتريه فن يجمع بين التقنية والتواصل الإنساني، كلما تدربت أكثر التقطت شخصيات أعمق." },
  ],
  "مناظر طبيعية": [
    { heading: "التخطيط للموقع والتوقيت", text: "الساعة الذهبية عند الشروق والغروب تمنح ألواناً دافئة وظلالاً طويلة تضيف عمقاً لمناظرك الطبيعية." },
    { heading: "استخدام العدسات الواسعة", text: "العدسات واسعة الزاوية تساعدك على التقاط اتساع المشهد وإبراز العناصر الأمامية والخلفية معاً." },
    { heading: "تكوين الصورة", text: "استخدم عناصر طبيعية كخطوط قيادة لعين المشاهد نحو نقطة التركيز الرئيسية في الصورة." },
    { heading: "الخلاصة", text: "الصبر هو مفتاح تصوير المناظر الطبيعية، انتظر الضوء المناسب وستحصل على نتائج مذهلة." },
  ],
  "تقنيات": [
    { heading: "فهم الأساسيات", text: "إتقان العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO هو أساس كل تقنية تصوير احترافية." },
    { heading: "تطبيق عملي", text: "جرب هذه التقنية في مواقف تصوير حقيقية لتفهم تأثيرها الفعلي على صورك النهائية." },
    { heading: "أخطاء شائعة يجب تجنبها", text: "كثير من المبتدئين يهملون هذه التفاصيل الصغيرة التي تصنع فرقاً كبيراً في جودة الصورة النهائية." },
    { heading: "الخلاصة", text: "التقنية وحدها لا تكفي، الممارسة المستمرة هي ما يحول المعرفة النظرية إلى مهارة حقيقية." },
  ],
  "معدات": [
    { heading: "ما الذي تحتاجه فعلاً", text: "لست بحاجة لأغلى المعدات لتلتقط صوراً رائعة، بل لفهم أدواتك واستخدامها بذكاء." },
    { heading: "مقارنة الخيارات المتاحة", text: "نستعرض هنا أبرز الخيارات المناسبة لمختلف الميزانيات ومستويات الخبرة." },
    { heading: "نصائح للاستخدام الأمثل", text: "تعلم كيف تستخرج أفضل أداء من معداتك الحالية قبل التفكير في الترقية." },
    { heading: "الخلاصة", text: "المعدات أداة فقط، والعين المدربة والفهم الجيد هما ما يصنعان الصورة الاستثنائية." },
  ],
};

function BlogPost() {
  const { id } = useParams();
  const post = allPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="container py-5 text-center">
        <h3 className="fw-bold">المقالة غير موجودة</h3>
        <Link to="/blog" className="btn btn-orange mt-3">العودة إلى المدونة</Link>
      </div>
    );
  }

  const sections = categoryContent[post.category] || categoryContent["تقنيات"];

  return (
    <>
      <div className="hero-image-wrap">
        <img src={post.image} alt={post.title} className="hero-image" />
        <div className="hero-overlay"></div>

        <div className="breadcrumb-overlay">
          <Link to="/" className="text-white-50"><i className="bi bi-house"></i></Link>
          <i className="bi bi-chevron-left text-white-50 small"></i>
          <Link to="/blog" className="text-white-50 text-decoration-none">المدونة</Link>
          <i className="bi bi-chevron-left text-white-50 small"></i>
          <span className="text-orange">{post.category}</span>
        </div>

        <div className="hero-content">
          <div className="d-flex align-items-center gap-3 mb-3">
            <span className="badge bg-orange rounded-pill px-3 py-2">{post.category}</span>
            <span className="text-white-50 small"><i className="bi bi-clock"></i> {post.readTime}</span>
            <span className="text-white-50 small"><i className="bi bi-calendar"></i> {post.date}</span>
          </div>
          <h1 className="fw-bold text-white hero-post-title">{post.title}</h1>

          <div className="author-card-overlay">
            <div>
              <div className="fw-semibold text-white">{post.author}</div>
              <div className="text-white-50 small">{post.role}</div>
            </div>
            <img src={post.avatar} className="rounded-circle" width="48" height="48" alt={post.author} />
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="quote-box mb-5">
              <p className="mb-0 fst-italic">"{post.excerpt}"</p>
            </div>

            {sections.map((sec, i) => (
              <div id={`section-${i}`} className="mb-5" key={i}>
                <h4 className="fw-bold d-flex align-items-center gap-2 mb-3">
                  {sec.heading}
                  <span className="section-icon"><i className="bi bi-camera"></i></span>
                </h4>
                <p className="text-muted">{sec.text}</p>
              </div>
            ))}

            <Link to="/blog" className="btn btn-outline-light-pill">
               تصفح المزيد
            </Link>
          </div>

          <div className="col-lg-4">
            <div className="toc-sidebar">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <span className="fw-bold">محتويات المقال</span>
                <span className="toc-icon"><i className="bi bi-list-ul"></i></span>
              </div>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                {sections.map((sec, i) => (
                  <li key={i}>
                    <a href={`#section-${i}`} className="toc-link">
                      <span>{sec.heading}</span>
                      <span className="toc-number">{i + 1}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;