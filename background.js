chrome
  .contextMenus
  .create({
    contexts: ['selection'],
    id: 'google-maps-search',
    title: 'Search Google Maps for "%s"'
  });

chrome
  .contextMenus
  .onClicked
  .addListener((info, tab) => {
    if (info.menuItemId === 'google-maps-search') {
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.selectionText)}`;
      chrome.tabs.create({ url: url });
    }
});
