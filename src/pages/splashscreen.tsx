import { useEffect, useState } from 'react';
import '../styles/splashscreen.css';
import backgroundImage from '../assets/wp2.jpg';
import backgroundImage2 from '../assets/a2.jpg';
import me from '../assets/ben.jpg';
import backgroundImage3 from '../assets/pp.jpg';
import lin from '../assets/in.jpg';
import git from '../assets/git.png';
import backgroundImage4 from '../assets/last.jpg';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();
  const goToDetails = () => {
    navigate('/details');
  };
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['splash-section','about-section', 'projects-section', 'skills-section'];
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main-wrapper">
      <div className="side-navbar">
        <ul>
          <li onClick={() => scrollToSection('splash-section')} className={activeSection === 'splash-section' ? 'active' : ''}>Ana Sayfa</li>
          <li onClick={() => scrollToSection('about-section')} className={activeSection === 'about-section' ? 'active' : ''}>Hakkımda</li>
          <li onClick={() => scrollToSection('projects-section')} className={activeSection === 'projects-section' ? 'active' : ''}>Projeler</li>
          <li onClick={() => scrollToSection('skills-section')} className={activeSection === 'skills-section' ? 'active' : ''}>Yetenekler</li>
        </ul>
      </div>
      {/* Splash */}
      <div className="main-container" id="splash-section">
        <div
          className="splash-background"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="splash-content">
          <h1>Barış Serhat <br />Kaplan</h1>
          <p>Junior Developer • Hakkımda daha fazla detayı aşağıda bulabilirsiniz.</p>
          <button onClick={scrollToNext}>o</button>
        </div>
      </div>

      {/* About */}
      <div className="about-section" id="about-section">
        <div
          className="splash-background2"
          style={{ backgroundImage: `url(${backgroundImage2})` }}
        />
        <div className="about-content">
          <img src={me} alt="Barış Serhat Kaplan" className="profile-image" />
          <h2>Hakkımda</h2>
          <p>+90 549 202 02 58 ,  bsirhatk@gmail.com, İstanbul</p>
          <div className="social-links">
              <a
                href="https://www.linkedin.com/in/bar%C4%B1%C5%9F-serhat-kaplan-15416a230/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={lin} alt="LinkedIn" className="social-icon" />
              </a>
              <a
                href="https://github.com/beseka"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={git} alt="github" className="social-icon" />
              </a>
          </div>  
          <p>
            Ben Barış Serhat Kaplan, Sabancı Üniversitesi Bilgisayar Bilimi ve Mühendisliği bölümünde 4. sınıf öğrencisiyim ve İş Analitiği yan dalı yapıyorum.
            Çoğunlukla Data Analytics, Data Science ve Software Engineering alanlarında kendimi geliştirmeye çalışıyor ve bu konularda projeler üretiyorum.
          </p>
          <div className="button-part-about">
            <button onClick={scrollToProjects}>Projeler ve Deneyim</button>
            <button onClick={scrollToSkills}>Yetenekler ve İlgi Alanları</button>
          </div>
        </div>
      </div>

      {/* Projects + Experience */}
      <div className="projects-section" id="projects-section">
        <div className="projects-mobile-summary">
          <h2>Neler Yapıyorum?</h2>
          <p>Data Science, Software Development ve Genel okul projeleri hakkındaki tüm detaylar;
            deneyimlerim, aldığım sertifikalar, yaptığım freelance işler ve aktiviteler hakkında daha fazla bilgiyi detaylarda bulabilirsiniz.
          </p>
          <div className="experience-details">
            <button onClick={goToDetails}>Detaylar</button>
            <button onClick={scrollToSkills}>Yetenekler ve İlgi Alanları</button>
          </div>
        </div>
        <div
          className="splash-background3"
          style={{ backgroundImage: `url(${backgroundImage3})` }}
        />
        <div className="projects-content">
          {/* Projeler */}
          <div className="project-list">
            <h2>Projeler</h2>
            <ul>
              <li>Can we Make it More Sustainable? - Sürdürülebilirlik Araştırma Projesi</li>
              <li>Inflation vs Stock Prices Analysis - AI prediction model and Data Analiz Projesi  </li>
              <li>Ecommerce DB – SQL ve Firebase tabanlı e-ticaret veritabanı tasarımı</li>
              <li>HowuDoin App – Gerçek Zamanlı Mesajlaşma Mobil Uygulaması</li>
              <li>308TechStore – Full Stack E-Ticaret Sitesi Projesi</li>
              <li>Pump it Up! – Makine öğrenmesi ile arıza tahmini</li>
              <li>Drone Monitoring System – Dronelar için sensor ve dataları kontrol sistemi</li>
              <li>Country Guesser – Globle Benzeri Ülke Tahmin Oyunu</li>
            </ul>
          </div>

          {/* Deneyimler */}
          <div className="experience-list">
            <h2>Deneyim</h2>
            <ul>
              <li>Beko Corporate – Zorunlu Yaz Stajı, R&D Intern, AI / ML</li>
            </ul>
            <h2> Sertifikalar</h2>
            <ul>
              <li> Gen Academy - Yapay Zeka ve Yazılım Teknolojileri</li>
            </ul>
            <h2> Aktiviteler</h2>
            <ul>
              <li> Land of Burger - Finansal Rapor ve Analiz</li>
              <li> Kişisel ve Ticari Web Site Tasarımı ve Reklam Yönetimi</li>
              <li> Sosyal Medya Danışmanlığı</li>
              <li> Mentorluk</li>
              <li> Cevap42 Podcast</li>
            </ul>
            <div className="experience-details">
              <button onClick={goToDetails}> Detaylar</button>
              <button onClick={scrollToSkills}>Yetenekler ve İlgi Alanları</button>
            </div>
          </div>
        </div>
      </div>
      {/* Skills + Interests */}
      {/* Skills & Interests Section */}
      <div className="skills-section" id="skills-section">
        <div
          className="splash-background4"
          style={{ backgroundImage: `url(${backgroundImage4})` }} // farklı bir görsel kullanacaksan değiştir
        />
        <div className="skills-content">
          <h2>Yetenekler ve İlgi Alanları</h2>

          <div className="skills-row">
            {["Python", "Java", "C++", "JavaScript-TypeScript", "SQL", "React", "R", "PHP"].map((skill, i) => (
              <button key={`r1-${i}`} className="skill-button">{skill}</button>
            ))}
          </div>

          <div className="skills-row">
            {["Microsoft Excel", "PowerBI", "Micorosoft Word - Powerpoint", "Adobe Photoshop", "Adobe Premier Pro", "Davinci Resolve", "GIMP"].map((skill, i) => (
              <button key={`r2-${i}`} className="skill-button">{skill}</button>
            ))}
          </div>

          <div className="skills-row">
            {["Turkish - English", "Data Science", "Machine Learning and AI", "Data Insights"].map((skill, i) => (
              <button key={`r3-${i}`} className="skill-button">{skill}</button>
            ))}
          </div>

          <div className="skills-row">
            {["Software Development", "Problem Solving", "Leadership and Collaboration", "Analytical Thinking", "Podcast", "Creative and Innovative Mindset", "Tech Geek"].map((skill, i) => (
              <button key={`r4-${i}`} className="skill-button">{skill}</button>
            ))}
          </div>

          <div className="skills-mobile">
            {[
              "Data Science", "Data Analytics", "Software Development", "Python",
              "R", "Database", "Microsoft Excel", "PowerBI","C++"
            ].map((skill, i) => (
              <button key={`mobile-${i}`} className="skill-button mobile-skill">{skill}</button>
            ))}
          </div>
          
        </div>
        <p className='foot'>Made with 💻 and ☕ by beseka. ©  All rights reserved</p>
        
      </div>
    </div>
  );
};

export default SplashScreen;
