import './globals.css';
//import type {AppProps} from 'next/app';

export default function App() {
    return <div className="app-main">
        <h2>Create Images With Your Mind</h2>
        <textarea
            className="app-input"
            placeholder="Create any type of iamge you can think of with as much added descriptions as you would like"
        />
        <br></br>
        <button>Generate Image</button>
    </div>
}