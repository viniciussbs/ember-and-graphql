import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { guidFor } from '@ember/object/internals';
import CreatePostMutation from 'ember-and-graphql/gql/mutations/create-post.graphql';

export default class PostsNewController extends Controller {
  @service apollo

  @action
  async createPost(post) {
    let postAttributes = { ...post, id: guidFor(post) };

    try {
      let { post } = await this.apollo.mutate({ mutation: CreatePostMutation, variables: postAttributes });

      this.transitionToRoute('posts.post', post.id);
    } catch({ errors }) {
      let errorMessages = errors.map((error) => error.message);
      window.alert(errorMessages.join('\n'));
    }
  }
}
