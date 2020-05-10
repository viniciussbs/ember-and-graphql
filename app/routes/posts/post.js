import Route from '@ember/routing/route';
import { queryManager } from 'ember-apollo-client';
import PostQuery from 'ember-and-graphql/gql/queries/post.graphql';

export default class PostsPostRoute extends Route {
  @queryManager apollo

  model({ id }) {
    return this.apollo.watchQuery({ query: PostQuery, variables: { id } });
  }
}
