const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;
let count = 0;
let autoPlayInterval;
function updateListBackground() {
  for (let i = 0; i < lists.length; i++) {// インジゲーターの色
    lists[i].style.backgroundColor = i === count % totalSlides ? '#ec499a' : '#fff';
  }
}
function nextClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count++;
  slide.classList.add(`slide${count % totalSlides + 1}`);
  updateListBackground();
}
function prevClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count--;
  if (count < 0) count = totalSlides - 1;
  slide.classList.add(`slide${count % totalSlides + 1}`);
  updateListBackground();
}
function startAutoPlay() {
  autoPlayInterval = setInterval(nextClick, 3000);
}
function resetAutoPlayInterval() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}


next.addEventListener('click', () => {
  nextClick();
  resetAutoPlayInterval();
});
prev.addEventListener('click', () => {
  prevClick();
  resetAutoPlayInterval();
});
indicator.addEventListener('click', (event) => {
  if (event.target.classList.contains('list')) {
    const index = Array.from(lists).indexOf(event.target);
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count = index;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
    resetAutoPlayInterval();
  }
});
startAutoPlay();

/メニュー/
window.onload = function () {
  var nav = document.getElementById('nav-wrapper');
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
  blackBg.addEventListener('click', function () {
    nav.classList.remove('open');
  });
};

/メニュー t閉じる動作/
window.onload = function () {
  var nav = document.getElementById('nav-wrapper');
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');
  var navLinks = nav.querySelectorAll('a'); // メニュー内のリンクをすべて取得

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  blackBg.addEventListener('click', function () {
    nav.classList.remove('open');
  });

  // リンクがクリックされたときにもメニューを閉じる
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });
};




document.addEventListener('DOMContentLoaded', () => {
  modalTriggers();
});

function modalTriggers() {
  // 両方の「開く」ボタンを取得
  const openButtons = document.querySelectorAll('.open-modal, .open-modal2');
  // 両方の「閉じる」ボタンを取得
  const closeButtons = document.querySelectorAll('.close-btn, .close-btn2');
  // 両方のモーダル背景を取得
  const modals = document.querySelectorAll('.modal, .modal2');

  // 開くボタンのクリックイベント
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.dataset.modal;
      const modal = document.getElementById(`modal-${modalId}`);
      if (modal) {
        modal.classList.add('active');
      }
    });
  });

  // 閉じるボタンのクリックイベント
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.dataset.modal;
      const modal = document.getElementById(`modal-${modalId}`);
      if (modal) {
        modal.classList.remove('active');
      }
    });
  });

  // モーダルの背景クリックで閉じる処理
  modals.forEach(modal => {
    modal.addEventListener('click', e => {
      // 背景がクリックされた場合だけ閉じる
      if (e.target.classList.contains('modal') || e.target.classList.contains('modal2')) {
        modal.classList.remove('active');
      }
    });
  });
}


function openModal(modalId) {
  const modal = document.getElementById(`modal-${modalId}`);
  if (modal) {
    modal.classList.add('active');

    // 💡 モーダルが表示された直後にスライダーをリセット
    setTimeout(() => {
      const slide = modal.querySelector('#slide');
      if (slide) {
        slide.classList.remove(`slide${(count % totalSlides) + 1}`);
        void slide.offsetWidth; // 強制リフロー（再描画）
        slide.classList.add(`slide${(count % totalSlides) + 1}`);
      }
    }, 300); // 100ms 後に実行することで、モーダルの描画完了を待つ
  }
}

// 警告文
function checkViewportRatio() {
  const warning = document.getElementById('warning');
  const aspectRatio = window.innerWidth / window.innerHeight;

  // 縦長スマホ比率（例：360x640 → 0.56）が0.7以下ならOK
  if (aspectRatio < 0.7) {
    warning.style.display = 'none';
  } else {
    warning.style.display = 'flex';
  }
}

// 初回チェックとリサイズ時チェック
window.addEventListener('load', checkViewportRatio);
window.addEventListener('resize', checkViewportRatio);


// ランダムに画像表示　モーダル２ーーーーーーーーーーーーーーーーーーーー
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'img/game/1/2.jpg',
    'img/game/2/2.jpg',
    'img/game/3/2.jpg',
    'img/game/4/2.jpg',
    'img/game/5/2.jpg'
  ];

  // ボタンとモーダル、画像要素を取得
  const playButton = document.querySelector('.open-modal2.open-btn2');
  const modal = document.getElementById('modal-7');
  const randomImage = document.getElementById('randomImage');
  const closeBtn = modal.querySelector('.close-btn2');

  // ボタンを押したらモーダル開いて画像セット
  playButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImage.src = images[randomIndex];

    modal.classList.add('active');
  });

  // 閉じるボタンでモーダル閉じて画像リセット
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    randomImage.src = '';
  });

  // モーダルの背景クリックで閉じる
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      randomImage.src = '';
    }
  });
});

