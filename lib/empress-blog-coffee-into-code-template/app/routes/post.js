import postRoute from 'empress-blog/routes/post';
import { inject as service } from '@ember/service';
import config from 'coffee-into-code/config/environment';

export default class PostRoute extends postRoute{
  @service headData;

  afterModel({post}) {
    const headTags = [
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:site',
        content: `${config.blog.twitter}`
      },
      {
        name: 'twitter:title',
        content: post.title
      },
      {
        name: 'twitter:image',
        content: `${config.blog.host}${post.image}`
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
