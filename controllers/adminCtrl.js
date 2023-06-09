const siteData = require('../data/siteData');
const Book = require('../models/bookModel');
const Author = require('../models/authorModel');

module.exports = {
  admin: (request, response) => {
    if (request.isAuthenticated()) {
      response.render('pages/admin', {
        copyrightYear: siteData.year
      });
    } else {
      response.redirect('/login')
    }
  },
  admin_books: (request, response) => {
    if(request.isAuthenticated()){
      Book.find({}).then(allBooks => {
        if(error){
          return error;
        } else {
          response.render('pages/adminBooks', {
            copyrightYear: siteData.year,
            inventoryArray: allBooks
          });
        }
      })
    } else {
      response.redirect('/login')
    }
  },
  create_book: (request, response) => {
    if (request.isAuthenticated()) {
      response.render('pages/bookCreate', {
        copyrightYear: siteData.year,
      });
    } else {
      response.redirect('/login')
    }
  },
  admin_authors: (request, response) => {
    if(request.isAuthenticated()){
      Author.find({}).then(allAuthors => {
        if(error){
          return error;
        } else {
          response.render('pages/adminAuthors', {
            copyrightYear: siteData.year,
            authorArray: allAuthors
          });
        }
      })
    } else {
      response.redirect('/login')
    }
  },
  create_author: (request, response) => {
    if(request.isAuthenticated()){
      response.render('pages/authorCreate', {
        copyrightYear: siteData.year,
      });
    } else {
      response.redirect('/login')
    }
  },
  book_update_get: (request, response) => {
    if(request.isAuthenticated()){
      const { _id } = request.params;
      Book.findOne({_id: _id}).then(foundBook => {
        if(error) {
          return error;
        } else {
          response.render('pages/updateBook', {
            copyrightYear: siteData.year,
            foundBook: foundBook
          });
        }
      });    
    } else {
      response.redirect('/login')
    }
  },
  author_update_get: (request, response) => {
    if(request.isAuthenticated()){
      const { _id } = request.params;
      Author.findOne({_id: _id}).then(foundAuthor => {
        if(error) {
          return error;
        } else {
          response.render('pages/updateAuthor', {
            copyrightYear: siteData.year,
            foundAuthor: foundAuthor
          });
        }
      });   
    } else {
      response.redirect('/login')
    }
  }
}