import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Welcome(props) {
return  (    
<div>
  <h1>Selamat Datang {props.name}</h1>
  <p>Kamu memiliki NIM {props.nim}</p>
  <ul>
      {props.namaMatkul.map((post) =>
        <li key={post.id}>
          <b>{post.title}</b> {post.content}
        </li>
      )}
    </ul>
</div>);
}

function App() {
  const namaMatkul = [
    {id: 1, title: 'Calculus', content: 'Merupakan sebuah mata kuliah yang dimana mempelajari Matematika  '},
    {id: 2, title: 'Praktikum Multimedia 2021', content: 'Merupakan sebuah mata kuliah yang dimana mempelajari Multimedia'}
  ];
  return (
    <div>

      <Welcome name="Serafino" nim="21120118130051"  namaMatkul={namaMatkul}/>
      
    </div>
  );
}
ReactDOM.render(
<App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
