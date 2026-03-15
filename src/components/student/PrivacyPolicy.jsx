import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔐 Privacy Policy</h1>
      <p style={styles.updated}>آخر تحديث: مارس 2026</p>

      <section style={styles.section}>
        <h2>1️⃣ المعلومات اللي بنجمعها</h2>
        <p>
          بص يا صديقي 🙂 لما تستخدم الموقع ممكن نطلب شوية معلومات بسيطة زي اسمك
          أو إيميلك. متقلقش… إحنا مش بنجمع معلومات غريبة ولا بنتجسس عليك.
        </p>
      </section>

      <section style={styles.section}>
        <h2>2️⃣ بنستخدم المعلومات دي ليه؟</h2>
        <p>
          الهدف بسيط: نخلي الموقع يشتغل أحسن، ونقدر نتواصل معاك لو احتجنا، وكمان
          نحسن تجربتك بحيث تحب ترجع للموقع تاني 😉
        </p>
      </section>

      <section style={styles.section}>
        <h2>🍪 الكوكيز</h2>
        <p>
          أيوه نفس اسم البسكويت 😄 الكوكيز دي ملفات صغيرة بتساعد الموقع يفتكرك
          لما ترجع تاني. لو مش حاببها تقدر تقفلها من إعدادات المتصفح بسهولة.
        </p>
      </section>

      <section style={styles.section}>
        <h2>🛡️ أمان البيانات</h2>
        <p>
          معلوماتك عندنا مهمة. بنستخدم طرق حماية كويسة علشان نحافظ عليها وما
          توصلش لحد غير المسموح له.
        </p>
      </section>

      <section style={styles.section}>
        <h2>🤝 خدمات طرف ثالث</h2>
        <p>
          أحيانًا بنستخدم خدمات خارجية تساعدنا نحسن الموقع أو نفهم استخدامه بشكل
          أفضل. بس برضه بنختار خدمات موثوقة.
        </p>
      </section>

      <section style={styles.section}>
        <h2>📬 تواصل معنا</h2>
        <p>
          لو عندك أي سؤال أو قلق بخصوص الخصوصية، راسلنا في أي وقت على:
          <br />
          <strong>mohamedsabrymahdy2@gmail.com</strong>
        </p>
      </section>

      <p style={styles.footer}>
        شكرًا لاستخدامك الموقع 🙌 واطمّن… خصوصيتك في أيد أمينة.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.7",
  },
  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  updated: {
    color: "#777",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "25px",
  },
  footer: {
    marginTop: "40px",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default PrivacyPolicy;
