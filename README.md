jq.htmlmockhelper
=================

jQuery plugin for HTML mockup.

---

HTMLモックアップを作るときに便利かもしれないしそうでもないかもしれないものを適当に書いてみた。

さっと使えれば良いので、細かい追加の文字やらHTMLやらは直接js触ればいいかなと思っている！

#使い方

##1. jqueryを読み込む

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript" src="jq.htmlmockhelper.js"></script>

##2. htmlにidやらclassを指定する

*繰り返し処理したいもの : .copyobj
*ダミーテキスト : .dummy

##3. jQuery書いて起動

動作は"mode"で切り替え。
*headline : 見出し文字数表示
*repeat : 繰り返し（ループ的な）
*text : ダミーテキスト

###見出しタグの文字数表示
    $("body").htmlmockhelper({"mode" : "headline"});

###繰り返し処理
    $("#demo2").htmlmockhelper({"mode" : "repeat", "repeat" : 3});
repeatに入れた数字で回数を設定。

####ダミーテキスト
    $("#dummyTxtDemo").htmlmockhelper({"mode" : "text", "text" : 300, "textstr" : "ダミーテキストを入れるといいと思う。"});
textでダミーテキストの文字数、txtstrで繰り返すダミー文章を設定。
