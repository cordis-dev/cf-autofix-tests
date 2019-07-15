if (!!foo) {
    // ...
}

const userA = getUser('existingUser'); // { name: Patrick, status: 'cool' }
const userB = getUser('nonExistingUser'); // null

const userAExists = !!userA; // true
