sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cap/books/manage/managebooks/test/integration/FirstJourney',
		'cap/books/manage/managebooks/test/integration/pages/BooksList',
		'cap/books/manage/managebooks/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cap/books/manage/managebooks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);