// 生成物（build.mjs）。見本の請求書のクリック拡大だけ
// 見本の請求書はクリックで拡大する（全ページ版の画像を開く。Escか外側のクリックで閉じる）
const box = document.createElement('div');
box.className = 'zoom'; box.innerHTML = '<button aria-label="閉じる">×</button><img alt="">';
document.body.append(box);
const close = () => box.classList.remove('open');
box.addEventListener('click', e => { if (e.target !== box.querySelector('img')) close(); });
addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
document.querySelectorAll('img.pdf, .samples img').forEach(img => {
  img.tabIndex = 0; img.style.cursor = 'zoom-in'; img.title = 'クリックで拡大';
  const open = () => { const z = box.querySelector('img'); z.src = img.src.replace(/\.png$/, '-full.png'); z.alt = img.alt; box.classList.add('open'); };
  img.addEventListener('click', open); img.addEventListener('keydown', e => { if (e.key === 'Enter') open(); });
});

