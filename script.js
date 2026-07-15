const DEFAULT_BG_IMAGE = "url('https://raw.githubusercontent.com/44471-cyber/Numberle/main/background%20image.png')";
const DARK_MODE_IMAGE  = "url('https://raw.githubusercontent.com/44471-cyber/Numberle/refs/heads/main/background%20image%20(dark%20mode).png')"
const TRANSLATIONS = {
    en: {
        subtitle:    "Guess the 5-digit number!",
        placeholder: "Enter 5 numbers",
        guessBtn:    "Guess",
        retryBtn:    "Retry",
        empty:       "Do not enter an empty space.",
        invalid:     "Enter exactly 5 numbers.",
        win:         "You win!",
        gameover:    "Game Over! Number was: ",
        langBtn:     "Language",
        chooseLang:  "Choose a Language",
        closeBtn:    "\u2715 Close",
        closeTheme:  "\u2715 Close",
        darkBtn:     "Dark mode",
        lightBtn:    "Light mode"
    },
    pt: {
        subtitle:    "Adivinhe o n\u00famero de 5 d\u00edgitos!",
        placeholder: "Escreva 5 n\u00fameros",
        guessBtn:    "Adivinhar",
        retryBtn:    "Recome\u00e7ar",
        empty:       "N\u00e3o escrevas um espa\u00e7o vazio.",
        invalid:     "Escreva exatamente 5 n\u00fameros.",
        win:         "Ganhaste!",
        gameover:    "Fim do jogo! O n\u00famero era: ",
        langBtn:     "Idioma",
        chooseLang:  "Escolha um Idioma",
        closeBtn:    "\u2715 Fechar",
        closeTheme:    "\u2715 Fechar",
        darkBtn:     "Modo escuro",
        lightBtn:    "Modo claro"
    },
    es: {
        subtitle:    "\u00a1Adivina el numero de 5 digitos!",
        placeholder: "Escribe 5 n\u00fameros",
        guessBtn:    "Adivinar",
        retryBtn:    "Reintentar",
        empty:       "No dejes el espacio vac\u00edo.",
        invalid:     "Escribe exactamente 5 n\u00fameros.",
        win:         "\u00a1Ganaste!",
        gameover:    "Juego terminado! El n\u00famero era: ",
        langBtn:     "Idioma",
        chooseLang:  "Elege un Idioma",
        closeBtn:    "\u2715 Cerrar",
        closeTheme:  "\u2715 Cerrar",
        darkBtn:     "Modo oscuro",
        lightBtn:    "Modo de luz"
    },
    fr: {
        subtitle:    "Devinez le nombre \u00e0 5 chiffres!",
        placeholder: "Saisir 5 chiffres",
        guessBtn:    "Deviner",
        retryBtn:    "R\u00e9essayer",
        empty:       "Ne laissez pas le champ vide.",
        invalid:     "Entrez exactement 5 chiffres.",
        win:         "Vous avez gagn\u00e9!",
        gameover:    "Partie termin\u00e9e! Le nombre \u00e9tait: ",
        langBtn:     "Langue",
        chooseLang:  "Choisissez une langue",
        closeBtn:    "\u2715 Fermer",
        closeTheme:  "\u2715 Fermer",
        darkBtn:     "Mode sombre",
        lightBtn:    "Mode lumi\u00e8re"
    },
    de: {
        subtitle:    "Errate die 5-stellige Zahl!",
        placeholder: "5 Ziffern eingeben",
        guessBtn:    "Raten",
        retryBtn:    "Nochmal",
        empty:       "Kein leeres Feld eingeben.",
        invalid:     "Bitte genau 5 Ziffern eingeben.",
        win:         "Du hast gewonnen!",
        gameover:    "Spiel vorbei! Die Zahl war: ",
        langBtn:     "Sprache",
        chooseLang:  "Sprache w\u00e4hlen",
        closeBtn:    "\u2715 Schlie\u00dfen",
        closeTheme:  "\u2715 Schlie\u00dfen",
        darkBtn:     "Dunkler modus",
        lightBtn:    "Licht modus"
    },
    it: {
        subtitle:    "Indovina il numero a 5 cifre!",
        placeholder: "Inserisci 5 numeri",
        guessBtn:    "Indovina",
        retryBtn:    "Riprova",
        empty:       "Non lasciare il campo vuoto.",
        invalid:     "Inserisci esattamente 5 numeri.",
        win:         "Hai vinto!",
        gameover:    "Partita finita! Il numero era: ",
        langBtn:     "Lingua",
        chooseLang:  "Scegli Lingua",
        closeBtn:    "\u2715 Chiudi",
        closeTheme:  "\u2715 Chiudi",
        darkBtn:     "Modalit\u00e0 oscura",
        lightBtn:    "Modalit\u00e0 luce"
    },
    nl: {
        subtitle:    "Raad het 5-cijferige getal!",
        placeholder: "5 cijfers invoeren",
        guessBtn:    "Raden",
        retryBtn:    "Opnieuw",
        empty:       "Voer geen leeg veld in.",
        invalid:     "Voer precies 5 cijfers in.",
        win:         "Je hebt gewonnen!",
        gameover:    "Game over! Het getal was: ",
        langBtn:     "Taal",
        chooseLang:  "Kies Taal",
        closeBtn:    "\u2715 Sluiten",
        closeTheme:  "\u2715 Sluiten",
        darkBtn:     "Donkere modus",
        lightBtn:    "Lichte modus"
    },
    pl: {
        subtitle:    "Zgadnij 5-cyfrow\u0105 liczb\u0119!",
        placeholder: "Wpisz 5 cyfr",
        guessBtn:    "Zgadnij",
        retryBtn:    "Spr\u00f3buj ponownie",
        empty:       "Nie wpisuj pustego pola.",
        invalid:     "Wpisz dok\u0142adnie 5 cyfr.",
        win:         "Wygra\u0142e\u015b!",
        gameover:    "Koniec gry! Liczba to: ",
        langBtn:     "J\u0119zyk",
        chooseLang:  "Wybierz J\u0119zyk",
        closeBtn:    "\u2715 Zamknij",
        closeTheme:  "\u2715 Zamknij",
        darkBtn:     "Dark Mode",
        lightBtn:    "Light Mode"
    },
    bg: {
        subtitle:    "\u041f\u043e\u0437\u043d\u0430\u0439 5-\u0446\u0438\u0444\u0440\u0435\u043d\u043e\u0442\u043e \u0447\u0438\u0441\u043b\u043e!",
        placeholder: "\u0412\u044a\u0432\u0435\u0434\u0435\u0442\u0435 5 \u0447\u0438\u0441\u043b\u0430",
        guessBtn:    "\u041f\u043e\u0437\u043d\u0430\u0439\u0442\u0435",
        retryBtn:    "\u041e\u043f\u0438\u0442\u0430\u0439\u0442\u0435 \u043e\u0442\u043d\u043e\u0432\u043e",
        empty:       "\u041d\u0435 \u0432\u043b\u0438\u0437\u0430\u0439\u0442\u0435 \u0432 \u043f\u0440\u0430\u0437\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e.",
        invalid:     "\u0412\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u0442\u043e\u0447\u043d\u043e 5 \u0447\u0438\u0441\u043b\u0430.",
        win:         "\u0412\u0438\u0435 \u043f\u0435\u0447\u0435\u043b\u0438\u0442\u0435!",
        gameover:    "\u041a\u0440\u0430\u0439 \u043d\u0430 \u0438\u0433\u0440\u0430\u0442\u0430! \u041d\u043e\u043c\u0435\u0440\u044a\u0442 \u0431\u0435\u0448\u0435: ",
        langBtn:     "\u0415\u0437\u0438\u043a",
        chooseLang:  "\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0435\u0437\u0438\u043a",
        closeBtn:    "\u2715 \u0417\u0430\u0442\u0432\u043e\u0440\u0435\u0442\u0435",
        closeTheme:  "\u2715 \u0417\u0430\u0442\u0432\u043e\u0440\u0435\u0442\u0435",
        darkBtn:     "\u0422\u044a\u043c\u0435\u043d \u0440\u0435\u0436\u0438\u043c",
        lightBtn:    "\u041b\u0435\u043a \u0440\u0435\u0436\u0438\u043c"
    },
    ru: {
        subtitle:    "\u0423\u0433\u0430\u0434\u0430\u0439\u0442\u0435 \u043f\u044f\u0442\u0438\u0437\u043d\u0430\u0447\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e!",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 5 \u0446\u0438\u0444\u0440",
        guessBtn:    "\u0423\u0433\u0430\u0434\u0430\u0442\u044c",
        retryBtn:    "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c",
        empty:       "\u041d\u0435 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043f\u043e\u043b\u0435 \u043f\u0443\u0441\u0442\u044b\u043c.",
        invalid:     "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u043e\u0432\u043d\u043e 5 \u0446\u0438\u0444\u0440.",
        win:         "\u0412\u044b \u0432\u044b\u0438\u0433\u0440\u0430\u043b\u0438!",
        gameover:    "\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430! \u0427\u0438\u0441\u043b\u043e \u0431\u044b\u043b\u043e: ",
        langBtn:     "\u042f\u0437\u044b\u043a",
        chooseLang:  "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044f\u0437\u044b\u043a",
        closeBtn:    "\u2715 \u0417\u0430\u043a\u0440\u044b\u0442\u044c",
        closeTheme:  "\u2715 \u0417\u0430\u043a\u0440\u044b\u0442\u044c",
        darkBtn:     "\u0422\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c",
        lightBtn:    "\u0421\u0432\u0435\u0442\u043b\u044b\u0439 \u0440\u0435\u0436\u0438\u043c"
    },
    vn: {
        subtitle:    "\u0110o\u00e1n xem \u0111\u00f3 l\u00e1 s\u1ed1 c\u00f3 5 ch\u1eef s\u1ed1!",
        placeholder: "Nh\u1eadp 5 s\u1ed1",
        guessBtn:    "\u0110o\u00e1n",
        retryBtn:    "Th\u1eed l\u1ea1i",
        empty:       "Kh\u00f4ng \u0111\u01b0\u1ee3 \u0111i v\u00e0o kho\u1ea3ng tr\u1ed1ng",
        invalid:     "Nh\u1eadp ch\u00ednh x\u00e1c",
        win:         "B\u1ea1n th\u1eafng!",
        gameover:    "Tr\u00f2 ch\u01a1i k\u1ebft th\u00fac!",
        langBtn:     "Ng\u00f4n ng\u1eef",
        chooseLang:  "Ch\u1ecdn m\u1ed9t ng\u00f4n ng\u1eef",
        closeBtn:    "\u2715 \u0110\u00f3ng",
        closeTheme:  "\u2715 \u0110\u00f3ng",
        darkBtn:     "Ch\u1ebf \u0111\u1ed9 t\u1ed1i",
        lightBtn:    "Ch\u1ebf \u0111\u1ed9 \u00e1nh s\u00e1ng"
    },
    jp: {
        subtitle:    "5\u684c\u306e\u6570\u5b57\u3092\u5f53\u3066\u3088\u3046\uff01",
        placeholder: "\u6570\u5b57\u30925\u3064\u5165\u529b",
        guessBtn:    "\u63a8\u6e2c",
        retryBtn:    "\u3082\u3046\u4e00\u5ea6",
        empty:       "\u7a7a\u767d\u306e\u307e\u307e\u9001\u4fe1\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002",
        invalid:     "\u6570\u5b57\u3092\u6b63\u78ba\u306b5\u3064\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
        win:         "\u6b63\u89e3\uff01",
        gameover:    "\u30b2\u30fc\u30e0\u30aa\u30fc\u30d0\u30fc\uff01\u6b63\u89e3\u306f: ",
        langBtn:     "\u8a00\u8a9e",
        chooseLang:  "\u8a00\u8a9e\u3092\u9078\u629e",
        closeBtn:    "\u2715 \u9589\u3058\u308b",
        closeTheme:  "\u2715 \u9589\u3058\u308b",
        darkBtn:     "\u30c0\u30fc\u30af\u30e2\u30fc\u30c9",
        lightBtn:    "\u30e9\u30a4\u30c8\u30e2\u30fc\u30c9"
    },
    kr: {
        subtitle:    "\ub2e4\uc12f \uc790\ub9ac \uc22b\uc790\ub97c \ub9de\ucdb0\ubcf4\uc138\uc694!",
        placeholder: "\uc22b\uc790 5\uac1c\ub97c \uc785\ub825\ud558\uc138\uc694",
        guessBtn:    "\ucd94\uce21\ud558\ub2e4",
        retryBtn:    "\ub2e4\uc2dc \ud574\ubcf4\ub2e4",
        empty:       "\ube44 \uacf5\uac01\uc5d0 \ub4f1\uc5b4\uac00\uc9c0 \ub9c8\uc2ec\uc2dc\uc624.",
        invalid:     "\uc815\ud655\ud76c 5\uac1c\uc758 \uc22b\uc790\ub974 \uc785\ub825\ud558\uc138\uc694.",
        win:         "\ub2f4\uc2ed\uc774 \uae37\uc5b4\uc694!",
        gameover:    "\uac0c\uc784 \uc185\ubcc0! \uc22b\uc790\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4: ",
        langBtn:     "\uc5b8\uc5b4",
        chooseLang:  "\uc5b8\uc5b4\ub97c \uc120\ud0dd\ud558\uc138\uc694",
        closeBtn:    "\u2715 \ub2eb\ub2e4",
        closeTheme:  "\u2715 \ub2eb\ub2e4",
        darkBtn:     "\ub2e4\uce74 \ubaa8\ub3c4",
        lightBtn:    "\ub77c\uc774\ud2b8 \ubaa8\ub3c4"
    },
    zh: {
        subtitle:    "\u731c\u51fa5\u4f4d\u6570\u5b57\uff01",
        placeholder: "\u8f93\u51655\u4e2a\u6570\u5b57",
        guessBtn:    "\u731c\u6d4b",
        retryBtn:    "\u518d\u8bd5\u4e00\u6b21",
        empty:       "\u8bf7\u4e0d\u8981\u8f93\u5165\u7a7a\u767d\u3002",
        invalid:     "\u8bf7\u8f93\u5165\u6070\u597d5\u4f4d\u6570\u5b57\u3002",
        win:         "\u4f60\u8d62\u4e86\uff01",
        gameover:    "\u6e38\u620f\u7ed3\u675f\uff01\u7b54\u6848\u662f: ",
        langBtn:     "\u8bed\u8a00",
        chooseLang:  "\u9009\u62e9\u8bed\u8a00",
        closeBtn:    "\u2715 \u5173\u95ed",
        closeTheme:  "\u2715 \u5173\u95ed",
        darkBtn:     "\u6df1\u8272\u6a21\u5f0f",
        lightBtn:    "\u6d45\u8272\u6a21\u5f0f"
    }
};
const THEMES = {
    modern: {
        absent: "#2b2b2b",
        present: "#b59f3b",
        presentText: "white",
        correct: "#538d4e"
    },
    xmas: {
        absent: "#1a3a8f",
        present: "gold",
        presentText: "black",
        correct: "green"
    }
};
const LANG_LIST = [
    { code: "en", flag: "🇬🇧", name: "English"    },
    { code: "pt", flag: "🇵🇹", name: "Portugu\u00eas" },
    { code: "es", flag: "🇪🇸", name: "Espa\u00f1ol"   },
    { code: "fr", flag: "🇫🇷", name: "Fran\u00e7ais"  },
    { code: "de", flag: "🇩🇪", name: "Deutsch"    },
    { code: "it", flag: "🇮🇹", name: "Italiano"   },
    { code: "nl", flag: "🇳🇱", name: "Nederlands" },
    { code: "pl", flag: "🇵🇱", name: "Polski"     },
    { code: "bg", flag: "🇧🇬", name: "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438" },
    { code: "ru", flag: "🇷🇺", name: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" },
    { code: "vn", flag: "🇻🇳", name: "Ti\u1ebfng Vi\u1ec7t"},
    { code: "jp", flag: "🇯🇵", name: "\u65e5\u672c\u8a9e" },
    { code: "kr", flag: "🇰🇷", name: "\ud55c\uad6d\uc778"},
    { code: "zh", flag: "🇨🇳", name: "\u4e2d\u6587" }
];
let currentLang = "en";
const THEME_LIST = [
    {theme: "modern", name: "Modern"},
    {theme: "xmas", name: "Christmas"}
];
let currentTheme = "modern";
function applyBackground() {
    const bg = document.getElementById("bgLayer");

    bg.style.opacity = "1";
    bg.style.backgroundImage = DEFAULT_BG_IMAGE;

    document.getElementById("darkBtn").onclick = function() {
        bg.style.backgroundImage = DARK_MODE_IMAGE;
        document.getElementById("darkBtn").style.display = "none";
        document.getElementById("lightBtn").style.display = "inline-block";
    };

    document.getElementById("lightBtn").onclick = function() {
        bg.style.backgroundImage = DEFAULT_BG_IMAGE;
        document.getElementById("darkBtn").style.display = "inline-block";
        document.getElementById("lightBtn").style.display = "none";
    };
}

function applyLang(code) {
    currentLang = code;
    const t = TRANSLATIONS[code];
    document.getElementById("subtitle").textContent      = t.subtitle;
    document.getElementById("guessInput").placeholder    = t.placeholder;
    document.getElementById("guessBtn").textContent      = t.guessBtn;
    document.getElementById("restartBtn").textContent    = t.retryBtn;
    document.getElementById("langBtn").textContent       = t.langBtn;
    document.getElementById("chooseLang").textContent    = t.chooseLang;
    document.getElementById("closeLang").textContent     = t.closeBtn;
    document.getElementById("closeTheme").textContent    = t.closeTheme;
    document.getElementById("darkBtn").textContent       = t.darkBtn;
    document.getElementById("lightBtn").textContent      = t.lightBtn;
    applyBackground();
    const messageEl = document.getElementById("message");
    if (gameState === "win") {
        messageEl.textContent = t.win;
    } else if (gameState === "gameover") {
        messageEl.textContent = t.gameover + answer;
    }
    buildLangMenuItems();
}
function buildLangMenuItems() {
    const grid = document.getElementById("langMenuGrid");
    if (!grid) return;
    grid.innerHTML = LANG_LIST.map(l => `
        <button class="lang-item${l.code === currentLang ? " active" : ""}"
                onclick="selectLang('${l.code}')">
            ${l.flag} ${l.name}
        </button>
    `).join("");
}
function applyTheme(theme) {
    currentTheme = theme;
    const th = THEMES[theme];
    document.querySelectorAll(".absent").forEach(el => {
        el.style.backgroundColor = th.absent;
        document.documentElement.style.setProperty("--absent-color", th.absent);
    });
    document.querySelectorAll(".present").forEach(el => {
        el.style.backgroundColor = th.present;
        el.style.color = th.presentText;
    });
    document.documentElement.style.setProperty("--present-color", th.present);
    document.documentElement.style.setProperty("--present-text-color", th.presentText);
    document.querySelectorAll(".correct").forEach(el => {
        el.style.backgroundColor = th.correct;
        document.documentElement.style.setProperty("--correct-color", th.correct);
    });
    buildThemeMenuItems();
}
function buildThemeMenuItems() {
    const grid = document.getElementById("themeMenuGrid");
    if (!grid) return;
    grid.innerHTML = THEME_LIST.map(t => `
        <button class="theme-item${t.theme === currentTheme ? " active" : ""}"
                onclick="selectTheme('${t.theme}')">
            ${t.name}
        </button>
    `).join("");
}
function openLangMenu() {
    buildLangMenuItems();
    document.getElementById("langOverlay").style.display = "flex";
}
function closeLangMenu() {
    document.getElementById("langOverlay").style.display = "none";
}
function openThemeMenu() {
    buildThemeMenuItems();
    document.getElementById("themeOverlay").style.display = "flex";
}
function closeThemeMenu() {
    document.getElementById("themeOverlay").style.display = "none";
}
function selectLang(code) {
    applyLang(code);
    closeLangMenu();
}
function selectTheme(theme) {
    applyTheme(theme);
    closeThemeMenu();
}
document.getElementById("langBtn").addEventListener("click", openLangMenu);
document.getElementById("themeBtn").addEventListener("click", openThemeMenu);
function generateNumber() {
    let num = "";
    for (let i = 0; i < 5; i++) {
        num += Math.floor(Math.random() * 10);
    }
    return num;
}
let answer     = generateNumber();
let currentRow = 0;
let gameState  = null;
const board    = document.getElementById("board");
for (let i = 0; i < 6; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 5; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }
    board.appendChild(row);
}
function submitGuess() {
    const input     = document.getElementById("guessInput");
    const messageEl = document.getElementById("message");
    const t         = TRANSLATIONS[currentLang];
    const guess     = input.value;
    if (!/^\d{5}$/.test(guess)) {
        messageEl.textContent = guess === "" ? t.empty : t.invalid;
        setTimeout(() => { messageEl.textContent = ""; }, 2000);
        input.value = "";
        return;
    }
    if (currentRow >= 6) return;
    const row     = board.children[currentRow].children;
    let answerArr = answer.split("");
    let guessArr  = guess.split("");
    for (let i = 0; i < 5; i++) {
        row[i].textContent = guess[i];
        if (guess[i] === answer[i]) {
            row[i].classList.add("correct");
            row[i].style.backgroundColor = THEMES[currentTheme].correct;
            row[i].style.color = "white";
            answerArr[i] = null;
            guessArr[i]  = null;
        }
    }
    for (let i = 0; i < 5; i++) {
        if (guessArr[i] !== null) {
            let index = answerArr.indexOf(guessArr[i]);
            if (index !== -1) {
                row[i].classList.add("present");
                row[i].style.backgroundColor = THEMES[currentTheme].present;
                row[i].style.color = THEMES[currentTheme].presentText;
                answerArr[index] = null;
            } else {
                row[i].classList.add("absent");
                row[i].style.backgroundColor = THEMES[currentTheme].absent;
                row[i].style.color = "white";
            }
        }
    }
    if (guess === answer) {
        gameState = "win";
        messageEl.textContent = t.win;
        document.getElementById("restartBtn").style.display = "inline-block";
        document.getElementById("guessBtn").style.display   = "none";
        input.value = "";
        return;
    }
    currentRow++;
    input.value = "";
    if (currentRow === 6) {
        gameState = "gameover";
        messageEl.textContent = t.gameover + answer;
        document.getElementById("restartBtn").style.display = "inline-block";
        document.getElementById("guessBtn").style.display   = "none";
    }
}
function restartGame() {
    answer     = generateNumber();
    currentRow = 0;
    gameState  = null;
    for (let i = 0; i < 6; i++) {
        const row = board.children[i].children;
        for (let j = 0; j < 5; j++) {
            row[j].textContent = "";
            row[j].classList.remove("correct", "present", "absent");
            row[j].style.backgroundColor = "";
        }
    }
    document.getElementById("guessInput").value    = "";
    document.getElementById("message").textContent = "";
    document.getElementById("restartBtn").style.display = "none";
    document.getElementById("guessBtn").style.display   = "inline-block";
    console.log("New Answer:", answer);
}
const guessInput = document.getElementById("guessInput");
guessInput.setAttribute("inputmode", "numeric");
guessInput.addEventListener("input", () => {
    guessInput.value = guessInput.value.replace(/[^0-9]/g, "");
});
applyBackground();
applyTheme("modern");
