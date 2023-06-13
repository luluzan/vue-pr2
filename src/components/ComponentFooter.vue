



<template>
    <footer>

        <section class="container-footer-links">

        <section class="contact-info">

            <h4>Contact info</h4>
            <ul class="contact-info-list">
            <li><i class="fas fa-map-marker"></i>
                22 Innovation Street, CA, US
            </li>
            <li><i class="fas fa-envelope"></i> <a href="mailto:office@syncmobile.com">office@syncmobile.com</a></li>
            <li><i class="fas fa-phone"></i> <a href="tel:+44 376 945 23">+44 376 945 23</a>
            </li>
            </ul>

        </section>

        <section class="value-links">

            <h4>Value Links</h4>
            <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Article Details</a></li>
            </ul>

        </section>

        <section class="other-apps">

            <h4>Other Apps</h4>
            <ul>
            <li><a href="#">Scientific Calculator</a></li>
            <li><a href="#">Advanced Timer</a></li>
            <li><a href="#">Music Store</a></li>
            </ul>

        </section>

        <section class="social-links">

            <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.pinterest.com/"><i class="fa-brands fa-pinterest-p"></i></a>
            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>

        </section>

        </section>

        <div class="copyright">
        <p>Copyright <i class="fa fa-copyright"></i>2020 Inovatik - All rights reserved</p>
        </div>
    </footer>
</template>


<style scoped>

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  min-height: 100%;
  background-color: #f7fafd;
  border-top: 1px solid #c8d4d6;
  padding: 5vh 5vw 2vh;
  gap: 2vh;
  color: #868687;
}

.container-footer-links {
  display: flex;
  justify-content: space-around;
}

.container-footer-links ul,
.container-footer-links a {
  text-decoration: none;
  list-style: none;
  color: #868687;
  padding: 0;
}

footer h4 {
  margin: 0;
}

footer p,
footer li {
  font-size: 0.8rem;
  margin: 0;
  line-height: 1.5rem;
}

.fa-map-marker {
  padding-right: 6px;
}

.social-links {
  display: flex;
  gap: 2vw;
}

.social-links a {
  display: inline-block;
  height: 35px;
  width: 35px;
  background-color: #868687;
  text-align: center;
  line-height: 35px;
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.5s ease;
}

.social-links a:hover {
  color: #24262b;
  background-color: #ffffff;
}

.copyright {
  margin: auto;
}

.copyright p {
  text-align: center;
  margin: 0;
}

@media (max-width: 810px) {
  .download-iphone-img {
    margin-top: 0;
  }

  .container-footer-links {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .social-links {
    justify-content: flex-end;
  }
}
</style>

<script>
</script>