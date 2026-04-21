---
name: Zicheng Yin | Ray Yin
bio: |
  Music Technology student at Shanghai Conservatory of Music (Class of 2027).
  Guitarist & artist. Focused on creative coding, AI, and game production.
avatar: images/avatar.jpeg
social:
  github: https://github.com/ZichengYin
  bilibili: https://space.bilibili.com/287010574
  youtube: https://www.youtube.com/channel/UC_i40jBOcn6bBhMjUT14XgA
  email: 760729@qq.com
---
<style>
.photo-carousel {
    overflow-x: hidden;
    white-space: nowrap;
    margin: 2rem 0;
    position: relative;
}
.photo-track {
    display: inline-block;
    white-space: nowrap;
    animation: scroll 20s linear infinite;
}
.photo-track:hover {
    animation-play-state: paused;
}
.photo-item {
    display: inline-block;
    width: 280px;
    margin-right: 1rem;
    vertical-align: top;
    cursor: pointer;
}
.photo-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
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
</style>

## MY WORK

<div class="photo-carousel">
    <div class="photo-track">
        <!-- 原始照片 -->
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/1.jpg" alt="band"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/2.jpg" alt="music activities"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/3.png" alt="school life"></div>
        <!-- 复制一份用于无缝衔接 -->
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/1.jpg" alt="band"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/2.jpg" alt="music activities"></div>
        <div class="photo-item" onclick="openLightbox(this)"><img src="images/3.png" alt="school life"></div>
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