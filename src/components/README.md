# Komponentstruktur — Atomic Design

Komponenterne er opdelt efter Atomic Design. Princippet er, at et komponent
placeres ét niveau over de komponenter, det selv er bygget af.

## atoms/

Mindste byggesten. Hvert atom rendrer ét enkelt HTML-element og kan ikke
brydes yderligere ned.

| Komponent      | Element    |
| -------------- | ---------- |
| `AnchorLink`   | `<a>`      |
| `ListItem`     | `<li>`     |
| `LoginButton`  | `<button>` |
| `UnorderedList`| `<ul>`     |
| `TopBar`       | `<div>`    |

## molecules/

Få atomer sat sammen til én genkendelig enhed med ét formål.

| Komponent        | Består af                              |
| ---------------- | -------------------------------------- |
| `Logo`           | `AnchorLink`/`Link` + `<img>`          |
| `GoalCard`       | nummer + titel + ikon i én klikbar knap |
| `Countdown`      | label + tællerværdi                    |
| `NewsletterForm` | inputfelt + knap                       |

## organisms/

Selvstændige sektioner af siden, sat sammen af molekyler og atomer.

| Komponent      | Består af                                |
| -------------- | ---------------------------------------- |
| `Header`       | `TopBar` + indhold via `children`        |
| `Navbar`       | `UnorderedList` + `ListItem` + `NavLink` |
| `Footer`       | `Logo` + `NewsletterForm` + `Countdown`  |
| `GoalOverview` | de 17 `GoalCard`-komponenter i et grid   |
| `GoalDetail`   | overskrift + video + brødtekst           |
| `ContactForm`  | flere inputfelter + knap + validering    |

## templates/

Layout-rammer uden eget indhold. De bestemmer, hvor indholdet placeres, og
modtager det via `props.children`.

| Komponent        | Rolle                                  |
| ---------------- | -------------------------------------- |
| `ContentWrapper` | titelbjælke + indholdsområde, sætter sidens `document.title` |
| `Main`           | `<main>`-området, hvor routeren skifter sider ud |

## pages/ — ligger uden for `components/`

Atomic Design har `pages` som femte niveau, men i dette projekt ligger de i
`src/pages/` i stedet for `src/components/pages/`. Det er bevidst:

- Alt i `components/` er genanvendelige byggeklodser. Et page component er
  ikke genanvendeligt — det bruges præcis ét sted, nemlig som `element` på
  én route i `src/router/AppRouter.tsx`.
- `src/pages/` er den udbredte konvention i React-projekter, og den gør det
  umiddelbart tydeligt, hvilke sider projektet består af.

Hvert page component fylder en template (`ContentWrapper`) med konkret
indhold og svarer til én route.

## Placeringer der kræver en forklaring

- **`Logo` er et molekyle, ikke et atom.** Den er bygget af atomet
  `AnchorLink` og et `<img>`, og et komponent, der bruger et andet komponent,
  kan ikke være et atom.
- **`Header` og `Footer` er organismer, ikke templates.** De indeholder
  reelt indhold — logoer, navigation, nyhedsbrev — og ikke kun layout.
  `Main` er derimod en tom ramme og hører i templates.
- **`TopBar` er et atom.** Den rendrer kun en dekorativ `<div>` uden indhold.
