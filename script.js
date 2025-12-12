const stories = {
    a1: [
        { title: "Meine Familie", text: "Hallo! Ich heiße Anna. Ich bin zehn Jahre alt. Meine Familie ist groß. Mein Vater heißt Peter. Meine Mutter heißt Maria. Ich habe einen Bruder. Er heißt Tom. Tom ist acht Jahre alt. Wir wohnen in Berlin. Wir haben einen Hund. Der Hund heißt Max. Max ist sehr lieb." },
        { title: "Im Supermarkt", text: "Heute gehe ich in den Supermarkt. Ich kaufe Brot, Milch und Äpfel. Die Äpfel sind rot und lecker. Das Brot ist frisch. Die Milch kostet zwei Euro. Ich zahle an der Kasse. Die Verkäuferin ist sehr freundlich." },
        { title: "Mein Tag", text: "Ich stehe um sieben Uhr auf. Ich frühstücke um acht Uhr. Dann gehe ich zur Schule. Die Schule beginnt um neun Uhr. Um zwölf Uhr esse ich zu Mittag. Nach der Schule spiele ich mit Freunden. Am Abend sehe ich fern." },
        { title: "Das Wetter", text: "Heute ist es sonnig. Der Himmel ist blau. Es ist warm. Ich gehe in den Park. Im Park sind viele Kinder. Sie spielen Fußball. Ich spiele auch. Das macht Spaß. Später regnet es. Ich gehe nach Hause." },
        { title: "Mein Zimmer", text: "Mein Zimmer ist klein aber gemütlich. Ich habe ein Bett, einen Schreibtisch und einen Stuhl. An der Wand hängen Poster. Auf dem Schreibtisch liegen Bücher. Ich liebe mein Zimmer. Es ist mein Lieblingsort." },
        // ⬇️ ADD NEW A1 STORIES HERE ⬇️
        { title: "Meine Schule", text: "Meine Schule ist groß. Es gibt viele Klassenzimmer. Ich lerne Deutsch, Mathe und Englisch. Meine Lehrerin heißt Frau Schmidt. Sie ist sehr nett. In der Pause spiele ich mit meinen Freunden. Die Schule beginnt um acht Uhr. Um zwei Uhr gehe ich nach Hause. Ich mag meine Schule sehr." }
    ],
    a2: [
        { title: "Ein Wochenende in München", text: "Letztes Wochenende bin ich nach München gefahren. Ich habe den Englischen Garten besucht. Dort habe ich viele Menschen gesehen. Einige haben Sport gemacht, andere haben sich entspannt. Am Abend bin ich in ein Restaurant gegangen. Das Essen war ausgezeichnet. München ist eine schöne Stadt." },
        { title: "Mein Hobby", text: "Mein Hobby ist Fotografieren. Ich fotografiere gerne die Natur. Besonders mag ich Sonnenaufgänge und Sonnenuntergänge. Am Wochenende fahre ich oft aufs Land. Dort kann ich schöne Fotos machen. Manchmal zeige ich meine Fotos meinen Freunden. Sie finden sie sehr gut." },
        { title: "Die neue Wohnung", text: "Ich ziehe nächsten Monat um. Meine neue Wohnung hat zwei Zimmer. Sie liegt im dritten Stock. Die Wohnung ist hell und modern. Es gibt einen Balkon mit Blick auf den Park. Ich freue mich sehr auf den Umzug. Ich möchte neue Möbel kaufen." },
        { title: "Beim Arzt", text: "Gestern war ich beim Arzt. Ich hatte Halsschmerzen und Fieber. Der Arzt hat mich untersucht. Er hat mir Medikamente verschrieben. Ich muss viel trinken und mich ausruhen. In einer Woche habe ich einen Kontrolltermin. Ich hoffe, dass ich bald gesund werde." },
        { title: "Urlaubspläne", text: "Diesen Sommer möchte ich nach Spanien fahren. Ich plane, zwei Wochen am Meer zu verbringen. Ich werde schwimmen, in der Sonne liegen und neue Leute kennenlernen. Ich möchte auch die spanische Küche probieren. Ich kann es kaum erwarten!" },
        // ⬇️ ADD NEW A2 STORIES HERE ⬇️
        { title: "Im Restaurant", text: "Gestern Abend war ich mit Freunden im Restaurant. Wir haben einen Tisch am Fenster bekommen. Die Kellnerin war sehr freundlich und hilfsbereit. Ich habe Schnitzel mit Kartoffeln bestellt. Das Essen schmeckte fantastisch. Zum Nachtisch gab es Apfelstrudel. Wir haben lange geredet und gelacht. Es war ein schöner Abend." }
    ],
    b1: [
        { title: "Berufswahl", text: "Die Wahl des richtigen Berufs ist eine wichtige Entscheidung. Man sollte seine Interessen und Fähigkeiten berücksichtigen. Ich interessiere mich für Technologie und Computer. Deshalb möchte ich Informatik studieren. Meine Eltern unterstützen meine Entscheidung. Sie meinen, dass es wichtig ist, einen Beruf zu wählen, der einem Freude bereitet. Nach dem Studium möchte ich in einem internationalen Unternehmen arbeiten." },
        { title: "Umweltschutz im Alltag", text: "Umweltschutz beginnt im Alltag. Es gibt viele einfache Möglichkeiten, die Umwelt zu schützen. Man kann öffentliche Verkehrsmittel benutzen statt Auto zu fahren. Beim Einkaufen sollte man auf Plastiktüten verzichten. Außerdem ist es wichtig, Müll zu trennen und zu recyceln. Jeder kleine Schritt hilft, unsere Umwelt zu bewahren. Wenn wir alle zusammenarbeiten, können wir einen großen Unterschied machen." },
        { title: "Leben in der Großstadt", text: "Das Leben in einer Großstadt hat Vor- und Nachteile. Einerseits gibt es viele kulturelle Angebote wie Theater, Museen und Konzerte. Die Infrastruktur ist gut entwickelt. Andererseits sind die Lebenshaltungskosten hoch. Es gibt viel Verkehr und Lärm. Trotzdem entscheiden sich viele junge Menschen für das Stadtleben, weil dort mehr berufliche Möglichkeiten existieren." },
        { title: "Digitalisierung und Bildung", text: "Die Digitalisierung verändert unser Bildungssystem grundlegend. Immer mehr Schulen nutzen digitale Medien im Unterricht. Schüler können online lernen und auf umfangreiche Ressourcen zugreifen. Dies bietet neue Chancen, stellt aber auch Herausforderungen dar. Lehrer müssen sich weiterbilden. Nicht alle Familien haben Zugang zu notwendiger Technologie. Es ist wichtig, dass niemand zurückgelassen wird." },
        { title: "Gesunde Ernährung", text: "Gesunde Ernährung ist entscheidend für unser Wohlbefinden. Man sollte viel Obst und Gemüse essen. Vollkornprodukte sind besser als Weißmehlprodukte. Es ist ratsam, weniger Zucker und Salz zu konsumieren. Regelmäßige Mahlzeiten sind wichtiger als ständiges Snacken. Außerdem sollte man ausreichend Wasser trinken. Eine ausgewogene Ernährung kombiniert mit Sport führt zu einem gesünderen Leben." },
        // ⬇️ ADD NEW B1 STORIES HERE ⬇️
        { title: "Soziale Medien", text: "Soziale Medien sind aus unserem Leben nicht mehr wegzudenken. Sie ermöglichen es uns, mit Freunden und Familie in Kontakt zu bleiben, unabhängig von der Entfernung. Gleichzeitig gibt es auch Nachteile. Viele Menschen verbringen zu viel Zeit online und vernachlässigen persönliche Kontakte. Datenschutz ist ebenfalls ein wichtiges Thema. Man sollte bewusst mit sozialen Medien umgehen und die Balance zwischen Online- und Offline-Leben finden." }
    ]
};

