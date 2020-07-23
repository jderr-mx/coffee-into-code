import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class PostRoute extends Route{
  @service headData;
  classNames =  ["post-template"];

  model(params) {
    // load authors first for ember-data autopopulation
    return this.store.findAll('author').then(() => {
      return hash({
        post: this.store.findRecord('content', params.id),
        posts: this.store.findAll('content'),
      });
    });
  }

  afterModel({post}) {
    const headTags = [
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:site',
        content: '@johnderrdotnet'
      },
      {
        name: 'twitter:title',
        content: post.title
      },
      {
        name: 'twitter:image',
        content: `${window.origin}${post.image}`
      },
      {
        name: 'twitter:image:alt',
        content: post.title
      },
      {
        name: 'twitter:description',
        content: post.content
      },
    ];
    this.headData.headTags = headTags;
  }
}
