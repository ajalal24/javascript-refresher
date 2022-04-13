const peers = ['Nathalie', 'Mattea', 'Annie', 'Masha', 'Katie', 'Alea'];

console.table(peers);

peers.push('Crissy');

console.log(peers);

for (let i = 0; i < peers.length; i++) {
    console.log(peers[i]);
}

//Another version of for loop
for (let peer of peers) {
    console.log(peer)
}

peers.sort(); //Alphabetically
console.log(peers);

peers[0] = "Jalal";
console.log(peers);