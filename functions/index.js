'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
exports.countstatus = functions.database.ref('/status/{statususerid}/statusItem/{statusid}').onWrite(async (change) => {
	const collectionRef = change.after.ref.parent;
	const countRef = collectionRef.parent.child('statuscount');

	let increment;
	if (change.after.exists() && !change.before.exists()) {
		increment = 1; 
	} else if (!change.after.exists() && change.before.exists()) {
		increment = -1;
	} else {
		return null;
	}

	await countRef.transaction((current) => {
		return (current || 0) + increment;
	});
	console.log('Counter Updated.');
	return null
});

exports.recountStatus = functions.database.ref('/status/{statususerid}/statuscount').onWrite(async (snap) => {
  const counterRef = snap.ref;
  const collectionRef = counterRef.parent.child('likes');


  // Return the promise from counterRef.set() so our function
  // waits for this async event to complete before it exits.
  const messagesData = await collectionRef.once('value');
  return await counterRef.set(messagesData.numChildren());
});