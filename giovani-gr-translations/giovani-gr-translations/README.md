# Giovani GR – používateľské preklady pre Shoptet

Tento priečinok obsahuje externý JavaScript pre grécky e-shop:

- `gr-translation-script.js` – hlavný prekladový skript
- `shoptet-call.html` – volanie skriptu do Shoptetu

## Odporúčané publikovanie cez GitHub + jsDelivr

1. Na GitHube vytvorte nový verejný repozitár, napríklad:
   `giovani-gr-translations`
2. Nahrajte doň súbor `gr-translation-script.js`.
3. V Shoptete vložte:

```html
<script src="https://cdn.jsdelivr.net/gh/USERNAME/giovani-gr-translations@main/gr-translation-script.js" defer></script>
```

`USERNAME` nahraďte názvom GitHub účtu.

## Kam vložiť volanie v Shoptete

V administrácii otvorte sekciu na vloženie vlastného HTML/JavaScriptu do hlavičky alebo pred koniec `body`. Použite iba jeden `<script>` tag.

## Aktualizácie

Po úprave súboru na GitHube môže jsDelivr krátko držať staršiu verziu v cache. Pri testovaní môžete dočasne pridať verziu:

```html
<script src="https://cdn.jsdelivr.net/gh/USERNAME/giovani-gr-translations@main/gr-translation-script.js?v=2" defer></script>
```

Pre stabilnú produkciu je lepšie používať GitHub release alebo konkrétny commit:

```html
<script src="https://cdn.jsdelivr.net/gh/USERNAME/giovani-gr-translations@COMMIT_HASH/gr-translation-script.js" defer></script>
```

## Dôležité

Skript sa spustí iba na doménach:

- `aromatagiovani.gr`
- `www.aromatagiovani.gr`

Prekladá presné anglické frázy v textoch a atribútoch `placeholder`, `title`, `aria-label`, `data-title` a `value`. Dynamicky pridané hlášky sleduje pomocou `MutationObserver`.
