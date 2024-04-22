export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      contact: {
        form: {
          labels: {
            email: 'Your e-mail',
            subject: 'Subject (optional)',
            message: 'Message',
          },
          placeholders: {
            subject: 'Just a question',
            message: "Hi! I'd like to ask for...",
          },
          send: 'Send message',
          validations: {
            emailRequired: 'The email field is required',
            invalidEmail: 'Invalid email format',
            maxLength: 'Max lenght is {length}',
            fieldRequired: 'The {field} field is required',
            error:
              'There was an error while sending your form. Try again later.',
            success: 'Your message has been send succesfully!',
          },
        },
        header: {
          or: '-OR-',
          other: 'Show other contact options',
        },
      },
      home: {
        hero: {
          mainSkills: 'Main Skills',
          more: 'More about me',
          skills: 'Skills',
          contact: 'Contact',
        },
      },
      about: {
        softSkills: 'Soft skills',
        myJourney: 'My journey',
        title:
          'Let me introduce myself to make you know me better. On the timeline below there are the most important moments of my career.',
      },
      skills: {
        list: 'Display in list',
        fancy: 'Display in fancy style',
        live: 'Live',
        code: 'Code',
        empty: 'Phrase <b>{ phrase }</b> has not been found.',
        tips: 'Tips:',
        useOneOfPhrase: 'Use on of the phrase',
        features: 'Project features',
        technologies: 'Used technologies',
        googleSearch: 'Search in Google',
        feelingLucky: "I'm feeling lucky",
      },
      error: {
        desc: 'O nie... wyglada na to, ze sie zgubiles.',
        home: 'Do strony glownej',
        error: 'Error {code}',
      },
      homePage: 'Home',
      aboutPage: 'About me',
      skillsPage: 'Skills&Projects',
      contactPage: 'Contact',
    },
    pl: {
      contact: {
        form: {
          labels: {
            email: 'Twój adres e-mail',
            subject: 'Temat (opcjonalnie)',
            message: 'Wiadomość',
          },
          placeholders: {
            subject: 'Tylko pytanie',
            message: 'Cześć! Chciałbym zapytać o...',
          },
          send: 'Wyślij wiadomość',
          validations: {
            emailRequired: 'Pole e-mail jest wymagane',
            invalidEmail: 'Nieprawidłowy format e-maila',
            maxLength: 'Maksymalna długość to {length}',
            fieldRequired: 'Pole {field} jest wymagane',
            error:
              'Wystapil blad w trakcie wysylania Twojego formularza. Sproboj ponownie pozniej.',
            success: 'Wiadomosc zostala wyslana poprawnie.',
          },
        },
        header: {
          or: '-LUB-',
          other: 'Sprawdz inne opcje kontaktu',
        },
      },
      home: {
        hero: {
          mainSkills: 'Główne umiejętności',
          more: 'Więcej o mnie',
          skills: 'Umiejętności',
          contact: 'Kontakt',
        },
      },
      about: {
        softSkills: 'Umiejętności miękkie',
        myJourney: 'Moja podróż',
        title:
          'Pozwól mi się przedstawić, abyś mógł/mogła mnie lepiej poznać. Na poniższym osi czasu znajdują się najważniejsze momenty mojej kariery.',
      },
      skills: {
        list: 'Wyświetl w formie listy',
        fancy: 'Wyświetl w stylu fancy',
        live: 'Live',
        code: 'Kod',
        empty: 'Podana fraza - <b>{ phrase }</b> - nie została odnaleziona.',
        tips: 'Podpowiedzi:',
        useOneOfPhrase: 'Uzyj jeden z fraz:',
        features: 'Cechy projektu',
        technologies: 'Uzyte technologie',
        googleSearch: 'Szukaj w Google',
        feelingLucky: 'Szczesliwy traf',
      },
      error: {
        desc: 'Oh no... it looks your are lost.',
        home: 'Take me home',
        error: 'Error {code}',
      },
      homePage: 'Strona główna',
      aboutPage: 'O mnie',
      skillsPage: 'Umiejętności i Projekty',
      contactPage: 'Kontakt',
    },
  },
}))
