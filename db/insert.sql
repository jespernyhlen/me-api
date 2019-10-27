

INSERT INTO presentation
    (name, text)
VALUES
    (
        'Jesper Nyhlén',
        'Hej! Välkommen till min me-sida för kursen JS-Ramverk. Mitt namn är Jesper Nyhlén och studerar Webbutveckling vid Blekinge Tekniska Högskola. Denna plats kommer att vara min bas inom kursen och uppdateras med redovisningar samt annan information gällande detta kursmoment. Uppdateringar kommer ständigt ske, så det är bara att följa med!'
);

INSERT INTO users
    (email, firstname, lastname, birthday, password)
VALUES
    (
        'jeppe_nyhlen@hotmail.com',
        'jesper',
        'nyhlen',
        '1993-07-05',
        '$2a$15$LPVsNGge9ny4UQTaNxgxHeryF/FtcMy8S9z8h7Vy.Usu9.m.nki1S'
);

INSERT INTO reports
    (kmom, text)
VALUES
    (
        '1',
        '# Readme (English)

### Get started

To start the app, simply use the commands `npm install` followed by `npm start`.

### `npm install`

This command will install all modules listed as dependencies and is a first step to run the app.

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.'
);

INSERT INTO reports
    (kmom, text)
VALUES
    (
        '2',
        '# Vecka 2

### Registrering och date picker

Denna vecka handlade till stor del om att utveckla ett registreringsformulär från grunden. Jag har inte skapat någon direkt kopia utav något tidigare existerande formulär, men såklart hämtat inspiration från olika modeller.

Eftersom användarupplevelsen var i fokus gjorde jag inga extrema utspel rent estetiskt utan fokuserade på enkelhet.

Jag lade mer mest tid på min date picker. Jag ville ha någon typ utav popup meny där man kunde välja sitt datum. Dock ville jag gå ifran den vanliga metoden där man ofta klickar vänster/höger för att välja år och månad, då detta är något jag avskyr att använda själv. Jag tänkte därför att utseendet skulle få likna en klassisk date picker, likt standard varianten som kan visas av webbläsaren, men med fräshare utseende och enklare manövrering.

Därför valde jag att lägga år och datum i en select meny, som enkelt går att överblicka och innehåller hela ord. Sedan beroende på antal dagar i den månad, visas datumen upp i ett klassiskt format nedanför, där man med enkelhet kan klicka i enskilt datum. Vilken dag i veckan eller liknande detalj hoppade jag över, men skulle möjligt hjälpa en användare vid t.ex. bokning av en resa eller vid ett format där veckodagar gör skillnad. Här tänkte jag istället att vid val av födelsedag ska användaren bara så snabbt som möjligt få en överblick och hitta siffran som den letar efter och ligger då enkelt numrerat.'
);

INSERT INTO reports
    (kmom, text)
VALUES
    (
        '3',
        '# Vecka 3

### Me-api kopplat till frontend

Denna vecka innefattade en hel del arbete. Frontend-delen har vi haft tidigare projekt som liknar något. Vi har arbetat mot externa APIer för att hämta och använda data. Det var dock något helt nytt att se hur man bygger dessa själv, speciellt med tanke på att de skulle implementeras i vår egna app. 

Största svårigheten med ett sånt här projekt är alla delar som tillkommer. Följer man guiden blir det svårt att inte bara "köra vidare" eftersom det innehåller såpass mycket. Det blir svårt att ta tid för att reflektera över alla steg och vad som påverkar vad. Men med små delar som ibland sätter stopp blir man illa tvungen att stanna upp och felsöka, vilket man givetvis lär sig en hel del på.

Det blir dock ett extra hinder (utmaning vid positivt tänkande) att nu göra detta i ett ramverk. Såklart kommer det komma allt eftersom, men just nu är jag inte helt nöjd över vad jag skapat. Det är inte optimal kod och speciellt inte hög standard på mitt utnyttjande utav ramverkets tjänster/standarder. 

Jag kommer dock jobba vidare med att utveckla min kod för att utnyttja ramverket bättre, men det är en värld i sig att sätta sig in i allt som props, komponenter och hur de bäst ska samverka. Med tanke på UX är sidan inte än på högsta nivå, mycket fick lida där pågrund utav tidsbristen till att implementera allting.

Många lärdomar rikare blev man, men jag måste medge att det tog långt mer tid än väntat.'
);

INSERT INTO reports
    (kmom, text)
VALUES
    (
        '4',
        '# Vecka 4

### Selenium tester

I vecka 4 låg fokusen på tester och mina tre testfall kommer beskriveas nedan.

### Test ett

Första testet är riktat mot login routen. Jag vill testa att routen /login tar dig till en sida med rubriken Logga in användare samt innehar alla delar av ett login-formulär.

### Test två

Andra testet är riktat mot register routen. Liknande login routen vill jag se att /register tar mig till en sida med rubriken Registrera användaer och innehar alla delar av ett register-formulär.

### Test tre

Tredje testet är riktat mot min navbar. Här vill jag se att man från första sidan har en navbar som kan ta mig till sidorna för att logga in, registrera användare samt rapport för vecka 1.'

);



INSERT INTO reports
    (kmom, text)
VALUES
    (
        '10',
        '# Projekt

### Allmänt om projektet

Det var ett intressant projekt som innehöll många delar som skulle samverka. Det innehöll såklart många moment som liknar det vi gjort tidigare i kursen. Men med de ändringar som projektet gav och även den personliga utvecklingen fanns det många steg som ändå inte var desamma. Det enklaste var att anpassa delarna för att logga in och autentisera en användare samt registrera en ny. Sedan var implementationen av realtidsaspekten det mest krävande och utmanande. Att få allt att "fungera" gick hyffsat smidigt. Men att sedan få hela applikationen att "fungera bra" tog lite extra tid. Eftersom mycket bygger på integration i realtid krävs det att allting uppdateras hela tiden. Beroende på hur många delar som ska ingå i detta kan svårighetsgraden variera. Jag ville göra det enkelt för en användare att logga in och känna kontroll genom applikationen, och främst delen som består av trading. Den svåraste delen blev då hur man skulle förhålla sig till koden i ramverket och på vilket sätt allting skulle implementeras, det tog sin tid och research. 

Projektet var bra upplagt och jag gillar teorin bakom ett friare kursmoment, där vi jobbar mot samma mål men vägen dit kan varieras. Det kändes lagom stort med tanke på tidigare erfarehet och mängd som man kunde bygga vidare på. Såklart är tidsramen varierad beroende på ambitionsnivå och vad man vill uppnå. Men jag tycker det gick att fullföra inom rimlig tid.

### Allmänt om kursen

Kursen likt projektet var av en friare variant vilket gav sina med och motgångar. Vi kommer närmare en tid där vi ska ut i arbetsmarknaden och detta kändes som ett naturligt sätt att börja likna det på. Man fick förlita sig mer på sin egen förmåga att finna information anpassat till sin egen väg att gå, även om en bas ofta fanns att utgå ifrån med hjälp av kursmaterial. Det ända som jag generellt ser är nackdelen av det hela är kunskapen av det specifika ramverket vi fick välja. När det är ett sådant nytt val kunde det ibland vara svårt att utgå ifrån de rena JavaScript exempel och implementera det på korrekt sätt. Att utgå från sig själv och sin egen information kunde i vissa fall bli ett tidskrävande moment för att bygga vidare på en dålig implementation. Men kursen får 8/10 och rekommenderar den absolut, friheten för mig har fler fördelar än nackdelar.
'

);