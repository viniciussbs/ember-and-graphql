import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { queryManager } from 'ember-apollo-client';
import AuthorNamesQuery from 'ember-and-graphql/gql/queries/author-names.graphql';

export default class PostFormComponent extends Component {
  @tracked authors = []
  @tracked post = {}

  @queryManager apollo

  constructor() {
    super(...arguments);
    this.post = {...this.args.post};
  }

  @action
  async loadAuthors() {
    try {
      let data = await this.apollo.watchQuery({ query: AuthorNamesQuery });
      this.authors = [...data.allAuthors];
    } catch (error) {
      // Não me importo no momento.
    }
  }

  @action
  save(post, event) {
    event.preventDefault();
    this.args.onSave(post);
  }
}
