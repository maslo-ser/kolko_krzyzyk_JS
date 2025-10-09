<h1>Papier kamień nożyce</h1>
<h2>Użyte technologie</h2>
<p>Do napisania strony użyto języka HTML (index.html), ze stylami w CSS (style.css). Cała logika gry została napisana w JavaScripcie w obiekcie <strong>gra</strong> (script.js). Cała grafika jest przechowywana w katalogu gfx/.</p>
<h2>Działanie i logika gry</h2>
<p>Gdy użytkownik kliknie przycisk wywołana zostaje metoda <strong>gra.bot()</strong>, której przekazywana jest liczba w zależności od wybranej opcji:</p>
<h4>reprezentacja w postaci liczb w kodzie</h4>
<ul>
  <li>1 - Papier</li>
  <li>2 - Kamień</li>
  <li>3 - Nożyce</li>
</ul>
<p>Metoda <strong>gra.bot()</strong> losuje ruch bota i wywołuje funkcje:</p>
<ol>
  <li><strong>gra.wypisz_bota()</strong> - która odpowiada za zakomunikowanie na stronie wyboru bota</li>
  <li><strong>gra.zapisz_wynik()</strong> - której przekazuje wynik metody <strong>gra.kto_wygral()</strong></li>
</ol>
<p>Oczywiście w kodzie metody wewnątrz metody są wywoływane przez this.metoda(), a nie gra.metoda()</p>
