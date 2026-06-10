export type Lang = 'en' | 'zh';

export interface Project {
  name: string;
  link?: { label: string; url: string };
  points: string[];
}

export interface Job {
  company: string;
  domain: string;
  role: string;
  period: string;
  intro?: string;
  projects?: Project[];
  points?: string[];
  tags: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  summary: string;
  stats: { value: string; label: string }[];
  skills: { category: string; items: string[] }[];
  experience: Job[];
  highlights: { name: string; desc: string; link: string; linkLabel: string }[];
  education: { school: string; degree: string; period: string }[];
  contact: { email: string; phone: string; github: string };
  ui: {
    nav: { experience: string; skills: string; projects: string; contact: string };
    sections: {
      experience: string;
      skills: string;
      projects: string;
      education: string;
      contact: string;
    };
    contactCta: string;
    openTo: string;
  };
}

const contact = {
  email: 'giggs.tsai@gmail.com',
  phone: '+886 910-671-156',
  github: 'https://github.com/giggs-lynx',
};

const links = {
  noodoeEv: 'https://apps.apple.com/tw/app/noodoe/id1445999880',
  kymco: 'https://apps.apple.com/tw/app/kymco-noodoe/id1119106442',
  fubon: 'https://www.youtube.com/watch?v=Gwn6pdb0dvI',
};

