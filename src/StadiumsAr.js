const stadiums = [
    {
        name : "استاد البيت",
        full_img : "Albayt",

        head : "استمتع بحسن الضيافة العربية",
        capacity : "٦٨,٨٩٥",
        location : "مدينة الخور، على بُعد ٣٥ كم شمال وسط الدوحة",
        info_head : "استاد قطري فريد، ينافس أفضل الاستادات في العالم",
        info_text : ["تم اختيار استاد البيت لاستضافة المباراة الافتتاحية لكأس العالم FIFA ٢٠٢٢™ منذ الرسم التخطيطي الأول له. واعتمدت قطر على النسيج الغني لثقافتها من أجل الترحيب بالعالم، فدعت الزوّار للاستمتاع بالراحة التي اعتاد أن يوفرها هذا الجزء من العالم لضيوفه منذ قرون.  " , "تم إيلاء أهمية قصوى للاستدامة أثناء تطوير استاد البيت، حيث صُمّمت مقاعد الجزء العلوي من المدرجات بشكل قابل للتفكيك بعد انتهاء كأس العالم FIFA ٢٠٢٢™ للاستفادة منها في مشاريع أخرى.  ","ويمتد نهج الاستدامة من الاستاد إلى مدينة الخور المحيطة، حيث تحظى هذه المدينة بالعديد من المتنزهات والبحيرات إلى جانب محمية خضراء تشكل حزاماً ممتداً من الاستاد حتى البحر، ما يساهم في ترسيخ إرث دائم من الاستاد الأكثر ترحيباً في العالم."]
    },
    {
        name : "استاد لوسيل",
        full_img : "Lusail",

        head : "أيقونة مستقبلية قائمة على عراقة الماضي",
        capacity : "٨٨,٩٦٦",
        location : "مدينة لوسيل، على بُعد ٢٠ كم شمال الدوحة",
        info_head : "سيبهر التصميم الجريء والمستقبلي لهذا الاستاد مشجعي كرة القدم",
        info_text : ["يستضيف استاد لوسيل نهائي كأس العالم FIFA قطر ٢٠٢٢™، وهو الحدث الذي سيرسّخ مكانته في تاريخ كرة القدم والهندسة المعمارية. يتميّز الاستاد بمنظره المميز من حيث الحجم وروعة اللمسات الهندسية الفريدة، وقد بُني لينسجم مع محيطه بكل تناغم." , "استوحي تصميم هذا الاستاد الاستثنائي من تداخل الضوء والظل الذي يميّز الفنار العربي التقليدي أو الفانوس، كما يعكس هيكله وواجهته النقوش بالغة الدقة على أوعية الطعام، والأواني، وغيرها من القطع الفنية التي وجدت في أرجاء الوطن العربي والإسلامي خلال نهوض الحضارة في المنطقة. ومع مرور الوقت، سيتلاشى اللون الذهبي على الواجهة الخارجية ليحاكي ألوان الأواني المعدنية القديمة، محدّثاً بثقافة المنطقة وناطقاً بعراقة تاريخها. "]
    },
    {
        name : "استاد أحمد بن علي",
        full_img : "Ahmad",

        head : "صرح يحاكي الصحراء وكثبانها",
        capacity : "٤٥,٠٣٢",
        location : "أم الأفاعي، على بُعد ٢٠ كم غرب وسط الدوحة",
        info_head : "واجهة خارجية مذهلة على مشارف الصحراء، تروي قصة قطر",
        info_text : ["يقف استاد أحمد بن علي شامخاً في منطقة أم الأفاعي التي تعدّ أحد أعرق المدن القطرية وموطن نادي الريان الرياضي. وتقع المدينة على مشارف الصحراء، حيث انطلقت أجمل الحكايات القطرية التي تعيش في قلوب أهل المنطقة المعروفين بتمسّكهم بتاريخهم المذهل تماماً مثل حبّهم لكرة القدم.","تم استخدام أكثر من ٨٠% من مواد البناء من الاستاد الأصلي الذي كان يشغل الموقع سابقاً، في حين جرى الاحتفاظ بالأشجار المحيطة بالاستاد القديم بعناية. سيتمكّن المشجعون عند زيارتهم هذا الاستاد من التنقّل عبر نظام مترو الدوحة الجديد الصديق للبيئة – استكمالاً لتجربة مستدامة حقاً.  "]   
    },
    {
        name : "استاد الجنوب",
        full_img : "Aljanoub",

        head : "أبحر في رحلة عصرية مع كرة القدم",
        capacity : "٤٤,٣٢٥",
        location : "الوكرة، على بُعد ٢٢ كم شرق وسط الدوحة",
        info_head : "أسلوب عصري يشكل جسراً يربط الماضي بالحاضر، ورمزاً بصرياً قوياً لحرص قطر على التواصل مع العالم",
        info_text :["استوحي التصميم المبهر لهذا الاستاد من أشرعة المراكب التقليدية القطرية احتفاءً بتاريخ الوكرة العريق كمركز للصيد والبحث عن اللآلئ. فطوال قرون، أبحرت هذه المراكب الجميلة عبر مياه الخليج وما وراءها، وعادت محمّلة بخيرات البحر. " , "سيتم بعد انتهاء البطولة تخفيض سعة استاد الجنوب والتبرّع بالمقاعد لمشاريع رياضية أخرى في مختلف أنحاء العالم. كما سيحظى مشجعو نادي الوكرة الرياضي بالفرصة لعيش أجواءً حماسية للغاية خلال مباريات ناديهم المفضل في الاستاد. وفضلاً عن كرة القدم، تحيط بالاستاد حدائق رائعة تتميز بمرافق رياضية وترفيهية سيستفيد منها المجتمع لأعوام قادمة. مستقبل مشرق ينتظر هذا الاستاد المذهل. "]  
    },
    {
        name : "استاد الثمامة",
        full_img : "Thumama",

        head : "استاد مستوحى من الثقافة والتقاليد",
        capacity : "٤٤,٤٠٠",
        location : "الثمامة، على بُعد ١٢ كم جنوب وسط الدوحة",
        info_head : "يأسر تصميمه الساحر قلوب القطريين والشعوب من جميع أنحاء المنطقة",
        info_text :["يحتفي التصميم الديناميكي والرائع لاستاد الثمامة بالثقافة القطرية والعربية الغنية بقدر ما يحتفي بعصر جديد من التصميم. كما يحظى هذا الاستاد بأهمية كبرى منحته مكانة خاصة في قلوب المجتمع يتردّد صداها في جميع أنحاء المنطقة.","يحاكي تصميم استاد الثمامة الدائري شكل القحفية، وهو الاسم الذي تعرف به القبعة التقليدية التي يرتديها الرجال والأطفال في جميع أنحاء الوطن العربي. تُشكّل القحفية جزءاً أساسياً من ثقافتنا وتقاليدنا وترمز إلى انتقال الأولاد من مرحلة الطفولة إلى البلوغ. هنا تترسّخ الثقة بالنفس والطموح، وتُرسم الخطوات الأولى نحو المستقبل وتحقيق الأحلام. يشكّل كل ذلك مصدر إلهام مثالي لهذا الاستاد الفريد من نوعه. "]  
    },
    {
        name : "استاد المدينة التعليمية",
        full_img : "Education",
        head : "حيث تلتقي كرة القدم بالعلم والمعرفة",
        capacity : "٤٤,٦٦٧",
        location : "الريان، على بُعد ٧ كم شمال غرب وسط الدوحة",
        info_head : "قوة كرة القدم والمعرفة في مكان واحد",
        info_text :["استاد المدينة التعليمية هو استاد استثنائي يسلط الضوء على مكانة قطر المميّزة كمركز تعليمي ديناميكي للطلاب والأكاديميين في مختلف أنحاء الوطن العربي والعالم. وهو ببساطة مركز رائد للمعرفة والابتكار، كما يشير اسمه. تضم هذه المنطقة عدداً من الجامعات العالمية الرائدة التي تحفل بالاختراعات والابتكارات، بفضل تحلّي كل من فيها بأفكار جديدة وأبحاث متطورة تعكس المواهب المميّزة والابتكارات الرائعة.", "يتناغم تصميم الاستاد الحديث مع الهندسة المعمارية الإسلامية التقليدية. تحاكي المثلثات على الواجهة الخارجية أنماطاً هندسية معقدة تشبه الألماس، تشعّ وتتلألأ بحسب حركة الشمس. أما في الليل، فتُضاء الواجهة بأضواء مميزة لتمنح المشجعين فرصة الاطلاع على عرضاً فنياً في غاية الروعة."]  
    },
    {
        name : "استاد خليفة الدولي ",
        full_img : "Khalifa",

        head : "إطلالة جديدة، وتقنيات جديدة، وإرث جديد",
        capacity : "٤٥,٨٥٧",
        location : "أسباير، على بُعد ١١ كم غرب وسط الدوحة",
        info_head : "استاد أسطوري بحلة جديدة",
        info_text :["استضاف استاد خليفة الدولي قائمة طويلة من الفعاليات الرياضية التاريخية منذ إطلاقه عام ١٩٧٦. في الواقع، نادراً ما تُذكر كرة القدم أو ألعاب القوى في قطر دون الإشارة إلى هذا الاستاد الذي خضع لسلسة من عمليات التجديد والتغيير استعداداً لكأس العالم FIFA ٢٠٢٢™. وعند إعادة افتتاحه في مايو ٢٠١٧، استضاف الاستاد نهائي كأس الأمير، وهو الحدث الأقرب إلى قلوب جميع القطريين.","يعتبر القوسان المزدوجان اللذان يعانقان السماء من أهم مميزات الاستاد الجاذبة لعشاق كرة القدم وأكثرها شهرة. وقد أضيفت تحتهما مظلة واسعة، لتعمل بالتكامل مع نظام التبريد للحفاظ على درجة حرارة مريحة للاعبين والمشجعين.  "]  
    },
    {
        name : "استاد ٩٧٤",
        full_img : "974",
        head : "رمز الابتكار والاستدامة",
        capacity : "٤٤,٠٨٩",
        location : "راس أبو عبود، على بُعد ١٠ كم شرق وسط الدوحة",
        info_head : "رمز الابتكار والاستدامة ",
        info_text :["دخل استاد ٩٧٤ التاريخ قبل استضافة أول مباراة له. فقد بُني بالكامل من حاويات الشحن البحري ووحدات مستقلة من الصلب، وهو أول استاد كرة قدم مغطى قابل للتفكيك بالكامل – ما يشير إلى التزام قطر بالاستدامة الفعالة من حيث تكلفة الإنشاء وحداثة التصميم. ","يحتفي هذا المكان الفريد من نوعه بالإرث البحري والتجاري العريق لدولة قطر. ولا يشير الرقم ٩٧٤ فقط إلى رمز الاتصال الدولي الخاص بقطر، بل يرمز أيضاً إلى عدد حاويات الشحن البحري التي استُخدمت في بناء الاستاد. وهو يقع في منطقة الميناء قبالة المنظر الساحر للأبراج، حيث سيشعر المشجعون بالنسيم العليل القادم من الخليج العربي."]  
    },
]

export default stadiums