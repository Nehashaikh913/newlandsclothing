<?php
include('./include/header.php')
?>
<section class="home__page pb-lg-5">
    <div class="banner pt-5 pt-lg-0">
        <img src="./assets/images/Newlands Clothings/HOME PAGE - BANNER.WEBP" alt="banner-image">
        <div class="content">
            <h1>Bringing You the Elements of Style </h1>
            <div class="buttons">
                <div class="btn first-btn">
                  <a href="./mens.php">Mens</a>
                </div>
                <div class="btn sec-btn">
                <a href="./womens.php">Womens</a>
                </div>
            </div>
            <a onclick="scrollToElement('top')" >Explore All<i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </div>
    <div class="products_section">
        <div class="section-heading" id="top">Womens Dress</div>
        <div class="container-fluid">
            <div class="row owl-carousel home-carousel-0">
            </div>
        </div>
    </div>
    <div class="products_section">
        <div class="section-heading">Mens Hoodie</div>
        <div class="container-fluid">
            <div class="row owl-carousel home-men-carousel-0">
            </div>
        </div>
    </div>
    <div class="products_section">
        <div class="section-heading">Womens denim</div>
        <div class="container-fluid">
            <div class="row owl-carousel home-carousel-1">
            </div>
        </div>
    </div>
    <div class="products_section">
        <div class="section-heading">Mens Shirt</div>
        <div class="container-fluid">
            <div class="row owl-carousel home-men-carousel-1">
            </div>
        </div>
    </div>
</section>
<?php
include('./include/footer.php')
?>