import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import UpdatePostMutation from 'ember-and-graphql/gql/mutations/update-post.graphql';

export default class PostsEditController extends Controller {
  @service apollo

  @action
  async updatePost(post) {
    try {
      let data = await this.apollo.mutate({ mutation: UpdatePostMutation, variables: { ...post } });

      this.transitionToRoute('posts.post', data.post.id);
    } catch({ errors }) {
      window.alert(errors.map((e) => e.message).join('\n'));
    }
  }
}
