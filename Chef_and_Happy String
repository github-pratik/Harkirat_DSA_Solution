//Chef and Happy String
//Learning Purpose

//1 - Codechef solution basic
function addOne(tests) {
    let t = parseInt(tests[0]);
    for (let i = 1; i < tests.length; i++) {
        let str = tests[i];
        let cnt = 0;
        let judge = true;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
                cnt++;
            }
            else {
                cnt = 0;
            }
            if (cnt > 2) {
                judge = false;
                console.log('Happy');
                break;
                continue;
            }

        }
        if (judge) console.log('Sad');
        // Write your code here
    }
}

//optimal Soltuion using test function
function addOne(tests) {
    let t = parseInt(tests[0]); // First line is the number of test cases
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    for (let i = 1; i <= t; i++) { // Loop through each test case starting from index 1
        let s = tests[i];
        let cnt = 0;
        let happy = false;
        
        for (let j = 0; j < s.length; j++) {
            if (vowels.has(s[j])) {
                cnt++; // Increment count if the character is a vowel
            } else {
                cnt = 0; // Reset count if the character is not a vowel
            }
            
            if (cnt > 2) {
                happy = true;
                break; // If find more than 2 contiguous vowels, break the loop
            }
        }
        
        if (happy) {
            console.log('HAPPY');
        } else {
            console.log('SAD');
        }
    }
}