const translationDict = {
    'Hallo': { en: 'Hello', ar: 'مرحبا' }, 'Ich': { en: 'I', ar: 'أنا' }, 'heiße': { en: 'am called', ar: 'اسمي' },
    'bin': { en: 'am', ar: 'أنا' }, 'Jahre': { en: 'years', ar: 'سنوات' }, 'alt': { en: 'old', ar: 'عمري' },
    'Meine': { en: 'My', ar: 'عائلتي' }, 'Familie': { en: 'Family', ar: 'عائلة' }, 'ist': { en: 'is', ar: 'هو/هي' },
    'groß': { en: 'big/large', ar: 'كبير' }, 'Vater': { en: 'Father', ar: 'أب' }, 'Mutter': { en: 'Mother', ar: 'أم' },
    'Bruder': { en: 'Brother', ar: 'أخ' }, 'haben': { en: 'have', ar: 'لديهم' }, 'wohnen': { en: 'live', ar: 'نعيش' }
};

let currentUser = null;
let selectedLevel = null;
let currentStory = null;
let currentWord = null;
let fontSize = 18;
let langMode = 'both';
let vocabulary = [];

// Auth Functions
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function selectLevel(level) {
    selectedLevel = level;
    document.querySelectorAll('.level-card').forEach(card => card.classList.remove('selected'));
    event.target.closest('.level-card').classList.add('selected');
}

