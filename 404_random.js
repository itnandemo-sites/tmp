const result = document.getElementById("random")
const random =["＊ し か し 誰 も 来 な か っ た 。","何を四天王！？","6年で迷子か...","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nここには戻るボタンがない。つまりお前は404ページに閉じ込められたのだ！404ページがお前の墓場になるのだ！\nAHAHAHAHAHAHAHA!!!","YOOOOOOOOO","未知のページってみんな知らないと思うんですよ。","一生404の文字でも眺めとけ","人の心無いんか？","ほら言ったでしょ？手を出さないほうが良いって。"]
const number = Math.floor(Math.random() * random.length);
result.textContent = random[number]