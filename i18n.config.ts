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
        infoProjects:
          "* Projects are being sorted by the project importance/complexity. So basically, on the top there are my best projects I'm proud of. On the bottom of the list are the projects which are not that important and complex.",
        infoSkills:
          "* Skills are being sorted by the skills knowledge level. So basically, on the top there are skills I've been using for a long time aspecially as a commercial usage. On the bottom, there are skills I'm not that familiar with, but still used them in some projects (also commercial).",
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
            subject: 'Pytanie',
            message: 'Cześć! Chciałbym zapytać o...',
          },
          send: 'Wyślij wiadomość',
          validations: {
            emailRequired: 'Pole e-mail jest wymagane',
            invalidEmail: 'Nieprawidłowy format e-maila',
            maxLength: 'Maksymalna długość to {length}',
            fieldRequired: 'Pole {field} jest wymagane',
            error:
              'Wystąpił błąd w trakcie wysyłania Twojego formularza. Spróbuj ponownie później.',
            success: 'Wiadomość została wysłana poprawnie.',
          },
        },
        header: {
          or: '-LUB-',
          other: 'Sprawdź inne opcje kontaktu',
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
        myJourney: 'Moja historia',
        title:
          'Pozwól mi się przedstawić, abyś mógł/mogła mnie lepiej poznać. Na poniższej osi czasu znajdują się najważniejsze momenty mojej kariery.',
      },
      skills: {
        list: 'Wyświetl w formie listy',
        fancy: 'Wyświetl w stylu fancy',
        live: 'Live',
        code: 'Kod',
        empty: 'Podana fraza - <b>{ phrase }</b> - nie została odnaleziona.',
        tips: 'Podpowiedzi:',
        useOneOfPhrase: 'Użyj jednej z fraz:',
        features: 'Cechy projektu',
        technologies: 'Użyte technologie',
        googleSearch: 'Szukaj w Google',
        feelingLucky: 'Szczęśliwy traf',
        infoProjects:
          '* Projekty są sortowane według ważności/złożoności projektu. Zatem w zasadzie na górze znajdują się moje najlepsze projekty, z których jestem dumny. Na dole listy znajdują się projekty, które nie są aż tak ważne i złożone.',
        infoSkills:
          '* Umiejętności są sortowane według poziomu wiedzy umiejętności. Zasadniczo na górze znajdują się umiejętności, których używam od dłuższego czasu, szczególnie w celach komercyjnych. Na dole znajdują się umiejętności, z którymi nie jestem zbyt zaznajomiony, ale nadal korzystam z nich w niektórych projektach (także komercyjnych).',
      },
      error: {
        desc: 'O nie... wygląda na to, że się zgubiłeś/zgubiłaś.',
        home: 'Zabierz mnie do domu',
        error: 'Błąd {code}',
      },
      homePage: 'Strona główna',
      aboutPage: 'O mnie',
      skillsPage: 'Umiejętności i Projekty',
      contactPage: 'Kontakt',
    },

  },
}))