function login() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        alert('Please enter email and password');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('germanAppUsers')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        loadApp();
    } else {
        alert('Invalid email or password');
    }
}

function signup() {
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    
    if (!name || !email || !password) {
        alert('Please fill all fields');
        return;
    }
    
    if (!selectedLevel) {
        alert('Please select your level');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('germanAppUsers')) || [];
    
    if (users.find(u => u.email === email)) {
        alert('Email already exists');
        return;
    }
    
    const newUser = {
        name: name,
        email: email,
        password: password,
        level: selectedLevel,
        storiesRead: [],
        vocabulary: [],
        streak: 0,
        lastLogin: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('germanAppUsers', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    loadApp();
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    document.getElementById('mainApp').style.display = 'none';
    document.getElementById('authPage').style.display = 'flex';
    closeUserMenu();
}

function loadApp() {
    document.getElementById('authPage').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    
    updateUserProfile();
    renderUserStories();
    updateStats();
    vocabulary = currentUser.vocabulary || [];
    renderVocab();
}

function updateUserProfile() {
    const initial = currentUser.name.charAt(0).toUpperCase();
    document.getElementById('userAvatar').textContent = initial;
    document.getElementById('userAvatarLarge').textContent = initial;
    document.getElementById('userName').textContent = currentUser.name.split(' ')[0];
    document.getElementById('userNameMenu').textContent = currentUser.name;
    document.getElementById('userEmailMenu').textContent = currentUser.email;
    document.getElementById('welcomeName').textContent = currentUser.name.split(' ')[0];
    
    const levelBadge = currentUser.level.toUpperCase();
    document.getElementById('userLevelBadge').textContent = levelBadge;
    
    const levelInfo = {
        a1: { icon: '🌱', title: 'A1 - Beginner', desc: 'Start your German learning journey' },
        a2: { icon: '🌿', title: 'A2 - Elementary', desc: 'Build on your basics' },
        b1: { icon: '🌳', title: 'B1 - Intermediate', desc: 'Advance your skills' }
    };
    
    const info = levelInfo[currentUser.level];
    document.getElementById('currentLevelIcon').textContent = info.icon;
    document.getElementById('currentLevelTitle').textContent = info.title;
    document.getElementById('currentLevelDesc').textContent = info.desc;
}

function renderUserStories() {
    const container = document.getElementById('userStories');
    const levelStories = stories[currentUser.level];
    
    container.innerHTML = levelStories.map((story, idx) => `
        <div class="story-card" onclick="openStory('${currentUser.level}', ${idx})">
            <h3>${story.title}</h3>
            <p>${story.text.substring(0, 80)}...</p>
        </div>
    `).join('');
}

function updateStats() {
    document.getElementById('storiesRead').textContent = currentUser.storiesRead?.length || 0;
    document.getElementById('wordsLearned').textContent = currentUser.vocabulary?.length || 0;
    document.getElementById('streak').textContent = currentUser.streak || 0;
}

function toggleUserMenu() {
    document.getElementById('userMenu').classList.toggle('show');
}

function closeUserMenu() {
    document.getElementById('userMenu').classList.remove('show');
}

function showLevelChange() {
    const newLevel = prompt('Choose your level: a1, a2, or b1');
    if (newLevel && ['a1', 'a2', 'b1'].includes(newLevel.toLowerCase())) {
        currentUser.level = newLevel.toLowerCase();
        updateUserInStorage();
        updateUserProfile();
        renderUserStories();
        closeUserMenu();
    }
}

function showStats() {
    alert(`Your Progress:\n\nStories Read: ${currentUser.storiesRead?.length || 0}\nWords Learned: ${currentUser.vocabulary?.length || 0}\nDay Streak: ${currentUser.streak || 0}`);
    closeUserMenu();
}

function updateUserInStorage() {
    const users = JSON.parse(localStorage.getItem('germanAppUsers')) || [];
    const index = users.findIndex(u => u.email === currentUser.email);
    if (index !== -1) {
        users[index] = currentUser;
        localStorage.setItem('germanAppUsers', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
}

// Story Functions
function openStory(level, index) {
    currentStory = stories[level][index];
    document.getElementById('homeView').style.display = 'none';
    document.getElementById('readingView').style.display = 'block';
    document.getElementById('storyTitle').textContent = currentStory.title;
    
    const words = currentStory.text.split(/\s+/);
    const content = words.map((word) => {
        const cleanWord = word.replace(/[.,!?;:]/g, '');
        return `<span class="word" onclick="translateWord('${cleanWord}', event)">${word}</span>`;
    }).join(' ');
    
    document.getElementById('textContent').innerHTML = content;
    updateFontSize();
    
    if (!currentUser.storiesRead) currentUser.storiesRead = [];
    if (!currentUser.storiesRead.includes(currentStory.title)) {
        currentUser.storiesRead.push(currentStory.title);
        updateUserInStorage();
        updateStats();
    }
}

function goHome() {
    document.getElementById('homeView').style.display = 'block';
    document.getElementById('readingView').style.display = 'none';
    currentStory = null;
    closePopup();
    
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    
    document.querySelectorAll('.word.clicked').forEach(word => {
        word.classList.remove('clicked');
    });
}

// Translation Functions
async function translateWord(word, event) {
    if (!word || word.trim() === '') return;
    
    currentWord = word;
    document.getElementById('popupWord').textContent = word;
    document.getElementById('englishTrans').textContent = 'Loading...';
    document.getElementById('arabicTrans').textContent = 'جاري التحميل...';
    
    const popup = document.getElementById('translationPopup');
    const rect = event.target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    let left = rect.left + scrollLeft;
    let top = rect.bottom + scrollTop + 10;
    
    popup.style.display = 'block';
    const popupRect = popup.getBoundingClientRect();
    
    if (left + popupRect.width > window.innerWidth) {
        left = window.innerWidth - popupRect.width - 20;
    }
    if (left < 10) left = 10;
    
    const popupBottom = top + popupRect.height;
    const viewportBottom = window.innerHeight + scrollTop;
    
    if (popupBottom > viewportBottom) {
        top = rect.top + scrollTop - popupRect.height - 10;
    }
    
    if (top < scrollTop + 10) {
        top = scrollTop + 10;
    }
    
    popup.style.left = left + 'px';
    popup.style.top = top + 'px';
    popup.classList.add('show');
    document.getElementById('overlay').classList.add('show');
    
    document.querySelectorAll('.word.clicked').forEach(w => w.classList.remove('clicked'));
    event.target.classList.add('clicked');
    
    let enTrans, arTrans;
    
    if (translationDict[word]) {
        enTrans = translationDict[word].en;
        arTrans = translationDict[word].ar;
        document.getElementById('englishTrans').textContent = enTrans;
        document.getElementById('arabicTrans').textContent = arTrans;
        addToVocab(word, enTrans, arTrans);
    } else {
        try {
            const translations = await Promise.all([
                translate(word, 'en'),
                translate(word, 'ar')
            ]);
            enTrans = translations[0];
            arTrans = translations[1];
            document.getElementById('englishTrans').textContent = enTrans;
            document.getElementById('arabicTrans').textContent = arTrans;
            addToVocab(word, enTrans, arTrans);
        } catch (error) {
            console.error('Translation error:', error);
            document.getElementById('englishTrans').textContent = 'Translation unavailable';
            document.getElementById('arabicTrans').textContent = 'الترجمة غير متاحة';
        }
    }
}

async function translate(text, target) {
    const targetLang = target === 'ar' ? 'ar' : 'en';
    const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data && data[0] && data[0][0] && data[0][0][0]) {
            return data[0][0][0];
        }
        
        const fallbackUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=de|${targetLang}`;
        const fallbackResponse = await fetch(fallbackUrl);
        const fallbackData = await fallbackResponse.json();
        
        if (fallbackData.responseData && fallbackData.responseData.translatedText) {
            return fallbackData.responseData.translatedText;
        }
        
        return target === 'ar' ? 'غير متاح' : 'Unavailable';
    } catch (error) {
        console.error('Translation API error:', error);
        return target === 'ar' ? 'غير متاح' : 'Unavailable';
    }
}

function addToVocab(word, en, ar) {
    if (!vocabulary.find(v => v.word.toLowerCase() === word.toLowerCase())) {
        vocabulary.push({ word: word, en: en, ar: ar, date: new Date().toISOString() });
        currentUser.vocabulary = vocabulary;
        updateUserInStorage();
        renderVocab();
        updateStats();
    }
}

function renderVocab() {
    const container = document.getElementById('vocabItems');
    if (!container) return;
    
    if (vocabulary.length === 0) {
        container.innerHTML = '<p class="loading">No words saved yet</p>';
        return;
    }
    
    container.innerHTML = vocabulary.slice().reverse().map(v => `
        <div class="vocab-item">
            <div class="vocab-word">${v.word}</div>
            <div class="vocab-trans">🇬🇧 ${v.en}</div>
            <div class="vocab-trans">🇸🇦 ${v.ar}</div>
        </div>
    `).join('');
}

function clearVocab() {
    if (confirm('Clear all vocabulary?')) {
        vocabulary = [];
        currentUser.vocabulary = [];
        updateUserInStorage();
        renderVocab();
        updateStats();
    }
}

// Audio Functions
let germanVoices = [];

function loadVoices() {
    return new Promise((resolve) => {
        let voices = window.speechSynthesis.getVoices();
        
        if (voices.length > 0) {
            germanVoices = voices.filter(voice => 
                voice.lang.includes('de') || 
                voice.lang.includes('DE')
            );
            resolve(germanVoices);
        } else {
            window.speechSynthesis.onvoiceschanged = () => {
                voices = window.speechSynthesis.getVoices();
                germanVoices = voices.filter(voice => 
                    voice.lang.includes('de') || 
                    voice.lang.includes('DE')
                );
                resolve(germanVoices);
            };
        }
    });
}

function showVoiceSelector() {
    loadVoices().then(() => {
        if (germanVoices.length === 0) {
            alert('No German voices found on this device.\n\nTry:\n- Chrome browser (best support)\n- Safari on iPhone\n- Install language pack in device settings');
            closeUserMenu();
            return;
        }
        
        const voiceNames = germanVoices.map((v, i) => `${i + 1}. ${v.name}`).join('\n');
        const selection = prompt(`Available German Voices:\n\n${voiceNames}\n\nEnter number (1-${germanVoices.length}) or press Cancel:`);
        
        if (selection) {
            const index = parseInt(selection) - 1;
            if (index >= 0 && index < germanVoices.length) {
                localStorage.setItem('preferredVoiceIndex', index);
                alert(`Voice changed to: ${germanVoices[index].name}`);
            } else {
                alert('Invalid selection');
            }
        }
        closeUserMenu();
    });
}

function getBestGermanVoice() {
    if (germanVoices.length === 0) {
        const allVoices = window.speechSynthesis.getVoices();
        germanVoices = allVoices.filter(voice => 
            voice.lang.includes('de') || 
            voice.lang.includes('DE')
        );
    }
    
    // Check for user's preferred voice
    const preferredIndex = localStorage.getItem('preferredVoiceIndex');
    if (preferredIndex !== null) {
        const index = parseInt(preferredIndex);
        if (germanVoices[index]) {
            return germanVoices[index];
        }
    }
    
    // Priority order for best German voices
    const priorities = [
        'Google Deutsch',
        'Microsoft Stefan',
        'Microsoft Hedda',
        'Anna',
        'de-DE',
        'de_DE',
        'German'
    ];
    
    for (let priority of priorities) {
        const voice = germanVoices.find(v => 
            v.name.includes(priority) || v.lang.includes(priority)
        );
        if (voice) return voice;
    }
    
    // Return first German voice if available
    return germanVoices[0] || null;
}

function speakWord() {
    if (!currentWord) {
        alert('No word selected');
        return;
    }
    
    if (!('speechSynthesis' in window)) {
        alert('Speech not supported on this device. Try Chrome or Safari.');
        return;
    }
    
    // Stop any ongoing speech
    window.speechSynthesis.cancel();
    
    setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(currentWord);
        utterance.lang = 'de-DE';
        utterance.rate = 0.75;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        
        const voice = getBestGermanVoice();
        if (voice) {
            utterance.voice = voice;
            console.log('Using voice:', voice.name);
        }
        
        utterance.onerror = (e) => {
            console.error('Speech error:', e);
            // Try again without voice selection
            const retryUtterance = new SpeechSynthesisUtterance(currentWord);
            retryUtterance.lang = 'de-DE';
            retryUtterance.rate = 0.75;
            window.speechSynthesis.speak(retryUtterance);
        };
        
        utterance.onstart = () => {
            console.log('Speech started');
        };
        
        utterance.onend = () => {
            console.log('Speech ended');
        };
        
        window.speechSynthesis.speak(utterance);
    }, 150);
}

function playFullStory() {
    if (!currentStory) {
        alert('No story selected');
        return;
    }
    
    if (!('speechSynthesis' in window)) {
        alert('Speech not supported on this device. Try Chrome or Safari.');
        return;
    }
    
    // Stop any ongoing speech
    window.speechSynthesis.cancel();
    
    setTimeout(() => {
        // Split into smaller chunks for better mobile performance
        const sentences = currentStory.text.match(/[^.!?]+[.!?]+/g) || [currentStory.text];
        let currentIndex = 0;
        
        function speakNextSentence() {
            if (currentIndex >= sentences.length) {
                console.log('Story playback complete');
                return;
            }
            
            const sentence = sentences[currentIndex].trim();
            if (!sentence) {
                currentIndex++;
                speakNextSentence();
                return;
            }
            
            const utterance = new SpeechSynthesisUtterance(sentence);
            utterance.lang = 'de-DE';
            utterance.rate = 0.8;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;
            
            const voice = getBestGermanVoice();
            if (voice) {
                utterance.voice = voice;
            }
            
            utterance.onend = () => {
                currentIndex++;
                // Small delay between sentences
                setTimeout(speakNextSentence, 300);
            };
            
            utterance.onerror = (e) => {
                console.error('Speech error:', e);
                currentIndex++;
                speakNextSentence();
            };
            
            window.speechSynthesis.speak(utterance);
        }
        
        speakNextSentence();
    }, 150);
}

function stopAudio() {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
        console.log('Audio stopped');
    }
}

// UI Functions
function closePopup() {
    const popup = document.getElementById('translationPopup');
    const overlay = document.getElementById('overlay');
    
    if (popup) {
        popup.classList.remove('show');
        popup.style.display = 'none';
    }
    
    if (overlay) {
        overlay.classList.remove('show');
    }
    
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
}

function closeAll() {
    closePopup();
    closeVocab();
    closeUserMenu();
    
    // Make sure overlay is hidden
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.classList.remove('show');
    }
}

function toggleVocab() {
    const vocabList = document.getElementById('vocabList');
    const overlay = document.getElementById('overlay');
    
    closeUserMenu(); // Close user menu if open
    
    if (vocabList.classList.contains('show')) {
        vocabList.classList.remove('show');
        overlay.classList.remove('show');
    } else {
        vocabList.classList.add('show');
        overlay.classList.add('show');
    }
}

function closeVocab() {
    const vocabList = document.getElementById('vocabList');
    if (vocabList) {
        vocabList.classList.remove('show');
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

function changeFontSize(delta) {
    fontSize += delta;
    fontSize = Math.max(14, Math.min(fontSize, 32));
    updateFontSize();
}

function updateFontSize() {
    const textContent = document.getElementById('textContent');
    if (textContent) {
        textContent.style.fontSize = fontSize + 'px';
    }
    const fontDisplay = document.getElementById('fontSizeDisplay');
    if (fontDisplay) {
        fontDisplay.textContent = fontSize + 'px';
    }
}

function setLangMode(mode) {
    langMode = mode;
    
    document.querySelectorAll('.lang-toggle button').forEach(btn => btn.classList.remove('active'));
    const btnId = 'btn' + mode.charAt(0).toUpperCase() + mode.slice(1);
    const activeBtn = document.getElementById(btnId);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    const englishSection = document.getElementById('englishSection');
    const arabicSection = document.getElementById('arabicSection');
    
    if (mode === 'english') {
        if (englishSection) englishSection.style.display = 'block';
        if (arabicSection) arabicSection.style.display = 'none';
    } else if (mode === 'arabic') {
        if (englishSection) englishSection.style.display = 'none';
        if (arabicSection) arabicSection.style.display = 'block';
    } else {
        if (englishSection) englishSection.style.display = 'block';
        if (arabicSection) arabicSection.style.display = 'block';
    }
    
    localStorage.setItem('langMode', mode);
}

// Initialize
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

const savedLangMode = localStorage.getItem('langMode');
if (savedLangMode) {
    langMode = savedLangMode;
}

// Load voices on page load
loadVoices().then(() => {
    console.log('German voices loaded:', germanVoices.length);
    if (germanVoices.length > 0) {
        console.log('Available German voices:', germanVoices.map(v => v.name));
    }
});

// Check for saved user
const savedUser = localStorage.getItem('currentUser');
if (savedUser) {
    currentUser = JSON.parse(savedUser);
    loadApp();
    if (savedLangMode) setLangMode(savedLangMode);
}
