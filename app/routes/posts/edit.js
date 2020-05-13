import Route from '@ember/routing/route';
import { queryManager } from 'ember-apollo-client';
import PostToEditQuery from 'ember-and-graphql/gql/queries/post-to-edit.graphql';

export default class PostsEditRoute extends Route {
  @queryManager apollo

  model({ id }) {
    return this.apollo.watchQuery({ query: PostToEditQuery, variables: { id } });
  }
}
