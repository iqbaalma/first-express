const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Halaman Home page!')
});

app.get('/ayang', (req, res) => {
    res.send('ayanggggg')
});

app.get('/search', (req, res) => {
    // console.log(req.query);
    const {q} = req.query

    if (!q) {
        return res.send("<h1>Data tidak ada!</h1>")
    }

    res.send(`<h1>Search keyword: ${q}</h1>`)
});

app.get('/undangan/:tamu/:alamat', (req, res) => {
    const {tamu, alamat} = req.params;
    res.send(`Bermaksud mengundang Saudara/i ${tamu} di ${alamat}`)
});

app.get('*', (req, res) => {
    res.send('Halaman 404')
});

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});