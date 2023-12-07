
function openLightbox(imageUrl) {
  $.fancybox.open({
    src: imageUrl,
    type: "image",
    opts: {
      // You can add additional options here if needed
    },
  });
}
