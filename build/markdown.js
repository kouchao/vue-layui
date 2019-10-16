const MarkdownItContainer = require('markdown-it-container');
const MarkdownItCheckBox = require('markdown-it-task-checkbox');
const MarkdownItDec = require('markdown-it-decorate');

/**
 * 增加 hljs 的 classname
 */
const wrapCustomClass = function (render) {
  return function (...args) {
    return render(...args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
};

const vueMarkdown = {
  raw: true,
  // 定义处理规则
  preprocess: function (MarkdownIt, source) {
    // 表格
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">';
    };

    // ```html``` 给这种样式加个class hljs
    MarkdownIt.renderer.rules.fence = wrapCustomClass(
      MarkdownIt.renderer.rules.fence
    );
    // ```code``` 给这种样式加个class code_inline
    const codeInline = MarkdownIt.renderer.rules.code_inline;
    MarkdownIt.renderer.rules.code_inline = function (...args) {
      args[0][args[1]].attrJoin('class', 'code_inline');
      return codeInline(...args);
    };
    return source;
  },
  use: [
    // 'markdown-it-container'的作用是自定义代码块
    [
      MarkdownItContainer,
      'demo',
      {
        validate: params => params.trim().match(/^demo\s*(.*)$/),
        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return `<demo-block>
                        <div slot="highlight">`;
          }
          return '</div></demo-block>\n';
        }
      }
    ],
    [require('markdown-it-container'), 'tip'],
    [require('markdown-it-container'), 'warning'],
    [
      MarkdownItCheckBox,
      {
        disabled: true
      }
    ],
    [MarkdownItDec]
  ]
};
module.exports = vueMarkdown;
