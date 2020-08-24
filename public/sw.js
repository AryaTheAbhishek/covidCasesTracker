self.addEventListener('install', (event) => {
    // console.log('Installed');
});

self.addEventListener('activate', (event) => {
    // console.log('Activated');
});

self.addEventListener('fetch', (event) => {
    // console.log('Fetch request');
});



// importScripts('https://www.gstatic.com/firebasejs/7.14.5/firebase.js');
self.addEventListener('notificationclose', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;

  console.log('Closed notification: ' + primaryKey);
});
self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('https://www.meabhishek.com');
    notification.close();
  }
});


self.addEventListener('push', function(e) {
  var body;

  if (e.data) {
    body = e.data.text();
  } else {
    body = 'Push message no payload';
  }

  var options = {
    body: body,
    icon: 'notification.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {action: 'explore', title: 'Explore Details',
        icon: 'explore.png'},
      {action: 'close', title: 'I don\'t want any of this',
        icon: 'close.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Covid Update', options)
  );
});