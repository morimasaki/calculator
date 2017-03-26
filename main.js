    //始め
    enchant();
    window.onload = function() {
        //Gameオブジェクトの生成
        var game = new Game(320, 320);
        game.preload("clear.png", "gameover.png", "chara1.png");
        game.onload = function() {
            var button1 = createButton("1", 15, 260);
            game.rootScene.addChild(button1);
            button1.ontouchend = function() {
              suuti(1);
            }
            var button2 = createButton("2", 110, 260);
            game.rootScene.addChild(button2);
            button2.ontouchend = function() {
                suuti(2);
            }
            var button3 = createButton("3", 205, 260);
            game.rootScene.addChild(button3);
            button3.ontouchend = function() {
                suuti(3);
            }
            var button4 = createButton("4", 15, 210);
            game.rootScene.addChild(button4);
            button4.ontouchend = function() {
                suuti(4);
            }
            var button5 = createButton("5", 110, 210);
            game.rootScene.addChild(button5);
            button5.ontouchend = function() {
                suuti(5);
            }
            var button6 = createButton("6", 205, 210);
            game.rootScene.addChild(button6);
            button6.ontouchend = function() {
                suuti(6);
            }
            var button7 = createButton("7", 15, 160);
            game.rootScene.addChild(button7);
            button7.ontouchend = function() {
                suuti(7);
            }
            var button8 = createButton("8", 110, 160);
            game.rootScene.addChild(button8);
            button8.ontouchend = function() {
                suuti(8);
            }
            var button9 = createButton("9", 205, 160);
            game.rootScene.addChild(button9);
            button9.ontouchend = function() {
                suuti(9);
            }
            var button0 = createButton("0", 15, 110);
            game.rootScene.addChild(button0);
            button0.ontouchend = function() {
                var value = $('#calc').val();
                if (value !== ''){
                       suuti(0);
            }
            }
            var buttonc = createButton("c", 205, 10);
            game.rootScene.addChild(buttonc);
            buttonc.ontouchend = function() {
                $('#calc').val('');
            }
            var buttonplus = createButton("+", 110, 110);
            game.rootScene.addChild(buttonplus);
            buttonplus.ontouchend = function() {
                var value = $('#calc').val();
                if ((value !== '') && (value !== '+')){
                suuti('+');}
            }
            var buttonminus = createButton("－", 110, 60);
            game.rootScene.addChild(buttonminus);
            var buttoncross = createButton("×", 205, 110);
            game.rootScene.addChild(buttoncross);
            var buttonper = createButton("÷", 205, 60);
            game.rootScene.addChild(buttonper);
            var buttonikoru = createButton("＝", 15, 60);
            game.rootScene.addChild(buttonikoru);
            //ラベルの生成
            //var label = new Label();
            //label.text = "こんにちは";
            //文字フォントの指定
            label.font = "35px sans-serif";
            //文字色の指定
            label.color = "rgb(0,0,0)";
            //位置の指定
            label.x = 15;
            label.y = 10;
            //シーンにラベルを追加
            game.rootScene.addChild(label);


            /* var button = new Button("1", "light");
    button.font = "35px serif";
    button.width = 0;
    button.height = 40;
    button.moveTo(15, 240);
    game.rootScene.addChild(button);*/
        };
        //ゲームの開始
        game.start();
    };

    function suuti(text) {
        var value = $('#calc').val(); // calcno atai wo syutoku suru
        $('#calc').val(value + text);
    }

    function createButton(text, x, y) {
        //ボタンのオブジェクトを作る
        var button = new Button(text, "blue");
        //ボタンに表示されているフォント
        button.font = "35px serif";
        //ボタンの幅
        button.width = 0;
        //ボタンの高さ
        button.height = 40;
        //ボタンの位置
        button.moveTo(x, y);
        return button;
    }