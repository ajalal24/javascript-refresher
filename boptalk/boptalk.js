let text = 'Bob';

for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == 'a' || text.charAt(i) == 'e' || text.charAt(i) == 'i' || text.charAt(i) == 'o' || text.charAt(i) == 'u') {
        console.log(true);
    } else {
        console.log(false);
    }
}