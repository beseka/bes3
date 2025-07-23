import React from 'react';
import '../styles/details.css';
import me from '../assets/ben.jpg';
import su from '../assets/su.png';
import beko from '../assets/beko.jpeg';
import gen from '../assets/images.png';
import st from '../assets/st.png';
import c42 from '../assets/c42.jpg';
import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {
    const navigate = useNavigate();
    const go = () => {
        navigate('/');
    };
    const projects = [
  { title: "Can you make it even more sustainable?", desc: "Şubat 2024 - Haziran 2024 \n• Araştırma Projesi \n• U.S çevresel performans ve emisyon trendlerini EPI verilerine ve sürdürülebilirlik tehlikelerine göre araştırdık\n• Araştırma sonunda emisyon oranlarını düşürmek ve EPI skorlarını geliştirmek için karbon vergileri ve yenilebilir enerji uygulamalarına yönelik toplumsal çözümler ürettik ve sunduk."},
  { title: "Enflasyon ve Borsa Fiyatları ", desc: "Ekim 2023 - Ocak 2024 \n • Veri Bilimi Projesi \n• U.S enflasyon verileri ve Apple borsa fiyatlarını analiz ederek aralarındaki korelasyonu Python ile tanımlamaya çalıştım.\n• Matplotlib, pandas ve numpy gibi kütüphanelerle veri görselleştirme, hipotez testi ve Desicion Tree modeller ile makine öğrenmesini kullanarak sonuçları tahmin ettim. " },
  { title: "E-commerce Database Project", desc: "Ekim 2024 - Ocak 2025 \n• Ölçeklenebilir ve kullanıcı dostu e-ticaret sitelerinde kullanılabilecek Php tabanlı bir database sistemi geliştirdik. Firebase ile gerçek zamanlı, verimli backend sistemi ve kullanıcı deneyimine odaklı bir database geliştirdik.\n• Yüksek trafik için kullanılmaya müsait, hem kullanıcı dostu hem de fonksiyonel olarak site sahiplerinin de işine yarayacak dashboardlar tasarladık. " },
  { title: "HowuDoin App", desc: "Ekim 2024 - OCak 2025\n• Dinamik bir mobil mesajlaşma uygulaması geliştirdik. Geliştirme sürecinde React Native ve Java Springboot kullandık ve bu sayede kullanıcılar ve server arasındaki bağlantıyı da sağlayabildik. \n• Güvenli ve ölçeklenebilir bir mimari kullanarak gerçek zamanlı veri akışına aynı zamanda da yüksek performans ve kullanıcı dostu arayüze önem gösterdik " },
  { title: "Country Guesser", desc: "Nisan 2025 \n• Veri Analizi - Software Development Projesi \n• Python ile internet üzerinden bulduğum ülkelere dair tüm verileri, veri temizleme ve düzenleme aşamasından geçirerek elimdeki data ile Flask ve React ile yapmış olduğum siteye entegre ederek orada bu verileri kullanmak yoluyla dünya üzerindeki ülkeleri tahmin etmeye çalıştığımız bir oyun yazdım." },
  { title: "308 Tech Store", desc: "Şubat 2025 - Mayıs 2025 \n• React ve ASP.NET Core kullanarak ürün kataloğu, satış paneli ve kullanıcı yönetimi özelliklerini içeren duyarlı bir e-ticaret platformu geliştirdik. \n• TypeScript ile yeniden kullanılabilir bileşenler oluşturarak ürün listeleme, filtreleme ve detay sayfalarını hayata geçirdik; Entity Framework ve Docker ile güvenli ve ölçeklenebilir bir backend mimarisi sağladık." },
  { title: "Tanzania Pump it Up", desc: "Haziran 2025 \n• DrivenData Yarışması \n• R ile bir makine öğrenmesi modeli yazarak Tanzanyadaki su pompalarının sınıflandırmasını yapmaya çalıştım. \n• Dataset üzerinde veri temizleme, exploratory analizi yapıp veri işleme ve özellik mühendisliği uygulayarak modeli eğittim ve CV ile değerlendirdim." },
  { title: "Drone Monitoring System", desc: "Mart 2025 - Mayıs 2025 \n• Python ile modüler bir drone gösterge sistemi yazdık. Drone, sensör, server, batarya gibi özellikleri simüle ettik \n• Pytest ile birlikte gerçek zamanlı veri ve test caselere bağlı olarak simülasyonları denetledik ve doğru görüntülemeleri sağladık" },
  { title: "Land of Burger Finansal Araştırma Raporu", desc: "Temmuz 2025 \n• Veri Analizi Projesi \n• Python ile entegre adisyon sistemi üzerindeki tüm mali verileri işleyerek ortaya karlılık oranları, en çok satılan ürünler, en çok satış yapılan günler gibi verileri ortaya çıkardım. Ayrıca bu raporları görselleştirerek şirkete finansal olarak nasıl bir yol izleyebileceklerine dair bir takım öneriler sundum." }
];
  return (
    <>
        <header className="page-header">
            <div className="header-left" style={{ cursor: 'pointer' }} onClick={go}>
                BSK
            </div>
            <nav className="header-right">
                <a onClick={() => {
                    document.getElementById('abouttpart')?.scrollIntoView({ behavior: 'smooth' });
                    }}>Hakkımda
                </a>
                <a onClick={() => {
                    document.getElementById('projectsspart')?.scrollIntoView({ behavior: 'smooth' });
                    }}>Projeler
                </a>

                <a onClick={() => {
                    document.getElementById('skillspart')?.scrollIntoView({ behavior: 'smooth' });
                    }}>Sosyal
                </a>
            </nav>
        </header>
        <div className="details-page">
        

        {/* 1. ABOUT */}
        <section id="abouttpart" className="section aboutpart">
            <div className="about-left">
                <img src={me} alt="Barış Serhat Kaplan" className="profile-image2" />   
                <div className="wirting">     
                    <p className="about-description">
                        Merhaba! Ben Barış Serhat Kaplan. Sabancı Üniversitesinde 4. Sınıf Bilgisayar Bilimi ve Mühendisliği öğrencisiyim ve aynı zamanda 
                        İş Analitiği yan dalı yapıyorum.
                        Data Science and analtics, AI / ML ve web geliştirme gibi alanlara ilgi duyuyorum ve
                        eğitimim boyunca edindiğim bilgi ve deneyimleri projelerimde uygulayarak sürekli olarak kendimi geliştirmeye çalışıyorum.
                    </p>
                        
                </div>
            </div>
            <div className="about-right">
            <h2>Eğitim</h2>
            <div className='education-detailssu'>
                <img src={su} alt="Sabancı Üniversitesi" className="su" /> 
                <p>
                <strong>Sabancı Üniversitesi 2021 - 2026  (expected)</strong> <br/> Lisans, Bilgisayar Bilimi ve Mühendisliği
                <br/> İş Analitiği Yan Dal , GPA: <strong>3.36/4.0</strong> , Tam Burslu         </p>
            </div>
            
            </div>
        </section>

        {/* 2. EXPERIENCE */}
        <section className="section experience-section">
            <div className="experience-left">
            <h2>Deneyim</h2>
            <div className='beko'>
                <img src={beko} alt="beko" className="beko" /> 
                <p>
                <strong>2025 Temmuz - 2025 Eylül</strong> <br/> Beko, R&D Stajyeri
                <br/> Mekanik Tasarımcılar için Tasarım araçlarını kolaylaştıracak bir yazılım asistanı araştırması ve geliştirilmesi.</p>
            </div>
            </div>  
            <div className="experience-right">
            <h2>Sertifikalar</h2>
            <div className='beko'>
                <img src={gen} alt="Gen Academy" className="beko" /> 
                <p>
                <strong>Yapay Zeka ve Yazılım Teknolojileri </strong> <br/>2025 Temmuz - Gen Academy
                <br/> Yapay Zeka hakkında makine öğrenmesi ve derin öğrenmeye giriş,  python temelli kodlama örnekleri.</p>
            </div>
            <div className='beko'>
                <img src={st} alt="Softtech" className="beko" /> 
                <p>
                <strong>Agile 101 </strong> <br/> 2025 Mayıs - Softtech
                <br/> Agile methodu ve methodun yazılım sektöründeki yeri ve kullanım amaçları hakkında.</p>
            </div>
            </div>
        </section>

        {/* 3. PROJECTS */}
        <section id="projectsspart" className="section projects-section2">
            <h2>Projeler</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <h3>{project.title}</h3>
                    <p>
                        {project.desc.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                            {line}
                            <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
                ))}
            </div>
        </section>

        {/* 4. ACTIVITIES & SKILLS */}
        <section id="skillspart" className="section activities-skills-section">
            <div className="skills-left">
            <h2>Yetenekler</h2>
            <p><strong>Yazılım dilleri ve teknolojiler</strong></p>
            <p>• Python, C++, Java, R, PHP, Html, CSS, JavaScript, TypeScript, React, .NET, SQL </p>
            <p><strong>Bilgisayar</strong></p>
            <p>• Microsoft Excel, Power BI<br/>
                • Microsoft Word, Microsoft PowerPoint, Adobe Photoshop, Adobe Premier Pro,
                DaVinci Resolve, GIMP </p>
            <p><strong>Diller</strong></p>
            <p>• Turkish (Native) <br/>
                • English (Fluent) </p>
            <p><strong>Soft Skills</strong></p>
            <p>• Leadership and collaboration, analytical thinking, adaptability to rapidly changing
                technologies, problem-solving, creativity and innovative mindset </p>
            </div>


            <div className="activities-right">
                <h2>Aktiviteler</h2>
                <p>• Sosyal Medya Danışmanlık. <br/> DlaryaModa, Land of Burger gibi şirketler için sosyal medya stratejileri </p>
                <p>• Kişisel veya kurumsal website yapımı ve reklam yönetimi. <br/> Ticimax ve Shopify haricinde kendi yaptığım siteler ile de website yapımı ve reklam yönetimi SEO optimizasyonu gibi hizmetler</p>
                <p>• Mentorluk.</p>
            </div>

            <div className="activities-right">
            <div className="c422">  
                <h2>Cevap42</h2>
                <img src={c42} alt="Cevap 42" className="c42" /> 
                <p id='cp42'> Mesleki alanım haricinde tarih, felsefe, psikoloji ve sanat gibi alanlar da ilgi alanım dahilindeler ve bu konular üzerinde sürekli okumaya, yazmaya, konuşmaya çalışıyorum. Bu ilgi alanlarındaki düşüncelerimi derlemek için bir podcast projesi başlattım ve çeşitli alanlarda okuduklarımı, araştırmalarımı yok olmalarını istemediğim için neredeyse bir sesli makale diyebileceğimiz bir formatta yayınlamaya çalışıyorum.</p>
                <a
                    className="join-button1"
                    href="https://open.spotify.com/show/3xSIdEg0OK60M8UYlpN74U"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Bölümler
                </a>
            </div>
            </div>
        </section>
        <p className='foote'>Made with 💻 and ☕ by beseka. ©  All rights reserved</p>
        </div>
    </>    
  );
};

export default DetailsPage;
