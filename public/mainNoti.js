var firebaseConfig = {
    apiKey: "AIzaSyDvVrK5GPb7mQOX0C-7COhhKpq86aOUWn8",
    authDomain: "covid19tracker-bdfc1.firebaseapp.com",
    databaseURL: "https://covid19tracker-bdfc1.firebaseio.com",
    projectId: "covid19tracker-bdfc1",
    storageBucket: "covid19tracker-bdfc1.appspot.com",
    messagingSenderId: "317250962846",
    appId: "1:317250962846:web:fc9a674b32c8cada1e828f",
    measurementId: "G-N6MLXCYKY8"
  };
  firebase.initializeApp(firebaseConfig);
//   console.log(firebase);

  var database = firebase.database();
  var ref = database.ref('usrData');

  var reff = database.ref('feedback');


Notification.requestPermission(function(status) {
	console.log('Notification permission status:', status);
    if (status === "granted") {
  		/* do our magic */
  		subscribe();
		subscribeUser();
	}

});


const publicVapidKey = 'BEaU89tlUZfSNTWPUUSmRoWWxiRer1wdWsbtlh1eWS2qK13WMXtXszR3kLu9Tp2aYr0jTjmwHQkRkrkNNwkdo78';

function subscribeUser() {

	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.ready.then(function(reg) {

		// 	serviceWorkerRegistration.pushManager.subscribe({
		  reg.pushManager.subscribe({
		    userVisibleOnly: true,
		  	applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
		  })
		  .then(function(sub) {
		    // console.log('Endpoint URL: ', sub.endpoint);
		  }).catch(function(e) {
		    if (Notification.permission === 'denied') {
		      console.warn('Permission for notifications was denied');
		    } else {
		      console.error('Unable to subscribe to push', e);
		    }
		  });
		})
	}
}


function subscribe(){
	if ('serviceWorker' in navigator) {
	  navigator.serviceWorker.register('sw.js').then(function(reg) {
	    // console.log('Service Worker Registered!', reg);

	    reg.pushManager.getSubscription().then(function(sub) {
	      if (sub === null) {
	        // Update UI to ask user to register for Push
			// alert('Unable to Drop Caches Please Reload the Page');
			if(!alert('Unable to Drop Caches Please Reload the Page!')){window.location.reload();}
	        console.log('Not subscribed to push service!');
	      } else {
	        // We have a subscription, update the database
	        // console.log('Subscription object: ', sub);
	        // console.log('Subscription object: ', JSON.stringify(sub));
	        var endpoint = sub.endpoint;
            var urKeys = sub.getKey('p256dh');
            var auth = sub.getKey('auth');
            sendSubscriptionToServer(endpoint, urKeys, auth);
            // sendSubscriptionToServer(sub);
	      }
	    });
	  })
	   .catch(function(err) {
	    console.log('Service Worker registration failed: ', err);
	  });
	}
}


function sendSubscriptionToServer(endpoint, key, auth) {
	var encodedKey = btoa(String.fromCharCode.apply(null, new Uint8Array(key)));
	var encodedAuth = btoa(String.fromCharCode.apply(null, new Uint8Array(auth)));

	const newData = {
		endpoint: endpoint,
		keys: encodedKey,
		auth: encodedAuth
	}

	// ref.push(newData);

	var ref = database.ref('usrData');
	ref.on('value', gotdata, errData);


	function gotdata(data){
		var usrData = data.val();
		var keys = Object.keys(usrData);

		// console.log(keys.length);
		// console.log(newData)

		if (keys.length == 0){
			ref.push(newData);
			console.log('First data inserted to the Database');
		}
		else {
			var arr = [];
			for (var i = 0; i < keys.length; i++){
				var k = keys[i];
				var oldData = {};
				oldData.endpoint = usrData[k].endpoint;
				oldData.usrKeys = usrData[k].urKeys;
				oldData.auth = usrData[k].auth;
				arr.push(oldData);
			}
			var index = arr.findIndex(x => x.endpoint == endpoint);
			if (index === -1){
				ref.push(newData);
				console.log('New data inserted to the Database');
			}
			else {
				console.log('Same value already exist');
			}
		}
	}
	function errData(err){
		console.log(err);
	}
	// ref.push(data);
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
