        function filterAnnouncements(category) {
            const allLinkElements = document.querySelectorAll('.announcement-container > a');
            const overviewSection = document.querySelector('.announcement-container > .category-section.all');
            // --- MODIFICATION START --- //
            const noAnnouncementsMessage = document.getElementById('no-announcements-message');
            let clickableAnnouncementsVisible = 0;
            // --- MODIFICATION END --- //

            // まず全てのクリック可能なアナウンスセクションを非表示にする
            allLinkElements.forEach(element => {
                element.style.display = 'none';
            });
            // 概要セクションも最初は非表示にする ( 'all'選択時のみ表示するため )
            if (overviewSection) {
                overviewSection.style.display = 'none';
            }

            if (category === 'all') {
                // 「すべて」が選択されたら、全てのクリック可能なアナウンスを表示
                allLinkElements.forEach(element => {
                    element.style.display = 'block';
                    // --- ADDITION START --- //
                    clickableAnnouncementsVisible++;
                    // --- ADDITION END --- //
                });
                // 「すべて」選択時は概要セクションも表示
                if (overviewSection) {
                    overviewSection.style.display = 'block';
                }
            } else {
                // 特定のカテゴリが選択されたら、該当するクリック可能なアナウンスのみ表示
                allLinkElements.forEach(element => {
                    const innerSection = element.querySelector('.category-section');
                    if (innerSection && innerSection.dataset.category === category) {
                        element.style.display = 'block';
                        // --- ADDITION START --- //
                        clickableAnnouncementsVisible++;
                        // --- ADDITION END --- //
                    }
                });
            }

            // --- ADDITION START --- //
            // クリック可能なアナウンスが一つも表示されていない場合、「お知らせなし」メッセージを表示
            if (noAnnouncementsMessage) {
                if (clickableAnnouncementsVisible === 0) {
                    noAnnouncementsMessage.style.display = 'block';
                } else {
                    noAnnouncementsMessage.style.display = 'none';
                }
            }
            // --- ADDITION END --- //

            // アクティブボタンのスタイルを更新
            const buttons = document.querySelectorAll('.category-buttons button');
            buttons.forEach(button => {
                if (button.onclick.toString().includes(`'${category}'`)) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }

        // ページロード時に「すべて」カテゴリをアクティブにする
        document.addEventListener('DOMContentLoaded', () => {
            filterAnnouncements('all');
        });
