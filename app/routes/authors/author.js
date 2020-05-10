import Route from '@ember/routing/route';
import { queryManager } from 'ember-apollo-client';
import AuthorQuery from 'ember-and-graphql/gql/queries/author.graphql';

export default class AuthorsAuthorRoute extends Route {
  @queryManager apollo

  model({ id }) {
    return this.apollo.watchQuery({ query: AuthorQuery, variables: { id } });
  }
}
