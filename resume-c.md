# 蔡勝文 (Giggs Tsai)
- **手機:** 0910-671-156  
- **Email:** giggs.tsai@gmail.com  
- **地點：** 台北市 (接受遠端工作)

## 專業概述
擁有 11+ 年 iOS 與全端開發經驗的 Principal iOS Engineer，專精車聯網、電動車充電與智慧車輛應用。主導多項大型專案架構設計與團隊領導，成功交付 10+ 個白牌產品，支援全球 20+ 語言，使用 MVVM + Coordinator + Combine 打造高可維護、高效能應用。具備豐富實務經驗於 Core Bluetooth 韌體整合、GraphQL client 客製化、第三方 SDK 整合、，以及 Jenkins CI/CD 自動化建置。
具備強大的問題解決能力、專案管理與客戶現場支援經驗，追求高品質、可維護、可測試的程式碼。  
期待加入創新團隊，一起打造有影響力的移動與車聯網解決方案。

## 工作經歷
**拓連科技股份有限公司 (Noodoe)**  
**Principal Engineer**  
2018/04 – 2024/06 (6 年 3 個月)  
- 實際主導 iOS 系統架構設計、技術決策與團隊領導，個人核心貢獻超過 2500 次提交
- **KYMCO Noodoe 儀表板應用** [](https://apps.apple.com/tw/app/kymco-noodoe/id1119106442)  
  擔任 iOS 項目負責人，帶領 2 名成員，負責專案管理、工作分配與跨團隊（韌體/後端）協作。  
  設計模組化架構，支援多代硬體版本（1.x 與 2.x 儀表板裝置），確保同一 App 可無縫相容不同硬體規格，保留未來擴充性，大幅提升產品相容性與開發效率。  
  優化 App 效能，將啟動時間縮短 **70%**，並實作 Find My Scooter、My Journey 等核心功能，使用 Core Graphics / Core Animation 實現進階 UI 動畫。  
  整合 Core Bluetooth 與 External Accessory / MFi 認證，實現穩定多設備配對與即時儀表板數據同步。
- **富邦 Noodoe Car** [](https://www.youtube.com/watch?v=Gwn6pdb0dvI)  
  獨立負責完整 iOS 開發、系統架構、功能實作與效能優化。  
  提供現場技術支援，協助客戶解決問題、進行軟體調適，並提供使用與維護培訓，確保產品快速部署與客戶滿意度。  
  整合 Core Bluetooth 車輛配對，並負責將 **DrivingBehavior SDK（Internal KMP SDK）** 接入 iOS 端，實現加速/急煞/過彎事件偵測、地圖軌跡視覺化、駕駛日誌生成與車險服務。
- **Noodoe 充電應用及其白牌產品** [](https://apps.apple.com/tw/app/noodoe/id1445999880)  
  擔任技術架構師，設計模組化核心架構與 Noodoe Core SDK，實現核心功能共享與快速白牌客製化（成功交付 **超過 10+ 個** 白牌應用，減少約 **95%** 重複程式碼）。  
  建立主題系統與多文字顯示機制，支援不同品牌需求與全球 **20+ 語言** 國際化。  
  實作 GraphQL client 端 + WebSocket 混合架構，支援即時充電狀態更新與 Subscription 訂閱，解決長連線記憶體洩漏，提升穩定性。  
  建構完整充電閉環：整合 Stripe / Apple Pay 多帳戶支付、充電預約、發票下載、駕駛執照驗證/上傳、Plug-n-Charge 自動充電，搭配 MapKit + Core Location 導航。
#### Frameworks 與 DevOps
- 開發並維護多個內部共用 Framework：
  - **NDNetwork** —— 核心網路通訊抽象層，進行網路安全加固（包含 Certificate Pinning）
  - **NDLogger** —— 結構化日誌紀錄框架
  - **NDSecureStore** —— Keychain 抽象層，封裝原本不友善的 API，提供更安全且易於使用的介面
  - **NDCacheFile** —— 檔案式快取工具，統一快取存取與生命週期管理
- 建立並維護 **Jenkins CI/CD 自動化流程**，搭配 **jenkins-job-builder**，支援白牌 App 自動建置、多環境發佈與一鍵產出，加速產品交付與迭代效率

- **Key Technologies & Tools**
  - Swift, UIKit, Combine  
  - MVVM + Coordinator, MVC, Modular Architecture  
  - GraphQL client development & customization, WebSocket, RESTful API  
  - CoreGraphics, CoreAnimation, CoreLocation, MapKit, CoreBluetooth, ExternalAccessory, AVFoundation, Photos
  - Stripe, Apple Pay, Google Sign-In, Apple Sign In, Facebook Sign In, OneSignal, ios-branch-deep-linking
  - XCTest  
  - Swift Package Manager, Carthage, CocoaPods  
  - Jenkins, jenkins-job-builder, XcodeGen  
  - Dynamic Configuration & Theming System

**優訊軟體科技有限公司 (Unistar)**  
**Java 軟體工程師 / 全端移動開發**  
2014/10 – 2018/04 (3 年 7 個月)
- 負責線上彩票平台的全端開發，涵蓋 iOS / Android 原生應用與後端服務，與後端團隊合作定義、設計並推出新功能。
- 設計並實作雙平台移動應用：
  - iOS：使用 Swift 開發，主要採用 MVC 架構（少部分 MVVM），整合 UIKit / Foundation、Interface Builder / AutoLayout、Core Graphics / Core Animation；接入第三方框架（XCGLogger、SwiftyJSON、KeychainAccess），依賴管理使用 Carthage / CocoaPods；使用 Instruments 分析記憶體洩漏與 zombie object，並管理 Ad-Hoc / In-House 發佈與 provisioning profiles。
  - Android：使用 Java 開發，採用 MVC 架構，設計 UI 流程（Activity / Fragments）、豐富元件（RecyclerView、ScrollView、ViewPager、Navigation Drawer、Custom View）；接入第三方框架（Retrofit、OKHttp、EventBus），依賴管理使用 Gradle。
- 建置持續整合機制（Jenkins CI）、崩潰監控（Fabric/Crashlytics）、使用者行為分析（Google Analytics），提升應用穩定性與問題定位效率。
- 設計並實作推播伺服器（Java Socket 程式設計），支援 Android 直接 Socket 連線、iOS 透過 APNS 第三方庫，並開發簡單網頁監控介面，支援百萬級用戶規模。
- 優化 Platform 2.0 後端（API 設計、效能與擴展性調優、Schema 設計、SQL 查詢優化），實作彩票兌獎邏輯（PL/SQL 儲存程序）與浮動價格系統，使用臨時表與索引調優提升查詢效能；撰寫 Shell / Python 伺服器建置腳本，並以 JUnit / JBehavior 進行單元與行為測試。
- 參與客製專案 Starwin：實作後端邏輯與廠商 API 介接，並設計開發 Android 應用程式。
- **Key Technologies & Tools**  
  - Swift, Java, MVC, MVVM  
  - Retrofit, OKHttp, EventBus, XCGLogger, SwiftyJSON, KeychainAccess, ProGuard
  - Jenkins CI, Fabric, Crashlytics, Google Analytics  
  - Push Server (Java Socket)  
  - Oracle PL/SQL, JUnit, JBehavior, Shell, Python scripts, Schema Design & Index Tuning
  - ELK Stack (Elasticsearch, Logstash, Kibana)
  - Java EE Tools & Servers (JAX-RS, CDI, EJB, JTA, JMS, WebLogic, Tomcat), Maven, SVN, Redis

**意藍科技股份有限公司 (eLand)**  
**Java 軟體工程師**  
2012/12 – 2014/10 (1 年 11 個月)
- 負責公司核心產品開發與維護，設計並實作網路爬蟲與資料擷取系統，使用 Sniffer 分析目標網站 API、Socket / HTTP 取得原始碼、Regular Expression / XPath 解析有價值資料，並以 Hibernate 框架處理資料驗證、正規化與資料庫存取，實現從大量文字資料自動提取資訊供後續分析與加值服務。
- 處理資料介接與傳輸，建置 FTP Server 接收客戶檔案（XLS / XLSX / CSV），使用 POI / JXL 庫解析資料；開發 Tomcat Servlet 提供 JSON 格式 Data Feed 服務，支援 HTTP 接收客戶請求與資料回傳。
- 主導內部專案與外部專案支援：訂定功能規劃、人力時間調配、跨部門協調，每月發布小版本；協助客戶資料萃取與介接項目，確保資料準確性與傳輸穩定。
- 管理與維護伺服器環境（MySQL / MSSQL 資料庫、FTP Server、應用伺服器），支援系統運作與專案執行。
- **Key Technologies & Tools**  
  - Java, Servlet
  - Sniffer, Socket, HTTP, Regular Expressions, XPath  
  - POI, JXL, JSON
  - MySQL / MSSQL, FTP, Tomcat

## 學歷
- 逢甲大學 – 資訊工程學系 學士 (2007/09 – 2011/06)
- 台北市立大同高中 – 一般科 (2004/09 – 2007/06)

## 自傳
您好，我是蔡勝文，逢甲大學資訊工程學系畢業，擁有 11+ 年軟體工程經驗，從初級工程師成長為 Principal Engineer 與技術架構師，專注 iOS 移動開發、車聯網與電動車充電生態系統。

職涯初期在意藍科技負責網路爬蟲與資料擷取系統開發，掌握 Java 後端、資料解析與伺服器管理能力。隨後在優訊軟體參與線上彩票平台全端開發，涵蓋 iOS / Android 雙平台應用、推播伺服器建置與後端優化，累積移動端與全端整合經驗。

在拓連科技（Noodoe）擔任 Principal Engineer 期間，主導 KYMCO Noodoe 儀表板、富邦 Noodoe Car 與 Noodoe 充電應用等多項專案，設計模組化架構支援多硬體版本與超過 10+ 個白牌客製化產品，減少約 95% 重複程式碼，並實現全球 20+ 語言國際化。擅長 MVVM + Coordinator 架構、GraphQL client 端開發、Core Bluetooth 整合與 CI/CD 自動化，同時具備團隊領導、客戶現場支援與技術培訓經驗。

我熱衷解決複雜技術難題，並持續學習新技術。我相信我的技術深度、架構設計能力與問題解決經驗，能為貴公司帶來高效開發與高品質產品的價值。期待加入創新團隊，一起打造令人興奮的移動與車聯網解決方案。

## 求職條件
- 希望性質：全職  
- 上班時段：日班  
- 可上班日：錄取後一個月  
- 希望待遇：年薪 150–200 萬  
- 希望地點：台北市  
- 遠端工作：有意願

## 專案成果
- **Noodoe EV 充電 App** – [App Store](https://apps.apple.com/tw/app/noodoe/id1445999880)  
  電動車充電生態系統，支援即時支付與導航

- **KYMCO Noodoe 儀表板** – [App Store](https://apps.apple.com/tw/app/kymco-noodoe/id1119106442)  
  智慧機車儀表板，藍牙配對與旅程記錄

- **富邦 Noodoe Car** – [YouTube 介紹影片](https://www.youtube.com/watch?v=Gwn6pdb0dvI)  
  車輛駕駛行為偵測與車險整合應用
