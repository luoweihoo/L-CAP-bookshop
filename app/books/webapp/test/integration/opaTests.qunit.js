sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cap/bookshop/books/test/integration/FirstJourney',
		'cap/bookshop/books/test/integration/pages/BooksList',
		'cap/bookshop/books/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cap/bookshop/books') + '/index.html'
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