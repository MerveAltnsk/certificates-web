// script.js

// Sertifikalar listesi
const certificates = [
  {
    title: "AI4Change Program, conducted by Kodluyor Association and supported by the U.S Mission to Turkey",
    issuer: "Kodluyoruz",
    verificationLink:
      "https://verified.sertifier.com/en/verify/87601381811435/?ref=email",
  },
  {
    title: "EmpowerHER Program, conducted by Kodluyor Association and supported by British Embassy in Ankara",
    issuer: "Kodluyoruz",
    verificationLink:
      "https://verified.sertifier.com/en/verify/20053167083181/",
  },
  {
    title: "The Future of Artificial Intelligence and Its Impact on Information Security, presented by Atıl Samancıoğlu",
    issuer: "PECB Regional Webinar",
    verificationLink:
      "https://www.linkedin.com/in/merve-alt%C4%B1n%C4%B1%C5%9F%C4%B1k/details/certifications/1733235480438/single-media-viewer/?profileId=ACoAACMVMZkBXIrL-vptiebr03X6XnXsoc77jfo",
  },
  {
    title: "CODERSPACE School of Software and Technology",
    issuer: "CODERSPACE",
    verificationLink:
      "https://coderspace.io/sertifikalar/e79a2345-33d5-4f10-9293-bcb6c7c778c4",
  },
  {
    title: "Stacks Fullstack Bootcamp Turkey Sertifikası",
    issuer: "Rise In ",
    verificationLink:
      "https://www.risein.com/certificates/mEZZO_zp",
  },
  {
    title: "23 Artificial Intelligence Meetings",
    issuer: "23",
    verificationLink:
      "https://yirmiuc.org/sertifikalar/8d056bf3-de6b-4599-8049-5a540b00f4ef/",
  },
  {
    title: "Data Science & AI Day 2024",
    issuer: "CODERSPACE",
    verificationLink:
      "https://coderspace.io/sertifikalar/2b6adaa2-d628-432c-9369-ba4d0c37343a",
  },
  {
    title: "KODLUYORUZ AI4Change",
    verificationLink:
      "https://verified.sertifier.com/en/verify/87601381811435/?ref=email",
  },
  {
    title: "KODLUYORUZ We Code with IBM: CyberStart",
    verificationLink:
      "https://verified.sertifier.com/tr/verify/72490240091370/",
  },
  {
    title: "BOGAZICI UNIVERSITY INFORMATICS CLUB DataCamp Data Science Summit",
    verificationLink:
      "https://verified.sertifier.com/en/verify/65113835863091/",
  },
  {
    title: "Introduction to Artificial Intelligence and Algorithms Training",
    issuer: "SistersLab - Bilim ve Teknolojide Kadın Derneği",
  },
  {
    title: "Women Writing the Future Artificial Intelligence Program",
    issuer: "Writers of the Future Turkcell",
  },
  {
    title: "Stacks Fullstack Bootcamp Turkey",
    verificationLink: "https://www.risein.com/certificates/mEZZO_zp",
  },
  {
    title: "IBM Interpersonal Skills",
    id: "ILB-GYEQRZJQNMVJ32MB",
    verificationLink: "https://www.linkedin.com/in/merve-alt%C4%B1n%C4%B1%C5%9F%C4%B1k/details/certifications/1718736633801/single-media-viewer/?profileId=ACoAACMVMZkBXIrL-vptiebr03X6XnXsoc77jfo"
  },
  {
    title: "IBM Explore Emerging Tech",
    verificationLink:
      "https://www.credly.com/badges/06eec175-b366-454d-b125-e4fcc29afb20/print",
  },
  {
    title: "IBM Collaborate Effectively",
    id: "ILB-GYEQRZJQNMVJ32MB",
  },
  {
    title: "IBM Professional Skills",
    id: "PLAN-C4FCC67D3E76",
  },
  {
    title: "IBM Solving Problems with Critical and Creative Thinking",
    id: "ILB-GYEQRZJQNMVJ32MB",
  },
  {
    title: "IBM What is agile at IBM",
    id: "ILB-KXWDJNXRZDNV2XAQ",
  },
  {
    title: "IBM Working in a Digital World: Professional Skills",
    verificationLink:
      "https://www.credly.com/badges/1ec13d5b-525c-4752-8537-1dd8f82b607d/print",
  },
  {
    title: "CODERSPACE Here is Artificial Intelligence_My Future Dream",
    verificationLink:
      "https://verified.sertifier.com/en/verify/55145216866869/?ref=email",
  },
  {
    title: "IBM Agile Development Day",
    id: "Sertifika ID (9095269b-58da-4630-8ab0-46a807fcc1ca)",
  },
  {
    title: "CODERSPACE Software and Technology School",
    id: "Sertifika ID (9d92ac06-3e7f-46de-89a1-2caac15b0c0e)",
  },
  {
    title: "Youthall Tech Career Summit",
    id: "47120071961983",
  },
  {
    title: "KODLUYORUZ Gelecek Hayalim Projesi: W-Code",
    verificationLink:
      "https://verified.sertifier.com/en/verify/69560552044354/",
  },
  {
    title: "Turkcell Academy Introduction to Data Science and Artificial Intelligence",
    verificationLink:
      "https://www.linkedin.com/in/merve-alt%C4%B1n%C4%B1%C5%9F%C4%B1k/details/certifications/1733658606976/single-media-viewer/?profileId=ACoAACMVMZkBXIrL-vptiebr03X6XnXsoc77jfo",
  },
  {
    title: "Turkcell Academy Python Programming 101 - 201 - 301 - 401",
    verificationLink:
      "https://www.linkedin.com/in/merve-alt%C4%B1n%C4%B1%C5%9F%C4%B1k/details/certifications/1733937729371/single-media-viewer/?profileId=ACoAACMVMZkBXIrL-vptiebr03X6XnXsoc77jfo",
  },
  {
    title: "Turkcell Academy Machine Learning 101",
    verificationLink:
      "https://www.linkedin.com/in/merve-alt%C4%B1n%C4%B1%C5%9F%C4%B1k/details/certifications/1734039049783/single-media-viewer/?profileId=ACoAACMVMZkBXIrL-v",
  },
  {
    title: "Turkcell Academy GNÇYTNK'25 Gelişim Rotası Programı",
    verificationLink:
      "https://www.linkedin.com/in/merve-alt%C4%B1n%C4%B1%C5%9F%C4%B1k/details/certifications/1754783961341/single-media-viewer/?profileId=ACoAACMVMZkBXIrL-vptiebr03X6XnXsoc77jfo",
  },
];

