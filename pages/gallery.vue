<template>
    <div class="w-full h-[100vh]">
        <h1 class="w-full text-center text-4xl font-bold text-[#ef476f]">Gallery</h1>
        <div id="gallery">
            <figure v-for="(img, index) in images" :key="index" :class="`gallery-item-${index}`">
                <img class="w-[180px]" :src="img.src" :alt="img.alt" :title="img.title">
                <figcaption>{{ img.title }}</figcaption>
		    </figure>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref,  onMounted, onBeforeUnmount } from "vue";

interface Image {
    src: string;
	alt: string;
    title: string;
}

const images = ref<Image[]>([
    {
        'src': 'https://drive.miyago9267.com/d/file/img/mygo/%E5%A5%BD%E5%8F%AF%E6%84%9B%E5%96%94.jpg?t=1733197297393',
        'alt': '好可愛喔',
        'title': '好可愛喔'
    },
    {
        'src': 'https://drive.miyago9267.com/d/file/img/mygo/%E5%A5%BD%E5%8F%AF%E6%84%9B%E5%96%94.jpg?t=1733197297393',
        'alt': '好可愛喔',
        'title': '好可愛喔'
    },
    {
        'src': 'https://drive.miyago9267.com/d/file/img/mygo/%E5%A5%BD%E5%8F%AF%E6%84%9B%E5%96%94.jpg?t=1733197297393',
        'alt': '好可愛喔',
        'title': '好可愛喔'
    },
    {
        'src': 'https://drive.miyago9267.com/d/file/img/mygo/%E5%A5%BD%E5%8F%AF%E6%84%9B%E5%96%94.jpg?t=1733197297393',
        'alt': '好可愛喔',
        'title': '好可愛喔'
    },
    {
        'src': 'https://drive.miyago9267.com/d/file/img/mygo/%E5%A5%BD%E5%8F%AF%E6%84%9B%E5%96%94.jpg?t=1733197297393',
        'alt': '好可愛喔',
        'title': '好可愛喔'
    },
    {
        'src': 'https://drive.miyago9267.com/d/file/img/mygo/%E5%A5%BD%E5%8F%AF%E6%84%9B%E5%96%94.jpg?t=1733197297393',
        'alt': '好可愛喔',
        'title': '好可愛喔'
    },
    {
        'src': 'https://drive.miyago9267.com/d/file/img/mygo/%E5%A5%BD%E5%8F%AF%E6%84%9B%E5%96%94.jpg?t=1733197297393',
        'alt': '好可愛喔',
        'title': '好可愛喔'
    }
]);

const galleryRef = ref<HTMLElement | null>(null);
const time = 10000;

const animStart = () => {
  if (galleryRef.value && !galleryRef.value.classList.contains('active')) {
    galleryRef.value.classList.add('active');
    setTimeout(() => {
      animEnd();
    }, time);
  }
};

const animEnd = () => {
  if (galleryRef.value) {
    galleryRef.value.classList.remove('active');
    // Force reflow to restart animation
    void galleryRef.value.offsetWidth;
  }
};

