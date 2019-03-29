<template>
  <div class="owl-carousel owl-theme">
    <div class="item">
        <img src="@/assets/img/1.jpg" alt="">
    </div>
    <div class="item">
        <img src="@/assets/img/2.jpg" alt="">
    </div>
    <div class="item">
        <img src="@/assets/img/3.jpg" alt="">
    </div>
  </div>
</template>

<script>

export default {
  created() {
      $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            center: true,
            mouseDrag: true,
            autoplay: true
        })
    })
  }
};
</script>

<style lang="scss">
.owl-carousel {
    display: flex;
    justify-content: space-around;
}
.item {
    max-width: 300px;
    position: relative;

    img {
        width: 100%;
    }
}
</style>