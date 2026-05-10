document.addEventListener('DOMContentLoaded', () => {
            const scrollToTopButton = document.querySelector('.scroll-to-top');

            if (scrollToTopButton) {
                scrollToTopButton.addEventListener('click', (event) => {
                    event.preventDefault(); // デフォルトのアンカーリンク動作を無効化

                    // スムーズスクロールを実行
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
        });