onMounted(() => {
  const handleScroll = () => {
    animStart();
  };

  const handleResize = () => {
    animStart();
  };

  document.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);

  // Initial animation trigger
  animStart();

  onBeforeUnmount(() => {
    document.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  });
});

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@400&display=swap");
:root {
	--adjust-size: 0px; /* 必要に応じて */
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html,
body {
	overscroll-behavior-x: none;
	overscroll-behavior-y: none;
	scroll-behavior: smooth;
}
body {
	position: relative;
	color: #222;
	font-family: "Kalam", sans-serif;
	min-height: 100vh;
	overflow-x: hidden;
	background-image: url("https://images.unsplash.com/photo-1531685250784-7569952593d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMyOTE2OTh8&ixlib=rb-4.0.3&q=100&w=3000");
	background-size: cover;
}
main {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 100vw;
	min-height: 100vh;
	overflow-x: hidden;
}
p {
	line-height: 1;
}
a {
	color: crimson;
	text-decoration: none;
}
img {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	pointer-events: none;
}
#gallery {
	position: relative;
	left: calc(-1 * var(--adjust-size));
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	/* grid-template-columns: repeat(6, minmax(16rem, 1fr)); */
	gap: 20px;
	max-width: 100vw;
	padding: 20px;
	-webkit-perspective: 0;
	perspective: 0;
}
#gallery figure:nth-child(7n) {
	--duration: 1s;
	--pin-color: crimson;
}
#gallery figure:nth-child(7n + 1) {
	--duration: 1.8s;
	--pin-color: hotpink;
}
#gallery figure:nth-child(7n + 2) {
	--duration: 1.3s;
	--pin-color: magenta;
}
#gallery figure:nth-child(7n + 3) {
	--duration: 1.5s;
	--pin-color: orangered;
}
#gallery figure:nth-child(7n + 4) {
	--duration: 1.1s;
	--pin-color: darkorchid;
}
#gallery figure:nth-child(7n + 5) {
	--duration: 1.6s;
	--pin-color: deeppink;
}
#gallery figure:nth-child(7n + 6) {
	--duration: 1.2s;
	--pin-color: mediumvioletred;
}
#gallery figure:nth-child(3n) {
	--angle: 3deg;
}
#gallery figure:nth-child(3n + 1) {
	--angle: -3.3deg;
}
#gallery figure:nth-child(3n + 2) {
	--angle: 2.4deg;
}
#gallery figure:nth-child(odd) {
	--direction: alternate;
}
#gallery figure:nth-child(even) {
	--direction: alternate-reverse;
}
#gallery figure {
	--angle: 3deg;
	--count: 5;
	--duration: 1s;
	--delay: calc(-0.5 * var(--duration));
	--direction: alternate;
	--pin-color: red;

	position: relative;
	display: inline-block;
	margin: var(--adjust-size);
	padding: 0.5rem;
	border-radius: 5px;
	box-shadow: 0 7px 8px rgba(0, 0, 0, 0.4);
	width: 100%;
	height: auto;
	text-align: center;
	background-color: ghostwhite;
	background-image: url("https://images.unsplash.com/photo-1629968417850-3505f5180761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMzMjQ3ODJ8&ixlib=rb-4.0.3&q=80&w=500");
	background-size: cover;
	background-position: center;
	background-blend-mode: multiply;

	transform-origin: center 0.22rem;
	will-change: transform;
	break-inside: avoid;
	overflow: hidden;
	outline: 1px solid transparent;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}
#gallery.active figure {
	animation-duration: var(--duration), 1.5s;
	animation-delay: var(--delay),
		calc(var(--delay) + var(--duration) * var(--count));
	animation-timing-function: ease-in-out;
	animation-iteration-count: var(--count), 1;
	animation-direction: var(--direction), normal;
	animation-fill-mode: both;
	animation-name: swing, swingEnd;
}
#gallery figure:after {
	position: absolute;
	top: 0.22rem;
	left: 50%;
	width: 0.7rem;
	height: 0.7rem;
	content: "";
	background: var(--pin-color);
	border-radius: 50%;
	box-shadow: -0.1rem -0.1rem 0.3rem 0.02rem rgba(0, 0, 0, 0.5) inset;
	filter: drop-shadow(0.3rem 0.15rem 0.2rem rgba(0, 0, 0, 0.5));
	transform: translateZ(0);
	z-index: 2;
}
figure img {
	aspect-ratio: 1 /1;
	width: 100%;
	object-fit: cover;
	display: block;
	border-radius: 5px;
	margin-bottom: 10px;
	z-index: 1;
}
figure figcaption {
	font-size: 14px;
	font-weight: 400;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	z-index: 1;
}
figure h2 {
	color: crimson;
	font-size: 22px;
}
figure p {
	font-size: 17px;
}
figure small {
	font-size: 12px;
}
figure > div {
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}
@keyframes swing {
	0% {
		transform: rotate3d(0, 0, 1, calc(-1 * var(--angle)));
	}
	100% {
		transform: rotate3d(0, 0, 1, var(--angle));
	}
}
@keyframes swingEnd {
	to {
		transform: rotate3d(0, 0, 1, 0deg);
	}
}
#info {
	position: relative;
	text-align: center;
	z-index: 1;
}
#info a {
	font-size: 1.1rem;
}
/*
@media (orientation: landscape) {
	#gallery {
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	}
}
*/
@media (min-width: 800px) {
	#gallery {
		grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
	}
}

</style>