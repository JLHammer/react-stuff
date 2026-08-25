# Komponentstruktur

Projektet følger Atomic Design. Hver komponent bor i sin egen mappe med
`X.tsx`, `X.styled.ts` og `X.types.ts` — de to sidste kun når komponenten
faktisk har styling eller props.

Designet i Figma-filen **FN's verdensmål – React Case** er facit. Alle farver,
skriftstørrelser og mål i `src/styles/theme.ts` er hentet derfra.

## atoms — mindste byggeklods, ingen afhængighed til andre komponenter

| Komponent      | Render     | Noter                                          |
| -------------- | ---------- | ---------------------------------------------- |
| `AnchorLink`   | `<a>`      | Eksterne links                                 |
| `Button`       | `<button>` | Figmas Lavender Blush-knap                     |
| `GoalIcon`     | `<svg>`    | Parser ikon-SVG'en fra måldataen               |
| `Image`        | `<img>`    |                                                |
| `Input`        | `<input>`  | Bliver til `<textarea>`, når `rows` er sat     |
| `Label`        | `<label>`  | Tilføjer den røde `*` ved påkrævede felter     |
| `LikeButton`   | `<button>` | Skifter mellem de to hjerte-ikoner fra Figma   |
| `ListItem`     | `<li>`     |                                                |
| `TopBar`       | `<div>`    | Den 30px turkise stribe øverst                 |
| `UnorderedList`| `<ul>`     |                                                |

## molecules — få atomer sat sammen til ét formål

| Komponent        | Består af                                    |
| ---------------- | -------------------------------------------- |
| `Article`        | overskrift + manchet + afsnit                |
| `Countdown`      | sekunder til 2030                            |
| `FormField`      | `Label` + `Input` i Figmas "Inputgroup"      |
| `GoalCard`       | ét verdensmål som 200×200-flise              |
| `GoalPreview`    | 300×300-forhåndsvisning på "Byg dit eget mål"|
| `Logo`           | `AnchorLink`/`Link` + `Image`                |
| `NewsletterForm` | `Input` + `Button`                           |
| `SubjectCard`    | ét fag som 400×219-kort                      |

## organisms — selvstændige sektioner af en side

| Komponent     | Består af                                       |
| ------------- | ----------------------------------------------- |
| `ContactForm` | tre `FormField` + `Button`                      |
| `Footer`      | `Logo`, `NewsletterForm` og `Countdown`         |
| `GoalBuilder` | to `FormField` + `GoalPreview`                  |
| `GoalDetail`  | manchet, foto og `LikeButton`                   |
| `GoalList`    | de 17 `GoalCard` i et 6×3-grid                  |
| `Header`      | `TopBar` + `Logo` + `Navbar`                    |
| `LoginForm`   | to `FormField` + `Button`                       |
| `Navbar`      | `UnorderedList` af `NavbarLink`                 |
| `SubjectList` | de ni `SubjectCard` i et 3×3-grid               |

## templates — rammen om indholdet

`Main` er sidens `<main>`. `ContentWrapper` er Figmas "Main Header" — den grå
bjælke med sidetitlen — plus indholdskolonnen på 1262px.

## Hvorfor ligger tingene, hvor de gør?

- `Logo` er en molekyle, fordi den sætter et link og et billede sammen.
- `Header` og `Footer` er organismer, fordi de samler flere molekyler.
- `TopBar` er et atom: den er bare en farvet stribe uden indhold.
- `pages/` ligger uden for `components/`, fordi en side ikke genbruges — den
  svarer én til én til en rute i `router/AppRouter.tsx`.
