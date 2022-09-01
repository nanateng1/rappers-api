const {response} = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

//data for api
const rappers = {
  sarkodie: {
    birthName: 'Michael Owusu Addo',
    age: 34,
    birthPlace: 'Tema, Ghana',
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sarkodie-1.jpg',
  },
  tinny: {
    birthName: 'Nii Addo Quaynor',
    age: 40,
    birthPlace: 'Accra, Ghana',
    img: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Tinny_on_stage_in_2012.jpg',
  },
  stonebwoy: {
    birthName: 'Livingstone Etse Satekla',
    age: 34,
    birthPlace: 'Ashaiman, Ghana',
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Stonebwoy_Burniton.JPG',
  },
  unknown: {
    birthName: 'Sorry we only upload hitmakers',
    age: 34,
    birthPlace: 'Ghost Town',
    img: 'https://gifimage.net/wp-content/uploads/2017/09/404-gif-7.gif',
  },
};

//initial get request
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

//reponse for a json
app.get('/api/:rapperName', (request, reponse) => {
  const rappersName = request.params.rapperName.toLowerCase();
  if (rappers[rappersName]) {
    reponse.json(rappers[rappersName]);
  } else {
    response.json(rappers['unknown']);
  }
});

app.get('/api', (request, reponse) => {
  reponse.json(rappers);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port  ${PORT}! You better go catch it!`);
});
