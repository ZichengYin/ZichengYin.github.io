---
name: Zicheng Yin | Ray Yin
bio: |
  Music Technology student at Shanghai Conservatory of Music (Class of 2027).
  Guitarist & artist. Focused on creative coding, AI, and game production.
  Check out my work: project demos on YouTube & Bilibili, art portfolio on Lofter.
avatar: images/avatar.jpeg
social:
  github: https://github.com/ZichengYin
  bilibili: https://space.bilibili.com/287010574
  youtube: https://www.youtube.com/channel/UC_i40jBOcn6bBhMjUT14XgA
  lofter: https://senai050208.lofter.com
  email: lawliet760729@outlook.com
---
<style>
.photo-carousel {
    overflow-x: hidden;
    white-space: nowrap;
    margin: 1rem -1rem 2rem -1rem;
    position: relative;
}

.photo-track {
    display: inline-block;
    white-space: nowrap;
    animation: scroll 40s linear infinite;
}

.photo-track:hover {
    animation-play-state: paused;
}

.photo-item {
    display: inline-block;
    width: 260px;
    margin-right: 1rem;
    vertical-align: top;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.photo-item:hover {
    transform: scale(1.02);
}

.photo-item img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: box-shadow 0.2s ease;
}

.photo-item img:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    z-index: 9999;
    cursor: pointer;
    justify-content: center;
    align-items: center;
}

.lightbox img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
}

.lightbox.show {
    display: flex;
}

/* 小字号标题样式 */
.section-title {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 2px;
    margin: 1.5rem 0 1rem 0;
    color: #555;
    text-transform: uppercase;
}
</style>

## <span class="section-title">MOMENTS</span>

<div class="photo-carousel">
    <div class="photo-track">
        <!-- 原始照片 -->
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/1.jpg" alt="photo 1"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/5.jpg" alt="photo 2"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/4.jpg" alt="photo 4"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/2.jpg" alt="photo 5"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/6.jpg" alt="photo 6"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/12.jpg" alt="photo 7"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/8.jpg" alt="photo 8"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/9.jpg" alt="photo 9"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/10.jpg" alt="photo 10"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/11.jpg" alt="photo 11"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/7.jpg" alt="photo 12"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/13.jpg" alt="photo 13"></div>
        <!-- 复制一份用于无缝滚动 -->
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/1.jpg" alt="photo 1"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/5.jpg" alt="photo 2"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/4.jpg" alt="photo 4"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/2.jpg" alt="photo 5"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/6.jpg" alt="photo 6"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/12.jpg" alt="photo 7"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/8.jpg" alt="photo 8"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/9.jpg" alt="photo 9"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/10.jpg" alt="photo 10"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/11.jpg" alt="photo 11"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/7.jpg" alt="photo 12"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/13.jpg" alt="photo 13"></div>
    </div>
</div>

<div id="lightbox" class="lightbox" onclick="closeLightbox()">
    <img id="lightbox-img" src="">
</div>

<script>
function openLightbox(element) {
    var img = element.querySelector('img');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.classList.add('show');
}
function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
}
</script>
