import Route from '@ember/routing/route';
import { queryManager } from 'ember-apollo-client';
import HomeQuery from 'ember-and-graphql/gql/queries/home.graphql';

export default class HomeRoute extends Route {
  @queryManager apollo

  model() {
    return this.apollo.watchQuery({ query: HomeQuery });
  }
}
