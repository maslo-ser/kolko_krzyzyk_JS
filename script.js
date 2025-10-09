// 1 = papier
// 2 = kamien
// 3 = nozyce
var historia = [];

//implementacja obiektu jako gra
const gra = {
    
    kto_wygral(p1, p2) {
        // 0 = remis
        // 1 = gracz
        // 2 = bot
        console.log("sprawdzam kto wygral")
        if (p1 == 1 && p2 == 2) {
            return 1;
        } else if (p1 == 1 && p2 == 3) {
            return 2;
        } else if (p1 == 2 && p2 == 1) {
            return 2;
        } else if (p1 == 2 && p2 == 3) {
            return 1;
         } else if (p1 == 3 && p2 == 1) {
            return 1;
        } else if (p1 == 3 && p2 == 2) {
            return 2;
        } else {
            return 0;
        }
    },

    wypisz_wynik(w) {
        const h1 = document.getElementById("wynik");
        if (w == 0) {
            h1.textContent = "REMIS";
        } else if (w == 1) {
            h1.textContent = "WYGRAŁEŚ!";
        } else if (w == 2) {
            h1.textContent = "PRZEGRAŁEŚ";
        } else {
            h1.textContent = "Papier kamień nożyce JS";
        }
        console.log("wypisano wynik")
    },

    wypisz_total() {
        let w = 0;
        let r = 0;
        let p = 0;
        let d = historia.length;
        for (let i = 0; i < d; i++) {
            if (historia[i] === "R") {
                r++;
            } else if (historia[i] === "W") {
                w++;
            } else {
                p++;
            }
        }
        const total = document.getElementById("total");
        total.textContent = "Wygrane: " + w + " Remisy: " + r + " Porażki: " + p;
        console.log("wypisano total")
    },

    zapisz_wynik(w) {
        if (w == 0) {
            historia.push("R")
        } else if (w == 1) {
            historia.push("W")
        } else {
            historia.push("P")
        }
        const paragraf = document.getElementById("hist");
        paragraf.textContent = "Historia: " + historia.join(" ");
        this.wypisz_wynik(w)
        this.wypisz_total();
    },

    wypisz_bota(r) {
        const img = document.getElementById("ruch_bota");
        if (r == 1) {
            img.src = "gfx/papier.png";
            img.alt = "Papier";
        } else if (r == 2) {
            img.src = "gfx/kamien.png";
            img.alt = "Kamień";
        } else {
            img.src = "gfx/nozyce.png";
            img.alt = "Nożyce";
        }
    },

    bot(wg) {
        console.log("bot robi ruch")
        let wb = Math.floor(Math.random() * 3) + 1;
        this.wypisz_bota(wb);

        this.zapisz_wynik(this.kto_wygral(wg, wb));
    
    }
}
