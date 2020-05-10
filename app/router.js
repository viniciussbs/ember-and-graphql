import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home', { path: '/' });

  this.route('posts', function() {
    this.route('post', { path: ':id' });
  });

  this.route('authors', function() {
    this.route('author', { path: ':id' });
  });
});
