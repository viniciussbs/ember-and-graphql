'use strict';

module.exports = function(app) {
  let jsonGraphqlExpress = require('json-graphql-server').default;

  let data = {
    posts: [
      { id: 1, title: 'Sejam bem-vindos!', body: 'Em breve muito conteúdo sobre o Meetup Ember BR.', views: 0, author_id: 1 }
    ],
    authors: [
      { id: 1, name: 'Vinícius Sales', description: 'Não sou de falar muito sobre mim.' }
    ]
  };

  app.use('/graphql', jsonGraphqlExpress(data));
};
