sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cap/books/browse/browsebooks/test/integration/FirstJourney',
		'cap/books/browse/browsebooks/test/integration/pages/BooksList',
		'cap/books/browse/browsebooks/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cap/books/browse/browsebooks') + '/index.html'
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