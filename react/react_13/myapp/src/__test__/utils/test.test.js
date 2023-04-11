console.log('estas son pruebas de JavaScript sin React')

const frameworks = ["React", "Vue", "Angular", "Svelte"];

// Test arrays
test("It should has React", () => {
  expect(frameworks).toContain("React");
});

// Test numbers
test("It should be greater than", () => {
  expect(10).toBeGreaterThan(9);
});

// Test Booleans
test("It should be true", () => {
  expect(true).toBeTruthy();
});

// Reverse strings function
const reverseString = (str, cb) => {
  cb(str.split("").reverse().join(""));
};

// Test callbacks
test("The callback should return a reversed word", () => {
  reverseString("Platzi", str => {
    expect(str).toBe("iztalP");
  });
});


// Probando promesas .then
test('Probar una promesa', ()=> {
    return reverseString2('hola')
        .then(string => {
            expect(string).toBe('aloh')
        })
})

test('Probar async/await', async ()=>{
    const string = await reverseString2('hola');
    expect(string).toBe('aloh')
})