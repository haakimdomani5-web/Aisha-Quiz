// 1. تعريف الأسئلة (نفس بياناتك)
const questions = [
    {"question": "Qu’est-ce qu’une structure d’entreprise ?", "answers": ["Une stratégie commerciale", "La manière d’organiser le travail et les responsabilités", "Un document financier"], "correctAnswer": 1},
    {"question": "Quel est le rôle principal de la structure de l’entreprise ?", "answers": ["Augmenter les bénéfices", "Organiser les vacances des employés", "Clarifier les responsabilités et coordonner le travail"], "correctAnswer": 2},
    {"question": "Quel élément fait partie des composantes de la structure ?", "answers": ["Les règles et procédures", "Les clients", "Les fournisseurs"], "correctAnswer": 0},
    {"question": "Quel facteur influence le choix d’une structure ?", "answers": ["Le nom de l’entreprise", "La taille de l’entreprise", "La couleur du logo"], "correctAnswer": 1},
    {"question": "Une petite entreprise adopte généralement :", "answers": ["Une structure simple", "Une structure matricielle", "Une structure divisionnelle"], "correctAnswer": 0},
    {"question": "Dans une structure hiérarchique, chaque employé dépend de :", "answers": ["Deux responsables", "Un seul supérieur", "Aucun supérieur"], "correctAnswer": 1},
    {"question": "Quel est l’avantage de la structure hiérarchique ?", "answers": ["Très flexible", "Communication rapide", "Autorité claire"], "correctAnswer": 2},
    {"question": "La structure fonctionnelle organise l’entreprise selon :", "answers": ["Les pays", "Les produits", "Les fonctions (marketing, finance, RH…)"], "correctAnswer": 2},
    {"question": "Quel est le principal inconvénient de la structure fonctionnelle ?", "answers": ["Elle coûte cher", "Manque de communication entre services", "Trop de flexibilité"], "correctAnswer": 1},
    {"question": "Une structure matricielle combine :", "answers": ["Structure hiérarchique et structure fonctionnelle", "Structure commerciale et structure géographique", "Structure virtuelle et structure divisionnelle"], "correctAnswer": 0},
    {"question": "Dans la structure matricielle, un employé peut avoir :", "answers": ["Aucun responsable", "Deux responsables", "ثلاثة responsables"], "correctAnswer": 1},
    {"question": "La structure divisionnelle organise l’entreprise selon :", "answers": ["Les goûts du directeur", "Les produits, les régions ou les marchés", "L’âge des employés"], "correctAnswer": 1},
    {"question": "Quel est un avantage de la structure divisionnelle ?", "answers": ["Autonomie des divisions", "Simplicité", "Faible coût"], "correctAnswer": 0},
    {"question": "L’entreprise virtuelle fonctionne principalement grâce :", "answers": ["Aux outils numériques et au travail à distance", "Au travail manuel uniquement", "À l’absence de communication"], "correctAnswer": 0},
    {"question": "Quelle adaptation est nécessaire pour les entreprises virtuelles ?", "answers": ["Plus de niveaux hiérarchiques", "Plus de flexibilité et une bonne communication digitale", "Éliminer les technologies"], "correctAnswer": 1},
];

// 2. تعريف المتغيرات والحصول على عناصر الواجهة
let currentQuestionIndex = 0;
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const nextButton = document.getElementById('next-button');

// 3. دالة عرض السؤال
function displayQuestion() {
    // إخفاء زر "السؤال التالي"
    nextButton.classList.add('hidden');
    // مسح الأزرار القديمة
    answersContainer.innerHTML = ''; 

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;

        currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('answer-btn');
            // ربط الدالة checkAnswer بالزر عند الضغط عليه
            button.addEventListener('click', () => checkAnswer(button, index, currentQuestion.correctAnswer));
            answersContainer.appendChild(button);
        });
    } else {
        // نهاية اللعبة
        questionText.textContent = "لقد انتهت اللعبة!";
        answersContainer.innerHTML = '<p class="final-message">شكراً لمشاركتك!</p>';
    }
}

// 4. دالة فحص الإجابة (تطابق دالة فحص_جواب في Python)
function checkAnswer(clickedButton, selectedIndex, correctIndex) {
    const allButtons = answersContainer.querySelectorAll('.answer-btn');

    // تعطيل جميع الأزرار لمنع الضغط عليها مرة أخرى
    allButtons.forEach(btn => btn.classList.add('disabled'));

    if (selectedIndex === correctIndex) {
        // إجابة صحيحة (أخضر)
        clickedButton.classList.add('correct');
    } else {
        // إجابة خاطئة (أحمر)
        clickedButton.classList.add('incorrect');
        // تلوين الإجابة الصحيحة أيضاً بالأخضر ليراها المستخدم
        allButtons[correctIndex].classList.add('correct');
    }
    
    // إظهار زر الانتقال للسؤال التالي
    nextButton.classList.remove('hidden');
}

// 5. دالة الانتقال للسؤال التالي (تطابق دالة التالي في Python)
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// ربط زر "السؤال التالي" بالدالة
nextButton.addEventListener('click', nextQuestion);

// 6. تشغيل اللعبة عند تحميل الصفحة
displayQuestion();
