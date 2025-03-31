// Wenn wir ein pure JS package installieren wie z. B. luxon haben wir keine Typinformationen zur Verfuegung.
// `npm install luxon`
import { DateTime } from 'luxon';
// Fehler: Could not find a declaration file for module 'luxon'.

// definitelytyped bietet declaration file fuer luxon an
// https://definitelytyped.org/
// `npm install --save-dev @types/luxon`

const days = DateTime.fromJSDate(new Date()).daysInMonth;
console.log(`There are ${days} days in this month`);

// in node_modules nach luxon suchen
// dort gibt es eine index.d.ts mit Typinformationen
