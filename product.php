<?php 
include('./include/header.php')
?> 
<script>

</script>
<section class="productpage">
  <div class="productpage-main">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 product-img">
          <img class="singleProImage" src="./assets/images/Newlands Clothings/Product Image/Sports-Wear-PNG-Photos.png" alt="">
        </div>
        <div class="col-lg-7 product-content">
          <h2>Men’s Sports Tshirts and Shorts</h2>
          <span>Select Size</span>
          <div class="size-btns">
            <button class="sizebtn active" data-id="btn1">32</button>
            <button class="sizebtn" data-id="btn2">34</button>
            <button class="sizebtn" data-id="btn3">36</button>
            <button class="sizebtn" data-id="btn4">38</button>
          </div>
          <div class="hide-div-phn d-flex">
            <p class="singleProPrice">$19.21</p>
            <div class="inc-dec d-flex">
              <button class="counterbtn increase">
                <i class="fa-solid fa-plus"></i>
              </button>
              <p id="value">1</p>
              <button class="counterbtn decrease">
                <i class="fa-solid fa-minus"></i>
              </button>
            </div>
          </div>
          <div class="buynow-cart">
            <button class="buynow" data-bs-toggle="modal" data-bs-target="#exampleModal">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    <!-- related -->
    <div class="related mb-5=">
      <div class="tshirt-heading">
        <h2>Related Products</h2>
      </div>
      <div class="products_section">
        <div class="container-fluid">
            <div class="row owl-carousel home-carousel-0">
            </div>
        </div>
    </div>
    </div>
    <!-- modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog checkoutform">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="checkout-h modal-title" id="exampleModalLabel">Order Form</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="form-inside">
              <form>
                <div class="mb-3 mt-3">
                  <input type="text" class="form-control" id="" placeholder="Name" name="name">
                </div>
                <div class="mb-3 mt-3">
                  <input type="email" class="form-control" id="" placeholder="Email" name="email">
                </div>
                <div class="mb-3 mt-3">
                  <input type="number" class="form-control" id="" placeholder="Mobile" name="number">
                </div>
                <div class="row mb-3">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="State" name="State">
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Country" name="country">
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="City" name="city">
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Pincode" name="pincode">
                  </div>
                </div>
                <div class="form-group mb-3">
                  <textarea class="form-control" rows="5" id="" placeholder="Address"></textarea>
                </div>
                <div class="form-btn-in d-flex justify-content-center">
                  <button type="submit" class="form-btn">Order</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- modal -->
    </div>
</section> 
<?php 
include('./include/footer.php')
?>