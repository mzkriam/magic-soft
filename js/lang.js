btnChangeLang=document.getElementsByClassName('changeLang');for(var i=0;i<btnChangeLang.length;i++){btnChangeLang[i].addEventListener("click",()=>{if(document.documentElement.lang=='ar'){funcChangeLang('en')}else if(document.documentElement.lang=='en'){funcChangeLang('ar')}})}
function funcChangeLang(lang){document.querySelector(".preloader").style.display="flex";document.querySelector(".preloader").classList.add("fade-out");document.documentElement.lang=lang;document.documentElement.dir=translations[lang].dir;for(var i=0;i<btnChangeLang.length;i++){btnChangeLang[i].textContent=translations[lang].languages}
navLinks=document.getElementsByClassName('nav-links');for(var i=0;i<navLinks.length;i++){navLinks[i].style.direction=translations[lang].dir}
btnContactLink=document.getElementsByClassName('contact-link');btnPortfolioLink=document.getElementsByClassName('portfolio-link');btnServicesLink=document.getElementsByClassName('service-link');btnAboutLink=document.getElementsByClassName('about-link');btnHomeLink=document.getElementsByClassName('home-link');for(var i=0;i<btnContactLink.length;i++){btnContactLink[i].textContent=translations[lang].contactLink;btnPortfolioLink[i].textContent=translations[lang].portfolioLink;btnServicesLink[i].textContent=translations[lang].serviceLink;btnAboutLink[i].textContent=translations[lang].aboutLink;btnHomeLink[i].textContent=translations[lang].homeLink}
document.getElementById('themeColors').textContent=translations[lang].themeColor;document.getElementById('welcomeText').textContent=translations[lang].welcomeText;document.getElementById('introText').textContent=translations[lang].introText;document.getElementById('nameCompany').textContent=translations[lang].nameCompany;document.getElementById('btnMore').textContent=translations[lang].btnMore;titleAbout=document.getElementById('titleAbout');titleAbout.textContent=translations[lang].titleAbout;titleAbout.dataset.heading=translations[lang].headingAbout;titleGoalsAbout=document.getElementById('titleGoalsAbout');titleGoalsAbout.textContent=translations[lang].titleGoalsAbout;titleGoalsAbout.style.textAlign=translations[lang].textAlign;importantGoalsAbout=document.getElementById('importantGoalsAbout');importantGoalsAbout.textContent=translations[lang].importantGoalsAbout;document.getElementById('infoGoalsAbout').innerHTML=importantGoalsAbout.outerHTML+translations[lang].infoGoalsAbout;titleVisionAbout.textContent=translations[lang].titleVisionAbout;titleVisionAbout.style.textAlign=translations[lang].textAlign;importantVisionAbout=document.getElementById('importantVisionAbout');importantVisionAbout.textContent=translations[lang].importantVisionAbout;document.getElementById('infoVisionAbout').innerHTML=importantVisionAbout.outerHTML+translations[lang].infoVisionAbout;titleMissionAbout.textContent=translations[lang].titleMissionAbout;titleMissionAbout.style.textAlign=translations[lang].textAlign;importantMissionAbout=document.getElementById('importantMissionAbout');importantMissionAbout.textContent=translations[lang].importantMissionAbout;document.getElementById('infoMissionAbout').innerHTML=importantMissionAbout.outerHTML+translations[lang].infoMissionAbout;titleValuesAbout.textContent=translations[lang].titleValuesAbout;titleValuesAbout.style.textAlign=translations[lang].textAlign;importantValuesAbout=document.getElementById('importantValuesAbout');importantValuesAbout.textContent=translations[lang].importantValuesAbout;document.getElementById('infoValuesAbout').innerHTML=importantValuesAbout.outerHTML+translations[lang].infoValuesAbout;titleTeamAbout.textContent=translations[lang].titleTeamAbout;titleTeamAbout.style.textAlign=translations[lang].textAlign;importantTeamAbout=document.getElementById('importantTeamAbout');importantTeamAbout.textContent=translations[lang].importantTeamAbout;document.getElementById('infoTeamAbout').innerHTML=importantTeamAbout.outerHTML+translations[lang].infoTeamAbout;titleService.textContent=translations[lang].titleService;titleService.dataset.heading=translations[lang].headingService;document.getElementById('titleTM').textContent=translations[lang].titleTM;document.getElementById('infoTM').textContent=translations[lang].infoTM;document.getElementById('titleTS').textContent=translations[lang].titleTS;document.getElementById('infoTS').textContent=translations[lang].infoTS;document.getElementById('titleUI').textContent=translations[lang].titleUI;document.getElementById('infoUI').textContent=translations[lang].infoUI;document.getElementById('titleWA').textContent=translations[lang].titleWA;document.getElementById('infoWA').textContent=translations[lang].infoWA;document.getElementById('titleDA').textContent=translations[lang].titleDA;document.getElementById('infoDA').textContent=translations[lang].infoDA;document.getElementById('titleAIP').textContent=translations[lang].titleAIP;document.getElementById('infoAIP').textContent=translations[lang].infoAIP;titlePortfolio=document.getElementById('titlePortfolio');titlePortfolio.textContent=translations[lang].titlePortfolio;titlePortfolio.dataset.heading=translations[lang].headingPortfolio;document.getElementById('allItem').textContent=translations[lang].allItem;document.getElementById('WAItem').textContent=translations[lang].WAItem;document.getElementById('DAItem').textContent=translations[lang].DAItem;document.getElementById('WSItem').textContent=translations[lang].WSItem;document.getElementById('AIItem').textContent=translations[lang].AIItem;operationBtn=document.getElementById('operationBtn');ProjectDetails=document.getElementById('ProjectDetails');btnClose=document.getElementById('btnClose');if(document.documentElement.lang=='ar'){btnClose.style.right=translations[lang].leftEnglish;btnClose.style.left=translations[lang].rightArabic;ProjectDetails.style.left=translations[lang].leftEnglish;ProjectDetails.style.right=translations[lang].rightArabic}else if(document.documentElement.lang=='en'){btnClose.style.left=translations[lang].leftArabic;btnClose.style.right=translations[lang].leftEnglish;ProjectDetails.style.right=translations[lang].leftArabic;ProjectDetails.style.left=translations[lang].rightEnglish}
ProjectDetails.innerHTML=translations[lang].ProjectDetails+" "+operationBtn.outerHTML;AllBtnViewProject=document.getElementsByClassName('btnViewProject');for(var i=0;i<AllBtnViewProject.length;i++){AllBtnViewProject[i].textContent=translations[lang].btnViewProject;AllBtnViewProject[i].style.position=translations[lang].position}
AllBtnProjectBrief=document.getElementsByClassName('btnProjectBrief');for(var i=0;i<AllBtnProjectBrief.length;i++){AllBtnProjectBrief[i].textContent=translations[lang].btnProjectBrief}
AllProjectTech=document.getElementsByClassName('ProjectTech');for(var i=0;i<AllProjectTech.length;i++){AllProjectTech[i].textContent=translations[lang].ProjectTech}
AllProjectBrief=document.getElementsByClassName('ProjectBrief');for(var i=0;i<AllProjectBrief.length;i++){AllProjectBrief[i].textContent=translations[lang].btnProjectBrief}
document.getElementById('LMStitle').textContent=translations[lang].LMStitle;document.getElementById('LMSinfo').textContent=translations[lang].LMSinfo;document.getElementById('IMStitle').textContent=translations[lang].IMStitle;document.getElementById('HMStitle').textContent=translations[lang].HMStitle;document.getElementById('HMSinfo').innerHTML=translations[lang].HMSinfo.replace(/\n/g,'<br>');document.getElementById('ecommerceTitle').textContent=translations[lang].ecommerceTitle;document.getElementById('ecommerceInfo').innerHTML=translations[lang].ecommerceInfo.replace(/\n/g,'<br>');document.getElementById('HDtitle').textContent=translations[lang].HDtitle;document.getElementById('HDinfo').innerHTML=translations[lang].HDinfo.replace(/\n/g,'<br>');document.getElementById('ADtitle').textContent=translations[lang].ADtitle;document.getElementById('MDTtitle').textContent=translations[lang].MDTtitle;document.getElementById('ARTtitle').textContent=translations[lang].ARTtitle;document.getElementById('YCtitle').textContent=translations[lang].YCtitle;document.getElementById('btnSend').textContent=translations[lang].btnSend;document.getElementById('btnSendBox').style.textAlign=translations[lang].textAlignR;document.getElementById('message').placeholder=translations[lang].message;document.getElementById('subjectTitle').placeholder=translations[lang].subjectTitle;document.getElementById('email').placeholder=translations[lang].email;document.getElementById('name').placeholder=translations[lang].name;document.getElementById('phoneBox').textContent=translations[lang].phoneBox;document.getElementById('emailBox').textContent=translations[lang].emailBox;titleContact=document.getElementById('titleContact');titleContact.textContent=translations[lang].titleContact;titleContact.dataset.heading=translations[lang].headingContact;document.querySelector(".preloader").style.display="none"};var translations={en:{languages:'Arabic',dir:'ltr',textAlign:'left',textAlignR:'right',leftEnglish:0,rightEnglish:0,rightArabic:'auto',leftArabic:'auto',position:'absolute',contactLink:'Contact',portfolioLink:'Portfolio',serviceLink:'Service',aboutLink:'About',homeLink:'Home',themeColor:'Theme Color',welcomeText:'Welcome To',introText:'We are support digital success.',nameCompany:'Magic Soft',btnMore:'More about Magic Soft.',titleAbout:'About Us',headingAbout:'Main info',titleGoalsAbout:'Your Goals Are Our Goals',infoGoalsAbout:'specializing in the development of web applications, Windows applications, e-commerce websites, and artificial intelligence applications. Our team has extensive experience in software development using the latest technologies.',importantGoalsAbout:'We are a leading software company ',titleVisionAbout:'Our Vision',infoVisionAbout:' We aim to transform businesses and lives through our commitment to innovation and excellence in software development.',importantVisionAbout:'Our vision is to be at the forefront of delivering innovative software solutions that drive business growth and expansion.',titleMissionAbout:'Our Mission',infoMissionAbout:'  We strive to provide the best service to our clients , ensuring that we understand their business needs and deliver solutions that provide real value.',importantMissionAbout:'Our mission is to consistently provide high-quality software solutions that meet our clients needs and exceed their expectations.',titleValuesAbout:'Our Values',infoValuesAbout:' These values guide our decisions and shape our culture. We work hard to deliver products that reflect these values, and we take pride in the work we do.',importantValuesAbout:'We value innovation, quality, and integrity above all else.',titleTeamAbout:'Our Team',infoTeamAbout:' We are a group of professional software engineers with extensive experience in a diverse range of technologies and industries. We collaborate to deliver the best solutions to our clients, bringing together our unique skills and perspectives to solve complex problems.',importantTeamAbout:'Our team is our greatest asset.',titleService:'What We do',headingService:'Services',titleTM:'Technical support and maintenance',infoTM:'Our technical support team is available around the clock to assist clients in resolving any issues they may encounter.',titleTS:'Technical study and planning',infoTS:'Many people need technical studies and plans to know more details about their ideas and overcome obstacles, so we provide you with the best studies so that you can know all aspects of your project.',titleUI:'User Interface Design',infoUI:'User Interface (UI) Design is a critical component in the success of your digital products. It\'s not just about making your application look good - it\'s about creating an intuitive and efficient user experience that drives user engagement and satisfaction.',titleWA:'Web Application Development',infoWA:'Programming and designing websites to suit your needs and achieve your ambitions, whether it\'s an introductory interface, an e-commerce store, human resources management, customer management, or other projects.',titleDA:'Desktop Application Development',infoDA:'Desktop Applications are a pivotal tool for achieving business success. At our company, We work diligently to ensure that our applications are secure, high-performing, and customizable to meet your unique needs.',titleAIP:'Artificial Intelligence Projects',infoAIP:'We use AI technologies such as deep learning and machine learning to develop solutions that deliver superior results. From predictive analytics to AI chatbots.',titlePortfolio:'Portfolio',headingPortfolio:'Latest Works',AllItem:'All',WAItem:'Web Applications',WSItem:'Websites',DAItem:'Desktop Applications',AIItem:'Artificial intelligence',btnViewProject:'View Project',btnProjectBrief:'Project Brief',ProjectTech:'Project techniques',ProjectDetails:'Project Details',IMStitle:'Inventory Management System (IMS)',HMStitle:'Hospital Management System (HMS)',LMStitle:'Library Management System (LMS)',LMSinfo:'Analysis and design of a library management system in order to facilitate purchases from suppliers (publishing houses) and selling to customers, organizing lending operations and setting conditions on the loan process, the system also provides archiving, classifying and classifying books, printing reports and showing interactive messages from the completion of a specific process or an incomplete process due to a lack or error in the entered information and the system was divided into the following sections (main, Publishing houses, items, books, audio books, books in PDF format, customers, sales, borrowing, outgoing mail, inbox, library details) can be added, modified, deleted and displayed details on each of the previous sections and the powers of the administrative staff (librarian, assistant librarian, sales officer, secondment officer) The customer can log in to the library management system either to browse the library assets or send a message to the library manager in which he submitted a request to provide a non-existent book or a request to extend the borrowing process or anything he wants, knowing that a picture and a PDF file can be attached with the message...',HMSinfo:`This system aims to facilitate and improve hospital and health facility management processes. Includes many useful features for different users:
        Admin:
        - Manage all departments and users.
        - Access to the dashboard and hospital monitoring.
        - Access settings and create bulletin boards.
        Doctors:
        They can create and manage their own clinic appointments.
        - Admitting patients and managing bed appointments.
        - Issuing medical prescriptions to patients.
        - Access their reports and payroll.
        Patients:
        - Book new appointments.
        - View their appointments and prescriptions.
        - Follow up on the details of the treating physician.
        -  Access details of previous transactions and invoices.
        Reception staff:
        -  Managing patient appointments.
        - Postal service management.
        Pharmacists:
        - Medication management and  billing.
        Accountants:
        - Billing and payments management.`,ecommerceTitle:'Ecommerce',ecommerceInfo:`FRONT-END:
        - Responsive Layout
        - Shopping Cart, Wishlist, Product Reviews
        - Coupons & Discounts
        - Product attributes: cost price, promotion price, stock, size...
        - Blog: category, tag, content, web page
        - Module/Extension: Shipping, payment, discount...
        - Upload manager: banner, images...
        - SEO support: customer URL
        - Newsletter management
        - Contact forms with real-time notification (Laravel Pusher)
        - Related Products, Recommendations for you in our categories
        - A Product search form
        - Laravel Socialite implement(Facebook, Google & twitter) & Customer login
        - Product Share and follow from different social platform...
        - Payment integration(Paypal)
        - Order Tracking system
        - Multi-level comment system and many more...
        
        ADMIN:
        - Admin roles, permission
        - Product manager
        - Media manager using unisharp laravel file manager
        - Banner manager
        - Order management
        - Category management
        - Brand management
        - Shipping Management
        - Review Management
        - Blog, Category & Tag manager
        - User Management
        - Coupon Management
        - System config: email setting, info shop, maintain status...
        - Line Chart & Pie chart...
        - Generate order in pdf form...
        - Real time message & notification
        - Profile Settings and many more...
        
        USER DASHBOARD:
        - Order management
        - Review Management
        - Comment Management
        - Profile Settings`,HDtitle:'Heart Disease Prediction using Machine Learning',HDinfo:`Artificial intelligence, represented by machine learning, can solve real-world problems in many areas of life in general and medicine in particular by predicting them.

        The results of the work during the project can be divided into three stages. The first is the theoretical study of heart disease and artificial intelligence and the relationship between them. The second is an explanation of machine learning, its algorithms, types, mechanism of action, and the stages of developing an automated learning project. The third is an explanation of the Python language and the software libraries used, NumPy - Pandas - Matplotlib.
        
        At the end of the project, there is a model. Machine learning capable of predicting heart disease using machine learning algorithms and then generating a graphical interface for the system.`,ADtitle:'Admin Dashboard',MDTtitle:'Modern template website',ARTtitle:'Al-Nubalaa Restaurant',YCtitle:'Your Car',titleContact:'Get In Touch',headingContact:'Contact',emailBox:'Email',phoneBox:'Phone',name:'Name',email:'Email',subjectTitle:'Subject',message:'Message',btnSend:'Send ',},ar:{languages:'الإنجليزية',dir:'rtl',textAlign:'right',textAlignR:'left',rightEnglish:'auto',leftEnglish:'auto',rightArabic:0,leftArabic:0,position:'relative',contactLink:'التواصل',portfolioLink:'الاعمال',serviceLink:'الخدمات',aboutLink:'من نحن',homeLink:'الرئيسية',themeColor:'لون الموضوع',welcomeText:'مرحبا بك في',introText:'نحن ندعم النجاح الرقمي.',nameCompany:'سحر البرمجيات',btnMore:'المزيد عن سحر البرمجيات',titleAbout:'من نحن',headingAbout:'المعلومات الرئيسية',titleGoalsAbout:'اهدافك هي اهدافنا',infoGoalsAbout:' متخصصة في تطوير تطبيقات الويب، وتطبيقات سطح المكتب، ومواقع التجارة الإلكترونية، وتطبيقات الذكاء الصناعي. يمتلك فريقنا خبرة واسعة في تطوير البرمجيات باستخدام أحدث التقنيات. ',importantGoalsAbout:'نحن شركة برمجيات رائدة',titleVisionAbout:'رؤيتنا',infoVisionAbout:' نهدف إلى تحويل الأعمال والحياة من خلال التزامنا بالابتكار والتميز في تطوير البرمجيات.',importantVisionAbout:'رؤيتنا هي أن نكون في طليعة تقديم حلول البرمجيات المبتكرة التي تعزز النمو والتوسع في الأعمال.',titleMissionAbout:'مهمتنا',infoMissionAbout:' نسعى جاهدين لتقديم أفضل خدمة لعملائنا، مع التأكد من فهمنا لاحتياجات أعمالهم وتقديم حلول توفر قيمة حقيقية.',importantMissionAbout:'مهمتنا هي تقديم حلول برمجية عالية الجودة تلبي احتياجات عملائنا وتتجاوز توقعاتهم بشكل مستمر.',titleValuesAbout:'قيمنا',infoValuesAbout:' توجه هذه القيم قراراتنا وتشكل ثقافتنا. نعمل بجد لتقديم منتجات تعكس هذه القيم، ونفخر بالعمل الذي نقوم به.',importantValuesAbout:'نقدر الابتكار والجودة والنزاهة على كل شيء آخر.',titleTeamAbout:'فريقنا',infoTeamAbout:' نحن مجموعة من مهندسي البرمجيات المحترفين ذوي الخبرة الواسعة في مجموعة متنوعة من التقنيات والصناعات. نتعاون لتقديم أفضل الحلول لعملائنا، مجمعين بين مهاراتنا ووجهات نظرنا الفريدة لحل المشكلات المعقدة.',importantTeamAbout:'فريقنا هو أعظم ثروتنا.',titleService:'ماذا نقدم',headingService:'الخدمات',titleTM:'الدعم الفني والصيانة',infoTM:'فريق الدعم الفني لدينا متاح على مدار الساعة لمساعدة العملاء في حل أي مشكلات قد يواجهونها.',titleTS:'الدراسة الفنية والتخطيط',infoTS:'العديد من الأشخاص يحتاجون إلى دراسات فنية وخطط لمعرفة المزيد من التفاصيل حول أفكارهم وتجاوز العقبات، لذا نقدم لك أفضل الدراسات حتى تتمكن من معرفة جميع جوانب مشروعك.',titleUI:'تصميم واجهة المستخدم',infoUI:'تصميم واجهة المستخدم (UI) هو عنصر حاسم في نجاح منتجاتك الرقمية. الأمر ليس فقط حول جعل تطبيقك يبدو جيدًا - بل يتعلق بإنشاء تجربة مستخدم بديهية وفعالة تعزز التفاعل والرضا من المستخدم.',titleWA:'تطوير تطبيقات الويب',infoWA:'برمجة وتصميم المواقع الإلكترونية لتناسب احتياجاتك وتحقيق طموحاتك، سواء كانت واجهة تعريفية، أو متجر تجارة إلكترونية، أو إدارة الموارد البشرية، أو إدارة العملاء، أو مشاريع أخرى.',titleDA:'تطوير تطبيقات سطح المكتب',infoDA:'تطبيقات سطح المكتب هي أداة رئيسية لتحقيق نجاح الأعمال. في شركتنا، نعمل بجد لضمان أن تطبيقاتنا آمنة، وأدائها عالٍ، وقابلة للتخصيص لتلبية احتياجاتك الفريدة.',titleAIP:'مشاريع الذكاء الاصطناعي',infoAIP:'نستخدم تقنيات الذكاء الاصطناعي مثل التعلم العميق والتعلم الآلي لتطوير حلول تقدم نتائج متفوقة. من التحليلات التنبؤية إلى الدردشة الذكية.',titlePortfolio:'معرض الأعمال',headingPortfolio:'الأحدث',allItem:'الكل',WAItem:'تطبيقات الويب',WSItem:'المواقع الإلكترونية',DAItem:'تطبيقات سطح المكتب',AIItem:'الذكاء الإصطناعي',btnViewProject:'عرض المشروع',btnProjectBrief:'معلومات المشروع',ProjectTech:'تقنيات المشروع',ProjectDetails:'تفاصيل المشروع',HMStitle:'نظام إدارة المستشفيات (المراكز الطبية)',LMStitle:'نظام ادارة المكتبات',IMStitle:'نظام ادارة المخزون',LMSinfo:'تحليل وتصميم نظام إدارة المكتبة من أجل تسهيل الشراء من الموردين (دور النشر) والبيع للعملاء، وتنظيم عمليات الإقراض ووضع الشروط على عملية القرض، كما يوفر النظام أيضا أرشفة وتصنيف وتصنيف الكتب، وطباعة التقارير وإظهار الرسائل التفاعلية من إكمال عملية معينة أو عملية غير مكتملة بسبب نقص أو خطأ في المعلومات المدخلة وتم تقسيم النظام إلى الأقسام التالية (الرئيسية، دور النشر، العناصر، الكتب، الكتب الصوتية، الكتب بتنسيق PDF، العملاء، المبيعات، الإقراض، البريد الصادر، البريد الوارد، تفاصيل المكتبة) يمكن إضافة وتعديل وحذف وعرض التفاصيل على كل من الأقسام السابقة وصلاحيات الموظفين الإداريين (المكتبة، المساعد المكتبة، موظف المبيعات، موظف الإعارة) يمكن للعميل تسجيل الدخول إلى نظام إدارة المكتبة إما لتصفح أصول المكتبة أو إرسال رسالة إلى مدير المكتبة فيها قدم طلبا لتوفير كتاب غير موجود أو طلب لتمديد عملية الإقراض أو أي شيء يريده، علما أنه يمكن إرفاق صورة وملف PDF مع الرسالة.',HMSinfo:`يهدف هذا النظام إلى تسهيل وتحسين عمليات إدارة المستشفيات ومرافق الرعاية الصحية. يتضمن العديد من الميزات المفيدة لمختلف المستخدمين:
        المشرف:
        - إدارة جميع الأقسام والمستخدمين.
        - الوصول إلى لوحة التحكم ومراقبة المستشفى.
        - الوصول إلى الإعدادات وإنشاء لوحات الإعلانات.
        الأطباء:
        - يمكنهم إنشاء وإدارة مواعيد العيادة الخاصة بهم.
        - قبول المرضى وإدارة مواعيد السرير.
        - إصدار الوصفات الطبية للمرضى.
        - الوصول إلى تقاريرهم وكشوف الرواتب.
        المرضى:
        -حجز مواعيد جديدة.
        - عرض مواعيدهم ووصفاتهم الطبية.
        - متابعة تفاصيل الطبيب المعالج.
        - الوصول إلى تفاصيل المعاملات والفواتير السابقة.
        موظفي الاستقبال:
        - إدارة مواعيد المرضى.
        - إدارة خدمة البريد.
        الصيادلة:
        - إدارة الأدوية والفواتير.
        المحاسبين:
        - إدارة الفواتير والمدفوعات.`,ecommerceTitle:'متجر الكتروني',ecommerceInfo:`الواجهة الأمامية:
        - تخطيط متجاوب
        - عربة التسوق، قائمة الرغبات، مراجعات المنتج
        - كوبونات وخصومات
        - خصائص المنتج: سعر التكلفة، سعر الترويج، المخزون، الحجم...
        - المدونة: الفئة، العلامة، المحتوى، الصفحة الويب
        - الوحدة/الملحق: الشحن، الدفع، الخصم...
        - مدير التحميل: اللافتات، الصور...
        - دعم SEO: URL مخصص للعميل
        - إدارة النشرة الإخبارية
        - نماذج الاتصال مع الإشعارات الفورية (Laravel Pusher)
        - المنتجات ذات الصلة، التوصيات لك في فئاتنا
        - نموذج بحث عن المنتج
        - تنفيذ Laravel Socialite (Facebook، Google & twitter) وتسجيل الدخول للعميل
        - مشاركة المنتج ومتابعته من منصة اجتماعية مختلفة...
        - التكامل مع الدفع (Paypal)
        - نظام تتبع الطلبات
        - نظام التعليقات متعدد المستويات والكثير...
        
        الإدارة:
        - أدوار الإدارة، الإذن
        - إدارة المنتج
        - إدارة الوسائط باستخدام مدير ملفات Laravel unisharp
        - إدارة اللافتات
        - إدارة الطلبات
        - إدارة الفئات
        - إدارة العلامات التجارية
        - إدارة الشحن
        - إدارة المراجعات
        - إدارة المدونة، الفئة والعلامة
        - إدارة المستخدمين
        - إدارة الكوبونات
        - تكوين النظام: إعدادات البريد الإلكتروني، معلومات المتجر، حالة الصيانة...
        - الرسم البياني للخط والدائرة...
        - توليد الطلب في شكل pdf...
        - رسالة وإشعار في الوقت الحقيقي
        - إعدادات الملف الشخصي والكثير...
        
        لوحة تحكم المستخدم:
        - إدارة الطلبات
        - إدارة المراجعات
        - إدارة التعليقات
        - إعدادات الملف الشخصي`,HDtitle:'التنبؤ بأمراض القلب باستخدام خوارزميات التعلم الالي',HDinfo:`الذكاء الصناعي، الممثل بالتعلم الآلي، يمكنه حل المشكلات الحقيقية في العديد من مجالات الحياة بشكل عام والطب بشكل خاص من خلال التنبؤ بها.

        يمكن تقسيم نتائج العمل خلال المشروع إلى ثلاث مراحل. الأولى هي الدراسة النظرية لأمراض القلب والذكاء الصناعي والعلاقة بينهما. الثانية هي شرح التعلم الآلي، خوارزمياته، أنواعه، آلية عمله، ومراحل تطوير مشروع التعلم الآلي. الثالثة هي شرح لغة Python والمكاتب البرمجية المستخدمة، NumPy - Pandas - Matplotlib.
        
        في نهاية المشروع، هناك نموذج. التعلم الآلي قادر على التنبؤ بأمراض القلب باستخدام خوارزميات التعلم الآلي ومن ثم توليد واجهة رسومية للنظام.`,ADtitle:'لوحة التحكم',MDTtitle:'قالب عصري للتخصيص',ARTtitle:'مطعم النبلاء',YCtitle:'معرض سيارتك',headingContact:'التواصل',titleContact:'ابقى على تواصل',emailBox:'البريد الإلكتروني',phoneBox:'رقم الهاتف',name:'الإسم',email:'البريد الإلكتروني',subjectTitle:'العنوان',message:'الرسالة',btnSend:'إرسال',}}