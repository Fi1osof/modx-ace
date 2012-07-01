define("ace/theme/github",["require","exports","module","ace/lib/dom"],function(a,b,c){b.isDark=!1,b.cssClass="ace-github",b.cssText="/* CSS style content from github's default pygments highlighter template.\n   Cursor and selection styles from textmate.css. */\n.ace-github .ace_editor {\n  color: #333;\n  background-color: #F8F8F8;\n  border: 1px solid #CCC;\n  font: 13px 'Bitstream Vera Sans Mono', Courier, monospace !important;\n  line-height: 19px !important;\n  overflow: auto;\n  padding: 6px 10px;\n  border-radius: 3px;\n  position: relative;\n  margin-bottom: 15px;\n}\n\n.ace-github .ace_gutter {\n  background: #e8e8e8;\n  color: #AAA;\n}\n\n.ace-github .ace_scroller {\n  background: #fff;\n}\n\n.ace-github .ace_keyword {\n  font-weight: bold;\n}\n\n.ace-github .ace_string {\n  color: #D14;\n}\n\n.ace-github .ace_variable.ace_class {\n  color: teal;\n}\n\n.ace-github .ace_constant.ace_numeric {\n  color: #099;\n}\n\n.ace-github .ace_constant.ace_buildin {\n  color: #0086B3;\n}\n\n.ace-github .ace_support.ace_function {\n  color: #0086B3;\n}\n\n.ace-github .ace_comment {\n  color: #998;\n  font-style: italic;\n}\n\n.ace-github .ace_variable.ace_language  {\n  color: #0086B3;\n}\n\n.ace-github .ace_paren {\n  font-weight: bold;\n}\n\n.ace-github .ace_boolean {\n  font-weight: bold;\n}\n\n.ace-github .ace_string.ace_regexp {\n  color: #009926;\n  font-weight: normal;\n}\n\n.ace-github .ace_variable.ace_instancce {\n  color: teal;\n}\n\n.ace-github .ace_constant.ace_language {\n  font-weight: bold;\n}\n\n.ace-github .ace_text-layer {\n}\n\n.ace-github .ace_cursor {\n  border-left: 2px solid black;\n}\n\n.ace-github .ace_cursor.ace_overwrite {\n  border-left: 0px;\n  border-bottom: 1px solid black;\n}\n\n.ace-github .ace_marker-layer .ace_active_line {\n  background: rgb(255, 255, 204);\n}\n.ace-github .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n.ace-github.multiselect .ace_selection.start {\n  box-shadow: 0 0 3px 0px white;\n  border-radius: 2px;\n}\n/* bold keywords cause cursor issues for some fonts */\n/* this disables bold style for editor and keeps for static highlighter */\n.ace-github.ace_editor .ace_line > span {\n    font-weight: normal !important;\n}\n\n.ace-github .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-github .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-github .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-github .ace_gutter_active_line{\n    background-color : rgba(0, 0, 0, 0.07);\n}\n\n.ace-github .ace_marker-layer .ace_selected_word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n\n}\n\n.ace-github .ace_print_margin {\n  width: 1px;\n  background: #e8e8e8;\n}";var d=a("../lib/dom");d.importCssString(b.cssText,b.cssClass)})