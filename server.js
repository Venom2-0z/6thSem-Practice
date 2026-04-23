const expess = require('express');
const app = expess();
const PORT = 3000;
let x;
app.get('/', (req, res) => {
    res.send('Hello World');
}); 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})