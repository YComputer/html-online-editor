

$(function(){
    var htmlSrc = `<!--html 代码编辑区-->
<!DOCTYPE html>
<html>
<body>
<h1>欢迎来到 <span>小栈编程</span></h1><br>
<h2>(请在左边的代码编辑框输入你的代码)</h2><br>
</body>
</html>
`;
    var cssSrc = `/*css代码编辑区*/
  
  body {
  padding-top: 80px;
  text-align: center;
  background: url(https://media.giphy.com/media/rWY9ySfjytitq/giphy.gif) 50%;
  background-size: cover;
}
h1, h2, h3, h4, h5, h6 {
  display: inline-block;
  background: #fff;
}
h1 {
  font-size: 30px
}
h2 {
  font-size: 20px;
}
span {
  background: #fd0;
}
`;
    var jsSrc = `// javascript 代码编辑区
  
  alert('小栈编程')
  var fun = function(arg){
      console.log(arg)
  }
  fun('mini stack')
`;
                // html edit area
                window.htmlEditor = ace.edit("html-editor");
                htmlEditor.setTheme("ace/theme/tomorrow_night_eighties");
                htmlEditor.getSession().setMode("ace/mode/html");
                htmlEditor.setValue(htmlSrc);
                // css edit area
                window.cssEditor = ace.edit("css-editor");
                cssEditor.setTheme("ace/theme/tomorrow_night_eighties");
                cssEditor.getSession().setMode("ace/mode/css");
                cssEditor.setValue(cssSrc);
                // javascript edit area
                window.jsEditor = ace.edit("js-editor");
                jsEditor.setTheme("ace/theme/tomorrow_night_eighties");
                jsEditor.getSession().setMode("ace/mode/javascript");
                jsEditor.setValue(jsSrc);

                var iframe = document.getElementById('preview'),
                iframeWin = iframe.contentWindow || iframe,
                iframeDoc = iframe.contentDocument || iframeWin.document;

                // 这代码执行效率有点低，待改进。
                iframeDoc.open();
                iframeDoc.write(htmlEditor.getValue()+`<style>`+cssEditor.getValue()+`</style>`+`<script>`+jsEditor.getValue()+`<\/script>`);
                iframeDoc.close();

                htmlEditor.getSession().on('change', function(e) {
                  iframeDoc.open();
                  iframeDoc.write(htmlEditor.getValue()+`<style>`+cssEditor.getValue()+`</style>`+`<script>`+jsEditor.getValue()+`<\/script>`);                
                  iframeDoc.close();
                });

                cssEditor.getSession().on('change', function(e) {
                  iframeDoc.open();
                  iframeDoc.write(htmlEditor.getValue()+`<style>`+cssEditor.getValue()+`</style>`+`<script>`+jsEditor.getValue()+`<\/script>`);                
                  iframeDoc.close();
                });

                jsEditor.getSession().on('change', function(e) {
                  iframeDoc.open();
                  iframeDoc.write(htmlEditor.getValue()+`<style>`+cssEditor.getValue()+`</style>`+`<script>`+jsEditor.getValue()+`<\/script>`);                
                  iframeDoc.close();
                });
            })
