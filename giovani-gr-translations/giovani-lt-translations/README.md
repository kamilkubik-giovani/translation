# Giovani LT – naudotojo sąsajos vertimai Shoptet platformai

Šiame aplanke yra išorinis JavaScript failas Lietuvos el. parduotuvei:

- `lt-translation-script.js` – pagrindinis vertimų failas;
- `shoptet-call.html` – kodas, kurį reikia įterpti į Shoptet.

## GitHub ir jsDelivr

Įkelkite aplanką į viešą GitHub saugyklą. Jei saugykla yra:

`https://github.com/kamilkubik-giovani/translation`

ir aplankas saugykloje yra `giovani-lt-translations`, naudokite:

```html
<script src="https://cdn.jsdelivr.net/gh/kamilkubik-giovani/translation@main/giovani-lt-translations/lt-translation-script.js?v=1" defer></script>
```

Po kiekvieno failo pakeitimo padidinkite versijos numerį, pvz. `?v=2`, `?v=3`.

Skriptas veikia tik domenams `giovani.lt` ir `www.giovani.lt`.
