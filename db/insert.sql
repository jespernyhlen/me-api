

INSERT INTO presentation (name, text) 
VALUES (
    'Jesper Nyhlén',
    'Hej! Välkommen till min me-sida för kursen JS-Ramverk. Mitt namn är Jesper Nyhlén och studerar Webbutveckling vid Blekinge Tekniska Högskola. Denna plats kommer att vara min bas inom kursen och uppdateras med redovisningar samt annan information gällande detta kursmoment. Uppdateringar kommer ständigt ske, så det är bara att följa med!'
);

INSERT INTO users (email, firstname, lastname, birthday, password) 
VALUES (
    'jeppe_nyhlen@hotmail.com',
    'jesper',
    'nyhlen',
    '1993-07-05',
    '$2a$15$LPVsNGge9ny4UQTaNxgxHeryF/FtcMy8S9z8h7Vy.Usu9.m.nki1S'
);

INSERT INTO reports (kmom, text) 
VALUES (
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

INSERT INTO reports (kmom, text) 
VALUES (
    '2',
    '# Vecka 2

    ### Registrering och date picker

    Denna vecka handlade till stor del om att utveckla ett registreringsformulär från grunden. Jag har inte skapat någon direkt kopia utav något tidigare existerande formulär, men såklart hämtat inspiration från olika modeller.

    Eftersom användarupplevelsen var i fokus gjorde jag inga extrema utspel rent estetiskt utan fokuserade på enkelhet.

    Jag lade mer mest tid på min date picker. Jag ville ha någon typ utav popup meny där man kunde välja sitt datum. Dock ville jag gå ifran den vanliga metoden där man ofta klickar vänster/höger för att välja år och månad, då detta är något jag avskyr att använda själv. Jag tänkte därför att utseendet skulle få likna en klassisk date picker, likt standard varianten som kan visas av webbläsaren, men med fräshare utseende och enklare manövrering.

    Därför valde jag att lägga år och datum i en select meny, som enkelt går att överblicka och innehåller hela ord. Sedan beroende på antal dagar i den månad, visas datumen upp i ett klassiskt format nedanför, där man med enkelhet kan klicka i enskilt datum. Vilken dag i veckan eller liknande detalj hoppade jag över, men skulle möjligt hjälpa en användare vid t.ex. bokning av en resa eller vid ett format där veckodagar gör skillnad. Här tänkte jag istället att vid val av födelsedag ska användaren bara så snabbt som möjligt få en överblick och hitta siffran som den letar efter och ligger då enkelt numrerat.'
);