export const resume: Record<Lang, ResumeData> = {
  en: {
    name: 'Sheng-Wen (Giggs) Tsai',
    title: 'Principal iOS Engineer',
    location: 'Taipei, Taiwan · Open to Remote',
    summary:
      'Principal iOS Engineer with 11+ years across iOS and full-stack development, specialising in Connected Vehicles (V2X), EV charging, and smart mobility. I design modular architectures and SDKs that ship 10+ white-label products in 20+ languages — and I enjoy the deep end: BLE firmware integration, custom GraphQL clients, and CI/CD automation.',
    stats: [
      { value: '11+', label: 'years of experience' },
      { value: '10+', label: 'white-label apps shipped' },
      { value: '20+', label: 'languages supported' },
      { value: '70%', label: 'launch time reduction' },
    ],
    skills: [
      {
        category: 'iOS Development',
        items: ['Swift', 'UIKit', 'Combine', 'MVVM + Coordinator', 'Modular Architecture', 'XCTest'],
      },
      {
        category: 'Hardware & IoT',
        items: ['Core Bluetooth (BLE)', 'External Accessory (MFi)', 'Core Location', 'MapKit'],
      },
      {
        category: 'Full-Stack & Backend',
        items: ['GraphQL (Subscription / WebSocket)', 'RESTful API', 'Java', 'Oracle PL/SQL', 'Redis'],
      },
      {
        category: 'DevOps & Automation',
        items: ['Jenkins', 'jenkins-job-builder', 'XcodeGen', 'SPM', 'Carthage', 'CocoaPods'],
      },
      {
        category: 'Specialties',
        items: ['White-label App Systems', 'Dynamic Configuration & Theming', 'Driving Behavior SDK (KMP)'],
      },
    ],
    experience: [
      {
        company: 'Noodoe Corporation',
        domain: 'EV Charging & Connected Vehicles',
        role: 'Principal Engineer',
        period: 'Apr 2018 – Jun 2024',
        intro:
          'Directed iOS system architecture and technical strategy with 2,500+ personal core commits. Led a team of 2 engineers, owning project planning and cross-functional collaboration with firmware and backend teams.',
        projects: [
          {
            name: 'Noodoe EV & White-Label Ecosystem',
            link: { label: 'App Store', url: links.noodoeEv },
            points: [
              'Architected the Noodoe Core SDK with a dynamic configuration & theming system, shipping 10+ white-label apps and cutting code duplication by ~95%.',
              'Built a localization infrastructure supporting 20+ languages for global deployment.',
              'Implemented a hybrid GraphQL + WebSocket client for real-time charging status, resolving critical long-connection memory leaks.',
              'Delivered the full EV charging flow: Stripe / Apple Pay multi-account payments, reservations, Plug-and-Charge, and licence verification.',
            ],
          },
          {
            name: 'KYMCO Noodoe Dashboard',
            link: { label: 'App Store', url: links.kymco },
            points: [
              'Designed a modular framework supporting multiple hardware generations (1.x & 2.x) in a single app, ensuring long-term scalability.',
              'Reduced app launch time by 70%; built Find My Scooter, My Journey, and advanced Core Graphics / Core Animation UI.',
              'Integrated Core Bluetooth and MFi External Accessory for stable multi-device pairing and real-time dashboard sync.',
            ],
          },
          {
            name: 'Fubon Noodoe Car',
            link: { label: 'YouTube Demo', url: links.fubon },
            points: [
              'Independently owned the full iOS lifecycle, integrating a low-energy BLE auto-wake mechanism for background driving-data collection.',
              'Integrated the DrivingBehavior SDK (KMP) for real-time detection of hard braking, rapid acceleration, and cornering — powering insurance services.',
              'Built driving path rendering and parking-location logging from BLE signal strength and GPS data.',
            ],
          },
          {
            name: 'Frameworks & DevOps',
            points: [
              'Developed internal shared frameworks: NDNetwork (certificate pinning), NDLogger, NDSecureStore, NDCacheFile.',
              'Maintained Jenkins CI/CD with jenkins-job-builder for automated white-label builds and one-click multi-environment releases.',
            ],
          },
        ],
        tags: ['Swift', 'Combine', 'GraphQL', 'WebSocket', 'Core Bluetooth', 'MFi', 'Stripe', 'Jenkins'],
      },
      {
        company: 'Unistar Software Technology',
        domain: 'FinTech / Lottery Platform',
        role: 'Full-Stack Engineer / Java Specialist',
        period: 'Oct 2014 – Apr 2018',
        points: [
          'Led native development on both platforms — iOS (Swift / UIKit, Instruments-driven optimisation) and Android (Java, Retrofit / OkHttp).',
          'Built the core lottery backend with Java EE (JAX-RS, EJB, JTA) and a custom Java Socket push server handling real-time notifications at scale.',
          'Tuned Oracle PL/SQL stored procedures and schemas with temporary tables and indexing for high-frequency payout logic.',
          'Automated server provisioning with Shell / Python; ran ELK Stack monitoring, JUnit / JBehavior (BDD) testing, and Jenkins CI with Crashlytics.',
        ],
        tags: ['Java EE', 'Swift', 'Android', 'Oracle PL/SQL', 'ELK Stack', 'Jenkins'],
      },
      {
        company: 'eLand Information',
        domain: 'Big Data / Web Crawling',
        role: 'Java Software Engineer',
        period: 'Dec 2012 – Oct 2014',
        points: [
          'Engineered web crawlers with network sniffing, Regex, and XPath to automate data extraction from complex websites.',
          'Built Tomcat Servlet JSON data feeds and FTP ingestion pipelines (XLS / CSV) for large-scale client data processing.',
        ],
        tags: ['Java', 'Servlet', 'XPath', 'Hibernate', 'MySQL'],
      },
    ],
    highlights: [
      {
        name: 'Noodoe EV App',
        desc: 'Global EV charging network — real-time status, payments, and reservations.',
        link: links.noodoeEv,
        linkLabel: 'App Store',
      },
      {
        name: 'KYMCO Noodoe Dashboard',
        desc: 'Smart scooter IoT dashboard with multi-generation hardware support.',
        link: links.kymco,
        linkLabel: 'App Store',
      },
      {
        name: 'Fubon Noodoe Car',
        desc: 'Telematics & driving-behavior analysis for insurance services.',
        link: links.fubon,
        linkLabel: 'YouTube',
      },
    ],
    education: [
      { school: 'Feng Chia University', degree: 'B.S. in Computer Science and Information Engineering', period: '2007 – 2011' },
    ],
    contact,
    ui: {
      nav: { experience: 'Experience', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
      sections: {
        experience: 'EXPERIENCE',
        skills: 'SKILLS',
        projects: 'SELECTED PROJECTS',
        education: 'EDUCATION',
        contact: 'CONTACT',
      },
      contactCta: "Building connected mobility? Let's talk.",
      openTo: 'Open to Principal / Senior iOS roles · Taipei or Remote',
    },
  },

  zh: {
    name: '蔡勝文 (Giggs Tsai)',
    title: 'Principal iOS Engineer',
    location: '台北市 · 接受遠端工作',
    summary:
      '擁有 11 年以上 iOS 與全端開發經驗，深耕車聯網 (V2X)、電動車充電生態系統與智慧移動解決方案。擅長設計模組化架構與 SDK，曾交付支援 20 多種語言的 10+ 白牌產品；同時熱衷於底層整合 — BLE 韌體通訊、客製化 GraphQL Client 與 CI/CD 自動化。',
    stats: [
      { value: '11+', label: '年開發經驗' },
      { value: '10+', label: '白牌 App 交付' },
      { value: '20+', label: '種語言支援' },
      { value: '70%', label: '啟動時間優化' },
    ],
    skills: [
      {
        category: 'iOS 開發',
        items: ['Swift', 'UIKit', 'Combine', 'MVVM + Coordinator', 'Modular Architecture', 'XCTest'],
      },
      {
        category: '硬體與 IoT 整合',
        items: ['Core Bluetooth (BLE)', 'External Accessory (MFi)', 'Core Location', 'MapKit'],
      },
      {
        category: '全端與後端',
        items: ['GraphQL (Subscription / WebSocket)', 'RESTful API', 'Java', 'Oracle PL/SQL', 'Redis'],
      },
      {
        category: 'DevOps 與自動化',
        items: ['Jenkins', 'jenkins-job-builder', 'XcodeGen', 'SPM', 'Carthage', 'CocoaPods'],
      },
      {
        category: '專業領域',
        items: ['白牌 App 系統設計', '動態設定與主題系統', '駕駛行為偵測 SDK (KMP)'],
      },
    ],
    experience: [
      {
        company: '拓連科技 (Noodoe)',
        domain: 'EV 充電與車聯網',
        role: 'Principal Engineer',
        period: '2018/04 – 2024/06',
        intro:
          '主導 iOS 系統架構與技術策略，個人核心貢獻超過 2,500 次提交。帶領 2 名工程師，負責專案規劃並與韌體、後端團隊跨部門協作。',
        projects: [
          {
            name: 'Noodoe EV 充電與白牌生態系',
            link: { label: 'App Store', url: links.noodoeEv },
            points: [
              '建構 Noodoe Core SDK 與動態設定、主題系統，成功交付 10+ 白牌應用程式，減少約 95% 重複程式碼。',
              '開發支援 20 多種語言的國際化引擎，確保全球部署順暢。',
              '實作 GraphQL + WebSocket 混合架構支援即時充電狀態，解決關鍵的長連線記憶體洩漏問題。',
              '完成完整充電流程：Stripe / Apple Pay 多帳戶支付、充電預約、Plug-and-Charge 與駕照驗證。',
            ],
          },
          {
            name: 'KYMCO Noodoe 智慧儀表板',
            link: { label: 'App Store', url: links.kymco },
            points: [
              '設計模組化架構，單一 App 同時支援多代硬體（1.x 與 2.x），確保長期擴充性與向下相容。',
              '優化啟動時間達 70%；實作 Find My Scooter、My Journey 與 Core Graphics / Core Animation 進階動畫。',
              '整合 Core Bluetooth 與 MFi 協議，實現穩定的多設備配對與即時數據同步。',
            ],
          },
          {
            name: '富邦 Noodoe Car',
            link: { label: 'YouTube Demo', url: links.fubon },
            points: [
              '獨立負責 iOS 全週期開發，整合低功耗 BLE 自動喚醒機制，於背景自動開始行車數據收集。',
              '整合 DrivingBehavior SDK (KMP)，即時偵測急煞、急加速與過彎事件，支援保險評估服務。',
              '結合 BLE 訊號強度與 GPS 數據，實作行車軌跡視覺化與停車位置記錄。',
            ],
          },
          {
            name: '基礎建設與 DevOps',
            points: [
              '開發內部共用 Frameworks：NDNetwork（含憑證釘選）、NDLogger、NDSecureStore、NDCacheFile。',
              '維護 Jenkins CI/CD，透過 jenkins-job-builder 實現白牌產品自動化建置與一鍵多環境發布。',
            ],
          },
        ],
        tags: ['Swift', 'Combine', 'GraphQL', 'WebSocket', 'Core Bluetooth', 'MFi', 'Stripe', 'Jenkins'],
      },
      {
        company: '優訊軟體科技 (Unistar)',
        domain: 'FinTech / 彩票平台',
        role: '全端工程師 / Java 軟體工程師',
        period: '2014/10 – 2018/04',
        points: [
          '主導雙平台原生開發 — iOS（Swift / UIKit，以 Instruments 進行效能優化）與 Android（Java，Retrofit / OkHttp）。',
          '以 Java EE (JAX-RS, EJB, JTA) 開發核心彩票平台後端，並打造客製化 Java Socket 推播伺服器，支撐大規模即時訊息。',
          '負責 Oracle PL/SQL 儲存程序與 Schema 設計，運用臨時表與索引調優確保高頻交易處理效能。',
          '以 Shell / Python 自動化伺服器佈署；導入 ELK Stack 監控、JUnit / JBehavior (BDD) 測試與 Jenkins CI + Crashlytics。',
        ],
        tags: ['Java EE', 'Swift', 'Android', 'Oracle PL/SQL', 'ELK Stack', 'Jenkins'],
      },
      {
        company: '意藍科技 (eLand)',
        domain: '大數據 / 網路爬蟲',
        role: 'Java 軟體工程師',
        period: '2012/12 – 2014/10',
        points: [
          '使用網路封包分析、Regex 與 XPath 開發爬蟲系統，自動化擷取複雜網站資料。',
          '建立 Tomcat Servlet JSON Data Feed 與 FTP 資料匯入管線（XLS / CSV），支援大規模客戶資料處理。',
        ],
        tags: ['Java', 'Servlet', 'XPath', 'Hibernate', 'MySQL'],
      },
    ],
    highlights: [
      {
        name: 'Noodoe EV App',
        desc: '全球電動車充電網路 — 即時狀態、支付與預約。',
        link: links.noodoeEv,
        linkLabel: 'App Store',
      },
      {
        name: 'KYMCO Noodoe 儀表板',
        desc: '智慧機車 IoT 儀表板，支援多代硬體。',
        link: links.kymco,
        linkLabel: 'App Store',
      },
      {
        name: '富邦 Noodoe Car',
        desc: '車載資通訊與駕駛行為分析，支援保險服務。',
        link: links.fubon,
        linkLabel: 'YouTube',
      },
    ],
    education: [
      { school: '逢甲大學', degree: '資訊工程學系 學士', period: '2007 – 2011' },
    ],
    contact,
    ui: {
      nav: { experience: '經歷', skills: '技能', projects: '專案', contact: '聯絡' },
      sections: {
        experience: '工作經歷',
        skills: '核心技能',
        projects: '精選專案',
        education: '學歷',
        contact: '聯絡方式',
      },
      contactCta: '正在打造智慧移動產品？歡迎聊聊。',
      openTo: '開放 Principal / Senior iOS 職缺 · 台北或遠端',
    },
  },
};
