var header = document.getElementsByTagName("header")[0];
var footer = document.getElementsByTagName("footer")[0];

footer.innerHTML = `
<div class="column quick-links">
  <h3>QUICK LINKS</h3>
  <p><a href="menu.html">Menu</a></p><p><a href="gallery.html">Gallery</a></p>
  <p><a href="contactus.html">Contact us</a></p>
</div>
<div class="column location">
  <h3>LOCATION</h3>
  <p>A-239 Ground Floor, Kaushambi, Gaziabad, Uttar Pradesh 201012</p>
  <p>9650701892</p>
</div>
<div class="column socials">
  <h3>SOCIALS</h3>
  <div class="flex">
    <div class="icon">
      <img src="/src/images/social_icons/instagram_icon.png" alt="" />
    </div>
    <div class="icon">
      <img src="/src/images/social_icons/whatsapp_icon.png" alt="" />
    </div>
    <div class="icon">
      <img src="/src/images/social_icons/facebook_icon.png" alt="" />
    </div>
  </div>
</div>`;

function dashboard() {
  window.loacation.href = "sellerDashboard.html";
}