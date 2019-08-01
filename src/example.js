function favoriteFiles(container, button, dialogApi, settings) {
  $.each(settings.favoriteFiles, function(i, uuid) {
    container.append(
      $('<img>', {
        class: 'favorite-files-image',
        src: `${settings.cdnBase}/${uuid}/-/scale_crop/280x280/center/`,
      }).on('click', function(e) {
        dialogApi.addFiles([uploadcare.fileFrom('uploaded', uuid, settings)]);
      })
    );
  });
}
