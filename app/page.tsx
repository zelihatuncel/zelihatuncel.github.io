"use client";

import {
  Terminal,
  Database,
  Network,
  Code2,
  Mail,
  Download,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-hidden relative font-sans">
      {/* Arka Plan Işıkları */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* HERO */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-32">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4 text-sm">
              İstinye Üniversitesi Mezunu
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Zeliha Tuncel
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
              Full Stack Developer — <br /> Web & IT Sistemleri
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
              Modern web teknolojileriyle dinamik kullanıcı arayüzleri
              geliştiriyor, veritabanı ve IT ağ altyapılarını uçtan uca
              tasarlıyorum.
              <span className="text-white font-medium">
                {" "}
                Her türlü projeye açığım
              </span>{" "}
              — ilişkisel veritabanı tasarımlarından, modern UI kurgularına ve
              Cisco ağ mimarilerine kadar.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="mailto:tuncelzeliha235@gmail.com"
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105"
              >
                <Mail size={20} /> İletişime Geçin
              </a>
              <a
                href="/2cv.html"
                className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-xl font-medium transition-all hover:scale-105"
              >
                <Download size={20} /> Özgeçmişi İndir
              </a>
            </div>
          </div>

          <div className="relative w-64 h-64 md:w-96 md:h-96 shrink-0">
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-[spin_10s_linear_infinite]" />
            <img
              src="/cv.jpg"
              alt="Zeliha Tuncel"
              className="w-full h-full object-cover rounded-full border-4 border-[#12121A] shadow-[0_0_40px_rgba(59,130,246,0.2)]"
            />
          </div>
        </section>

        {/* 2. TEKNOLOJİLER */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <span className="inline-flex p-3 rounded-2xl bg-blue-600/20 text-blue-500 mb-4">
              <Code2 size={32} />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Geliştirme & IT Teknolojileri
            </h2>
            <p className="text-gray-400">
              Web Geliştirme, Veritabanı Yönetimi, Linux ve Cisco Ağ Mimarileri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Code2 size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Frontend & Backend</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Dinamik kullanıcı arayüzleri ve asenkron sunucu mimarileri.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5/CSS3",
                  "JavaScript",
                  "Node.js",
                  "Express.js",
                  "Tailwind CSS",
                  "RESTful API",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-violet-500/20 text-violet-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Database size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Veritabanı Yönetimi</h3>
              <p className="text-gray-400 mb-6 text-sm">
                İlişkisel veritabanı tasarımları, DDL/DML sorguları ve ACID
                prensipleri.
              </p>
              <div className="flex flex-wrap gap-2">
                {["MS SQL Server", "MySQL", "T-SQL", "Veri Modelleme"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Network size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Sistem & Ağ Mimarisi</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Cisco yönlendirme protokolleri, VLAN izolasyonu ve Linux
                yönetimi.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cisco Packet Tracer",
                  "VLAN & Routing",
                  "Linux (AlmaLinux)",
                  "Active Directory",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Terminal size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Algoritma & Araçlar</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Programlama, versiyon kontrol ve yapay zeka destekli tasarım
                süreçleri.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "C & Python",
                  "Bash Scripting",
                  "Git & GitHub",
                  "GPG Şifreleme",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROJELER VE DENEYİM */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-3 border-b border-white/10 pb-4">
                <Briefcase className="text-blue-500" /> Sektörel Deneyim
              </h3>

              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[8px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <h4 className="text-xl font-bold">
                  IT / Technical Service (Stajyer)
                </h4>
                <p className="text-blue-400 text-sm mb-2">
                  Gaziosmanpaşa Belediyesi • Eyl 2025 - Ara 2025
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Kurum içi bilgi işlem altyapı süreçlerine, sistem yönetimi
                  operasyonlarına ve ağ sorunlarının çözümüne teknik destek
                  sağladım.
                </p>
              </div>

              <h3 className="text-2xl font-bold flex items-center gap-3 border-b border-white/10 pb-4 pt-8">
                <GraduationCap className="text-violet-500" /> Akademik Eğitim
              </h3>

              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[8px] top-1 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                <h4 className="text-xl font-bold">
                  Bilgisayar Teknolojisi (Ön Lisans)
                </h4>
                <p className="text-violet-400 text-sm mb-2">
                  İstinye Üniversitesi • Haziran 2026
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Veritabanı yönetimi, yazılım algoritmaları ve ağ sistemleri
                  üzerine akademik eğitimimi tamamlayarak mezun oldum.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-3 border-b border-white/10 pb-4">
                <Code2 className="text-green-500" /> Mimari Projeler
              </h3>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold">Aura Parfüm Platformu</h4>
                  <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    Full Stack
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Rol bazlı yetkilendirme, dinamik katalog filtreleme ve MS SQL
                  Server üzerinde ACID prensiplerine uygun sipariş akışı
                  kurgulandı. Node.js REST API altyapılı e-ticaret platformu.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold">
                    İBB Wi-Fi SQL Veri Analizi
                  </h4>
                  <span className="text-xs px-2 py-1 bg-violet-500/20 text-violet-400 rounded-full">
                    SQL / Veritabanı
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  İBB Açık Veri Portalı'ndan elde edilen kurumsal Wi-Fi lokasyon
                  verilerinin SSMS kullanılarak iç aktarımı sağlandı. Data
                  import işlemleri ve SQL sorguları ile Gaziosmanpaşa bölgesi
                  hedeflenerek bölgesel veri analizi gerçekleştirildi.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold">Kurumsal Ağ Mimarisi</h4>
                  <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                    Cisco
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Cisco Packet Tracer üzerinde departmanlar arası veri
                  izolasyonu sağlayan 3 katmanlı VLAN mimarisi ve
                  Router-on-a-Stick yapılandırması tasarlandı.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold">Linux Sistem Otomasyonu</h4>
                  <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full">
                    Bash
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  GPG AES256 şifreleme ve donanım raporlama süreçlerini
                  otomatize eden, GitHub üzerinde SSH imzalı commit yapısıyla
                  versiyonlanan sistem yönetim betiği.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="relative z-10 border-t border-white/10 bg-[#0A0A0F]/80 backdrop-blur-md py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Zeliha Tuncel. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/zelihatuncel"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/zeliha-tuncel"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
