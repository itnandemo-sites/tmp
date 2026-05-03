      // 画像のファイル名リスト
        const imageFiles = [
            'sugo1.png',
            'sugo2.png',
            'sugo3.png',
            'sugo4.png',
            'sugo5.png',
            'sugo6.png',
            'sugo1.png'
        ];
        const folderPath = "../../img/"; // 画像フォルダ名
        // -----------------

        function showRandomImage() {
            // ランダムに配列のインデックスを選ぶ
            const randomIndex = Math.floor(Math.random() * imageFiles.length);
            const selectedImage = folderPath + imageFiles[randomIndex];

            // img要素を作成して表示
            const imgElement = document.createElement("img");
            imgElement.src = selectedImage;
            imgElement.alt = "読み込まれない";

            const container = document.getElementById("image-container");
            container.innerHTML = ""; // 前の画像をクリア
            container.appendChild(imgElement);
        }

        // ページ読み込み時に実行
        window.onload = showRandomImage;