import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

function contentSummary(args) {
  let [content, summaryLength = 300] = args;
  if(content.length <= summaryLength) {
    return content;
  } else{
    return htmlSafe(content.substr(0, content.lastIndexOf(' ', summaryLength)) + htmlSafe(' <span class="text-bold text-gray-500">[more]</span>'));
  }
}

export default helper(contentSummary)
