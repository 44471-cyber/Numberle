const DEFAULT_BG_IMAGE = "url('https://raw.githubusercontent.com/44471-cyber/Numberle/main/background%20image.png')";
const DEFAULT_BG_COLOR = "#3050aa";
const BG_BULGARIAN_IMAGE = "url('https://raw.githubusercontent.com/44471-cyber/Numberle/main/background%20image%20(bulgarian).png')";
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
        chooseLang:  "Choose Language",
        closeBtn:    "\u2715 Close"
    },
    pt: {
        subtitle:    "Adivinhe o número de 5 dígitos!",
        placeholder: "Escreve 5 números",
        guessBtn:    "Adivinhar",
        retryBtn:    "Recomeçar",
        empty:       "Não escrevas um espaço vazio.",
        invalid:     "Escreva exatamente 5 números.",
        win:         "Ganhaste!",
        gameover:    "Fim do jogo! O número era: ",
        langBtn:     "Idioma",
        chooseLang:  "Escolher Idioma",
        closeBtn:    "\u2715 Fechar"
    },
    es: {
        subtitle:    "¡Adivina el numero de 5 digitos!",
        placeholder: "Escribe 5 números",
        guessBtn:    "Adivinar",
        retryBtn:    "Reintentar",
        empty:       "No dejes el espacio vacío.",
        invalid:     "Escribe exactamente 5 números.",
        win:         "¡Ganaste!",
        gameover:    "Juego terminado! El número era: ",
        langBtn:     "Idioma",
        chooseLang:  "Elegir Idioma",
        closeBtn:    "\u2715 Cerrar"
    },
    fr: {
        subtitle:    "Devinez le nombre à 5 chiffres!",
        placeholder: "Saisir 5 chiffres",
        guessBtn:    "Deviner",
        retryBtn:    "Réessayer",
        empty:       "Ne laissez pas le champ vide.",
        invalid:     "Entrez exactement 5 chiffres.",
        win:         "Vous avez gagne!",
        gameover:    "Partie terminé! Le nombre était: ",
        langBtn:     "Langue",
        chooseLang:  "Choisir la Langue",
        closeBtn:    "\u2715 Fermer"
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
        chooseLang:  "Sprache wahlen",
        closeBtn:    "\u2715 Schließen"
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
        closeBtn:    "\u2715 Chiudi"
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
        closeBtn:    "\u2715 Sluiten"
    },
    pl: {
        subtitle:    "Zgadnij 5-cyfrow\u0105 liczb\u0119!",
        placeholder: "Wpisz 5 cyfr",
        guessBtn:    "Zgadnij",
        retryBtn:    "Sprobuj ponownie",
        empty:       "Nie wpisuj pustego pola.",
        invalid:     "Wpisz dok\u0142adnie 5 cyfr.",
        win:         "Wygra\u0142e\u015b!",
        gameover:    "Koniec gry! Liczba to: ",
        langBtn:     "J\u0119zyk",
        closeBtn:    "\u2715 Zamknij"
    },
	bg: {
		subtitle:    "Познай 5-цифреното число!",
		placeholder: "Въведете 5 числа",
		guessBtn:    "Познайте",
		retryBtn:    "Опитайте отново",
		empty:       "Не влизайте в празно пространство.",
		invalid:     "Въведете точно 5 числа.",
		win:         "Вие печелите!",
		gameover:    "Край на играта! Номерът беше: ",
		langBtn:     "Език",
		chooseLang:  "Изберете език",
		closeBtn:    "\u2715 Затворете",
	},
    ja: {
        subtitle:    "5\u684c\u306e\u6570\u5b57\u3092\u5f53\u3066\u3088\u3046\uff01",
        placeholder: "\u6570\u5b57\u30925\u3064\u5165\u529b",
        guessBtn:    "\u63a8\u6e2c",
        retryBtn:    "\u3082\u3046\u4e00\u5ea6",
        empty:       "\u7a7a\u767d\u306e\u307e\u307e\u9001\u4fe1\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002",
        invalid:     "\u6570\u5b57\u3092\u6b63\u78ba\u306b5\u3064\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
        win:         "\u6b63\u89e3\uff01",
        gameover:    "\u30b2\u30fc\u30e0\u30aa\u30fc\u30d0\u30fc\uff01\u6b63\u89e3\u306f: ",
        langBtn:     "\u8a00\u8a9e",
        closeBtn:    "\u2715"
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
        closeBtn:    "\u2715"
    }
};
const LANG_LIST = [
    { code: "en", flag: "🇬🇧", name: "English" },
    { code: "pt", flag: "🇵🇹", name: "Portugues" },
    { code: "es", flag: "🇪🇸", name: "Espanol" },
    { code: "fr", flag: "🇫🇷", name: "Francais" },
    { code: "de", flag: "🇩🇪", name: "Deutsch" },
    { code: "it", flag: "🇮🇹", name: "Italiano" },
    { code: "nl", flag: "🇳🇱", name: "Nederlands" },
    { code: "pl", flag: "🇵🇱", name: "Polski" },
	{ code: "bg", flag: "🇧🇬", name: "Български"},
    { code: "ja", flag: "🇯🇵", name: "日本語" },
    { code: "zh", flag: "🇨🇳", name: "中文" }
];
let currentLang = "en";
function applyBackground(code) {
    if (code === "bg") {
        document.body.style.backgroundImage = BG_BULGARIAN_IMAGE;
    } else {
        document.body.style.backgroundImage = DEFAULT_BG_IMAGE;
    }
    document.body.style.backgroundColor = DEFAULT_BG_COLOR;
}
function applyLang(code) {
    currentLang = code;
    const t = TRANSLATIONS[code];
    document.getElementById("subtitle").textContent = t.subtitle;
    document.getElementById("guessInput").placeholder = t.placeholder;
    document.getElementById("guessBtn").textContent = t.guessBtn;
    document.getElementById("restartBtn").textContent = t.retryBtn;
    document.getElementById("langBtn").textContent = t.langBtn;
    document.getElementById("chooseLang").textContent = t.chooseLang;
    document.getElementById("close").textContent = t.closeBtn;
    buildLangMenuItems();
    const messageEl = document.getElementById("message");
    applyBackground(code);
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
function openLangMenu() {
    buildLangMenuItems();
    document.getElementById("langOverlay").style.display = "flex";
}
function closeLangMenu() {
    document.getElementById("langOverlay").style.display = "none";
}
function selectLang(code) {
    applyLang(code);
    closeLangMenu();
}
document.getElementById("langOverlay").addEventListener("click", function(e) {
    if (e.target === this) closeLangMenu();
});
document.getElementById("langBtn").addEventListener("click", openLangMenu);
function generateNumber() {
    let num = "";
    for (let i = 0; i < 5; i++) {
        num += Math.floor(Math.random() * 10);
    }
    return num;
}
let answer = generateNumber();
let currentRow = 0;
let gameState = null;
const board = document.getElementById("board");
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
    const input = document.getElementById("guessInput");
    const messageEl = document.getElementById("message");
    const t = TRANSLATIONS[currentLang];
    const guess = input.value;
    if (!/^\d{5}$/.test(guess)) {
        messageEl.textContent = guess === "" ? t.empty : t.invalid;
        setTimeout(() => {
            messageEl.textContent = "";
        }, 2000);
        input.value = "";
        return;
    }
    if (currentRow >= 6) return;
    const row = board.children[currentRow].children;
    let answerArr = answer.split("");
    let guessArr = guess.split("");
    for (let i = 0; i < 5; i++) {
        row[i].textContent = guess[i];
        if (guess[i] === answer[i]) {
            row[i].classList.add("correct");
            answerArr[i] = null;
            guessArr[i] = null;
        }
    }
    for (let i = 0; i < 5; i++) {
        if (guessArr[i] !== null) {
            let index = answerArr.indexOf(guessArr[i]);
            if (index !== -1) {
                row[i].classList.add("present");
                answerArr[index] = null;
            } else {
                row[i].classList.add("absent");
            }
        }
    }
    if (guess === answer) {
        gameState = 'win';
        messageEl.textContent = t.win;
        document.getElementById("restartBtn").style.display = "inline-block";
        document.getElementById("guessBtn").style.display = "none";
	       input.value = "";
        return;
    }
    currentRow++;
    input.value = "";
    if (currentRow === 6) {
        gameState = 'gameover';
        messageEl.textContent = t.gameover + answer;
        document.getElementById("restartBtn").style.display = "inline-block";
        document.getElementById("guessBtn").style.display = "none";
    }
}
console.log("Answer:", answer);
function restartGame() {
    answer = generateNumber();
    currentRow = 0;
    for (let i = 0; i < 6; i++) {
        const row = board.children[i].children;
        for (let j = 0; j < 5; j++) {
            row[j].textContent = "";
            row[j].classList.remove("correct", "present", "absent");
        }
    }
    gameState = null;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("restartBtn").style.display = "none";
    document.getElementById("guessBtn").style.display = "inline-block";
    console.log("New Answer:", answer);
}
const guessInput = document.getElementById("guessInput");
guessInput.setAttribute("inputmode", "numeric");
guessInput.addEventListener("input", () => {
    guessInput.value = guessInput.value.replace(/[^0-9]/g, "");
});
