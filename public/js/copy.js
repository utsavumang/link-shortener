function copyToClipboard() {
  const text = document.getElementById('shortUrl').href;
  navigator.clipboard.writeText(text).then(() => {
    alert('Short URL copied to clipboard!');
  }).catch(err => {
    alert('Failed to copy: ' + err);
  });
}