const quizData = [
    {
      question: 'ما دور المنهج التاريخي في فهم الماضي وتحليل الوقائع التاريخية؟',
      options: ['د. المنهج التاريخي ليس ذا أهمية في فهم الماضي والتحليل النقدي', 
      'أ. المنهج التاريخي يقوم فقط بتسجيل الوقائع دون تحليلها',
       'لمنهج التاريخي يساعد في تحليل وتفسير الوقائع التاريخية بأسس منهجية دقيقة'
       , 'ج. المنهج التاريخي يعتبر فقط طريقة تسجيل للأحداث دون البحث في فهمها'],
      answer:'لمنهج التاريخي يساعد في تحليل وتفسير الوقائع التاريخية بأسس منهجية دقيقة'
      ,
      // true and false and i will put in last of exam
    },
    {
      question: 'دراسة تاريخ التعليم في الجامع لازهر يقع ضمن مجال دراسة المنطقه الجغرافية ',
      options: ['1-صح',
       '2- خطأ', 
       '', 
       ''],
      answer:  '2- خطأ',
    },
    {
      question: 'في دراستنا لتاريخ التربية نتناول كافة عناصر النظام التعليمي من مدخلات وعمليات ومخرجات',
      options: ['1-صح',
       '2- خطأ', 
       '', 
       ],
      answer:  '1-صح',
    },
    {
      question: 'يركز الاسلوب العرضي في دراسة تاريخ التربيه علي تخير قضية او عدد من القايا او التربيويه وتتبعها علي مر العصور',
      options: ['صح',
       'خطأ', 
       '', 
       ''],
      answer:  'خطأ',
    },
    {
      question: 'يمكن دراسة نظام تعليمي في فترة تاريخيه معينة دون النظر الي القوي والعوامل المؤثرة عليه',
      options: ['خطأ',
       'صح', 
       '', 
       ''],
      answer:  'خطأ',
    },
    {
      question: 'يزيد علم تاريخ التربية من وعينا وفهمنا للمشكلات والتحديات المعاصرة للتربية ',
      options: ['صح',
       'خطأ', 
       '', 
       ''],
      answer:  'صح',
    },
    //thsi
    {
      question: 'الاسلوب المناسب للمبتدئ في دراسة تاريخ التربية هو الاسلوب ',
      options: ['الاسلوب الطولي',
       'الاسلوب العرضي', 
       'اسلوب سيرة الاشخاص', 
       'اسلوب اخر'],
      answer:  'الاسلوب العرضي',
    },
    {
      question: 'اسلوب من اساليب دراسة علم تاريخ التربيه ويتم عن طريق تخير عددا من القضايااو المفاهيم التربويه مثل قية التعليم الاكاديمي',
      options: ['اسلوب طولي',
       'اسلوب عرضي', 
       'اسلوب سيرة الاشخاص', 
       ''],
      answer: 'اسلوب طولي',
    },
    {
      question: 'مجال من مجالات تاريخ التربية يتم من خلالة مسح الاحداث  التي مر بها التعليم في اقليم - دوله-قارة هو',
      options: ['مشكلات تعلميه ',
       'مرحلة تعليمية', 
       'مهنة او طبقة', 
       'منطقة جغرافية'],
      answer:  'منطقة جغرافية',
    },
    {
      question: 'مستوي من مستويات الدراسات التاريخيه  يتم فية تعليل الوقائع والاحداث والتنبؤ منها بالمستقبل هو',
      options: ['فلسفة التاريخ',
       'علم التاريخ', 
       'منهج المؤرخ', 
       'جميع ماسبق'],
      answer:  'فلسفة التاريخ',
    },
    {
      question: 'مجال من مجالات تاريخ التربية يتم فية رصد الأحداث التعليمية التي حدثت لفئة من افراد المجتمع',
      options: ['دراسة مهنة او طبقة ',
       'شخصيات تعليمية', 
       'مشكلات تعليمية ', 
       'قضايا وافكار تربوية'],
      answer:  'دراسة مهنة او طبقة ',
    },
    {
      question: 'اسلوب لدراسة تاريخ التربية يتم من خلالة تقسيم تاريخ التربية الي مراحل او فترات زمنية متتابعة مع توضيح للظروف والعوامل',
      options: ['طولي ',
       'عرضي', 
       'سير الاشخاص', 
       'طولي وعرضي'],
      answer:  'عرضي',
    },
    {
      question: 'د ارسة آ ارء أفالطو التربوية تقع ضم مجال دراسة القضايا التربوية',
      options: ['صح',
       'خطأ', 
       '', 
       ''],
      answer:  'صح',
    },
    {
      question: 'الفترة التي تسبق سبة ألاف سنة تعني المؤرخون',
      options: ['صح',
       'خطأ', 
       '', 
       ''],
      answer:  'خطأ',
    },
    
    {
      question: 'القوي الدينية التي خضع لها الانسان الاول منذ الالف سنين تأثرت كثيرا باالظروف الاقتصادية',
      options: ['صح',
       'خطأ', 
       '', 
       ''],
      answer:  'صح',
    },
   { 
      question: 'من خصائص المجتمعات البدائيه',
      options: ['التجانس',
       'يغلب علي افرادها طابع التفكير العاطفي', 
       'ذات ثقافة محدودة', 
       'جميع ماسبق'],
      answer:  'جميع ماسبق',
    },
   { 
      question: 'اعتمدت المجتمعات البدائيه في تعليم ابناءها علي ',
      options: ['الحفظ والتلقين',
       'الممارسة والاداء', 
       'الممارسه مع الحفظ', 
       'جميع ماسبق'],
      answer:  'الممارسة والاداء',
    },
    
    {
      question: ' العامل الاكثر فعالية في تحديد الفكر البشري في المجتمعات البدائية',
      options: ['ديني',
       'اجتماعي', 
       'اقتصادي', 
       'سياسي'],
      answer:'اقتصادي',
    },
    
    {
      question: 'من ملامح التربيه في المجتمعات البدائيه ان يقلد الناشئ عادات مجتمعة وطراز حياتة اليا خالصا',
      options: ['صح',
       'خطأ', 
       '', 
       ''],
      answer:  'صح',
    },
    {
      question: 'اهداف التربية في المجتمعات البدائيه ',
      options: ['دمج الصغار مع الكبار ',
       'ربط الاجيال ببعضها البعض', 
       'الحصول علي ضروريات الحياة', 
       'جميع ماسبق'],
      answer:  'جميع ماسبق',
    },
    {
      question: 'لم تكن هناك مؤسسات تتولي مسؤولية الصغار وكان عبأ يقع علي المجتمع في المجتمعات البدائيه',
      options: ['صح',
       'خطأ', 
       '', 
       ''],
      answer:  'صح',
    },
    {
      question: 'يسهم الطفل البدائي بشكل فعال في الحياة الاجتماعية',
      options: ['صح',
       'خطأ', 
       '', 
       ''],
      answer:  'صح',
    },
    
    {
      question: 'يعد العامل الاجتماعي اكثر العوامل تأثيرا علي التربية في المجتمعات البدائية',
      options: ['صح',
       'خطأ', 
       '', 
       ''],
      answer:  'خطأ',
    },
    
    {
      question: 'التربية في المجنمعات البدائية تبدأ مبكرا وتنتهي مبكرا ',
      options: ['صح',
       'خطأ', 
       '', 
       ''],
      answer:  'صح',
    },
    {
      question: 'من خصائص المجتمعات البدائيه ',
      options: ['التنوع',
       'معرفة القراءة والكتابة', 
       'التقليدية', 
       'التعقيد'],
      answer:  'التقليدية',
    },
    {
      question: 'يقصد بالمجتمعات البدائية  اقوام عاشو ',
      options: ['قبل الميلاد',
       'قبل معرفة الكتابة', 
       'بعد معرفة الكتابة', 
       'عصر الاسرات'],
      answer: 'قبل الميلاد' ,
    },
    {
      question: 'نشأت العقائد  الدينية .........في بقاع وادي النيل',
      options: ['متجمعه',
       'متفرقة', 
       'يعضهم متجمع و بعضهم متفرق ', 
       'مختلفة'],
      answer:  'متفرقة',
    },
    {
      question:'اتسمت الديانة المصريه القديمة بخصائص منها اعتقاد  المصريون ان الموت فترة انتقال',
      options: ['صح',
       'خطأ', 
       '', 
       ''],
      answer:  'صح',
    },
    {
      question:'تعتبر طبقة .....اشرف الطبقات واعلاها في العلم وكانت تمتلك معظم الاراضي الزاعية',
      options: ['الطبقة الاولي',
       'الطبقة الثانية', 
       'الطبقة الثالة', 
       'الطبقة الرابعة'],
      answer:  'الطبقة الاولي',
    },
    {
      question:'لكل فرد من هذة الطبقة قطعة ارض معفاه من الضرائب تبلغ 6 افدنه ونصف',
      options: ['الطبقة الاولي',
       'الطبقة الثانية', 
       'الطبقة الثالثة', 
       'الطبقة لرابعة'],
      answer:   'الطبقة الثانية',
    },
    {
      question:'لم يستطع الكثير من ابناء تلك الطبقة الالتحاق ب معاهد التعليم نظرا لانتشارها الكبير في ارجاء الوادي',
      options: ['الطبقة الثالثة ',
       'الطبقة الاولي', 
       'الطبقة الثانية ', 
       'الطبقة الرابعة'],
      answer:  'الطبقة الثالثة ',
    },
    {
      question:'اهداف التربية المصرية القديمة',
      options: ['عدم احترام النظام الاجتماعي القائم وعدم التمسك بالفضيلة',
       'عدم احترام النظام الاجتماعي والتمسك بالفضيله', 
       'احترام النظام الاجتماعي والتمسك بالفضيلة', 
       'احترام النظام الاجتماعي وعم التمسك بالفضيلة'],
      answer:  'احترام النظام الاجتماعي والتمسك بالفضيلة',
    },
    {
      question:'لم يكن التعليم في المرحلة الاولي مقتصرا علي ابناء الطبقة الحاكمةمن ملوك وامراءووزراء ',
      options: ['صح',
       'خطأ', 
       '', 
       ''],
      answer:  'خطأ',
    },
    {
      question:'كانت مهنة .....بمثابة الخطوة الاولي التي يخطوها الشباب لتولي المناصب العليا في الحكومة',
      options: ['الشعر',
       'الكتابة', 
       'الفن', 
       'التدريس'],
      answer:  'الكتابة',
    },
    {
      question:'تعد الكتابة المصرية اقدم كابة في العالم',
      options: ['',
       'خطأ', 
       'صح', 
       ''],
      answer:  'صح',
    },
    {
      question:'كان الهدف الرئيسي من المدارس  في المجتمع المصرين القدماء',
      options: ['تعليم الكتابة',
       'تعليم القراءة', 
       ' تعليم الفنون', 
       'جميع ماسبق'],
      answer:   'تعليم الكتابة',
    },
    {
      question:'لفظ برعنخ اطلق علي مدارس اعداد الكتبة ويعني دور الكتاب',
      options: ['صح',
      'خطأ', 
      '', 
      ''],
      answer:  'خطأ',
    },
    {
      question:'يعتبر كتاب ...من اقد الكتب في العالم',
      options: ['كتاب الاخلاق',
       'كتاب الموتي', 
       'كتاب الفلسفة', 
       'كتاب الادب'],
      answer:  'كتاب الاخلاق',
    },
    {
      question:'يعد كتاب الموتي من اشهر الكتب التي كانت تدرس في التربية',
      options: ['اليونانية القديمة',
       'المصرية القديمة', 
       'الاسلامية في العصور الوسطي', 
       'المسيحية في العصور الوسطي'],
      answer:  'المصرية القديمة',
    },
    {
      question:'اساليب اللمعليمن في هذة التربية كانت قساة القلب غلاظ الأكباد',
      options: [' المصرية القديمة',
       'اليونانية القديمة', 
       'المسيحية في الصور الوسطي', 
       'الاسلامية في العصور الوسطي'],
      answer:  ' المصرية القديمة',
    },
    {
      question:'كان للكهنة مكانة خاصة في مصر الفرعونية وانهم احتكرو عملية التريس',
      options: ['صح',
      'خطأ',
     '', 
       ''],
      answer:  'صح',
    },
    {
      question:'كانت النساء يتمتعن بحريه كاملة في التربية',
      options: ['المصرية القديمة',
      'العصور الوسطي',
     'التربية اليونانية', 
       'التربية الاسلامية'],
      answer:  'المصرية القديمة',
    },
    {
      question:'التربية في مصر القديمة كانت تهدف إلى تخريج المتعلمي لتولى المه المرموقة',
      options: ['صح',
      'خطأ',
     '', 
       ''],
      answer:  'صح',
    },
    {
      question:'التربية المصرية القديمة كانت',
      options: ['نظرية',
      'عملية',
     'اعملية ونظرية', 
       'حفظ وتلقين'],
      answer:  'عملية',
    },
    {
      question:'التربية المصرية القديمة اهتمت ب',
      options: ['التدريب المهني',
      'تعليم القراءة والكتابة والحساب',
     'توجية السلوك', 
       'جميع ما سبق'],
      answer:  'جميع ما سبق',
    },
    {
      question:'كانت بلاد اليونان القديمةاو الاغريق مملكة واحدة؟',
      options: ['صح',
      'خطأ',
     '', 
       ''],
      answer:  'خطأ',
    },
    {
      question:'في التربية اليونانية القديمة يطلق علي اسم المدينة ',
      options: ['المدينة الدولة',
      'العاصمة',
     'المحافة', 
       'الدولة المدينة'],
      answer:  'المدينة الدولة',
    },
    {
      question:'ارض شبة الجزيرة العربية',
      options: ['جبالا',
      'وديان',
     'جبال ووديان', 
       'بحار'],
      answer:  'جبال ووديان',
    },
    {
      question:'كانت بلاد اليوناناو الامر تتكون من',
      options: ['جزء واحدا',
      'نصفين',
     'دويلات صغيرة', 
       ''],
      answer:  'دويلات صغيرة',
    },
    {
      question:'ظهر في ولاية اثينا واسبرطة مايشير الي الوفاق ',
      options: ['احوال نادرة',
      'دائما كان يوجد وفاق',
     'لم يكن هناك اي وفاق', 
       'لم يكن هناك اي علاقة'],
      answer:  'احوال نادرة',
    },
    
    {
      question:'قبل فترة الحضارة اليونانية القديمة كانت هناك حضارة عرفت باسم',
      options: ['الحضارة الهومورية',
     'الحضارة اليونانية ',
    'الحضاره الفينيقية', 
       'الحضارة الاثينية'],
      answer:  'الحضارة الهومورية',
    },
    
    {
      question:'اهم قصائد الشاعر اليوناني هوميرس ',
      options: ['شدة البأس',
     'تمجيد القوة',
     'الشجاعة', 
       'جميع ماسبق'],
      answer:  'جميع ماسبق',
    },
    
    {
      question:'كانت الوراثة عاملا قويافي نيل الملك وتبوء العرش في التربية اليونانية القديمة',
      options: ['صح',
     'خطأ',
     '', 
       ''],
      answer:  'خطأ',
    },
    
    {
      question:'لم تكن للمرأة دور في هذا المجتمع',
      options: ['التربية المصرية القديمة',
     'التربية اليونانية القديمة',
     'التربية في العصور الوسطي', 
       'التربية الاسلامية'],
      answer:  'التربية اليونانية القديمة',
    },
    
    {
      question:'كانت القراءة والكتابة من مستلزمات الاعداد الابطال والشجعان في التربية اليونانية',
      options: ['صح',
     'خطأ',
     '', 
       ''],
      answer:  'خطأ',
    },
    
    {
      question:'كانت ......اسبق الولايات اليونانية الي  تأسيس مجدها وبناء شهرتها بما وضعته لنفسها من نظام التربية',
      options: ['اسبرطة',
     'اثينا',
     '', 
       ''],
      answer:  'اسبرطة',
    },
    
    {
      question:'يعد .....عامل مأثر علي التربية في اسبطة حيث كانت تقع في منطقة واعرة تحيط بها الجبال وكنت تتطلب قوة الجسم والقدرة علي التحمل',
      options: ['الموقع الجغرافي',
     'النظام الاجتماعي',
     'السياسة الخارجية', 
       'النظم والقوانين الاسبرطية'],
      answer:  'الموقع الجغرافي',
    },
    
    {
      question:'حكمة طبقة .....المجتمع الاسبرطي وسخرت افراد الطبقتين  الاخرين في خدمتها ',
      options: ['السادة',
     'طبقة العبيد',
     'الطيقة الوسطي', 
       'الطبقة الدنيا'],
      answer:  'السادة',
    },
    
    {
      question:'من القوانين الخاصة بالمواليد التي وضعها ليكرجس ان الطفل ان كان مشوها او ضعيفا ينال صنعة ',
      options: ['خطأ',
     'صح',
     '', 
       ''],
      answer:  'خطأ',
    },
    {
      question:'يأخذون الاسبرطي الي مؤسسات الدولية للتدريب في المرحلة',
      options: ['الاولي',
     'الثانية',
     'الثالثة', 
       'الرابعة'],
      answer:  'الثانية',
    },
    {
      question:'كانت تربيةالبنات تشبة الي حد كبير تربية البنين في خشونتها والعابها الرياضية وتمريناتها العسكرية',
      options: ['التربية اليونانية القديمة',
     'التربية المصرية القديمة',
     'التربية في العصور الوسطي', 
       'التربية في عصر محمد علي'],
      answer:  'التربية اليونانية القديمة',
    },
    {
      question:'لم يكن هناك حقوق مدنية للعبيد وانما كانت هناك تشريعات لحمايتهم',
      options: ['اسبرطة ',
     'اثينا',
     '', 
       ''],
      answer:  'اثينا',
    },
    {
      question:'كانت التربية في اسبرطا اوسع مدي من التربية في اثينا',
      options: ['خطأ',
     'صح',
     '', 
       ''],
      answer:  'خطأ',
    },
    {
      question:'كان ابناء عامة الشعب في اثينا يتوقفون عند التعليم الابتدائي ثم يتجهون الي بعض الصناعات للتكسب',
      options: ['صح',
     'خطأ',
     '', 
       ''],
      answer:  'صح',
    },
    {
      question:'كان الاثينيون يهملون تربية البنات قصدا ',
      options: ['صح',
     'خطأ',
     '', 
       ''],
      answer:  'صح',
    },
    {
      question:'هم طائفة من المثقفين الذين اجتذبتهم اثينا من جميع انحاء اليونان القديمة ',
      options: ['الفاطميين',
     'السوفسطائين',
     'الاموين', 
       'النحوين'],
      answer:   'السوفسطائين',
    },
    {
      question:'يعتبر ......او الفلاسفة الذين اتخذو موقفا بين التربية القديمة والتربيةالجديدة',
      options: ['سقراط',
     'ارسطو',
     'افلاطون', 
       'الامام الغزالي'],
      answer:  'سقراط',
    },
    {
      question:'الطريقة السقراطية يمر بها الطالب بثلاث مراتب متتابعة',
      options: ['الشك اليقين اليقين',
     'اليقين الشك اليقين',
     'الشك اليقين الشك', 
       'اليقين الشك الشك'],
      answer:  'اليقين الشك اليقين',
    },
    {
      question:'اهتم سقراط بالاساليب السفسطائية في التعليم',
      options: ['صح',
     'خطأ',
     '', 
       ''],
      answer:   'خطأ' ,
    },
    {
      question:'كان من الاسر الشريفة الطبقة الاستقراطية',
      options: ['ارسطو',
    'افلاطون',
    'الامام الغزالي', 
    'سقراط'],
      answer:  'افلاطون',
    },
    {
      question:'انحدر ارسطو   من اسرة استقارطية كان لها اثر في كارهية الديموقراطية',
      options: ['صح',
     'خطأ',
     '', 
       ''],
      answer:  'خطأ',
    },
    {
      question:'قال في نظرية المثل ان العالم الملاحظ المحسوس في تغير مستمر في صفاتة',
      options: ['افلاطون',
     'ارسطو',
     'الامام الغزالي', 
       'سقراط'],
      answer:  'افلاطون',
    },
    {
      question:'يري ....ان تربية البنات مماثلة لتربية البنين',
      options: ['سقراط',
     'افلاطون',
     'ارسطو', 
       'جميع ماسبق'],
      answer: 'افلاطون',
    },
    {
      question:'لقب بالمعلم الاول',
      options: ['ارسطو',
     'افلاطون',
     'سقراط', 
       'الامام الغزالي'],
      answer:  'ارسطو',
    },
    {
      question:'يري ....ان الحقائق ليست موجودة بالفعل في العقل حين يولد الانسان',
      options: ['ارسطو',
     'افلاطون',
     'الامام الغزالي', 
       'سقراط'],
      answer: 'ارسطو' ,
    },
    {
      question:'ذهب افلاطون الي الاتدجاة المثالي بينما اتجه ارسطو الي الواقع',
      options: ['صح',
     'خطأ',
     '', 
       ''],
      answer:  'صح',
    },
    {
      question:'لم تكن اراءارسطو ذات اثر بالغ في الفكر التربوي والفلسفات التربوية',
      options: ['صح',
     'خطأ',
     '', 
       ''],
      answer:  'خطأ',
    },
    {
      question:'التربية الاسبرطية كانت منتهي همها  هو العناية بامور الجماعة ',
      options: ['صح',
     'خطأ',
     '', 
       ''],
      answer:  'صح',
    },
    {
      question:'كانت تمثلان الهيئه الحاكمه في العصور الوسطي طبقة:',
      options: ['رجال الدين',
     'المحاربن من النبلاء والفرسان',
     'رجال الدين و المحاربين من النبالء والفرسان ', 
       'الفلاحين'],
      answer:   'رجال الدين و المحاربين من النبالء والفرسان ',
    },
    {
      question:'يعد نظام .... الذي حدد وضع طبقة المحاربين ونظم حياتهم العامة ',
      options: ['النظام الاقتصادي',
     'النظام السياسي',
     'النظام الديني', 
       'النظام الاقطاعي'],
      answer:  'النظام الاقطاعي',
    },
    {
      question:'يعد نظام ....حدد الاوضاع الاجتماعية والاقتصادية للفلاحين والعمال',
      options: ['النظام الاقتاصدي ',
     'النظام الديني',
     'النظام السنيوري او النظام السيادة', 
       'النظام الاقطاعي'],
      answer:  'النظام السنيوري او النظام السيادة',
    },
    {
      question:'لايوجد رباط وثيق يربط النظام الأقطاعي والنظام السنيوري في العصور الوسطي',
      options: ['خطأ',
     'صح',
     '', 
       ''],
      answer:  'خطأ',
    },
    {
      question:'في العصور الوسطي المرأة لم تتمتع بأي حق قبل زوجها',
      options: ['صح',
     'خطأ',
     '', 
       ''],
      answer:  'صح',
    },
    {
      question:'العامل الرئيسي الذي ادي الي مولد العصور الوسطي في القرن الحادي عشرهوا',
      options: ['احياء التجارة',
     'احياء الدين',
     'احياء الزراعة', 
       'احياء الصناعة'],
      answer:  'احياء التجارة',
    },
    {
      question:'الغرض من ارتباط تجار المدن في العصور الوسطي في هيئة النقابات ',
      options: ['الدفاع عن انقسهم ونهبهم من ناحية',
     'الاعتداء عليهم',
     'الهجوم ', 
       'نهبهم فقط'],
      answer:  'الدفاع عن انقسهم ونهبهم من ناحية',
    },
    {
      question:'اجمعت المراجع التاريخية   علي ان ...هيا البلد الاول الذي طبقت فيه المسيحية نظام العزلة والانقطاع للعبادة',
      options: ['مصر',
     'اثينا ',
     'اسبرطة', 
       'الشام'],
      answer:  'مصر',
    },
    {
      question:'الهدف لمدارس الاديرة والرهبنة نبذ الدنيا وهجرها بكل متاعها وامتعتها ',
      options: ['صح',
     'خطأ',
     '', 
       ''],
      answer:  'صح',
    },
    {
      question:'تعد هذة المدرسة فرصة التعليم الوحيد في الريف',
      options: ['مدرسة البلاط',
    'مدرسة الانشاد والغناء',
     'مدارس تربية الفرسان', 
       'مدارس الحوار الديني'],
      answer:  'مدرسة البلاط',
    },
    {
      question:'هدف مدرسة .....الي خلق نظام تربوي لتعليم الفرسان وتربية الرجل المهذب',
      options: ['مدارس الفروسية',
    'مدارس البلاط',
    'مدارس الحوار الديني', 
    'مدارس الانشاد والغناء'],
      answer:  'مدارس الفروسية',
    },
    {
      question:'لم تكن هناك حواجز طبقية تعوق الصبي من دخولها   ',
      options: ['مدارس النقابات الحرفية',
    'مدارس الحوار الديني',
    'مدارس المدن ', 
    'مدارس البلاط'],
      answer:  'مدارس النقابات الحرفية' ,
    },
    
    {
      question:'كان قيام .....اقصي قمة تعليمية في العصور الوسطي ',
      options: ['الجامعات',
    'المعاهد',
    'الكتاب', 
    'المعاهد المتوسطة'],
      answer:  'الجامعات',
    },
    
    {
      question:'تعد جامعة.....من اشهر جامعات العصور الوسطي',
      options: ['بولونيا',
    'عين شمس',
    'نبوليا', 
    'برونيا'],
      answer:  'بولونيا'  ,
    },
    
    {
      question:'اول من بعث الحركة المدرسية وقام بحركة احياء العلوم',
      options: ['شارلمان',
    'ابيلار',
    'ارسطو', 
    'افلاطون'],
      answer:  'شارلمان',
    },
    {
      question:'من الشخصيات الهامة في العصور الوسطى حيث استطاع أ يجمع حوله ألوف من التلاميذ',
      options: ['ابيلار',
    'ارسطو',
    'افلاطون', 
    'شارلمان'],
      answer:  'ابيلار',
    },
    
    
    
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      // Add event listener to change background color
      radio.addEventListener('click', () => {
        if (radio.checked && radio.value === questionData.answer) {
          radio.parentElement.style.backgroundColor = 'lightblue';
        } else if (radio.checked) {
          radio.parentElement.style.backgroundColor = 'pink';
        }
      });
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  
    // Change background color of the options container based on whether the selected option is correct or not
    if (currentQuestion > 0) {
      const selectedOption = document.querySelector('input[name="quiz"]:checked');
      if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === quizData[currentQuestion - 1].answer) {
          optionsElement.style.backgroundColor = 'lightblue';
        } else {
          optionsElement.style.backgroundColor = 'pink';
        }
      }
    }
  }
  // WITH TRUE OR FALSE









  
  // function displayQuestion() {
  //   const questionData = quizData[currentQuestion];
  
  //   const questionElement = document.createElement('div');
  //   questionElement.className = 'question';
  //   questionElement.innerHTML = questionData.question;
  
  //   const optionsElement = document.createElement('div');
  //   optionsElement.className = 'options';
  
  //   const shuffledOptions = [...questionData.options];
  //   shuffleArray(shuffledOptions);
  
  //   for (let i = 0; i < shuffledOptions.length; i++) {
  //     const option = document.createElement('label');
  //     option.className = 'option';
  
  //     const radio = document.createElement('input');
  //     radio.type = 'radio';
  //     radio.name = 'quiz';
  //     radio.value = shuffledOptions[i];
  
  //     const optionText = document.createTextNode(shuffledOptions[i]);
  
  //     option.appendChild(radio);
  //     option.appendChild(optionText);
  //     optionsElement.appendChild(option);
  //   }
  
  //   quizContainer.innerHTML = '';
  //   quizContainer.appendChild(questionElement);
  //   quizContainer.appendChild(optionsElement);
  // }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
  
      // If this is the last question, display the result
      if (currentQuestion === quizData.length - 1) {
        currentQuestion++;
        displayResult();
      } else {
        // Otherwise, move on to the next question
        currentQuestion++;
        displayQuestion();
      }
  
      selectedOption.checked = false;
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `الاجابات الصحيحه ${score} من ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>السؤال  :</strong> ${incorrectAnswers[i].question}<br>
          <strong>الاجابة الخاطئه:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>الاجابة الصحيحة:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>الاجابات الصحيحة ${score} من ${quizData.length}!</p>
      <p>تصحيح الاجابات :</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();