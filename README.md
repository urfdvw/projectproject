# 圣经章节快速查找投影工具

## 目的
通过制作所述工具，学习网页制作的相关技术，如html, CSS, Javascript, jQuery等。
实现方式可能有非常多种，可以一一尝试。

## 设计要求
核心要求：可以通过简单的键盘命令，根据书名和章节，在数秒内找到并投影出某一经节和其前后文。以满足主日信息时快速投放出讲员所提到的经节。
- 投影的实现，app分为两个窗口
    - 主窗口的功能有：
        - 查找章节
        - 选择检索方式：中，英，中英
        - 选择译本
        - 显示和恢复历史
        - 预览经文
    - 副窗口的功能就是显示圣经
        - 显示选中的译本
        - 可以滚动
        - 分节高亮
- 查找经文
    - 界面：
        - 输入框：用于输入指令
        - 联想框：用于显示联想
        - 预览框：用于显示当前选中的章节
    - 简单的键盘命令：
        - 可以通过各种输入方式快速联想出所需要的书名（大小写一律不分）。可以通过复选框关闭英文检索或中文检索。
            - 英文书名，如 1Corinthians 
            - 英文简写，如 1co
            - 中文书名，如 哥林多前书
            - 中文简写，如 林前
            - 中文书名全拼，如 gelinduoqianshu
            - 中文简写全拼，如 linqian
            - 中文书名拼音首字母，gldqs
            - 中文简写拼音首字母，lq
            - 不完整中文拼音，如 gelinq 和 linq
            - *注：本project的动机就是因为中文区用户记忆英文书名和简写不容易，所以加如拼音的选项。且仍保留中文，以照顾使用模糊拼音和比划的用户*
        - 空格或任何标点都可以用来分隔，章节和书名的顺序不重要。如哥林多前书3章5节可以由以下输入找到：
            - 哥林多前书 3 5
            - 3 5 lq
            - 1co 3:5
            - linqian, 3,5
        - 可以通过键盘实现基本的控制指令
            - 有联想时数字键选择联想，无联想时数字键输入数字
            - 回车进行投影，并清空输入且光标放回原处
            - 预览框中信息不完整时，回车清空输入(或者其他快捷键)
            - 在输入框按上键recall history items
- 副助功能
    - 历史记录
        - 显示已经投影过的经文
        - 点击历史记录可以回放
    - 投影预览，用途暂时不明确
    - 向下翻页功能，方便阅读

## 方案1
由于检索书名和投影显示是相对独立的，于是可以分开来尝试
- 投影显示
    - 开一个副窗，然后把instantbible.org的内容投影过去
- 检索书名
    - json存储书名数据
    - 模糊搜索查找书名
    - 输入法式的界面

## 实施

### 投影显示
- 打开一个新的窗口, t01t02, [link](https://www.w3schools.com/jsref/met_win_open.asp)

用instantbible.org显示经文
- 跳转到某网址, t02, [link](https://stackoverflow.com/a/506004)
- 延迟执行某项命令, t02, [link](https://www.w3schools.com/jsref/met_win_settimeout.asp)
- split a string by regrex, t02, [link](https://stackoverflow.com/a/10346754)

从数据库调圣经出来
- 在窗口中加入内容, t01, [link](https://www.w3schools.com/jsref/met_document_createelement.asp)
- 清理屏幕, t01, [link](https://stackoverflow.com/a/9967560)

### 检索书名
数据预备。
如果不把圣经数据放在app里面的话，数据就只有书名，没有必要还从后台调数据。
最简单的把数据放在前端的方式，就是在代码中直接加入[json](https://www.w3schools.com/js/js_json.asp)

将CSV转换为JSON，python code
- read csv as utf8 [link](https://stackoverflow.com/a/14786752)
- dump json as utf8 [link](https://stackoverflow.com/a/18337754)

read JSON into a page, t03
- side load js script [link](https://www.w3schools.com/js/js_whereto.asp)
- JSON can be used as dictionary [link](https://www.w3schools.com/js/js_json_objects.asp)
- get all keys of a JSON object [link](https://stackoverflow.com/a/46009173)

模糊搜索, t03
- determine wether a item in array js [link](https://stackoverflow.com/a/2555311)

快捷键
- trigger action by keyboard actions, t04, [link](https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp)
- test key values, t05

部分基本完备，开始搭建
- return multiple values [link](https://stackoverflow.com/a/2917186)
- [toString](https://www.w3schools.com/jsref/jsref_tostring_number.asp)
- [all to lower case](https://www.quora.com/How-do-you-convert-a-string-to-lowercase-in-JavaScript)
- [replace](https://www.w3schools.com/jsref/jsref_replace.asp)
- [hide element](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp)
- [add a button](https://stackoverflow.com/a/6956368)

界面的改进，用drop down list显示联想
- [从鼠标drop](https://stackoverflow.com/a/26319325)
- [还是从鼠标](https://stackoverflow.com/a/17296060)
- [光标位置in int](https://stackoverflow.com/a/48150864)
- [almost the thing](https://medium.com/@jh3y/how-to-where-s-the-caret-getting-the-xy-position-of-the-caret-a24ba372990a)

尝试读懂上面最后一条的内容
- [=>](https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc)
    - [const](https://www.w3schools.com/js/js_const.asp)
        - [const and let](https://blog.pragmatists.com/let-your-javascript-variables-be-constant-1633e56a948d)
    - why arrow functions are constant, I guess the answer is whatever.

set element position test08
- [set style](https://www.w3schools.com/jsref/prop_style_left.asp)
- [set visibility](https://www.w3schools.com/cssref/pr_class_visibility.asp)

get cater position test09
- [offset property](https://www.w3schools.com/jsref/prop_element_offsettop.asp)
- [use this package](https://github.com/component/textarea-caret-position/blob/master/index.js)
- [line height](https://github.com/component/textarea-caret-position/issues/48)
