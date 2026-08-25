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
| `MenuToggle`   | `<button>` | Burgerknap til menuen på små skærme            |
| `TopBar`       | `<div>`    | Den 30px turkise stribe øverst                 |
| `UnorderedList`| `<ul>`     |                                                |

## molecules — få atomer sat sammen til ét formål

| Komponent        | Består af                                    |
| ---------------- | -------------------------------------------- |
| `Article`        | overskrift + manchet + afsnit                |
| `Countdown`      | sekunder til 2030                            |
| `FormField`      | `Label` + `Input` + fejlbesked i Figmas "Inputgroup" |
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
| `Navbar`      | `MenuToggle` + `UnorderedList` af `NavbarLink`  |
| `SubjectList` | de ni `SubjectCard` i et 3×3-grid               |

## templates — rammen om indholdet

`Main` er sidens `<main>`. `ContentWrapper` er Figmas "Main Header" — den grå
bjælke med sidetitlen — plus indholdskolonnen på 1262px.

## Validering af formularer

Alle formularer valideres i JavaScript — ikke med HTML5-validering. Hver
`<form>` har derfor `noValidate`, og reglerne ligger i det organisme- eller
molekyle-niveau, der ejer felterne (`ContactForm`, `LoginForm`,
`NewsletterForm` og `GoalBuilder`). De genbrugte tjek — `isFilled`, `isEmail`
og `isHexColor` — ligger i `src/utils/validation.ts`.

Fejl vises i felt-niveau: `FormField` sender `error` videre til `Input`, som
sætter `aria-invalid` og markerer rammen med Figmas røde `required`-farve,
mens beskeden får `role="alert"` og bliver koblet på feltet via
`aria-describedby`. Felterne beholder `required` og `type="email"`, fordi de
er semantik for skærmlæsere og mobiltastaturer — men browserens egen
validering er slået fra, så det er JavaScript, der afgør, om formularen
sendes.

## Responsivt

Figma-filen har kun 1440px-frames, så alt under den bredde er vores egen
tilføjelse — den må aldrig ændre, hvordan siden ser ud ved 1440px.
Brydepunkterne kommer fra `theme.breakpoints` via `media()`-mixinet:
`desktop` (1024px) skifter headeren til en kolonne og folder menuen sammen bag
`MenuToggle`, `tablet` (768px) kollapser to-kolonne-layouts, og `mobile`
(480px) skruer ned for bannerhøjder, logohøjder og overskrifter.

## Hvorfor ligger tingene, hvor de gør?

- `Logo` er en molekyle, fordi den sætter et link og et billede sammen.
- `Header` og `Footer` er organismer, fordi de samler flere molekyler.
- `TopBar` er et atom: den er bare en farvet stribe uden indhold.
- `pages/` ligger uden for `components/`, fordi en side ikke genbruges — den
  svarer én til én til en rute i `router/AppRouter.tsx`.
- `utils/` ligger uden for `components/`, fordi valideringsreglerne er ren
  logik uden markup — de bruges af både en molekyle og tre organismer.
