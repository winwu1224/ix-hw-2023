// Asynchronous
console.log('1');

setTimeout(() => {
  console.log('2');
}, 3000);

console.log('3');

// Callbacks (old)

const phoneBook = [
  {name: 'Cameron', number: '1'},
  {name: 'Winston', number: '2'},
  {name: 'Joey', number: '3'},
];

function getPhoneNumbers()  {
  setTimeout(() => {
    let output = '<ol>';

    for (let i = 0; i < phoneBook.length; i++) {
      let contact = phoneBook[i];
      output += '<li>' + contact.name + ' ' + contact.number + '</li>';
    }

    output += '</ol>';
    document.body.innerHTML = output;
  }, 1000);
}

getPhoneNumbers();

function saveContact(contact, callback) {
  setTimeout(() => {
    phoneBook.push(contact);

    // alert('Contact Added');

    callback();
  }, 3000);
}

saveContact({name: 'Jerry', number: '4'}, getPhoneNumbers);

// Promises (old)

function saveContact(contact) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // const err = true;
      const err = false;

      if(!err) {
        console.log('Success');
        resolve();
      } else {
        reject('Err: Something went wrong!');
      }
    }, 3000);
  });
}

saveContact({name: 'Aaron', number: '5'})
.then(getPhoneNumbers)
.catch(() => {
  console.log(err);
});

// Async Await (new standard)

async function init() {
  await saveContact({name: 'Eric', number: '6'});
  console.log('Contact Added!');
}

init();

// init();

async function start() {
  try {
    await saveContact({name: 'Joel', number: '7'});
    getPhoneNumbers();
    console.log('Here we are in async await land');
  } catch(err) {
    console.log(err);
  }
}

start();