// Sertifikaları sayfaya ekleme fonksiyonu
function renderCertificates() {
  const container = document.getElementById("certificatesList");
  container.innerHTML = ''; // Önce varsa temizle

  certificates.forEach(({ title, issuer, id, verificationLink, date }) => {
    const card = document.createElement("article");
    card.className = "card";
    card.tabIndex = 0; // erişilebilirlik için

    // Başlık
    const titleEl = document.createElement("h2");
    titleEl.textContent = title;
    card.appendChild(titleEl);

    // Veren kuruluş (issuer)
    if (issuer) {
      const issuerEl = document.createElement("p");
      issuerEl.className = "issuer";
      issuerEl.textContent = issuer;
      card.appendChild(issuerEl);
    }

    // Link veya ID
    if (verificationLink) {
      const linkEl = document.createElement("a");
      linkEl.href = verificationLink;
      linkEl.textContent = "Verification Link";
      linkEl.target = "_blank";
      linkEl.rel = "noopener noreferrer";
      card.appendChild(linkEl);
    } else if (id) {
      const idEl = document.createElement("p");
      idEl.className = "small-text";
      idEl.textContent = id;
      card.appendChild(idEl);
    }

    // Opsiyonel tarih
    if (date) {
      const dateEl = document.createElement("p");
      dateEl.className = "small-text";
      dateEl.textContent = date;
      card.appendChild(dateEl);
    }

    container.appendChild(card);
  });
}

// Sayfa yüklendiğinde sertifikaları render et ve yılı ayarla
document.addEventListener("DOMContentLoaded", () => {
  // Yılı footer'a ekle
  document.getElementById('year').textContent = new Date().getFullYear();

  // Sertifikaları render et
  renderCertificates();

  // Dark mode toggle event listener
  const checkbox = document.getElementById('darkmode-toggle');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
});
