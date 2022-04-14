import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import layout from '../templates/components/post-card';
import showdown from 'showdown';
const summaryLength = 300;

export default class PostCard extends Component {
  layout = layout;
  tagName =  '';

  get contentSummary() {
  const converter = new showdown.Converter();
  let content = this.post.content;
    if(content.length <= summaryLength) {
      return content
    } else{
      let abbrevContent = content.substr(0, content.lastIndexOf(' ', summaryLength))
      return htmlSafe(converter.makeHtml(abbrevContent) + htmlSafe(' <span class="text-gray-500">[more]</span>'));
    }
  }
}
