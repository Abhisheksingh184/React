import { useState,useCallback ,useEffect} from 'react'
import './App.css'

function App() {
  const [length, setlength]=useState(8);
  const [numberallowed,setnumberallowed]=useState(false);
  const [characterallowed,setcharacterallowed]=useState(false);
  const [password,setpassword]=useState("");

  const passwordGenerator=useCallback(()=>{
    let pass =""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+="0123456789"
    if(characterallowed) str+="~!@#$%^&*+=[]{}'_"
    for(let i=1;i<=length;i++){
      let char =Math.floor(Math.random()*str.length+1)

      pass+=str.charAt(char)

    }
    setpassword(pass)

  },[length,numberallowed,characterallowed,setpassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberallowed,characterallowed,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readonly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1  ">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setlength(e.target.value)}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              onChange={() => {
                setnumberallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterallowed}
              id="characterInput"
              onChange={() => {
                setcharacterallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
