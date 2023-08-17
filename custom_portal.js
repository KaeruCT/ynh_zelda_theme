var init_portal_original = init_portal;
var init_portal = function() {
    init_portal_original();
    var script = document.querySelector("script[src$='custom_portal.js']");
    var base = script.src.replace("custom_portal.js", "");
    var bgImages = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
    var i = Math.floor(Math.random() * bgImages.length);
    document.body.style.backgroundImage = `url(${base + bgImages[i]})`;
};