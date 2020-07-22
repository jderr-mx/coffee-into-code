import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  classNames: ["post-template"],

  model(params) {
    // load authors first for ember-data autopopulation
    return this.store.findAll('author').then(() => {
      return hash({
        post: this.store.findRecord('content', params.id),
        posts: this.store.findAll('content'),
      });
    });
  },

  afterModel({post}) {

    const headTags = [
      {
        type: 'meta',
        tagId: 'twitter-card',
        attrs: {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      },
      {
        type: 'meta',
        tagId: 'twitter-site',
        attrs: {
          name: 'twitter:site',
          content: '@johnderrdotnet'
        }
      },
      {
        type: 'meta',
        tagId: 'twitter-title',
        attrs: {
          name: 'twitter:title',
          content: post.title
        }
      },
      {
        type: 'meta',
        tagId: 'twitter-image',
        attrs: {
          name: 'twitter:image',
          content: post.image
        }
      },
      {
        type: 'meta',
        tagId: 'twitter-image-alt',
        attrs: {
          name: 'twitter:image:alt',
          content: post.title
        }
      },


    ];
    this.set('headTags', headTags);
  }
});
