import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react'


function App() {
  const [value,setvalue]=useState('');
  const handleClick = () => {
    setvalue('');
  };
  return (
    <div className='container'>
      <div className='caluclator'>
        <form>
          <div className='oldy'>
            <input type='text' value={value}/>
          </div>
          <div>
            <input type='button' value='C' onClick={handleClick} />
            <input type='button' value='('onClick={e => setvalue(value+e.target.value)} />
            <input type='button' value=')'onClick={e => setvalue(value+e.target.value)} />
            <input type='button' value='/'onClick={e => setvalue(value+e.target.value)} />
          </div>
          <div>
          <input type='button' value='7' onClick={e => setvalue(value+e.target.value)}/>
            <input type='button' value='8' onClick={e => setvalue(value+e.target.value)} />
            <input type='button' value='9' onClick={e => setvalue(value+e.target.value)} />
            <input type='button' value='*' onClick={e => setvalue(value+e.target.value)} />
          </div>
          <div>
          <input type='button' value='4'onClick={e => setvalue(value+e.target.value)} />
            <input type='button' value='5' onClick={e => setvalue(value+e.target.value)} />
            <input type='button' value='6' onClick={e => setvalue(value+e.target.value)} />
            <input type='button' value='-' onClick={e => setvalue(value+e.target.value)}/>     
          </div>
          <div>
          <input type='button' value='1' onClick={e => setvalue(value+e.target.value)} />
            <input type='button' value='2' onClick={e => setvalue(value+e.target.value)}/>
            <input type='button' value='3' onClick={e => setvalue(value+e.target.value)}/>
            <input type='button' value='+'onClick={e => setvalue(value+e.target.value)} />     
          </div>
          <div>
          <input type='button' value='DE' onClick={e => setvalue(value.slice(0,value.length-1))}/>
            <input type='button' value='0' onClick={e => setvalue(value+e.target.value)}/>
            <input type='button' value='.'onClick={e => setvalue(value+e.target.value)} />
            <input type='button' value='='onClick={e => setvalue(eval(value))} />     
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
